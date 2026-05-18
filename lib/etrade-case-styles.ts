/** Shared typography + sky/blue accent tokens for the E*Trade case study. */

export const CASE_INTRO_H2 =
  "mb-2 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950";

export const CASE_INTRO_BODY =
  "mb-8 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600";

export const CASE_SECTION_H2 =
  "mb-4 max-w-[min(52rem,100%)] text-[1.35rem] font-medium leading-[1.25] tracking-[-0.02em] text-zinc-950";

/** Section sublabels — matches Buddy `SectionLabel`. */
export const CASE_SUBLABEL =
  "font-mono text-[9px] font-normal uppercase tracking-[0.22em] text-zinc-400";

export const ETRADE = {
  hiCard: "rounded-2xl bg-sky-500/[0.08] p-5 ring-1 ring-sky-300/35",
  hiCardP6: "rounded-2xl bg-sky-500/[0.08] p-6 ring-1 ring-sky-300/35",
  glassCard:
    "rounded-2xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125",
  stat: "mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em]",
  statHi: "text-sky-600",
  statMuted: "text-zinc-700",
  statHero: "mb-1 font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] text-sky-600",
  statSm: "mt-0.5 font-mono text-[0.65rem] text-sky-500/60",
  label: "mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400",
  labelHi: "mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-sky-600/70",
  labelSection: `mt-19 mb-3 ${CASE_SUBLABEL}`,
  subLabelMb1: `mb-1 ${CASE_SUBLABEL}`,
  subLabelMb2: `mb-2 ${CASE_SUBLABEL}`,
  subLabelMb3: `mb-3 ${CASE_SUBLABEL}`,
  subLabelMb4: `mb-4 ${CASE_SUBLABEL}`,
  subLabelMb8: `mb-8 ${CASE_SUBLABEL}`,
  subLabelTable: `px-4 pb-2 ${CASE_SUBLABEL}`,
  pill: "rounded-full bg-sky-500/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-sky-800 ring-1 ring-sky-300/40",
  protoBtn:
    "inline-flex items-center gap-2 rounded-full bg-sky-500/[0.08] px-4 py-2 text-[0.85rem] font-medium text-sky-700 ring-1 ring-sky-300/50 transition-colors hover:bg-sky-500/[0.14]",
  hmwShell:
    "rounded-2xl border border-white/55 bg-white/[0.12] p-8 shadow-[0_0_28px_-10px_rgba(14,165,233,0.22),0_8px_32px_-8px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-[0.5px] ring-sky-300/30 backdrop-blur-xl backdrop-saturate-125 transition-shadow duration-300 hover:shadow-[0_0_72px_-6px_rgba(14,165,233,0.55),0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.55)] hover:ring-sky-300/60",
  nextStepsBox:
    "mt-6 rounded-2xl border border-sky-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(14,165,233,0.18)]",
  nextStepsLabel: "mb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-sky-600/70",
  link: "text-sky-600 underline underline-offset-2 transition-colors hover:text-sky-800",
  quoteCard:
    "rounded-2xl border border-sky-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(14,165,233,0.18)]",
  testingCard:
    "flex h-full flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110",
  testingTop: "flex flex-1 flex-col bg-sky-500/[0.04] px-5 py-4",
  testingBottom: "mt-auto shrink-0 border-t border-white/40 bg-white/[0.22] px-5 py-4",
  citeLink:
    "mt-auto shrink-0 font-mono text-[9px] font-medium tracking-[0.12em] underline underline-offset-2 transition-colors",
  citeLinkHi: "text-sky-700/85 hover:text-sky-900",
  citeLinkMuted: "text-zinc-400/80 hover:text-zinc-600",
  problemHi: "text-sky-950",
  problemMuted: "text-zinc-800",
} as const;

export function etradeStatCard(hi: boolean) {
  return hi ? ETRADE.hiCard : ETRADE.glassCard;
}
