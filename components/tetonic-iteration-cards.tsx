"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = { n: string; reason: string; render: () => ReactNode };

function IterationCard({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {stages.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {s.n}
            </button>
          ))}
        </div>

        <div className="relative flex min-h-[140px] w-full flex-1 items-center justify-center overflow-hidden px-4 py-10">
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

        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-[0.78rem] leading-snug text-zinc-400">{current.reason}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function NetPoint() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#c5cdd6] bg-white shadow-sm">
      <div className="bg-[#1a3a6b] px-2 py-1 font-mono text-[7px] font-semibold uppercase tracking-[0.12em] text-white/90">
        Load board · rate cell
      </div>
      <div className="flex items-end justify-between gap-2 px-3 py-3">
        <div>
          <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#8a95a3]">Trip rate</p>
          <p className="mt-0.5 font-mono text-[1.35rem] font-bold leading-none text-[#8b7355]">$2,140</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[7px] text-[#8a95a3]">$/mi</p>
          <p className="font-mono text-[12px] font-semibold text-[#8b7355]">$2.18</p>
        </div>
      </div>
      <p className="border-t border-[#eef1f5] px-3 py-1.5 font-mono text-[7px] text-[#8a95a3]">
        single posted net · no cost range
      </p>
    </div>
  );
}

function NetRangeWide() {
  return (
    <div className="w-[210px] overflow-hidden rounded border-2 border-red-600 bg-red-50 shadow-[0_1px_3px_rgba(220,38,38,0.25)]">
      <div className="flex items-center justify-between border-b-2 border-red-600 bg-red-600 px-2 py-1">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white">⚠ Est. net</span>
        <span className="font-mono text-[7px] font-bold uppercase text-white">danger</span>
      </div>
      <div className="px-3 py-3 text-center">
        <p className="font-mono text-[1.05rem] font-black tracking-tight text-red-700">
          <span>-$40</span>
          <span className="mx-1 text-red-400">to</span>
          <span>+$310</span>
        </p>
        <p className="mt-1 font-mono text-[7px] font-bold uppercase text-red-600">! straddles breakeven !</p>
      </div>
    </div>
  );
}

function NetRangeHealthy() {
  return (
    <div className="w-[210px] overflow-hidden rounded border border-[#ddd2b8] bg-[#fffcf6] shadow-[0_1px_2px_rgba(43,39,31,0.06)]">
      <div className="flex items-center justify-between border-b border-[#e8dfc9] bg-[#efe7d6]/50 px-2 py-1">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#6b6354]">Est. net</span>
        <span className="font-mono text-[7px] text-[#6b6354]">profitable</span>
      </div>
      <div className="px-3 py-3 text-center">
        <p className="font-mono text-[1.05rem] font-semibold tracking-tight text-[#6b6354]">
          +$420 to +$890
        </p>
        <p className="mt-1 font-mono text-[7px] text-[#6b6354]">narrow · after fuel + shrink</p>
      </div>
    </div>
  );
}

function ComplianceBadge() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#c5cdd6] bg-white shadow-sm">
      <div className="grid grid-cols-[1fr_48px_40px] border-b border-[#d8dee6] bg-[#f0f3f7] px-2 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b7785]">
        <span>Cert</span>
        <span>28-hr</span>
        <span>Flag</span>
      </div>
      <div className="grid grid-cols-[1fr_48px_40px] items-center px-2 py-3 font-mono text-[8px]">
        <span className="text-[#2a3340]">CRT-1042</span>
        <span className="font-semibold text-[#8b7355]">OK</span>
        <span className="text-[#8a95a3]">—</span>
      </div>
      <p className="border-t border-[#eef1f5] px-2 py-1.5 font-mono text-[7px] text-[#8a95a3]">
        decorative status chip
      </p>
    </div>
  );
}

