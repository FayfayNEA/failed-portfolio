"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { galleryCoverSrc } from "@/lib/framer-image";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface GalleryProject {
  slug: string;
  title: string;
  description: string;
  year: string;
  coverImage?: string;
  coverImageClassName?: string;
  coverColor?: string;
  coverImageFit?: "cover" | "contain";
  labelTextTone?: "light" | "dark";
  labelGlassTint?: "default" | "moss";
  href: string;
  metric?: string;
  tags?: [string, string];
  tagsInline?: boolean;
  typeTags?: string;
  hoverVideo?: string;
  cardVariant?: "portrait" | "landscape" | "standard";
  imageAreaClassName?: string; // mobile grid only
  canvasImageH?: number;       // desktop canvas — overrides VARIANT_IMG_H
  useVideoAsCover?: boolean;
}

// ─── Mobile grid heights ──────────────────────────────────────────────────────
const IMG_H_CLASS: Record<string, string> = {
  portrait:  "h-[320px] sm:h-[370px]",
  landscape: "h-[195px] sm:h-[230px]",
  standard:  "h-[230px] sm:h-[260px]",
};

// ─── Canvas constants ─────────────────────────────────────────────────────────
const COLS        = 2;
const GAP_X       = 44;
const GAP_Y       = 80;
const PAD         = 36;
const BASE_CARD_W = 380;

const VARIANT_IMG_H: Record<string, number> = {
  portrait:  420,
  landscape: 290,
  standard:  278,
};
const CANVAS_META_H = 142;
const MIN_CARD_W    = 220;
const MIN_CARD_H    = CANVAS_META_H + 80;


const SEL_GREEN = "#3a6148";
const SEL_GLOW  = "rgba(132,204,22,0.22)";

type Pos      = { x: number; y: number };
type CardSize = { w: number; h: number };

// ─── Helpers ──────────────────────────────────────────────────────────────────
function clamp(n: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, n)); }
function getScale(cw: number) { return Math.max(0.55, Math.min(1, cw / 1100)); }

function getDefaultSize(p: GalleryProject): CardSize {
  const imgH = p.canvasImageH ?? VARIANT_IMG_H[p.cardVariant ?? "standard"] ?? 278;
  return { w: BASE_CARD_W, h: imgH + CANVAS_META_H };
}

function computeInitialPositions(cw: number, projects: GalleryProject[], sc: number): Pos[] {
  const cardW = Math.round(BASE_CARD_W * sc);
  // Scaled card heights for each project
  const h = projects.map((p) => Math.round(getDefaultSize(p).h * sc));

  // Explicit per-card positions matching the intended layout:
  // [0] Eidolon     — well into the canvas from the left
  const p0: Pos = { x: Math.round(cw * 0.22), y: 8 };
  // [1] Buddy       — 20% inset from right edge, 30px lower than Eidolon
  const p1: Pos = { x: cw - cardW - 30 - Math.round(cw * 0.20), y: 38 };
  // [2] E*Trade     — centred, below the bottoms of both Eidolon and Buddy, 20px higher
  const p2: Pos = {
    x: Math.round((cw - cardW) / 2),
    y: Math.max(p0.y + (h[0] ?? 0), p1.y + (h[1] ?? 0)) + 10,
  };
  // [3] Fither      — 30px below E*Trade, shifted right + extra 10% of canvas
  const p3: Pos = {
    x: clamp(p2.x + Math.round(180 * sc) + Math.round(cw * 0.10), PAD, cw - cardW - 30),
    y: p2.y + (h[2] ?? 0) + 30,
  };
  // [4] N1ghtterrors — 30px below Fither, more to the right
  const p4: Pos = {
    x: clamp(PAD + Math.round(200 * sc), PAD, cw - cardW - 30),
    y: p3.y + (h[3] ?? 0) + 30,
  };
  // [5] JAHN         — below N1ghtterrors, horizontally centred + 20px right/down
  const p5: Pos = {
    x: clamp(Math.round((cw - cardW) / 2) + 20, PAD, cw - cardW - PAD),
    y: p4.y + (h[4] ?? 0) + 50,
  };

  const explicit: Pos[] = [p0, p1, p2, p3, p4, p5];

  return projects.map((_, i) => explicit[i] ?? { x: PAD, y: p5.y + (h[5] ?? 0) + 30 * (i - 4) });
}

