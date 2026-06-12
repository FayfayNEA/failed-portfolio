"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback, type CSSProperties } from "react";
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
  /** Hover video zoom via inline transform (reliable on video elements). Still uses coverImageClassName. */
  coverVideoScale?: number;
  /** Extra video classes (no scale-* — use coverVideoScale). object-fit follows coverImageFit. */
  coverVideoClassName?: string;
  /** Shared focal point for still + hover video (e.g. "center 36%") to prevent hover shift. */
  coverObjectPosition?: string;
  coverColor?: string;
  coverImageFit?: "cover" | "contain";
  /** mix-blend-mode applied to both still + video layers — "multiply" removes white backgrounds */
  coverBlendMode?: string;
  labelTextTone?: "light" | "dark";
  labelGlassTint?: "default" | "moss";
  href: string;
  metric?: string;
  tags?: [string, string] | [string, string, string];
  tagsInline?: boolean;
  typeTags?: string;
  hoverVideo?: string;
  cardVariant?: "portrait" | "landscape" | "standard";
  imageAreaClassName?: string; // mobile grid only
  canvasImageH?: number;       // desktop canvas — overrides VARIANT_IMG_H
  canvasCardW?: number;        // desktop canvas — overrides BASE_CARD_W
  pillTheme?: "green" | "purple" | "blue" | "gray" | "black" | "teal" | "orange" | "parchment";
  /** When true, the hoverVideo autoplays and loops continuously without needing hover. */
  autoplaying?: boolean;
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
const BASE_CARD_W = 500;

const VARIANT_IMG_H: Record<string, number> = {
  portrait:  552,
  landscape: 380,
  standard:  364,
};
const CANVAS_META_H = 176;
const MIN_CARD_W    = 220;
const MIN_CARD_H    = CANVAS_META_H + 80;


const SEL_GREEN = "#3a6148";
const SEL_GLOW  = "rgba(132,204,22,0.22)";

/** Hover dissolve — light opacity + hint of blur (no scale animation). */
const MEDIA_CROSSFADE_MS = 50;
const MEDIA_CROSSFADE_EASE = "cubic-bezier(0.33, 0, 0.2, 1)";
const MEDIA_BLUR_PX = 1;

const MEDIA_LAYER_TRANSITION = `opacity ${MEDIA_CROSSFADE_MS}ms ${MEDIA_CROSSFADE_EASE}, filter ${MEDIA_CROSSFADE_MS}ms ${MEDIA_CROSSFADE_EASE}`;

function parseScaleFromClassName(className?: string): number {
  const m = className?.match(/scale-\[([\d.]+)\]/);
  return m ? Number.parseFloat(m[1]) : 1;
}

function getCoverImageScale(project: GalleryProject): number {
  return parseScaleFromClassName(project.coverImageClassName);
}

function getCoverVideoScale(project: GalleryProject): number {
  if (project.coverVideoScale != null) return project.coverVideoScale;
  return getCoverImageScale(project);
}

function stripScaleClass(className?: string): string | undefined {
  if (!className) return undefined;
  const stripped = className.replace(/\s*scale-\[[^\]]+\]\s*/g, " ").trim();
  return stripped || undefined;
}

function galleryHoverVideoClassName(
  project: GalleryProject,
  objFit: string,
  opacityClass: string,
): string {
  const base = "absolute inset-0 h-full w-full";
  return cn(
    base,
    objFit,
    !project.coverObjectPosition && "object-center",
    opacityClass,
    project.coverVideoClassName,
  );
}

function galleryHoverVideoStyle(project: GalleryProject, showVideo: boolean): CSSProperties {
  const pos = project.coverObjectPosition;
  return {
    objectPosition: pos ?? "center",
    transition: MEDIA_LAYER_TRANSITION,
    filter: showVideo ? "blur(0px)" : `blur(${MEDIA_BLUR_PX}px)`,
  };
}

function galleryHoverVideoWrapStyle(project: GalleryProject): CSSProperties {
  return {
    transform: `scale(${getCoverVideoScale(project)})`,
    transformOrigin: "center center",
  };
}

function galleryStillImageStyle(project: GalleryProject, showVideo: boolean): CSSProperties {
  const pos = project.coverObjectPosition;
  return {
    objectPosition: pos ?? "center",
    transform: `scale(${getCoverImageScale(project)})`,
    transformOrigin: "center center",
    transition: MEDIA_LAYER_TRANSITION,
    filter: showVideo ? `blur(${MEDIA_BLUR_PX}px)` : "blur(0px)",
    ...(project.coverBlendMode ? { mixBlendMode: project.coverBlendMode as CSSProperties["mixBlendMode"] } : {}),
  };
}

