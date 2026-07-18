"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "milepost" | "drover";

/**
 * Left panel: fragmented industry stack.
 * Patterned after DAT/Truckstop load boards, a COI portal badge, and a crude cash sheet —
 * separate products, no shared judgment.
 */
function FragmentedTools() {
  return (
    <div className="relative flex h-full w-full flex-col gap-1.5 overflow-hidden rounded-lg bg-[#e8ecf0] p-2 shadow-sm ring-1 ring-black/10">
      {/* Generic load board — DAT/Truckstop denseness */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded border border-[#c5cdd6] bg-white shadow-sm">
        <div className="flex items-center gap-1.5 bg-[#1a3a6b] px-2 py-1">
          <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.12em] text-white/90">
            Load board
          </span>
          <span className="ml-auto font-mono text-[6px] text-white/50">spot · dry van</span>
        </div>
        <div className="grid grid-cols-[36px_1fr_44px_36px] gap-0 border-b border-[#d8dee6] bg-[#f0f3f7] px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b7785]">
          <span>Rate</span>
          <span>Lane</span>
          <span>$/mi</span>
          <span>Age</span>
        </div>
        {[
          { rate: "$2,140", lane: "AMA · GUY", rpm: "$2.18", age: "4m" },
          { rate: "$1,890", lane: "LBB · CVS", rpm: "$1.94", age: "12m" },
          { rate: "$2,420", lane: "DHT · GCK", rpm: "$2.31", age: "1h" },
        ].map((row) => (
          <div
            key={row.lane}
            className="grid grid-cols-[36px_1fr_44px_36px] items-center border-b border-[#eef1f5] px-1.5 py-[3px] font-mono text-[7px] last:border-b-0"
          >
            <span className="font-semibold text-[#8b7355]">{row.rate}</span>
            <span className="truncate text-[#2a3340]">{row.lane}</span>
            <span className="text-[#8b7355]">{row.rpm}</span>
            <span className="text-[#8a95a3]">{row.age}</span>
          </div>
        ))}
      </div>

      {/* Insurance portal — badge only */}
      <div className="flex items-center gap-2 rounded border border-[#c5cdd6] bg-white px-2 py-1.5 shadow-sm">
        <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#8a95a3]">
          COI portal
        </span>
        <span className="ml-auto rounded bg-[#efe7d6] px-1.5 py-0.5 font-mono text-[7px] font-semibold text-[#8b7355] ring-1 ring-[#ddd2b8]">
          Verified
        </span>
      </div>

      {/* Cash sheet — spreadsheet residue */}
      <div className="rounded border border-[#c5cdd6] bg-[#f7f9f4] px-2 py-1.5 shadow-sm">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#8a95a3]">
            Cash sheet.xls
          </span>
          <span className="font-mono text-[7px] text-[#c1552f]">???</span>
        </div>
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded border border-[#ddd2b8] bg-[#ddd2b8] font-mono text-[6px]">
          <span className="bg-[#eef2e6] px-1 py-0.5 text-[#6b7354]">Due</span>
          <span className="bg-[#eef2e6] px-1 py-0.5 text-[#6b7354]">In</span>
          <span className="bg-[#eef2e6] px-1 py-0.5 text-[#6b7354]">Bal</span>
          <span className="bg-white px-1 py-0.5 text-[#2a3340]">RX-2247</span>
          <span className="bg-white px-1 py-0.5 text-[#c1552f]">over</span>
          <span className="bg-white px-1 py-0.5 text-[#2a3340]">$4,230</span>
        </div>
      </div>
    </div>
  );
}

/** Tetonic Potential Shipping — mirrors live milepost board chrome. */
function MilepostBoard() {
  return (
    <motion.div
      key="milepost"
      className="flex h-full flex-col overflow-hidden rounded-md bg-[#f5f0e6] ring-1 ring-[#ddd2b8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex items-center gap-1.5 border-b border-[#ddd2b8] bg-[#fffcf6] px-2 py-1">
        <span className="font-mono text-[7px] font-semibold tracking-[0.1em] text-[#2b271f]">
          tetonic
        </span>
        <span className="rounded bg-[#faf5eb] px-1.5 py-0.5 font-mono text-[6px] text-[#6b6354] ring-1 ring-[#e8dfc9]">
          Potential Shipping
        </span>
        <span className="ml-auto font-mono text-[6px] text-[#9c8f70]">8 loads</span>
      </div>
      <div className="grid grid-cols-[40px_1fr_72px_48px] gap-0 border-b border-[#e8dfc9] bg-[#efe7d6]/60 px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b6354]">
        <span>Rate</span>
        <span>Route</span>
        <span>Est. net</span>
        <span>State</span>
      </div>
      <div className="flex flex-1 flex-col gap-0.5 overflow-hidden p-1">
        {[
          {
            rate: "$2.18",
            route: "Amarillo · Guymon",
            net: "+$420–890",
            state: "ok",
            stateLabel: "profitable",
          },
          {
            rate: "$1.94",
            route: "Lubbock · Clovis",
            net: "-$40–310",
            state: "warn",
            stateLabel: "marginal",
          },
          {
            rate: "$2.31",
            route: "Dalhart · GCK",
            net: "blocked",
            state: "bad",
            stateLabel: "COI lapsed",
          },
        ].map((row) => (
          <div
            key={row.route}
            className="grid grid-cols-[40px_1fr_72px_48px] items-center rounded border border-[#ddd2b8] bg-[#fffcf6] px-1.5 py-1 shadow-[0_1px_2px_rgba(43,39,31,0.06)]"
          >
            <span className="font-mono text-[7px] font-bold text-[#2b271f]">{row.rate}</span>
            <span className="truncate font-mono text-[7px] text-[#4a4438]">{row.route}</span>
            <span
              className={`font-mono text-[7px] font-semibold ${
                row.state === "ok"
                  ? "text-[#6b6354]"
                  : row.state === "warn"
                    ? "text-[#bd8535]"
                    : "text-[#b8512f]"
              }`}
            >
              {row.net}
            </span>
            <span
              className={`truncate font-mono text-[6px] ${
                row.state === "ok"
                  ? "text-[#6b6354]"
                  : row.state === "warn"
                    ? "text-[#bd8535]"
                    : "text-[#b8512f]"
              }`}
            >
              {row.stateLabel}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/** Tetonic Current Shipping — certificate / welfare board. */
function DroverBoard() {
  return (
    <motion.div
      key="drover"
      className="flex h-full flex-col overflow-hidden rounded-md bg-[#f5f0e6] ring-1 ring-[#ddd2b8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex items-center gap-1.5 border-b border-[#ddd2b8] bg-[#fffcf6] px-2 py-1">
        <span className="font-mono text-[7px] font-semibold tracking-[0.1em] text-[#2b271f]">
          tetonic
        </span>
        <span className="rounded bg-[#faf5eb] px-1.5 py-0.5 font-mono text-[6px] text-[#6b6354] ring-1 ring-[#e8dfc9]">
          Current Shipping
        </span>
        <span className="ml-auto font-mono text-[6px] text-[#9c8f70]">10 certs</span>
      </div>
      <div className="grid grid-cols-[52px_1fr_56px_44px] gap-0 border-b border-[#e8dfc9] bg-[#efe7d6]/60 px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wide text-[#6b6354]">
        <span>Cert</span>
        <span>Status</span>
        <span>28-hr</span>
        <span>COI</span>
      </div>
      <div className="flex flex-1 flex-col gap-0.5 overflow-hidden p-1">
        {[
          {
            id: "CRT-1042",
            status: "In transit",
            rest: "22h left",
            coi: "ok",
            coiLabel: "verified",
          },
          {
            id: "CRT-1048",
            status: "Rest stop",
            rest: "resting",
            coi: "warn",
            coiLabel: "expiring",
          },
          {
            id: "CRT-1051",
            status: "Staging",
            rest: "—",
            coi: "bad",
            coiLabel: "lapsed",
          },
        ].map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-[52px_1fr_56px_44px] items-center rounded border border-[#ddd2b8] bg-[#fffcf6] px-1.5 py-1 shadow-[0_1px_2px_rgba(43,39,31,0.06)]"
          >
            <span className="font-mono text-[7px] font-semibold text-[#2b271f]">{row.id}</span>
            <span className="truncate font-mono text-[7px] text-[#4a4438]">{row.status}</span>
            <span className="font-mono text-[7px] text-[#6b6354]">{row.rest}</span>
            <span
              className={`font-mono text-[6px] font-semibold ${
                row.coi === "ok"
                  ? "text-[#6b6354]"
                  : row.coi === "warn"
                    ? "text-[#bd8535]"
                    : "text-[#b8512f]"
              }`}
            >
              {row.coiLabel}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TetonicOutput({ visible, mode }: { visible: boolean; mode: Mode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#efe7d6]/40 p-2 font-sans shadow-sm ring-1 ring-[#ddd2b8]/80">
      <AnimatePresence mode="wait">
        {visible ? (
          mode === "milepost" ? (
            <MilepostBoard />
          ) : (
            <DroverBoard />
          )
        ) : (
          <motion.div
            key="idle"
            className="flex h-full items-center justify-center rounded-md border border-dashed border-[#ddd2b8] bg-[#fffcf6]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-mono text-[10px] text-[#9c8f70]">press render</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TetonicComparisonDiagram() {
  const [rendered, setRendered] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [mode, setMode] = useState<Mode>("milepost");

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
        <div className="border-b border-zinc-200/50 px-3 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            A hauler opens the day&apos;s board
          </p>
          <p className="mt-1 text-[0.82rem] italic text-zinc-600">
            &ldquo;Is this haul still insurable, still legal, still worth taking?&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div className="border-b border-zinc-200/50 p-5 md:border-b-0 md:border-r">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e05252]/80">
                Fragmented tools
              </p>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-mono text-[8px] text-red-400 ring-1 ring-red-200/50">
                DAT · COI · sheet
              </span>
            </div>

            <div className="h-[230px]">
              <FragmentedTools />
            </div>
            <p className="mt-4 text-center font-mono text-[9px] leading-snug text-zinc-400">
              Spot rates. Badge COI. Cash in a spreadsheet.
            </p>
          </div>

          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b7355]">
                Tetonic
              </p>
              <div className="flex gap-1 rounded-full bg-zinc-100 p-0.5 ring-1 ring-zinc-200/70">
                {(
                  [
                    { id: "milepost", label: "Potential" },
                    { id: "drover", label: "Current" },
                  ] as const
                ).map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleMode(id)}
                    className={[
                      "rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] transition-colors duration-200",
                      mode === id
                        ? "bg-[#8b7355] text-white"
                        : "text-zinc-400 hover:text-zinc-800",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[230px]">
              <TetonicOutput visible={rendered} mode={mode} />
            </div>

            <button
              onClick={handleRender}
              disabled={rendering}
              className={[
                "mt-4 w-full rounded-xl py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200",
                rendering
                  ? "cursor-wait bg-[#bd8535]/[0.10] text-[#c4a574]"
                  : rendered
                    ? "bg-zinc-100 text-zinc-400 hover:bg-zinc-200/80"
                    : "bg-[#bd8535]/[0.10] text-[#8b7355] ring-1 ring-[#ddd2b8]/80 hover:bg-[#bd8535]/[0.16]",
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
