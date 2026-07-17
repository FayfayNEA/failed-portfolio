"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const META = [
  { label: "Timeline", value: "1 week" },
  { label: "Role",     value: "Creative Technologist\nFull Stack Engineer" },
  { label: "Tools",    value: "Processing · p5.js · Groq · Llama 4" },
  { label: "Team",     value: "Failenn Aselta" },
];

export function FitherClient() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh]">
      {/* iframe fills the entire background */}
      <iframe
        src="/fither/index.html"
        className="absolute inset-0 h-full w-full border-0"
        title="Fither"
      />

      {/* Info button — fixed mid-left */}
      <button
        onClick={() => setOpen(true)}
        aria-label="About this project"
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.06] bg-white font-mono text-[11px] font-medium text-zinc-500 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.14),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-colors hover:bg-zinc-50 hover:text-zinc-800 active:scale-95"
      >
        i
      </button>

      {/* Info overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel — upper-center */}
            <motion.div
              className="fixed left-1/2 top-[12%] z-[60] w-full max-w-[min(620px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[8px] border border-black/[0.06] bg-white/[0.92] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Fither</p>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-700"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="mb-6 text-[0.88rem] leading-[1.8] text-zinc-600">
                  Fither asks what AI does to analog aesthetics. I prototyped the dither engine in Processing first, then rebuilt it in the browser with p5.js so parameters could move in real time. Groq and Llama 4 handle the AI layer: the model doesn&apos;t apply the dither, it reads what you&apos;re making and responds in kind. Latency is the product, so Groq over OpenAI.
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-black/[0.06] pt-5 md:grid-cols-4">
                  {META.map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.14em] text-zinc-400">{label}</p>
                      <p className="whitespace-pre-line font-mono text-[0.75rem] leading-snug text-zinc-700">{value}</p>
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
