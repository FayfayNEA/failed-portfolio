import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { ImageLightbox } from "@/components/image-lightbox";

const SLUG = "nightterrors";
const CATEGORY = "product-design";

const TITLE = "N1ghtterrors";
const DESCRIPTION = "Design a website that captures the essence of N1ghtterrors clothing line. ";
const HERO = "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg";

// ── Engineering diagram constants (matching Buddy pattern) ───────────────────

const DIAGRAM_IMG_CLASS =
  "block h-auto w-full rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]";
const DIAGRAM_WRAP_CLASS = "overflow-hidden !rounded-2xl";

const KEY_LEARNINGS = [
  {
    heading: "Key Learning — Vanilla Constraints",
    body: "Building with Node.js and Vanilla HTML/CSS instead of a framework enforced a deep understanding of the fundamentals and produced the raw Y2K aesthetic the brand demanded.",
  },
  {
    heading: "Key Learning — AI-Assisted Iteration",
    body: "Developing before AI tooling was widespread meant the architecture was sound before Gemini and Cursor accelerated the final iteration — the foundation never had to be rethought.",
  },
  {
    heading: "Key Learning — Diagram-First Planning",
    body: "Writing the pseudocode and Mermaid flow before touching the implementation forced clarity around stock-check state transitions and cart logic — decisions that would have been expensive to change later.",
  },
];

const RESEARCH_LEARNINGS = [
  {
    heading: "Key Learning — Navigation Visibility",
    body: "Feedback made it obvious: the cart button read as an interaction affordance, but the menu did not. I learned to make entry points loud even when the aesthetic is intentionally abrasive.",
  },
  {
    heading: "Key Learning — Typeface Legibility",
    body: "Users wanted the edge without the strain. The type choice matched the brand, but the reading experience needed guardrails — contrast, sizing, and a calmer hierarchy in key moments.",
  },
  {
    heading: "Key Learning — Writing as Guidance",
    body: "The strongest improvements came from small pieces of copy: a cue to keep scrolling, a hint that a control is interactive, a line that reframes what to do next. The writing became the UX.",
  },
];

const CONCLUSION_CARDS = [
  {
    heading: "Conclusion — Guidance Wins",
    body: "Unconventional design still needs guidance — the user should feel provoked, not lost.",
  },
  {
    heading: "Conclusion — Test Early",
    body: "Legibility and navigation have to be pressure-tested early, before the visuals harden into “the vibe.”",
  },
  {
    heading: "Conclusion — Clean Entry Points",
    body: "Strangeness works when the entry points stay clean: strong affordances, clear state, minimal confusion.",
  },
];

// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: TITLE,
  description: `Failenn Aselta — ${TITLE}. ${DESCRIPTION}`,
};