function ComplianceWarn() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#c5cdd6] bg-white shadow-sm">
      <div className="grid grid-cols-[1fr_56px_48px] border-b border-[#d8dee6] bg-[#f0f3f7] px-2 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b7785]">
        <span>Cert</span>
        <span>28-hr</span>
        <span>Signal</span>
      </div>
      <div className="grid grid-cols-[1fr_56px_48px] items-center px-2 py-3 font-mono text-[8px]">
        <span className="text-[#2a3340]">CRT-1042</span>
        <span className="font-medium text-[#8a95a3]">22h left</span>
        <span className="text-[#8a95a3]">warn</span>
      </div>
      <p className="border-t border-[#eef1f5] px-2 py-1.5 font-mono text-[7px] text-[#8a95a3]">
        warning only · still rolling
      </p>
    </div>
  );
}

function ComplianceSignal() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#ddd2b8] bg-[#fffcf6] shadow-[0_1px_2px_rgba(43,39,31,0.06)]">
      <div className="grid grid-cols-[1fr_56px_48px] border-b border-[#e8dfc9] bg-[#efe7d6]/60 px-2 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b6354]">
        <span>Cert</span>
        <span>28-hr</span>
        <span>Claim</span>
      </div>
      <div className="grid grid-cols-[1fr_56px_48px] items-center px-2 py-3 font-mono text-[8px]">
        <span className="text-[#2b271f]">CRT-1042</span>
        <span className="font-semibold text-[#b8512f]">rest due</span>
        <span className="font-semibold text-[#b8512f]">risk up</span>
      </div>
      <p className="border-t border-[#e8dfc9] px-2 py-1.5 font-mono text-[7px] text-[#6b6354]">
        feeds underwriting validity
      </p>
    </div>
  );
}

function CashEmpty() {
  return (
    <div className="flex h-[120px] w-[200px] flex-col items-center justify-center rounded border border-dashed border-[#c5cdd6] bg-[#f7f9f4]">
      <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a95a3]">Settlements</p>
      <p className="mt-2 font-mono text-[9px] text-[#6b7785]">No bank feed connected</p>
      <p className="mt-1 font-mono text-[7px] text-[#a0a8b0]">empty runway</p>
    </div>
  );
}

function CashCrunch() {
  return (
    <div className="w-[210px] overflow-hidden rounded-sm border border-[#b8bfc7] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between border-b border-[#b8bfc7] bg-[#1e6b3e] px-2 py-1">
        <span className="font-sans text-[7px] font-semibold text-white">30-day runway.xlsx</span>
        <span className="font-sans text-[7px] font-bold text-white">OVERDUE</span>
      </div>
      <table className="w-full border-collapse font-sans text-[8px]">
        <tbody>
          <tr className="border-b border-[#e3e6e9]">
            <td className="border-r border-[#e3e6e9] px-2 py-1 text-[#3c4043]">RX-2247 settlement</td>
            <td className="px-2 py-1 text-right text-red-700">-$1,840</td>
          </tr>
          <tr className="border-b border-[#e3e6e9] bg-[#f8f9fa]">
            <td className="border-r border-[#e3e6e9] px-2 py-1 text-[#3c4043]">Balance</td>
            <td className="px-2 py-1 text-right text-[#3c4043]">$4,230</td>
          </tr>
        </tbody>
      </table>
      <p className="border-t border-[#e3e6e9] px-2 py-1.5 font-sans text-[7px] italic text-[#5f6368]">
        Crunch projected · day 18 (manually recalculated)
      </p>
    </div>
  );
}

