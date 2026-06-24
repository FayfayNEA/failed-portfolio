import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { ImageLightbox } from "@/components/image-lightbox";

const SLUG = "nightterrors";
const CATEGORY = "product-design";

const TITLE = "N1ghtterrors";
const DESCRIPTION = "designed and built a full-stack storefront for n1ghtterrors";
const HERO = "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg";

// ── Engineering diagram constants (matching Buddy pattern) ───────────────────

const DIAGRAM_IMG_CLASS =
  "block h-auto w-full rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]";
const DIAGRAM_WRAP_CLASS = "overflow-hidden !rounded-2xl";

const KEY_LEARNINGS = [
  {
    heading: "Key Learning, Vanilla Constraints",
    body: "Building with Node.js and Vanilla HTML/CSS instead of a framework enforced a deep understanding of the fundamentals and produced the raw Y2K aesthetic the brand demanded.",
  },
  {
    heading: "Key Learning, AI-Assisted Iteration",
    body: "Developing before AI tooling was widespread meant the architecture was sound before Gemini and Cursor accelerated the final iteration, the foundation never had to be rethought.",
  },
  {
    heading: "Key Learning, Diagram-First Planning",
    body: "Writing the pseudocode and Mermaid flow before touching the implementation forced clarity around stock-check state transitions and cart logic, decisions that would have been expensive to change later.",
  },
];

const RESEARCH_LEARNINGS = [
  {
    heading: "Key Learning, Navigation Visibility",
    body: "Feedback made it obvious: the cart button read as an interaction affordance, but the menu did not. I learned to make entry points loud even when the aesthetic is intentionally abrasive.",
  },
  {
    heading: "Key Learning, Typeface Legibility",
    body: "Users wanted the edge without the strain. The type choice matched the brand, but the reading experience needed guardrails, contrast, sizing, and a calmer hierarchy in key moments.",
  },
  {
    heading: "Key Learning, Writing as Guidance",
    body: "The strongest improvements came from small pieces of copy: a cue to keep scrolling, a hint that a control is interactive, a line that reframes what to do next. The writing became the UX.",
  },
];

const PILLARS = [
  {
    n: "01",
    pillar: "Brand Fidelity",
    interventions: ["Raw Aesthetic", "Nocturnal Palette", "Sway Animation"],
    impact: "50% of inventory sold in week one. The site felt like the brand — not a storefront with a dark theme applied.",
  },
  {
    n: "02",
    pillar: "Performance",
    interventions: ["Lazy Loading", "Mobile-First", "Lightweight Fallback"],
    impact: "Mobile load time was the critical failure point. Lazy-loading the video and grain layers resolved drop-off for mobile users.",
  },
  {
    n: "03",
    pillar: "Navigation Clarity",
    interventions: ["Discoverable Menu", "Scroll Cues", "Clear Cart CTA"],
    impact: "38% of users didn't recognise the menu as clickable until prompted. A few lines of copy fixed it without touching the layout.",
  },
  {
    n: "04",
    pillar: "Engagement",
    interventions: ["Atmospheric Photography", "Film Grain", "Organic Motion"],
    impact: "0 redesign requests after delivery. The visual language matched the brand's register on the first pass.",
  },
];

// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  description: `Failenn Aselta, ${TITLE}. ${DESCRIPTION}`,
};

