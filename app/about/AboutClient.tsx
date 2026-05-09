"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

const PORTRAIT_SRC =
  "https://framerusercontent.com/images/NmEPDMw4n4ZBACyQbLBQzlGMTv0.jpg?width=2870&height=2633";

/** Same grain as contact “liquid” cards — subtle noise in the glass. */
const LIQUID_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

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
  const screenRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Scale content to overlay — baseline matches real CRT width (~54% of asset) so we don’t over-shrink
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
              <h1 className="font-mono text-[1.3rem] font-normal text-zinc-900">I&apos;m Faílenn</h1>
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
            </LiquidGlassCard>
          </div>

          {/* ── Desktop: computer image — same scale as contact page ── */}
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
                  alt="About — retro computer"
                  fill
                  className="object-contain object-center"
                  priority
                  draggable={false}
                />

                {/* Screen overlay — same % coords as contact page */}
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
                  {/* Content — fills bezel; glass card stretches with the screen */}
                  <div
                    ref={contentRef}
                    className="relative z-10 flex h-full min-h-0 w-full items-stretch gap-2 px-[1.5%] py-[1.5%] md:gap-2.5 md:px-[2%] md:py-[2%]"
                  >
                    {/* Portrait — intrinsic height (no fill) so object-contain doesn’t leave a dead band below */}
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

                    {/* Bio — liquid glass fills remaining screen height */}
                    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                      <LiquidGlassCard className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain rounded-[10px] p-[clamp(7px,2.8cqi,14px)] md:rounded-2xl [scrollbar-width:thin]">
                        <h2 className="mb-1 font-mono text-[clamp(13px,3.15cqi,20px)] font-normal leading-tight tracking-[-0.01em] text-zinc-900">
                          I&apos;m Faílenn
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
                      </LiquidGlassCard>
                    </div>
                  </div>
                </div>
              </div>{/* end aspect-ratio wrapper */}
            </div>

            <div className="mx-auto mt-2 w-full max-w-md border-t border-zinc-300/80 pt-2">
              <p className="text-center font-mono text-[11px] uppercase leading-snug tracking-[0.18em] text-zinc-500 md:text-[12px] md:leading-relaxed">
                Stack — Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
