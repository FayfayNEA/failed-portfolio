import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ManualProjectPage } from "@/components/manual-project-page";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { getContentBySlug } from "@/lib/content";

// ─── EDIT THESE ────────────────────────────────────────────────────────────────

const TITLE       = "Eidolon";
const DESCRIPTION = "Creating a visual-driven AI agent to help users trust AI agents.";
const HERO_IMAGE  = "https://framerusercontent.com/assets/raPqzNvYI1Sd18DxoUcU8CBu2vE.mp4";
const CHALLENGE   = "Design the internet for when it is 98% AI and 2% human.";

const METADATA = {
  timeline: "1 week",
  roles:    ["Full Stack Engineer", "Product Designer"],
  team:     ["Failenn Aselta"],
  tools:    ["Figma", "Gemini", "Sitch", "Google AI Studio", "React", "Tailwind"],
};

// ───────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = { title: TITLE, description: `Failenn Aselta — ${DESCRIPTION}` };

export default async function EidolonPage() {
  const page = await getContentBySlug("eidolon");
  if (!page) notFound();

  return (
    <ManualProjectPage
      title={TITLE}
      slug="eidolon"
      category="product-design"
      hero={{ kind: "video", src: HERO_IMAGE }}
      challengeSummary={CHALLENGE}
      meta={METADATA}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className="mb-4 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                The Rundown
              </h2>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                What happens when the internet is no longer human-navigated, but optimized for
                machine-to-machine interaction? Some users may prefer direct, human-led engagement
                and remain skeptical of automation, while others may welcome AI assistance. The
                future internet will likely be a hybrid space, allowing individuals to choose how
                much control they delegate and how much they retain. Eidolon uses AI as a visual
                tool to not only showcase its actions, but to make it an easier place for those who
                fear its new shape.
              </p>
              <div className="relative z-[1] px-4 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10">
                <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55 bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]"
                    aria-hidden
                  />
                  <div
                    className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                    aria-hidden
                  />

                  <div className="relative flex min-h-0 flex-1 flex-row gap-1 p-3 sm:p-4 md:gap-2 md:p-5">
                    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center md:justify-end">
                      <div className="relative flex items-center justify-center px-2 py-3 sm:px-3 sm:py-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/eidolon/diagram 1.png"
                          alt="Illustration: ineffective team collaboration"
                          className="max-h-[min(40vh,440px)] w-full max-w-full object-contain md:max-h-[min(44vh,500px)]"
                        />
                      </div>
                    </div>
                    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center md:justify-start">
                      <div className="relative flex items-center justify-center px-2 py-3 sm:px-3 sm:py-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/eidolon/diagram 2.png"
                          alt="Diagram: aligning inputs through a shared focal point"
                          className="max-h-[min(40vh,440px)] w-full max-w-full object-contain md:max-h-[min(44vh,500px)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "research",
          label: "THE RESEARCH",
          content: (
            <>
              <h2 className="mb-6 max-w-[min(44rem,100%)] text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950 md:mb-8">
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
                    bullets: [
                      'Significant difficulty grasping the mechanics and utility of AI agents amidst a rapidly shifting technological landscape.',
                      "A deep longing for consistency and stability in a world that feels increasingly volatile due to constant digital evolution.",
                      "A strong personal preference for human-led processes and a reluctance to surrender control or reliance to automated systems.",
                    ],
                  },
                  {
                    name: "Ashleigh",
                    photo: "/eidolon/ashleigh.png",
                    age: "22",
                    role: "Tech Enthusiast",
                    bullets: [
                      'Significant concern regarding the accuracy of AI-generated information and the potential for "hallucinations" in critical planning.',
                      "A persistent desire for greater transparency to bridge the gap between AI outputs and a clear understanding of how the technology actually works.",
                      "The mental tax of wanting to streamline personal tasks (like vacations and social media) while feeling forced to double-check AI work for errors.",
                    ],
                  },
                ])}
                hmw="How might we improve trust in AI and decrease cognitive load?"
                hmw-answer="By developing agents that not only showcase their interactions visually but clean up interfaces to make the web simpler."
              />
            </>
          ),
        },
        {
          id: "case-studies",
          label: "CASE STUDIES",
          content: (
            <>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                The low-fidelity iteration of this project was developed efficiently, as interface
                conventions within AI platforms and video game systems are well established and
                supported by substantial research. I conducted comprehensive analysis of current
                large language models to inform the layout strategy, synthesizing industry best
                practices and identifying key strengths to integrate into the design.
              </p>
              {/* Narrow centered column + phone aspect frame so portrait shots fill width (no wide letterboxing). */}
              <div className="mx-auto my-10 w-full max-w-[min(560px,calc(100vw-0.75rem))]">
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
            </>
          ),
        },
        {
          id: "solution",
          label: "THE SOLUTION",
          content: (
            <>
              <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                Low-Fi Wireframes
              </h2>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Early Drawings
              </p>

              <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))]">
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 3 of 8.png")}
                    alt="Early drawing — page 3"
                    className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 4 of 8.png")}
                    alt="Early drawing — page 4"
                    className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI("/eidolon/Book 26 Jan 2026.pdf - Page 5 of 8.png")}
                    alt="Early drawing — page 5"
                    className="mx-auto h-[min(56dvh,560px)] w-full rounded-2xl border-[0.5px] border-zinc-200/70 bg-white object-contain shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-14">
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

                <div className="mx-auto mt-4 grid w-full max-w-[min(800px,calc(100vw-1.5rem))] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                  <ProjectGalleryRow
                    images={[
                      encodeURI("/eidolon/screen 1 of manual.png"),
                      encodeURI("/eidolon/screen 2 of manual.png"),
                      encodeURI("/eidolon/screen 3 of manual.png"),
                      encodeURI("/eidolon/screen 4 of manual.png"),
                    ]}
                    theme="lime"
                    glassVariant="liquid"
                    frameSize="phone"
                    slideImageFit="contain"
                    slidePadding="default"
                    className="my-0 w-full"
                  />

                  <ProjectGalleryRow
                    images={[
                      encodeURI("/eidolon/screen 1 of automatic.png"),
                      encodeURI("/eidolon/screen 2 of automatic.png"),
                      encodeURI("/eidolon/screen 3 of automatic.png"),
                      encodeURI("/eidolon/screen 4 of automatic.png"),
                      encodeURI("/eidolon/screen 5 of automatic.png"),
                      encodeURI("/eidolon/screen 6 of automatic.png"),
                    ]}
                    theme="lime"
                    glassVariant="liquid"
                    frameSize="phone"
                    slideImageFit="contain"
                    slidePadding="default"
                    className="my-0 w-full"
                  />
                </div>

                <div className="mx-auto mt-8 grid w-full max-w-[min(1100px,calc(100vw-1.5rem))] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
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
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700/80">
                        Cindy flow
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={encodeURI("/eidolon/cindys flow.png")}
                        alt="Cindy flow"
                        className="w-full rounded-xl bg-white object-contain ring-1 ring-black/[0.06]"
                        loading="lazy"
                      />
                    </div>
                  </div>

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
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700/80">
                        Ashleigh flow
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={encodeURI("/eidolon/ashleighs flow.png")}
                        alt="Ashleigh flow"
                        className="w-full rounded-xl bg-white object-contain ring-1 ring-black/[0.06]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <h2 className="mb-2 font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950">
                    Character Creation
                  </h2>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Anthropomorphic Trust
                  </p>
                  

                  <div className="mx-auto w-full max-w-[min(800px,calc(100vw-1.5rem))]">
                    <div className="relative isolate overflow-hidden rounded-2xl border-[0.5px] border-zinc-200/70 bg-white shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-1 ring-black/[0.06]">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-white/[0.02]"
                        aria-hidden
                      />
                      <div
                        className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                        aria-hidden
                      />
                      <div className="relative p-4 sm:p-5 md:p-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={encodeURI("/eidolon/items (5).png")}
                          alt="Character creation diagram"
                          className="w-full rounded-xl bg-white object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-6 w-full max-w-[min(1100px,calc(100vw-1.5rem))]">
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
                        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={encodeURI("/eidolon/b&w 1.png")}
                            alt="Character creation — black and white"
                            className="mx-auto h-[min(56dvh,560px)] w-full rounded-xl object-contain"
                            loading="lazy"
                          />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={encodeURI("/eidolon/color (2).png")}
                            alt="Character creation — color variant 2"
                            className="mx-auto h-[min(56dvh,560px)] w-full rounded-xl object-contain"
                            loading="lazy"
                          />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={encodeURI("/eidolon/color (3).png")}
                            alt="Character creation — color variant 3"
                            className="mx-auto h-[min(56dvh,560px)] w-full rounded-xl object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-xl bg-lime-500/[0.08] p-5 ring-1 ring-lime-300/35">
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-lime-700/85">
                        Key learning — Anthropomorphic trust
                      </p>
                      <p className="text-[0.85rem] leading-relaxed text-lime-950">
                        Illustrating the agent as a gold, Buddha-like character made its intent feel calmer and more legible—using embodiment to borrow trust without hiding the machine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
                    Reasoning For Design
                  </h2>
                  <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Mockups created with Figma
                  </p>

                  <div className="mx-auto w-full max-w-[min(520px,calc(100vw-1.5rem))]">
                    <ProjectGalleryRow
                      images={[
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 123952.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124040.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124046.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124058.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124113.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 124124.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125858.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125917.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 125948.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130207.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130218.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130315.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130406.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130422.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130518.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130530.png"),
                        encodeURI("/eidolon/reasoning for design/Screenshot 2026-03-02 130543.png"),
                      ]}
                      theme="lime"
                      glassVariant="liquid"
                      frameSize="phone"
                      phoneHeight="short"
                      navSize="sm"
                      slideImageFit="contain"
                      slidePadding="default"
                      className="my-0 w-full"
                    />
                  </div>
                </div>
              </div>
            </>
          ),
        },
        {
          id: "video",
          label: "FINAL PRODUCT",
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
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="h-[min(92dvh,960px)] w-full rounded-xl bg-black/[0.02] object-contain ring-1 ring-black/[0.06]"
                      src="https://framerusercontent.com/assets/QsCLaiwNkAZTCJnxJv6KKxEk2Q.mp4"
                    />
                  </div>
                </div>
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
                  <div className="rounded-2xl border-[0.5px] border-zinc-200/70 bg-white shadow-[0_18px_60px_-26px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/eidolon/table1.png"
                      alt="Table 1"
                      className="w-full rounded-2xl bg-white object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="min-w-0 space-y-4">
                  <div className="flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35">
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-violet-600">
                      1
                    </span>
                    <p className="text-[0.9rem] leading-[1.65] text-violet-950">
                      Advocacy must be structural: the interface should actively protect users from persuasion, not merely explain it.
                    </p>
                  </div>
                  <div className="flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35">
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-violet-600">
                      2
                    </span>
                    <p className="text-[0.9rem] leading-[1.65] text-violet-950">
                      Cognitive load reduction needs evidence: design decisions should be grounded in fluency research, not intuition alone.
                    </p>
                  </div>
                  <div className="flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35">
                    <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-violet-600">
                      3
                    </span>
                    <p className="text-[0.9rem] leading-[1.65] text-violet-950">
                      Agentic systems must surface reasoning: trust comes from observable actions and legible intent, not output polish.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Ethical considerations
              </p>
              <p className="max-w-[min(52rem,100%)] text-left text-[0.95rem] leading-[1.75] text-zinc-600">
                This project situates itself within broader debates in AI ethics, acknowledging that contemporary AI systems continue to raise concerns around surveillance capitalism, algorithmic manipulation, opaque decision-making, and concentrated data power. Rather than assuming AI is inherently neutral or benevolent, the proposal recognizes its potential to subtly influence user behavior and prioritize commercial interests. In response, it introduces a dual-agent framework as a structural safety network, where a personal AI advocates for the user by monitoring persuasive tactics, limiting unnecessary data exchange, and making algorithmic influence visible through a protective interface layer. By embedding safeguards directly into the system’s architecture, the project argues that trust in AI must be constructed through transparency, distributed control, and user autonomy, not convenience alone.
              </p>

              <div className="mx-auto mt-6 -mb-4 w-full max-w-[min(1100px,calc(100vw-1.5rem))]">
                <div className="rounded-2xl border-[0.5px] border-zinc-200/70 bg-white p-3 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] sm:p-4 md:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_c0ssivc0ssivc0ss.png")}
                      alt="Eidolon sprite 1"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_hd2vpxhd2vpxhd2v.png")}
                      alt="Eidolon sprite 2"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_jl181pjl181pjl18.png")}
                      alt="Eidolon sprite 3"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_q5wg5mq5wg5mq5wg.png")}
                      alt="Eidolon sprite 4"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_rkwzqdrkwzqdrkwz.png")}
                      alt="Eidolon sprite 5"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI("/eidolon/spritesheet/Gemini_Generated_Image_vux2l0vux2l0vux2.png")}
                      alt="Eidolon sprite 6"
                      className="aspect-square w-full rounded-xl bg-white object-cover"
                      loading="lazy"
                    />
                  </div>
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
                      href="https://dme.engin.umich.edu/wp-content/uploads/sites/204/2014/09/Song-Schwarz-2008.pdf"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
                    MIT Media Lab. &quot;Ambient Intelligence Research Group.&quot; MIT Media Lab.{" "}
                    <a
                      href="https://www.media.mit.edu/research/groups/ambient-intelligence"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    .
                  </li>
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                      href="https://hai.stanford.edu/news/demographic-stereotypes-text-image-generation"
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
                  <li className="text-[0.8rem] leading-relaxed text-zinc-500">
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
                      href="https://www.nngroup.com/articles/designing-ux-seniors/"
                      className="transition-colors text-violet-700 underline underline-offset-2 hover:text-violet-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
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
