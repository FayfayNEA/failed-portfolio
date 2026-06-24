"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  { text: "product designer", cls: "top-[16%] left-[6%] -rotate-2 text-[1rem] tracking-[0.12em]" },
  { text: "who codes",        cls: "top-[28%] right-[8%]  rotate-1  text-[0.78rem] tracking-[0.14em]" },
  { text: "AI",               cls: "top-[52%] left-[12%] -rotate-1  text-[0.65rem] tracking-[0.18em]" },
  { text: "UX",               cls: "top-[45%] right-[18%] rotate-2  text-[0.62rem] tracking-[0.18em]" },
  { text: "3D",               cls: "top-[60%] left-[52%] -rotate-3  text-[0.62rem] tracking-[0.18em]" },
] as const;

export function CollageWordOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handle = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const fadeDistance = rect.height * 0.55;
      if (fadeDistance <= 0) {
        setOpacity(1);
        return;
      }
      const progress = Math.max(0, Math.min(1, -rect.top / fadeDistance));
      setOpacity(1 - progress);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 md:hidden"
      style={{ opacity, transition: "opacity 120ms linear" }}
    >
      {WORDS.map(({ text, cls }) => (
        <span
          key={text}
          className={`absolute font-mono font-medium uppercase text-zinc-700/60 ${cls}`}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
