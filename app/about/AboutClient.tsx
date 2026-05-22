"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";

const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

const PORTRAIT_SRC =
  "https://framerusercontent.com/images/NmEPDMw4n4ZBACyQbLBQzlGMTv0.jpg?width=2870&height=2633";

/**
 * Life photos for "What I liked to do!" carousel.
 * Drop matching JPGs into /public/about/ to populate:
 *   trail.jpg      – mountain meadow trail
 *   creek.jpg      – dog wading in mountain creek
 *   blessing.jpg   – monk blessing ceremony
 *   sangha.jpg     – group photo with Buddhist nun
 *   temple.jpg     – Kinkakuji at dusk
 *   img_6626.jpg   – already converted from Downloads
 */
const LIFE_PHOTOS = [
  { src: "/about/trail.jpg",         alt: "Mountain trail" },
  { src: "/about/creek.jpg",         alt: "Mountain creek" },
  { src: "/about/temple.jpg",        alt: "Kinkakuji at dusk" },
  { src: "/about/stairs.jpg",        alt: "Museum stairs" },
  { src: "/about/installation.jpg",  alt: "Light installation" },
  { src: "/about/architecture.jpg",  alt: "Architecture" },
  { src: "/about/blessing.jpg",      alt: "Monk blessing" },
  { src: "/about/sangha.jpg",        alt: "Buddhist study group" },
  { src: "/about/horse.jpg",         alt: "Horse in the barn" },
  { src: "/about/jumping.jpg",       alt: "Show jumping" },
];

/** Same grain as contact “liquid” cards, subtle noise in the glass. */
const LIQUID_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

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

