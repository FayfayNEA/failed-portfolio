import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { AutoPlayVideo } from "@/components/autoplay-video";
import { ImageLightbox } from "@/components/image-lightbox";
import { ReasoningPanels } from "@/components/reasoning-panels";
import { getContentBySlug } from "@/lib/content";

// ─── EDIT THESE ────────────────────────────────────────────────────────────────

const TITLE       = "Eidolon";
const DESCRIPTION = "created a visual AI agent to help users trust automation";
/** Local encode: video-only (no audio). */
const HERO_VIDEOS = ["/eidolon/Video Project 1.1.mp4", "/eidolon/video2.mp4"] as const;
const CHALLENGE   = "Most people worry about what the internet will look like when it becomes 98% AI and 2% human. How do we design it without causing confusion?";

const METADATA = {
  timeline: "1 week",
  roles:    ["Full Stack Engineer", "Product Designer"],
  team:     ["Failenn Aselta"],
  tools:    [
    "React 19 · Vite 6 · TypeScript",
    "Tailwind CSS 4 · Motion · Lucide",
    "Gemini 3 Flash Preview · Google AI Studio · Google Cloud Run",
    "Figma",
  ],
};

// ───────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = { title: TITLE, description: `Failenn Aselta, ${DESCRIPTION}` };

