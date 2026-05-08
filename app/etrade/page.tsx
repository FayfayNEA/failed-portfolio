import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const SLUG = "etrade";
const CATEGORY = "product-design";

const TITLE = "E*Trade";
const DESCRIPTION = "redesigned a financial trading platform to reduce cognitive load and speed up trades";
const HERO = "https://framerusercontent.com/images/NvG3dp6QgMIWgEFMHXnQsAmc3lc.png";
/** Local encode: video-only (no audio). */
const HERO_VIDEO = "/etrade/hero.mp4";

export const metadata: Metadata = {
  title: TITLE,
  description: `Failenn Aselta — ${TITLE}. ${DESCRIPTION}`,
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
        <p className="mt-3 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
          Interactive Figma prototype
        </p>
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
                E*Trade has constant complaints from users about site usability — many are now
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
                      "Misses critical trade windows — the cluttered UI is too slow to navigate.",
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
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Case Studies of Competitors
              </h2>
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
          id: "the-solution",
          label: "THE SOLUTION",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
              Low-Fi Wireframes
              </h2>

              
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
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))] aspect-[1444/1028]"
              />
              <div className="mx-auto mt-8 max-w-[min(56rem,100%)] space-y-4">
                {[
                  {
                    topic: "Wireframe baseline",
                    body: "Wireframe 1 was chosen as the baseline.",
                  },
                  {
                    topic: "Reading pattern vs. trading reality",
                    body: "Research shows that users undergo an F-shaped scan of the page, so important and initial information should sit on the left-hand side of the page, not the right.",
                  },
                  {
                    topic: "Icon rail placement",
                    body: "The icon bar was placed on the right-hand side of the page — research shows traders tend to \"gaze lock\" onto important information in the bottom-right when making a trading decision. Due to traders failing 20% of the time because of behavioural mishaps, the AI agent sits in the bottom-left to surface critical data while reminding them of their patterns.",
                  },
                ].map(({ topic, body }) => (
                  <div
                    key={topic}
                    className="rounded-xl bg-[#0F8EC7]/[0.08] p-5 ring-1 ring-[#0F8EC7]/25"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#0F8EC7]">
                      Key Learning — {topic}
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
                <ProjectGalleryRow
                  images={[
                    "https://framerusercontent.com/images/HhDpOLCsi5D912qkGVvTagSM2U.png?width=2206&height=1433",
                    "https://framerusercontent.com/images/ovRwBKR7bj9hKUmPVDdF0DkVjKw.png?width=1963&height=1198",
                    "https://framerusercontent.com/images/04T1ZRgOFetSOdaMNQrxd7s1Pc.png?width=2427&height=1687",
                  ]}
                  theme="sky"
                  glassVariant="liquid"
                  frameSize="medium"
                  slideImageFit="contain"
                  slidePadding="tight"
                  className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
                />
                <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                  Mockups created with Figma
                </p>
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
                    "In high-stakes dashboards, clinical research beats intuition — it changes outcomes.",
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
