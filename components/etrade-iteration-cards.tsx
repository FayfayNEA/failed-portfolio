"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = { n: string; reason: string; render: () => ReactNode };

/* ── Shared iteration viewer (tabs → animated preview → reason) ── */
function IterationCard({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Tabs */}
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {stages.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {s.n}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className="relative flex min-h-[160px] w-full flex-1 items-center justify-center overflow-hidden px-4 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex w-full items-center justify-center"
            >
              {current.render()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-[0.78rem] leading-snug text-zinc-500">{current.reason}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── 1. Top-bar navigation: text → icons only → icon + label mix ── */
function NavGlyph({ kind }: { kind: string }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "chart":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M1 9 L4 6 L7 8 L11 3" {...s} /></svg>;
    case "bars":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M2 10V6M6 10V3M10 10V7" {...s} /></svg>;
    case "star":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M6 1.6l1.3 2.8 3 .3-2.2 2 .6 3L6 8.9 3.3 9.6l.6-3-2.2-2 3-.3z" fill="currentColor" stroke="none" /></svg>;
    case "bag":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><rect x="2" y="4.2" width="8" height="5.6" rx="1" {...s} /><path d="M4.4 4.2V3.4A1.1 1.1 0 015.5 2.3h1a1.1 1.1 0 011.1 1.1v.8" {...s} /></svg>;
    case "search":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><circle cx="5.2" cy="5.2" r="3" {...s} /><path d="M7.6 7.6L10 10" {...s} /></svg>;
    case "news":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><rect x="2" y="2.5" width="8" height="7" rx="1" {...s} /><path d="M3.5 5h3M3.5 7h5" {...s} /></svg>;
    case "bell":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M3.6 8c0-3 1-4.4 2.4-4.4S8.4 5 8.4 8M3 8h6M5.2 9.4a.9.9 0 001.6 0" {...s} /></svg>;
    case "list":
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M3 3.5h6M3 6h6M3 8.5h6" {...s} /></svg>;
    default:
      return <svg viewBox="0 0 12 12" className="h-3 w-3"><circle cx="6" cy="4.2" r="2" {...s} /><path d="M2.6 10c.6-2 1.8-3 3.4-3s2.8 1 3.4 3" {...s} /></svg>;
  }
}

function NavBar({ variant }: { variant: "text" | "stack" | "inline" }) {
  let bar: ReactNode;
  if (variant === "text") {
    const items = ["Markets", "Trade", "Watchlist", "Portfolio", "Research", "Screener", "News", "Alerts", "Orders", "Account"];
    bar = (
      <div className="flex flex-wrap gap-x-1.5 gap-y-1 border-b border-zinc-100 bg-zinc-50 px-1.5 py-1.5">
        {items.map((t) => (
          <span key={t} className="font-mono text-[6px] text-zinc-500">{t}</span>
        ))}
      </div>
    );
  } else if (variant === "stack") {
    const items: Array<[string, string]> = [
      ["chart", "Trade"],
      ["bars", "Markets"],
      ["star", "Watch"],
      ["bag", "Folio"],
      ["search", "Find"],
      ["bell", "Alerts"],
    ];
    bar = (
      <div className="flex items-start justify-between border-b border-zinc-100 bg-zinc-50 px-1.5 py-1.5">
        {items.map(([k, l]) => (
          <span key={l} className="flex flex-col items-center gap-0.5 text-sky-600">
            <NavGlyph kind={k} />
            <span className="font-mono text-[5px] text-zinc-500">{l}</span>
          </span>
        ))}
      </div>
    );
  } else {
    const items: Array<[string, string]> = [
      ["chart", "Trade"],
      ["star", "Watch"],
      ["bag", "Folio"],
      ["search", "Find"],
      ["bell", "Alerts"],
    ];
    bar = (
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-zinc-100 bg-zinc-50 px-1.5 py-1.5">
        {items.map(([k, l]) => (
          <span key={l} className="flex items-center gap-0.5">
            <span className="text-sky-600">
              <NavGlyph kind={k} />
            </span>
            <span className="font-mono text-[6px] text-zinc-600">{l}</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="w-[176px] overflow-hidden rounded-lg bg-white ring-1 ring-zinc-200">
      {bar}
      <div className="p-2">
        <div className="h-[58px] w-full rounded bg-zinc-50 ring-1 ring-zinc-100" />
      </div>
    </div>
  );
}

/* ── 2. Buy button: size, color, radius, and interaction evolve ── */
function BuyEvolution({ variant }: { variant: "small" | "bigger" | "final" }) {
  if (variant === "small") {
    return (
      <button className="rounded-[3px] bg-violet-500 px-5 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
        Buy
      </button>
    );
  }

  if (variant === "bigger") {
    return (
      <button className="rounded-2xl bg-green-500 px-9 py-4 font-mono text-[0.9rem] font-bold uppercase tracking-[0.12em] text-white shadow-md">
        Buy
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      whileTap={{ y: 2 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      style={{ fontFamily: "'Roboto', system-ui, sans-serif", backgroundColor: "#00C805" }}
      className="flex h-9 w-[200px] items-center justify-center rounded-xl text-[22px] font-medium text-white shadow-lg shadow-[#00C805]/30"
    >
      <span style={{ transform: "rotate(-0.42deg)" }}>BUY</span>
    </motion.button>
  );
}

/* ── 3. Corners + figures: calm geometry (animated radius + stress meter) ── */
function CalmPanel({ variant }: { variant: "sharp" | "round" | "mix" }) {
  const radius = variant === "sharp" ? 0 : variant === "round" ? 34 : 12;
  const stress = variant === "sharp" ? "85%" : variant === "round" ? "55%" : "28%";
  const stressColor = variant === "sharp" ? "#ef4444" : variant === "round" ? "#f59e0b" : "#22c55e";
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        animate={{ borderRadius: radius }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex h-[72px] w-32 flex-col justify-center gap-1.5 bg-white px-3 ring-1 ring-zinc-200"
      >
        {[
          ["AAPL", "192.40"],
          ["TSLA", "246.30"],
          ["NVDA", "118.20"],
        ].map(([sym, px]) => (
          <div key={sym} className="flex items-center justify-between">
            <span className="font-mono text-[8px] text-zinc-500">{sym}</span>
            <span className="font-mono text-[8px] tabular-nums text-zinc-800">{px}</span>
          </div>
        ))}
      </motion.div>
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-zinc-400">stress</span>
        <span className="relative h-1.5 w-20 overflow-hidden rounded-full bg-zinc-200">
          <motion.span
            className="absolute inset-y-0 left-0 rounded-full"
            animate={{ width: stress, backgroundColor: stressColor }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </span>
      </div>
    </div>
  );
}

/* ── 4. Breaking up the data: text wall → icons + hierarchy → digestible divs ── */
function DataIcon({ kind }: { kind: "chart" | "star" | "wallet" }) {
  if (kind === "chart")
    return (
      <svg viewBox="0 0 12 12" className="h-3 w-3">
        <path d="M1 9 L4 6 L7 8 L11 3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (kind === "star")
    return (
      <svg viewBox="0 0 12 12" className="h-3 w-3">
        <path d="M6 1.4l1.4 2.9 3.1.4-2.3 2.1.6 3.1L6 8.9 3.2 10l.6-3.1L1.5 4.7l3.1-.4z" fill="currentColor" />
      </svg>
    );
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3">
      <rect x="1.5" y="3" width="9" height="6.5" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="8.3" cy="6.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

function DataBlocks({ variant }: { variant: "wall" | "icons" | "cards" }) {
  if (variant === "wall") {
    const rows = [
      "AAPL  192.40  +1.24%", "TSLA  246.30  -3.41%", "NVDA  118.20  +0.82%",
      "AMD  166.20  -1.07%", "MSFT  411.80  +0.31%", "META  500.80  -2.18%",
      "Account equity  84,201.55", "Buying power  21,400.00", "Day P/L  +420.18",
      "Open P/L  -210.40", "RSI 71   VOL 2.1M", "MA50 188.2  BETA 1.3",
    ];
    return (
      <div className="relative h-[124px] w-[176px] overflow-hidden rounded-lg bg-white ring-1 ring-zinc-200">
        <div className="flex flex-col gap-1.5 p-2.5">
          {rows.map((r, i) => (
            <span key={i} className="font-mono text-[7px] leading-none text-zinc-500">{r}</span>
          ))}
        </div>
        {/* scroll affordance */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute bottom-1 right-1 top-1 w-1 rounded-full bg-zinc-100">
          <div className="h-1/3 w-full rounded-full bg-zinc-300" />
        </div>
      </div>
    );
  }

  if (variant === "icons") {
    const rows: Array<{ kind: "chart" | "star" | "wallet"; sym: string; sub: string; val: string; tone: "up" | "down" | "flat" }> = [
      { kind: "chart", sym: "AAPL", sub: "Apple Inc", val: "+1.24%", tone: "up" },
      { kind: "star", sym: "TSLA", sub: "Watchlist", val: "-3.41%", tone: "down" },
      { kind: "chart", sym: "NVDA", sub: "Nvidia", val: "+0.82%", tone: "up" },
      { kind: "wallet", sym: "Account", sub: "Equity", val: "84,201", tone: "flat" },
    ];
    return (
      <div className="flex w-[176px] flex-col gap-2 rounded-lg bg-white p-2.5 ring-1 ring-zinc-200">
        {rows.map((r) => (
          <div key={r.sym} className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-sky-500/10 text-sky-600">
              <DataIcon kind={r.kind} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-mono text-[8px] font-semibold text-zinc-800">{r.sym}</span>
              <span className="font-mono text-[6px] text-zinc-400">{r.sub}</span>
            </div>
            <span
              className={[
                "ml-auto font-mono text-[8px] font-medium tabular-nums",
                r.tone === "up" ? "text-green-600" : r.tone === "down" ? "text-red-500" : "text-zinc-700",
              ].join(" ")}
            >
              {r.val}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const groups: Array<{ title: string; rows: Array<[string, string]>; pos?: boolean }> = [
    { title: "Positions", rows: [["AAPL", "+420"], ["NVDA", "+88"]], pos: true },
    { title: "Watchlist", rows: [["TSLA", "-3.4%"], ["MSFT", "+0.3%"]] },
    { title: "Account", rows: [["Equity", "84,201"]] },
    { title: "Today", rows: [["P/L", "+1.9%"]], pos: true },
  ];
  return (
    <div className="grid w-[176px] grid-cols-2 gap-2">
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-1 rounded-lg bg-white p-2 ring-1 ring-zinc-200"
        >
          <p className="font-mono text-[6px] uppercase tracking-[0.12em] text-zinc-400">{g.title}</p>
          {g.rows.map(([l, v]) => (
            <div key={l} className="flex items-center justify-between">
              <span className="font-mono text-[7px] text-zinc-500">{l}</span>
              <span className={`font-mono text-[7px] tabular-nums ${g.pos ? "text-green-600" : "text-zinc-700"}`}>{v}</span>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Card data ── */
const NAV: Stage[] = [
  { n: "01", reason: "Ten text-only menu items cram the top bar; every label competes for attention.", render: () => <NavBar variant="text" /> },
  { n: "02", reason: "Icon beside the label stays compact and scannable in a single row but overwhelming for the user.", render: () => <NavBar variant="inline" /> },
  { n: "03", reason: "Stacking the icon over its label is clear and allows for two levels of hierarchy for the user to not engage in display disorder.", render: () => <NavBar variant="stack" /> },
];

const BUY: Stage[] = [
  { n: "01", reason: "Small, low-radius and off-brand purple, the primary action reads as secondary.", render: () => <BuyEvolution variant="small" /> },
  { n: "02", reason: "Bigger, green and softly rounded, it finally looks like the main action.", render: () => <BuyEvolution variant="bigger" /> },
  { n: "03", reason: "Rounded with clear tap feedback and large button so fat fingering never occurs.", render: () => <BuyEvolution variant="final" /> },
];

const CALM: Stage[] = [
  { n: "01", reason: "Sharp corners raise the physiological stress response under pressure.", render: () => <CalmPanel variant="sharp" /> },
  { n: "02", reason: "Fully rounded feels soft but loses the precision a trading tool needs to project.", render: () => <CalmPanel variant="round" /> },
  { n: "03", reason: "8 to 12px corners balance calm and precision, lowering cortisol without going soft. (NIH)", render: () => <CalmPanel variant="mix" /> },
];

const DATA: Stage[] = [
  { n: "01", reason: "All the data dumped as text at once, you have to scroll to find anything. Display disorder.", render: () => <DataBlocks variant="wall" /> },
  { n: "02", reason: "Icons and a clear font hierarchy let the eye sort data without reading every word.", render: () => <DataBlocks variant="icons" /> },
  { n: "03", reason: "Broken into small digestible divs, each chunk is easy to scan and act on. (Tufte / NIH)", render: () => <DataBlocks variant="cards" /> },
];

export function EtradeIterationCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-2">
      <IterationCard stages={BUY} />
      <IterationCard stages={NAV} />
      <IterationCard stages={CALM} />
      <IterationCard stages={DATA} />
    </div>
  );
}
