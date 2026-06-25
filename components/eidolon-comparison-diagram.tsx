"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RAW_JSON = `{
  "node": "shop://catalog/running",
  "agent": "commerce.fetch.v4",
  "intent": "browse",
  "items": [
    { "id": "rn_01", "ref": "0x9af", "price": 120, "stock": 8 },
    { "id": "rn_02", "ref": "0x3c1", "price": 95,  "stock": 0 }
  ],
  "next": "agent://checkout.settle",
  "render": null
}`;

type Mode = "page" | "agent";

/* ── Raw machine web — what the 98% AI internet actually is ── */
function RawWeb() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#0e0f0c] p-3 shadow-sm ring-1 ring-black/20">
      <pre className="h-full overflow-hidden whitespace-pre-wrap break-words font-mono text-[9.5px] leading-relaxed text-lime-300/85">
        {RAW_JSON}
      </pre>
    </div>
  );
}

/* ── Eidolon output: a clean, normal-looking website ── */
function ReadablePage() {
  return (
    <motion.div
      key="page"
      className="flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-zinc-200/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-zinc-200/70 bg-zinc-50 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="ml-2 h-2.5 flex-1 rounded-full bg-white ring-1 ring-zinc-200/80" />
      </div>

      {/* Nav */}
      <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-lime-500" />
        <span className="h-1.5 w-12 rounded-full bg-zinc-700/80" />
        <span className="ml-auto h-4 w-12 rounded-full bg-lime-500/80" />
      </div>

      {/* Compact hero heading */}
      <div className="flex flex-col items-center gap-1.5 px-8 pt-3 text-center">
        <span className="h-2.5 w-2/3 rounded-full bg-zinc-800/80" />
        <span className="h-1.5 w-2/5 rounded-full bg-zinc-300" />
      </div>

      {/* Three runner shoes */}
      <div className="grid min-h-0 flex-1 grid-cols-3 items-stretch gap-2 px-3 pb-3 pt-2.5">
        {[
          { accent: "#84cc16", sole: "#365314" },
          { accent: "#a3e635", sole: "#3f6212" },
          { accent: "#65a30d", sole: "#1a2e05" },
        ].map((shoe, i) => (
          <div key={i} className="flex flex-col gap-1 rounded-md bg-zinc-50 p-1.5 ring-1 ring-zinc-200/60">
            <div className="flex flex-1 items-center justify-center rounded bg-white ring-1 ring-zinc-100">
              <Sneaker className="h-8 w-auto" accent={shoe.accent} sole={shoe.sole} />
            </div>
            <span className="h-1.5 w-10 rounded-full bg-zinc-400/70" />
            <span className="font-mono text-[8px] text-zinc-500">${110 + i * 10}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Friendly assistant avatar (idle, not talking) ── */
function Avatar() {
  return (
    <div className="relative h-16 w-16 shrink-0">
      {/* antenna */}
      <span className="absolute left-1/2 top-0 h-2 w-0.5 -translate-x-1/2 rounded-full bg-lime-700/60" />
      <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-lime-400" />
      {/* head */}
      <div className="absolute bottom-0 h-14 w-16 overflow-hidden rounded-[42%] bg-gradient-to-br from-lime-200 via-lime-400 to-lime-600 shadow-[0_6px_18px_-6px_rgba(132,204,22,0.6)]">
        <span className="absolute left-[22%] top-[20%] h-5 w-5 rounded-full bg-white/30 blur-md" />
        {/* eyes */}
        <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 gap-3.5">
          <span className="h-2 w-2 rounded-full bg-lime-950/85" />
          <span className="h-2 w-2 rounded-full bg-lime-950/85" />
        </div>
        {/* smile */}
        <svg viewBox="0 0 24 12" className="absolute bottom-[24%] left-1/2 h-2 w-6 -translate-x-1/2" fill="none" aria-hidden>
          <path d="M2 2 Q12 11 22 2" stroke="rgba(20,40,5,0.8)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* ── A sneaker (accent color configurable) ── */
function Sneaker({ className, accent = "#84cc16", sole = "#365314" }: { className?: string; accent?: string; sole?: string }) {
  return (
    <svg viewBox="0 0 80 44" fill="none" className={className} aria-hidden>
      {/* sole */}
      <path d="M5 34 Q5 39 11 39 L71 39 Q77 38 76 33 L72 31 L9 31 Q5 31 5 34 Z" fill={sole} />
      {/* body */}
      <path d="M9 31 L11 22 Q12 15 19 14 L32 7 Q36 5 37 10 L38 20 L63 26 Q72 27 73 31 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
      {/* toe cap */}
      <path d="M55 24 L63 26 Q72 27 73 31 L55 31 Z" fill={accent} />
      {/* laces */}
      <path d="M22 16 L31 20 M25 13 L34 17 M28 10 L37 14" stroke={sole} strokeWidth="1.4" strokeLinecap="round" />
      {/* side accent */}
      <path d="M19 28 Q35 22 52 29" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Eidolon output: an avatar that shows you the shoes ── */
function InteractiveAgent() {
  return (
    <motion.div
      key="agent"
      className="flex h-full items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-lime-50/70 to-white/50 p-4 ring-1 ring-lime-200/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Avatar gently bobbing */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Avatar />
      </motion.div>

      {/* Product card the avatar presents */}
      <motion.div
        className="flex w-[120px] flex-col gap-1.5 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-zinc-200/70"
        initial={{ x: 12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.35, ease: "easeOut" }}
      >
        <div className="flex h-12 items-center justify-center rounded-md bg-gradient-to-br from-lime-100/80 to-zinc-100">
          <Sneaker className="h-9 w-auto" />
        </div>
        <span className="text-[10px] font-semibold leading-none text-zinc-800">Trail Runner</span>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700">$120</span>
          <span className="rounded-full bg-lime-50 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-lime-600 ring-1 ring-lime-200/60">
            in stock
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Eidolon render surface ── */
function EidolonOutput({ visible, mode }: { visible: boolean; mode: Mode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f7f7f5] p-3 font-sans shadow-sm ring-1 ring-black/[0.05]">
      <AnimatePresence mode="wait">
        {visible ? (
          mode === "page" ? <ReadablePage /> : <InteractiveAgent />
        ) : (
          <motion.div
            key="idle"
            className="flex h-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-mono text-[10px] text-zinc-300">press render</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── main component ── */
export function EidolonComparisonDiagram() {
  const [rendered, setRendered] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [mode, setMode] = useState<Mode>("page");

  function handleRender() {
    if (rendered) {
      setRendered(false);
      return;
    }
    setRendering(true);
    setTimeout(() => {
      setRendering(false);
      setRendered(true);
    }, 1200);
  }

  function handleMode(next: Mode) {
    setMode(next);
    if (!rendered && !rendering) {
      setRendering(true);
      setTimeout(() => {
        setRendering(false);
        setRendered(true);
      }, 1200);
    }
  }

  return (
    <div className="relative mb-10 mt-10 w-full overflow-hidden rounded-2xl border border-zinc-200/60 font-sans shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-sm" aria-hidden />

      <div className="relative z-[1] flex flex-col gap-0">
        {/* Human request */}
        <div className="border-b border-zinc-200/50 px-3 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            A human visits the agent web
          </p>
          <p className="mt-1 text-[0.82rem] italic text-zinc-600">
            &ldquo;Show me running shoes under $150.&rdquo;
          </p>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">

          {/* The 98% AI web — raw machine output */}
          <div className="border-b border-zinc-200/40 p-5 md:border-b-0 md:border-r">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e05252]/80">
                The web at 98% AI
              </p>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-mono text-[8px] text-red-400 ring-1 ring-red-200/50">
                machine-only
              </span>
            </div>

            <div className="h-[230px]">
              <RawWeb />
            </div>
            <p className="mt-4 text-center font-mono text-[9px] leading-snug text-zinc-400">
              Just JSON and agent calls. Unreadable to people.
            </p>
          </div>

          {/* Eidolon */}
          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime-600/80">
                Eidolon
              </p>
              <div className="flex gap-1 rounded-full bg-zinc-100/80 p-0.5 ring-1 ring-zinc-200/60">
                {([
                  { id: "page", label: "Readable web" },
                  { id: "agent", label: "Interactive AI" },
                ] as const).map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleMode(id)}
                    className={[
                      "rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] transition-colors duration-200",
                      mode === id
                        ? "bg-lime-500/90 text-white"
                        : "text-zinc-400 hover:text-zinc-600",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[230px]">
              <EidolonOutput visible={rendered} mode={mode} />
            </div>

            <button
              onClick={handleRender}
              disabled={rendering}
              className={[
                "mt-4 w-full rounded-xl py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200",
                rendering
                  ? "cursor-wait bg-lime-100 text-lime-300"
                  : rendered
                  ? "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                  : "bg-lime-500/10 text-lime-600 ring-1 ring-lime-300/40 hover:bg-lime-500/20",
              ].join(" ")}
            >
              {rendering ? "rendering..." : rendered ? "reset" : "Render"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
