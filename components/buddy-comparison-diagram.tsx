"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROMPT = "Can you set up a product brief page? Nav at the top, big hero with a headline and a short subhead, two feature cards side by side below that, and a CTA button centered underneath. Keep it clean."; // v4

/* ── "You" sketch — structured but wobbly grid layout ── */
function YouSketch() {
  return (
    <svg viewBox="0 0 155 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      {/* paper */}
      <rect x="2" y="2" width="151" height="186" rx="3" fill="#fafaf8" stroke="#e4e4e0" strokeWidth="0.7" />

      {/* nav bar */}
      <path d="M6 10 L149 10.4 L148.8 22 L6.2 21.6 Z" fill="#e8e6e0" stroke="none" />
      <path d="M12 16 Q16 14.5 20 16 Q24 17.5 28 16" stroke="#9a9990" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M34 16 Q38 14.5 42 16" stroke="#9a9990" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M124 16 Q130 14 136 16 Q140 18 144 16" stroke="#9a9990" strokeWidth="0.9" strokeLinecap="round" />

      {/* hero block — wide rectangle */}
      <path d="M6 25 L149 25.5 L148.5 68 L6.5 67.5 Z" stroke="#aaa8a2" strokeWidth="1" strokeLinejoin="round" />
      {/* hero scribble */}
      <path d="M18 40 Q26 37 36 40 Q44 43 52 40 Q60 37 68 40 Q74 43 80 40" stroke="#bbb" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M18 50 Q28 48 40 50 Q52 52 62 50 Q72 48 80 50" stroke="#ccc" strokeWidth="0.8" strokeLinecap="round" />
      {/* CTA inside hero */}
      <rect x="40" y="56" width="36" height="8" rx="4" stroke="#aaa" strokeWidth="0.8" />
      <text x="58" y="63" fontFamily="monospace" fontSize="5" fill="#bbb" textAnchor="middle">CTA?</text>

      {/* two cards side by side */}
      <path d="M6 71 L74 71.3 L73.8 118 L6.2 117.7 Z" stroke="#aaa8a2" strokeWidth="0.9" strokeLinejoin="round" />
      <path d="M77 71.3 L149 71.6 L148.8 118 L77.2 117.7 Z" stroke="#aaa8a2" strokeWidth="0.9" strokeLinejoin="round" />
      {/* card 1 scribble */}
      <path d="M13 84 Q20 82 28 84 Q35 86 42 84" stroke="#ccc" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M13 92 Q22 90 33 92 Q43 94 52 92 Q60 90 66 92" stroke="#ddd" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M13 100 Q24 98 36 100 Q48 102 58 100" stroke="#ddd" strokeWidth="0.7" strokeLinecap="round" />
      <rect x="13" y="107" width="22" height="6" rx="3" stroke="#ccc" strokeWidth="0.7" />
      {/* card 2 scribble */}
      <path d="M84 84 Q91 82 99 84 Q107 86 114 84" stroke="#ccc" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M84 92 Q93 90 104 92 Q115 94 124 92 Q133 90 139 92" stroke="#ddd" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M84 100 Q95 98 107 100 Q119 102 129 100" stroke="#ddd" strokeWidth="0.7" strokeLinecap="round" />
      <rect x="84" y="107" width="22" height="6" rx="3" stroke="#ccc" strokeWidth="0.7" />

      {/* separate CTA row */}
      <text x="10" y="130" fontFamily="monospace" fontSize="6" fill="#bbb">wait.. cta goes here?</text>
      <rect x="44" y="134" width="52" height="10" rx="5" stroke="#aaa8a2" strokeWidth="0.9" />
      <path d="M44 134 L96 144" stroke="#e05252" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M96 134 L44 144" stroke="#e05252" strokeWidth="0.8" strokeLinecap="round" />
      <rect x="48" y="148" width="50" height="10" rx="5" stroke="#aaa8a2" strokeWidth="0.8" strokeDasharray="2 1.5" />

      {/* confused annotation */}
      <text x="6" y="172" fontFamily="monospace" fontSize="5.5" fill="#c0bcb5">or maybe no CTA?? ugh</text>
      <path d="M6 176 L149 176.3" stroke="#eee" strokeWidth="0.5" />
    </svg>
  );
}

