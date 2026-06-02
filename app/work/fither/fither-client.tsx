"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const META = [
  { label: "Timeline", value: "1 week" },
  { label: "Role",     value: "Creative Technologist\nFull Stack Engineer" },
  { label: "Tools",    value: "Groq · Llama 4 · p5.js · Vanilla JS · Vercel" },
  { label: "Team",     value: "Failenn Aselta" },
];

export function FitherClient() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fither-page-canvas relative -mt-[4rem] flex min-h-[100dvh] flex-col pt-[4rem] md:-mt-[5rem] md:pt-[5rem]">
      {/* Breadcrumb */}
      <div className="shrink-0 px-6 pt-2 pb-1 md:px-10">
        <nav className="flex items-center gap-1 font-mono text-[11px] font-light tracking-[0.04em] text-black">
          <Link href="/" className="hover:underline underline-offset-2">home</Link>
          <span className="opacity-40">/</span>
          <Link href="/work" className="hover:underline underline-offset-2">work</Link>
          <span className="opacity-40">/</span>
          <Link href="/#product-design" className="hover:underline underline-offset-2">product-design</Link>
          <span className="opacity-40">/</span>
          <span>fither</span>
        </nav>
      </div>

      {/* Live Tool label */}
      <div className="shrink-0 px-6 pb-2 md:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Live Tool</p>
      </div>

      {/* Embed */}
      <iframe
        src="/fither/index.html"
        className="min-h-0 w-full flex-1 border-0"
        title="Fither"
      />

      {/* Info button — fixed mid-left */}
      <button
        onClick={() => setOpen(true)}
        aria-label="About this project"
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 font-mono text-[11px] font-medium text-white/70 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors hover:bg-black/45 hover:text-white active:scale-95"
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
              className="fixed left-1/2 top-[12%] z-[60] w-full max-w-[min(620px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950/[0.82] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">Fither</p>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/80"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="mb-6 text-[0.88rem] leading-[1.8] text-white/65">
                  Fither started as a question about what AI does to analog aesthetics. Dithering is one of the oldest image compression techniques — it turns continuous tone into pattern, loss into texture. The question was whether a language model could learn to describe dither not as a technical filter but as a visual feeling, and whether that description could drive a generative canvas in real time. Built with Groq and Llama 4 for inference speed, p5.js for canvas rendering, and deployed on Vercel. The AI doesn&apos;t apply the dither — it interprets what the user is making and responds in kind. Groq over OpenAI because latency at this interaction speed is the whole experience; a half-second delay kills the feedback loop the tool depends on.
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/[0.08] pt-5 md:grid-cols-4">
                  {META.map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.14em] text-white/30">{label}</p>
                      <p className="whitespace-pre-line font-mono text-[0.75rem] leading-snug text-white/70">{value}</p>
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
