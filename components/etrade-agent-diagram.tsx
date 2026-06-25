"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InputNode({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-zinc-200/70 bg-white px-3 py-2 shadow-[0_2px_10px_-8px_rgba(0,0,0,0.15)]">
      <p className="text-[0.78rem] font-medium leading-tight text-zinc-800">{title}</p>
      {sub && <p className="mt-0.5 font-mono text-[0.62rem] text-zinc-400">{sub}</p>}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center md:px-1">
      <span className="rotate-90 font-mono text-lg text-sky-400 md:rotate-0">→</span>
    </div>
  );
}

type AgentMode = "high" | "low" | "error";

export function EtradeAgentDiagram() {
  const [mode, setMode] = useState<AgentMode>("high");
  const [engaged, setEngaged] = useState(false);
  const low = mode === "low";
  const isError = mode === "error";

  const selectMode = (val: AgentMode) => {
    setMode(val);
    setEngaged(false);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/60 bg-white/50 p-5 backdrop-blur-sm sm:p-6">
      {/* Confidence demo toggle */}
      <div className="mb-5 flex items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Try it</span>
        <div className="flex flex-wrap gap-1">
          {[
            { label: "High confidence", val: "high" as AgentMode, active: "bg-sky-500 text-white" },
            { label: "Low confidence", val: "low" as AgentMode, active: "bg-sky-500 text-white" },
            { label: "Error state", val: "error" as AgentMode, active: "bg-red-500 text-white" },
          ].map(({ label, val, active }) => (
            <button
              key={label}
              onClick={() => selectMode(val)}
              className={[
                "rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors",
                mode === val ? active : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Flow */}
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
        {/* Inputs */}
        <div className="flex flex-1 flex-col">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-sky-600/70">Inputs</p>
          <div className="flex flex-1 flex-col justify-center gap-2">
            <InputNode title="Live positions" />
            <InputNode title="Market feed" />
            <InputNode title="Risk tolerance" sub="set in onboarding" />
          </div>
        </div>

        <Connector />

        {/* Agent */}
        <div className="flex flex-[1.25] flex-col">
          <p className={`mb-2 font-mono text-[9px] uppercase tracking-[0.18em] ${isError ? "text-red-600/80" : "text-sky-600/70"}`}>Agent</p>
          <motion.div
            animate={{
              backgroundColor: isError ? "rgba(239,68,68,0.07)" : "rgba(14,165,233,0.07)",
            }}
            transition={{ duration: 0.3 }}
            className={`flex flex-1 flex-col justify-center rounded-xl p-4 ring-1 ${isError ? "ring-red-300/50" : "ring-sky-300/40"}`}
          >
            <div className="flex items-center gap-2">
              <p className="text-[0.95rem] font-semibold tracking-[-0.02em] text-zinc-950">AI Agent</p>
              {isError && (
                <span className="rounded-full bg-red-500/15 px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-red-600">
                  failsafe
                </span>
              )}
            </div>
            {isError ? (
              <>
                <p className="mt-2 text-[0.74rem] leading-relaxed text-zinc-600">
                  Conflicting signals and low data quality detected
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-red-600">→ recommendation halted</p>
                <p className="mt-3 border-t border-red-200/60 pt-2 text-[0.7rem] italic leading-snug text-zinc-500">
                  Stops itself before it can act. Control returns to you.
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-[0.74rem] leading-relaxed text-zinc-600">
                  Volatility model + your win/loss history
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-sky-700">→ confidence score</p>
                <p className="mt-3 border-t border-sky-200/50 pt-2 text-[0.7rem] italic leading-snug text-zinc-500">
                  Recommends and explains. Never executes.
                </p>
              </>
            )}
          </motion.div>
        </div>

        <Connector />

        {/* Output */}
        <div className="flex flex-1 flex-col">
          <p className={`mb-2 font-mono text-[9px] uppercase tracking-[0.18em] ${isError ? "text-red-600/80" : "text-sky-600/70"}`}>Output</p>
          <div className="flex flex-1 flex-col justify-center gap-2 rounded-xl border border-zinc-200/70 bg-white p-3 shadow-[0_2px_10px_-8px_rgba(0,0,0,0.15)]">
            <p className="text-[0.78rem] font-medium leading-snug text-zinc-800">
              {isError
                ? "No recommendation. The agent flagged its own output as unreliable and stepped back."
                : "\u201CHold AAPL, RSI is high and you bought this dip twice today.\u201D"}
            </p>

            {/* Confidence / status meter */}
            <div>
              <div className="mb-1 flex items-center justify-between font-mono text-[0.62rem]">
                <span className="text-zinc-400">{isError ? "status" : "confidence"}</span>
                <motion.span animate={{ color: isError ? "#dc2626" : low ? "#d97706" : "#16a34a" }} className="tabular-nums">
                  {isError ? "halted" : low ? "32%" : "86%"}
                </motion.span>
              </div>
              <span className="relative block h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full"
                  animate={{
                    width: isError ? "100%" : low ? "32%" : "86%",
                    backgroundColor: isError ? "#ef4444" : low ? "#f59e0b" : "#22c55e",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </span>
            </div>

            {/* The agent only advises, so the action is to engage it: ask why, or teach it when unsure */}
            <motion.button
              type="button"
              onClick={() => setEngaged((e) => !e)}
              animate={{ scale: low || isError ? 1 : 0.94, opacity: low || isError ? 1 : 0.6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={[
                "mt-0.5 rounded-lg py-1.5 text-center font-mono text-[0.66rem] uppercase tracking-[0.12em] transition-colors",
                isError
                  ? engaged
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-red-500 text-white shadow-sm"
                  : low
                    ? engaged
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-sky-500 text-white shadow-sm"
                    : engaged
                      ? "bg-sky-50 text-sky-700 ring-1 ring-sky-300"
                      : "bg-white text-sky-600 ring-1 ring-sky-200",
              ].join(" ")}
            >
              {isError
                ? engaged
                  ? "Close"
                  : "Teach the agent"
                : engaged
                  ? "Hide reasoning"
                  : "Why this?"}
            </motion.button>

            {/* Discussion panel: agent explains itself, or asks you to teach it */}
            <AnimatePresence initial={false}>
              {engaged && isError && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-1 space-y-1.5 rounded-lg bg-red-500/[0.06] p-2.5 ring-1 ring-red-200/60">
                    <p className="text-[0.7rem] leading-snug text-zinc-600">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-red-600/80">Agent</span>
                      <br />
                      &ldquo;I caught conflicting signals and stopped. Tell me how to read this next time.&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {["Bad data feed", "Trust the volatility model", "Flag for review"].map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-white px-2 py-0.5 font-mono text-[0.6rem] text-red-600 ring-1 ring-red-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="border-t border-red-200/50 pt-1.5 text-[0.66rem] italic leading-snug text-zinc-500">
                      It failed safe and learns from the correction. You stay in control.
                    </p>
                  </div>
                </motion.div>
              )}
              {engaged && !isError && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-1 space-y-1.5 rounded-lg bg-sky-500/[0.06] p-2.5 ring-1 ring-sky-200/60">
                    {low ? (
                      <>
                        <p className="text-[0.7rem] leading-snug text-zinc-600">
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-sky-600/80">Reasoning</span>
                          <br />
                          Only 32% sure. The volatility model and your win/loss history disagree here.
                        </p>
                        <p className="text-[0.7rem] leading-snug text-zinc-600">
                          Thin data this session, so it surfaces the call but flags the low confidence instead of hiding it.
                        </p>
                        <p className="border-t border-sky-200/50 pt-1.5 text-[0.66rem] italic leading-snug text-zinc-500">
                          When it&rsquo;s unsure, it says so. You stay the decision-maker.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[0.7rem] leading-snug text-zinc-600">
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-sky-600/80">Reasoning</span>
                          <br />
                          RSI is 74, well into overbought. You&rsquo;ve added to AAPL twice today.
                        </p>
                        <p className="text-[0.7rem] leading-snug text-zinc-600">
                          A third entry would be your most emotional one. Holding protects your average.
                        </p>
                        <p className="border-t border-sky-200/50 pt-1.5 text-[0.66rem] italic leading-snug text-zinc-500">
                          Every call shows its work. You stay the decision-maker.
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Constraints */}
      <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-200/60 pt-4">
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[0.65rem] text-zinc-500">
          Hidden during active order entry
        </span>
        <span className="rounded-full bg-red-50 px-2.5 py-1 font-mono text-[0.65rem] text-red-500/80">
          Failsafe: halts and defers to you on anomaly
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[0.65rem] text-zinc-500">
          Prototype: static state
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[0.65rem] text-zinc-500">
          Production: ML pipeline + OMS API
        </span>
      </div>
    </div>
  );
}