function galleryStillImageClassName(
  project: GalleryProject,
  objFit: string,
  opacityClass: string,
): string {
  return cn(
    objFit,
    !project.coverObjectPosition && "object-center",
    "pointer-events-none",
    opacityClass,
    stripScaleClass(project.coverImageClassName),
  );
}

/** Still over video; crossfade only after the frame is ready (poster until then). */
function HoverCrossfadeMedia({
  project,
  active,
  objFit,
  priority,
  sizes,
  onVideoEl,
}: {
  project: GalleryProject;
  active: boolean;
  objFit: string;
  priority?: boolean;
  sizes: string;
  onVideoEl?: (el: HTMLVideoElement | null) => void;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const videoCover  = project.useVideoAsCover && !!project.hoverVideo;
  const autoplaying = !!project.autoplaying;
  const [frameReady, setFrameReady] = useState(false);

  // autoplaying cards: video always plays + visible.
  // videoCover cards: always visible (first frame), plays only on hover.
  // Regular hover videos: fade in when active + frame loaded.
  const effectiveActive = autoplaying || active;
  const videoVisible    = videoCover || autoplaying ? true : active && frameReady;
  const crossfade       = effectiveActive && frameReady;

  useEffect(() => {
    const v = ref.current;
    if (!v || !project.hoverVideo) return;

    if (!effectiveActive) {
      const t = window.setTimeout(() => {
        v.pause();
        if (!videoCover && !autoplaying) setFrameReady(false);
      }, MEDIA_CROSSFADE_MS);
      return () => window.clearTimeout(t);
    }

    const markReady = () => setFrameReady(true);
    if (v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) markReady();
    else v.addEventListener("loadeddata", markReady, { once: true });

    v.play().catch(() => {});

    return () => v.removeEventListener("loadeddata", markReady);
  }, [effectiveActive, project.hoverVideo, videoCover, autoplaying]);

  return (
    <>
      {project.hoverVideo && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={project.coverBlendMode ? { mixBlendMode: project.coverBlendMode as CSSProperties["mixBlendMode"] } : undefined}>
          <div
            className="absolute inset-0 will-change-[transform,filter]"
            style={galleryHoverVideoWrapStyle(project)}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={(el) => {
                ref.current = el;
                onVideoEl?.(el);
              }}
              src={project.hoverVideo}
              poster={project.coverImage}
              autoPlay={false}
              muted
              loop
              playsInline
              preload="auto"
              className={galleryHoverVideoClassName(
                project,
                objFit,
                videoVisible ? "opacity-100" : "opacity-0",
              )}
              style={galleryHoverVideoStyle(project, videoVisible)}
              aria-hidden
            />
          </div>
        </div>
      )}
      {project.coverImage && (
        <Image
          src={galleryCoverSrc(project.coverImage) ?? project.coverImage}
          alt={project.title}
          fill
          className={cn(
            galleryStillImageClassName(
              project,
              objFit,
              crossfade && project.hoverVideo ? "opacity-0" : "opacity-100",
            ),
            "z-[1]",
          )}
          style={project.hoverVideo ? galleryStillImageStyle(project, crossfade) : undefined}
          sizes={sizes}
          quality={80}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
          unoptimized
        />
      )}
      {/* Match video letterboxing when still is hidden */}
    </>
  );
}

type Pos      = { x: number; y: number };
type CardSize = { w: number; h: number };

// ─── Helpers ──────────────────────────────────────────────────────────────────
function clamp(n: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, n)); }
const DEFAULT_REF_WIDTH = 1500;
/** Scale = viewport / design width. Uncapped — layout fills the viewport proportionally
 *  at every size, so shrinking and growing the browser produces a true reversible response.
 *  Earlier capping caused the "cards don't shrink/grow with the browser" complaint. */
function computeScale(cw: number, refW: number) { return cw / refW; }

function getDefaultSize(p: GalleryProject, metaH = CANVAS_META_H): CardSize {
  const imgH = p.canvasImageH ?? VARIANT_IMG_H[p.cardVariant ?? "standard"] ?? 278;
  return { w: p.canvasCardW ?? BASE_CARD_W, h: imgH + metaH };
}

