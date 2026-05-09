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

const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

const IMG = {
  iconX:
    "https://framerusercontent.com/images/XHCI0VfDaD9WU6YV4lBNwS9e3Ek.png?width=1250&height=1250",
  iconLinkedIn:
    "https://framerusercontent.com/images/8KmffkjfNuwc79LA0N3ciLnJw.png?width=1200&height=1200",
} as const;

const RESUME_URL = "/failenn-resume.pdf";

const OLIVE_CARD_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

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

export default function ContactClient() {
  const email = "failennaselta@gmail.com";
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isBelowMd = useIsBelowMd();
  const pageRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Scale the card content proportionally as the overlay resizes
  useEffect(() => {
    const screen = screenRef.current;
    const content = contentRef.current;
    if (!screen || !content) return;
    const BASE_WIDTH = 780; // px — natural design width of the overlay
    const update = () => {
      // Width-only scaling: content always fills overlay width (height fits naturally)
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
      <main ref={pageRef} className="relative flex flex-1 flex-col bg-transparent px-4 py-4 md:px-8 md:py-3">

        {/* ── Mobile: liquid (FluidSlab) ambient background ── */}
        <div
          className="pointer-events-none fixed inset-0 z-0 md:hidden"
          aria-hidden
        >
          <FluidSlab
            className="h-full w-full"
            intensity={0.55}
            tint={[0.18, 0.85, 0.32]}
            tintStrength={0.18}
            maxPixelRatio={1.25}
            antialias
          />
        </div>

        {/* ── Content layer ── */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center max-md:min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">

          {/* ── Mobile: original full-size layout ── */}
          <div className="w-full max-w-[980px] md:hidden">
            <div className="grid grid-cols-1 gap-5">
              {/* Primary glass slab */}
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
              {/* Social */}
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
            {/* Spotify */}
            <div className="mt-5">
              <div className="mx-auto w-full text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">What I&apos;m listening to</p>
                <iframe src="https://open.spotify.com/embed/album/07naAGnFibTManFY20vcUL?utm_source=generator&theme=1" width="100%" className="h-[200px] w-full" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify embed" />
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-[76ch] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Stack — Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
            </p>
          </div>

          {/* ── Desktop: computer image with miniaturised cards on screen ── */}
          <div className="hidden w-full md:block">
            <div
              className="relative mx-auto w-full -mt-5"
              style={{ maxWidth: "min(1200px, 86vw, calc(85dvh * 1.321))" }}
            >
              {/* Aspect-ratio wrapper ensures overlay % always maps to the actual image (no letterboxing) */}
              <div className="relative w-full" style={{ aspectRatio: "1670 / 1264" }}>
              <Image
                src={WORK_HERO}
                alt="Contact — retro computer"
                fill
                className="object-contain"
                priority
                draggable={false}
              />

              {/* Screen overlay — positioned as % of image so it's viewport-independent */}
              <div
                ref={screenRef}
                className="absolute z-20 overflow-hidden"
                style={{ left: "22.55%", top: "25.9%", width: "53.5%", height: "33.25%", borderRadius: "14px", containerType: "inline-size" }}
              >
                {/* FluidSlab clipped to screen */}
                <div className="absolute inset-0 z-0">
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

                {/* Card layout — scaled via ResizeObserver to fit overlay width */}
                <div
                  ref={contentRef}
                  className="relative z-10 flex h-full flex-col justify-center gap-2 p-[4%] translate-y-[30px]"
                >

                    <div className="grid grid-cols-[1.1fr_0.9fr] gap-2">

                      {/* Left column: Primary + Spotify */}
                      <div className="flex flex-col gap-2 min-h-0">

                      {/* Primary card */}
                      <div className="relative isolate overflow-hidden rounded-2xl border border-white/55 bg-white/[0.08] p-3 shadow-[0_26px_78px_-34px_rgba(0,0,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.62)] ring-1 ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125">
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.10] to-white/[0.06]" aria-hidden />
                        <span
                          className="pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-repeat opacity-[0.10] mix-blend-overlay"
                          style={{ backgroundImage: OLIVE_CARD_GRAIN_BG, backgroundSize: "180px 180px" }}
                          aria-hidden
                        />
                        <div className="relative z-[2]">
                          <p className="mb-1 font-mono text-[clamp(12px,2.4cqi,15px)] uppercase tracking-[0.22em] text-zinc-500">Primary</p>
                          <a href={`mailto:${email}`} className="group relative inline-flex items-center gap-1.5 text-[clamp(14px,3cqi,20px)] font-normal text-zinc-950 hover:text-zinc-700">
                            <span className="relative">
                              {email}
                              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[0.5px] w-full origin-left scale-x-0 bg-zinc-950/35 transition-transform duration-[480ms] group-hover:scale-x-100" />
                            </span>
                            <span className="text-zinc-500/80">→</span>
                          </a>
                          <div className="mt-2 flex flex-wrap items-center gap-1.5">
                            <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.34] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.70)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.44]">
                              <button type="button" onClick={onCopy} className="relative z-[1] inline-flex items-center justify-center bg-transparent px-2.5 py-1 text-[clamp(12px,2.4cqi,15px)] font-medium text-zinc-900">{copyLabel}</button>
                            </MagneticHoverShell>
                            <MagneticHoverShell className="inline-flex rounded-full border border-white/60 bg-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.32]">
                              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative z-[1] inline-flex items-center gap-1 bg-transparent px-2.5 py-1 text-[clamp(12px,2.4cqi,15px)] font-medium tracking-[0.08em] text-zinc-900">Resume <span aria-hidden>↗</span></a>
                            </MagneticHoverShell>
                          </div>
                        </div>
                      </div>

                      {/* Spotify */}
                      <div>
                        <p className="mb-1 font-mono text-[clamp(12px,2.4cqi,15px)] uppercase tracking-[0.22em] text-zinc-500">What I&apos;m listening to</p>
                        <iframe
                          src="https://open.spotify.com/embed/album/07naAGnFibTManFY20vcUL?utm_source=generator&theme=0"
                          width="100%"
                          className="h-[clamp(60px,7vw,90px)] rounded-xl"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title="Spotify embed"
                        />
                      </div>

                      </div>{/* end left column */}

                      {/* Social card */}
                      <div className="relative isolate overflow-hidden rounded-2xl border border-white/55 bg-white/[0.07] p-3 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.20),inset_0_1px_0_0_rgba(255,255,255,0.58)] ring-1 ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125">
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/26 via-white/[0.10] to-white/[0.04]" aria-hidden />
                        <div className="relative z-[2]">
                          <p className="mb-2 font-mono text-[clamp(12px,2.4cqi,15px)] uppercase tracking-[0.22em] text-zinc-500">Elsewhere</p>
                          <div className="grid grid-cols-1 gap-1.5">
                            {[
                              { href: "https://x.com/failennaselta", label: "X", sub: "@failennaselta", icon: IMG.iconX },
                              { href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/", label: "LinkedIn", sub: "Failenn Aselta", icon: IMG.iconLinkedIn },
                              { href: "https://github.com/FayfayNEA", label: "GitHub", sub: "/FayfayNEA", icon: null },
                            ].map((s) => (
                              <MagneticHoverShell key={s.href} className="block w-full rounded-xl border border-white/55 bg-white/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl transition-colors hover:bg-white/[0.10]">
                                <Link href={s.href} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5">
                                  <div className="min-w-0">
                                    <p className="font-mono text-[clamp(11px,2.2cqi,13px)] uppercase tracking-[0.18em] text-zinc-500">{s.label}</p>
                                    <p className="mt-0.5 truncate text-[clamp(13px,2.7cqi,17px)] text-zinc-800">{s.sub}</p>
                                  </div>
                                  {s.icon
                                    ? <Image src={s.icon} alt="" width={20} height={20} className="h-5 w-5 object-contain opacity-70 group-hover:opacity-100" />
                                    : <span className="text-[clamp(13px,2.7cqi,17px)] text-zinc-500/80">↗</span>
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
              </div>{/* end aspect-ratio wrapper */}
            </div>

            <div className="mx-auto mt-2 w-full max-w-md border-t border-zinc-300/80 pt-2">
              <p className="text-center text-[11px] leading-snug text-zinc-500 md:text-[12px] md:leading-relaxed font-mono uppercase tracking-[0.18em]">
                Stack — Next.js · TypeScript · Tailwind CSS · Framer Motion · MDX · Three.js
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
