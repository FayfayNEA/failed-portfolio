"use client";

import { useEffect, useRef, useState } from "react";

/** Desktop design size the Tetonic boards were built for. */
const DESIGN_W = 1440;
const DESIGN_H = 900;

const DEMO_HREF = "/tetonic/milepost.html";
const DEMO_EMBED = "/tetonic/milepost.html?embed=1";

/**
 * Embeds Tetonic at a fixed desktop viewport, then scales it down to the case
 * study column. Scroll is locked inside the iframe (`?embed=1`). Pointer events
 * stay off until click so page scroll is not trapped; scrolling away locks it
 * again. While locked, wheel events over the embed are forwarded to the page.
 */
export function TetonicLiveDemo() {
  const shellRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      setScale(Math.min(1, w / DESIGN_W));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setInteractive(false);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Full-area button overlays eat wheel; forward scroll to the page while locked.
  useEffect(() => {
    if (interactive) return;
    const shield = shieldRef.current;
    if (!shield) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: e.deltaX });
    };

    shield.addEventListener("wheel", onWheel, { passive: false });
    return () => shield.removeEventListener("wheel", onWheel);
  }, [interactive]);

  return (
    <div className="w-full">
      <div className="mb-3 flex justify-end">
        <a
          href={DEMO_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-[#bd8535]/[0.10] px-4 py-2 text-[0.75rem] font-medium text-[#8b7355] ring-1 ring-[#ddd2b8]/80 transition-colors hover:bg-[#bd8535]/[0.16]"
        >
          Open fullscreen
        </a>
      </div>

      <div
        ref={shellRef}
        className="relative w-full overflow-hidden overscroll-none rounded-2xl border border-zinc-300/60 bg-[#f5f0e6] shadow-[0_24px_72px_-24px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04]"
        style={{ height: DESIGN_H * scale }}
      >
        <div
          className="origin-top-left"
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
          }}
        >
          <iframe
            src={DEMO_EMBED}
            title="Tetonic live prototype"
            width={DESIGN_W}
            height={DESIGN_H}
            scrolling="no"
            tabIndex={interactive ? 0 : -1}
            className="block border-0 bg-[#f5f0e6]"
            style={{
              overflow: "hidden",
              pointerEvents: interactive ? "auto" : "none",
            }}
          />
        </div>

        {!interactive && (
          <div
            ref={shieldRef}
            className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/25 backdrop-blur-[1px]"
          >
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className="rounded-full bg-white/95 px-5 py-2.5 text-[0.8rem] font-medium text-zinc-900 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-transform hover:scale-[1.02]"
            >
              Click to interact
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