export default function NightterrorsPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{
        kind: "video-carousel",
        videos: ["/nightterrors/n1ghtterrors%20demo.mp4", "/nightterrors/n1ghtterrors%20demo2.mp4"],
        size: "wide",
      }}
      heroBelow={
        <div className="flex justify-center">
          <a
            href="https://www.n1ghtterrors.com/shop"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-[0.85rem] font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-zinc-900"
          >
            Shop n1ghtterrors
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      }
      challengeSummary="Ship a clothing line end-to-end — product, brand, and digital experience."
      meta={{
        timeline: "3 years",
        roles: [
          "Photographer",
          "Videographer",
          "UX",
          "Software Developer",
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
                The Rundown
              </h2>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                N1ghtterrors emerged in response to a call to reintroduce provocation design
                culture. Conceived as a clothing line rooted in the idea of sublimity, the project
                explores psychological extremes through narrative-driven graphics. Each garment
                presents a visual meditation on unseen instability, juxtaposing figures such as
                Donald Trump and Joe Biden with allegorical references to Lucifer. The imagery
                examines themes of power, duality, ascent, and collapse, prompting reflection on
                broader questions surrounding civilization and collective ambition. Rather than
                prescribing a singular interpretation, N1ghtterrors invites viewers to confront
                their own perceptions. The work ultimately asks not what is depicted, but what the
                audience chooses to see.
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
                personas={JSON.stringify([
                  {
                    name: "Isabella",
                    photo: "/nightterrors/Gemini_Generated_Image_r1bx8xr1bx8xr1bx.png",
                    age: "21",
                    role: "Environmental Studies Student",
                    bullets: [
                      "The site feels intentionally chaotic, but key controls (menu vs cart) aren’t equally discoverable.",
                      "The typeface matches the brand, yet long reading moments become tiring without clearer hierarchy.",
                      "Unconventional interactions are exciting, but she needs small cues to understand what’s clickable and what comes next.",
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
              

              <div className="my-14 h-px w-full bg-zinc-200/50" />

              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                User Feedback
              </h2>
              <p className="mb-6 max-w-[640px] text-[0.85rem] leading-relaxed text-zinc-500">
                Diagrams created with Gemini and Google Sheets
              </p>

              <ProjectGalleryRow
                images={[
                  "https://framerusercontent.com/images/ADS3bcmUYtUWrDQzinRQQ9pFZc.png?width=600&height=371",
                  "https://framerusercontent.com/images/vbi47xczwLq81S9jqnEwEwiuFc.png?width=500&height=300",
                  "https://framerusercontent.com/images/kxUNY0ZJVJHxvOQE1l5pAByFaB8.png?width=600&height=371",
                ]}
                theme="white"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
              />

              <blockquote className="mx-auto my-8 max-w-[min(52rem,100%)] border-l-2 border-zinc-200 pl-5 text-[0.95rem] italic leading-[1.75] text-zinc-500">
                &ldquo;What menu? But I see the cart button. I would make it a bit more noticeable. It wasn&apos;t clear to me what it was.&rdquo; — User 1
              </blockquote>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/6svTuucpn3TuiSK2BT6UlbIBNU.png?width=2304&height=1424"
                alt="User feedback survey results"
                className="mx-auto my-8 w-full max-w-[min(920px,calc(100vw-1.5rem))] rounded-2xl object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
              />

              <blockquote className="mx-auto my-8 max-w-[min(52rem,100%)] border-l-2 border-zinc-200 pl-5 text-[0.95rem] italic leading-[1.75] text-zinc-500">
                &ldquo;My big brain and internet training. Aka an old person might not know but a young person will figure it out fs.&rdquo; — User 6
              </blockquote>

              

              <div className="mt-10 space-y-4">
                {RESEARCH_LEARNINGS.map(({ heading, body }) => (
                  <div
                    key={heading}
                    className="rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      {heading}
                    </p>
                    <p className="text-[0.85rem] leading-relaxed text-zinc-800">{body}</p>
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
              <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                Pseudocode &amp; Code for Checking Stock
              </h2>
              <p className="mb-8 max-w-[640px] text-[0.85rem] leading-relaxed text-zinc-500">
                Diagram created with Gemini code for Figma Mermaid Plugin &nbsp;·&nbsp; Code created
                with Vanilla HTML &amp; CSS and Node.js
              </p>

              {/* Diagrams — mirroring Buddy's flex layout */}
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

          
              {/* Key learnings — zinc/dark, mirroring Buddy's violet cards */}
              <div className="space-y-4">
                {KEY_LEARNINGS.map(({ heading, body }) => (
                  <div
                    key={heading}
                    className="rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      {heading}
                    </p>
                    <p className="text-[0.85rem] leading-relaxed text-zinc-800">{body}</p>
                  </div>
                ))}
              </div>
            </>
          ),
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
            </>
          ),
        },
        {
          id: "considerations",
          label: "Conclusion",
          content: (
            <>
              <div className="space-y-4 mb-12">
                {CONCLUSION_CARDS.map(({ heading, body }) => (
                  <div
                    key={heading}
                    className="rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70"
                  >
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      {heading}
                    </p>
                    <p className="text-[0.85rem] leading-relaxed text-zinc-800">{body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                For the next iteration, I would resolve the navigation earlier in the process and
                pressure-test the typeface legibility before release. The site earned its strangeness.
                It just needed cleaner entry points.
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
            </>
          ),
        },
      ]}
    />
  );
}
