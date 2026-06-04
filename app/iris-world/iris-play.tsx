"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export function IrisPlay() {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Prevent body scroll and hide UI chrome when expanded
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  const iframe = (
    <iframe
      src="/iris-world/index.html"
      className="h-full w-full border-0"
      title="Iris's World"
      allow="pointer-lock; fullscreen"
      loading="lazy"
    />
  );

  const overlay = (
    <AnimatePresence>
      {expanded && (
        <motion.div
          className="fixed inset-0 bg-black"
          style={{ zIndex: 99999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {iframe}
          <button
            onClick={() => setExpanded(false)}
            className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            style={{ zIndex: 100000 }}
            aria-label="Exit fullscreen"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M4.5 1v3.5H1M11 4.5H7.5V1M7.5 11V7.5H11M1 7.5h3.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Exit
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Inline embed */}
      <div className="flex flex-col gap-4">
        <p className="font-mono text-[0.78rem] tracking-[0.04em] text-zinc-400">
          WASD to move · mouse to look · [E] to interact · [Space] to jump · click the window to lock your cursor
        </p>
        <div
          className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          {!expanded && iframe}
          <button
            onClick={() => setExpanded(true)}
            className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            aria-label="Expand to fullscreen"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1 4.5V1h3.5M7.5 1H11v3.5M11 7.5V11H7.5M4.5 11H1V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Fullscreen
          </button>
        </div>
      </div>

      {/* Portal overlay — renders at document.body, escapes all stacking contexts */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