export default function NightterrorsPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      slug={SLUG}
      category={CATEGORY}
      hero={{
        kind: "video-carousel",
        videos: ["/nightterrors/n1ghtterrors%20demo.mp4", "/nightterrors/n1ghtterrors%20demo2.mp4"],
        size: "wide",
        landscape: true,
      }}
      heroBelow={
        <div className="flex justify-center">
          <a
            href="https://n1ghtterrors.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900/80 px-4 py-2 text-[0.85rem] font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-zinc-800/80"
          >
            View Live Site <span aria-hidden>↗</span>
          </a>
        </div>
      }
      hideCaseStudyLabel
      challengeSummary="N1ghtterrors' unique and raw style needs a website that further speaks to the brand collective it has created."
      meta={{
        timeline: "3 years",
        roles: [
          "Photographer",
          "Videographer",
          "UX",
          "Frontend, Vanilla HTML/CSS",
          "Backend, Node.js / Express / Supabase / Stripe",
          "Product Designer",
          "Printer",
          "Graphics",
        ],
        team: [
          "Failenn Aselta",
          "Jason Goodman",
          "Sydney Lovro",
          "Mo Rader",
          "Peggy",
        ],
        tools: ["Visual Studio Code", "Gemini", "Resend", "Supabase", "Express.js", "Stripe", "Vercel", "Vanilla HTML/CSS", "Node.js"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Design and ship a website for a clothing line that speaks to its edgy essence.
              </h2>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                N1ghtterrors is a clothing line rooted in sublimity — each garment is a visual meditation on unseen instability, juxtaposing extremes of power and collapse. I designed the site, coded the full stack, and shot the photography.
              </p>
            </>
          ),
        },
        {
          id: "research",
          label: "THE RESEARCH",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Target User
              </h2>
              <PersonaCards
                personas={JSON.stringify([
                  {
                    name: "Isabella",
                    photo: "/nightterrors/Gemini_Generated_Image_r1bx8xr1bx8xr1bx.png",
                    age: "21",
                    role: "Environmental Studies Student",
                    photoCaption: "Portrait generated with Gemini",
                    bullets: [
                      "The site feels intentionally chaotic, but key controls (menu vs cart) aren't equally discoverable.",
                      "The typeface matches the brand, yet long reading moments become tiring without clearer hierarchy.",
                      "Unconventional interactions are exciting, but she needs small cues to understand what's clickable and what comes next.",
                    ],
                  },
                ])}
                accent="black"
                variant="keycards"
                rightColumnHeading="Frustrations"
                hmw="How might we create a website which encapsulates the raw edge of N1ghtterrors clothes?"
                hmw-answer="By creating a unique website with atypical interactions and graphics which mimic the clothes."
              />

              <h2 className="mt-14 mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Collage
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/1jDQdQtoryMLpiSEBBAskaF7qSg.png?width=1512&height=799"
                alt="N1ghtterrors inspiration collage"
                className="mx-auto my-8 block w-full max-w-[min(920px,calc(100vw-1.5rem))] rounded-2xl object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
              />
              <p className="-mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Created with Photoshop
              </p>
              

            </>
          ),
        },
        {
          id: "user-testing",
          label: "USER TESTING",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Tested with the brand community and first-time buyers.
              </h2>

              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-stretch sm:gap-6">
                {[
                  {
                    stat: "38%",
                    insight: "Didn't recognise the menu as clickable until prompted — the affordance relied on convention, not visual design.",
                    next: "Next: visual affordance added while preserving the typographic treatment",
                  },
                  {
                    stat: "63%",
                    insight: "Found the menu through convention or trial — most users got there, but without a clear visual cue guiding them.",
                    next: "Next: make the interaction legible without flattening the aesthetic",
                  },
                  {
                    stat: "50%",
                    insight: "Of launch inventory sold in the first week — the site carried the brand's edge directly into the purchase flow.",
                    next: "Next: restock cycle and inventory tracking automated in v2",
                  },
                  {
                    stat: "0",
                    insight: "Redesign requests from the brand after delivery — the visual language landed on first delivery.",
                    next: "Next: v2 scoped for expanded merch integration",
                  },
                ].map(({ stat, insight, next }) => (
                  <div
                    key={stat + next}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110"
                  >
                    <div className="flex flex-1 flex-col bg-zinc-900/[0.03] px-5 py-4">
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-800">
                        <span className="mb-1.5 block font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-zinc-950">
                          {stat}
                        </span>
                        {insight}
                      </p>
                    </div>
                    <div className="mt-auto shrink-0 border-t border-white/40 bg-white/[0.22] px-5 py-4">
                      <p className="font-mono text-[0.7rem] tracking-[0.04em] text-zinc-500">{next}</p>
                    </div>
                  </div>
                ))}
              </div>

            </>
          ),
        },
        {
          id: "engineering",
          label: "ENGINEERING",
          content: (
            <>
              <p className="mb-6 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                I chose vanilla JS and Node.js deliberately — the rawness of the stack matched the brand. Frameworks would have smoothed edges the brand needed to keep.
              </p>

              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Pseudocode &amp; Code for Checking Stock
              </h2>
              <p className="mb-8 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Made with Mermaid.js and Vanilla HTML/CSS + JavaScript
              </p>

              {/* Diagrams, mirroring Buddy's flex layout */}
              <div className="mb-12 flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-16 lg:gap-x-20">
                <div className="flex w-full justify-center md:w-auto md:max-w-[min(280px,42vw)]">
                  <div className="w-full max-w-[min(100%,260px)] sm:max-w-[min(100%,300px)]">
                    <ImageLightbox
                      src="https://framerusercontent.com/images/nrPfufSuIup3j7g2rmd8Yz6xWM.png?width=997&height=2161"
                      alt="N1ghtterrors stock-check pseudocode diagram"
                      imgClassName={DIAGRAM_IMG_CLASS}
                      wrapperClassName={DIAGRAM_WRAP_CLASS}
                      lightBg
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center md:w-auto md:max-w-[min(560px,92vw)]">
                  <ImageLightbox
                    src="https://framerusercontent.com/images/djTOSJ6bqGKn2xJuy2hVM6bxZI.png?width=2804&height=1762"
                    alt="N1ghtterrors stock-check code screenshot"
                    imgClassName={DIAGRAM_IMG_CLASS}
                    wrapperClassName={DIAGRAM_WRAP_CLASS}
                    lightBg
                  />
                </div>
              </div>

          
              {/* Key learnings, zinc/dark, mirroring Buddy's violet cards */}
              <div className="space-y-4">
                {KEY_LEARNINGS.map(({ heading, body }) => (
                  <div
                    key={heading}
                    className="rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      {heading}
                    </p>
                    <p className="text-[0.85rem] font-medium leading-relaxed text-zinc-800">{body}</p>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "why",
          label: "WHY",
          content: (
            <>
              <h2 className="mb-8 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Four decisions that made the site feel like the brand.
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    decision: "Vanilla JS over React",
                    chose: "Raw stack",
                    alt: "React / Next.js",
                    why: "Frameworks smooth edges. N1ghtterrors' edge needed to stay. The architecture had to feel like the clothes: nothing processed, nothing softened.",
                  },
                  {
                    decision: "Unconventional nav",
                    chose: "Typographic entry point",
                    alt: "Hamburger or top nav",
                    why: "A standard menu would have made the site read as e-commerce. Post-testing copy fixed discoverability without touching the layout. Brand fidelity won.",
                  },
                  {
                    decision: "Film grain and sway animation",
                    chose: "Atmospheric motion",
                    alt: "Static or fade transitions",
                    why: "Every animation was chosen to match the brand register: abrupt, textured, unresolved. Motion communicates what copy cannot.",
                  },
                  {
                    decision: "Stripe plus Supabase",
                    chose: "Custom full-stack",
                    alt: "Shopify / Squarespace",
                    why: "Shopify and Squarespace impose template logic on the brand experience. Full-stack control meant the purchase flow could match the site, not fight it.",
                  },
                ].map(({ decision, chose, alt, why }) => (
                  <div key={decision} className="rounded-2xl border border-zinc-200/60 bg-white/60 p-5 backdrop-blur-sm">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">{decision}</p>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-zinc-900/[0.08] px-2.5 py-1 font-mono text-[0.7rem] text-zinc-800 ring-1 ring-zinc-300/50">{chose}</span>
                      <span className="font-mono text-[0.65rem] text-zinc-300">vs</span>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[0.7rem] text-zinc-400 line-through ring-1 ring-zinc-200/60">{alt}</span>
                    </div>
                    <p className="text-[0.85rem] leading-relaxed text-zinc-600">{why}</p>
                  </div>
                ))}
              </div>
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
          id: "gallery",
          label: "GALLERY",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Prints and Photography
              </h2>
              <ProjectGalleryRow
                images={[
                  "https://framerusercontent.com/images/TScgzPGBV4RtflVbMytWPirm18.jpg?width=4096&height=2301",
                  "https://framerusercontent.com/images/7aec8BVSfNUodQrT2Wn0Xz98jGw.jpg?width=4096&height=2301",
                  "https://framerusercontent.com/images/Ex9trpte4cqldYQgG4LXIw4PGI.jpg?width=2731&height=4096",
                  "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/pt3EeWw5OgGMLcXdIkzNVty0Gw.jpg?width=3512&height=6240",
                  "https://framerusercontent.com/images/RPv0ZgYog0lBezZVr4u0n3VQLg.jpg?width=3512&height=6240",
                  "https://framerusercontent.com/images/YxjYnmyCrTTJJxasjPRHdkoo7Y.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/Bb5tIVv3lPwqRTPnEkUfCFtUgqk.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/vJ37nrXhruaxSCXWRTqzvM5t2A.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/oKJKQHfhPG8QJgxdo9tVwD4sU.png?width=3456&height=5184",
                  "https://framerusercontent.com/images/MwhM0baaJ6KyCRAcwMp2fsyJQTA.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/u3qizGZ1TgauMBeSYrhPUGbG8M.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/o4V2V44CYScKbWLuTTvuYOY6Slo.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/IRwuuzha6pTaqKQfmYd91k5uaP8.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/IHF4FZdtlwZz38iQVXZ2PcPB8w.jpg?width=3512&height=6240",
                  "https://framerusercontent.com/images/8p6BxDj2i1ql00c0tgYvFafWE.jpg?width=3456&height=5184",
                  "https://framerusercontent.com/images/Tqy1012o6JpXFwaScMx9yRvMiwo.jpg?width=3512&height=6240",
                  "https://framerusercontent.com/images/5RsVxkeH5RVRbieJt3rNQ3zpLl0.jpg?width=3512&height=6240",
                ]}
                theme="dark"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                className="mx-auto my-0 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
              />
              <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Taken with Fujifilm XT-30
              </p>
            </>
          ),
        },
        {
          id: "impact",
          label: "IMPACT",
          content: (
            <>
              <h2 className="mb-6 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950">
                A live site that the band actively uses and promotes.
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { stat: "50%", label: "of launch inventory sold in week one" },
                  { stat: "38%", label: "of users needed a navigation cue. Fixed post-testing without a layout change." },
                  { stat: "0", label: "redesign requests after delivery" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="rounded-2xl bg-zinc-900/[0.06] p-6 ring-1 ring-zinc-300/40">
                    <p className="mb-1 font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] text-zinc-900">{stat}</p>
                    <p className="text-[0.82rem] font-medium text-zinc-600">{label}</p>
                  </div>
                ))}
              </div>
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
                  title: "Brand fidelity over personal style",
                  body: "N1ghtterrors has a specific visual language, raw, nocturnal, confrontational. The job was to serve that language, not impose my own aesthetic. Learning when to disappear as a designer is as important as knowing when to lead.",
                },
                {
                  title: "Motion is meaning",
                  body: "Every animation on the site was chosen to feel like the music: abrupt, textured, unresolved. Motion that matches the emotional register of the brand communicates something copy never can.",
                },
                {
                  title: "Shipped work teaches what mockups don't",
                  body: "Seeing the site live on real devices, in real contexts, revealed edge cases no Figma frame anticipates. Building and shipping is the fastest feedback loop available.",
                },
              ].map((card, i) => (
                <li key={card.title}>
                  <div className="flex gap-5 rounded-2xl bg-zinc-900/5 p-6 ring-1 ring-zinc-200/60">
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-zinc-500">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{card.title}</p>
                      <p className="text-[0.9rem] font-medium leading-[1.65] text-zinc-700">{card.body}</p>
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
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Goal Pillar</p>
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Design Intervention</p>
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Potential Impact</p>
              </div>

              <div className="mb-12 overflow-hidden rounded-2xl ring-1 ring-zinc-300/40">
                {PILLARS.map(({ n, pillar, interventions, impact }, i, arr) => (
                  <div
                    key={pillar}
                    className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr] ${i < arr.length - 1 ? "border-b border-zinc-200/50" : ""}`}
                  >
                    <div className="flex items-start gap-3 bg-zinc-900/[0.04] px-5 py-5 md:border-r md:border-zinc-200/50">
                      <span className="mt-0.5 font-mono text-[0.65rem] text-zinc-400/70">{n}</span>
                      <p className="text-[0.85rem] font-medium leading-snug text-zinc-900">{pillar}</p>
                    </div>
                    <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-zinc-200/50">
                      {interventions.map((tag) => (
                        <span key={tag} className="rounded-full bg-zinc-900/[0.07] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-zinc-700 ring-1 ring-zinc-300/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10 rounded-2xl border-[0.5px] border-white/70 bg-white/[0.26] p-5 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Tradeoff made</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  Unconventional navigation was chosen over standard menu patterns. The gain: a site that felt genuinely like the brand, not a template with a dark theme applied. The cost: the menu wasn't immediately discoverable and needed post-testing copy fixes to surface the entry point without breaking the aesthetic. That fix was a few lines of copy, not a layout change — which confirmed the core direction was right. Discoverability was a solvable problem. Sacrificing the brand register would not have been.
                </p>
              </div>

              <p className="mb-12 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                For the next iteration, navigation affordance gets resolved in the design phase, not fixed post-launch with copy. The site earned its strangeness. It just needed cleaner entry points.
              </p>

              <h3 className="mt-14 font-mono text-[0.9rem] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                Early Shirt Iterations
              </h3>
              <ProjectGalleryRow
                images={[
                  "https://framerusercontent.com/images/3N1BN8WbhFGRshg0n2HhnS8Vrc0.jpg?width=1280&height=1280",
                  "https://framerusercontent.com/images/sSraOEEjF49mZ6j3IoKbXkMYsOo.png?width=1324&height=1072",
                  "https://framerusercontent.com/images/dTTNGNyA6vtw5uL0x5Bmrq0V4ec.jpg?width=1280&height=1280",
                  "https://framerusercontent.com/images/2QL09frp8USLzQuBRaczvnb7Efw.png?width=846&height=1450",
                  "https://framerusercontent.com/images/MXyu8z5AnzrQXnypyvqSEswsg.png?width=1643&height=1162",
                ]}
                theme="dark"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
              />
              <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Taken with Canon Rebel
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