/* ── "Coworker" sketch — completely different organic blob style ── */
function CoworkerSketch() {
  return (
    <svg viewBox="0 0 155 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      {/* paper — slightly different tint */}
      <rect x="2" y="2" width="151" height="186" rx="3" fill="#f8f7f4" stroke="#dddbd5" strokeWidth="0.7" />

      {/* big blob "hero" in the center — ignoring nav entirely */}
      <path d="M10 10 Q30 8 70 12 Q110 16 145 10 Q148 30 146 50 Q144 70 140 72 Q110 76 70 74 Q30 76 12 72 Q8 60 10 40 Q8 20 10 10 Z"
        stroke="#8b7355" strokeWidth="1.4" fill="rgba(139,115,85,0.05)" strokeLinejoin="round" />
      {/* blob label */}
      <text x="78" y="40" fontFamily="monospace" fontSize="7" fill="#8b7355" textAnchor="middle" fontWeight="bold">HERO!!!</text>
      <path d="M40 50 Q55 46 70 50 Q85 54 100 50" stroke="#a08060" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M55 60 Q68 58 80 60 Q92 62 100 60" stroke="#b09070" strokeWidth="0.9" strokeLinecap="round" />

      {/* CTA at top — different from "You" who put it elsewhere */}
      <text x="78" y="88" fontFamily="monospace" fontSize="6" fill="#8b7355" textAnchor="middle">CTA FIRST (trust me)</text>
      <path d="M30 90 Q78 94 126 90" stroke="#8b7355" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M38 90 Q38 92 30 90" stroke="#8b7355" strokeWidth="1" strokeLinecap="round" />
      <path d="M118 90 Q118 92 126 90" stroke="#8b7355" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="78" cy="100" rx="32" ry="9" stroke="#8b7355" strokeWidth="1.2" />
      <text x="78" y="103" fontFamily="monospace" fontSize="6" fill="#8b7355" textAnchor="middle">click here</text>

      {/* cards — stacked vertically not side by side */}
      <text x="10" y="120" fontFamily="monospace" fontSize="6" fill="#a08060">cards = vertical stack obvi</text>
      <path d="M10 123 Q78 121 146 123 L145 142 Q78 144 11 142 Z" stroke="#a08060" strokeWidth="1.1" strokeLinejoin="round" fill="rgba(160,128,96,0.04)" />
      <path d="M22 131 Q35 129 50 131 Q64 133 76 131" stroke="#c0a880" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 138 Q38 136 56 138 Q72 140 86 138 Q100 136 112 138" stroke="#d0b898" strokeWidth="0.9" strokeLinecap="round" />

      <path d="M10 145 Q78 143 146 145 L145 164 Q78 166 11 164 Z" stroke="#a08060" strokeWidth="1.1" strokeLinejoin="round" fill="rgba(160,128,96,0.04)" />
      <path d="M22 153 Q35 151 50 153 Q64 155 76 153" stroke="#c0a880" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 160 Q38 158 56 160 Q72 162 86 160 Q100 158 112 160" stroke="#d0b898" strokeWidth="0.9" strokeLinecap="round" />

      {/* nav? arrow pointing up confused */}
      <text x="78" y="178" fontFamily="monospace" fontSize="5.5" fill="#c0b8a8" textAnchor="middle">nav?? prob not needed lol</text>
    </svg>
  );
}