// ─── Overlap resolution ───────────────────────────────────────────────────────
const OVERLAP_MARGIN = 20; // min gap between cards in px (screen space)

function resolveOverlaps(
  idx: number,
  pos: Pos,
  allPositions: Pos[],
  allSizes: CardSize[],
  sc: number,
  projectsList: GalleryProject[],
): Pos {
  const base  = allSizes[idx] ?? getDefaultSize(projectsList[idx]);
  const cardW = Math.round(base.w * sc);
  const cardH = Math.round(base.h * sc);
  const M     = OVERLAP_MARGIN;

  let p = { ...pos };

  for (let iter = 0; iter < 10; iter++) {
    let moved = false;
    for (let j = 0; j < allPositions.length; j++) {
      if (j === idx) continue;
      const jBase = allSizes[j] ?? getDefaultSize(projectsList[j]);
      const jW    = Math.round(jBase.w * sc);
      const jH    = Math.round(jBase.h * sc);
      const jp    = allPositions[j];
      if (!jp) continue;

      const ox = p.x < jp.x + jW + M && p.x + cardW > jp.x - M;
      const oy = p.y < jp.y + jH + M && p.y + cardH > jp.y - M;
      if (!ox || !oy) continue;

      // Push in the direction of minimum displacement
      const pushRight = jp.x + jW + M - p.x;
      const pushLeft  = p.x + cardW - (jp.x - M);
      const pushDown  = jp.y + jH + M - p.y;
      const pushUp    = p.y + cardH - (jp.y - M);

      const min = Math.min(pushRight, pushLeft, pushDown, pushUp);
      if      (min === pushRight) p.x += pushRight;
      else if (min === pushLeft)  p.x -= pushLeft;
      else if (min === pushDown)  p.y += pushDown;
      else                        p.y -= pushUp;

      moved = true;
    }
    if (!moved) break;
  }

  return p;
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function loadSizes(key: string, projects: GalleryProject[]): CardSize[] | null {
  try {
    const raw = localStorage.getItem(`${key}-sizes-by-slug`);
    if (!raw) return null;
    const map = JSON.parse(raw) as Record<string, CardSize>;
    return projects.map((p) => {
      const s   = map[p.slug];
      const def = getDefaultSize(p);
      return s?.w && s?.h
        ? { w: clamp(s.w, MIN_CARD_W, def.w * 3), h: clamp(s.h, MIN_CARD_H, def.h * 3) }
        : { ...def };
    });
  } catch { return null; }
}
function saveSizes(key: string, projects: GalleryProject[], sizes: CardSize[]) {
  const map: Record<string, CardSize> = {};
  projects.forEach((p, i) => { map[p.slug] = sizes[i] ?? getDefaultSize(p); });
  localStorage.setItem(`${key}-sizes-by-slug`, JSON.stringify(map));
}

// ─── Resize handles ───────────────────────────────────────────────────────────
const HANDLE_DIRS = [
  { dx: -1, dy: -1 }, { dx: 0, dy: -1 }, { dx: 1, dy: -1 },
  { dx: -1, dy:  0 },                     { dx: 1, dy:  0 },
  { dx: -1, dy:  1 }, { dx: 0, dy:  1 }, { dx: 1, dy:  1 },
] as const;
const HANDLE_CURSORS = [
  "nwse-resize","ns-resize","nesw-resize",
  "ew-resize",            "ew-resize",
  "nesw-resize","ns-resize","nwse-resize",
] as const;

function Handles({ onMouseDown }: { onMouseDown: (e: React.MouseEvent, i: number) => void }) {
  const pts = [
    "top-[-6px] left-[-6px]", "top-[-6px] left-1/2 -translate-x-1/2", "top-[-6px] right-[-6px]",
    "top-1/2 -translate-y-1/2 left-[-6px]",                            "top-1/2 -translate-y-1/2 right-[-6px]",
    "bottom-[-6px] left-[-6px]", "bottom-[-6px] left-1/2 -translate-x-1/2", "bottom-[-6px] right-[-6px]",
  ];
  return (
    <>
      {pts.map((p, i) => (
        <span key={i}
          className={cn("pointer-events-auto absolute z-50 h-3 w-3 rounded-[2px]", p)}
          style={{ border: `1.5px solid ${SEL_GREEN}`, background: "#fff", cursor: HANDLE_CURSORS[i] }}
          onMouseDown={(e) => { e.stopPropagation(); onMouseDown(e, i); }}
          aria-hidden
        />
      ))}
    </>
  );
}

// ─── Pills ────────────────────────────────────────────────────────────────────
function TypePills({ typeTags }: { typeTags: string }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {typeTags.split(" · ").map((t) => t.trim()).filter(Boolean).map((tag) => (
        <span key={tag} className="rounded-full bg-lime-500/[0.09] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-700 ring-1 ring-lime-400/55">
          {tag}
        </span>
      ))}
    </div>
  );
}
function MetricPills({ tags }: { tags: [string, string] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full px-2.5 py-1 font-mono text-[9px] font-medium tracking-[0.04em]"
          style={{ background: "rgba(0,0,0,0.055)", color: "#52525b", border: "0.5px solid rgba(0,0,0,0.09)" }}>
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Shared glass style ───────────────────────────────────────────────────────
const GLASS: React.CSSProperties = {
  background:           "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(240,255,240,0.12) 100%)",
  backdropFilter:       "blur(56px) saturate(280%) brightness(1.12)",
  WebkitBackdropFilter: "blur(56px) saturate(280%) brightness(1.12)",
  borderTop:            "1px solid rgba(163,230,53,0.55)",
  boxShadow:            "inset 0 2px 0 rgba(255,255,255,0.98), inset 0 -1px 0 rgba(163,230,53,0.14), 0 -12px 36px rgba(255,255,255,0.45)",
};

// ─── Mobile card ──────────────────────────────────────────────────────────────
function MobileCard({ project, priority, revealed, revealDelay }: {
  project: GalleryProject; priority: boolean; revealed: boolean; revealDelay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const videoCover = project.useVideoAsCover && !!project.hoverVideo;
  const variant    = project.cardVariant ?? "standard";
  const bg         = project.coverColor ?? "#ffffff";
  const objFit     = project.coverImageFit === "cover" ? "object-cover" : "object-contain";
  const imgCls     = project.imageAreaClassName ?? IMG_H_CLASS[variant];

  const handleEnter = () => { setHovered(true);  videoRef.current?.play().catch(() => {}); };
  const handleLeave = () => {
    setHovered(false);
    if (videoCover && videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <div className="relative"
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${SEL_GREEN}, 0 0 36px -6px ${SEL_GLOW}`
          : "0 0 0 0.5px rgba(58,97,72,0.22), 0 4px 20px -6px rgba(0,0,0,0.10)",
        transition: "box-shadow 240ms cubic-bezier(0.4,0,0.2,1)",
        opacity: revealed ? undefined : 0,
        animation: revealed
          ? `gallery-card-enter 0.7s cubic-bezier(0.22,1,0.36,1) ${revealDelay}ms both`
          : undefined,
      }}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
    >
      <Link href={project.href} className="absolute inset-0 z-20" aria-label={`Open ${project.title}`} />

      <div className={cn("relative w-full overflow-hidden", imgCls)} style={{ background: bg }}>
        {project.coverImage && !videoCover && (
          <Image src={galleryCoverSrc(project.coverImage) ?? project.coverImage} alt={project.title} fill
            className={cn(objFit, "object-center pointer-events-none transition-opacity duration-300",
              hovered && project.hoverVideo ? "opacity-0" : "opacity-100", project.coverImageClassName)}
            sizes="(max-width: 640px) 96vw, 48vw" quality={80} priority={priority}
            loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"}
            draggable={false} unoptimized />
        )}
        {project.hoverVideo && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video ref={videoRef} src={project.hoverVideo} autoPlay={!videoCover} muted loop playsInline
            preload={videoCover ? "metadata" : "auto"}
            className={cn("absolute inset-0 h-full w-full transition-opacity duration-300", objFit,
              videoCover ? "opacity-100" : hovered ? "opacity-100" : "opacity-0", project.coverImageClassName)}
            aria-hidden />
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-3 px-5 pt-4 pb-6" style={GLASS}>
        {project.typeTags && <TypePills typeTags={project.typeTags} />}
        <p className="font-mono text-[15.5px] font-semibold leading-snug tracking-tight text-zinc-800">{project.title}</p>
        <p className="text-[12px] leading-relaxed text-zinc-500">{project.description}</p>
        {project.tags && <MetricPills tags={project.tags} />}
      </div>
    </div>
  );
}

// ─── Desktop canvas gallery ───────────────────────────────────────────────────
export function CategoryGallery({ projects, storageKey }: { projects: GalleryProject[]; storageKey: string }) {
  // Detect desktop
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setIsDesktop(mq.matches);
    on(); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Scroll reveal
  const [revealed,   setRevealed]   = useState(false);
  const mobileRef    = useRef<HTMLDivElement>(null);

  // Canvas state
  const containerRef  = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(1100);
  const [positions,  setPositions]  = useState<Pos[]>([]);
  const [baseSizes,  setBaseSizes]  = useState<CardSize[]>(() => projects.map(getDefaultSize));
  const [zOrder,     setZOrder]     = useState<number[]>(() => projects.map((_, i) => i));
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [draggingIdx,setDraggingIdx]= useState<number | null>(null);
  const [ready,      setReady]      = useState(false);

  const dragRef      = useRef<{ idx: number; startMX: number; startMY: number; startPX: number; startPY: number } | null>(null);
  const resizeRef    = useRef<{ idx: number; handleIdx: number; startMX: number; startMY: number; startW: number; startH: number; startPX: number; startPY: number } | null>(null);
  const hasDragged   = useRef(false);
  const scaleRef     = useRef(getScale(1100));
  // Keep refs in sync so the global mouse handler always sees fresh state
  const baseSizesRef = useRef(baseSizes);
  useEffect(() => { baseSizesRef.current = baseSizes; }, [baseSizes]);

  // Video refs per card
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(projects.map(() => null));

  const scale = getScale(containerW);
  useEffect(() => { scaleRef.current = scale; }, [scale]);

  // Scroll-reveal: observe whichever container is active
  useEffect(() => {
    if (revealed) return;
    const el = isDesktop ? containerRef.current : mobileRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // rAF ensures React first paints opacity:0, then triggers the transition/animation
          requestAnimationFrame(() => setRevealed(true));
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isDesktop, revealed]);

  // Track container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    ro.observe(el); return () => ro.disconnect();
  }, []);

  // Initial layout
  useEffect(() => {
    if (!isDesktop) return;
    const el = containerRef.current;
    if (!el) return;
    const cw = el.getBoundingClientRect().width;
    setContainerW(cw);
    const sc = getScale(cw);
    const storedSizes = loadSizes(storageKey, projects);
    const storedPos   = localStorage.getItem(storageKey);
    let restored      = false;
    if (storedPos) {
      try {
        const parsed: Pos[] = JSON.parse(storedPos);
        if (Array.isArray(parsed) && parsed.length === projects.length) {
          setPositions(parsed);
          if (storedSizes) setBaseSizes(storedSizes);
          setReady(true); restored = true;
        }
      } catch { /* fall through */ }
    }
    if (!restored) {
      const initialSizes = projects.map(getDefaultSize);
      let initPos = computeInitialPositions(cw, projects, sc);
      // Sequentially resolve any stagger-induced overlaps
      for (let i = 0; i < initPos.length; i++) {
        initPos[i] = resolveOverlaps(i, initPos[i], initPos, initialSizes, sc, projects);
      }
      setPositions(initPos);
      setReady(true);
    }
  }, [isDesktop, projects, storageKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist positions
  useEffect(() => {
    if (!isDesktop || !ready || positions.length !== projects.length) return;
    localStorage.setItem(storageKey, JSON.stringify(positions));
  }, [isDesktop, positions, ready, projects.length, storageKey]);

  // Persist sizes
  useEffect(() => {
    if (!isDesktop || !ready || baseSizes.length !== projects.length) return;
    saveSizes(storageKey, projects, baseSizes);
  }, [baseSizes, isDesktop, ready, projects.length, storageKey]);

  // Re-clamp positions on container resize
  const prevW = useRef(0);
  useEffect(() => {
    if (!isDesktop || !ready || positions.length === 0) return;
    if (prevW.current === 0) { prevW.current = containerW; return; }
    if (prevW.current === containerW) return;
    const ratio = containerW / prevW.current;
    setPositions((prev) => prev.map((p) => ({ x: Math.max(0, p.x * ratio), y: Math.max(0, p.y) })));
    prevW.current = containerW;
  }, [containerW, isDesktop, ready]); // eslint-disable-line react-hooks/exhaustive-deps

  // Global mouse handlers
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const d = dragRef.current;
      if (d) {
        const dx = e.clientX - d.startMX, dy = e.clientY - d.startMY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true;
        setPositions((prev) => { const n = [...prev]; n[d.idx] = { x: d.startPX + dx, y: d.startPY + dy }; return n; });
        return;
      }
      const r = resizeRef.current;
      if (!r) return;
      const sc = scaleRef.current;
      if (Math.abs(e.clientX - r.startMX) > 2 || Math.abs(e.clientY - r.startMY) > 2) hasDragged.current = true;
      const rdx = (e.clientX - r.startMX) / sc, rdy = (e.clientY - r.startMY) / sc;
      const { dx: ndx, dy: ndy } = HANDLE_DIRS[r.handleIdx];
      let nw = r.startW, nh = r.startH, nx = r.startPX, ny = r.startPY;
      if (ndx !== 0) { nw = Math.max(MIN_CARD_W, r.startW + rdx * ndx); if (ndx < 0) nx = r.startPX + (r.startW - nw) * sc; }
      if (ndy !== 0) { nh = Math.max(MIN_CARD_H, r.startH + rdy * ndy); if (ndy < 0) ny = r.startPY + (r.startH - nh) * sc; }
      setBaseSizes((prev) => prev.map((s, j) => j === r.idx ? { w: nw, h: nh } : s));
      if (ndx < 0 || ndy < 0) setPositions((prev) => { const n = [...prev]; n[r.idx] = { x: nx, y: ny }; return n; });
    };
    const onUp = () => {
      const wasDrag = dragRef.current !== null && hasDragged.current;
      const dragIdx = dragRef.current?.idx ?? -1;
      dragRef.current = resizeRef.current = null;
      setDraggingIdx(null);

      if (wasDrag && dragIdx >= 0) {
        // Snap the dropped card out of any card it landed on
        setPositions((prev) => {
          const sc       = scaleRef.current;
          const resolved = resolveOverlaps(dragIdx, prev[dragIdx], prev, baseSizesRef.current, sc, projects);
          if (resolved.x === prev[dragIdx].x && resolved.y === prev[dragIdx].y) return prev;
          const next     = [...prev];
          next[dragIdx]  = resolved;
          return next;
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  const startDrag = useCallback((e: React.MouseEvent, idx: number) => {
    e.preventDefault(); hasDragged.current = false; setDraggingIdx(idx);
    dragRef.current = { idx, startMX: e.clientX, startMY: e.clientY, startPX: positions[idx]?.x ?? 0, startPY: positions[idx]?.y ?? 0 };
    setZOrder((prev) => [...prev.filter((n) => n !== idx), idx]);
  }, [positions]);

  const startResize = useCallback((e: React.MouseEvent, idx: number, handleIdx: number) => {
    e.preventDefault(); hasDragged.current = false; setDraggingIdx(idx);
    resizeRef.current = { idx, handleIdx, startMX: e.clientX, startMY: e.clientY, startW: baseSizes[idx]?.w ?? BASE_CARD_W, startH: baseSizes[idx]?.h ?? getDefaultSize(projects[idx]).h, startPX: positions[idx]?.x ?? 0, startPY: positions[idx]?.y ?? 0 };
    setZOrder((prev) => [...prev.filter((n) => n !== idx), idx]);
  }, [baseSizes, positions, projects]);

  // ── Mobile ────────────────────────────────────────────────────────────────
  if (!isDesktop) {
    return (
      <div ref={mobileRef} className="w-full px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-[min(900px,96vw)] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, i) => (
            <MobileCard key={project.slug} project={project} priority={i < 2}
              revealed={revealed} revealDelay={i * 70} />
          ))}
        </div>
      </div>
    );
  }

  // ── Desktop canvas ────────────────────────────────────────────────────────
  const sc = scale;

  // Compute canvas height from actual card positions
  let cvH = 600;
  positions.forEach((pos, i) => {
    const base  = baseSizes[i] ?? getDefaultSize(projects[i]);
    const cardH = Math.round(base.h * sc);
    cvH = Math.max(cvH, pos.y + cardH + PAD + 60);
  });

  return (
    <div ref={containerRef} className="relative w-full select-none" style={{ height: cvH }}>
      {ready && projects.map((project, i) => {
        const pos    = positions[i] ?? { x: 0, y: 0 };
        const z      = zOrder.indexOf(i);
        const base   = baseSizes[i] ?? getDefaultSize(project);
        const cardW  = Math.round(base.w * sc);
        const cardH  = Math.round(base.h * sc);
        const metaH  = Math.round(CANVAS_META_H * sc);
        const imageH = Math.max(0, cardH - metaH);
        const bg     = project.coverColor ?? "#ffffff";
        const objFit = project.coverImageFit === "cover" ? "object-cover" : "object-contain";
        const isHov  = hoveredIdx === i && draggingIdx === null;
        const videoCover = project.useVideoAsCover && !!project.hoverVideo;

        return (
          <div key={project.slug}
            className="absolute"
            style={{
              left: pos.x, top: pos.y, width: cardW, zIndex: z + 1,
              cursor: draggingIdx === i ? "grabbing" : "grab",
              opacity: revealed ? undefined : 0,
              animation: revealed
                ? `gallery-card-enter 0.72s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms both`
                : undefined,
              willChange: revealed ? "opacity, transform" : undefined,
            }}
            onMouseDown={(e) => startDrag(e, i)}
          >
            <div className="group relative"
              style={{ width: cardW, height: cardH }}
              onMouseDown={() => setZOrder((prev) => [...prev.filter((n) => n !== i), i])}
              onMouseEnter={() => {
                setHoveredIdx(i);
                const vr = videoRefs.current[i];
                if (vr) vr.play().catch(() => {});
              }}
              onMouseLeave={() => {
                setHoveredIdx(null);
                const vr = videoRefs.current[i];
                if (vr && videoCover) { vr.pause(); vr.currentTime = 0; }
              }}
            >
              {/* Selection border */}
              <div className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-150"
                style={{ opacity: isHov ? 1 : 0, boxShadow: `inset 0 0 0 1.5px ${SEL_GREEN}` }} />

              {/* Resize handles */}
              <div className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-150"
                style={{ opacity: isHov ? 1 : 0 }}>
                <Handles onMouseDown={(e, hi) => startResize(e, i, hi)} />
              </div>

              {/* Image area */}
              <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: imageH, background: bg }}>
                {project.coverImage && !videoCover && (
                  <Image src={galleryCoverSrc(project.coverImage) ?? project.coverImage} alt={project.title} fill
                    className={cn(objFit, "object-center pointer-events-none transition-opacity duration-300",
                      isHov && project.hoverVideo ? "opacity-0" : "opacity-100", project.coverImageClassName)}
                    sizes="420px" quality={80} priority={i < 2} draggable={false} unoptimized />
                )}
                {project.hoverVideo && (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={project.hoverVideo} autoPlay={!videoCover} muted loop playsInline
                    preload={videoCover ? "metadata" : "auto"}
                    className={cn("absolute inset-0 h-full w-full transition-opacity duration-300", objFit,
                      videoCover ? "opacity-100" : isHov ? "opacity-100" : "opacity-0",
                      project.coverImageClassName)}
                    aria-hidden />
                )}
              </div>

              {/* Liquid glass metadata — absolute so it's a sibling of image, not nested */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-between px-4 pt-3 pb-4"
                style={{ top: imageH, ...GLASS }}>
                <div className="flex flex-col gap-2">
                  {project.typeTags && <TypePills typeTags={project.typeTags} />}
                  <p className="font-mono font-semibold leading-snug tracking-tight text-zinc-800"
                    style={{ fontSize: Math.round(15 * sc) }}>
                    {project.title}
                  </p>
                  <p className="leading-relaxed text-zinc-500"
                    style={{ fontSize: Math.round(11.5 * sc) }}>
                    {project.description}
                  </p>
                </div>
                {project.tags && <MetricPills tags={project.tags} />}
              </div>

              {/* Click overlay — above glass, below handles */}
              <Link href={project.href} className="absolute inset-0 z-20"
                onClick={(e) => { if (hasDragged.current) e.preventDefault(); }}
                aria-label={`Open ${project.title}`} />
            </div>
          </div>
        );
      })}

      <p className="pointer-events-none absolute bottom-4 right-6 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
        Drag to rearrange
      </p>
    </div>
  );
}
