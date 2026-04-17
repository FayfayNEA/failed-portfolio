"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const IMG = {
  iconX:
    "https://framerusercontent.com/images/XHCI0VfDaD9WU6YV4lBNwS9e3Ek.png?width=1250&height=1250",
  iconLinkedIn:
    "https://framerusercontent.com/images/8KmffkjfNuwc79LA0N3ciLnJw.png?width=1200&height=1200",
} as const;

const RESUME_URL = "/failenn-resume-de.pdf";

/** SVG feTurbulence — editorial grain on olive card (inline style avoids JSX quote issues). */
const OLIVE_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

const magneticSpring = { stiffness: 400, damping: 30, mass: 1 } as const;
const MAG_STRENGTH = 14;

/** Pointer “pull” + drifting sheen — matches Copy email control. */
function MagneticHoverShell({
  className,
  children,
  disablePull = false,
}: {
  className?: string;
  children: React.ReactNode;
  /** Skip springs on small screens to avoid extra work while scrolling. */
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
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };
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
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-2xl"
        style={{ x: sheenX, y: sheenY }}
      />
      {children}
    </motion.div>
  );
}

export default function ContactClient() {
  const email = "failennaselta@gmail.com";
  const [copied, setCopied] = useState(false);
  const pageRef = useRef<HTMLElement | null>(null);
  const isBelowMd = useIsBelowMd();

  const copyLabel = copied ? "Copied" : "Copy email";
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative -mt-[4.5rem] flex min-h-full flex-col bg-transparent pt-[4.5rem] text-zinc-900 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif] md:-mt-[5rem] md:pt-[5rem]">
      <main
        ref={pageRef}
        className="relative flex min-h-[100dvh] flex-col bg-transparent"
      >
        {/* Viewport-fixed fluid background for the Contact route. */}
        <div className="pointer-events-none sticky top-0 z-0 h-[100dvh] -mb-[100dvh] bg-[var(--canvas)] [transform:translateZ(0)]">
          <FluidSlab
            className="h-full w-full"
            intensity={isBelowMd ? 0.5 : 0.75}
            tint={[0.12, 0.92, 0.22]}
            tintStrength={0.2}
            followMouse={!isBelowMd}
            mouseStrength={1.6}
            eventTargetRef={pageRef}
            maxPixelRatio={isBelowMd ? 1 : 1.5}
            antialias={!isBelowMd}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/[0.02]"
          />
        </div>
        <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-14 sm:px-6 max-[900px]:py-10">
          <div className="relative w-full max-w-[980px]">
            <div className="relative">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_0.9fr]">
                {/* Primary glass slab */}
                <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/55 bg-white/[0.08] p-5 sm:p-8 shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)] ring-1 ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125 md:backdrop-blur-2xl">
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-white/30 via-white/[0.10] to-white/[0.06]"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-0 z-[1] max-[910px]:hidden rounded-[2.25rem] bg-repeat opacity-[0.08] mix-blend-overlay min-[911px]:opacity-[0.10]"
                  style={{
                    backgroundImage: OLIVE_CARD_GRAIN_BG,
                    backgroundSize: "180px 180px",
                  }}
                  aria-hidden
                />

                <div className="relative z-[2]">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Primary
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="group relative inline-flex items-center gap-3 rounded-2xl px-3 py-2 text-[clamp(16px,1.9vw,20px)] font-normal tracking-wide text-zinc-950 outline-none transition-colors hover:text-zinc-900 focus-visible:ring-1 focus-visible:ring-black/15"
                  >
                    <span className="relative">
                      {email}
                      <span className="pointer-events-none absolute -bottom-1 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-zinc-950/35 transition-transform duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    </span>
                    <span className="text-zinc-500/80">→</span>
                  </a>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <MagneticHoverShell
                      disablePull={isBelowMd}
                      className="inline-flex rounded-full border border-white/60 bg-white/[0.34] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.70)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.44]"
                    >
                      <button
                        type="button"
                        onClick={onCopy}
                        className="relative z-[1] inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-[0.85rem] font-medium text-zinc-900 outline-none focus-visible:ring-1 focus-visible:ring-black/15"
                        aria-label={copyLabel}
                      >
                        {copyLabel}
                      </button>
                    </MagneticHoverShell>

                    <MagneticHoverShell
                      disablePull={isBelowMd}
                      className="inline-flex rounded-full border border-white/60 bg-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.32]"
                    >
                      <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-[1] inline-flex items-center gap-2 bg-transparent px-4 py-2 text-[0.85rem] font-medium tracking-[0.12em] text-zinc-900 outline-none focus-visible:ring-1 focus-visible:ring-black/15"
                      >
                        Resume
                        <span aria-hidden="true">↗</span>
                      </a>
                    </MagneticHoverShell>
                  </div>
                </div>
              </div>

              {/* Social / secondary */}
              <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/55 bg-white/[0.07] p-5 sm:p-8 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.20),inset_0_1px_0_0_rgba(255,255,255,0.58)] ring-1 ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125 md:backdrop-blur-2xl">
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-white/26 via-white/[0.10] to-white/[0.04]"
                  aria-hidden
                />

                <div className="relative z-[2]">
                  <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Elsewhere
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <MagneticHoverShell
                      disablePull={isBelowMd}
                      className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]"
                    >
                      <Link
                        href="https://x.com/failennaselta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-[1] flex w-full items-center justify-between rounded-2xl p-4 outline-none focus-visible:ring-1 focus-visible:ring-black/15"
                        aria-label="X (Twitter)"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                            X
                          </p>
                          <p className="mt-1 truncate text-[0.9rem] text-zinc-800">@failennaselta</p>
                        </div>
                        <Image
                          src={IMG.iconX}
                          alt=""
                          width={88}
                          height={88}
                          className="h-10 w-10 object-contain opacity-80 transition-all duration-300 ease-out group-hover:opacity-100"
                        />
                      </Link>
                    </MagneticHoverShell>

                    <MagneticHoverShell
                      disablePull={isBelowMd}
                      className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]"
                    >
                      <Link
                        href="https://www.linkedin.com/in/fa%C3%ADlenn-aselta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-[1] flex w-full items-center justify-between rounded-2xl p-4 outline-none focus-visible:ring-1 focus-visible:ring-black/15"
                        aria-label="LinkedIn"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                            LinkedIn
                          </p>
                          <p className="mt-1 truncate text-[0.9rem] text-zinc-800">Failenn Aselta</p>
                        </div>
                        <Image
                          src={IMG.iconLinkedIn}
                          alt=""
                          width={88}
                          height={88}
                          className="h-10 w-10 object-contain opacity-80 transition-all duration-300 ease-out group-hover:opacity-100"
                        />
                      </Link>
                    </MagneticHoverShell>
                  </div>

                  <div className="mt-3">
                    <MagneticHoverShell
                      disablePull={isBelowMd}
                      className="block w-full rounded-2xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]"
                    >
                      <Link
                        href="https://github.com/FayfayNEA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-[1] flex w-full items-center justify-between rounded-2xl p-4 outline-none focus-visible:ring-1 focus-visible:ring-black/15"
                        aria-label="GitHub"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                            GitHub
                          </p>
                          <p className="mt-1 truncate text-[0.9rem] text-zinc-800">/FayfayNEA</p>
                        </div>
                        <span className="text-zinc-500/80">↗</span>
                      </Link>
                    </MagneticHoverShell>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="mx-auto w-full max-w-[min(560px,100%)] text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  What I&apos;m listening to
                </p>
                <div className="relative overflow-hidden rounded-2xl">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: 12 }}
                    src="https://open.spotify.com/embed/album/07naAGnFibTManFY20vcUL?utm_source=generator&theme=1"
                    width="100%"
                    height="260"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify embed: what I'm listening to"
                  />
                </div>
              </div>
            </div>
            </div>

            <p className="mx-auto mt-10 max-w-[76ch] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Stack — Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