export default async function EidolonPage() {
  const page = await getContentBySlug("eidolon");
  if (!page) notFound();

  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      descriptionClassName="text-center"
      slug="eidolon"
      category="product-design"
      hero={{ kind: "video-carousel", videos: [...HERO_VIDEOS], controls: true }}
      heroBelow={
        <div className="flex flex-col items-center gap-3">
          <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Interactive Figma prototype
          </p>
          <a
            href="https://www.figma.com/proto/iXvq0vPTzw4IPXs8kwiNAd/eidolon?node-id=1-56&p=f&t=giHAp2JoHXE7ibfJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A56&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime-500/[0.08] px-4 py-2 text-[0.85rem] font-medium text-lime-700 ring-1 ring-lime-300/50 transition-colors hover:bg-lime-500/[0.14]"
          >
            View Figma Prototype <span aria-hidden>↗</span>
          </a>
        </div>
      }
      hideCaseStudyLabel
      challengeSummary={CHALLENGE}
      meta={METADATA}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className="mb-4 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Design an app which creates an easily digestible AI internet for everyone.
              </h2>
              <p className="w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                What happens when the internet is no longer human-navigated, but optimized for
                machine-to-machine interaction? The future internet will likely be a hybrid space,
                allowing individuals to choose how much control they delegate and how much they
                retain. Eidolon uses AI as a visual tool to not only showcase its actions, but to
                make it an easier place for those who fear its new shape.
              </p>

              <p className="mt-19 mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">The Problems</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { n: "01", stat: "25%",  problem: "Search Engine Decline",       bibRef: "#bib-gartner", cite: "(Gartner, 2024)",        hi: false },
                  { n: "02", stat: "65%",  problem: "claim digital fatigue",        bibRef: "#bib-apa",     cite: "(APA, 2025)",            hi: false },
                  { n: "03", stat: "81%",  problem: "claim they don't trust AI",    bibRef: "#bib-pew",     cite: "(Pew Research, 2023)",   hi: true  },
                  { n: "04", stat: "72%",  problem: "Verbal Dissonance",            bibRef: "#bib-bruner",  cite: "(Bruner, 1986)",         hi: false },
                ].map(({ n, stat, problem, bibRef, cite, hi }) => (
                  <div key={n} className={hi
                    ? "rounded-2xl bg-lime-500/[0.08] p-5 ring-1 ring-lime-300/35"
                    : "rounded-2xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                  }>
                    <p className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${hi ? "text-lime-600/70" : "text-zinc-400"}`}>{n}</p>
                    <p className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${hi ? "text-lime-600" : "text-zinc-700"}`}>{stat}</p>
                    <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${hi ? "text-lime-950" : "text-zinc-800"}`}>{problem}</p>
                    <a href={bibRef} className={`font-mono text-[8px] tracking-[0.12em] underline underline-offset-2 transition-colors ${hi ? "text-lime-700/60 hover:text-lime-800" : "text-zinc-400/80 hover:text-zinc-600"}`}>{cite}</a>
                  </div>
                ))}
              </div>

              <p className="mt-19 mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Our Goals</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { n: "01", stat: "22×",  goal: "more trust through transparency",    bibRef: "#bib-bruner",  cite: "(Bruner, 1986)",       hi: true  },
                  { n: "02", stat: "20%",  goal: "Cognitive Load Reduction",            bibRef: "#bib-nng",     cite: "(NNg)",                hi: false },
                  { n: "03", stat: "67%",  goal: "Environment Sanitation",              bibRef: "#bib-edelman", cite: "(Edelman, 2024)",      hi: false },
                  { n: "04", stat: "46%",  goal: "raise in human authority over AI",   bibRef: "#bib-apa",     cite: "(APA, 2025)",          hi: false },
                ].map(({ n, stat, goal, bibRef, cite, hi }) => (
                  <div key={n} className={hi
                    ? "rounded-2xl bg-lime-500/[0.08] p-5 ring-1 ring-lime-300/35"
                    : "rounded-2xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                  }>
                    <p className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${hi ? "text-lime-600/70" : "text-zinc-400"}`}>{n}</p>
                    <p className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${hi ? "text-lime-600" : "text-zinc-700"}`}>{stat}</p>
                    <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${hi ? "text-lime-950" : "text-zinc-800"}`}>{goal}</p>
                    <a href={bibRef} className={`font-mono text-[8px] tracking-[0.12em] underline underline-offset-2 transition-colors ${hi ? "text-lime-700/60 hover:text-lime-800" : "text-zinc-400/80 hover:text-zinc-600"}`}>{cite}</a>
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
                <span className="tabular-nums text-lime-600">80%</span>
                {" of U.S. adults are concerned about the future of AI."}
              </h2>


              <PersonaCards
                accent="lime"
                rightColumnHeading="Frustrations"
                layout="grid-2"
                personas={JSON.stringify([
                  {
                    name: "Cindy",
                    photo: "/eidolon/cindy.png",
                    age: "75",
                    role: "Retiree",
                    photoCaption: "Portrait generated with Gemini",
                    bullets: [
                      "Can't keep up with AI, the landscape changes too fast.",
                      "Craves stability; won't hand control to automated systems.",
                    ],
                  },
                  {
                    name: "Ashleigh",
                    photo: "/eidolon/ashleigh.png",
                    age: "22",
                    role: "Tech Enthusiast",
                    photoCaption: "Portrait generated with Gemini",
                    bullets: [
                      "Fears hallucination on high-stakes tasks, the black box kills trust.",
                      "Loves AI speed but exhausted by double-checking everything it does.",
                    ],
                  },
                ])}
              />


              <div id="how-might-we" className="mt-19 scroll-mt-24 rounded-2xl border border-white/55 bg-white/[0.12] p-8 shadow-[0_0_28px_-10px_rgba(132,204,22,0.22),0_8px_32px_-8px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-[0.5px] ring-lime-300/30 backdrop-blur-xl backdrop-saturate-125 transition-shadow duration-300 hover:shadow-[0_0_72px_-6px_rgba(132,204,22,0.55),0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.55)] hover:ring-lime-300/60">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-lime-600/60">
                  How Might We
                </p>
                <p className="text-[clamp(1.2rem,2.6vw,1.7rem)] font-medium leading-[1.2] tracking-[-0.03em] text-lime-700/80">
                  Improve trust in AI and decrease cognitive load?
                </p>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-lime-800/50">
                  By developing agents that showcase their interactions visually and clean up interfaces to make the web simpler.
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
                Three themes emerged from studying how existing AI tools build user confidence.
              </h3>
              <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-500">
                I audited ChatGPT, Claude, Google, Apple Pay, Robinhood, and Perplexity to understand
                where they succeed at communicating AI intent. These became the design principles
                Eidolon is built around.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    word: "Trust",
                    entries: [
                      { name: "Claude", desc: "Thinking mode surfaces reasoning so users see how decisions are reached." },
                      { name: "Google", desc: "Gemini's animated icon signals when the model is actively working." },
                    ],
                  },
                  {
                    word: "Confirmation",
                    entries: [
                      { name: "Apple Pay", desc: "Biometric gate before every transaction creates an explicit authorization moment." },
                      { name: "Robinhood", desc: "Order review screen forces a pause before any trade is finalized." },
                    ],
                  },
                  {
                    word: "Simplicity",
                    entries: [
                      { name: "ChatGPT", desc: "Single input field normalizes AI for non-technical users." },
                      { name: "Perplexity", desc: "Surfaces sources inline so users trust the answer without digging." },
                    ],
                  },
                ].map(({ word, entries }) => (
                  <div key={word} className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]">
                    <p className="mb-4 font-mono text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-lime-600">{word}</p>
                    <ul className="space-y-3">
                      {entries.map(({ name, desc }) => (
                        <li key={name} className="text-[0.75rem] leading-relaxed text-zinc-600">
                          <span className="font-medium text-zinc-800">{name}:</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Narrow centered column + phone aspect frame so portrait shots fill width (no wide letterboxing). */}
              <div className="mx-auto my-19 w-full max-w-[min(560px,calc(100vw-0.75rem))]">
                <ProjectGalleryRow
                  images={[
                    "https://framerusercontent.com/images/6mJYvZa1OaxQNIedYUOc6zfvGw.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/94EBmlAyu4WhHwzW2jpk43HWhVs.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/SCptiubRZICsrqTA8Si8i1etVog.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/FbLW05FOguOOf6Ez6PLZb29PdU8.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/4SlpgZAk8FGtqdB2PeLDcjdQ0A.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/JYQGwX7ESM7qaUjYoNrGwmnG4.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/TX8qLiwbp0jVZUgdJGcTqjU90w.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/XN5c54W8cxFf1Dv8Sj0vNg21D5M.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/xxMUtrbXuRNzEXrSmqA1zJBY73s.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/2Z4X6N2v61U0psJL1NRHlPTctos.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/zSHAbHlLE61HnnpKatBTZ5IvRpk.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/CYPeem3AqyyCVw2domvbg2jvI.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/nnlGLJpJXuSjDOuKw9Qbe1gjfsM.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/A6HY249F2l8AoR2UneeCRvkUo4.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/T3tq5FVj2rdsCdgW86E6i8cCOY.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/atTM3GDL4qjGuoEd6yXBAoxPiJY.png?width=1206&height=2622",
                    "https://framerusercontent.com/images/9kPeeH9l1MUyIf1wAJJJrou66bU.png?width=1206&height=2622",
                  ]}
                  theme="lime"
                  glassVariant="liquid"
                  frameSize="phone"
                  slideImageFit="contain"
                  slidePadding="tight"
                  className="my-0 w-full"
                />
              </div>
              <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Images pulled from Claude, ChatGPT, Gemini, Apple Checkout and Google
              </p>
            </>
          ),
        },
        {
          id: "ideation",
          label: "IDEATION",
          content: (
            <>
              <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  {
                    n: "01",
                    area: "Trust Through Transparency",
                    detail: "2D Negotiation Canvas + Data Provenance HUD",
                  },
                  {
                    n: "02",
                    area: "Cognitive Load Reduction",
                    detail: "Palace Layout + Noise Filtration",
                  },
                  {
                    n: "03",
                    area: "Environment Sanitation",
                    detail: "Safety Guardrails + Node PRUNE-ing",
                  },
                  {
                    n: "04",
                    area: "Human Authority & Safety",
                    detail: "Manual Override + Haptic Authorization",
                  },
                ].map(({ n, area, detail }) => (
                  <div key={n} className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]">
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">{n}</p>
                    <p className="mb-2 text-[0.88rem] font-medium leading-snug text-zinc-800">{area}</p>
                    <p className="text-[0.75rem] leading-relaxed text-zinc-500">{detail}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Low-Fi Wireframes
              </h2>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Early Drawings
              </p>

              <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                  {/* Iteration 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-600/70">Iteration 1</p>
                      <span className="rounded-full bg-lime-500/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-lime-700 ring-1 ring-lime-300/40">Selected for description</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 3 of 8.png")}
                      alt="Iteration 1 - overhead feedback"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Overhead feedback so user constantly understands the scenario.</p>
                  </div>
                  {/* Iteration 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 2</p>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-500 ring-1 ring-zinc-200/60">Half selected for opening text</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 4 of 8.png")}
                      alt="Iteration 2 - no overhead, visual actions"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">No overhead, visual actions only. Condensed sign-in page with 2 buttons.</p>
                  </div>
                  {/* Iteration 3 */}
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 3</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 5 of 8.png")}
                      alt="Iteration 3 - multiple sign-in entries, character first"
                      className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                      loading="lazy"
                    />
                    <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Multiple sign-in entries. Character selection appears first before setup.</p>
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

                <div className="mx-auto w-full max-w-[min(400px,calc(100vw-1.5rem))]">
                  <ProjectGalleryRow
                    images={[
                      encodeURI("/eidolon/screen 1 of intro.png"),
                      encodeURI("/eidolon/screen 2 of intro.png"),
                      encodeURI("/eidolon/screen 3 of intro.png"),
                      encodeURI("/eidolon/screen 4 of intro.png"),
                      encodeURI("/eidolon/screen 5 of intro.png"),
                    ]}
                    theme="lime"
                    glassVariant="liquid"
                    frameSize="phone"
                    slideImageFit="contain"
                    slidePadding="default"
                    className="my-0 w-full"
                  />
                </div>

                <div className="mx-auto mt-19 grid w-full max-w-[min(1100px,calc(100vw-1.5rem))] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                  <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]" aria-hidden />
                    <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
                    <div className="relative p-3 sm:p-4 md:p-5">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700/80">Cindy flow</p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={encodeURI("/eidolon/cindys flow.png")} alt="Cindy flow" width={568} height={165} className="block h-auto w-full rounded-xl bg-white object-contain ring-1 ring-black/[0.06]" decoding="async" />
                    </div>
                  </div>
                  <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]" aria-hidden />
                    <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
                    <div className="relative p-3 sm:p-4 md:p-5">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700/80">Ashleigh flow</p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={encodeURI("/eidolon/ashleighs flow.png")} alt="Ashleigh flow" width={864} height={256} className="block h-auto w-full rounded-xl bg-white object-contain ring-1 ring-black/[0.06]" decoding="async" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">Gemini diagrams</p>

                <div className="mx-auto mt-4 grid w-full max-w-[min(800px,calc(100vw-1.5rem))] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                  <ProjectGalleryRow
                    images={[encodeURI("/eidolon/screen 1 of manual.png"),encodeURI("/eidolon/screen 2 of manual.png"),encodeURI("/eidolon/screen 3 of manual.png"),encodeURI("/eidolon/screen 4 of manual.png")]}
                    theme="lime" glassVariant="liquid" frameSize="phone" slideImageFit="contain" slidePadding="default" className="my-0 w-full"
                  />
                  <ProjectGalleryRow
                    images={[encodeURI("/eidolon/screen 1 of automatic.png"),encodeURI("/eidolon/screen 2 of automatic.png"),encodeURI("/eidolon/screen 3 of automatic.png"),encodeURI("/eidolon/screen 4 of automatic.png"),encodeURI("/eidolon/screen 5 of automatic.png"),encodeURI("/eidolon/screen 6 of automatic.png")]}
                    theme="lime" glassVariant="liquid" frameSize="phone" slideImageFit="contain" slidePadding="default" className="my-0 w-full"
                  />
                </div>
                <p className="mt-2 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">Figma mockups</p>
                <div className="mx-auto mt-3 grid w-full max-w-[min(800px,calc(100vw-1.5rem))] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/[0.07] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-red-700 ring-1 ring-red-300/50">
                      <span aria-hidden className="text-red-400">✕</span>
                      <span className="text-red-500/50">·</span>
                      <span>Harsher edges. Left-side toggle to pick AI agent mode.</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <a href="#solution" className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-lime-800 ring-1 ring-lime-300/40 transition-colors hover:bg-lime-500/[0.14]">
                        <span>46% want manual control</span>
                        <span className="text-lime-500/60">·</span>
                        <span className="text-lime-600/70">Human Authority &amp; Safety</span>
                        <span aria-hidden className="text-lime-500/50">↓</span>
                      </a>
                      <a href="#solution" className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-lime-800 ring-1 ring-lime-300/40 transition-colors hover:bg-lime-500/[0.14]">
                        <span>32px rounded edges reduce cortisol</span>
                        <span className="text-lime-500/60">·</span>
                        <span className="text-lime-600/70">Cognitive Load Reduction</span>
                        <span aria-hidden className="text-lime-500/50">↓</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/[0.07] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-red-700 ring-1 ring-red-300/50">
                      <span aria-hidden className="text-red-400">✕</span>
                      <span className="text-red-500/50">·</span>
                      <span>Bottom-left money bar with square edges on each image.</span>
                    </div>
                    <a
                      href="#solution"
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lime-500/[0.08] px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-lime-800 ring-1 ring-lime-300/40 transition-colors hover:bg-lime-500/[0.14]"
                    >
                      <span>Palace Layout leads to cognitive load reduction</span>
                      <span className="text-lime-500/60">·</span>
                      <span className="text-lime-600/70">Cognitive Load Reduction</span>
                      <span aria-hidden className="text-lime-500/50">↓</span>
                    </a>
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
                      title="Eidolon Figma board"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FiXvq0vPTzw4IPXs8kwiNAd%2Feidolon%3Fnode-id%3D0-1%26t%3Dg61S93lNRgBtflTR-1"
                      className="h-[min(70dvh,680px)] w-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <a
                      href="https://www.figma.com/design/iXvq0vPTzw4IPXs8kwiNAd/eidolon?node-id=0-1&t=g61S93lNRgBtflTR-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-zinc-400 transition-colors hover:text-zinc-600"
                    >
                      Open in Figma <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>

                <div className="mt-19">
                  <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                    Character Creation
                  </h2>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Anthropomorphic Trust
                  </p>

                  <div className="mx-auto w-full max-w-[min(1100px,calc(100vw-1.5rem))]">
                    <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]" aria-hidden />
                      <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
                      <div className="relative p-3 sm:p-4 md:p-5">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                          {[
                            { step: "1", src: "/eidolon/b&w 1.png",      alt: "Character creation, non-gendered" },
                            { step: "2", src: "/eidolon/color (2).png",  alt: "Character creation, gold skin" },
                            { step: "3", src: "/eidolon/color (3).png",  alt: "Character creation, illustration style" },
                          ].map(({ step, src, alt }) => (
                            <div key={step} className="flex flex-col gap-2">
                              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-600/70">{step}</p>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={encodeURI(src)} alt={alt} className="mx-auto h-[min(56dvh,560px)] w-full rounded-xl object-contain" loading="lazy" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">Generated with Gemini</p>

                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-white/55 bg-white/[0.14] px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125">
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Non-gendered</p>
                      <p className="text-[0.75rem] leading-relaxed text-zinc-500">Allows agent to engage in non-biased action.</p>
                    </div>
                    <div className="rounded-xl bg-lime-500/[0.08] px-4 py-3 ring-1 ring-lime-300/35">
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-lime-600/70">Gold Skin</p>
                      <p className="text-[0.75rem] leading-relaxed text-lime-950/70">Leads to feelings of trust and wisdom.</p>
                    </div>
                    <div className="rounded-xl border border-white/55 bg-white/[0.14] px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125">
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Illustration</p>
                      <p className="text-[0.75rem] leading-relaxed text-lime-950/70">Uncanny valley is avoided when stylization is between 10&ndash;30%.</p>
                    </div>
                  </div>

                  <div className="mx-auto mt-6 w-full max-w-[min(800px,calc(100vw-1.5rem))]">
                    <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-zinc-200/70 bg-white shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.06]">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]" aria-hidden />
                      <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
                      <div className="relative p-4 sm:p-5 md:p-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={encodeURI("/eidolon/items (5).png")} alt="Character creation diagram" className="w-full rounded-xl bg-white object-contain" loading="lazy" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">Napkin.ai diagram</p>
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
              <h2 className="mb-2 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950">
                Testing the solution
              </h2>
              <p className="mb-8 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                I shared the prototype with a group of people and asked them a series of questions to understand their reaction after using a new type of AI.
              </p>

              {/* Testing cards */}
              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {[
                  {
                    n: "01",
                    stat: "78%",
                    insight: "Seeing the agent move made it feel understandable, but some wanted to steer it, not just prompt it.",
                    action: <>How do we make AI agents as immersive as a video game?</>,
                  },
                  {
                    n: "02",
                    stat: "16%",
                    insight: "Felt less intense than a regular chatbot, but handing over control still felt strange.",
                    action: <>How do we give users more perceived control?</>,
                  },
                  {
                    n: "03",
                    stat: "60%",
                    insight: "Wanted permanent manual mode. 80% of those users didn't understand why they needed an agent at all.",
                    action: <>How does onboarding set the right expectation?</>,
                  },
                  {
                    n: "04",
                    stat: "58%",
                    insight: "Haptic touch felt more in-control, but micro transactions raised real concern.",
                    action: <>Where&apos;s the line between controlled spending and automation?</>,
                  },
                ].map(({ n, stat, insight, action }) => (
                  <div key={n} className="flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110">
                    <div className="bg-lime-500/[0.04] px-5 py-4">
                      <p className="mb-2 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-lime-600">{stat}</p>
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-800">{insight}</p>
                    </div>
                    <div className="border-t border-white/40 bg-white/[0.22] px-5 py-4">
                      <p className="text-[0.82rem] leading-[1.65] text-zinc-700">{action}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reactions */}
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Some thinkable quotes</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-lime-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(132,204,22,0.18)]">
                  <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                    &ldquo;I feel like I am in the Scott Pilgrim world, the agent should be customizable.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl border border-lime-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(132,204,22,0.18)]">
                  <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                    &ldquo;I don&rsquo;t want to buy bitcoin.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl border border-lime-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(132,204,22,0.18)]">
                  <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                    &ldquo;What happens if it gets it wrong? I need to know I can undo it. I&rsquo;m not handing over my accounts to something I can&rsquo;t override.&rdquo;
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "solution",
          label: "THE SOLUTION",
          content: (
            <>
              <ReasoningPanels panels={[
                {
                  img: "/eidolon/dr1.png",
                  label: "01",
                  heading: "Color and type tuned for neurological calm",
                  points: [
                    { lead: "Green reduces cortisol", detail: "Green tones correlate with lower stress and help the brain reset between hard tasks. (APA, 2023)", bibRef: "#bib-apa" },
                    { lead: "Montserrat for warmth & legibility", detail: "Rounded forms feel approachable while staying clean and readable. 14% higher advice-following when typography reads as optimistic and clear. (Google, 2023)", bibRef: "#bib-google" },
                    { lead: "No pure white", detail: "Pure white causes halation for 50% of people with astigmatism. Off-white reduces eye fatigue and keeps users comfortable longer. (WCAG)" },
                  ],
                },
                {
                  img: "/eidolon/dr2.png",
                  label: "02",
                  heading: "A game HUD, not a dashboard — narrative over data",
                  points: [
                    { lead: "Information as story: 22x more memorable", detail: "Narrative beats raw data for recall, so the agent explains its reasoning as a story rather than a log. (Bruner, 1986)", bibRef: "#bib-bruner" },
                    { lead: "Persistent profile for spatial anchoring", detail: "A constant user anchor keeps orientation as flows get deeper. Gamified environments improve knowledge retention. (MIT Media Lab)", bibRef: "#bib-mit" },
                    { lead: "Low-color background reduces cognitive load", detail: "Muted backgrounds reduce extrinsic cognitive load so reasoning stands out. (NNg)", bibRef: "#bib-nng" },
                    { lead: "Ambient intelligence minimizes screen dependency", detail: "Surface only what is needed, when it is needed. Micro-cost shielding protects attention as a resource. (MIT Media Lab)", bibRef: "#bib-mit" },
                  ],
                },
                {
                  img: "/eidolon/dr3.png",
                  label: "03",
                  heading: "Multi-sensory confirmation — a signature the AI can't forge",
                  points: [
                    { lead: "Haptic + sound + visual = faster, stickier decisions", detail: "The brain merges multi-sensory information for faster decisions and stronger recall on critical actions. (Neuroscience, 2022)" },
                    { lead: "A gesture only humans can make", detail: "High-stakes actions require a human swipe. The agent cannot execute them autonomously, preserving human authority. (APA, 2023)", bibRef: "#bib-apa" },
                    { lead: "Green tint + purple for meaningful contrast", detail: "Green stays calm; purple signals consequence without panic. Color choice informed by symbolic cognitive associations. (Google Design)", bibRef: "#bib-google" },
                  ],
                },
                {
                  img: "/eidolon/dr4.png",
                  label: "04",
                  heading: "Human and AI solving problems together — trust through shared agency",
                  points: [
                    { lead: "AI shows confusion, users forgive more", detail: "Visible uncertainty increases forgiveness when the system fails. Seeing an agent's inner state builds more trust than a clean facade. (Robot Transparency, 2017)", bibRef: "#bib-robot" },
                    { lead: "User control, users respect AI more", detail: "Real agency builds long-term trust. Users who steer the AI rather than just receive from it report higher satisfaction. (MIT Media Lab)", bibRef: "#bib-mit" },
                    { lead: "Active participation reduces bias", detail: "When users interact rather than just receive, they project less bias onto the system and accept its outputs more critically. (ABX Lab, MIT)", bibRef: "#bib-mit" },
                  ],
                },
              ]} />

              <div className="mx-auto mt-19 w-full max-w-[min(520px,calc(100vw-1.5rem))]">
                <ProjectGalleryRow
                  images={[
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124040.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124046.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124058.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124113.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124124.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125858.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125917.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125948.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130218.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130315.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130406.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130518.png"),
                    encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130530.png"),
                  ]}
                  theme="lime"
                  glassVariant="liquid"
                  frameSize="phone"
                  phoneHeight="short"
                  navSize="sm"
                  slideImageFit="contain"
                  slidePadding="default"
                  enableLightbox
                  className="my-0 w-full"
                />
              </div>
              <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                Figma mockups
              </p>
            </>
          ),
        },
        {
          id: "video",
          label: "FINAL PRODUCT",
          hideFromNav: true,
          content: (
            <>
              <div className="mx-auto w-full max-w-[min(640px,calc(100vw-1.5rem))]">
                <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]"
                    aria-hidden
                  />
                  <div
                    className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                    aria-hidden
                  />
                  <div className="relative p-3 sm:p-4 md:p-5">
                    <AutoPlayVideo
                      controls
                      muted
                      className="h-[min(92dvh,960px)] w-full rounded-xl bg-black/[0.02] object-contain ring-1 ring-black/[0.06]"
                      src="/eidolon/final-product.mp4"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
                React 19 · Vite 6 · Tailwind CSS 4 · Motion · Gemini 3 Flash Preview · Google Cloud Run
              </p>
            </>
          ),
        },
        {
          id: "engineering",
          label: "ENGINEERING",
          content: (
            <>
              <p className="mb-8 w-full text-[0.95rem] leading-[1.75] text-zinc-600">
                A slice of Eidolon was built out to play around with current AI image-generation capabilities. The internet isn&apos;t ready for a new face, but AI is.
              </p>
              {/* Architecture diagram */}
              <div className="mb-8 flex flex-col items-center gap-5">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {/* Google Cloud Run */}
                  <div className="rounded-xl border border-lime-400/50 bg-transparent px-4 py-3 text-center shadow-[0_0_20px_-8px_rgba(132,204,22,0.20)]">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime-600/70">Deploy</p>
                    <p className="mt-0.5 text-[0.8rem] font-medium text-zinc-800">Google Cloud Run</p>
                    <p className="text-[0.65rem] text-zinc-400">hosts static build</p>
                  </div>

                  <span className="font-mono text-[0.9rem] text-zinc-300">→</span>

                  {/* Browser */}
                  <div className="rounded-xl border border-lime-400/55 bg-transparent px-4 py-3 text-center shadow-[0_0_24px_-10px_rgba(132,204,22,0.22)]">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime-600/70">Client</p>
                    <p className="mt-0.5 text-[0.8rem] font-medium text-zinc-800">Browser / React 19</p>
                    <p className="font-mono text-[0.65rem] text-zinc-400">Vite <span className="text-lime-600/60">define</span> → API key at build</p>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <span className="font-mono text-[0.65rem] text-zinc-400">@google/genai SDK</span>
                    <span className="font-mono text-[0.9rem] text-zinc-300">→</span>
                  </div>

                  {/* Gemini */}
                  <div className="rounded-xl border border-lime-400/55 bg-lime-500/[0.06] px-4 py-3 text-center shadow-[0_0_24px_-10px_rgba(132,204,22,0.22)]">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime-600/70">AI</p>
                    <p className="mt-0.5 text-[0.8rem] font-medium text-zinc-800">Gemini 3 Flash</p>
                    <p className="text-[0.65rem] text-zinc-400">Google AI Studio</p>
                  </div>
                </div>

                {/* Sprint note */}
                <div className="flex items-start gap-2 rounded-xl border border-amber-300/40 bg-amber-50/40 px-4 py-3">
                  <span className="mt-px font-mono text-[0.65rem] text-amber-600/70">!</span>
                  <p className="text-[0.72rem] leading-relaxed text-zinc-500">Sprint decision — API key injected at build time, not proxied. Production would route through a serverless edge function.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child]:col-start-2">
                {[
                  {
                    category: "Frontend",
                    items: [
                      { name: "React 19", detail: "Single Page Application" },
                      { name: "Vite 6", detail: "Build tool" },
                      { name: "TypeScript", detail: "Type-safe code" },
                    ],
                  },
                  {
                    category: "Styling & Animation",
                    items: [
                      { name: "Tailwind CSS 4", detail: "Utility-first styling" },
                      { name: "Motion", detail: "Character transitions & UI effects" },
                      { name: "Lucide React", detail: "Interface icons" },
                    ],
                  },
                  {
                    category: "AI Integration",
                    items: [
                      { name: "Gemini 3 Flash Preview", detail: "@google/genai SDK" },
                      { name: "Dynamic AI Logic", detail: "Dialogue & state transitions, Idle, Walking, Talking" },
                    ],
                  },
                  {
                    category: "Infrastructure",
                    items: [
                      { name: "Google Cloud Run", detail: "Hosts the static build output" },
                      { name: "Google AI Studio", detail: "Built and deployed from AI Studio" },
                    ],
                  },
                ].map(({ category, items }) => (
                  <div
                    key={category}
                    className={
                      category === "Styling & Animation"
                        ? "rounded-2xl bg-lime-500/[0.08] p-6 ring-1 ring-lime-300/35"
                        : "rounded-2xl border border-white/55 bg-white/[0.14] p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                    }
                  >
                    <p className={`mb-4 font-mono text-[9px] uppercase tracking-[0.18em] ${category === "Styling & Animation" ? "text-lime-700/70" : "text-zinc-400"}`}>
                      {category}
                    </p>
                    <ul className="space-y-3">
                      {items.map(({ name, detail }) => (
                        <li key={name}>
                          <p className={`text-[0.85rem] font-medium leading-snug ${category === "Styling & Animation" ? "text-zinc-950" : "text-zinc-700"}`}>{name}</p>
                          <p className="text-[0.72rem] leading-snug text-zinc-400">{detail}</p>
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
          id: "impact",
          label: "IMPACT",
          content: (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { stat: "80%", label: "said the agent felt legible in motion" },
                  { stat: "60%", label: "wanted more agency, validating manual mode" },
                  { stat: "58%", label: "gained confidence through haptic confirmation" },
                ].map(({ stat, label }) => (
                  <div
                    key={stat}
                    className={
                      stat === "80%"
                        ? "rounded-2xl bg-lime-500/[0.08] p-6 ring-1 ring-lime-300/35"
                        : "rounded-2xl border border-white/55 bg-white/[0.14] p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                    }
                  >
                    <p className="mb-1 font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] text-lime-700">{stat}</p>
                    <p className={`text-[0.82rem] font-medium ${stat === "80%" ? "text-lime-950/80" : "text-zinc-600"}`}>{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-lime-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(132,204,22,0.18)]">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-lime-700/70">Next Version</p>
                <ol className="mt-3 space-y-2.5 text-[0.82rem] leading-relaxed text-zinc-600">
                  {[
                    { n: "01", lead: "Customizable character.", body: "Full skin, style, and personality options so the agent feels like yours." },
                    { n: "02", lead: "Longer setup with diagrams.", body: "A visual onboarding that explains why this kind of app matters, not just what it does." },
                    { n: "03", lead: "Override system beyond haptics.", body: "A visible, always-accessible layer so users can halt or redirect the agent at any point." },
                    { n: "04", lead: "All spending requires a response.", body: "Every transaction waits for an explicit user confirmation before it goes through." },
                    { n: "05", lead: "Future: make it a video game.", body: "A full game loop with quests, rewards, and progression could make AI-assisted living genuinely fun." },
                  ].map(({ n, lead, body }) => (
                    <li key={n} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-lime-600">{n}</span>
                      <p><span className="font-medium text-zinc-800">{lead}</span> {body}</p>
                    </li>
                  ))}
                </ol>
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
                  title: "The ethical frame must come first",
                  body: "Understanding what pitfalls a user runs into and what they fear and like gives designers a better chance to give people comfort in times of new software.",
                },
                {
                  title: "Transparency is the product",
                  body: "Users distrusted the invisibility of the agent’s reasoning, not the AI itself. Making logic visible removed that distrust.",
                },
                {
                  title: "One week is enough to validate a reaction",
                  body: "While I was able to quickly mock up a new idea, real testing to ensure a user feels comfortable in a space requires more time to integrate feedback.",
                },
              ].map((card, i) => (
                <li key={card.title}>
                  <div className={`flex gap-5 rounded-2xl p-6 ${i === 1 ? "bg-lime-500/[0.08] ring-1 ring-lime-300/35" : "border border-white/55 bg-white/[0.14] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"}`}>
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-zinc-400">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700/70">{card.title}</p>
                      <p className={`text-[0.9rem] font-medium leading-[1.65] ${i === 1 ? "text-lime-950/80" : "text-zinc-700"}`}>{card.body}</p>
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
                <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Impact</p>
              </div>

              <div className="overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.55)] backdrop-blur-xl backdrop-saturate-110">
                {[
                  {
                    n: "01",
                    pillar: "Trust Through Transparency",
                    interventions: ["2D Negotiation Canvas", "Data Provenance HUD", "Pre-Action Verification"],
                    stat: "78%",
                    impact: "said seeing the agent move made them understand AI intent. Visible reasoning builds trust faster than any copy.",
                  },
                  {
                    n: "02",
                    pillar: "Cognitive Load Reduction",
                    interventions: ["Palace Layout", "Recursive Sanitizer", "Noise Filtration"],
                    stat: "16%",
                    impact: "found it less intense than a regular chatbot. Palace layout and noise filtration reduce fatigue for all user types.",
                  },
                  {
                    n: "03",
                    pillar: "Environment Sanitation",
                    interventions: ["Safety Guardrails", "Node PRUNE-ing", "Deep Clean Protocols"],
                    stat: "60%",
                    impact: "wanted permanent manual mode, signaling the need for clear environment control. Guardrails and deep clean protocols reduce digital anxiety.",
                  },
                  {
                    n: "04",
                    pillar: "Human Authority & Safety",
                    interventions: ["Cost Shielding", "Manual Override", "Haptic Authorization"],
                    stat: "58%",
                    impact: "said haptic touch gave them more perceived control. Multi-sensory confirmation keeps users connected, not automated out.",
                  },
                ].map(({ n, pillar, interventions, stat, impact }, i, arr) => (
                  <div
                    key={pillar}
                    className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr] ${i < arr.length - 1 ? "border-b border-white/40" : ""}`}
                  >
                    {/* Pillar */}
                    <div className="flex items-start gap-3 bg-white/[0.18] px-5 py-5 md:border-r md:border-white/40">
                      <span className="mt-0.5 font-mono text-[0.65rem] text-lime-500/60">{n}</span>
                      <p className="text-[0.85rem] font-medium leading-snug text-zinc-700">{pillar}</p>
                    </div>
                    {/* Interventions */}
                    <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-white/40">
                      {interventions.map((tag) => (
                        <span key={tag} className="rounded-full bg-lime-500/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-lime-800 ring-1 ring-lime-300/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Impact */}
                    <div className="px-5 py-5">
                      <p className="mb-1.5 font-mono text-[1.25rem] font-medium leading-none tracking-[-0.03em] text-lime-600">{stat}</p>
                      <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-3 mt-19 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Ethical considerations
              </p>
              <p className="w-full text-left text-[0.95rem] leading-[1.75] text-zinc-600">
                AI raises real concerns around surveillance capitalism, algorithmic manipulation, and concentrated data power. Rather than treating AI as neutral, this project introduces a dual-agent framework where a personal AI advocates for the user by making algorithmic influence visible and limiting unnecessary data exchange. Trust must be constructed through transparency and user autonomy, not convenience alone.
              </p>

              <div className="mt-19 rounded-2xl border-[0.5px] border-white/70 bg-white/[0.26] p-5 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Tradeoff made</p>
                <p className="text-[0.88rem] leading-relaxed text-zinc-600">
                  Gemini Flash was chosen for sub-2-second responses and zero infrastructure overhead within a 1-week sprint. The cost: every agent interaction routes through Google&apos;s servers, a real tension for a trust-focused product. A production version would proxy through a serverless edge function or run an on-device quantized model.
                </p>
              </div>
            </>
          ),
        },
        {
          id: "spritesheet",
          label: "SPRITESHEET",
          hideFromNav: true,
          content: (
            <>
              <div className="mx-auto w-full max-w-[min(1100px,calc(100vw-1.5rem))]">
                <div className="rounded-2xl border-[0.5px] border-zinc-200/70 bg-white p-3 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] sm:p-4 md:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_c0ssivc0ssivc0ss.png")} alt="Eidolon sprite 1" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_hd2vpxhd2vpxhd2v.png")} alt="Eidolon sprite 2" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_jl181pjl181pjl18.png")} alt="Eidolon sprite 3" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_q5wg5mq5wg5mq5wg.png")} alt="Eidolon sprite 4" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_rkwzqdrkwzqdrkwz.png")} alt="Eidolon sprite 5" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_vux2l0vux2l0vux2.png")} alt="Eidolon sprite 6" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" />
                  </div>
                </div>
                <p className="mt-3 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">Made with Gemini</p>
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
                    Brennan-Marquez, Kiel, and Stephen Maher. &quot;Micro-Costs.&quot; Georgetown Law
                    Journal. May 2025.{" "}
                    <a
                      href="https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2025/05/Brennan-Marquez_Maher_Micro-Costs.pdf"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Liao, Yan, et al. &quot;The Influence of Interface Layout and Color on the User
                    Experience of Older Adults.&quot; International Journal of Environmental Research
                    and Public Health 19, no. 15 (2022): 9251.{" "}
                    <a
                      href="https://www.mdpi.com/1660-4601/19/15/9251"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Nass, Clifford, Jonathan Steuer, and Ellen R. Tauber. &quot;Computers are Social
                    Actors.&quot; CHI &apos;94: Proceedings of the SIGCHI Conference on Human Factors in
                    Computing Systems.{" "}
                    <a
                      href="https://www.researchgate.net/publication/221517042_Computer_are_social_actors"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Schroeter, Ronald, et al. &quot;Agent vs. Avatar: Comparing Embodied Conversational
                    Agents Concerning Characteristics of the Uncanny Valley.&quot; ResearchGate. 2020.{" "}
                    <a
                      href="https://www.researchgate.net/publication/344153513_Paper_Presentation_Agent_vs_Avatar_-_Comparing_Embodied_Conversational_Agents_Concerning_Characteristics_of_the_Uncanny_Valley"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Song, Hyunjin, and Norbert Schwarz. &quot;If It&apos;s Hard to Read, It&apos;s Hard to Do:
                    Processing Fluency Affects Effort Prediction and Motivation.&quot; Psychological
                    Science (2008).{" "}
                    <a
                      href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2008.02189.x"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    .
                  </li>
                  <li id="bib-robot" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Wortham, Robert H. &quot;Robot Transparency: Improving Understanding of Intelligent
                    Behaviour for Designers and Users.&quot; ResearchGate. 2017.{" "}
                    <a
                      href="https://www.researchgate.net/publication/318538795_Robot_Transparency_Improving_Understanding_of_Intelligent_Behaviour_for_Designers_and_Users"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Anthropic. &quot;Model Context Protocol.&quot; Anthropic News. 2024.{" "}
                    <a
                      href="https://www.anthropic.com/news/model-context-protocol"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-apa" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    APA. &quot;Stress in America 2025.&quot; American Psychological Association. 2025.{" "}
                    <a
                      href="https://www.apa.org/pubs/reports/stress-in-america/2025"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-gartner" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Gartner. &quot;Gartner Predicts Search Engine Volume Will Drop 25% by 2026.&quot; Gartner
                    Press Release. February 19, 2024.{" "}
                    <a
                      href="https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-google" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Google Design. &quot;Gradients: Designing the Visual Language of Gemini AI.&quot; Google
                    Design. 2024.{" "}
                    <a
                      href="https://design.google/library/gemini-ai-visual-design"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-mit" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    MIT Media Lab. &quot;Ambient Intelligence Research Group.&quot; MIT Media Lab.{" "}
                    <a
                      href="https://ocw.mit.edu/courses/mas-961-ambient-intelligence-spring-2005/16025b4375f1704ad8a1d444bd341db6_week1_pm_intro.pdf"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-pew" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Pew Research Center. &quot;Growing Public Concern About the Role of Artificial
                    Intelligence in Daily Life.&quot; Pew Research. August 28, 2023.{" "}
                    <a
                      href="https://www.pewresearch.org/science/2023/08/28/growing-public-concern-about-the-role-of-artificial-intelligence-in-daily-life/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Stanford Institute for Human-Centered AI. &quot;Demographic Stereotypes in Text-to-Image
                    Generation.&quot; Stanford HAI. 2024.{" "}
                    <a
                      href="https://hai.stanford.edu/policy/policy-brief-demographic-stereotypes-text-image-generation"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Apple. &quot;Human Interface Guidelines: Materials (Liquid Glass).&quot; Apple Developer.{" "}
                    <a
                      href="https://developer.apple.com/design/human-interface-guidelines/materials"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-nng" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Aesthetic-Usability Effect.&quot; NN/g.{" "}
                    <a
                      href="https://www.nngroup.com/articles/aesthetic-usability-effect/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Nielsen Norman Group. &quot;Designing UX for Seniors.&quot; NN/g.{" "}
                    <a
                      href="https://www.nngroup.com/reports/senior-citizens-on-the-web/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li id="bib-bruner" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Bruner, Jerome. <em>Actual Minds, Possible Worlds.</em> Harvard University Press, 1986. Narrative framing improves information recall by 72% vs. raw data presentation.
                  </li>
                  <li id="bib-edelman" className="text-[0.8rem] leading-relaxed text-zinc-500">
                    Edelman. &quot;2024 Edelman AI Trust Report.&quot; Edelman. 2024.{" "}
                    <a
                      href="https://www.edelman.com/trust/2024/trust-barometer"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    . 67% of global respondents cite AI-generated misinformation as a top societal threat requiring active content sanitation.
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
