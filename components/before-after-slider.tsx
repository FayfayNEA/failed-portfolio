"use client";

import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50); // percent
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (v: number, lo: number, hi: number) =>
    Math.max(lo, Math.min(hi, v));

  const updateFromEvent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100, 2, 98));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = true;
    updateFromEvent(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromEvent(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  setPosition((p) => clamp(p - 1, 2, 98));
    if (e.key === "ArrowRight") setPosition((p) => clamp(p + 1, 2, 98));
  };

  return (
    <div
      ref={containerRef}
      className={[
        "relative select-none overflow-hidden rounded-2xl border-[0.5px] border-zinc-200/70",
        "bg-white shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]",
        "cursor-col-resize",
        className,
      ].join(" ")}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: "none" }}
    >
      {/* After image, full size, sits beneath */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterLabel}
        className="block h-full w-full object-contain"
        draggable={false}
        loading="lazy"
      />

      {/* Before image, same size, clipped via clip-path so it never resizes */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-contain"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
        loading="lazy"
      />

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_6px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        role="slider"
        aria-label="Compare wireframes"
        aria-valuenow={Math.round(position)}
        aria-valuemin={2}
        aria-valuemax={98}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={[
          "pointer-events-none absolute top-1/2 z-20",
          "-translate-x-1/2 -translate-y-1/2",
          "flex h-10 w-10 items-center justify-center",
          "rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.25)]",
          "ring-1 ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        ].join(" ")}
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-zinc-400">
          <path d="M5 4l-3 4 3 4M11 4l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-between px-4">
        <span
          className="rounded-full bg-black/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm"
          style={{ opacity: position > 15 ? 1 : 0, transition: "opacity 0.2s" }}
        >
          {beforeLabel}
        </span>
        <span
          className="rounded-full bg-black/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm"
          style={{ opacity: position < 85 ? 1 : 0, transition: "opacity 0.2s" }}
        >
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