function CashHealthy() {
  return (
    <div className="w-[210px] overflow-hidden rounded border border-[#ddd2b8] bg-[#fffcf6] shadow-[0_1px_2px_rgba(43,39,31,0.06)]">
      <div className="flex items-center justify-between border-b border-[#e8dfc9] bg-[#efe7d6]/50 px-2 py-1">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#6b6354]">
          30-day runway
        </span>
        <span className="font-mono text-[7px] font-semibold text-[#6b6354]">clear</span>
      </div>
      <div className="space-y-1.5 px-2.5 py-2.5">
        <div className="flex justify-between font-mono text-[8px]">
          <span className="text-[#6b6354]">Upcoming inflows</span>
          <span className="font-semibold text-[#6b6354]">+$6,100</span>
        </div>
        <div className="flex justify-between font-mono text-[8px]">
          <span className="text-[#6b6354]">Balance</span>
          <span className="text-[#2b271f]">$4,230</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#efe7d6]">
          <div className="h-full w-[38%] rounded-full bg-[#6b6354]" />
        </div>
        <p className="font-mono text-[7px] text-[#6b6354]">Obligations covered · 30 days</p>
      </div>
    </div>
  );
}

const NET: Stage[] = [
  { n: "01", reason: "One posted net number hides the real cost.", render: () => <NetPoint /> },
  { n: "02", reason: "First pass went bright red and loud to scare a decision.", render: () => <NetRangeWide /> },
  { n: "03", reason: "Softer signal instead — the call stays the user's.", render: () => <NetRangeHealthy /> },
];

const COMPLIANCE: Stage[] = [
  { n: "01", reason: "OK chips hide claim risk underneath.", render: () => <ComplianceBadge /> },
  { n: "02", reason: "Too implicit — the risk should say itself.", render: () => <ComplianceWarn /> },
  { n: "03", reason: "28-hr status now feeds claim validity.", render: () => <ComplianceSignal /> },
];

const CASH: Stage[] = [
  { n: "01", reason: "Spreadsheet exports hide timing risk.", render: () => <CashEmpty /> },
  { n: "02", reason: "Crunch windows make settlement lag first-class.", render: () => <CashCrunch /> },
  { n: "03", reason: "Clear runway still shows obligations vs inflows.", render: () => <CashHealthy /> },
];

function OutdoorLowContrast() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#dfe3e8] bg-[#fafbfc] shadow-sm">
      <div className="border-b border-[#eef1f5] bg-[#f5f6f8] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#b7bec6]">
        Load board · default theme
      </div>
      <div className="flex flex-col gap-1.5 px-3 py-4">
        <span className="font-mono text-[10px] font-medium text-[#c3c9d1]">CRT-1042 · verified</span>
        <span className="font-mono text-[9px] text-[#d3d8de]">$2,140 · $2.18/mi</span>
      </div>
      <p className="border-t border-[#eef1f5] px-2 py-1.5 font-mono text-[7px] text-[#c3c9d1]">
        pale grays wash out in direct sun
      </p>
    </div>
  );
}

function OutdoorHighContrast() {
  return (
    <div className="w-[200px] overflow-hidden rounded border border-[#2b271f]/20 bg-[#fffcf6] shadow-[0_1px_2px_rgba(43,39,31,0.08)]">
      <div className="border-b border-[#ddd2b8] bg-[#efe7d6] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#6b6354]">
        Current shipping · outdoor theme
      </div>
      <div className="flex flex-col gap-1.5 px-3 py-4">
        <span className="font-mono text-[10px] font-semibold text-[#2b271f]">CRT-1042 · verified</span>
        <span className="font-mono text-[9px] font-medium text-[#8b7355]">$2,140 · $2.18/mi</span>
      </div>
      <p className="border-t border-[#ddd2b8] px-2 py-1.5 font-mono text-[7px] text-[#6b6354]">
        dark type + warm high-contrast fields hold up in a yard
      </p>
    </div>
  );
}

const COLOR: Stage[] = [
  { n: "01", reason: "Gray-on-white themes wash out in sunlight.", render: () => <OutdoorLowContrast /> },
  { n: "02", reason: "High-contrast fields stay legible outdoors.", render: () => <OutdoorHighContrast /> },
];

export function TetonicIterationCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-2">
      <IterationCard stages={NET} />
      <IterationCard stages={COMPLIANCE} />
      <IterationCard stages={CASH} />
      <IterationCard stages={COLOR} />
    </div>
  );
}
