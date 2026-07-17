import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import {
  CASE_INTRO_BODY,
  CASE_INTRO_H2,
  CASE_SECTION_H2,
  CASE_SUBLABEL,
} from "@/lib/etrade-case-styles";

const SLUG = "tetonic";
const CATEGORY = "product-design";

const TITLE = "Tetonic";
const DESCRIPTION =
  "placeholder one-liner — replace with the real Tetonic summary";

const HERO = "/tetonic/hero-placeholder.svg";
const IMG = "/tetonic/image-placeholder.svg";

export const metadata: Metadata = {
  description: `Failenn Aselta, ${TITLE}. ${DESCRIPTION}`,
};

function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-zinc-300/80 bg-zinc-50/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
      {children}
    </p>
  );
}

export default function TetonicPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      descriptionClassName="text-left"
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "Tetonic hero placeholder", layout: "compact" }}
      heroFrameVariant="liquid"
      heroSize="wide"
      challengeSummary="Placeholder challenge — what problem does Tetonic solve?"
      challengeSubtext="Replace this with the real framing: constraint, insight, and the bet you made."
      meta={{
        timeline: "TBD",
        roles: ["Product Designer", "Engineer"],
        team: ["Failenn Aselta (solo)"],
        tools: ["Figma", "TBD"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <h2 className={CASE_SECTION_H2}>
                Placeholder overview headline for Tetonic.
              </h2>
              <p className={CASE_INTRO_BODY}>
                Short overview copy goes here. Describe what Tetonic is, who it is for, and why
                it matters. Keep it direct.
              </p>
              <PlaceholderNote>Replace overview copy + supporting diagram</PlaceholderNote>
            </>
          ),
        },
        {
          id: "the-challenge",
          label: "THE CHALLENGE",
          content: (
            <>
              <h2 className={CASE_INTRO_H2}>What made this hard?</h2>
              <p className={CASE_INTRO_BODY}>
                Placeholder challenge body. Name the user pain, the system constraint, and the
                design risk you had to take.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Constraint 01", "Constraint 02", "Constraint 03"].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-zinc-200/80 bg-white/70 p-4 ring-1 ring-black/[0.03]"
                  >
                    <p className={CASE_SUBLABEL}>{label}</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-zinc-600">
                      Placeholder detail for this constraint.
                    </p>
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
              <h2 className={CASE_SECTION_H2}>What did research surface?</h2>
              <p className={CASE_INTRO_BODY}>
                Placeholder research summary. Cite methods, sample size, and the sharpest findings.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG} alt="" className="block h-auto w-full" />
              </div>
              <PlaceholderNote>Swap in research artifacts, quotes, or diagrams</PlaceholderNote>
            </>
          ),
        },
        {
          id: "process",
          label: "PROCESS",
          content: (
            <>
              <h2 className={CASE_SECTION_H2}>How did the work unfold?</h2>
              <p className={CASE_INTRO_BODY}>
                Placeholder process narrative. Walk through ideation, iteration, and the decisions
                that stuck.
              </p>
              <ProjectGalleryRow images={[IMG, IMG, IMG]} />
              <PlaceholderNote>Replace gallery with real process shots / frames</PlaceholderNote>
            </>
          ),
        },
        {
          id: "outcome",
          label: "OUTCOME",
          content: (
            <>
              <h2 className={CASE_SECTION_H2}>What shipped?</h2>
              <p className={CASE_INTRO_BODY}>
                Placeholder outcome. Point to the final interface, metrics, or qualitative proof.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { n: "01", label: "Metric A", value: "—" },
                  { n: "02", label: "Metric B", value: "—" },
                  { n: "03", label: "Metric C", value: "—" },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 ring-1 ring-black/[0.03]"
                  >
                    <p className={CASE_SUBLABEL}>{s.n} · {s.label}</p>
                    <p className="mt-3 font-mono text-[1.75rem] tracking-tight text-zinc-900">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "conclusion",
          label: "CONCLUSION",
          content: (
            <>
              <h2 className={CASE_SECTION_H2}>Lessons and next iteration</h2>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-zinc-600">
                <li>Placeholder lesson one.</li>
                <li>Placeholder lesson two.</li>
                <li>Placeholder next iteration.</li>
              </ul>
              <PlaceholderNote>Rewrite in Failenn&apos;s voice when the project is ready</PlaceholderNote>
            </>
          ),
        },
      ]}
    />
  );
}
