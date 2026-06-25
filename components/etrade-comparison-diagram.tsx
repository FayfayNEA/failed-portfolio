"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Quote = { sym: string; px: string; chg: string; up: boolean };

const QUOTES: Quote[] = [
  { sym: "AAPL", px: "192.40", chg: "+1.24%", up: true },
  { sym: "TSLA", px: "246.30", chg: "-3.41%", up: false },
  { sym: "NVDA", px: "118.20", chg: "+0.82%", up: true },
  { sym: "AMD", px: "166.20", chg: "-1.07%", up: false },
  { sym: "MSFT", px: "411.80", chg: "+0.31%", up: true },
  { sym: "META", px: "500.80", chg: "-2.18%", up: false },
];

// Deterministic candles so server/client render matches (no hydration mismatch).
const CANDLES = [
  { h: 40, b: 18, up: true }, { h: 55, b: 24, up: false }, { h: 48, b: 16, up: true }, { h: 62, b: 28, up: true },
  { h: 50, b: 20, up: false }, { h: 70, b: 30, up: true }, { h: 44, b: 14, up: false }, { h: 58, b: 22, up: true },
  { h: 66, b: 26, up: false }, { h: 52, b: 18, up: true }, { h: 74, b: 32, up: true }, { h: 60, b: 22, up: false },
  { h: 46, b: 16, up: true }, { h: 68, b: 28, up: true }, { h: 54, b: 20, up: false }, { h: 78, b: 34, up: true },
];

