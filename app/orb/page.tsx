"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const META = [
  { label: "Timeline", value: "2026" },
  { label: "Role",     value: "Creative Technologist" },
  { label: "Tools",    value: "Three.js · WebGL" },
  { label: "Team",     value: "Failenn Aselta" },
];

/**
 * Orb embeds like TeaTimer: full-bleed iframe, live-tool nav chrome.
 * Keeps a light "i" panel for project context.
 */
export default function OrbPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] bg-[#0D0D0D]">
      <iframe
        src="/orb/index.html"
        className="absolute inset-0 h-full w-full border-0"
        title="Orb"
      />

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="About this project"
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 font-mono text-[11px] font-medium text-white/70 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors hover:bg-white/15 hover:text-white active:scale-95"
      >
        i
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed left-1/2 top-[12%] z-[60] w-full max-w-[min(620px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[8px] border border-white/10 bg-[#141414]/95 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">Orb</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/80"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="px-6 py-5">
                <p className="mb-6 text-[0.88rem] leading-[1.8] text-white/70">
                  An animated translucent blob with swirling internal caustics. A small creative tool for exploring organic plasma forms in the browser.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-5 md:grid-cols-4">
                  {META.map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.14em] text-white/35">{label}</p>
                      <p className="whitespace-pre-line font-mono text-[0.75rem] leading-snug text-white/75">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
