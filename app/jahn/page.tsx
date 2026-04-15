import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";

const SLUG = "jahn";
const CATEGORY = "product-design";

const TITLE = "JAHN";
const DESCRIPTION = "Designing a portfolio site true to Helmut Jahn's design language.";
const HERO = "/jahn/jahn image.jpg";
const HERO_VIDEO = "/jahn/jahn.mp4";

export const metadata: Metadata = {
  title: TITLE,
  description: `Failenn Aselta — ${TITLE}. ${DESCRIPTION}`,
};

export default function JahnPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "video-carousel", videos: [HERO_VIDEO], size: "wide", controls: true }}
      heroBelow={
        <div className="flex justify-center">
          <a
            href="https://jahn.studio/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-50/80 px-4 py-2 text-[0.85rem] font-medium text-sky-700 ring-1 ring-sky-200/60 transition-colors hover:bg-sky-100/80"
          >
            Visit `jahn.studio`
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      }
      challengeSummary="Design a portfolio site that stays true to Helmut Jahn's design language."
      meta={{
        timeline: "2 Months",
        roles: ["Designer"],
        team: ["Benjamin Luebkeman", "Failenn Aselta"],
        tools: ["Wordpress"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                The Rundown
              </h2>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                The Jahn Studio site functions as the digital identity and portfolio for the
                internationally recognized architecture practice Jahn, showcasing their global work
                and design philosophy. The site highlights major built and conceptual projects
                across regions and typologies, communicates the studio&apos;s legacy of integrated,
                innovative design, and presents its collaborative culture, leadership, and ideas in
                a clear, engaging format. It also serves as a hub for news, sustainability
                initiatives, and contact pathways, inviting visitors to explore the firm&apos;s
                impact on cities and communities worldwide.
              </p>
            </>
          ),
        },
        {
          id: "research",
          label: "RESEARCH",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Target User
              </h2>
              <PersonaCards
                accent="sky"
                personas={JSON.stringify([
                  {
                    name: "John",
                    photo: "/jahn/Gemini_Generated_Image_7mke7u7mke7u7mke.png",
                    age: "58",
                    role: "Real Estate Developer",
                    bullets: [
                      "Can’t quickly filter the portfolio to residential work (too much scanning, not enough signal).",
                      "Project pages bury the specifics he cares about: scope, scale, location, and outcomes.",
                      "Hard to compare projects side-by-side to justify hiring decisions to partners and investors.",
                    ],
                  },
                ])}
                rightColumnHeading="Frustrations"
                hmw="How might we showcase Helmut Jahn's work in a way that is true to its design?"
                hmw-answer="By using a minimalist style with light levels of abstraction."
              />
            </>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <>
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Mobile Examples
              </h2>
              <div className="mx-auto mt-6 grid w-full max-w-[min(980px,100%)] grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {[
                  "https://framerusercontent.com/images/fIwcTj0TZZau37A4p1hiLPUiA.png?width=1490&height=2848",
                  "https://framerusercontent.com/images/AE3ARQV06UC5iXP0qfQWE9mQStU.png?width=1055&height=2253",
                ].map((src, i) => (
                  <div
                    key={src}
                    className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]"
                      aria-hidden
                    />
                    <div
                      className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                      aria-hidden
                    />
                    <div className="relative aspect-[9/19] w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt="Mobile UI example"
                        className={
                          i === 1
                            ? "absolute inset-0 h-full w-full object-contain px-8 py-11 sm:px-9 sm:py-12 md:px-10 md:py-14"
                            : "absolute inset-0 h-full w-full object-contain px-2.5 py-4 sm:px-3 md:px-3.5 md:py-5"
                        }
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "considerations",
          label: "CONSIDERATIONS",
          content: (
            <>
              <ol className="mt-2 w-full space-y-4">
                {[
                  {
                    title: "Constraint",
                    body: "Legacy constraints aren’t limitations — they’re the brief.",
                  },
                  {
                    title: "Discipline",
                    body: "Every decision had to answer to Helmut Jahn’s visual language first — that rigor sharpened my approach to brand fidelity.",
                  },
                  {
                    title: "Next",
                    body: "Next iteration: leave WordPress and ship a custom build. The minimalist direction was right — the platform was the ceiling.",
                  },
                ].map((card, i) => (
                  <li key={card.title}>
                    <div className="flex gap-5 rounded-2xl bg-sky-50/80 p-6 ring-1 ring-sky-200/60">
                      <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-sky-600/90">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-800/70">
                          {card.title}
                        </p>
                        <p className="text-[0.9rem] leading-[1.65] text-sky-950/80">{card.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ),
        },
      ]}
    />
  );
}
