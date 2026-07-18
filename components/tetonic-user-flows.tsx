import { cn } from "@/lib/cn";

type Tone = "neutral" | "ok" | "warn" | "crit" | "block";

type Node = {
  label: string;
  detail?: string;
  tone?: Tone;
};

type Flow = {
  id: string;
  index: string;
  blurb: string;
  /** Main spine, top to bottom. */
  spine: Node[];
  /** Optional fork after a spine index (0-based). */
  forkAfter?: number;
  forks?: Node[];
  /** Terminal outcomes under the fork / end of spine. */
  ends?: Node[];
  note?: string;
};

const ICON: Partial<Record<Tone, string>> = {
  block: "⛔",
};

const BOX: Record<Tone, string> = {
  neutral: "border-[#ddd2b8] bg-[#fffcf6] text-[#2b271f]",
  ok: "border-[#c4a574]/70 bg-[#efe7d6] text-[#6b6354]",
  warn: "border-[#e8d4a8] bg-[#f5ead2] text-[#8b7355]",
  crit: "border-[#e8c4b4] bg-[#fbf1ec] text-[#9a5a42]",
  block: "border-dashed border-[#c4b896] bg-[#f5f0e6] text-[#6b6354]",
};

function Arrow() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <span className="relative h-4 w-px bg-[#ddd2b8]">
        <span className="absolute -bottom-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rotate-45 border-b border-r border-[#c4b896]" />
      </span>
    </div>
  );
}

function FlowBox({ node, wide = false }: { node: Node; wide?: boolean }) {
  const tone = node.tone ?? "neutral";
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border px-4 py-3 text-center shadow-[0_1px_0_rgba(255,255,255,0.8),0_6px_18px_-12px_rgba(43,39,31,0.18)]",
        BOX[tone],
        wide ? "max-w-none" : "max-w-[18rem] mx-auto"
      )}
    >
      <p className="text-[0.88rem] font-medium leading-snug tracking-[-0.02em]">
        {ICON[tone] ? <span className="mr-1.5" aria-hidden>{ICON[tone]}</span> : null}
        {node.label}
      </p>
      {node.detail ? (
        <p className="mt-1 text-[0.7rem] leading-relaxed opacity-75">{node.detail}</p>
      ) : null}
    </div>
  );
}

function BoxGrid({ nodes }: { nodes: Node[] }) {
  return (
    <div
      className={cn(
        "grid w-full gap-2.5",
        nodes.length === 2 && "grid-cols-2",
        nodes.length === 3 && "grid-cols-1 sm:grid-cols-3",
        nodes.length >= 4 && "grid-cols-2"
      )}
    >
      {nodes.map((node) => (
        <FlowBox key={node.label} node={node} wide />
      ))}
    </div>
  );
}

function FlowChart({ flow }: { flow: Flow }) {
  const forkAt = flow.forkAfter ?? -1;
  const before = forkAt >= 0 ? flow.spine.slice(0, forkAt + 1) : flow.spine;
  const after = forkAt >= 0 ? flow.spine.slice(forkAt + 1) : [];

  return (
    <div className="flex flex-col items-stretch">
      {before.map((node, i) => (
        <div key={`b-${node.label}-${i}`} className="flex flex-col items-center">
          {i > 0 ? <Arrow /> : null}
          <FlowBox node={node} />
        </div>
      ))}

      {flow.forks && flow.forks.length > 0 ? (
        <>
          <Arrow />
          <BoxGrid nodes={flow.forks} />
        </>
      ) : null}

      {after.map((node, i) => (
        <div key={`a-${node.label}-${i}`} className="flex flex-col items-center">
          <Arrow />
          <FlowBox node={node} />
        </div>
      ))}

      {flow.ends && flow.ends.length > 0 ? (
        <>
          <Arrow />
          <BoxGrid nodes={flow.ends} />
        </>
      ) : null}

      {flow.note ? (
        <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-zinc-400">
          {flow.note}
        </p>
      ) : null}
    </div>
  );
}