function computeInitialPositions(cw: number, projects: GalleryProject[], sc: number, metaH = CANVAS_META_H): Pos[] {
  const cardW = Math.round(BASE_CARD_W * sc);
  // Scaled card heights for each project
  const h = projects.map((p) => Math.round(getDefaultSize(p, metaH).h * sc));

  // Explicit per-card positions matching the intended layout:
  // [0] Eidolon     — well into the canvas from the left
  const p0: Pos = { x: Math.round(cw * 0.24) - 10, y: 8 };
  // [1] Buddy       — closer to right edge (+20% down)
  const p1: Pos = { x: cw - cardW - Math.round(cw * 0.08), y: 38 + Math.round(cw * 0.28) };
  // [2] E*Trade     — right of center, clears Buddy
  const p2: Pos = {
    x: Math.round((cw - cardW) / 2) - Math.round(cw * 0.11),
    y: Math.max(p0.y + (h[0] ?? 0), p1.y + (h[1] ?? 0)) - 140 + Math.round(cw * 0.05),
  };
  // [3] Fither      — 30px below E*Trade, shifted right
  const p3: Pos = {
    x: clamp(p2.x + Math.round(180 * sc) + Math.round(cw * 0.10) + 30, PAD, cw - cardW - 30),
    y: p2.y + (h[2] ?? 0) + 65,
  };
  // [4] N1ghtterrors — 30px below Fither, shifted right
  const p4: Pos = {
    x: clamp(PAD + Math.round(200 * sc) + Math.round(cw * 0.42) + 15, PAD, cw - cardW - 30),
    y: p3.y + (h[3] ?? 0) + 65,
  };
  // [5] JAHN         — below N1ghtterrors (-20% left, shifted up ~10%)
  const p5: Pos = {
    x: clamp(Math.round((cw - cardW) / 2) + 60 - Math.round(cw * 0.17), PAD, cw - cardW - PAD),
    y: p4.y + (h[4] ?? 0) + 205 - Math.round(cw * 0.10),
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

  const p = { ...pos };

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
function loadSizes(key: string, projects: GalleryProject[], metaH = CANVAS_META_H): CardSize[] | null {
  try {
    const raw = localStorage.getItem(`${key}-sizes-by-slug`);
    if (!raw) return null;
    const map = JSON.parse(raw) as Record<string, CardSize>;
    return projects.map((p) => {
      const s   = map[p.slug];
      const def = getDefaultSize(p, metaH);
      return s?.w && s?.h
        ? { w: clamp(s.w, MIN_CARD_W, def.w * 3), h: clamp(s.h, MIN_CARD_H, def.h * 3) }
        : { ...def };
    });
  } catch { return null; }
}
function saveSizes(key: string, projects: GalleryProject[], sizes: CardSize[], metaH = CANVAS_META_H) {
  const map: Record<string, CardSize> = {};
  projects.forEach((p, i) => { map[p.slug] = sizes[i] ?? getDefaultSize(p, metaH); });
  localStorage.setItem(`${key}-sizes-by-slug`, JSON.stringify(map));
}

function clearGalleryStorage(key: string) {
  localStorage.removeItem(key);
  localStorage.removeItem(`${key}-sizes`);
  localStorage.removeItem(`${key}-sizes-by-slug`);
}

// ─── Resize handles ───────────────────────────────────────────────────────────
const HANDLE_DIRS = [
  { dx: -1, dy: -1 }, { dx: 0, dy: -1 }, { dx: 1, dy: -1 },
  { dx: -1, dy:  0 },                     { dx: 1, dy:  0 },
  { dx: -1, dy:  1 }, { dx: 0, dy:  1 }, { dx: 1, dy:  1 },
] as const;
const HANDLE_CURSORS = [
  "nwse-resize","ns-resize","nesw-resize",
  "ew-resize",             "ew-resize",
  "nesw-resize","ns-resize","nwse-resize",
] as const;

const HANDLE_SZ = 48;
const HANDLE_BRACKET_STYLE: React.CSSProperties = {
  filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.28)) drop-shadow(0 0 6px rgba(255,255,255,0.18))",
  display: "block",
  pointerEvents: "none",
};

