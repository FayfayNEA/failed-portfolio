import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { TetonicComparisonDiagram } from "@/components/tetonic-comparison-diagram";
import { TetonicIterationCards } from "@/components/tetonic-iteration-cards";
import { TetonicLiveDemo } from "@/components/tetonic-live-demo";
import { TetonicUserFlows } from "@/components/tetonic-user-flows";

const TITLE = "Tetonic";
const DESCRIPTION =
  "livestock transit software for underwriting compliance and hauler load economics";
const HERO = "/tetonic/tetonic-card.mp4";

const CHALLENGE =
  "Livestock moves under a stack of rules most software ignores. What if one product priced the risk and the haul in the same language?";
const CHALLENGE_SUB =
  "Insured and carrier are often different companies. A lapsed hauler COI is a liability gap, not paperwork.";

const METADATA = {
  timeline: "1 day",
  roles: ["Product Designer", "Frontend Engineer"],
  team: ["Failenn Aselta"],
  tools: [
    "HTML · CSS · JS",
    "Cursor",
  ],
};

export const metadata: Metadata = {
  description: `Failenn Aselta, ${TITLE}. ${DESCRIPTION}`,
};

export default function TetonicPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      descriptionClassName="mb-8 pl-[4.5%] text-left"
      slug="tetonic"
      category="product-design"
      hideCaseStudyLabel
      showGrain
      hero={{
        kind: "video",
        src: HERO,
      }}
      heroFrameVariant="liquid"
      heroSize="wide"
      heroAccentColor="#bd8535"
      challengeSummary={CHALLENGE}
      challengeSubtext={CHALLENGE_SUB}
      challengeVariant="display"
      meta={METADATA}
      metaBelow={
        <a
          href="#final-product"
          className="group flex w-full items-center justify-between gap-4 rounded-2xl bg-[#bd8535]/[0.10] px-6 py-5 ring-1 ring-[#ddd2b8]/80 transition-colors hover:bg-[#bd8535]/[0.16]"
        >
          <div className="flex flex-col items-start gap-1">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b7355]/70">
              Interactive Prototype
            </p>
            <p className="text-[1.05rem] font-semibold text-[#6b6354]">Demo Tetonic</p>
            <p className="text-[0.72rem] text-[#8b7355]/55">jump to the live suite</p>
          </div>
        </a>
      }
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className="mb-4 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                What if livestock transit software treated compliance and cash as the same problem?
              </h2>
              <p className="w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                So I designed and coded Tetonic: three linked boards. Potential Shipping prices hauls
                as a range. Current Shipping tracks certificates, compliance, and claims. Bank
                Calculator maps a 30-day cash runway. Shared hauler COI is the spine. The live
                prototype is below.
              </p>

              <TetonicComparisonDiagram />

              <p className="mt-19 mb-3 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
                Why it matters
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    n: "01",
                    stat: "25-35",
                    problem: "Baseline NPS, No Modern Tooling",
                    bibRef: "#bib-insurance-ux",
                    cite: "(carriers w/o modern UX, industry avg)",
                    hi: true,
                  },
                  {
                    n: "02",
                    stat: "29%",
                    problem: "Cite Poor UX as a Barrier",
                    bibRef: "#bib-insurance-ux",
                    cite: "(insurance portal users, MeasuringU)",
                    hi: false,
                  },
                  {
                    n: "03",
                    stat: "75%",
                    problem: "Want the Range, Not One Number",
                    bibRef: "#bib-overdrive",
                    cite: "(carriers on posted-rate UI, Overdrive)",
                    hi: false,
                  },
                  {
                    n: "04",
                    stat: "0 of 3",
                    problem: "Boards Show a COI Countdown",
                    bibRef: "#bib-fmcsa-coi",
                    cite: "(portals audited, none shows the clock)",
                    hi: false,
                  },
                ].map(({ n, stat, problem, bibRef, cite, hi }) => (
                  <div
                    key={n}
                    className={
                      hi
                        ? "rounded-2xl bg-[#bd8535]/[0.10] p-5 ring-1 ring-[#ddd2b8]/80"
                        : "rounded-2xl border border-zinc-300/60 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.05]"
                    }
                  >
                    <p
                      className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                        hi ? "text-[#8b7355]/70" : "text-zinc-400"
                      }`}
                    >
                      {n}
                    </p>
                    <p
                      className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${
                        hi ? "text-[#8b7355]" : "text-zinc-600"
                      }`}
                    >
                      {stat}
                    </p>
                    <p className="mb-3 text-[0.88rem] font-medium leading-snug text-zinc-950">
                      {problem}
                    </p>
                    <a
                      href={bibRef}
                      className={`font-mono text-[0.65rem] underline underline-offset-2 ${
                        hi ? "text-[#8b7355]/70" : "text-zinc-400"
                      }`}
                    >
                      {cite}
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-19 mb-3 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
                Project goals
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    n: "01",
                    stat: "Validity",
                    goal: "compliance decides claim validity",
                    bibRef: "#bib-nng-status",
                    cite: "(old boards: status is a chip, not a signal)",
                    hi: true,
                  },
                  {
                    n: "02",
                    stat: "Ranges",
                    goal: "best-to-worst net, never a fake number",
                    bibRef: "#bib-nng-dashboards",
                    cite: "(old boards: one posted net, no range)",
                    hi: false,
                  },
                  {
                    n: "03",
                    stat: "Parties",
                    goal: "one COI status blocks both boards",
                    bibRef: "#bib-nng-indicators",
                    cite: "(old portals: COI lives alone, unshared)",
                    hi: false,
                  },
                  {
                    n: "04",
                    stat: "Cash",
                    goal: "settlement lag before cash crunch",
                    bibRef: "#bib-nng-errors",
                    cite: "(old sheets: crunch marked ???, no timeline)",
                    hi: false,
                  },
                ].map(({ n, stat, goal, bibRef, cite, hi }) => (
                  <div
                    key={n}
                    className={
                      hi
                        ? "flex flex-col rounded-xl bg-[#bd8535]/[0.10] p-5 ring-1 ring-[#ddd2b8]/80"
                        : "flex flex-col rounded-xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                    }
                  >
                    <p
                      className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                        hi ? "text-[#8b7355]/70" : "text-zinc-400"
                      }`}
                    >
                      {n}
                    </p>
                    <p
                      className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${
                        hi ? "text-[#8b7355]" : "text-zinc-700"
                      }`}
                    >
                      {stat}
                    </p>
                    <p
                      className={`mb-3 text-[0.88rem] font-medium leading-snug ${
                        hi ? "text-[#6b6354]" : "text-zinc-800"
                      }`}
                    >
                      {goal}
                    </p>
                    <a
                      href={bibRef}
                      className={`font-mono text-[0.65rem] underline underline-offset-2 ${
                        hi ? "text-[#8b7355]/70" : "text-zinc-400"
                      }`}
                    >
                      {cite}
                    </a>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "the-research",
          label: "THE RESEARCH",
          content: (
            <>
              <PersonaCards
                accent="beige"
                variant="liquid"
                rightColumnHeading="Frustrations"
                personas={JSON.stringify([
                  {
                    name: "Jordan",
                    role: "Owner-operator livestock hauler",
                    bullets: [
                      "Posted rates look fine until fuel, deadhead, and shrink eat the margin.",
                      "Lapsed COI blocks work with no shared path back in.",
                      "Density and 28-hr sit as badges, not underwriting inputs.",
                      "Settlements lag while insured and carrier stay flattened into one party.",
                    ],
                  },
                ])}
              />

              <div className="mt-19 scroll-mt-24 rounded-2xl border border-white/55 bg-white/[0.12] p-8 shadow-[0_0_28px_-10px_rgba(189,133,53,0.18),0_8px_32px_-8px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-[0.5px] ring-[#ddd2b8]/50 backdrop-blur-xl backdrop-saturate-125 transition-shadow duration-300 hover:shadow-[0_0_72px_-6px_rgba(189,133,53,0.4),0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.55)] hover:ring-[#c4a574]/55">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b7355]/70">
                  How Might We
                </p>
                <p className="text-[clamp(1.2rem,2.6vw,1.7rem)] font-medium leading-[1.2] tracking-[-0.03em] text-[#6b6354]">
                  Make compliance status and haul economics decide the same moment?
                </p>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-[#8b7355]/65">
                  By linking underwriting and load boards through shared hauler COI, range-based
                  net, and failure states that block work instead of hiding risk.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "case-studies",
          label: "CASE STUDIES",
          content: (
            <>
              <h3 className="mb-3 text-[1.1rem] font-medium tracking-[-0.02em] text-zinc-950">
                Three themes emerged from studying how livestock transit and cargo tools hide risk.
              </h3>
              <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                I looked at livestock MTC applications, hauler insurance pages, and generic load-board
                UX. Most tools treat compliance as a badge, parties as one field, and haul profit as a
                single number. Those gaps became Tetonic&apos;s design principles.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
                {[
                  {
                    word: "Compliance",
                    entries: [
                      {
                        name: "28-Hour Law",
                        desc: "Rest decides claim validity. Boards show it as a green chip with no countdown or denial link.",
                      },
                      {
                        name: "BQA density",
                        desc: "1.3 ft² / 100 lb sits in a PDF. Head-count boards never turn it into an overload flag.",
                      },
                    ],
                  },
                  {
                    word: "Parties / COI",
                    entries: [
                      {
                        name: "MTC forms",
                        desc: "Insured and carrier are different lines on paper. Onboarding collapses both into one field.",
                      },
                      {
                        name: "Specialty cargo",
                        desc: "Verified badges skip the expiry clock, the FMCSA 30-day window, and cross-board sharing.",
                      },
                    ],
                  },
                  {
                    word: "Economics",
                    entries: [
                      {
                        name: "Load boards",
                        desc: "75% of carriers wanted real shipper rates and margins, not one confident cell (Overdrive).",
                      },
                      {
                        name: "Settlement lag",
                        desc: "Cash lives in a spreadsheet: due / in / bal, with crunch marked as ???.",
                      },
                    ],
                  },
                ].map(({ word, entries }) => (
                  <div
                    key={word}
                    className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]"
                  >
                    <p className="mb-4 font-mono text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-[#8b7355]">
                      {word}
                    </p>
                    <ul className="space-y-3">
                      {entries.map(({ name, desc }) => (
                        <li key={name} className="text-[0.75rem] leading-relaxed text-zinc-500">
                          <span className="font-medium text-zinc-950">{name}:</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "ideation",
          label: "IDEATION",
          content: (
            <>
              <div className="mb-12">
                <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  User flow
                </h2>
                <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                  Four flow charts. Certificate, COI, load range, and cash runway.
                </p>
                <TetonicUserFlows />
              </div>

              <div className="mt-19">
                <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  Design Decisions
                </h2>
                <p className="mb-8 w-full max-w-none text-[0.95rem] leading-[1.75] text-zinc-600">
                  Iterating on the elements that make risk visible instead of decorative. Polished
                  live in Cursor across Potential Shipping, Current Shipping, and Bank Calculator.
                </p>
                <TetonicIterationCards />
              </div>

              <div className="mt-19 mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    rule: "49 USC §80502",
                    signal: "28-hr rest window",
                    ui: "Column + hover diagram on Current Shipping",
                    bib: "#bib-28hour",
                  },
                  {
                    rule: "BQA density",
                    signal: "1.3 ft² / 100 lb",
                    ui: "Overload flag with horned +5% adj.",
                    bib: "#bib-bqa",
                  },
                  {
                    rule: "MTC parties",
                    signal: "Insured ≠ carrier",
                    ui: "Separate columns + shared hauler COI",
                    bib: "#bib-structure",
                  },
                  {
                    rule: "Shrink economics",
                    signal: "Weight loss = $",
                    ui: "Feeds best-to-worst net range",
                    bib: "#bib-shrink",
                  },
                ].map(({ rule, signal, ui, bib }) => (
                  <div
                    key={rule}
                    className="rounded-2xl border border-zinc-300/60 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)]"
                  >
                    <a
                      href={bib}
                      className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b7355]/70 underline underline-offset-2"
                    >
                      {rule}
                    </a>
                    <p className="mb-1 text-[0.9rem] font-medium text-zinc-950">{signal}</p>
                    <p className="text-[0.75rem] leading-relaxed text-zinc-400">{ui}</p>
                  </div>
                ))}
              </div>

              <p className="mt-19 mb-3 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
                User testing
              </p>
              <p className="mb-6 w-full text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950">
                Audited livestock MTC apps, hauler insurance pages, and generic load-board UX.
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-stretch sm:gap-6">
                {[
                  {
                    stat: "28 hr",
                    insight:
                      "Every board audited kept rest status behind a hover tooltip. Nothing persistent, nothing that blocks a click.",
                    next: "Next: treat rest windows as underwriting signals that can block work",
                    bib: "#bib-28hour",
                  },
                  {
                    stat: "+5%",
                    insight:
                      "No board audited turned density into a row-level flag. Overload only shows up as a head count, never a risk state.",
                    next: "Next: encode overload as a board flag where the haul already is",
                    bib: "#bib-bqa",
                  },
                  {
                    stat: "30 day",
                    insight:
                      "COI badges read identical the day before and the day of lapse. No countdown UI carries the cancellation clock.",
                    next: "Next: one shared hauler COI that blocks both shipping boards",
                    bib: "#bib-fmcsa-coi",
                  },
                  {
                    stat: "75%",
                    insight:
                      "No board audited let a hauler expand a rate cell to see the cost inputs behind it. The number is the whole UI.",
                    next: "Next: best-to-worst ranges plus cash timing before crunch",
                    bib: "#bib-overdrive",
                  },
                ].map(({ stat, insight, next, bib }) => (
                  <div
                    key={stat}
                    className="flex h-full flex-col overflow-hidden rounded-xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110"
                  >
                    <div className="flex flex-1 flex-col bg-[#bd8535]/[0.06] px-5 py-4">
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-800">
                        <span className="mb-1.5 block font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-[#8b7355]">
                          {stat}
                        </span>
                        {insight}
                      </p>
                    </div>
                    <div className="mt-auto shrink-0 border-t border-white/40 bg-white/[0.22] px-5 py-4">
                      <a
                        href={bib}
                        className="font-mono text-[0.7rem] tracking-[0.04em] text-[#8b7355]/70 transition-colors hover:text-[#6b6354]"
                      >
                        {next}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "final-product",
          label: "FINAL PRODUCT",
          content: (
            <>
              <TetonicLiveDemo />
            </>
          ),
        },
        {
          id: "what-i-learned",
          label: "WHAT I LEARNED",
          content: (
            <ol className="mt-2 w-full space-y-4">
              {[
                {
                  title: "Model the failure graph first",
                  body: "Walk-away loads and lapsed COI taught more than the healthy card. Happy path alone is a brochure.",
                },
                {
                  title: "Tradeoff: honesty over a decisive number",
                  body: "A single est. net scans faster. Best-to-worst ranges cost glance speed and force a real accept/decline call. I chose the slower, honest read.",
                },
                {
                  title: "Tradeoff: block work over soft warnings",
                  body: "Keeping lapsed COI as a badge preserves throughput. Blocking quotes and staging is harsher UX. Liability only works if the product can refuse the haul.",
                },
                {
                  title: "Outdoor readability is a design constraint",
                  body: "High-contrast type and unclipped state copy came from running the board like someone standing in a yard, not a Figma artboard.",
                },
              ].map((card, i) => (
                <li key={card.title}>
                  <div
                    className={`flex gap-5 rounded-2xl p-6 ${
                      i === 1
                        ? "bg-[#bd8535]/[0.10] ring-1 ring-[#ddd2b8]/80"
                        : "border border-zinc-300/60 bg-white/[0.14] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.05]"
                    }`}
                  >
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-zinc-400">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b7355]/70">
                        {card.title}
                      </p>
                      <p
                        className={`text-[0.9rem] font-medium leading-[1.65] ${
                          i === 1 ? "text-zinc-950/80" : "text-zinc-600"
                        }`}
                      >
                        {card.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          ),
        },
        {
          id: "impact",
          label: "IMPACT",
          content: (
            <>
              <div className="mb-1 hidden grid-cols-[1fr_1.2fr_1.4fr] gap-px md:grid">
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
                  Goal Pillar
                </p>
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
                  Design Intervention
                </p>
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
                  Impact
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300/60 bg-white/[0.14] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)]">
                {[
                  {
                    n: "01",
                    pillar: "Compliance as underwriting signal",
                    interventions: ["28-hr status", "BQA density flags", "Claim review path"],
                    stat: "Signal",
                    impact:
                      "Compliance feeds claim validity instead of sitting as a decorative badge.",
                  },
                  {
                    n: "02",
                    pillar: "Shared party / COI model",
                    interventions: ["Insured vs carrier", "Hauler COI", "Cross-board block"],
                    stat: "One status",
                    impact:
                      "A lapsed cert stops both underwriting and quoting from the same spine.",
                  },
                  {
                    n: "03",
                    pillar: "Honest haul economics",
                    interventions: ["Best-to-worst net", "Walk-away", "Thin history path"],
                    stat: "Ranges",
                    impact: "Soft edges stay visible. No false precision on a posted rate.",
                  },
                  {
                    n: "04",
                    pillar: "Cash runway",
                    interventions: ["30-day timeline", "Obligations vs settlements", "Crunch window"],
                    stat: "Timing",
                    impact: "Settlement lag is first-class, not an after-the-fact surprise.",
                  },
                ].map(({ n, pillar, interventions, stat, impact }, i, arr) => (
                  <div
                    key={pillar}
                    className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr] ${
                      i < arr.length - 1 ? "border-b border-zinc-200/60" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3 bg-white/[0.18] px-5 py-5 md:border-r md:border-zinc-200/60">
                      <span className="mt-0.5 font-mono text-[0.65rem] text-[#8b7355]/60">{n}</span>
                      <p className="text-[0.85rem] font-medium leading-snug text-zinc-600">
                        {pillar}
                      </p>
                    </div>
                    <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-zinc-200/60">
                      {interventions.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#bd8535]/[0.10] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-zinc-950 ring-1 ring-[#ddd2b8]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="px-5 py-5">
                      <p className="mb-1.5 font-mono text-[1.25rem] font-medium leading-none tracking-[-0.03em] text-[#8b7355]">
                        {stat}
                      </p>
                      <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#c4a574]/50 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(189,133,53,0.16)]">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#8b7355]/70">
                  Next Steps
                </p>
                <ol className="mt-3 space-y-2.5 text-[0.82rem] leading-relaxed text-zinc-600">
                  {[
                    {
                      n: "01",
                      lead: "Put it in front of haulers.",
                      body: "Real owner-operators still need to pressure-test filters, blocked copy, and cash timing.",
                    },
                    {
                      n: "02",
                      lead: "Keep COI as one status.",
                      body: "As the boards grow, do not fork certificate truth per view.",
                    },
                    {
                      n: "03",
                      lead: "Live fuel, shrink, settlements.",
                      body: "Bind ranges and cash runway to real inputs without losing outdoor readability.",
                    },
                    {
                      n: "04",
                      lead: "Sharper walk-away copy.",
                      body: "Make blocked and loses-money states impossible to miss on first scan.",
                    },
                  ].map(({ n, lead, body }) => (
                    <li key={n} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-[#8b7355]">
                        {n}
                      </span>
                      <p>
                        <span className="font-medium text-zinc-950">{lead}</span> {body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mb-3 mt-19 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                Ethical considerations
              </p>
              <p className="w-full text-left text-[0.95rem] leading-[1.75] text-zinc-600">
                Livestock transit tools sit between animal welfare law, insurance liability, and
                hauler cash survival. Hiding a lapsed COI or soft-edge net protects the interface
                and exposes the operator. Tetonic treats blocked work and walk-away loads as honest
                states, not errors to smooth over.
              </p>

              <div className="mt-19 rounded-2xl border border-zinc-300/60 bg-white/[0.14] p-5 ring-1 ring-black/[0.03]">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                  Tradeoff made
                </p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  A vibe-coded HTML prototype bought a clickable judgment model in one day. Cost: no
                  live feeds, no auth, no multi-user sync. The next pass should keep the failure
                  graph and harden the copy with real hauler feedback.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "bibliography",
          label: "BIBLIOGRAPHY",
          content: (
            <>
              <div className="rounded-2xl bg-zinc-100/60 p-6 ring-1 ring-black/[0.05]">
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                  Links
                </p>
                <ul className="space-y-5">
                  <li id="bib-28hour" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    49 U.S.C. § 80502. Transportation of animals (Twenty-Eight Hour Law). Animals may
                    not be confined more than 28 consecutive hours without unloading for feed, water,
                    and at least 5 consecutive hours of rest. See also{" "}
                    <a
                      href="https://www.nal.usda.gov/animal-health-and-welfare/twenty-eight-hour-law"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      USDA NAL overview
                    </a>
                    .{" "}
                    <a
                      href="https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title49-section80502"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      uscode.house.gov
                    </a>
                    .
                  </li>
                  <li id="bib-bqa" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    BQA Mature Cattle Hauling Loading Density Guidelines. Uses FASS guidance of 1.3
                    ft² per 100 lb for mature/fed cattle; increase space 5% for horned cattle.
                    Encoded as the overload signal in Current Shipping.{" "}
                    <a
                      href="https://www.bqa.org/Media/BQA/Docs/bqa-mature-cattle-hauling-loading-density-guidelines-updated_51523.pdf"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    .
                  </li>
                  <li id="bib-structure" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    IDEAL Agriculture &amp; Marine. &quot;Livestock Motor Truck Cargo.&quot; Broad Form vs
                    Specified Perils livestock transit coverage, plus death-only and related
                    endorsements. Application PDF shows how insured/carrier and coverage type are
                    underwritten in practice.{" "}
                    <a
                      href="https://www.idealam.com/agricultural-insurance/livestock-motor-truck-cargo"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .{" "}
                    <a
                      href="https://www.idealam.com/applications/Livestock-Motor-Truck-Cargo_0716.pdf"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Application PDF
                    </a>
                    .
                  </li>
                  <li id="bib-shrink" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Iowa Beef Center. &quot;Shrinkage in Beef Cattle.&quot; Excretory vs tissue shrink;
                    weight loss in transit is financial exposure when livestock sells by the pound.{" "}
                    <a
                      href="https://www.iowabeefcenter.org/bch/ShrinkageBeefCattle.pdf"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    .
                  </li>
                  <li id="bib-coi" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Truck Guard. &quot;Livestock Hauling Insurance.&quot; Specialty livestock cargo vs
                    generic dry-van forms; mortality, injury, and shrink are distinct loss types.
                    Motivates treating hauler COI as a shared control across insured and carrier
                    parties.{" "}
                    <a
                      href="https://truckguardinsurance.com/services/livestock-hauling-insurance/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-fmcsa-coi" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    FMCSA financial responsibility. Insurers file BMC-91 / BMC-91X; cancellation
                    notice starts a 30-day window before coverage ends and operating authority can
                    drop. A verified badge cannot stand in for that clock.{" "}
                    <a
                      href="https://www.law.cornell.edu/cfr/text/49/387.313"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      49 CFR § 387.313
                    </a>
                    .{" "}
                    <a
                      href="https://li-public.fmcsa.dot.gov/LIVIEW/pkg_li_std_routines.prc_help?pn_pageid=12"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FMCSA L&amp;I cancel help
                    </a>
                    .
                  </li>
                  <li id="bib-overdrive" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Overdrive. Owner-operator surveying on broker transparency: 75% of carriers
                    wanted shipper rates and broker margins to negotiate and avoid being
                    overcharged. Supports showing haul economics as a range, not one posted net.{" "}
                    <a
                      href="https://www.overdriveonline.com/business/article/15680834/seeing-what-the-shipper-paid-dat-does-broker-transparency"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      overdriveonline.com
                    </a>
                    .
                  </li>
                  <li id="bib-nng-status" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Visibility of System Status.&quot; Users cannot decide next
                    actions when status is hidden or decorative. Supports treating 28-hr, density,
                    and COI as decision inputs, not badge chrome.{" "}
                    <a
                      href="https://www.nngroup.com/articles/visibility-system-status/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nngroup.com
                    </a>
                    .
                  </li>
                  <li id="bib-nng-indicators" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Indicators, Validations, and Notifications.&quot; Indicators
                    are contextual and conditional; they should sit next to the content they
                    qualify. Informs why compliance chips fail when they are detached from
                    underwriting judgment.{" "}
                    <a
                      href="https://www.nngroup.com/articles/indicators-validations-notifications/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nngroup.com
                    </a>
                    .
                  </li>
                  <li id="bib-nng-dashboards" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Dashboards: Making Charts and Graphs Easier to
                    Understand.&quot; Length and position read faster than angle or single KPI tiles.
                    Supports range bars and best-to-worst net over one decisive posted number.{" "}
                    <a
                      href="https://www.nngroup.com/articles/dashboards-preattentive/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nngroup.com
                    </a>
                    .
                  </li>
                  <li id="bib-nng-errors" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Error-Message Guidelines&quot; and &quot;10 Usability Heuristics
                    Applied to Complex Applications.&quot; Severe states should block progress with a
                    fix path nearby; soft warnings are for recoverable risk. Anchors Tetonic&apos;s
                    choice to block lapsed-COI work instead of smoothing it.{" "}
                    <a
                      href="https://www.nngroup.com/articles/error-message-guidelines/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Error guidelines
                    </a>
                    .{" "}
                    <a
                      href="https://www.nngroup.com/articles/usability-heuristics-complex-applications/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Complex apps
                    </a>
                    .
                  </li>
                  <li id="bib-insurance-ux" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    bolttech. &quot;How Quoting Software for Insurance Boosts Productivity.&quot; Carriers
                    without modern tooling see a baseline Net Promoter Score of 25-35 (some negative);
                    modernized quoting targets 55-65.{" "}
                    <a
                      href="https://bolttech.io/insights/quoting-software-for-insurance/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bolttech.io
                    </a>
                    . MeasuringU. &quot;The User Experience of Health Insurance Websites.&quot; 76% of
                    customers use insurer portals weekly; 29% cite poor UX as a barrier to using them.{" "}
                    <a
                      href="https://measuringu.com/ux-health-insurance/"
                      className="transition-colors text-[#8b7355] underline underline-offset-2 hover:text-[#6b6354]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      measuringu.com
                    </a>
                    . Motivates treating Tetonic&apos;s outdoor legibility and shared-status UI as
                    productivity fixes, not cosmetic ones.
                  </li>
                </ul>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
