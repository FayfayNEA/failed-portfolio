import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ReasoningPanels } from "@/components/reasoning-panels";
import {
  CASE_INTRO_BODY,
  CASE_INTRO_H2,
  CASE_SECTION_H2,
  CASE_SUBLABEL,
  ETRADE,
  etradeStatCard,
} from "@/lib/etrade-case-styles";

const SLUG = "etrade";
const CATEGORY = "product-design";

const TITLE = "E*Trade";
const DESCRIPTION = "redesigned a financial trading platform to reduce cognitive load and speed up trades";
const HERO = "https://framerusercontent.com/images/NvG3dp6QgMIWgEFMHXnQsAmc3lc.png";
/** Local encode: video-only (no audio). */
const HERO_VIDEO = "/etrade/hero.mp4";

export const metadata: Metadata = {
  title: TITLE,
  description: `Failenn Aselta, ${TITLE}. ${DESCRIPTION}`,
};

export default function EtradePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      descriptionClassName="text-center"
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "video", src: HERO_VIDEO }}
      heroBelow={
        <div className="flex flex-col items-center gap-3">
          <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Interactive Figma prototype
          </p>
          <a
            href="https://www.figma.com/proto/6BoOsk6H1jDem66V3QoGd8/Etrade-redesign?node-id=3-270&starting-point-node-id=3%3A270&t=NbOntjH30xL2b7ZU-1"
            target="_blank"
            rel="noopener noreferrer"
            className={ETRADE.protoBtn}
          >
            View Figma Prototype <span aria-hidden>↗</span>
          </a>
        </div>
      }
      heroFrameVariant="liquid"
      heroSize="wide"
      challengeSummary="Redesign E*Trade for a swing trader while keeping the old edge."
      meta={{
        timeline: "1 week",
        roles: ["Full Stack Engineer", "Product Designer"],
        team: ["Failenn Aselta"],
        tools: ["Figma", "Photoshop", "Illustrator"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className={CASE_SECTION_H2}>
                Design E*Trade to a modern standard with clean UI, lower cognitive load and an AI to help with behavioral errors.
              </h2>
              <p className="w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                E*Trade has constant complaints from users about site usability, many are now
                switching to more modern platforms like TradingView, Webull, and Interactive
                Brokers. Users cite a lack of control and an inability to see multiple data points
                at once. To retain and attract new clients, E*Trade needs to address these concerns
                while implementing tools that match modern trading workflows.
              </p>

              <p className={ETRADE.labelSection}>The Problems</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    n: "01",
                    stat: "70%",
                    problem: "Struggle With the UI",
                    bibRef: "#research",
                    cite: "User research",
                    hi: true,
                  },
                  {
                    n: "02",
                    stat: "22%",
                    problem: "Panic Sell Under UI Stress",
                    bibRef: "#bib-smu",
                    cite: "SMU · Visual Finance",
                    hi: false,
                  },
                  {
                    n: "03",
                    stat: "26%",
                    problem: "Efficiency Lost to Clutter",
                    bibRef: "#bib-nih",
                    cite: "Tufte / NIH, 2023",
                    hi: false,
                  },
                  {
                    n: "04",
                    stat: "54%",
                    problem: "Better Trades With Stronger UX",
                    bibRef: "#bib-gupta",
                    cite: "Design Index",
                    hi: false,
                  },
                ].map(({ n, stat, problem, bibRef, cite, hi }) => (
                  <div key={n} className={`${etradeStatCard(hi)} flex flex-col`}>
                    <p className={ETRADE.label}>{n}</p>
                    <p className={`${ETRADE.stat} ${ETRADE.statMuted}`}>{stat}</p>
                    <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${ETRADE.problemMuted}`}>{problem}</p>
                    <a href={bibRef} className={`${ETRADE.citeLink} ${ETRADE.citeLinkMuted}`}>
                      {cite}
                    </a>
                  </div>
                ))}
              </div>

              <p className={ETRADE.labelSection}>Our Goals</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    n: "01",
                    stat: "60%",
                    goal: "Faster Execution Speed",
                    bibRef: "https://developer.apple.com/design/human-interface-guidelines/buttons",
                    cite: "(Fitts / NNg)",
                    hi: false,
                  },
                  {
                    n: "02",
                    stat: "55%",
                    goal: "Faster Reaction Time",
                    bibRef: "#bib-smu",
                    cite: "(SMU / Design Index)",
                    hi: false,
                  },
                  {
                    n: "03",
                    stat: "40%",
                    goal: "User Retention Lift",
                    bibRef: "#how-might-we",
                    cite: "(HMW target)",
                    hi: true,
                  },
                  {
                    n: "04",
                    stat: "15%",
                    goal: "Cortisol Reduction",
                    bibRef: "#bib-nih",
                    cite: "(NIH / SMU)",
                    hi: false,
                  },
                ].map(({ n, stat, goal, bibRef, cite, hi }) => (
                  <div key={n} className={`${etradeStatCard(hi)} flex flex-col`}>
                    <p className={ETRADE.label}>{n}</p>
                    <p className={`${ETRADE.stat} ${ETRADE.statMuted}`}>{stat}</p>
                    <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${ETRADE.problemMuted}`}>{goal}</p>
                    <a
                      href={bibRef}
                      target={bibRef.startsWith("http") ? "_blank" : undefined}
                      rel={bibRef.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`${ETRADE.citeLink} ${ETRADE.citeLinkMuted}`}
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
          id: "research",
          label: "THE RESEARCH",
          content: (
            <>
              <h2 className="mb-6 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950 md:mb-8">
                <span className="tabular-nums text-sky-600">70%</span>
                {" of E*Trade users struggle with the site's UI."}
              </h2>

              <PersonaCards
                personas={JSON.stringify([
                  {
                    name: "Hannah Goodman",
                    photo: "/etrade/participant.png",
                    age: "28",
                    role: "Retail Swing Trader · 100K–1M in Assets",
                    photoCaption: "Portrait generated with Gemini",
                    bullets: [
                      "Misses critical trade windows, the cluttered UI is too slow to navigate.",
                      "Can't compare stocks side by side; losing ground to cleaner platforms.",
                    ],
                  },
                ])}
                accent="etrade"
                variant="liquid"
                rightColumnHeading="Frustrations"
              />

              {/* HMW */}
              <div id="how-might-we" className={`${ETRADE.hmwShell} mt-19 scroll-mt-24`}>
                <p className={ETRADE.subLabelMb3}>How Might We</p>
                <p className="text-[clamp(1.2rem,2.6vw,1.7rem)] font-medium leading-[1.2] tracking-[-0.03em] text-sky-800/80">
                  Improve user retention by 40%?
                </p>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-sky-900/50">
                  By increasing a swing trader&apos;s success through speed, decisiveness, and cognitive clarity by at least 10%.
                </p>
              </div>

              <div className="mt-19">
                <p className={ETRADE.subLabelMb2}>Site Walkthrough</p>
                <h2 className={CASE_SECTION_H2}>Comments</h2>
              </div>

              <ProjectGalleryRow
                images={[
                  "https://framerusercontent.com/images/NvG3dp6QgMIWgEFMHXnQsAmc3lc.png?width=2189&height=1107",
                  "https://framerusercontent.com/images/803gIrVaoahP0vosLCnyLAnozcw.png?width=2192&height=1061",
                  "https://framerusercontent.com/images/7UlkpWdwoHZJQDWQIha9CQM9r4.png?width=2196&height=1143",
                ]}
                theme="sky"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                enableLightbox
                className="mx-auto my-10 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
              />
              <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                E*Trade marked up with Figma
              </p>
            </>
          ),
        },
        {
          id: "case-studies",
          label: "CASE STUDIES",
          content: (
            <>
              <h2 className="mb-3 text-[1.1rem] font-medium tracking-[-0.02em] text-zinc-950">
                Three themes emerged from auditing how the best trading platforms reduce friction.
              </h2>
              <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-500">
                I audited TradingView, Webull, Interactive Brokers, and ThinkorSwim to find
                where each succeeds at reducing cognitive load and getting traders to decisions faster.
                These insights shaped the redesign&rsquo;s information architecture.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    word: "Speed",
                    entries: [
                      { name: "TradingView", desc: "One-click switching; buy/sell buried in toolbar informed the sidebar." },
                      { name: "Webull", desc: "Movable widgets proved user layout control lowers cognitive cost." },
                    ],
                  },
                  {
                    word: "Clarity",
                    entries: [
                      { name: "Interactive Brokers", desc: "Data density works when hierarchy prevents the chart from overloading." },
                      { name: "ThinkorSwim", desc: "90%+ contrast buy/sell cuts hesitation; gutted web version showed the cost." },
                    ],
                  },
                  {
                    word: "Guidance",
                    entries: [
                      { name: "ThinkorSwim", desc: "Paper trading confirms behavioral guardrails drive retention as much as speed." },
                      { name: "Interactive Brokers", desc: "Deep research context supports action; intrusive AI showed what not to do." },
                    ],
                  },
                ].map(({ word, entries }) => (
                  <div key={word} className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]">
                    <p className="mb-4 font-mono text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-sky-700">{word}</p>
                    <ul className="space-y-3">
                      {entries.map(({ name, desc }) => (
                        <li key={name} className="text-[0.75rem] leading-relaxed text-zinc-700">
                          <span className="font-medium text-zinc-800">{name}:</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <ProjectGalleryRow
                images={[
                  "https://framerusercontent.com/images/jYxEAKwObme3MU6L89XddfQE.png?width=3019&height=2002",
                  "https://framerusercontent.com/images/0kQuZMBpXbiCxoPo9X1zxEfQigU.png?width=3830&height=2013",
                  "https://framerusercontent.com/images/kdiUWdP3rQXBvM4ORpm0fTNrg.png?width=3829&height=2020",
                  "https://framerusercontent.com/images/ZMnPn7sBtw1MvZKJekgpQSOqiQc.png?width=3817&height=2016",
                  "https://framerusercontent.com/images/ZejNitwjc4Ij8RpmBiU1PHAYnQY.png?width=3822&height=2016",
                  "https://framerusercontent.com/images/UinaOsqARdyxCaEaZokF4LpErro.png?width=3813&height=1830",
                  "https://framerusercontent.com/images/ibs59tNPEC2S5KvKknPNO0RuX1o.png?width=1910&height=860",
                  "https://framerusercontent.com/images/eRhaSPn3curKwV41OgygnaMQLC4.png?width=1905&height=863",
                  "https://framerusercontent.com/images/OQ2aynAQT3CbDsFNThwJUbivMU.png?width=1903&height=859",
                  "https://framerusercontent.com/images/kygJN8UmFGCNbPVjHIgpDSoYjy8.png?width=1915&height=864",
                  "https://framerusercontent.com/images/zUnKK4aMyUAeCbDfggjkgLcWwA.png?width=3815&height=2010",
                ]}
                theme="sky"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
              />
              <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Images from TradingView, Webull and Interactive Brokers
              </p>
            </>
          ),
        },
        {
          id: "how-might-we",
          label: "HOW MIGHT WE",
          navOnly: true,
          content: null,
        },
        {
          id: "ideation",
          label: "IDEATION",
          content: (
            <>
              <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { n: "01", area: "Speed", detail: "Persistent sidebar + 44px targets close the distance between decision and action." },
                  { n: "02", area: "Decisiveness", detail: "High contrast + AI reasoning anchors cut hesitation mid-trade." },
                  { n: "03", area: "Cognitive Clarity", detail: "Humanist type + clinical geometry lower cortisol under pressure." },
                  { n: "04", area: "Emotional Awareness", detail: "Glass-box AI surfaces behavioral patterns before mistakes happen." },
                ].map(({ n, area, detail }) => (
                  <div key={n} className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]">
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">{n}</p>
                    <p className="mb-2 text-[0.88rem] font-medium leading-snug text-zinc-800">{area}</p>
                    <p className="text-[0.75rem] leading-relaxed text-zinc-500">{detail}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Lo-Fi Wireframes
              </h2>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Hand-drawn sketches
              </p>

              <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-600/70">Iteration 1</p>
                      <span className="rounded-full bg-sky-500/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-sky-700 ring-1 ring-sky-300/40">Selected layout</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/VIvFTqCGOT2R8wlmlXUChjw7Q2Q.jpg?width=2550&height=3167"
                      alt="Iteration 1 – most breathing room, sidebar nav"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Most breathing room. Persistent sidebar with consistent trade button.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 2</p>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-500 ring-1 ring-zinc-200/60">Mixed in for edges</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/x57QbwbpKltRAJCgXVQmixtFrc.jpg?width=2317&height=3239"
                      alt="Iteration 2 – modernized with rounded edges"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Modernized. Rounded edges and reduced density.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 3</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/MhdAWjb6YZRulucFGQ6CnivAmA.jpg?width=2550&height=3284"
                      alt="Iteration 3 – closest to original E*Trade"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Closest to original. Familiar hierarchy but denser layout.</p>
                  </div>
                </div>
              </div>

              <div className="mt-19">
                <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  Mid-Fi Wireframes
                </h2>
                <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Figma Mockups
                </p>

                <BeforeAfterSlider
                  before="/etrade/wireframe1.png"
                  after="https://framerusercontent.com/images/VUDH0FuU7W2ms48ioo9nOoeiI.png?width=1440&height=1024"
                  beforeLabel="Wireframe 1"
                  afterLabel="Wireframe 2"
                  className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))] min-h-[220px] aspect-[1444/1028]"
                />

                <div className="mx-auto mt-3 w-full max-w-[min(920px,calc(100vw-1.5rem))] grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/[0.07] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-red-700 ring-1 ring-red-300/50">
                      <span aria-hidden className="text-red-400">✕</span>
                      <span className="text-red-500/50">·</span>
                      <span>Top nav requires eye travel on every action.</span>
                    </div>
                    <div className="mt-1 flex flex-col items-start gap-2">
                      <a href="https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-sky-800 ring-1 ring-sky-300/40 transition-colors hover:bg-sky-500/[0.14]">
                        <span>F-pattern layout keeps data left/top</span>
                        <span className="text-sky-500/60">·</span>
                        <span className="text-sky-600/70">Speed</span>
                      </a>
                      <a href="https://developer.apple.com/design/human-interface-guidelines/buttons" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-sky-800 ring-1 ring-sky-300/40 transition-colors hover:bg-sky-500/[0.14]">
                        <span>44px sidebar targets always reachable</span>
                        <span className="text-sky-500/60">·</span>
                        <span className="text-sky-600/70">Speed</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/[0.07] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-red-700 ring-1 ring-red-300/50">
                      <span aria-hidden className="text-red-400">✕</span>
                      <span className="text-red-500/50">·</span>
                      <span>Dense data without hierarchy causes decision fatigue.</span>
                    </div>
                    <div className="mt-1 flex flex-col items-end gap-2">
                      <a href="#bib-gupta" className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-sky-800 ring-1 ring-sky-300/40 transition-colors hover:bg-sky-500/[0.14]">
                        <span>Visual hierarchy speeds trades 40%</span>
                        <span className="text-sky-500/60">·</span>
                        <span className="text-sky-600/70">Cognitive Clarity</span>
                      </a>
                      <a href="#bib-smu" className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-sky-800 ring-1 ring-sky-300/40 transition-colors hover:bg-sky-500/[0.14]">
                        <span>AI agent in gaze-lock position</span>
                        <span className="text-sky-500/60">·</span>
                        <span className="text-sky-600/70">Emotional Awareness</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-19">
                  <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                    Full Figma Board
                  </h2>
                  <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    All Work, Zoomed Out
                  </p>
                  <div className="relative overflow-hidden rounded-2xl border border-white/55 bg-white/[0.14] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125">
                    <iframe
                      title="E*Trade Figma board"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F6BoOsk6H1jDem66V3QoGd8%2FEtrade-redesign%3Fnode-id%3D0-1%26t%3DgkvoBWDCGhbUcwr1-1"
                      className="h-[min(70dvh,680px)] w-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <a
                      href="https://www.figma.com/design/6BoOsk6H1jDem66V3QoGd8/Etrade-redesign?node-id=0-1&t=gkvoBWDCGhbUcwr1-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-zinc-400 transition-colors hover:text-zinc-600"
                    >
                      Open in Figma <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "user-testing",
          label: "USER TESTING",
          content: (
            <>
              <h2 className={CASE_INTRO_H2}>Tested with a handful of retail traders.</h2>
              <p className={CASE_INTRO_BODY}>
                I shared the prototype with a small group of retail traders to find out what they
                thought if this was their site&apos;s layout.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {[
                  {
                    n: "01",
                    stat: "83%",
                    insight: "Felt their needs were met — but several wished they could make the layout completely their own.",
                    action: "How do we make the experience fully customizable without adding friction?",
                  },
                  {
                    n: "02",
                    stat: "67%",
                    insight: "Rated the redesign less cognitively demanding than the original.",
                    action: "How do we extend this clarity to power-user density modes?",
                  },
                  {
                    n: "03",
                    stat: "100%",
                    insight: "Appreciated that it felt like a real redesign — though colors read slightly off in dark mode.",
                    action: "How do we make sure the palette holds up across light and dark? How do we keep data density without overwhelming with brighter colors?",
                  },
                  {
                    n: "04",
                    stat: "25%",
                    insight: "Disabled the AI agent — experienced traders would never trust it in production.",
                    action: "How do we allow traders to trust AI?",
                  },
                ].map(({ n, stat, insight, action }) => (
                  <div key={n} className="flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110">
                    <div className="bg-sky-500/[0.04] px-5 py-4">
                      <p className="mb-2 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-sky-600">{stat}</p>
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-800">{insight}</p>
                    </div>
                    <div className="border-t border-white/40 bg-white/[0.22] px-5 py-4">
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-700">{action}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className={ETRADE.subLabelMb4}>Some thinkable quotes</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  "I hate E*Trade UI, so anything is better...",
                  "I don’t know if I’d ever use AI, but it is a cool idea.",
                  "It is cool. Good work Failenn.",
                ].map((quote, i) => (
                  <div key={i} className={ETRADE.quoteCard}>
                    <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">&ldquo;{quote}&rdquo;</p>
                  </div>
                ))}
              </div>

            </>
          ),
        },
        {
          id: "the-solution",
          label: "THE SOLUTION",
          content: (
            <>
              <div className="mb-8 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200/60">
                <p className={ETRADE.subLabelMb2}>Technical implementation note</p>
                <p className="mb-3 text-[0.88rem] font-medium text-zinc-800">How the AI agent would work in production</p>
                <ul className="space-y-2 text-[0.82rem] leading-relaxed text-zinc-600">
                  <li>• The agent ingests live position data, market feed, and the user&apos;s stated risk tolerance (set in onboarding). It does not execute, it recommends and explains.</li>
                  <li>• Confidence scores are derived from a volatility model + the user&apos;s historical win/loss pattern. The lower the confidence, the more prominent the &ldquo;override&rdquo; affordance becomes.</li>
                  <li>• Recommendations are never shown during an active order entry to prevent interruption at the critical moment, a deliberate UX constraint, not a technical one.</li>
                  <li>• In a real implementation, this would require a backend ML pipeline and integration with E*Trade&apos;s existing order management API. The prototype simulates this with static state.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  Reasoning For Design
                </h2>
                <p className={ETRADE.subLabelMb8}>Mockups created with Figma</p>
                <ReasoningPanels
                  theme="sky"
                  imageSize="laptop"
                  panels={[
                    {
                      img: "/etrade/et1.png",
                      label: "01",
                      heading: "F-theory layout, humanist type, and an AI behavioral coach",
                      points: [
                        { lead: "F-Theory page logic", detail: "Critical info stays left/top so traders find data fast without hunting." },
                        { lead: "Humanist fonts cut glance time by 10.6%", detail: "Humanist sans reduces read-time per data point, improving reaction speed (MIT)." },
                        { lead: "Rounded edges reduce cortisol by 15%", detail: "Soft geometry lowers stress response versus sharp corners under pressure (NIH)." },
                        { lead: "Customization for individual strategies", detail: "Panels can be rearranged to match each trader’s workflow and reduce friction." },
                        { lead: "Trading is 80% behavioral", detail: "A visible AI coach surfaces patterns to counter impulse-driven mistakes." },
                      ],
                    },
                    {
                      img: "/etrade/et2.png",
                      label: "02",
                      heading: "Visual hierarchy, contrast, and stress-reduction by design",
                      points: [
                        { lead: "Visual hierarchy speeds traders up by 40%", detail: "Clear layering guides attention to what matters first, improving speed (Design Index)." },
                        { lead: "Trading icon always in reach", detail: "Primary action stays persistent so traders don’t search mid-decision." },
                        { lead: "90% contrast on the buy button", detail: "High contrast reduces hesitation and improves precision under time pressure (JNeurosci)." },
                        { lead: "Red reduces panic sales by 30%", detail: "Use red as intentional friction, not constant alarm, to slow impulsive sells (SMU)." },
                        { lead: "Humanist fonts + tabular figures cut errors by 3.1%", detail: "Tabular numerals align data; paired with humanist type, errors drop (MIT)." },
                        { lead: "Icons over text to reduce clutter", detail: "Icons communicate state/action quickly without adding wordy cognitive load." },
                        { lead: "High-stress UI raises revenge trading risk by 22%", detail: "Lower noise and calmer color reduce emotional re-entry trades (NIH)." },
                      ],
                    },
                    {
                      img: "/etrade/et3.png",
                      label: "03",
                      heading: "Collapsible UI, color-first data, and eliminating fat-finger errors",
                      points: [
                        { lead: "Collapsible sidebar enables Gaze Lock, +12% speed", detail: "Collapsing chrome keeps focus on chart + core data, improving speed (eScholarship)." },
                        { lead: "Easily accessible, live-updating information", detail: "Key metrics update in place so traders absorb changes without context switching." },
                        { lead: "Buttons larger than 44×44px eliminate fat-finger errors", detail: "44×44px+ targets make buy/sell/confirm accurate when stress is high." },
                        { lead: "Reduced clutter = 26% more trading efficiency", detail: "Fewer competing elements improves decision speed and quality (eTufts)." },
                        { lead: "6 data elements per view = 20% better decisions", detail: "Limit visible data to avoid working-memory overload and boost accuracy." },
                        { lead: "Color processed faster than shape (SMU)", detail: "Use color as the primary signal for state, risk, and action (SMU)." },
                        { lead: "Visual data mapping improves trading outcomes", detail: "Spatial/visual mapping helps pattern-match faster and act with confidence (Waterloo)." },
                      ],
                    },
                  ]}
                />
              </div>
            </>
          ),
        },
        {
          id: "impact",
          label: "IMPACT",
          content: (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { stat: "83%", label: "said the layout felt faster and less in the way" },
                  { stat: "67%", label: "found the interface mentally lighter than before" },
                  { stat: "100%", label: "got to where they needed without being shown how" },
                ].map(({ stat, label }, i) => (
                  <div
                    key={stat}
                    className={i === 0 ? ETRADE.hiCardP6 : ETRADE.glassCard}
                  >
                    <p className={ETRADE.statHero}>{stat}</p>
                    <p className={`text-[0.82rem] font-medium ${i === 0 ? "text-sky-950/80" : "text-zinc-600"}`}>{label}</p>
                  </div>
                ))}
              </div>
              <div className={`mt-19 ${ETRADE.nextStepsBox}`}>
                <p className={ETRADE.nextStepsLabel}>Next Steps</p>
                <ol className="mt-3 space-y-2.5 text-[0.82rem] leading-relaxed text-zinc-600">
                  {[
                    { n: "01", lead: "A/B test against live E*Trade.", body: "Validate speed and clarity gains with a larger sample on the production interface." },
                    { n: "02", lead: "Refine AI agent defaults.", body: "Keep opt-out visibility for new traders while giving power users a persistent one-tap dismiss." },
                    { n: "03", lead: "Expand watchlist density modes.", body: "Test compact vs. comfortable row height for different screen sizes and asset counts." },
                    { n: "04", lead: "Ship sidebar onboarding.", body: "Short first-visit tooltips to reorient users coming from top-nav muscle memory." },
                  ].map(({ n, lead, body }) => (
                    <li key={n} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-sky-600">{n}</span>
                      <p>
                        <span className="font-medium text-zinc-800">{lead}</span> {body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-6 text-[0.85rem] leading-relaxed text-zinc-500">
                Small sample, not statistically significant. A/B testing against the live E*Trade interface would validate these findings at scale.
              </p>
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
                  title: "Speed is a design feature",
                  body: "Removing three clicks from the trade flow isn't just UX polish, it's the product. Every millisecond of hesitation costs money for the user. Designing for performance changed how I think about information hierarchy.",
                },
                {
                  title: "Numbers still need UI",
                  body: "Just because a domain is data-driven doesn't mean UI is optional. A trader overwhelmed by raw numbers fails to execute — not from lack of knowledge, but because the interface never let them think clearly. UI is what converts information into correct decisions.",
                },
                {
                  title: "Research over vibes",
                  body: "Looking right and being right are not the same thing. At scale, under pressure, numbers win — a design that feels clean but ignores how users actually process data will still fail them. Every decision here has a citation because that's what holds up when aesthetics aren't enough.",
                },
              ].map((card, i) => (
                <li key={card.title}>
                  <div
                    className={
                      i === 1
                        ? "flex gap-5 rounded-2xl bg-sky-500/[0.08] p-6 ring-1 ring-sky-300/35"
                        : "flex gap-5 rounded-2xl border border-white/55 bg-white/[0.14] p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                    }
                  >
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-sky-600/70">{i + 1}</span>
                    <div className="min-w-0">
                      <p className={`mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-sky-600/70`}>{card.title}</p>
                      <p className={`text-[0.9rem] font-medium leading-[1.65] ${i === 1 ? "text-sky-950/80" : "text-zinc-700"}`}>{card.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          ),
        },
        {
          id: "considerations",
          label: "CONSIDERATIONS",
          hideFromNav: true,
          content: (
            <>
              {/* Header row */}
              <div className="mb-1 hidden grid-cols-[1fr_1.2fr_1.4fr] gap-px md:grid">
                <p className={ETRADE.subLabelTable}>Goal Pillar</p>
                <p className={ETRADE.subLabelTable}>Design Intervention</p>
                <p className={ETRADE.subLabelTable}>Impact</p>
              </div>

              <div className="mb-12 overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 backdrop-blur-xl">
                {[
                  {
                    n: "01",
                    pillar: "Speed",
                    stat: "60%",
                    interventions: ["Right Sidebar", "44px Buttons", "Customization", "Visual Hierarchy"],
                    impact: "increase in execution speed. Traders felt their needs were met — though several wanted full layout customization to match their personal workflow.",
                  },
                  {
                    n: "02",
                    pillar: "Decisiveness",
                    stat: "55%",
                    interventions: ["High Contrast", "Logic-Anchored AI"],
                    impact: "increase in reaction time. The redesign tested as mentally lighter — power users wanted even more control over data density.",
                  },
                  {
                    n: "03",
                    pillar: "Cognitive Clarity",
                    stat: "15%",
                    interventions: ["8–12px Radius", "Tabular Lining", "Humanist Typography"],
                    impact: "cortisol reduction. Clinical geometry and humanist type help — but color contrast in dark mode needs refinement to hold up under pressure.",
                  },
                  {
                    n: "04",
                    pillar: "Emotional Awareness",
                    stat: "40%",
                    interventions: ["Glass Box AI"],
                    impact: "reduction in improper trades projected. Experienced traders wouldn't trust AI in production — the path to adoption runs through transparency and earned control.",
                  },
                ].map(({ n, pillar, stat, interventions, impact }, i, arr) => (
                  <div
                    key={pillar}
                    className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr]${i < arr.length - 1 ? " border-b border-white/40" : ""}`}
                  >
                    {/* Pillar */}
                    <div className="flex items-start gap-3 bg-white/[0.18] px-5 py-5 md:border-r md:border-white/40">
                      <span className={ETRADE.statSm}>{n}</span>
                      <p className="text-[0.85rem] font-medium leading-snug text-zinc-950">{pillar}</p>
                    </div>
                    {/* Interventions */}
                    <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-white/40">
                      {interventions.map((tag) => (
                        <span key={tag} className={ETRADE.pill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Impact */}
                    <div className="px-5 py-5">
                      <p className="mb-1.5 font-mono text-[1.25rem] font-medium leading-none tracking-[-0.03em] text-sky-600">{stat}</p>
                      <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-19 ${ETRADE.glassCard}`}>
                <p className={ETRADE.subLabelMb2}>Tradeoff made</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  Sidebar over top nav — all trade actions within 44px, in peripheral view. Cost: existing users need to reorient on first load. Accepted because vertical scanning outperforms horizontal on every session after the first.
                </p>
              </div>

              <div className={`mt-6 ${ETRADE.glassCard}`}>
                <p className={ETRADE.subLabelMb2}>Tradeoff made</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  AI agent opt-out over opt-in — newer traders see it on first load, directly addressing E*Trade&apos;s retention problem. Power users get a one-tap dismiss that persists. The retention upside outweighed the alienation risk.
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
                <p className={`${ETRADE.subLabelMb3} mb-5`}>Links</p>
                <ul className="space-y-5">
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Apple Inc. &ldquo;Human Interface Guidelines: Buttons.&rdquo; Accessed February 18,
                    2026.{" "}
                    <a
                      href="https://developer.apple.com/design/human-interface-guidelines/buttons"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      developer.apple.com
                    </a>
                    .
                  </li>
                  <li id="bib-smu" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Bazley, William J., Henrik Cronqvist, and Milos Vulanovic. &ldquo;Visual Finance:
                    The Macroeconomics of Color.&rdquo; <em>Cox Today</em>, December 9, 2020.{" "}
                    <a
                      href="https://www.smu.edu/cox/coxtoday-magazine/2020-12-09-visual-finance-101"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      smu.edu
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Bortot, Danilo. &ldquo;User Experience in Financial Trading: A Study on the Impact
                    of UI Design on Trader Performance.&rdquo; PhD diss., University of Waterloo.{" "}
                    <a
                      href="https://uwaterloo.ca/advanced-interface-design-lab/research/finance"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      uwaterloo.ca
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    D&apos;Acunto, Francesco, Alberto G. Rossi, and Michael Weber. &ldquo;The Visual
                    Finance Revolution.&rdquo; UC Berkeley: eScholarship, 2023.{" "}
                    <a
                      href="https://escholarship.org/uc/item/7sc26039"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      escholarship.org
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Dobres, Jonathan, Bryan Reimer, and Bruce Mehler. &ldquo;Assessing the Impact of
                    Typeface Design in a Text-Rich Automotive User Interface.&rdquo;{" "}
                    <em>Ergonomics</em> 59, no. 12 (2016).{" "}
                    <a
                      href="https://www.researchgate.net/publication/264390035_Assessing_the_impact_of_typeface_design_in_a_text-rich_automotive_user_interface"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      researchgate.net
                    </a>
                    .
                  </li>
                  <li id="bib-gupta" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Gupta, Anshul. &ldquo;The Impact of UI/UX in CRMs and Financial Dashboards.&rdquo;
                    InsightsCRM Blog.{" "}
                    <a
                      href="https://www.insightscrm.com/blogs/impact-of-ui-ux-in-crms"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      insightscrm.com
                    </a>
                    .
                  </li>
                  <li id="bib-nih" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    National Institutes of Health. &ldquo;Visual Search Efficiency and Display
                    Disorder.&rdquo; <em>PubMed Central</em>, 2023.{" "}
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10654419/"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pmc.ncbi.nlm.nih.gov
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen, Jakob. &ldquo;F-Shaped Pattern for Reading Web Content.&rdquo;{" "}
                    <em>Nielsen Norman Group</em>, 2006.{" "}
                    <a
                      href="https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nngroup.com
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Prasad, S. &ldquo;Neural Mechanisms of Color and Shape Processing.&rdquo;{" "}
                    <em>The Journal of Neuroscience</em> 33, no. 9 (2013): 4002–4015.{" "}
                    <a
                      href="https://www.jneurosci.org/content/33/9/4002"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jneurosci.org
                    </a>
                    .
                  </li>
                  <li id="bib-tufte" className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500">
                    Tufte, Edward R. <em>The Visual Display of Quantitative Information.</em>
                    Cheshire, CT: Graphics Press, 2001.{" "}
                    <a
                      href="https://www.edwardtufte.com/books/"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      edwardtufte.com
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Ullah, R. &ldquo;The Effect of Chart Type on Financial Decision Making.&rdquo; DiVA
                    Portal, 2024.{" "}
                    <a
                      href="https://www.diva-portal.org/smash/get/diva2:1967515/FULLTEXT01.pdf"
                      className="transition-colors text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      diva-portal.org
                    </a>
                    .
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