const FLOWS: Flow[] = [
  {
    id: "cert",
    index: "01",
    blurb: "A bound haul moves from staging to delivery, or into a claim.",
    spine: [
      { label: "Certificate bound", detail: "New policy covers the haul" },
      {
        label: "Staging",
        detail: "Docs hold the row until cleared, then departure unlocks.",
        tone: "warn",
      },
      { label: "In transit", detail: "28-hour clock is live" },
    ],
    forkAfter: 2,
    forks: [
      { label: "Delivered", detail: "Arrival ends the haul", tone: "ok" },
      { label: "Rest stop", detail: "5h+ rest, then continues", tone: "warn" },
      { label: "Overdue", detail: "No rest taken past 28h", tone: "crit" },
    ],
    ends: [
      { label: "Claim filed", tone: "crit" },
      { label: "Under review", tone: "warn" },
      { label: "Approved", detail: "then paid", tone: "ok" },
      { label: "Denied", tone: "crit" },
    ],
    note: "Any state can end in a claim if loss occurs. Denial: negligence, lapsed COI, or pre-existing condition.",
  },
  {
    id: "coi",
    index: "02",
    blurb: "One insurance status. Both boards obey it.",
    spine: [
      { label: "Verified", detail: "Current coverage on file", tone: "ok" },
      {
        label: "Expiring",
        detail: "Renewal window opens before the date passes",
        tone: "warn",
      },
    ],
    forkAfter: 1,
    forks: [
      { label: "Renewed", detail: "Work stays unlocked on both boards", tone: "ok" },
      { label: "Lapsed", detail: "Blocks staging and load quotes", tone: "block" },
    ],
    note: "Renewed from lapsed returns to verified. No separate COI truth per board.",
  },
  {
    id: "calc",
    index: "03",
    blurb: "History and COI gate a range before accept or walk away.",
    spine: [
      { label: "Load quoted", detail: "Posted rate lands on the card" },
      {
        label: "Lane history check",
        detail: "Under 3 hauls needs a manual estimate",
        tone: "warn",
      },
      { label: "COI check", detail: "Lapsed blocks the quote", tone: "block" },
      {
        label: "Compute net range",
        detail: "Fuel, deadhead, and shrink set the bounds",
      },
    ],
    forkAfter: 3,
    forks: [
      { label: "Healthy", detail: "Narrow, positive", tone: "ok" },
      { label: "Wide", detail: "Wide, positive", tone: "ok" },
      { label: "Straddle", detail: "Crosses zero", tone: "warn" },
      { label: "Walk away", detail: "Best case at or below zero", tone: "crit" },
    ],
    ends: [{ label: "Accept or decline", tone: "neutral" }],
    note: "Every outcome still ends in accept or decline. Soft edges stay visible.",
  },
  {
    id: "cash",
    index: "04",
    blurb: "Settlement timing shows crunch before the account goes short.",
    spine: [
      { label: "Open balance", detail: "30-day runway view" },
      {
        label: "Feed health",
        detail: "Empty, stale, or fresh sync",
        tone: "warn",
      },
      {
        label: "Normal runway",
        detail: "Obligations sit against expected inflows",
        tone: "ok",
      },
      {
        label: "Crunch projected",
        detail: "Forecast dips below zero before settlement clears",
        tone: "warn",
      },
    ],
    forkAfter: 3,
    forks: [
      { label: "Back to normal", detail: "Inflow arrives on time", tone: "ok" },
      { label: "Overdue inflow", detail: "Missed payment cascades", tone: "crit" },
    ],
    ends: [
      { label: "Normal", detail: "Late payment clears it", tone: "ok" },
      { label: "Still in crunch", detail: "Cascades to next obligation", tone: "warn" },
    ],
    note: "Timing is the product. Balances alone hide the squeeze.",
  },
];

export function TetonicUserFlows() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {FLOWS.map((flow) => (
        <article
          key={flow.id}
          id={`flow-${flow.id}`}
          className="scroll-mt-24 flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.14)] backdrop-blur-sm"
        >
          <header className="border-b border-zinc-100 px-6 pt-5 pb-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b7355]">
              {flow.index}
            </p>
            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-zinc-500">{flow.blurb}</p>
          </header>

          <div className="flex-1 bg-[linear-gradient(180deg,#fffcf6_0%,#faf8f4_100%)] px-5 py-6 sm:px-6">
            <FlowChart flow={flow} />
          </div>
        </article>
      ))}
    </div>
  );
}
