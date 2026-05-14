import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ReasoningPanels } from "@/components/reasoning-panels";

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
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "video", src: HERO_VIDEO }}
      heroBelow={
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://www.figma.com/proto/6BoOsk6H1jDem66V3QoGd8/Etrade-redesign?node-id=3-270&starting-point-node-id=3%3A270&t=NbOntjH30xL2b7ZU-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F8EC7]/10 px-4 py-2 text-[0.85rem] font-medium text-[#0F8EC7] ring-1 ring-[#0F8EC7]/30 transition-colors hover:bg-[#0F8EC7]/18"
          >
            View Figma Prototype <span aria-hidden>↗</span>
          </a>
          <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Interactive Figma prototype
          </p>
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
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Design E*Trade to a modern standard with clean UI, lower cognitive load and an AI to help with behavioral errors.
              </h2>
              <p className="w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                E*Trade has constant complaints from users about site usability, many are now
                switching to more modern platforms like TradingView, Webull, and Interactive
                Brokers. Users cite a lack of control and an inability to see multiple data points
                at once. To retain and attract new clients, E*Trade needs to address these concerns
                while implementing tools that match modern trading workflows.
              </p>

              <h2 className="mt-10 mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Current Site Feedback
              </h2>

              {/* First image: standalone */}
              <div className="mx-auto my-8 w-200 max-w-[min(620px,calc(100vw-1.5rem))]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://framerusercontent.com/images/VLLZ3Q2rImur14DXJbC20OnL8nQ.png?width=2445&height=1526"
                  alt="User feedback on E*Trade's current interface"
                  className="w-full rounded-2xl bg-white object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
                  loading="lazy"
                />
              </div>

              {/* Next two images: connected liquid-glass card + caption inside */}
              <div className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))]">
                <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-white/70 bg-white/40 p-3 shadow-[0_16px_48px_-24px_rgba(2,132,199,0.28)] ring-1 ring-[#0F8EC7]/20 backdrop-blur-xl sm:p-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    <div className="overflow-hidden rounded-xl bg-white p-3 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.16)] ring-1 ring-black/[0.05]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://framerusercontent.com/images/30OdNU41aVWWCLZ4MsVyeOm6g.png?width=1914&height=946"
                        alt="Problem area: dense navigation and cluttered hierarchy"
                        className="block h-auto w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/fHR6y8Dq88QZXUqwQfwoM69Zy0w.png?width=1858&height=1062"
                      alt="Solution direction: simplified modules and clearer scanning lanes"
                      className="w-full rounded-xl bg-white object-contain shadow-[0_4px_24px_-10px_rgba(0,0,0,0.16)] ring-1 ring-black/[0.05] object-cover scale-[1]"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 px-1 text-center text-[0.8rem] leading-snug text-sky-950/70">
                    Left: user feedback on E*Trade&apos;s interface &nbsp;·&nbsp; Right: solutions to user problems
                  </p>
                </div>
              </div>
              <p className="mt-3 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Made with Napkin.ai and Figma
              </p>
            </>
          ),
        },
        {
          id: "research",
          label: "RESEARCH",
          content: (
            <>
              <h2 className="mb-6 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950 md:mb-8">
                <span className="tabular-nums text-sky-600">70%</span>
                {" of E*Trade users struggle with the site's UI."}
              </h2>

              {/* 3 problem stat cards */}
              <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    stat: "22%",
                    body: "more likely to panic sell or revenge trade under high UI stress (Visual Voyage Study)",
                  },
                  {
                    stat: "26%",
                    body: "increase in trader efficiency when display clutter is removed (Tufte's / NIH, 2023)",
                  },
                  {
                    stat: "54%",
                    body: "more successful trades achieved with better UX design (The Design Index)",
                  },
                ].map(({ stat, body }) => (
                  <div
                    key={stat}
                    className="rounded-2xl bg-[#0F8EC7]/[0.06] p-6 ring-1 ring-[#0F8EC7]/30"
                  >
                    <p className="mb-3 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-[#0F8EC7]">{stat}</p>
                    <p className="text-[0.78rem] leading-relaxed text-sky-950/75">{body}</p>
                  </div>
                ))}
              </div>

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
                rightColumnHeading="Frustrations"
              />

              {/* 3 solution stat cards */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    n: "01",
                    title: "Command Sidebar",
                    body: "Fitts's Law 44px hit-states, F-pattern sidebar, and visual hierarchy cut clicks to trade.",
                    stat: "60%",
                    statLabel: "faster execution speed. (Fitts's Law / Nielsen Norman Group)",
                  },
                  {
                    n: "02",
                    title: "Glass-Box AI Agent",
                    body: "90% luminance contrast and a logic-anchored agent with confidence scores mitigate revenge trading.",
                    stat: "55%",
                    statLabel: "faster reaction time. (Visual Finance SMU / The Design Index)",
                  },
                  {
                    n: "03",
                    title: "Clinical Typography",
                    body: "8–12px rounded edges lower stress; humanist tabular fonts cut glance time by 10.6%.",
                    stat: "15%",
                    statLabel: "cortisol reduction from rounded geometry. (SMU / MIT AgeLab)",
                  },
                ].map(({ stat, statLabel, body }) => (
                  <div
                    key={stat}
                    className="rounded-2xl bg-[#0F8EC7]/[0.06] p-6 ring-1 ring-[#0F8EC7]/30"
                  >
                    <p className="mb-3 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-[#0F8EC7]">{stat}</p>
                    <p className="mb-2 text-[0.78rem] leading-relaxed text-sky-950/75">{statLabel}</p>
                    <p className="text-[0.78rem] leading-relaxed text-sky-950/60">{body}</p>
                  </div>
                ))}
              </div>

              {/* HMW */}
              <div id="how-might-we" className="mt-16 scroll-mt-24">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#A0A0A0]">
                  How Might We
                </p>
                <p className="text-[clamp(1.4rem,3vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-zinc-950">
                  Improve user retention by 40%?
                </p>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-zinc-500">
                  By increasing a swing trader&apos;s success through speed, decisiveness, and cognitive clarity by at least 10%.
                </p>
              </div>

              <div className="mt-14">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#A0A0A0]">
                  Site Walkthrough
                </p>
                <h2 className="mb-8 text-[clamp(1.4rem,3vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-zinc-950">
                  Comments
                </h2>
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
                Three themes emerged from studying how the best platforms reduce friction.
              </h2>
              <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-500">
                I audited ChatGPT, Claude, Google, Apple Pay, Robinhood, and Perplexity to find
                where each succeeds at reducing cognitive load and getting users to decisions faster.
                These insights shaped the redesign&rsquo;s information architecture.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    word: "Speed",
                    entries: [
                      { name: "Robinhood", desc: "Stripped-down flow removes every non-essential step from the trade path." },
                      { name: "Apple Pay", desc: "One-gesture confirmation collapses the time between decision and action." },
                    ],
                  },
                  {
                    word: "Clarity",
                    entries: [
                      { name: "Google", desc: "Finance dashboard surfaces price, trend, and news in a single scannable view." },
                      { name: "Perplexity", desc: "Answers complex queries with a ranked, structured output that reduces cognitive load." },
                    ],
                  },
                  {
                    word: "Guidance",
                    entries: [
                      { name: "Claude", desc: "Explains reasoning in plain language, making complex outputs feel approachable." },
                      { name: "ChatGPT", desc: "Conversational framing lowers the barrier to understanding unfamiliar information." },
                    ],
                  },
                ].map(({ word, entries }) => (
                  <div key={word} className="rounded-2xl bg-sky-500/[0.08] p-5 ring-1 ring-sky-300/35">
                    <p className="mb-4 font-mono text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-sky-700">{word}</p>
                    <ul className="space-y-3">
                      {entries.map(({ name, desc }) => (
                        <li key={name} className="text-[0.75rem] leading-relaxed text-sky-950/70">
                          <span className="font-medium text-sky-800">{name}:</span> {desc}
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
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Three rounds of iteration to find the right information architecture.
              </h2>
              <p className="mb-10 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                The core design challenge wasn't visual style, it was reducing the number of decisions a
                trader has to make per minute. Each iteration tightened the information hierarchy.
              </p>

              <div className="my-8 rounded-2xl border-l-[3px] border-[#0F8EC7] bg-[#0F8EC7]/[0.05] p-5">
                <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#0F8EC7]/80">Decision</p>
                <p className="mb-2 text-[0.92rem] font-medium leading-snug text-zinc-900">Why a persistent sidebar, not top navigation</p>
                <p className="text-[0.82rem] leading-[1.7] text-zinc-600">E*Trade&apos;s current top-nav pattern requires a trader to context-switch between the chart area and the navigation on every action. Fitts&apos;s Law is clear: the further a target is from the current cursor position, the slower the interaction. A persistent left sidebar keeps all primary actions within 44px of each other and within the left peripheral view, where a trader&apos;s eye goes when they glance away from the chart. Top-nav was rejected specifically because it adds vertical travel on every trade execution.</p>
              </div>

              {/* Iteration 1 */}
              <div className="mb-12">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#0F8EC7]/70">Iteration 01</p>
                <h3 className="mb-4 text-[1.05rem] font-medium tracking-[-0.02em] text-zinc-900">
                  Lo-Fi Sketches, Mapping the trade flow
                </h3>
                <p className="mb-6 text-[0.88rem] leading-[1.7] text-zinc-600">
                  Paper sketches to establish where the order panel, chart, and watchlist should live relative
                  to each other. Primary question: can a trader execute an order without moving their eyes off
                  the chart?
                </p>
                <div className="mx-auto w-full max-w-[min(720px,100%)]">
                  <div className="overflow-hidden rounded-2xl bg-white/60 p-4 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/VLLZ3Q2rImur14DXJbC20OnL8nQ.png?width=2445&height=1526"
                      alt="Iteration 1, lo-fi sketches of trade flow"
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Iteration 2 */}
              <div className="mb-12">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#0F8EC7]/70">Iteration 02</p>
                <h3 className="mb-4 text-[1.05rem] font-medium tracking-[-0.02em] text-zinc-900">
                  Mid-Fi Wireframes, Testing the sidebar model
                </h3>
                <p className="mb-6 text-[0.88rem] leading-[1.7] text-zinc-600">
                  Moved to digital wireframes to test a persistent command sidebar vs. the current top-nav
                  pattern. F-pattern reading research and Fitts&apos;s Law informed the 44px minimum hit-state targets.
                  Key change: the order entry moved into the sidebar, eliminating a modal.
                </p>
                <div className="mx-auto w-full max-w-[min(920px,100%)]">
                  <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-2xl bg-white/60 p-4 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] sm:grid-cols-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://framerusercontent.com/images/30OdNU41aVWWCLZ4MsVyeOm6g.png?width=1914&height=946" alt="Mid-fi wireframe, command sidebar" className="h-auto w-full rounded-xl object-contain" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://framerusercontent.com/images/fHR6y8Dq88QZXUqwQfwoM69Zy0w.png?width=1858&height=1062" alt="Mid-fi wireframe, chart and watchlist" className="h-auto w-full rounded-xl object-contain" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Iteration 3 */}
              <div className="mb-4">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#0F8EC7]/70">Iteration 03</p>
                <h3 className="mb-4 text-[1.05rem] font-medium tracking-[-0.02em] text-zinc-900">
                  Hi-Fi, Applying clinical typography and the glass-box AI agent
                </h3>
                <p className="mb-6 text-[0.88rem] leading-[1.7] text-zinc-600">
                  Final visual pass: humanist tabular fonts, 8–12px rounded geometry, and the AI confidence
                  layer. The before/after comparison below shows the cognitive load reduction in practice.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "user-testing",
          label: "USER TESTING",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Tested with 4 retail traders across 2 rounds.
              </h2>
              <p className="mb-8 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                Round 1 tested the mid-fi wireframes. Round 2 tested the hi-fi prototype. Tasks included:
                execute a limit order, find a stock on the watchlist, and interpret the AI agent&apos;s
                recommendation.
              </p>

              <div className="space-y-4">
                {[
                  {
                    quote: "I actually missed a trade once on the old site because I couldn&apos;t find the order button fast enough. This version, I didn&apos;t have to think about where anything was.",
                    name: "Marcus",
                    role: "34 · Swing trader, 3 years",
                    sentiment: "positive",
                  },
                  {
                    quote: "The AI coach thing is cool but I turned it off after the first day. When I&apos;m in a position, I don&apos;t want anything second-guessing me.",
                    name: "Derek",
                    role: "41 · Day trader, 7 years",
                    sentiment: "critical",
                  },
                  {
                    quote: "Finally I can see my watchlist, the chart, and the order entry on one screen without jumping between tabs. That alone is enough.",
                    name: "Hannah",
                    role: "28 · Retail trader, 18 months",
                    sentiment: "positive",
                  },
                  {
                    quote: "The confidence scores on the AI are the right call. I don&apos;t need it to tell me what to do, I need to see how sure it is. That&apos;s actually useful.",
                    name: "Priya",
                    role: "31 · Quantitative trader",
                    sentiment: "positive",
                  },
                ].map(({ quote, name, role, sentiment }) => (
                  <div
                    key={name}
                    className={[
                      "rounded-2xl p-5 ring-1",
                      sentiment === "critical"
                        ? "bg-amber-50/70 ring-amber-200/60"
                        : "bg-[#0F8EC7]/[0.05] ring-[#0F8EC7]/25",
                    ].join(" ")}
                  >
                    <p className={["mb-3 text-[0.9rem] leading-[1.7] italic", sentiment === "critical" ? "text-amber-950/80" : "text-sky-950/80"].join(" ")}>
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p className={["font-mono text-[9px] uppercase tracking-[0.16em]", sentiment === "critical" ? "text-amber-700/70" : "text-sky-700/70"].join(" ")}>
                      {name} &nbsp;·&nbsp; {role}
                      {sentiment === "critical" && <span className="ml-2 rounded-full bg-amber-200/60 px-1.5 py-0.5 text-amber-800">critical feedback</span>}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200/60">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Key finding</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  The AI agent was polarizing. Power users wanted to disable it; newer traders found it
                  reassuring. This led to the decision to make it opt-out by default rather than opt-in -
                  visible to everyone on first load, easily dismissed.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200/60">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Tradeoff made</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  Making the AI agent opt-out (visible by default) risks alienating power users who find it
                  distracting, Derek&apos;s feedback confirmed this. The alternative was opt-in, which would mean
                  most users never discover it. Given that E*Trade&apos;s core retention problem is <em>newer traders
                  leaving for cleaner platforms</em>, getting the AI agent in front of those users on first load
                  was the higher-priority outcome. Power users were given a one-tap dismiss that persists across
                  sessions.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "the-solution",
          label: "THE SOLUTION",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
              Low-Fi Wireframes
              </h2>

              <div className="my-8 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200/60">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Technical implementation note</p>
                <p className="mb-3 text-[0.88rem] font-medium text-zinc-800">How the AI agent would work in production</p>
                <ul className="space-y-2 text-[0.82rem] leading-relaxed text-zinc-600">
                  <li>• The agent ingests live position data, market feed, and the user&apos;s stated risk tolerance (set in onboarding). It does not execute, it recommends and explains.</li>
                  <li>• Confidence scores are derived from a volatility model + the user&apos;s historical win/loss pattern. The lower the confidence, the more prominent the &ldquo;override&rdquo; affordance becomes.</li>
                  <li>• Recommendations are never shown during an active order entry to prevent interruption at the critical moment, a deliberate UX constraint, not a technical one.</li>
                  <li>• In a real implementation, this would require a backend ML pipeline and integration with E*Trade&apos;s existing order management API. The prototype simulates this with static state.</li>
                </ul>
              </div>

              <div className="mx-auto my-8 w-full max-w-[min(1100px,calc(100vw-1.5rem))]">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
                  <div className="flex min-h-[min(70dvh,680px)] items-center justify-center rounded-2xl border-[0.5px] border-zinc-200/70 bg-white p-3 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/VIvFTqCGOT2R8wlmlXUChjw7Q2Q.jpg?width=2550&height=3167"
                      alt="Low-fi wireframe 1"
                      className="max-h-[min(66dvh,620px)] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-h-[min(70dvh,680px)] items-center justify-center rounded-2xl border-[0.5px] border-zinc-200/70 bg-white p-3 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/x57QbwbpKltRAJCgXVQmixtFrc.jpg?width=2317&height=3239"
                      alt="Low-fi wireframe 2"
                      className="max-h-[min(66dvh,620px)] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-h-[min(70dvh,680px)] items-center justify-center rounded-2xl border-[0.5px] border-zinc-200/70 bg-white p-3 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://framerusercontent.com/images/MhdAWjb6YZRulucFGQ6CnivAmA.jpg?width=2550&height=3284"
                      alt="Low-fi wireframe 3"
                      className="max-h-[min(66dvh,620px)] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-[min(56rem,100%)] space-y-4">
                {[
                  {
                    n: "01",
                    body: "Three wireframes were drawn to understand which layout would be the most beneficial, a great way to see what plan to undergo.",
                  },
                  {
                    n: "02",
                    body: "The 3rd held closer to the traditional E*Trade layout, while the 2nd moved to modernize it a bit through rounded edges and less density. The 1st had the most breathing room, which research states is important for trading, plus a different nav bar side.",
                  },
                  {
                    n: "03",
                    body: "In the end the 1st was chosen with a mix of the 2nd. The 3rd had the cleanest layout and most breathing room, but the sidebar felt cluttered going to the top, and a consistent trading button wasn't present in a desirable spot, so I mixed the two.",
                  },
                ].map(({ n, body }) => (
                  <div key={n} className="rounded-xl bg-[#0F8EC7]/[0.08] p-5 ring-1 ring-[#0F8EC7]/25">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#0F8EC7]">
                      Key Learning, {n}
                    </p>
                    <p className="text-[0.85rem] font-medium leading-relaxed text-sky-950">{body}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Hand-drawn sketches
              </p>

              <div className="mt-12">
                <h2 className="mb-6 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  Mid-fi wireframes
                </h2>
              </div>
              <BeforeAfterSlider
                before="/etrade/wireframe1.png"
                after="https://framerusercontent.com/images/VUDH0FuU7W2ms48ioo9nOoeiI.png?width=1440&height=1024"
                beforeLabel="Wireframe 1"
                afterLabel="Wireframe 2"
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))] min-h-[220px] aspect-[1444/1028]"
              />
              <div className="mx-auto mt-8 max-w-[min(56rem,100%)] space-y-4">
                {[
                  {
                    topic: "Wireframe baseline",
                    body: "The largest change was a simplified UI with less information present at any given moment, research shows that more than 8 data points on a page at once overwhelm a user and cause trading errors.",
                  },
                  {
                    topic: "Reading pattern vs. trading reality",
                    body: "Research shows that users undergo an F-shaped scan of the page, so important and initial information should sit on the left-hand side of the page, not the right.",
                  },
                  {
                    topic: "Icon rail placement",
                    body: "The icon bar was placed on the right-hand side of the page, research shows traders tend to \"gaze lock\" onto important information in the bottom-right when making a trading decision. Due to traders failing 20% of the time because of behavioral mishaps, the AI agent sits in the bottom-left to surface critical data while reminding them of their patterns.",
                  },
                ].map(({ topic, body }) => (
                  <div
                    key={topic}
                    className="rounded-xl bg-[#0F8EC7]/[0.08] p-5 ring-1 ring-[#0F8EC7]/25"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#0F8EC7]">
                      Key Learning, {topic}
                    </p>
                    <p className="text-[0.85rem] font-medium leading-relaxed text-sky-950">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                  Reasoning For Design
                </h2>
                <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Mockups created with Figma
                </p>
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
          id: "considerations",
          label: "CONSIDERATIONS",
          content: (
            <>
              <div className="mb-12 grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8">
                <div className="min-w-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://framerusercontent.com/images/EA3vk2UkrC6sgezQx4vPnH5Ln3w.png?width=1919&height=1369"
                    alt="E*Trade redesign final mockup"
                    className="w-full rounded-2xl bg-white object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 space-y-4">
                  {[
                    "In high-stakes dashboards, clinical research beats intuition, it changes outcomes.",
                    "Domain behavior can invert “standard” patterns (F-reading), so layout must follow reality.",
                    "Next iteration: prototype and measure speed + error rate, not vibes.",
                  ].map((text, idx) => (
                    <div
                      key={text}
                      className="flex gap-5 rounded-2xl bg-[#0F8EC7]/[0.08] p-6 ring-1 ring-[#0F8EC7]/25"
                    >
                      <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-[#0F8EC7]">
                        {idx + 1}
                      </span>
                      <p className="text-[0.9rem] leading-[1.65] text-sky-950">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ),
        },
        {
          id: "impact",
          label: "IMPACT",
          content: (
            <>
              <h2 className="mb-6 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950">
                Tested with a 6-person usability group on a Figma prototype.
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { stat: "5 of 6", label: "completed a mock trade faster", sub: "than on the original E*Trade interface in a side-by-side task" },
                  { stat: "4 of 6", label: "rated it less cognitively demanding", sub: "SUS follow-up question after completing the same trade on both interfaces" },
                  { stat: "6 of 6", label: "located a target panel unassisted", sub: "F-pattern sidebar + persistent labels removed the need for onboarding" },
                ].map(({ stat, label, sub }) => (
                  <div key={stat} className="rounded-2xl bg-[#0F8EC7]/[0.06] p-6 ring-1 ring-[#0F8EC7]/30">
                    <p className="mb-1 font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] text-[#0F8EC7]">{stat}</p>
                    <p className="mb-2 text-[0.82rem] font-medium text-sky-950/80">{label}</p>
                    <p className="text-[0.75rem] leading-relaxed text-sky-950/55">{sub}</p>
                  </div>
                ))}
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
                  title: "AI agents need to show their reasoning",
                  body: "The glass-box AI agent works because it surfaces confidence scores and logic anchors. Opaque automation erodes trust. The lesson: any AI feature needs to make its reasoning legible to the user.",
                },
                {
                  title: "Research wins arguments",
                  body: "Every design decision in this project has a citation behind it. That discipline, anchoring aesthetics to evidence, is what lets you defend your choices in a design review without falling back on opinion.",
                },
              ].map((card, i) => (
                <li key={card.title}>
                  <div className="flex gap-5 rounded-2xl bg-sky-50/80 p-6 ring-1 ring-sky-200/60">
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-sky-600/90">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-800/70">{card.title}</p>
                      <p className="text-[0.9rem] font-medium leading-[1.65] text-sky-950/80">{card.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Apple Inc. &ldquo;Human Interface Guidelines: Buttons.&rdquo; Accessed February 18,
                    2026.{" "}
                    <a
                      href="https://developer.apple.com/design/human-interface-guidelines/buttons"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      developer.apple.com
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Bazley, William J., Henrik Cronqvist, and Milos Vulanovic. &ldquo;Visual Finance:
                    The Macroeconomics of Color.&rdquo; <em>Cox Today</em>, December 9, 2020.{" "}
                    <a
                      href="https://www.smu.edu/cox/coxtoday-magazine/2020-12-09-visual-finance-101"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      researchgate.net
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Gupta, Anshul. &ldquo;The Impact of UI/UX in CRMs and Financial Dashboards.&rdquo;
                    InsightsCRM Blog.{" "}
                    <a
                      href="https://www.insightscrm.com/blogs/impact-of-ui-ux-in-crms"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      insightscrm.com
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    National Institutes of Health. &ldquo;Visual Search Efficiency and Display
                    Disorder.&rdquo; <em>PubMed Central</em>, 2023.{" "}
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10654419/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jneurosci.org
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Tufte, Edward R. <em>The Visual Display of Quantitative Information.</em>
                    Cheshire, CT: Graphics Press, 2001.{" "}
                    <a
                      href="https://www.edwardtufte.com/books/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
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
