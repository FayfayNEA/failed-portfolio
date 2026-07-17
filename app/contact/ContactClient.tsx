"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import FluidSlab from "@/components/fluid-slab";
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

const DOT_GRID_BG =
  "bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px]";

const RESUME_URL = "/failenn-resume.pdf";

const SPOTIFY_EMBED_SRC =
  "https://open.spotify.com/embed/playlist/1TbQQFsnSW6s1efIybMEg5?utm_source=generator";

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

const magneticSpring = { stiffness: 380, damping: 36, mass: 1 } as const;
const MAG_STRENGTH = 3.5;

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const open = openIndex !== null;
  const openTween = { duration: 0.16, ease: [0.25, 0.1, 0.25, 1] as const };
  const photoTween = { duration: 0.12, ease: [0.25, 0.1, 0.25, 1] as const };

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) setZoomed(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false);
        else setOpenIndex(null);
      }
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, photos.length, zoomed]);

  const current = openIndex !== null ? photos[openIndex] : null;

  const lightbox =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && current && openIndex !== null && (
          <motion.div
            key="life-lightbox"
            className={cn(
              "fixed inset-0 z-[220] flex items-center justify-center",
              zoomed ? "p-2 sm:p-3" : "p-4 sm:p-8",
            )}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={openTween}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/35"
              onClick={() => setOpenIndex(null)}
              aria-label="Close photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={openTween}
            />

            {/* macOS-style preview window */}
            <motion.div
              className={cn(
                "relative z-[1] flex w-full flex-col overflow-hidden rounded-[12px] bg-[#ececec] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4),0_0_0_0.5px_rgba(0,0,0,0.14)]",
                zoomed ? "h-[min(96dvh,100%)] max-w-[min(1400px,100%)]" : "max-w-[min(920px,100%)]",
              )}
              onClick={(e) => e.stopPropagation()}
              layout
              transition={openTween}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
            >
              {/* Title bar — traffic lights stay clickable on top */}
              <div className="relative z-20 flex h-12 shrink-0 items-center border-b border-black/[0.06] bg-[#f6f6f6] px-3.5">
                <div className="relative z-30 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(null)}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label="Close"
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (zoomed) setZoomed(false);
                      else setOpenIndex(null);
                    }}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label={zoomed ? "Restore" : "Minimize"}
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomed((v) => !v)}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label={zoomed ? "Restore window size" : "Make window larger"}
                    aria-pressed={zoomed}
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center bg-[#e4e4e4] px-5 pb-3 pt-3 sm:px-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    className={cn(
                      "max-w-full rounded-[6px] object-contain shadow-[0_8px_28px_-12px_rgba(0,0,0,0.28)]",
                      zoomed ? "max-h-[min(78dvh,900px)]" : "max-h-[min(58dvh,640px)]",
                    )}
                    draggable={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={photoTween}
                  />
                </AnimatePresence>
              </div>

              <div className="flex shrink-0 justify-center bg-[#ececec] px-4 pb-4 pt-2">
                <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none]">
                  {photos.map(({ src, alt }, i) => {
                    const active = i === openIndex;
                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setOpenIndex(i)}
                        className={cn(
                          "relative h-14 w-14 shrink-0 overflow-hidden rounded-[5px] outline-none transition-opacity duration-100 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0a84ff]/50 sm:h-16 sm:w-16",
                          !active && "ring-1 ring-inset ring-black/[0.08]",
                        )}
                        aria-label={`Show ${alt}`}
                        aria-current={active ? "true" : undefined}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        {active && (
                          <span
                            className="pointer-events-none absolute inset-0 rounded-[5px] ring-2 ring-inset ring-[#0a84ff]"
                            aria-hidden
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <div className="overflow-x-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.15)_transparent] pb-1">
      <div className="flex" style={{ gap: gapPx }}>
        {photos.map(({ src, alt }, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`relative shrink-0 cursor-zoom-in overflow-hidden ${radiusClass} ring-1 ring-black/[0.06] outline-none transition-opacity duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-zinc-400/50`}
            style={{ width: itemWidth, aspectRatio: "3/4" }}
            aria-label={`View ${alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
      {lightbox}
    </div>
  );
}

function LiquidGlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-2xl border border-white/55 bg-white/[0.14]",
        "shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)]",
        "backdrop-blur-xl backdrop-saturate-125",
        className ?? "",
      ].join(" ")}
    >
      {/* No own radius — parent overflow-hidden clips these, avoids double-corner artifacts */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/38 via-white/[0.14] to-white/[0.08]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 z-[1] bg-repeat opacity-[0.10] mix-blend-overlay"
        style={{ backgroundImage: LIQUID_CARD_GRAIN_BG, backgroundSize: "180px 180px" }}
        aria-hidden
      />
      <div className="relative z-[2] flex h-full min-h-0 flex-col">{children}</div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ContactClient() {
  const email = "failennaselta@gmail.com";
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [zoomWindowLarge, setZoomWindowLarge] = useState(false);
  const isBelowMd = useIsBelowMd();
  const pageRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const zoomPanelRef = useRef<HTMLDivElement | null>(null);
  const zoomedRef = useRef(false);
  const goToPanelRef = useRef<(index: number) => void>(() => {});
  const panelAnimRef = useRef({ locked: false, raf: 0 });
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
    requestAnimationFrame(() => {
      goToPanelRef.current(index);
    });
  }, [searchParams, mounted]);

  // Keep ref in sync so the wheel handler can check without a stale closure
  useEffect(() => { zoomedRef.current = zoomed; }, [zoomed]);

  // Lock scroll when contact zoom is open
  useEffect(() => {
    if (!zoomed) {
      setZoomWindowLarge(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomWindowLarge) setZoomWindowLarge(false);
      else setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
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
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [zoomed, zoomWindowLarge]);





  const [currentPanel, setCurrentPanel] = useState(0);
  const currentPanelRef = useRef(0);
  useEffect(() => {
    currentPanelRef.current = currentPanel;
  }, [currentPanel]);

  const goToPanel = (index: number) => {
    const el = screenRef.current;
    if (!el) return;
    const panels = el.querySelectorAll<HTMLElement>("[data-crt-panel]");
    if (!panels.length) return;
    const i = Math.max(0, Math.min(panels.length - 1, index));
    const target = panels[i];
    if (!target) return;
    if (panelAnimRef.current.locked && i === currentPanelRef.current) return;

    cancelAnimationFrame(panelAnimRef.current.raf);
    panelAnimRef.current.locked = true;
    currentPanelRef.current = i;
    setCurrentPanel(i);

    const dest = target.offsetTop;
    const start = el.scrollTop;
    const dist = dest - start;
    if (Math.abs(dist) < 1) {
      el.scrollTop = dest;
      panelAnimRef.current.locked = false;
      return;
    }
    const t0 = performance.now();
    const duration = 620;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - t) ** 3;
      el.scrollTop = start + dist * eased;
      if (t < 1) {
        panelAnimRef.current.raf = requestAnimationFrame(tick);
      } else {
        el.scrollTop = dest;
        panelAnimRef.current.locked = false;
      }
    };
    panelAnimRef.current.raf = requestAnimationFrame(tick);
  };
  goToPanelRef.current = goToPanel;

  // Discrete paging only: one wheel gesture → exactly one panel.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    let acc = 0;
    let gestureActive = false;
    let gestureTimer: ReturnType<typeof setTimeout> | null = null;

    const endGesture = () => {
      gestureActive = false;
      acc = 0;
    };

    const onWheel = (e: WheelEvent) => {
      if (zoomedRef.current) return;
      if ((e.target as HTMLElement).closest?.("[data-no-pan]")) return;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (!delta) return;

      const panels = el.querySelectorAll("[data-crt-panel]");
      if (panels.length < 2) return;

      e.preventDefault();
      e.stopPropagation();

      if (panelAnimRef.current.locked) return;

      if (gestureActive) {
        if (gestureTimer) clearTimeout(gestureTimer);
        gestureTimer = setTimeout(endGesture, 180);
        return;
      }

      acc += delta;
      if (Math.abs(acc) < 24) return;

      const dir = acc > 0 ? 1 : -1;
      acc = 0;
      gestureActive = true;
      if (gestureTimer) clearTimeout(gestureTimer);
      gestureTimer = setTimeout(endGesture, 180);

      const next = Math.max(0, Math.min(panels.length - 1, currentPanelRef.current + dir));
      if (next === currentPanelRef.current) {
        endGesture();
        return;
      }
      goToPanelRef.current(next);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (gestureTimer) clearTimeout(gestureTimer);
    };
  }, []);

  // Drive the scrubber from the screen's vertical scroll position.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollHeight - el.clientHeight;
      setScrollBar({
        pct: max > 0 ? el.scrollTop / max : 0,
        ratio: el.scrollHeight > 0 ? el.clientHeight / el.scrollHeight : 1,
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

  // Drag: swipe past a threshold → next/prev page (no free half-scroll).
  const onTrackpadDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (panelAnimRef.current.locked) return;
    const startY = e.clientY;
    const move = (ev: PointerEvent) => {
      const dy = ev.clientY - startY;
      if (Math.abs(dy) < 36) return;
      const dir = dy > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(2, currentPanelRef.current + dir));
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      if (next !== currentPanelRef.current) goToPanelRef.current(next);
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // Physical trackpad over the graphic — same one-gesture paging.
  const onTrackpadWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  const copyLabel = copied ? "Copied" : "Copy email";
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
      {/* Accessibility zoom button — aligned with the floating contact icon stack */}
      <button
        onClick={() => setZoomed(true)}
        aria-label="Zoom in for accessibility"
        className="fixed left-6 top-1/2 z-[70] -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md ring-1 ring-black/[0.08] backdrop-blur-md transition-colors hover:bg-white"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Contact zoom overlay — macOS window, same language as photo tab */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            data-no-pan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              "fixed inset-0 z-[200] flex items-center justify-center",
              zoomWindowLarge
                ? "px-2 pb-2 pt-[calc(env(safe-area-inset-top)+4.75rem)] sm:px-3 sm:pb-3"
                : "px-4 pb-4 pt-[calc(env(safe-area-inset-top)+4.75rem)] sm:px-8 sm:pb-8",
            )}
            onClick={() => setZoomed(false)}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/35"
              onClick={() => setZoomed(false)}
              aria-label="Close zoom"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              layout
              className={cn(
                "relative z-[1] flex w-full flex-col overflow-hidden rounded-[12px] bg-[#ececec] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4),0_0_0_0.5px_rgba(0,0,0,0.14)]",
                zoomWindowLarge
                  ? "h-full max-h-[min(calc(100dvh-env(safe-area-inset-top)-5.5rem),920px)] max-w-[min(980px,100%)]"
                  : "max-h-[min(calc(100dvh-env(safe-area-inset-top)-6.5rem),640px)] max-w-[min(560px,100%)]",
              )}
            >
              <div className="relative z-20 flex h-12 shrink-0 items-center border-b border-black/[0.06] bg-[#f6f6f6] px-3.5">
                <div className="relative z-30 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setZoomed(false)}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label="Close"
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (zoomWindowLarge) setZoomWindowLarge(false);
                      else setZoomed(false);
                    }}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label={zoomWindowLarge ? "Restore" : "Minimize"}
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomWindowLarge((v) => !v)}
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    aria-label={zoomWindowLarge ? "Restore window size" : "Make window larger"}
                    aria-pressed={zoomWindowLarge}
                  >
                    <span className="h-[12px] w-[12px] rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.18)]" />
                  </button>
                </div>
              </div>

              <div
                ref={zoomPanelRef}
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#e8e8e8] p-6 sm:p-8 [scrollbar-width:thin]"
              >
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
                  <h2 className="font-mono text-[1.4rem] font-bold leading-tight text-zinc-900">
                    Faílenn{" "}
                    <span className="font-light text-[0.7em] text-zinc-400">(fay-len)</span>
                  </h2>
                </div>
                <div className="mt-6 space-y-3.5 text-[0.95rem] leading-[1.65] text-zinc-700">
                  <p>
                    I&apos;m a Product Designer interested in where attention lands in products.
                  </p>
                  <p>
                    My path wasn&apos;t traditional. I started with HTML/CSS Tumblr themes, moved into
                    robotics and programming, then switched to Architecture after realizing I cared most
                    about how people&apos;s experiences. Today I build digital interfaces with an engineering
                    mindset and a focus on making technology feel intuitive.
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
                  className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-[0.95rem] font-medium text-white hover:bg-zinc-700 transition-colors"
                >
                  Resume
                </a>
              </div>

              <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">Elsewhere</p>
              <div className="space-y-3">
                {[
                  { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", kind: "x" as const },
                  { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", kind: "linkedin" as const },
                  { href: "https://github.com/FayfayNEA", label: "GitHub", sub: "/FayfayNEA", kind: "github" as const },
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
                    {s.kind === "x" ? (
                      <Image src={IMG.iconX} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain opacity-70" />
                    ) : s.kind === "linkedin" ? (
                      <Image src={IMG.iconLinkedIn} alt="" width={26} height={26} className="h-[26px] w-[26px] translate-x-px object-contain opacity-70" />
                    ) : (
                      <GitHubIcon className="h-[22px] w-[22px] text-zinc-500" />
                    )}
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
                  height={152}
                  className="h-[152px] w-full rounded-xl"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify, what I'm listening to"
                />
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <main ref={pageRef} className={cn("relative flex flex-1 flex-col px-4 py-4 md:px-8 md:py-0 md:overflow-hidden", DOT_GRID_BG)}>

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
                      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative z-[1] inline-flex items-center bg-transparent px-4 py-2 text-[0.85rem] font-medium tracking-[0.12em] text-zinc-900">Resume</a>
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
                      { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", icon: IMG.iconX, linkedIn: false },
                      { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", icon: IMG.iconLinkedIn, linkedIn: true },
                    ].map((s) => (
                      <MagneticHoverShell key={s.href} disablePull className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl">
                        <Link href={s.href} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-2xl p-4">
                          <div className="min-w-0">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{s.label}</p>
                            <p className="mt-1 truncate text-[0.9rem] text-zinc-800">{s.sub}</p>
                          </div>
                          <Image
                            src={s.icon}
                            alt=""
                            width={s.linkedIn ? 46 : 40}
                            height={s.linkedIn ? 46 : 40}
                            className={cn(
                              "object-contain opacity-80 group-hover:opacity-100",
                              s.linkedIn ? "h-11 w-11 translate-x-px" : "h-10 w-10",
                            )}
                          />
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
                        <GitHubIcon className="h-10 w-10 text-zinc-600 opacity-80 group-hover:opacity-100" />
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
                  height={152}
                  className="h-[152px] w-full rounded-xl"
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

                {/* Screen overlay — vertical panels: contact → about → photos */}
                <div
                  ref={screenRef}
                  className="absolute z-20 overflow-hidden overscroll-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ left: "22.55%", top: "25.9%", width: "53.5%", height: "33.25%", borderRadius: "14px", containerType: "size" }}
                >
                  {/* FluidSlab — green swirl behind all three CRT panels */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-0 w-full" style={{ height: "284cqh" }} aria-hidden>
                    <FluidSlab
                      className="h-full w-full"
                      intensity={0.75}
                      tint={[0.12, 0.92, 0.22]}
                      tintStrength={0.1}
                      followMouse
                      mouseStrength={1.6}
                      eventTargetRef={screenRef}
                      maxPixelRatio={1.5}
                    />
                  </div>

                  {/* Contact → About → Life. First two are short so the next panel peeks. */}
                  <div className="relative z-10 flex w-full flex-col" style={{ height: "284cqh" }}>

                    {/* ── Panel 1: Contact — peeks bio card ── */}
                    <div
                      data-crt-panel
                      className="relative w-full shrink-0 overflow-hidden"
                      style={{ height: "92cqh", containerType: "inline-size" }}
                    >
                      <div className="flex h-full flex-col justify-center gap-[0.8cqi] px-[2.2cqi] py-[1.2cqi]">
                        <div className="grid min-h-0 grid-cols-[1.1fr_0.9fr] gap-[1.1cqi]">

                          {/* Left col: primary + spotify */}
                          <div className="flex min-h-0 flex-col gap-[0.7cqi]">
                            <div className="relative isolate overflow-hidden rounded-[1.6cqi] border border-white/55 bg-white/[0.08] p-[1.9cqi] shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                              <div className="pointer-events-none absolute inset-0 rounded-[1.6cqi] bg-gradient-to-b from-white/30 via-white/[0.10] to-white/[0.06]" aria-hidden />
                              <span className="pointer-events-none absolute inset-0 z-[1] rounded-[1.6cqi] bg-repeat opacity-[0.10] mix-blend-overlay" style={{ backgroundImage: OLIVE_CARD_GRAIN_BG, backgroundSize: "180px 180px" }} aria-hidden />
                              <div className="relative z-[2]">
                                <p className="mb-[0.5cqi] font-mono text-[clamp(8px,1.65cqi,12px)] uppercase tracking-[0.22em] text-zinc-500">Primary</p>
                                <a href={`mailto:${email}`} className="group relative inline-flex max-w-full items-center gap-[0.6cqi] text-[clamp(10px,2.25cqi,16px)] font-normal leading-snug text-zinc-950 hover:text-zinc-700">
                                  <span className="relative truncate">
                                    {email}
                                    <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-zinc-950/35 transition-transform duration-[480ms] group-hover:scale-x-100" />
                                  </span>
                                  <span className="shrink-0 text-zinc-500/80">→</span>
                                </a>
                                <div className="mt-[1cqi] flex flex-wrap items-center gap-[0.7cqi]">
                                  <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.34] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.70)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.44]">
                                    <button type="button" onClick={onCopy} className="relative z-[1] inline-flex items-center justify-center bg-transparent px-[1.7cqi] py-[0.5cqi] text-[clamp(8px,1.65cqi,12px)] font-medium text-zinc-900">{copyLabel}</button>
                                  </MagneticHoverShell>
                                  <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.32]">
                                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative z-[1] inline-flex items-center bg-transparent px-[1.7cqi] py-[0.5cqi] text-[clamp(8px,1.65cqi,12px)] font-medium tracking-[0.08em] text-zinc-900">Resume</a>
                                  </MagneticHoverShell>
                                </div>
                              </div>
                            </div>
                            <div data-no-pan className="min-h-0">
                              <p className="mb-[0.4cqi] font-mono text-[clamp(8px,1.65cqi,12px)] uppercase tracking-[0.22em] text-zinc-500">What I&apos;m listening to</p>
                              {/* Scale Spotify compact player so it fits the CRT without clipping */}
                              <div className="h-[clamp(64px,12.5cqi,92px)] overflow-hidden rounded-[10px]">
                                <div className="origin-top-left scale-[0.6] w-[166.67%]">
                                  <iframe
                                    src={SPOTIFY_EMBED_SRC}
                                    width="100%"
                                    height={152}
                                    scrolling="no"
                                    className="h-[152px] w-full overscroll-none rounded-[12px]"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    title="Spotify, what I'm listening to"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right col: social */}
                          <div className="relative isolate min-h-0 overflow-hidden rounded-[1.6cqi] border border-white/55 bg-white/[0.07] p-[1.9cqi] shadow-[0_18px_60px_-34px_rgba(0,0,0,0.20),inset_0_1px_0_0_rgba(255,255,255,0.58)] ring-1 ring-black/[0.05] backdrop-blur-xl">
                            <div className="pointer-events-none absolute inset-0 rounded-[1.6cqi] bg-gradient-to-b from-white/26 via-white/[0.10] to-white/[0.04]" aria-hidden />
                            <div className="relative z-[2]">
                              <p className="mb-[0.9cqi] font-mono text-[clamp(8px,1.65cqi,12px)] uppercase tracking-[0.22em] text-zinc-500">Elsewhere</p>
                              <div className="grid grid-cols-1 gap-[0.7cqi]">
                                {[
                                  { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", kind: "x" as const },
                                  { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", kind: "linkedin" as const },
                                  { href: "https://github.com/FayfayNEA", label: "GitHub", sub: "/FayfayNEA", kind: "github" as const },
                                ].map((s) => (
                                  <MagneticHoverShell key={s.href} className="block w-full rounded-[1.2cqi] border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]">
                                    <Link href={s.href} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-[1.2cqi] px-[1.4cqi] py-[0.8cqi]">
                                      <div className="min-w-0">
                                        <p className="font-mono text-[clamp(7px,1.4cqi,10px)] uppercase tracking-[0.18em] text-zinc-500">{s.label}</p>
                                        <p className="mt-[0.15cqi] truncate text-[clamp(9px,1.85cqi,13px)] text-zinc-800">{s.sub}</p>
                                      </div>
                                      {s.kind === "x" ? (
                                        <Image src={IMG.iconX} alt="" width={20} height={20} className="h-[clamp(11px,2cqi,15px)] w-[clamp(11px,2cqi,15px)] object-contain opacity-70 group-hover:opacity-100" />
                                      ) : s.kind === "linkedin" ? (
                                        <Image src={IMG.iconLinkedIn} alt="" width={24} height={24} className="h-[clamp(13px,2.3cqi,17px)] w-[clamp(13px,2.3cqi,17px)] translate-x-px object-contain opacity-70 group-hover:opacity-100" />
                                      ) : (
                                        <GitHubIcon className="h-[clamp(11px,2cqi,15px)] w-[clamp(11px,2cqi,15px)] text-zinc-600 opacity-70 group-hover:opacity-100" />
                                      )}
                                    </Link>
                                  </MagneticHoverShell>
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* ── Panel 2: About / bio — peeks Life title ── */}
                    <div
                      data-crt-panel
                      className="relative w-full shrink-0 overflow-hidden"
                      style={{ height: "92cqh", containerType: "inline-size" }}
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
                        {/* Bio card */}
                        <LiquidGlassCard className="flex min-h-0 flex-1 flex-col p-[2.4cqi]">
                          <button
                            type="button"
                            data-no-pan
                            onClick={() => setZoomed(true)}
                            aria-label="Expand bio to read it larger"
                            className="group mb-[1.5cqi] flex shrink-0 items-center gap-[1cqi] text-left outline-none"
                          >
                            <h2 className="font-mono text-[clamp(12px,2.8cqi,18px)] font-bold leading-tight tracking-[-0.01em] text-zinc-900 transition-colors group-hover:text-zinc-600">
                              Faílenn{" "}
                              <span className="font-light text-[0.75em]">(fay-len)</span>
                            </h2>
                            <span className="shrink-0 rounded-full border border-white/60 bg-white/[0.22] px-[1.5cqi] py-[0.45cqi] font-sans text-[clamp(9px,1.7cqi,12px)] font-medium tracking-[0.08em] text-zinc-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors group-hover:bg-white/[0.32]">
                              expand
                            </span>
                          </button>
                          <div className="min-h-0 flex-1 space-y-[1.25cqi] overflow-y-auto text-[clamp(9px,1.85cqi,13px)] leading-[1.56] text-zinc-700 [scrollbar-width:none]">
                            <p>
                              I&apos;m a Product Designer interested in where attention lands in products.
                            </p>
                            <p>
                              My path wasn&apos;t traditional. I started with HTML/CSS Tumblr themes, moved into
                              robotics and programming, then switched to Architecture after realizing I cared
                              most about how people&apos;s experiences. Today I build digital interfaces with an
                              engineering mindset and a focus on making technology feel intuitive.
                            </p>
                          </div>
                        </LiquidGlassCard>
                      </div>
                    </div>

                    {/* ── Panel 3: Life / photos ── */}
                    <div
                      data-crt-panel
                      className="relative w-full shrink-0 overflow-hidden"
                      style={{ height: "100cqh", containerType: "inline-size" }}
                    >
                      <div className="flex h-full flex-col justify-start gap-[1.8cqi] px-[3.2cqi] pb-[2.6cqi] pt-[1.2cqi]">
                        <p className="font-mono text-[clamp(10px,2.3cqi,15px)] uppercase tracking-[0.22em] text-zinc-500">Life</p>
                        <p className="text-[clamp(10px,2cqi,14px)] leading-[1.55] text-zinc-700">
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
                    <path d="M2 7.5L6 3.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <path d="M2 4.5L6 8.5l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
              <div className="text-[13px] leading-[1.65] text-zinc-700">
                <h2 className="mb-5 font-mono text-[1.3rem] font-bold text-zinc-900">
                  Faílenn{" "}
                  <span className="font-light text-[0.9rem] text-zinc-400">(fay-len)</span>
                </h2>
                <div className="space-y-3.5">
                  <p>
                    I&apos;m a Product Designer interested in where attention lands in products.
                  </p>
                  <p>
                    My path wasn&apos;t traditional. I started with HTML/CSS Tumblr themes, moved into
                    robotics and programming, then switched to Architecture after realizing I cared most
                    about how people&apos;s experiences. Today I build digital interfaces with an engineering
                    mindset and a focus on making technology feel intuitive.
                  </p>
                </div>
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
