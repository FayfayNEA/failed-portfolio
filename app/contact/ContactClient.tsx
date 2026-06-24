"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import FluidSlab from "@/components/fluid-slab";
import { ImageLightbox } from "@/components/image-lightbox";
import { cn } from "@/lib/cn";

function useIsBelowMd() {
  const [v, setV] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setV(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return v;
}

const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

const IMG = {
  iconX:
    "https://framerusercontent.com/images/XHCI0VfDaD9WU6YV4lBNwS9e3Ek.png?width=1250&height=1250",
  iconLinkedIn:
    "https://framerusercontent.com/images/8KmffkjfNuwc79LA0N3ciLnJw.png?width=1200&height=1200",
} as const;

const RESUME_URL = "/failenn-resume.pdf";

const SPOTIFY_EMBED_SRC =
  "https://open.spotify.com/embed/album/07naAGnFibTManFY20vcUL?utm_source=generator&theme=0";

const OLIVE_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

// ── About section constants ───────────────────────────────────────────────────

const PORTRAIT_SRC =
  "https://framerusercontent.com/images/NmEPDMw4n4ZBACyQbLBQzlGMTv0.jpg?width=2870&height=2633";

const LIFE_PHOTOS = [
  { src: "/about/trail.jpg",        alt: "Mountain trail" },
  { src: "/about/architecture.jpg", alt: "Architecture" },
  { src: "/friends.jpg",            alt: "Friends" },
  { src: "/about/horse.jpg",        alt: "Horse in the barn" },
  { src: "/about/jumping.jpg",      alt: "Show jumping" },
];

const LIQUID_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

// ── Shared helpers ────────────────────────────────────────────────────────────

const magneticSpring = { stiffness: 400, damping: 30, mass: 1 } as const;
const MAG_STRENGTH = 10;

function MagneticHoverShell({
  className,
  children,
  disablePull = false,
}: {
  className?: string;
  children: React.ReactNode;
  disablePull?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, magneticSpring);
  const sy = useSpring(my, magneticSpring);
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disablePull) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    mx.set(dx * MAG_STRENGTH);
    my.set(dy * MAG_STRENGTH);
  };
  const onPointerLeave = () => { mx.set(0); my.set(0); };
  const sheenX = useTransform(sx, [-MAG_STRENGTH, MAG_STRENGTH], ["-40%", "40%"]);
  const sheenY = useTransform(sy, [-MAG_STRENGTH, MAG_STRENGTH], ["-30%", "30%"]);

  if (disablePull) {
    return <div className={cn("relative overflow-hidden", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("relative overflow-hidden will-change-transform", className)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-2xl"
        style={{ x: sheenX, y: sheenY }}
      />
      {children}
    </motion.div>
  );
}

function PhotoStrip({
  photos,
  itemWidth,
  gapPx,
  radiusClass,
}: {
  photos: typeof LIFE_PHOTOS;
  itemWidth: string;
  gapPx: number;
  radiusClass: string;
}) {
  return (
    <div className="overflow-x-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.15)_transparent] pb-1">
      <div className="flex" style={{ gap: gapPx }}>
        {photos.map(({ src, alt }) => (
          <div
            key={src}
            className={`shrink-0 overflow-hidden ${radiusClass} ring-1 ring-black/[0.06]`}
            style={{ width: itemWidth, aspectRatio: "3/4" }}
          >
            <ImageLightbox
              src={src}
              alt={alt}
              wrapperClassName="h-full rounded-none"
              imgClassName="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function LiquidGlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-2xl border border-white/55 bg-white/[0.14]",
        "shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)]",
        "ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/38 via-white/[0.14] to-white/[0.08]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-repeat opacity-[0.10] mix-blend-overlay"
        style={{ backgroundImage: LIQUID_CARD_GRAIN_BG, backgroundSize: "180px 180px" }}
        aria-hidden
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ContactClient() {
  const email = "failennaselta@gmail.com";
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const isBelowMd = useIsBelowMd();
  const pageRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const zoomPanelRef = useRef<HTMLDivElement | null>(null);
  const zoomedRef = useRef(false);
  const [scrollBar, setScrollBar] = useState({ pct: 0, ratio: 0.5 });

  const searchParams = useSearchParams();

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    const panel = searchParams.get("panel");
    if (!panel) return;
    const index = parseInt(panel, 10);
    if (isNaN(index)) return;
    const el = screenRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const positions = [0, w * 0.94, w * 1.88];
    requestAnimationFrame(() => {
      el.scrollTo({ left: positions[index] ?? 0, behavior: "smooth" });
    });
  }, [searchParams, mounted]);

  // Keep ref in sync so the wheel handler can check without a stale closure
  useEffect(() => { zoomedRef.current = zoomed; }, [zoomed]);

  // Lock scroll when contact zoom is open
  useEffect(() => {
    if (!zoomed) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const panel = zoomPanelRef.current;
    const id = requestAnimationFrame(() => {
      if (panel) panel.scrollTop = 0;
    });
    return () => {
      cancelAnimationFrame(id);
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [zoomed]);





  // Vertical or horizontal wheel anywhere on the page pans the CRT panels horizontally.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    const onWheel = (e: WheelEvent) => {
      if (zoomedRef.current) return;
      if ((e.target as HTMLElement).closest?.("[data-no-pan]")) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!delta) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      e.preventDefault();
      el.style.scrollSnapType = "none";
      el.scrollLeft = Math.max(0, Math.min(max, el.scrollLeft + delta * 2.2));
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        el.style.scrollSnapType = "";
        const w = el.clientWidth;
        const panels = [0, w * 0.94, w * 1.88];
        const nearest = panels.reduce((a, b) => Math.abs(b - el.scrollLeft) < Math.abs(a - el.scrollLeft) ? b : a);
        el.scrollTo({ left: nearest, behavior: "smooth" });
      }, 80);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, []);

  // Drive the bottom scrubber from the screen's scroll position.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setScrollBar({
        pct: max > 0 ? el.scrollLeft / max : 0,
        ratio: el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1,
      });
    };
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  // Drag the trackpad graphic horizontally to move between panels.
  const onTrackpadDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const screen = screenRef.current;
    if (!screen) return;
    const max = screen.scrollWidth - screen.clientWidth;
    if (max <= 0) return;
    screen.style.scrollSnapType = "none";
    const startX = e.clientX;
    const startScroll = screen.scrollLeft;
    const SENS = 3;
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - startX;
      screen.scrollLeft = Math.max(0, Math.min(max, startScroll + dx * SENS));
    };
    const up = () => {
      screen.style.scrollSnapType = "";
      const w = screen.clientWidth;
      const panels = [0, w * 0.94, w * 1.88];
      const target = panels.reduce((a, b) => Math.abs(b - screen.scrollLeft) < Math.abs(a - screen.scrollLeft) ? b : a);
      screen.scrollTo({ left: target, behavior: "smooth" });
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // Physical trackpad two-finger horizontal swipe (or mouse wheel) over the graphic moves between panels.
  const onTrackpadWheel = (e: React.WheelEvent) => {
    const screen = screenRef.current;
    if (!screen) return;
    const max = screen.scrollWidth - screen.clientWidth;
    if (max <= 0) return;
    const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    screen.scrollLeft = Math.max(0, Math.min(max, screen.scrollLeft + delta));
  };

  const copyLabel = copied ? "Copied" : "Copy email";

  const currentPanel = scrollBar.pct < 0.3 ? 0 : scrollBar.pct < 0.75 ? 1 : 2;
  const goToPanel = (index: number) => {
    const el = screenRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const positions = [0, w * 0.94, w * 1.88];
    el.scrollTo({ left: positions[index], behavior: "smooth" });
  };
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch { /* ignore */ }
  };

  return (
    <div
      className="relative flex min-h-full flex-col bg-transparent text-zinc-900 transition-opacity duration-500"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      {/* Accessibility zoom button */}
      <button
        onClick={() => setZoomed(true)}
        aria-label="Zoom in for accessibility"
        className="fixed left-3 top-1/2 z-[70] -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md ring-1 ring-black/[0.08] backdrop-blur-md transition-colors hover:bg-white"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Contact zoom overlay */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            data-no-pan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-hidden bg-white/70 px-5 pb-8 pt-[clamp(4.5rem,16vh,8.5rem)] backdrop-blur-2xl"
            onClick={() => setZoomed(false)}
          >
            <motion.div
              ref={zoomPanelRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[min(82dvh,780px)] overflow-y-auto overscroll-contain rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06] backdrop-blur-xl sm:p-10 [scrollbar-width:thin]"
            >
              <button
                onClick={() => setZoomed(false)}
                aria-label="Close zoom"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* About — full bio, revealed alongside everything else */}
              <div data-zoom-about className="mb-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/[0.07]">
                    <Image
                      src={PORTRAIT_SRC}
                      alt="Faílenn Aselta"
                      width={2870}
                      height={2633}
                      className="h-full w-full object-cover [object-position:center_top]"
                      sizes="64px"
                    />
                  </div>
                  <h2 className="font-mono text-[1.4rem] font-normal leading-tight text-zinc-900">
                    I&apos;m Faílenn{" "}
                    <span className="font-light text-[0.7em] text-zinc-400">(fay-len)</span>
                  </h2>
                </div>
                <div className="space-y-3 text-[0.95rem] leading-[1.62] text-zinc-700">
                  <p>
                    I&apos;m a product designer with 2+ years of design experience, building since I was 13.
                  </p>
                  <p>
                    I started with HTML/CSS Tumblr themes in middle school, moved into robotics and C++ and
                    Python in high school. My first year at VT was in Electrical Engineering, but I left for
                    Architecture after realizing my interest sat in how a user interacts with a product. That
                    path led me to parametric and robotic design, and a project selected at the 2025 Venice
                    Biennale.
                  </p>
                  <p>
                    What that background gave me is not something most product designers have. I understand how
                    attention moves, and I ask one question when I look at a screen: how do we make
                    someone&apos;s day seamless and joyful. That instinct, paired with an aesthetic sensibility
                    sharpened through years of rapid iteration, shapes everything I build. The work feels
                    obvious in the way that only comes from someone who never stops asking why people move the
                    way they do.
                  </p>
                </div>
                <div className="mt-4">
                  <PhotoStrip photos={LIFE_PHOTOS} itemWidth="80px" gapPx={8} radiusClass="rounded-xl" />
                </div>
              </div>

              <div className="mb-5 h-px w-full bg-zinc-200/80" />

              <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">Primary</p>
              <a
                href={`mailto:${email}`}
                className="block text-[1.4rem] font-normal leading-snug text-zinc-950 hover:text-zinc-600 transition-colors break-all mb-5"
              >
                {email} <span className="text-zinc-400">→</span>
              </a>

              <div className="mb-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center rounded-full bg-zinc-100 px-5 py-2.5 text-[0.95rem] font-medium text-zinc-800 ring-1 ring-zinc-200 hover:bg-zinc-200 transition-colors"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-5 py-2.5 text-[0.95rem] font-medium text-white hover:bg-zinc-700 transition-colors"
                >
                  Resume <span aria-hidden>↗</span>
                </a>
              </div>

              <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">Elsewhere</p>
              <div className="space-y-3">
                {[
                  { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta" },
                  { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta" },
                  { href: "https://github.com/FayfayNEA", label: "GitHub", sub: "/FayfayNEA" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-zinc-50 px-5 py-3.5 ring-1 ring-zinc-200 hover:bg-zinc-100 transition-colors"
                  >
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400">{s.label}</p>
                      <p className="text-[1.05rem] text-zinc-800">{s.sub}</p>
                    </div>
                    <span className="text-zinc-400">↗</span>
                  </a>
                ))}
              </div>

              <div data-zoom-spotify className="mt-8 border-t border-zinc-200/80 pt-8">
                <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
                  What I&apos;m listening to
                </p>
                <iframe
                  src={`${SPOTIFY_EMBED_SRC}&theme=1`}
                  width="100%"
                  className="h-[min(352px,52dvh)] w-full rounded-xl"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify, what I'm listening to"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <main ref={pageRef} className="relative flex flex-1 flex-col bg-transparent px-4 py-4 md:px-8 md:py-0 md:overflow-hidden">

        {/* Mobile: liquid (FluidSlab) ambient background */}
        <div className="pointer-events-none fixed inset-0 z-0 md:hidden" aria-hidden>
          <FluidSlab
            className="h-full w-full"
            intensity={0.55}
            tint={[0.18, 0.85, 0.32]}
            tintStrength={0.18}
            maxPixelRatio={1.25}
            antialias
          />
        </div>

        {/* ── Contact section ── */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center max-md:min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">

          {/* Mobile contact layout */}
          <div className="w-full max-w-[980px] md:hidden">
            <div className="grid grid-cols-1 gap-5">
              <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/55 bg-transparent p-5 shadow-none ring-1 ring-black/[0.04] backdrop-blur-none sm:p-8">
                <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-white/22 via-white/[0.08] to-white/[0.04]" aria-hidden />
                <div className="relative z-[2]">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Primary</p>
                  <a href={`mailto:${email}`} className="group relative inline-flex items-center gap-3 text-[clamp(16px,1.9vw,20px)] font-normal tracking-wide text-zinc-950">
                    <span className="relative">
                      {email}
                      <span className="pointer-events-none absolute -bottom-1 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-zinc-950/35 transition-transform duration-[480ms] group-hover:scale-x-100" />
                    </span>
                    <span className="text-zinc-500/80">→</span>
                  </a>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <MagneticHoverShell disablePull className="inline-flex rounded-full border border-white/60 bg-white/[0.34] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.70)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                      <button type="button" onClick={onCopy} className="relative z-[1] inline-flex items-center justify-center bg-transparent px-4 py-2 text-[0.85rem] font-medium text-zinc-900">{copyLabel}</button>
                    </MagneticHoverShell>
                    <MagneticHoverShell disablePull className="inline-flex rounded-full border border-white/60 bg-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative z-[1] inline-flex items-center gap-2 bg-transparent px-4 py-2 text-[0.85rem] font-medium tracking-[0.12em] text-zinc-900">Resume <span aria-hidden>↗</span></a>
                    </MagneticHoverShell>
                  </div>
                </div>
              </div>
              <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/55 bg-transparent p-5 ring-1 ring-black/[0.04] sm:p-8">
                <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-white/20 via-white/[0.07] to-white/[0.03]" aria-hidden />
                <div className="relative z-[2]">
                  <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Elsewhere</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", icon: IMG.iconX },
                      { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", icon: IMG.iconLinkedIn },
                    ].map((s) => (
                      <MagneticHoverShell key={s.href} disablePull className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl">
                        <Link href={s.href} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-2xl p-4">
                          <div className="min-w-0">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{s.label}</p>
                            <p className="mt-1 truncate text-[0.9rem] text-zinc-800">{s.sub}</p>
                          </div>
                          <Image src={s.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain opacity-80 group-hover:opacity-100" />
                        </Link>
                      </MagneticHoverShell>
                    ))}
                  </div>
                  <div className="mt-3">
                    <MagneticHoverShell disablePull className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl">
                      <Link href="https://github.com/FayfayNEA" target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-2xl p-4">
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">GitHub</p>
                          <p className="mt-1 text-[0.9rem] text-zinc-800">/FayfayNEA</p>
                        </div>
                        <span className="text-zinc-500/80">↗</span>
                      </Link>
                    </MagneticHoverShell>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="mx-auto w-full text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">What I&apos;m listening to</p>
                <iframe
                  src={`${SPOTIFY_EMBED_SRC}&theme=1`}
                  width="100%"
                  className="h-[200px] w-full"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify, what I'm listening to"
                />
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-[76ch] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Stack, Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
            </p>
          </div>

          {/* Desktop contact layout */}
          <div className="hidden w-full md:flex md:items-center md:justify-center md:gap-5">
            {/* Computer + stack label */}
            <div
              className="relative min-w-0"
              style={{ flex: "0 1 min(98vw, calc((100dvh - 8rem) * 1.321))" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "1670 / 1264" }}>
                <Image
                  src={WORK_HERO}
                  alt="Contact, retro computer"
                  fill
                  className="object-contain"
                  priority
                  draggable={false}
                />

                {/* Screen overlay — two horizontal panels: contact → about */}
                <div
                  ref={screenRef}
                  className="absolute z-20 overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ left: "22.55%", top: "25.9%", width: "53.5%", height: "33.25%", borderRadius: "14px", containerType: "inline-size" }}
                >
                  {/* FluidSlab — full screen behind all three panels */}
                  <div className="pointer-events-none absolute inset-0 z-0" style={{ width: "288cqi" }}>
                    <FluidSlab
                      className="h-full w-full"
                      intensity={0.75}
                      tint={[0.12, 0.92, 0.22]}
                      tintStrength={0.2}
                      followMouse
                      mouseStrength={1.6}
                      eventTargetRef={screenRef}
                      maxPixelRatio={1.5}
                      antialias
                    />
                  </div>

                  {/* Three-panel track: Contact → About → Photos. Panels 1+2 are 94cqi so the next panel peeks 6cqi */}
                  <div className="relative z-10 flex h-full" style={{ width: "288cqi" }}>

                    {/* ── Panel 1: Contact — 94cqi so Panel 2 portrait peeks 6cqi ── */}
                    <div
                      className="relative h-full shrink-0 snap-start overflow-hidden"
                      style={{ width: "94cqi", containerType: "inline-size" }}
                    >
                      <div className="flex h-full flex-col justify-center gap-[1.2cqi] px-[4cqi] pt-[2cqi] pb-[2cqi]">
                        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[2cqi]">

                          {/* Left col: primary + spotify */}
                          <div className="flex flex-col gap-[1cqi] min-h-0">
                            <div className="relative isolate overflow-hidden rounded-[2cqi] border border-white/55 bg-white/[0.08] p-[2.5cqi] shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                              <div className="pointer-events-none absolute inset-0 rounded-[2cqi] bg-gradient-to-b from-white/30 via-white/[0.10] to-white/[0.06]" aria-hidden />
                              <span className="pointer-events-none absolute inset-0 z-[1] rounded-[2cqi] bg-repeat opacity-[0.10] mix-blend-overlay" style={{ backgroundImage: OLIVE_CARD_GRAIN_BG, backgroundSize: "180px 180px" }} aria-hidden />
                              <div className="relative z-[2]">
                                <p className="mb-[0.8cqi] font-mono text-[clamp(9px,1.9cqi,14px)] uppercase tracking-[0.22em] text-zinc-500">Primary</p>
                                <a href={`mailto:${email}`} className="group relative inline-flex items-center gap-[1cqi] text-[clamp(11px,2.6cqi,18px)] font-normal text-zinc-950 hover:text-zinc-700">
                                  <span className="relative">
                                    {email}
                                    <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-zinc-950/35 transition-transform duration-[480ms] group-hover:scale-x-100" />
                                  </span>
                                  <span className="text-zinc-500/80">→</span>
                                </a>
                                <div className="mt-[1.5cqi] flex flex-wrap items-center gap-[1cqi]">
                                  <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.34] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.70)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.44]">
                                    <button type="button" onClick={onCopy} className="relative z-[1] inline-flex items-center justify-center bg-transparent px-[2cqi] py-[0.7cqi] text-[clamp(9px,1.9cqi,13px)] font-medium text-zinc-900">{copyLabel}</button>
                                  </MagneticHoverShell>
                                  <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.32]">
                                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative z-[1] inline-flex items-center gap-[0.6cqi] bg-transparent px-[2cqi] py-[0.7cqi] text-[clamp(9px,1.9cqi,13px)] font-medium tracking-[0.08em] text-zinc-900">Resume <span aria-hidden>↗</span></a>
                                  </MagneticHoverShell>
                                </div>
                              </div>
                            </div>
                            <div data-no-pan>
                              <p className="mb-[0.8cqi] font-mono text-[clamp(9px,1.9cqi,14px)] uppercase tracking-[0.22em] text-zinc-500">What I&apos;m listening to</p>
                              <iframe
                                src={SPOTIFY_EMBED_SRC}
                                width="100%"
                                scrolling="no"
                                className="h-[clamp(80px,16cqi,152px)] overscroll-none rounded-[1.5cqi]"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                title="Spotify, what I'm listening to"
                              />
                            </div>
                          </div>

                          {/* Right col: social */}
                          <div className="relative isolate overflow-hidden rounded-[2cqi] border border-white/55 bg-white/[0.07] p-[2.5cqi] shadow-[0_18px_60px_-34px_rgba(0,0,0,0.20),inset_0_1px_0_0_rgba(255,255,255,0.58)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                            <div className="pointer-events-none absolute inset-0 rounded-[2cqi] bg-gradient-to-b from-white/26 via-white/[0.10] to-white/[0.04]" aria-hidden />
                            <div className="relative z-[2]">
                              <p className="mb-[1.5cqi] font-mono text-[clamp(9px,1.9cqi,14px)] uppercase tracking-[0.22em] text-zinc-500">Elsewhere</p>
                              <div className="grid grid-cols-1 gap-[1.2cqi]">
                                {[
                                  { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", icon: IMG.iconX },
                                  { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", icon: IMG.iconLinkedIn },
                                  { href: "https://github.com/FayfayNEA", label: "GitHub", sub: "/FayfayNEA", icon: null },
                                ].map((s) => (
                                  <MagneticHoverShell key={s.href} className="block w-full rounded-[1.5cqi] border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]">
                                    <Link href={s.href} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-[1.5cqi] px-[1.8cqi] py-[1.2cqi]">
                                      <div className="min-w-0">
                                        <p className="font-mono text-[clamp(8px,1.6cqi,11px)] uppercase tracking-[0.18em] text-zinc-500">{s.label}</p>
                                        <p className="mt-[0.3cqi] truncate text-[clamp(10px,2.2cqi,15px)] text-zinc-800">{s.sub}</p>
                                      </div>
                                      {s.icon
                                        ? <Image src={s.icon} alt="" width={20} height={20} className="h-[clamp(12px,2.2cqi,18px)] w-[clamp(12px,2.2cqi,18px)] object-contain opacity-70 group-hover:opacity-100" />
                                        : <span className="text-[clamp(10px,2.2cqi,15px)] text-zinc-500/80">↗</span>
                                      }
                                    </Link>
                                  </MagneticHoverShell>
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* ── Panel 2: About — 94cqi so Panel 3 photos peek 6cqi ── */}
                    <div
                      className="relative h-full shrink-0 snap-start overflow-hidden"
                      style={{ width: "94cqi", containerType: "inline-size" }}
                    >
                      <div className="flex h-full items-stretch gap-[1.5cqi] p-[1.5cqi]">
                        {/* Portrait */}
                        <div className="w-[24%] shrink-0 self-center overflow-hidden rounded-[1.5cqi] ring-1 ring-black/[0.07] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)]">
                          <Image
                            src={PORTRAIT_SRC}
                            alt="Faílenn Aselta"
                            width={2870}
                            height={2633}
                            className="block h-auto w-full object-contain align-top [object-position:center_top]"
                            sizes="(max-width: 1920px) 16vw, 280px"
                          />
                        </div>
                        {/* Bio card — no inner vertical scroll; photos scroll horizontally after the paragraph */}
                        <LiquidGlassCard className="flex flex-1 flex-col rounded-[1.8cqi] p-[2.5cqi]">
                          <button
                            type="button"
                            data-no-pan
                            onClick={() => setZoomed(true)}
                            aria-label="Expand bio to read it larger"
                            className="group mb-[0.5cqi] flex items-center gap-[1cqi] text-left outline-none"
                          >
                            <h2 className="font-mono text-[clamp(11px,2.6cqi,18px)] font-normal leading-tight tracking-[-0.01em] text-zinc-900 transition-colors group-hover:text-zinc-600">
                              I&apos;m Faílenn{" "}
                              <span className="font-light text-[0.75em]">(fay-len)</span>
                            </h2>
                            <span className="shrink-0 rounded-full border border-white/60 bg-white/[0.22] px-[1.4cqi] py-[0.4cqi] font-sans text-[clamp(8px,1.6cqi,11px)] font-medium tracking-[0.08em] text-zinc-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors group-hover:bg-white/[0.32]">
                              expand
                            </span>
                          </button>
                          <div className="space-y-[1.4cqi] text-[clamp(8px,1.7cqi,13px)] leading-[1.6] text-zinc-700 overflow-y-auto [scrollbar-width:thin]">
                            <p>
                              I&apos;m a product designer with 2+ years of design experience.
                            </p>
                            <p>
                              I started with HTML/CSS Tumblr themes in middle school, moved into robotics and
                              C++ and Python in high school. My first year at VT was in Electrical Engineering,
                              but I left for Architecture after realizing my interest sat in how a user interacts
                              with a product. That path led me to parametric and robotic design, and a project
                              selected at the 2025 Venice Biennale.
                            </p>
                            <p>
                              What that background gave me is not something most product designers have. I
                              understand how attention moves, and I ask one question when I look at a screen:
                              how do we make someone&apos;s day seamless and joyful. That instinct, paired with
                              an aesthetic sensibility sharpened through years of rapid iteration, shapes
                              everything I build.
                            </p>
                          </div>
                        </LiquidGlassCard>
                      </div>
                    </div>

                    {/* ── Panel 3: Photos ── */}
                    <div
                      className="relative h-full shrink-0 snap-start overflow-hidden"
                      style={{ width: "100cqi", containerType: "inline-size" }}
                    >
                      <div className="flex h-full flex-col justify-center gap-[1.5cqi] px-[4cqi] py-[3cqi]">
                        <p className="font-mono text-[clamp(9px,2cqi,14px)] uppercase tracking-[0.22em] text-zinc-500">Life</p>
                        <p className="text-[clamp(8px,1.6cqi,12px)] leading-[1.5] text-zinc-700">
                          Outside of work, I love exploring new areas. I&apos;m an avid photographer, hiker,
                          musician, rancher, and writer. Every day I&apos;m fueled with endless curiosity for
                          life, constantly trying to be in awe with everything.
                        </p>
                        <div data-no-pan>
                          <PhotoStrip photos={LIFE_PHOTOS} itemWidth="calc((92cqi - 32px) / 5)" gapPx={8} radiusClass="rounded-[6px]" />
                        </div>
                      </div>
                    </div>

                  </div>{/* end three-panel track */}
                </div>{/* end screen overlay */}

              {/* Arrow buttons — absolutely positioned just below the CRT screen */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-30" style={{ top: "88%" }}>
                <button
                  type="button"
                  onClick={() => goToPanel(currentPanel - 1)}
                  disabled={currentPanel === 0}
                  aria-label="Previous panel"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/[0.18] bg-white/[0.55] text-zinc-500 shadow-sm backdrop-blur-md transition-colors hover:bg-white/[0.78] hover:text-zinc-700 disabled:opacity-25 disabled:pointer-events-none"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M7.5 2L3.5 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <button key={i} type="button" onClick={() => goToPanel(i)} aria-label={`Go to panel ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-200 ${currentPanel === i ? "w-4 bg-zinc-500/75" : "w-1.5 bg-black/[0.15] hover:bg-zinc-400/60"}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goToPanel(currentPanel + 1)}
                  disabled={currentPanel === 2}
                  aria-label="Next panel"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/[0.18] bg-white/[0.55] text-zinc-500 shadow-sm backdrop-blur-md transition-colors hover:bg-white/[0.78] hover:text-zinc-700 disabled:opacity-25 disabled:pointer-events-none"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M4.5 2L8.5 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              </div>

            <p className="mt-0.5 text-center text-[10px] leading-snug text-zinc-400 font-mono uppercase tracking-[0.18em]">
              Stack, Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
            </p>
            </div>{/* end computer flex child */}

          </div>{/* end desktop flex container */}

        </div>{/* end contact section */}

        {/* ── About section (mobile only — desktop lives inside the computer screen) ── */}
        <section
          id="about"
          className="relative z-10 flex w-full flex-col items-center justify-center scroll-mt-[5rem] max-md:py-8 max-md:pb-16 md:hidden"
        >

          {/* Mobile about layout */}
          <div className="w-full max-w-[520px] md:hidden">
            <div className="relative mx-auto mb-14 flex w-[72%] translate-y-[30px] justify-center overflow-hidden rounded-[2px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.06]">
              <Image
                src={PORTRAIT_SRC}
                alt="Faílenn Aselta"
                width={2870}
                height={2633}
                className="block h-auto w-full max-h-none object-contain align-top [object-position:center_top]"
                sizes="85vw"
              />
            </div>
            <LiquidGlassCard className="p-4 sm:p-5">
              <div className="space-y-3.5 text-[13px] leading-[1.62] text-zinc-700">
                <h2 className="font-mono text-[1.3rem] font-normal text-zinc-900">
                  I&apos;m Faílenn{" "}
                  <span className="font-light text-[0.9rem] text-zinc-400">(fay-len)</span>
                </h2>
                <p>
                  My tech journey began early, modding iPhones and selling custom Tumblr themes in middle
                  school. By high school, I was deep into robotics, presenting a thesis on drone
                  construction, and hand-coding hex colors into my C++ data structures. I started at
                  Virginia Tech in Electrical Engineering, but a conversation with my professor made me
                  realize my passion lay in the beauty of creation, not just the mechanics.
                </p>
                <p>
                  Seeking the perfect intersection of mathematics and aesthetics, I pivoted to Architecture.
                  This led to an award-winning project at the 2025 Venice Biennale and roles at renowned
                  firms like JAHN, CLB Architects, and Cloud9. Yet, after experiencing the profession, I
                  yearned to bring technology back to the forefront.
                </p>
              </div>
              <div className="mt-4">
                <div className="mb-2 h-px w-full bg-black/[0.07]" />
                <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-400">
                  What I liked to do!
                </p>
                <PhotoStrip photos={LIFE_PHOTOS} itemWidth="80px" gapPx={8} radiusClass="rounded-xl" />
              </div>
            </LiquidGlassCard>
          </div>


        </section>{/* end about section */}

      </main>
    </div>
  );
}
