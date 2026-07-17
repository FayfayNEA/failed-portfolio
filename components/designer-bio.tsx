"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function DesignerBio() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lit, setLit] = useState(true);
  const [pulling, setPulling] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(false);
      setExpanded(false);
    } else {
      setVisible(true);
    }
  }, [pathname]);

  // Close popover on outside click
  useEffect(() => {
    if (!expanded) return;
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [expanded]);

  const togglePull = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLit((v) => !v);
    setPulling(true);
    window.setTimeout(() => setPulling(false), 220);
  };

  return (
    <div
      ref={containerRef}
      data-intro-bio
      className={cn(
        // Tucked under the fixed glass nav, top-left.
        "absolute z-[40] hidden xl:block",
        "top-[calc(env(safe-area-inset-top)+4.75rem+36px)] left-[calc(1.5rem+285px)]",
        "w-[295px] select-none",
        "transition-opacity duration-500",
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {/* relative wrapper: sign stays locked; card floats below via absolute */}
      <div className="relative">
      {/* Clickable sign — toggles bio card. Must be a div (not button) since the pull cord is a nested button. */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setExpanded((v) => !v)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded((v) => !v); } }}
        aria-expanded={expanded}
        aria-label={expanded ? "Close bio" : "Learn more about Failenn"}
        className="relative w-full cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"
      >
        {/* aspect-ratio matches the actual 2752×1536 PNG files */}
        <div className="relative w-full" style={{ aspectRatio: "2752/1536" }}>
          {/* Off (unlit) sign — base layer */}
          <Image
            src="/OFF.png"
            alt="Product Designer + Code — a designer who designs down to the bones."
            fill
            draggable={false}
            className="object-contain transition-opacity duration-500 pointer-events-none"
            style={{ opacity: lit ? 0.9 : 0.85 }}
            priority
            unoptimized
            sizes="295px"
          />
          {/* On (lit neon) sign — crossfades on top when switched on */}
          <Image
            src="/ON2.png"
            alt=""
            aria-hidden
            fill
            draggable={false}
            className="object-contain transition-opacity duration-500 pointer-events-none"
            style={{ opacity: lit ? 0.95 : 0 }}
            priority
            unoptimized
            sizes="295px"
          />

          {/* Pull cord — stretches from top anchor, springs back on release */}
          <button
            type="button"
            onClick={togglePull}
            aria-label={lit ? "Turn the sign off" : "Turn the sign on"}
            aria-pressed={lit}
            className="group absolute right-[18%] top-[82%] flex flex-col items-center outline-none"
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ scaleY: pulling ? 1.7 : 1 }}
              transition={
                pulling
                  ? { duration: 0.1, ease: "easeOut" }
                  : { type: "spring", stiffness: 280, damping: 7, mass: 0.4 }
              }
              style={{ transformOrigin: "top center" }}
            >
              {/* upper string segment */}
              <span className="block w-px bg-zinc-400/60 group-hover:bg-zinc-500/70" style={{ height: 14 }} />
              {/* bead cluster */}
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="mb-[2px] block h-[3px] w-[3px] rounded-full bg-zinc-500/80 group-hover:bg-zinc-600/90"
                />
              ))}
              {/* lower string to end bead */}
              <span className="block w-px bg-zinc-400/60 group-hover:bg-zinc-500/70" style={{ height: 8 }} />
              {/* end pull bead */}
              <span className="relative mt-0.5 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-zinc-400/90 shadow-sm ring-1 ring-zinc-300/50 transition-colors group-hover:bg-zinc-500/90">
                {/* primary highlight — top-left catch light */}
                <span className="absolute left-[2px] top-[1.5px] h-[3px] w-[3px] rounded-full bg-white/70" />
                {/* secondary soft glow — bottom-right rim */}
                <span className="absolute bottom-[1.5px] right-[1.5px] h-[2px] w-[2px] rounded-full bg-white/25" />
              </span>
            </motion.div>
          </button>
        </div>

        {/* Hint — nudges the visitor to open the bio */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute right-2 top-1 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500/80 transition-opacity duration-300",
            expanded ? "opacity-0" : "opacity-100"
          )}
        >
          (click me)
        </span>
      </div>

      {/* Expandable bio card — absolute so the sign never shifts */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(380px,78vw)] rounded-[8px] border border-black/[0.07] bg-white/[0.78] p-4 backdrop-blur-xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.14),inset_0_1px_0_0_rgba(255,255,255,0.6)]"
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
              aria-label="Close bio"
              className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <p className="font-mono text-[15px] leading-relaxed text-zinc-700 pr-5">
              Product Designer of 2+ years who studied architecture, robotics, and code. Ships 0 → 1.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li className="font-mono text-[13px] text-zinc-500">Founder + Product Designer of own clothing brand.</li>
              <li className="font-mono text-[13px] text-zinc-500">Shipped an AI noteless image generator.</li>
              <li className="font-mono text-[13px] text-zinc-500">Top 11 project of the 2025 Venice Biennale.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