export default function AboutClient() {
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const zoomPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  /** Single scroll: lock page behind overlay; open panel scrolled to bio. */
  useEffect(() => {
    if (!zoomed) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const panel = zoomPanelRef.current;
    const id = requestAnimationFrame(() => {
      if (!panel) return;
      const portrait = panel.querySelector<HTMLElement>("[data-zoom-portrait]");
      panel.scrollTop = portrait ? portrait.offsetHeight + 20 : 140;
    });
    return () => {
      cancelAnimationFrame(id);
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [zoomed]);

  // Scale content to overlay, baseline matches real CRT width (~54% of asset) so we don’t over-shrink
  useEffect(() => {
    const screen = screenRef.current;
    const content = contentRef.current;
    if (!screen || !content) return;
    const BASE_WIDTH = 560;
    const update = () => {
      const scale = Math.min(1, screen.clientWidth / BASE_WIDTH);
      const expandPct = 100 / scale;
      const offsetPct = (expandPct - 100) / 2;
      content.style.transform = `scale(${scale})`;
      content.style.transformOrigin = "top center";
      content.style.width = `${expandPct}%`;
      content.style.marginLeft = `-${offsetPct}%`;
      content.style.marginTop = "0px";
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(screen);
    return () => ro.disconnect();
  }, [mounted]);

  return (
    <div
      className="relative flex min-h-full flex-col bg-transparent text-zinc-900 transition-opacity duration-500 [font-family:var(--font-geist-mono),ui-monospace,monospace]"
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

      {/* Accessibility zoom overlay */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
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
              className="relative w-full max-w-2xl max-h-[min(82dvh,780px)] overflow-y-auto overscroll-contain rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06] backdrop-blur-xl sm:p-10 [scrollbar-width:thin]"
            >
              <button
                onClick={() => setZoomed(false)}
                aria-label="Close zoom"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <div
                data-zoom-portrait
                className="relative mx-auto mb-6 w-full max-w-[220px] overflow-hidden rounded-2xl shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.06] sm:max-w-[240px]"
              >
                <Image
                  src={PORTRAIT_SRC}
                  alt="Faílenn Aselta, portrait"
                  width={2870}
                  height={2633}
                  className="block h-auto w-full object-contain object-top"
                  sizes="(max-width: 640px) 60vw, 240px"
                  priority
                />
              </div>

              <h2 className="mb-1 font-mono text-[1.8rem] font-normal leading-tight tracking-[-0.02em] text-zinc-900">
                I&apos;m Faílenn{" "}
                <span className="font-light text-[1.1rem] text-zinc-400">(fay-len)</span>
              </h2>
              <p className="mb-7 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">About</p>

              <div className="space-y-5 text-[1.05rem] leading-[1.75] text-zinc-700">
                <p>
                  My tech journey began early, modding iPhones and selling custom Tumblr themes in middle
                  school. By high school, I was deep into robotics, presenting a thesis on drone
                  construction, and hand-coding hex colors into my C++ data structures. I started at
                  Virginia Tech in Electrical Engineering, but a conversation with my professor made me
                  realize my passion lay in the beauty of creation, not just the mechanics.
                </p>
                <p>
                  Seeking the perfect intersection of mathematics and aesthetics, I pivoted to
                  Architecture. This led to an award-winning project at the 2025 Venice Biennale and
                  roles at renowned firms like JAHN, CLB Architects, and Cloud9. Yet, after experiencing
                  the profession, I yearned to bring technology back to the forefront.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative flex flex-1 flex-col bg-transparent px-4 py-4 md:px-8 md:py-3">
        {/* On mobile, drop flex-1 so the page sizes to content and the parent
            document grows / scrolls naturally. Desktop keeps centered CRT. */}
        <div className="relative z-10 flex w-full flex-col items-center max-md:py-4 max-md:pb-16 md:flex-1 md:justify-center md:min-h-[calc(100dvh-5rem)]">

          {/* ── Mobile: portrait + stacked text ── */}
          <div className="w-full max-w-[520px] md:hidden">
            <div className="relative mx-auto mb-6 flex w-[72%] translate-y-[30px] justify-center overflow-hidden rounded-[2px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.06]">
              <Image
                src={PORTRAIT_SRC}
                alt="Faílenn Aselta"
                width={2870}
                height={2633}
                className="block h-auto w-full max-h-none object-contain align-top [object-position:center_top]"
                sizes="85vw"
                priority
              />
            </div>
            <LiquidGlassCard className="p-4 sm:p-5">
              <div className="space-y-3.5 text-[13px] leading-[1.62] text-zinc-700">
              <h1 className="font-mono text-[1.3rem] font-normal text-zinc-900">
                I&apos;m Faílenn{" "}
                <span className="font-light text-[0.9rem] text-zinc-400">(fay-len)</span>
              </h1>
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

              {/* ── What I liked to do! (mobile) ── */}
              <div className="mt-4">
                <div className="mb-2 h-px w-full bg-black/[0.07]" />
                <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-400">
                  What I liked to do!
                </p>
                <PhotoStrip
                  photos={LIFE_PHOTOS}
                  itemWidth="80px"
                  gapPx={8}
                  radiusClass="rounded-xl"
                />
              </div>
            </LiquidGlassCard>
          </div>

          {/* ── Desktop: computer image, same scale as contact page ── */}
          <div className="hidden w-full md:block">
            <div
              className="relative mx-auto w-full -mt-5"
              style={{ maxWidth: "min(1200px, 86vw, calc(85dvh * 1.321))" }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: "1670 / 1264" }}
              >
                <Image
                  src={WORK_HERO}
                  alt="About, retro computer"
                  fill
                  className="object-contain object-center"
                  priority
                  draggable={false}
                />

                {/* Screen overlay, same % coords as contact page */}
                <div
                  ref={screenRef}
                  className="absolute z-20 overflow-hidden"
                  style={{
                    left: "22.55%",
                    top: "25.9%",
                    width: "53.5%",
                    height: "33.25%",
                    borderRadius: "14px",
                    containerType: "inline-size",
                  }}
                >
                  {/* Content, fills bezel; glass card stretches with the screen */}
                  <div
                    ref={contentRef}
                    className="relative z-10 flex h-full min-h-0 w-full items-stretch gap-2 px-[1.5%] py-[1.5%] md:gap-2.5 md:px-[2%] md:py-[2%]"
                  >
                    {/* Portrait, intrinsic height (no fill) so object-contain doesn’t leave a dead band below */}
                    <div className="relative flex w-[34%] min-w-0 shrink-0 translate-y-[30px] justify-center self-start overflow-hidden rounded-[10px] ring-1 ring-black/[0.07] shadow-[0_12px_32px_-10px_rgba(0,0,0,0.18)] md:rounded-xl md:w-[36%]">
                      <Image
                        src={PORTRAIT_SRC}
                        alt="Faílenn Aselta"
                        width={2870}
                        height={2633}
                        className="block h-auto w-full max-h-none object-contain align-top [object-position:center_top]"
                        sizes="(max-width: 1200px) 28vw, 240px"
                      />
                    </div>

                    {/* Bio, liquid glass fills remaining screen height */}
                    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                      <LiquidGlassCard className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain rounded-[10px] p-[clamp(7px,2.8cqi,14px)] md:rounded-2xl [scrollbar-width:thin]">
                        <h2 className="mb-1 font-mono text-[clamp(13px,3.15cqi,20px)] font-normal leading-tight tracking-[-0.01em] text-zinc-900">
                          I&apos;m Faílenn{" "}
                          <span className="font-light text-[0.78em] text-zinc-400">(fay-len)</span>
                        </h2>
                        <div className="min-h-0 space-y-1.5 text-[clamp(8.5px,1.78cqi,12px)] leading-[1.56] text-zinc-700 md:space-y-1.5 md:leading-[1.6]">
                          <p>
                            My tech journey began early, modding iPhones and selling custom Tumblr themes
                            in middle school. By high school, I was deep into robotics, presenting a
                            thesis on drone construction, and hand-coding hex colors into my C++ data
                            structures. I started at Virginia Tech in Electrical Engineering, but a
                            conversation with my professor made me realize my passion lay in the beauty
                            of creation, not just the mechanics.
                          </p>
                          <p>
                            Seeking the perfect intersection of mathematics and aesthetics, I pivoted to
                            Architecture. This led to an award-winning project at the 2025 Venice
                            Biennale and roles at renowned firms like JAHN, CLB Architects, and Cloud9.
                            Yet, after experiencing the profession, I yearned to bring technology back
                            to the forefront.
                          </p>
                        </div>

                        {/* ── What I liked to do! ── */}
                        <div className="mt-[clamp(5px,1.4cqi,9px)]">
                          <div className="mb-[clamp(3px,0.9cqi,5px)] h-px w-full bg-black/[0.07]" />
                          <p className="mb-[clamp(3px,0.8cqi,5px)] font-mono text-[clamp(5.5px,1.1cqi,7.5px)] uppercase tracking-[0.2em] text-zinc-400">
                            What I liked to do!
                          </p>
                          <PhotoStrip
                            photos={LIFE_PHOTOS}
                            itemWidth="clamp(26px,9.5cqi,64px)"
                            gapPx={4}
                            radiusClass="rounded-[5px]"
                          />
                        </div>
                      </LiquidGlassCard>
                    </div>
                  </div>
                </div>
              </div>{/* end aspect-ratio wrapper */}
            </div>

            <div className="mx-auto mt-2 w-full max-w-md border-t border-zinc-300/80 pt-2">
              <p className="text-center font-mono text-[11px] uppercase leading-snug tracking-[0.18em] text-zinc-500 md:text-[12px] md:leading-relaxed">
                Stack, Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