/* ── clean Buddy output ── */
function BuddyOutput({ visible }: { visible: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f7f7f5] p-3 font-sans shadow-sm ring-1 ring-black/[0.05]">
      <AnimatePresence>
        {visible && (
          <motion.div
            className="flex h-full flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Nav bar */}
            <motion.div
              className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5"
              initial={{ scaleX: 0.6, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            >
              <span className="h-1.5 w-8 rounded-full bg-white/30" />
              <span className="h-1.5 w-6 rounded-full bg-white/20" />
              <span className="h-1.5 w-6 rounded-full bg-white/20" />
              <div className="ml-auto h-5 w-14 rounded-full bg-violet-500/70" />
            </motion.div>

            {/* Hero */}
            <motion.div
              className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-md bg-gradient-to-br from-violet-100/60 to-zinc-100/60 px-4 py-3 ring-1 ring-violet-200/40"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
            >
              <span className="h-2 w-28 rounded-full bg-zinc-700/50" />
              <span className="h-1.5 w-20 rounded-full bg-zinc-400/40" />
              <span className="mt-1 h-5 w-16 rounded-full bg-violet-500/60" />
            </motion.div>

            {/* Two feature cards */}
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-1.5 rounded-md bg-white p-2.5 ring-1 ring-zinc-200/60"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.3, ease: "easeOut" }}
                >
                  <span className="h-5 w-5 rounded-md bg-violet-100" />
                  <span className="h-1.5 w-14 rounded-full bg-zinc-700/40" />
                  <span className="h-1 w-full rounded-full bg-zinc-200/70" />
                  <span className="h-1 w-4/5 rounded-full bg-zinc-200/70" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="flex justify-center"
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.3, ease: "easeOut" }}
            >
              <div className="h-6 w-24 rounded-full bg-violet-500/80" />
            </motion.div>
          </motion.div>
        )}

        {!visible && (
          <motion.div
            key="idle"
            className="flex h-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-mono text-[10px] text-zinc-300">press generate</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── main component ── */
export function BuddyComparisonDiagram() {
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  function handleGenerate() {
    if (generated) {
      setGenerated(false);
      return;
    }
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1400);
  }

  return (
    <div className="relative mb-10 mt-10 w-full overflow-hidden rounded-2xl border border-zinc-200/60 font-sans shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-sm" aria-hidden />

      <div className="relative z-[1] flex flex-col gap-0">
        {/* Spoken in meeting prompt */}
        <div className="border-b border-zinc-200/50 px-3 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            Spoken in meeting
          </p>
          <p className="mt-1 text-[0.82rem] italic text-zinc-600">
            &ldquo;Can you set up a product brief page? Nav at the top, big hero with a headline and a short subhead, two feature cards side by side below that, and a CTA button centered underneath. Keep it clean.&rdquo;
          </p>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">

          {/* Old Way — two sub-sketches */}
          <div className="border-b border-zinc-200/40 p-5 md:border-b-0 md:border-r">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e05252]/80">
                Archaic way of working
              </p>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-mono text-[8px] text-red-400 ring-1 ring-red-200/50">
                ~15 min
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* You */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">You</p>
                <div className="h-[230px]">
                  <YouSketch />
                </div>
              </div>
              {/* Coworker */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">Your bestie coworker</p>
                <div className="h-[230px]">
                  <CoworkerSketch />
                </div>
              </div>
            </div>
          </div>

          {/* Buddy */}
          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-500/80">
                Buddy
              </p>
              <span className={[
                "rounded-full px-2.5 py-0.5 font-mono text-[8px] ring-1 transition-colors duration-300",
                generated
                  ? "bg-violet-50 text-violet-500 ring-violet-200/50"
                  : "bg-zinc-50 text-zinc-300 ring-zinc-200/50",
              ].join(" ")}>
                ~4s
              </span>
            </div>

            <div className="h-[222px]">
              <BuddyOutput visible={generated} />
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className={[
                "mt-4 w-full rounded-xl py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200",
                generating
                  ? "cursor-wait bg-violet-100 text-violet-300"
                  : generated
                  ? "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                  : "bg-violet-500/10 text-violet-600 hover:bg-violet-500/20 ring-1 ring-violet-300/40",
              ].join(" ")}
            >
              {generating ? "listening..." : generated ? "reset" : "Listen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