/* ── Today: a cluttered legacy trading platform ── */
function LegacyPlatform() {
  const btn =
    "rounded-[1px] border border-zinc-400/70 bg-gradient-to-b from-white to-[#dfe3e8] px-1 py-[1px] text-zinc-700 shadow-[inset_0_1px_0_#fff]";
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#dfe3e8] text-[6px] leading-none ring-1 ring-black/15">
      {/* Title / menu bar */}
      <div className="flex items-center gap-1 bg-gradient-to-b from-[#1b4f72] to-[#0a3d62] px-1 py-[3px] text-white">
        <span className="font-bold">E*TRADE PRO</span>
        {["File", "View", "Trade", "Accounts", "Tools", "Help"].map((m) => (
          <span key={m} className="text-white/70">{m}</span>
        ))}
        <span className="ml-auto text-white/70">Acct ****1234</span>
        <span className="font-semibold text-emerald-300">$84,201.55</span>
      </div>

      {/* Beveled toolbar of buttons */}
      <div className="flex flex-wrap gap-0.5 border-b border-zinc-400/50 bg-[#cfd6dd] px-1 py-[2px]">
        {["Buy", "Sell", "Options", "Chart", "Level II", "Screener", "Alerts", "Orders", "Quotes"].map((b) => (
          <span key={b} className={btn}>{b}</span>
        ))}
      </div>

      {/* Dense body grid */}
      <div className="grid grid-cols-[0.85fr_1.3fr_0.9fr] gap-0.5 p-0.5">
        {/* Watchlist with tabs + per-row buttons */}
        <div className="overflow-hidden rounded-[1px] border border-zinc-400/50 bg-white">
          <div className="flex gap-0.5 bg-[#cfd6dd] px-0.5 py-[1px]">
            <span className="rounded-t-[1px] bg-white px-1 font-semibold text-zinc-700">Watch</span>
            <span className="px-1 text-zinc-500">News</span>
            <span className="px-1 text-zinc-500">Scan</span>
          </div>
          {QUOTES.map((q) => (
            <div key={q.sym} className="flex items-center gap-0.5 border-b border-zinc-100 px-0.5 py-[1px]">
              <span className="text-zinc-700">{q.sym}</span>
              <span className={q.up ? "text-emerald-600" : "text-red-500"}>{q.chg}</span>
              <span className="ml-auto rounded-[1px] bg-emerald-500 px-[2px] text-white">B</span>
              <span className="rounded-[1px] bg-red-500 px-[2px] text-white">S</span>
            </div>
          ))}
        </div>

        {/* Center: candle chart + overlapping order form */}
        <div className="relative overflow-hidden rounded-[1px] border border-zinc-400/50 bg-white">
          <div className="flex items-center gap-0.5 bg-[#cfd6dd] px-0.5 py-[1px]">
            <span className="font-semibold text-zinc-700">AAPL</span>
            {["1m", "5m", "15m", "1D", "Ind", "Draw"].map((t, i) => (
              <span key={t} className={i === 3 ? "rounded-[1px] bg-white px-1 text-zinc-700" : "px-1 text-zinc-500"}>{t}</span>
            ))}
          </div>
          {/* Candles */}
          <div className="flex h-[58px] items-end gap-[1px] px-0.5 pb-0.5 pt-1">
            {CANDLES.map((c, i) => (
              <span key={i} className="relative flex flex-1 justify-center" style={{ height: "100%" }}>
                <span className={`absolute bottom-0 w-[1px] ${c.up ? "bg-emerald-600" : "bg-red-500"}`} style={{ height: `${c.h}%` }} />
                <span className={`absolute w-full ${c.up ? "bg-emerald-500" : "bg-red-400"}`} style={{ bottom: `${(c.h - c.b) / 2}%`, height: `${c.b}%` }} />
              </span>
            ))}
          </div>
          {/* Overlapping order form with fields + buttons */}
          <div className="absolute right-0.5 top-3.5 w-[64%] rounded-[1px] border border-zinc-400/60 bg-[#f0f3f6] p-0.5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.35)]">
            <p className="mb-0.5 font-bold text-zinc-600">ORDER ENTRY</p>
            <div className="grid grid-cols-2 gap-0.5">
              {[["Sym", "AAPL"], ["Qty", "100"], ["Type", "LMT ▾"], ["Px", "192.40"]].map(([l, v]) => (
                <div key={l} className="flex items-center gap-0.5">
                  <span className="text-zinc-400">{l}</span>
                  <span className="flex-1 rounded-[1px] border border-zinc-300 bg-white px-0.5 text-zinc-700">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-0.5 flex gap-0.5">
              <span className="flex-1 rounded-[1px] bg-emerald-500 py-[1px] text-center font-bold text-white">BUY</span>
              <span className="flex-1 rounded-[1px] bg-red-500 py-[1px] text-center font-bold text-white">SELL</span>
            </div>
          </div>
        </div>

        {/* Right: positions + order book, with buttons */}
        <div className="flex flex-col gap-0.5">
          <div className="overflow-hidden rounded-[1px] border border-zinc-400/50 bg-white">
            <div className="bg-[#cfd6dd] px-0.5 py-[1px] font-semibold text-zinc-700">Positions</div>
            {QUOTES.slice(0, 3).map((q) => (
              <div key={q.sym} className="flex items-center gap-0.5 border-b border-zinc-100 px-0.5 py-[1px]">
                <span className="text-zinc-700">{q.sym}</span>
                <span className={q.up ? "text-emerald-600" : "text-red-500"}>{q.up ? "+$420" : "-$210"}</span>
                <span className="ml-auto rounded-[1px] border border-zinc-300 bg-white px-[2px] text-zinc-600">Close</span>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-[1px] border border-zinc-400/50 bg-white">
            <div className="bg-[#cfd6dd] px-0.5 py-[1px] font-semibold text-zinc-700">Level II</div>
            {[["192.39", "1.2k", true], ["192.41", "0.8k", false], ["192.38", "2.0k", true], ["192.42", "1.5k", false]].map(
              ([p, s, bid], i) => (
                <div key={i} className="flex justify-between border-b border-zinc-100 px-0.5 py-[1px]">
                  <span className={bid ? "text-emerald-600" : "text-red-500"}>{p}</span>
                  <span className="text-zinc-500">{s}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Status bar with buttons + ticker */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-1 border-t border-zinc-400/50 bg-[#cfd6dd] px-1 py-[2px]">
        <span className={btn}>Refresh</span>
        <span className={btn}>Export</span>
        <span className="ml-auto flex gap-1 overflow-hidden">
          {QUOTES.map((q) => (
            <span key={q.sym} className="flex shrink-0 gap-0.5">
              <span className="text-zinc-600">{q.sym}</span>
              <span className={q.up ? "text-emerald-600" : "text-red-500"}>{q.chg}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* ── Goal: a calm, organized trading dashboard (purple tone, green/red data) ── */
function TradingDashboard({ visible }: { visible: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#faf8fc] p-2.5 font-sans shadow-sm ring-1 ring-black/[0.05]">
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="dash"
            className="flex h-full flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 ring-1 ring-violet-100"
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
            >
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="text-[9px] font-semibold tracking-tight text-zinc-800">AAPL</span>
              <span className="font-mono text-[9px] font-semibold text-zinc-900">192.40</span>
              <span className="font-mono text-[8px] text-emerald-600">+1.24%</span>
              <span className="ml-auto font-mono text-[8px] text-zinc-400">$84,201</span>
            </motion.div>

            {/* Chart card */}
            <motion.div
              className="relative flex min-h-0 flex-1 flex-col rounded-lg bg-white p-2 ring-1 ring-violet-100"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <div className="mb-1 flex items-center gap-1">
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-zinc-400">Portfolio · 1D</span>
                <div className="ml-auto flex gap-0.5">
                  {["1D", "1W", "1M", "1Y"].map((tf, i) => (
                    <span
                      key={tf}
                      className={[
                        "rounded-full px-1.5 py-[1px] font-mono text-[6px] uppercase tracking-[0.05em]",
                        i === 0 ? "bg-violet-500 text-white" : "bg-zinc-100 text-zinc-400",
                      ].join(" ")}
                    >
                      {tf}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-0 flex-1">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full">
                  <defs>
                    <linearGradient id="etrade-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[10, 20, 30].map((y) => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#efe9f8" strokeWidth="0.4" />
                  ))}
                  <motion.path
                    d="M0,30 L9,28 L18,31 L27,23 L36,26 L45,19 L54,21 L63,15 L72,17 L81,10 L90,12 L100,6 L100,40 L0,40 Z"
                    fill="url(#etrade-area)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                  <motion.path
                    d="M0,30 L9,28 L18,31 L27,23 L36,26 L45,19 L54,21 L63,15 L72,17 L81,10 L90,12 L100,6"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.25, duration: 0.7, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Bottom: order ticket + mini positions */}
            <div className="grid grid-cols-2 gap-2">
              <motion.div
                className="flex flex-col gap-1 rounded-lg bg-white p-2 ring-1 ring-violet-100"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
              >
                <div className="flex gap-1">
                  <span className="flex-1 rounded-md bg-emerald-500 py-1 text-center font-mono text-[7px] uppercase tracking-[0.1em] text-white">Buy</span>
                  <span className="flex-1 rounded-md bg-red-500 py-1 text-center font-mono text-[7px] uppercase tracking-[0.1em] text-white">Sell</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] text-zinc-400">Limit</span>
                  <span className="font-mono text-[8px] font-semibold text-zinc-800">192.40</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-center gap-1 rounded-lg bg-white p-2 ring-1 ring-violet-100"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                {QUOTES.slice(0, 3).map((q) => (
                  <div key={q.sym} className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-zinc-600">{q.sym}</span>
                    <span className={`font-mono text-[7px] ${q.up ? "text-emerald-600" : "text-red-500"}`}>{q.chg}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            className="flex h-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-mono text-[10px] text-zinc-300">press organize</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── main component ── */
export function EtradeComparisonDiagram() {
  const [organized, setOrganized] = useState(false);
  const [organizing, setOrganizing] = useState(false);

  function handleOrganize() {
    if (organized) {
      setOrganized(false);
      return;
    }
    setOrganizing(true);
    setTimeout(() => {
      setOrganizing(false);
      setOrganized(true);
    }, 1200);
  }

  return (
    <div className="relative mb-10 mt-10 w-full overflow-hidden rounded-2xl border border-zinc-200/60 font-sans shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-sm" aria-hidden />

      <div className="relative z-[1] flex flex-col gap-0">
        {/* The trader's task */}
        <div className="border-b border-zinc-200/50 px-3 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">A swing trader sits down to trade</p>
          <p className="mt-1 text-[0.82rem] italic text-zinc-600">
            &ldquo;Just let me check one position and place a single trade.&rdquo;
          </p>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Today — legacy platform */}
          <div className="border-b border-zinc-200/40 p-5 md:border-b-0 md:border-r">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e05252]/80">Today · Display Disorder</p>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-mono text-[8px] text-red-400 ring-1 ring-red-200/50">
                everything at once
              </span>
            </div>

            <div className="h-[250px]">
              <LegacyPlatform />
            </div>
            <p className="mt-4 text-center font-mono text-[9px] leading-snug text-zinc-400">
              Toolbars, panels, and order forms competing for one decision.
            </p>
          </div>

          {/* Goal — organized dashboard */}
          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-600/80">Goal · Systemic Clarity</p>
              <span
                className={[
                  "rounded-full px-2.5 py-0.5 font-mono text-[8px] ring-1 transition-colors duration-300",
                  organized ? "bg-violet-50 text-violet-500 ring-violet-200/50" : "bg-zinc-50 text-zinc-300 ring-zinc-200/50",
                ].join(" ")}
              >
                one task, one focus
              </span>
            </div>

            <div className="h-[250px]">
              <TradingDashboard visible={organized} />
            </div>

            <button
              onClick={handleOrganize}
              disabled={organizing}
              className={[
                "mt-4 w-full rounded-xl py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200",
                organizing
                  ? "cursor-wait bg-violet-100 text-violet-300"
                  : organized
                    ? "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                    : "bg-violet-500/10 text-violet-600 ring-1 ring-violet-300/40 hover:bg-violet-500/20",
              ].join(" ")}
            >
              {organizing ? "organizing..." : organized ? "reset" : "Organize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