function ResizeBracket({ d }: { d: string }) {
  const P = 3;
  const SW = 8;
  return (
    <svg width={HANDLE_SZ} height={HANDLE_SZ} viewBox={`0 0 ${HANDLE_SZ} ${HANDLE_SZ}`} fill="none" style={HANDLE_BRACKET_STYLE}>
      <path d={d} stroke="rgba(255,255,255,1)" strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Handles({ onMouseDown, interactive = true }: { onMouseDown?: (e: React.MouseEvent, i: number) => void; interactive?: boolean }) {
  const P  = 3;
  const far = HANDLE_SZ - P;
  const R  = 22;

  const paths = {
    tl: `M ${far} ${P} L ${P+R} ${P} Q ${P} ${P} ${P} ${P+R} L ${P} ${far}`,
    tr: `M ${P} ${P} L ${far-R} ${P} Q ${far} ${P} ${far} ${P+R} L ${far} ${far}`,
    bl: `M ${far} ${far} L ${P+R} ${far} Q ${P} ${far} ${P} ${far-R} L ${P} ${P}`,
    br: `M ${P} ${far} L ${far-R} ${far} Q ${far} ${far} ${far} ${far-R} L ${far} ${P}`,
  };

  const midPill = (w: number, h: number): React.CSSProperties => ({
    display: "block", width: w, height: h, borderRadius: 999,
    background: "rgba(255,255,255,1)",
    backdropFilter: "blur(10px) saturate(200%)",
    WebkitBackdropFilter: "blur(10px) saturate(200%)",
    border: "0.5px solid rgba(255,255,255,1)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.20), inset 0 0.5px 0 rgba(255,255,255,1)",
    pointerEvents: "none",
  });

  const w = `${interactive ? "pointer-events-auto" : "pointer-events-none"} absolute z-50`;
  const mk = (i: number) => (interactive && onMouseDown ? (e: React.MouseEvent) => { e.stopPropagation(); onMouseDown(e, i); } : undefined);

  return (
    <>
      {/* 0 TL */ }
      <span className={w} style={{ top: -4, left: -4, cursor: interactive ? "nwse-resize" : "default" }}
        onMouseDown={mk(0)} aria-hidden>
        <ResizeBracket d={paths.tl} /></span>
      {/* 1 TM */}
      <span className={w} style={{ top: -1, left: "50%", transform: "translate(-50%, -50%)", cursor: interactive ? "ns-resize" : "default" }}
        onMouseDown={mk(1)} aria-hidden>
        <span style={midPill(18, 5)} /></span>
      {/* 2 TR */}
      <span className={w} style={{ top: -4, right: -4, cursor: interactive ? "nesw-resize" : "default" }}
        onMouseDown={mk(2)} aria-hidden>
        <ResizeBracket d={paths.tr} /></span>
      {/* 3 ML */}
      <span className={w} style={{ top: "50%", left: -1, transform: "translate(-50%, -50%)", cursor: interactive ? "ew-resize" : "default" }}
        onMouseDown={mk(3)} aria-hidden>
        <span style={midPill(5, 18)} /></span>
      {/* 4 MR */}
      <span className={w} style={{ top: "50%", right: -1, transform: "translate(50%, -50%)", cursor: interactive ? "ew-resize" : "default" }}
        onMouseDown={mk(4)} aria-hidden>
        <span style={midPill(5, 18)} /></span>
      {/* 5 BL */}
      <span className={w} style={{ bottom: -4, left: -4, cursor: interactive ? "nesw-resize" : "default" }}
        onMouseDown={mk(5)} aria-hidden>
        <ResizeBracket d={paths.bl} /></span>
      {/* 6 BM */}
      <span className={w} style={{ bottom: -1, left: "50%", transform: "translate(-50%, 50%)", cursor: interactive ? "ns-resize" : "default" }}
        onMouseDown={mk(6)} aria-hidden>
        <span style={midPill(18, 5)} /></span>
      {/* 7 BR */}
      <span className={w} style={{ bottom: -4, right: -4, cursor: interactive ? "nwse-resize" : "default" }}
        onMouseDown={mk(7)} aria-hidden>
        <ResizeBracket d={paths.br} /></span>
    </>
  );
}

// ─── Pills ────────────────────────────────────────────────────────────────────
const PILL_THEMES: Record<string, string> = {
  green:     "bg-lime-500/[0.09]   text-lime-700   ring-1 ring-lime-400/55",
  purple:    "bg-purple-500/[0.09] text-purple-700 ring-1 ring-purple-400/55",
  blue:      "bg-blue-500/[0.09]   text-blue-700   ring-1 ring-blue-400/55",
  gray:      "bg-zinc-400/[0.12]   text-zinc-500   ring-1 ring-zinc-400/50",
  black:     "bg-zinc-900          text-white       ring-1 ring-zinc-700",
  teal:      "bg-teal-500/[0.09]   text-teal-700   ring-1 ring-teal-400/55",
  orange:    "bg-orange-500/[0.09] text-orange-700 ring-1 ring-orange-400/55",
  parchment: "bg-[#f1e6d2]         text-[#8a6642]  ring-1 ring-[#c9ad8a]/60",
};

function TypePills({ typeTags, pillTheme = "green" }: { typeTags: string; pillTheme?: string }) {
  const cls = PILL_THEMES[pillTheme] ?? PILL_THEMES.green;
  return (
    <div className="flex flex-wrap gap-1.5">
      {typeTags.split(" · ").map((t) => t.trim()).filter(Boolean).map((tag) => (
        <span key={tag} className={cn("rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]", cls)}>
          {tag}
        </span>
      ))}
    </div>
  );
}
function MetricPills({ tags }: { tags: [string, string] | [string, string, string] }) {
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

// ─── Card meta strip — light white frost, identical on every card ─────────────
const CARD_META_GLASS: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.58)",
  backdropFilter: "blur(48px) saturate(200%)",
  WebkitBackdropFilter: "blur(48px) saturate(200%)",
  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 -6px 20px rgba(255, 255, 255, 0.25)",
};

// ─── Mobile card ──────────────────────────────────────────────────────────────
function MobileCard({ project, priority, revealed, revealDelay }: {
  project: GalleryProject; priority: boolean; revealed: boolean; revealDelay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const variant    = project.cardVariant ?? "standard";
  const bg         = project.coverColor ?? "#ffffff";
  const objFit     = project.coverImageFit === "cover" ? "object-cover" : "object-contain";
  // If a custom canvas image height is set, derive a proportional mobile height
  // capped at 360px so tall portrait cards don't dominate the grid.
  const mobileImgH = project.canvasImageH
    ? Math.min(Math.round(project.canvasImageH * 0.72), 360)
    : null;
  const imgCls     = project.imageAreaClassName ?? (mobileImgH ? undefined : IMG_H_CLASS[variant]);

  return (
    <div
      className={cn("relative flex flex-col rounded-2xl", revealed && "gallery-card-bounce-in")}
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${SEL_GREEN}, 0 0 36px -6px ${SEL_GLOW}`
          : "0 0 0 0.5px rgba(58,97,72,0.22), 0 4px 20px -6px rgba(0,0,0,0.10)",
        transition: "box-shadow 240ms cubic-bezier(0.4,0,0.2,1)",
        opacity: revealed ? undefined : 0,
        animation: revealed
          ? `gallery-card-bounce-in 0.72s cubic-bezier(0.34, 1.12, 0.64, 1) ${revealDelay}ms both`
          : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={project.href} className="absolute inset-0 z-20" aria-label={`Open ${project.title}`} />

      {/* Visual-only handles on hover — overlay extends past card edges so brackets bleed out */}
      <div className="pointer-events-none absolute -inset-2 z-50 transition-opacity duration-150"
        style={{ opacity: hovered ? 1 : 0 }} aria-hidden>
        <Handles interactive={false} />
      </div>

      <div className={cn("relative w-full overflow-hidden rounded-t-2xl", imgCls)} style={{ background: bg, ...(mobileImgH ? { height: mobileImgH } : {}) }}>
        <HoverCrossfadeMedia
          project={project}
          active={hovered}
          objFit={objFit}
          priority={priority}
          sizes="(max-width: 640px) 96vw, 48vw"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 px-5 pt-[calc(1rem+2px)] pb-6 rounded-b-2xl overflow-hidden" style={CARD_META_GLASS}>
        {project.typeTags && <TypePills typeTags={project.typeTags} pillTheme={project.pillTheme} />}
        <p className={cn("font-mono text-[19px] font-semibold leading-snug tracking-tight transition-colors duration-200 mt-[15px]", hovered ? "text-zinc-950" : "text-zinc-600")}>{project.title}</p>
        <p className={cn("text-[14px] leading-relaxed transition-colors duration-200", hovered ? "text-zinc-800" : "text-zinc-400")}>{project.description}</p>
        {project.tags && <MetricPills tags={project.tags} />}
      </div>
    </div>
  );
}

// ─── Desktop canvas gallery ───────────────────────────────────────────────────
export interface GalleryInitialLayout {
  /** Container width (px) at which the positions were recorded. Used to scale x proportionally. */
  refWidth: number;
  positions: Pos[];
  sizesBySlug: Record<string, { w: number; h: number }>;
}

export function CategoryGallery({ projects, storageKey, cardMetaHeight, cardFontScale, initialLayout }: { projects: GalleryProject[]; storageKey: string; cardMetaHeight?: number; cardFontScale?: number; initialLayout?: GalleryInitialLayout }) {
  const effMetaH = cardMetaHeight ?? CANVAS_META_H;

  // Below 800px → CSS-grid layout (no drag/resize, just visual handles on hover).
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 800px)");
    const on = () => setIsDesktop(mq.matches);
    on(); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Scroll reveal — per-card bounce-in on desktop and mobile
  const [revealedCards, setRevealedCards] = useState<Set<number>>(() => new Set());
  const cardRevealRefs = useRef<(HTMLDivElement | null)[]>(projects.map(() => null));
  const mobileRef      = useRef<HTMLDivElement>(null);

  // Canvas state — width sentinel is observed separately so cvH changes don't retrigger scale
  const widthRef       = useRef<HTMLDivElement>(null);
  const canvasRef      = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(1100);
  const [positions,  setPositions]  = useState<Pos[]>([]);
  const [baseSizes,  setBaseSizes]  = useState<CardSize[]>(() => projects.map(p => getDefaultSize(p, cardMetaHeight ?? CANVAS_META_H)));
  const [zOrder,     setZOrder]     = useState<number[]>(() => projects.map((_, i) => i));
  const [hoveredIdx, setHoveredIdx]   = useState<number | null>(null);
  const [draggingIdx,setDraggingIdx]  = useState<number | null>(null);
  const [resizingIdx,setResizingIdx]  = useState<number | null>(null);
  const [ready,      setReady]      = useState(false);

  const dragRef      = useRef<{ idx: number; startMX: number; startMY: number; startPX: number; startPY: number } | null>(null);
  const resizeRef    = useRef<{ idx: number; handleIdx: number; startMX: number; startMY: number; startW: number; startH: number; startPX: number; startPY: number } | null>(null);
  const hasDragged   = useRef(false);
  const scaleRef     = useRef(1);
  // Keep refs in sync so the global mouse handler always sees fresh state
  const baseSizesRef = useRef(baseSizes);
  useEffect(() => { baseSizesRef.current = baseSizes; }, [baseSizes]);

  // Video refs per card
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(projects.map(() => null));

  const refWidth = initialLayout?.refWidth ?? DEFAULT_REF_WIDTH;
  const scale    = computeScale(containerW, refWidth);
  useEffect(() => { scaleRef.current = scale; }, [scale]);

  const applyContainerWidth = useCallback((raw: number) => {
    const w = Math.round(raw);
    setContainerW((prev) => (Math.abs(prev - w) < 8 ? prev : w));
  }, []);

  const applyInitialLayout = useCallback(() => {
    if (initialLayout) {
      // Positions in initialLayout are already in design space at initialLayout.refWidth.
      // Since refWidth = initialLayout.refWidth, we store them verbatim.
      const sizedCards = projects.map(p => {
        const s = initialLayout.sizesBySlug[p.slug];
        return s ? { w: s.w, h: s.h } : getDefaultSize(p, effMetaH);
      });
      const pos: Pos[] = initialLayout.positions.map(p => ({ x: p.x, y: p.y }));
      for (let i = 0; i < pos.length; i++) {
        pos[i] = resolveOverlaps(i, pos[i], pos, sizedCards, 1, projects);
      }
      setBaseSizes(sizedCards);
      setPositions(pos);
    } else {
      // computeInitialPositions accepts a width — pass refWidth so positions are in design space.
      const rw = DEFAULT_REF_WIDTH;
      const initialSizes = projects.map(p => getDefaultSize(p, effMetaH));
      const initPos = computeInitialPositions(rw, projects, 1, effMetaH);
      for (let i = 0; i < initPos.length; i++) {
        initPos[i] = resolveOverlaps(i, initPos[i], initPos, initialSizes, 1, projects);
      }
      setBaseSizes(initialSizes);
      setPositions(initPos);
    }
  }, [initialLayout, projects, effMetaH]); // eslint-disable-line react-hooks/exhaustive-deps

  const resetLayout = useCallback(() => {
    clearGalleryStorage(storageKey);
    applyInitialLayout();
    setZOrder(projects.map((_, i) => i));
  }, [projects, storageKey, applyInitialLayout]);

  // Mobile scroll-reveal only
  useEffect(() => {
    if (isDesktop) return;
    const el = mobileRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() =>
            setRevealedCards(new Set(projects.map((_, i) => i)))
          );
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isDesktop, projects]);

  // Buddy peeks below the collage on desktop — reveal immediately, not on scroll
  useEffect(() => {
    if (!isDesktop || !ready) return;
    setRevealedCards((prev) => {
      if (prev.has(0)) return prev;
      const next = new Set(prev);
      next.add(0);
      return next;
    });
  }, [isDesktop, ready]);

  // Desktop: bounce each card in when it scrolls into view
  useEffect(() => {
    if (!isDesktop || !ready) return;
    const observers: IntersectionObserver[] = [];
    const setup = () => {
      cardRevealRefs.current.forEach((el, i) => {
        if (!el) return;
        const io = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setRevealedCards((prev) => {
                if (prev.has(i)) return prev;
                const next = new Set(prev);
                next.add(i);
                return next;
              });
              io.disconnect();
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
        );
        io.observe(el);
        observers.push(io);
      });
    };
    requestAnimationFrame(setup);
    return () => observers.forEach((io) => io.disconnect());
  }, [isDesktop, ready, projects.length]);

  // Track gallery width via a zero-height sentinel — height changes on the canvas must not retrigger scale
  useEffect(() => {
    if (!isDesktop) return;
    const el = widthRef.current;
    if (!el) return;
    applyContainerWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([e]) => applyContainerWidth(e.contentRect.width));
    ro.observe(el);
    const onWinResize = () => applyContainerWidth(el.getBoundingClientRect().width);
    window.addEventListener("resize", onWinResize, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWinResize);
    };
  }, [isDesktop, applyContainerWidth]);

  // Initial layout — useLayoutEffect avoids a visible height/position flash before paint
  useLayoutEffect(() => {
    if (!isDesktop) return;
    const el = widthRef.current;
    if (el) applyContainerWidth(el.getBoundingClientRect().width);
    const storedSizes = loadSizes(storageKey, projects, effMetaH);
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
      applyInitialLayout();
      setReady(true);
    }
  }, [isDesktop, projects, storageKey, applyInitialLayout, applyContainerWidth, effMetaH]);

  // Persist positions
  useEffect(() => {
    if (!isDesktop || !ready || positions.length !== projects.length) return;
    localStorage.setItem(storageKey, JSON.stringify(positions));
  }, [isDesktop, positions, ready, projects.length, storageKey]);

  // Persist sizes
  useEffect(() => {
    if (!isDesktop || !ready || baseSizes.length !== projects.length) return;
    saveSizes(storageKey, projects, baseSizes, effMetaH);
  }, [baseSizes, isDesktop, ready, projects.length, storageKey]);

  // Positions are stored in design space — they don't change on resize.
  // The scale conversion happens at render time below.

  // Global mouse handlers — positions and sizes both live in design space,
  // so screen-space mouse deltas must be divided by scale to translate.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const sc = scaleRef.current || 1;
      const d = dragRef.current;
      if (d) {
        const dxScreen = e.clientX - d.startMX, dyScreen = e.clientY - d.startMY;
        if (Math.abs(dxScreen) > 3 || Math.abs(dyScreen) > 3) hasDragged.current = true;
        const dx = dxScreen / sc, dy = dyScreen / sc;
        setPositions((prev) => { const n = [...prev]; n[d.idx] = { x: d.startPX + dx, y: d.startPY + dy }; return n; });
        return;
      }
      const r = resizeRef.current;
      if (!r) return;
      if (Math.abs(e.clientX - r.startMX) > 2 || Math.abs(e.clientY - r.startMY) > 2) hasDragged.current = true;
      const rdx = (e.clientX - r.startMX) / sc, rdy = (e.clientY - r.startMY) / sc;
      const { dx: ndx, dy: ndy } = HANDLE_DIRS[r.handleIdx];
      let nw = r.startW, nh = r.startH, nx = r.startPX, ny = r.startPY;
      // Position math is in design space now — no extra * sc on the position correction.
      if (ndx !== 0) { nw = Math.max(MIN_CARD_W, r.startW + rdx * ndx); if (ndx < 0) nx = r.startPX + (r.startW - nw); }
      if (ndy !== 0) { nh = Math.max(MIN_CARD_H, r.startH + rdy * ndy); if (ndy < 0) ny = r.startPY + (r.startH - nh); }
      setBaseSizes((prev) => prev.map((s, j) => j === r.idx ? { w: nw, h: nh } : s));
      if (ndx < 0 || ndy < 0) setPositions((prev) => { const n = [...prev]; n[r.idx] = { x: nx, y: ny }; return n; });
    };
    const onUp = () => {
      const wasDrag = dragRef.current !== null && hasDragged.current;
      const dragIdx = dragRef.current?.idx ?? -1;
      dragRef.current = resizeRef.current = null;
      setDraggingIdx(null); setResizingIdx(null);

      if (wasDrag && dragIdx >= 0) {
        // Resolve overlaps in design space (positions and sizes are both there).
        setPositions((prev) => {
          const resolved = resolveOverlaps(dragIdx, prev[dragIdx], prev, baseSizesRef.current, 1, projects);
          if (resolved.x === prev[dragIdx].x && resolved.y === prev[dragIdx].y) return prev;
          const next    = [...prev];
          next[dragIdx] = resolved;
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
    e.preventDefault(); hasDragged.current = false; setDraggingIdx(idx); setResizingIdx(idx);
    resizeRef.current = { idx, handleIdx, startMX: e.clientX, startMY: e.clientY, startW: baseSizes[idx]?.w ?? BASE_CARD_W, startH: baseSizes[idx]?.h ?? getDefaultSize(projects[idx], effMetaH).h, startPX: positions[idx]?.x ?? 0, startPY: positions[idx]?.y ?? 0 };
    setZOrder((prev) => [...prev.filter((n) => n !== idx), idx]);
  }, [baseSizes, positions, projects, effMetaH]);

  // ── Mobile ────────────────────────────────────────────────────────────────
  if (!isDesktop) {
    return (
      <div ref={mobileRef} className="relative z-[80] w-full px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto grid max-w-[min(900px,96vw)] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, i) => (
            <MobileCard key={project.slug} project={project} priority={i < 2}
              revealed={revealedCards.size > 0} revealDelay={i * 70} />
          ))}
        </div>
      </div>
    );
  }

  // ── Desktop canvas ────────────────────────────────────────────────────────
  const sc = scale;

  // Compute canvas height from actual card positions (design space → screen space).
  let cvH = 600;
  if (ready && positions.length === projects.length) {
    positions.forEach((pos, i) => {
      const base  = baseSizes[i] ?? getDefaultSize(projects[i], effMetaH);
      const cardH = Math.round(base.h * sc);
      cvH = Math.max(cvH, Math.round(pos.y * sc) + cardH + PAD + 60);
    });
  }

  return (
    <div className="relative z-[80] w-full select-none">
      <div ref={widthRef} className="pointer-events-none h-0 w-full overflow-hidden" aria-hidden />
      <div ref={canvasRef} className="relative w-full" style={{ height: cvH }}>
      {ready && projects.map((project, i) => {
        const pos    = positions[i] ?? { x: 0, y: 0 };
        const z      = zOrder.indexOf(i);
        const base   = baseSizes[i] ?? getDefaultSize(project, effMetaH);
        const cardW  = Math.round(base.w * sc);
        const cardH  = Math.round(base.h * sc);
        const metaH  = Math.round(effMetaH * sc);
        const imageH = Math.max(0, cardH - metaH);
        const bg     = project.coverColor ?? "#ffffff";
        const objFit = project.coverImageFit === "cover" ? "object-cover" : "object-contain";
        const isHov  = hoveredIdx === i || resizingIdx === i;
        const visible = revealedCards.has(i);
        return (
          <div
            key={project.slug}
            ref={(el) => { cardRevealRefs.current[i] = el; }}
            className={cn("absolute", visible && "gallery-card-bounce-in")}
            style={{
              left: Math.round(pos.x * sc), top: Math.round(pos.y * sc), width: cardW, zIndex: z + 1,
              cursor: draggingIdx === i ? "grabbing" : "grab",
              opacity: visible ? undefined : 0,
              animation: visible
                ? `gallery-card-bounce-in 0.72s cubic-bezier(0.34, 1.12, 0.64, 1) ${Math.min(i * 55, 280)}ms both`
                : undefined,
            }}
            onMouseDown={(e) => startDrag(e, i)}
          >
            {/* Resize handles live outside overflow-hidden so circles aren't clipped */}
            <div className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-150"
              style={{ opacity: isHov ? 1 : 0 }}>
              <Handles onMouseDown={(e, hi) => startResize(e, i, hi)} />
            </div>

            <div className="group relative overflow-hidden rounded-2xl"
              style={{ width: cardW, height: cardH }}
              onMouseDown={() => setZOrder((prev) => [...prev.filter((n) => n !== i), i])}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Selection border */}
              <div className="pointer-events-none absolute inset-0 z-40 rounded-2xl transition-opacity duration-150"
                style={{ opacity: isHov ? 1 : 0, boxShadow: `inset 0 0 0 1.5px ${SEL_GREEN}` }} />

              {/* Image area */}
              <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: imageH, background: bg }}>
                <HoverCrossfadeMedia
                  project={project}
                  active={isHov}
                  objFit={objFit}
                  priority={i < 2}
                  sizes="420px"
                  onVideoEl={(el) => { videoRefs.current[i] = el; }}
                />
              </div>

              {/* Meta strip — isolated from cover art so frost matches on every card */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-between px-4 pt-3 pb-4"
                style={{ top: imageH, ...CARD_META_GLASS }}
              >
                <div className="flex flex-col gap-2 mt-[2px]">
                  {project.typeTags && <TypePills typeTags={project.typeTags} pillTheme={project.pillTheme} />}
                  <p className={cn("font-mono font-semibold leading-snug tracking-tight transition-colors duration-200", project.typeTags ? "mt-[15px]" : "mt-[4px]", isHov ? "text-zinc-950" : "text-zinc-600")}
                    style={{ fontSize: Math.round(19 * sc * (cardFontScale ?? 1)) }}>
                    {project.title}
                  </p>
                  <p className={cn("leading-relaxed transition-colors duration-200", isHov ? "text-zinc-800" : "text-zinc-400")}
                    style={{ fontSize: Math.round(14 * sc * (cardFontScale ?? 1)) }}>
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

      <div className="absolute bottom-4 right-6 z-40 flex items-center gap-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
          Drag to rearrange and resize
        </p>
        <button
          type="button"
          onClick={() => {
            const layout = {
              refWidth,
              positions,
              sizesBySlug: Object.fromEntries(projects.map((p, i) => [p.slug, baseSizes[i] ?? getDefaultSize(p, effMetaH)])),
            };
            navigator.clipboard.writeText(JSON.stringify(layout, null, 2)).catch(() => {});
          }}
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 underline-offset-2 transition-colors hover:text-zinc-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        >
          Copy layout
        </button>
        <button
          type="button"
          onClick={resetLayout}
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 underline-offset-2 transition-colors hover:text-zinc-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        >
          Reset layout
        </button>
      </div>
      </div>
    </div>
  );
}
