"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Tailwind `lg` is 1024px — below that we use a scrollable stack instead of the
 * overlapping draggable deck (tablets at 768–1023px were still on the deck and looked broken).
 */
function useStackGalleryLayout() {
  const [stack, setStack] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1023px)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const on = () => setStack(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return stack;
}

/** Framer CDN thumbs: request a modest width so bytes are small without `/_next/image` latency. */
const GALLERY_FRAMER_MAX_W = 800;

function galleryCoverSrc(src: string | undefined): string | undefined {
  if (!src) return undefined;
  if (!src.includes("framerusercontent.com/images")) return src;
  try {
    const u = new URL(src);
    u.searchParams.set("width", String(GALLERY_FRAMER_MAX_W));
    u.searchParams.delete("height");
    return u.toString();
  } catch {
    return src;
  }
}

export interface GalleryProject {
  slug: string;
  title: string;
  description: string;
  year: string;
  /** Remote image URL. Omit to show a solid colour placeholder instead. */
  coverImage?: string;
  /** Extra classes on the cover `<Image />` (e.g. `rotate-90` for orientation). */
  coverImageClassName?: string;
  /** Fallback background colour when no coverImage is provided. */
  coverColor?: string;
  /** "cover" (default) fills the card; "contain" fits the whole image inside. */
  coverImageFit?: "cover" | "contain";
  /** Optional override for the bottom label text colour. */
  labelTextTone?: "light" | "dark";
  /** Optional per-project tint for the liquid-glass title card. */
  labelGlassTint?: "default" | "moss";
  href: string;
}

type Pos = { x: number; y: number };
type CardSize = { w: number; h: number };

// Fractional default positions — multiplied by container w/h at runtime so
// everything stays on-screen regardless of viewport size.
const DEFAULTS_PCT: Pos[] = [
  { x: 0.04, y: 0.07 },
  { x: 0.32, y: 0.46 },
  { x: 0.52, y: 0.08 },
  { x: 0.72, y: 0.42 },
  { x: 0.22, y: 0.25 },
  { x: 0.62, y: 0.62 },
];

const BASE_CARD_W = 300;
const BASE_CARD_H = 250;
const BASE_GLASS_H = 76;
const MIN_CARD_W = 120;
const MIN_CARD_H = 100;

/** Scale cards down as the container narrows. Full size at ≥950 px wide. */
function getScale(containerW: number): number {
  return Math.max(0.5, Math.min(1, containerW / 950));
}

const SEL_GREEN = "#3a6148";

// Each handle's resize direction vector.
// dx/dy = -1 (shrink/move that edge left/up), 0 (no effect), 1 (grow right/down)
const HANDLE_DIRS = [
  { dx: -1, dy: -1 }, // 0 top-left
  { dx:  0, dy: -1 }, // 1 top-mid
  { dx:  1, dy: -1 }, // 2 top-right
  { dx: -1, dy:  0 }, // 3 left-mid
  { dx:  1, dy:  0 }, // 4 right-mid
  { dx: -1, dy:  1 }, // 5 bottom-left
  { dx:  0, dy:  1 }, // 6 bottom-mid
  { dx:  1, dy:  1 }, // 7 bottom-right
] as const;

const HANDLE_CURSORS = [
  "nwse-resize",
  "ns-resize",
  "nesw-resize",
  "ew-resize",
  "ew-resize",
  "nesw-resize",
  "ns-resize",
  "nwse-resize",
] as const;

/** Eight Figma-style selection handles — deep green, each with its resize cursor. */
function Handles({
  onMouseDown,
}: {
  onMouseDown: (e: React.MouseEvent, handleIdx: number) => void;
}) {
  const pts = [
    "top-[-6px] left-[-6px]",
    "top-[-6px] left-1/2 -translate-x-1/2",
    "top-[-6px] right-[-6px]",
    "top-1/2 -translate-y-1/2 left-[-6px]",
    "top-1/2 -translate-y-1/2 right-[-6px]",
    "bottom-[-6px] left-[-6px]",
    "bottom-[-6px] left-1/2 -translate-x-1/2",
    "bottom-[-6px] right-[-6px]",
  ];
  return (
    <>
      {pts.map((p, i) => (
        <span
          key={i}
          className={cn("pointer-events-auto absolute z-30 h-3 w-3 rounded-[2px]", p)}
          style={{
            border: `1.5px solid ${SEL_GREEN}`,
            background: "#fff",
            cursor: HANDLE_CURSORS[i],
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            onMouseDown(e, i);
          }}
          aria-hidden
        />
      ))}
    </>
  );
}

export function CategoryGallery({
  projects,
  storageKey,
}: {
  projects: GalleryProject[];
  storageKey: string;
}) {
  const isStackLayout = useStackGalleryLayout();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 1200, h: 700 });
  const [positions, setPositions] = useState<Pos[]>([]);
  const [baseSizes, setBaseSizes] = useState<CardSize[]>(() =>
    projects.map(() => ({ w: BASE_CARD_W, h: BASE_CARD_H }))
  );
  const [zOrder, setZOrder] = useState<number[]>(() =>
    projects.map((_, i) => i)
  );
  const [ready, setReady] = useState(false);

  const dragRef = useRef<{
    idx: number;
    startMX: number;
    startMY: number;
    startPX: number;
    startPY: number;
  } | null>(null);

  const resizeRef = useRef<{
    idx: number;
    handleIdx: number;
    startMX: number;
    startMY: number;
    startW: number;
    startH: number;
    startPX: number;
    startPY: number;
  } | null>(null);

  const hasDragged = useRef(false);
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);

  // Keep a ref to the current scale so event handlers always see a fresh value
  // without needing to be re-registered on every container resize.
  const scale = getScale(containerSize.w);
  const scaleRef = useRef(scale);
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  // Track container size via ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setContainerSize({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Set initial positions + sizes from localStorage or defaults
  useEffect(() => {
    if (isStackLayout) {
      setReady(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const { width: cw, height: ch } = el.getBoundingClientRect();
    // Sync containerSize state with the real measured width immediately so the
    // re-clamping effect never sees a stale initial value (1200×700) and
    // incorrectly rescales saved positions on the second visit.
    setContainerSize({ w: cw, h: ch });
    const sc = getScale(cw);
    const cw_ = Math.round(BASE_CARD_W * sc);
    const ch_ = Math.round(BASE_CARD_H * sc);

    // --- positions ---
    const storedPos = localStorage.getItem(storageKey);
    if (storedPos) {
      try {
        const parsed: Pos[] = JSON.parse(storedPos);
        if (Array.isArray(parsed) && parsed.length === projects.length) {
          setPositions(
            parsed.map((pos) => ({
              x: Math.max(0, Math.min(pos.x, cw - cw_ - 8)),
              y: Math.max(0, Math.min(pos.y, ch - ch_ - 8)),
            }))
          );
          setReady(true);
          // still fall through to load sizes below
        }
      } catch {
        // fall through
      }
    }

    if (!storedPos) {
      setPositions(
        projects.map((_, i) => {
          const pct = DEFAULTS_PCT[i % DEFAULTS_PCT.length];
          return {
            x: Math.min(pct.x * cw, cw - cw_ - 8),
            y: Math.min(pct.y * ch, ch - ch_ - 8),
          };
        })
      );
      setReady(true);
    }

    // --- sizes ---
    const storedSizes = localStorage.getItem(`${storageKey}-sizes`);
    if (storedSizes) {
      try {
        const parsed: CardSize[] = JSON.parse(storedSizes);
        if (Array.isArray(parsed) && parsed.length === projects.length) {
          setBaseSizes(parsed);
        }
      } catch {
        // ignore
      }
    }
  }, [isStackLayout, projects, storageKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist positions to localStorage whenever they change
  useEffect(() => {
    if (isStackLayout) return;
    if (ready && positions.length === projects.length) {
      localStorage.setItem(storageKey, JSON.stringify(positions));
    }
  }, [isStackLayout, positions, ready, projects.length, storageKey]);

  // Persist sizes to localStorage whenever they change
  useEffect(() => {
    if (isStackLayout) return;
    if (ready && baseSizes.length === projects.length) {
      localStorage.setItem(`${storageKey}-sizes`, JSON.stringify(baseSizes));
    }
  }, [baseSizes, isStackLayout, ready, projects.length, storageKey]);

  // Re-clamp + proportionally scale positions when the container resizes
  const prevSize = useRef({ w: 0, h: 0 });
  useEffect(() => {
    if (isStackLayout) return;
    if (!ready || positions.length === 0) return;
    const { w: newW, h: newH } = containerSize;
    const { w: oldW, h: oldH } = prevSize.current;
    if (oldW === 0) {
      prevSize.current = { w: newW, h: newH };
      return;
    }
    if (newW === oldW && newH === oldH) return;

    const sc = getScale(newW);
    const cw_ = Math.round(BASE_CARD_W * sc);
    const ch_ = Math.round(BASE_CARD_H * sc);

    setPositions((prev) =>
      prev.map((pos) => ({
        x: Math.max(0, Math.min(pos.x * (newW / oldW), newW - cw_ - 8)),
        y: Math.max(0, Math.min(pos.y * (newH / oldH), newH - ch_ - 8)),
      }))
    );
    prevSize.current = { w: newW, h: newH };
  }, [containerSize, isStackLayout, ready]); // eslint-disable-line react-hooks/exhaustive-deps

  // Global mousemove / mouseup — handles both drag and resize
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // ── Drag ──────────────────────────────────────────────────────────────
      const d = dragRef.current;
      if (d) {
        const dx = e.clientX - d.startMX;
        const dy = e.clientY - d.startMY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true;
        setPositions((prev) => {
          const next = [...prev];
          next[d.idx] = { x: d.startPX + dx, y: d.startPY + dy };
          return next;
        });
        return;
      }

      // ── Resize ────────────────────────────────────────────────────────────
      const r = resizeRef.current;
      if (!r) return;

      const sc = scaleRef.current;
      // Convert screen delta to "base" (scale=1) coordinates
      const rawDx = (e.clientX - r.startMX) / sc;
      const rawDy = (e.clientY - r.startMY) / sc;

      if (
        Math.abs(e.clientX - r.startMX) > 2 ||
        Math.abs(e.clientY - r.startMY) > 2
      ) {
        hasDragged.current = true;
      }

      const { dx: ndx, dy: ndy } = HANDLE_DIRS[r.handleIdx];

      let newW = r.startW;
      let newH = r.startH;
      let newPX = r.startPX;
      let newPY = r.startPY;

      if (ndx !== 0) {
        // ndx > 0 → right handle: grows rightward (rawDx > 0 = bigger)
        // ndx < 0 → left handle: grows leftward (rawDx < 0 = bigger, i.e. -rawDx)
        const deltaW = rawDx * ndx;
        newW = Math.max(MIN_CARD_W, r.startW + deltaW);
        if (ndx < 0) {
          // Left edge moved — anchor the right side, shift position
          newPX = r.startPX + (r.startW - newW) * sc;
        }
      }

      if (ndy !== 0) {
        const deltaH = rawDy * ndy;
        newH = Math.max(MIN_CARD_H, r.startH + deltaH);
        if (ndy < 0) {
          // Top edge moved — anchor the bottom side, shift position
          newPY = r.startPY + (r.startH - newH) * sc;
        }
      }

      setBaseSizes((prev) => {
        const next = [...prev];
        next[r.idx] = { w: newW, h: newH };
        return next;
      });

      // Only update position when a left or top handle is active
      if (ndx < 0 || ndy < 0) {
        setPositions((prev) => {
          const next = [...prev];
          next[r.idx] = { x: newPX, y: newPY };
          return next;
        });
      }
    };

    const onUp = () => {
      dragRef.current = null;
      resizeRef.current = null;
      setDraggingIdx(null);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []); // scaleRef is a ref — always fresh, no dep needed

  const startDrag = useCallback(
    (e: React.MouseEvent, idx: number) => {
      e.preventDefault();
      hasDragged.current = false;
      setDraggingIdx(idx);
      dragRef.current = {
        idx,
        startMX: e.clientX,
        startMY: e.clientY,
        startPX: positions[idx]?.x ?? 0,
        startPY: positions[idx]?.y ?? 0,
      };
      setZOrder((prev) => {
        const next = prev.filter((n) => n !== idx);
        return [...next, idx];
      });
    },
    [positions]
  );

  const startResize = useCallback(
    (e: React.MouseEvent, idx: number, handleIdx: number) => {
      e.preventDefault();
      hasDragged.current = false;
      setDraggingIdx(idx);
      resizeRef.current = {
        idx,
        handleIdx,
        startMX: e.clientX,
        startMY: e.clientY,
        startW: baseSizes[idx]?.w ?? BASE_CARD_W,
        startH: baseSizes[idx]?.h ?? BASE_CARD_H,
        startPX: positions[idx]?.x ?? 0,
        startPY: positions[idx]?.y ?? 0,
      };
      setZOrder((prev) => {
        const next = prev.filter((n) => n !== idx);
        return [...next, idx];
      });
    },
    [baseSizes, positions]
  );

  const bringToFront = useCallback((idx: number) => {
    setZOrder((prev) => {
      const next = prev.filter((n) => n !== idx);
      return [...next, idx];
    });
  }, []);

  if (isStackLayout) {
    return (
      <div
        ref={containerRef}
        className="h-full w-full touch-pan-y overflow-y-auto overscroll-y-contain px-3 pb-28 pt-3 sm:px-4"
      >
        <ul
          className="mx-auto flex max-w-md flex-col gap-5 sm:gap-6"
          aria-label="Projects in this category"
        >
          {projects.map((project) => {
            const labelTone = project.labelTextTone ?? "light";
            return (
              <li key={project.slug}>
                <Link
                  href={project.href}
                  className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.05] transition-transform active:scale-[0.99]"
                >
                  {/* Image only — text lives below so long titles never stack into the next card */}
                  <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: project.coverColor ?? "#728C69" }}
                    />
                    {project.coverImage && (
                      <Image
                        src={galleryCoverSrc(project.coverImage) ?? project.coverImage}
                        alt={project.title}
                        fill
                        className={cn(
                          project.coverImageFit === "contain"
                            ? "object-contain"
                            : "object-cover",
                          project.coverImageClassName
                        )}
                        sizes="(max-width: 1024px) min(100vw, 440px), 420px"
                        draggable={false}
                        unoptimized
                      />
                    )}
                    {/* Covers baked-in “Frame 01” labels from Framer exports; shows real project title */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] bg-gradient-to-b from-black/55 via-black/25 to-transparent px-3 pb-8 pt-2">
                      <p className="line-clamp-2 font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] sm:text-[11px]">
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex shrink-0 flex-col justify-center gap-1 border-t border-zinc-200/40 px-4 py-3"
                    style={{
                      backdropFilter: "blur(14px) saturate(160%)",
                      WebkitBackdropFilter: "blur(14px) saturate(160%)",
                      background:
                        project.labelGlassTint === "moss"
                          ? "rgba(114,140,105,0.16)"
                          : "rgba(248,250,252,0.92)",
                      boxShadow:
                        project.labelGlassTint === "moss"
                          ? "inset 0 1px 0 rgba(255,255,255,0.12)"
                          : "inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <p
                      className={cn(
                        "text-[0.9rem] font-medium leading-snug tracking-tight sm:text-[0.95rem]",
                        labelTone === "dark" ? "text-zinc-900" : "text-zinc-800"
                      )}
                    >
                      {project.title}
                      <span
                        className={cn(
                          "mx-1.5 font-light",
                          labelTone === "dark" ? "text-zinc-500" : "text-zinc-500"
                        )}
                      >
                        ·
                      </span>
                      <span className="font-normal text-zinc-500">{project.year}</span>
                    </p>
                    <p
                      className={cn(
                        "line-clamp-2 text-[0.78rem] leading-snug sm:text-[0.8rem]",
                        labelTone === "dark" ? "text-zinc-600" : "text-zinc-600"
                      )}
                    >
                      {project.description}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-zinc-400">
          Tap a card to open
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden select-none"
    >
      {ready &&
        projects.map((project, i) => {
          const pos = positions[i] ?? { x: 0, y: 0 };
          const z = zOrder.indexOf(i);
          const base = baseSizes[i] ?? { w: BASE_CARD_W, h: BASE_CARD_H };
          const cardW = Math.round(base.w * scale);
          const cardH = Math.round(base.h * scale);
          const labelTone = project.labelTextTone ?? "light";
          // Glass + font scale relative to the card's own size
          const cardScaleRatio = base.w / BASE_CARD_W;
          const glassH = Math.round(BASE_GLASS_H * scale * cardScaleRatio);
          const frameFontSize = Math.max(8, Math.round(10 * scale * cardScaleRatio));
          const titleFontSize = Math.max(10, Math.round(13 * scale * cardScaleRatio));
          const descFontSize = Math.max(9, Math.round(11 * scale * cardScaleRatio));

          return (
            <div
              key={project.slug}
              className="absolute"
              style={{
                left: pos.x,
                top: pos.y,
                width: cardW,
                zIndex: z + 1,
                cursor:
                  draggingIdx === i ? "grabbing" : "grab",
              }}
              onMouseDown={(e) => startDrag(e, i)}
            >
              {/* Title above card (Framer art often still contains “Frame NN” inside the bitmap) */}
              <p
                className="mb-1 line-clamp-2 max-w-full font-mono font-medium uppercase tracking-[0.08em] text-zinc-600 pointer-events-none"
                style={{ fontSize: Math.max(9, frameFontSize) }}
              >
                {project.title}
              </p>

              {/* Card */}
              <div
                className="group relative"
                style={{ width: cardW, height: cardH }}
                onMouseDown={() => bringToFront(i)}
              >
                {/* Selection border on hover */}
                <div
                  className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-150 opacity-0 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1.5px ${SEL_GREEN}` }}
                />

                {/* Resize handles on hover — outside overflow-hidden so they aren't clipped */}
                <div className="pointer-events-none absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <Handles
                    onMouseDown={(e, handleIdx) => startResize(e, i, handleIdx)}
                  />
                </div>

                {/* Card content — clipped to frame bounds */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Background colour */}
                  <div
                    className="absolute inset-0"
                    style={{ background: project.coverColor ?? "#728C69" }}
                  />

                  {/* Cover image */}
                  {project.coverImage && (
                    <Image
                      src={galleryCoverSrc(project.coverImage) ?? project.coverImage}
                      alt={project.title}
                      fill
                      className={cn(
                        project.coverImageFit === "contain"
                          ? "object-contain"
                          : "object-cover",
                        "pointer-events-none",
                        project.coverImageClassName
                      )}
                      sizes={`${Math.min(cardW * 2, 900)}px`}
                      draggable={false}
                      unoptimized
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-[5] bg-gradient-to-b from-black/55 via-black/25 to-transparent px-2 pb-6 pt-1"
                    style={{ paddingLeft: Math.max(6, Math.round(8 * cardScaleRatio)), paddingRight: Math.max(6, Math.round(8 * cardScaleRatio)) }}
                  >
                    <p
                      className="line-clamp-2 font-mono font-medium uppercase leading-tight tracking-[0.1em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      style={{ fontSize: Math.max(8, Math.round(9 * cardScaleRatio)) }}
                    >
                      {project.title}
                    </p>
                  </div>

                  {/* Liquid glass label */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-center gap-1 px-4"
                    style={{
                      height: glassH,
                      backdropFilter: "blur(14px) saturate(160%)",
                      WebkitBackdropFilter: "blur(14px) saturate(160%)",
                      background:
                        project.labelGlassTint === "moss"
                          ? "rgba(114,140,105,0.22)"
                          : "rgba(255,255,255,0.18)",
                      borderTop:
                        project.labelGlassTint === "moss"
                          ? "0.5px solid rgba(114,140,105,0.38)"
                          : "0.5px solid rgba(255,255,255,0.38)",
                      boxShadow:
                        project.labelGlassTint === "moss"
                          ? "inset 0 1px 0 rgba(255,255,255,0.18)"
                          : "inset 0 1px 0 rgba(255,255,255,0.28)",
                    }}
                  >
                    <p
                      className={cn(
                        "font-medium leading-snug tracking-tight drop-shadow-sm",
                        labelTone === "dark" ? "text-black/90" : "text-white"
                      )}
                      style={{ fontSize: titleFontSize }}
                    >
                      {project.title}
                      <span
                        className={cn(
                          "mx-1.5 font-light",
                          labelTone === "dark" ? "text-black/40" : "text-white/50"
                        )}
                      >
                        ·
                      </span>
                      <span
                        className={cn(
                          "font-normal",
                          labelTone === "dark" ? "text-black/55" : "text-white/60"
                        )}
                      >
                        {project.year}
                      </span>
                    </p>
                    <p
                      className={cn(
                        "leading-snug line-clamp-1",
                        labelTone === "dark" ? "text-black/60" : "text-white/65"
                      )}
                      style={{ fontSize: descFontSize }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Click-through link — suppressed if user dragged */}
                  <Link
                    href={project.href}
                    className="absolute inset-0 z-20"
                    onClick={(e) => {
                      if (hasDragged.current) e.preventDefault();
                    }}
                    aria-label={`Open ${project.title}`}
                  />
                </div>
              </div>
            </div>
          );
        })}

      {/* Hint */}
      <p className="pointer-events-none absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
        Drag to rearrange · handles to resize
      </p>
    </div>
  );
}
