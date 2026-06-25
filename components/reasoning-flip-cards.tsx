"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Point {
  lead: string;
  detail: string;
  bibRef?: string;
}

interface Panel {
  img: string;
  label: string;
  heading?: string;
  points: Point[];
}

type Theme = "lime" | "sky";

interface ReasoningFlipCardsProps {
  panels: Panel[];
  theme?: Theme;
  imageSize?: "phone" | "laptop";
}

const THEME = {
  lime: { rule: "bg-lime-400/70", ring: "focus-visible:ring-lime-400/60", accent: "text-lime-600/70", backBorder: "border-lime-200/60", link: "text-lime-700 decoration-lime-300 hover:text-lime-900" },
  sky: { rule: "bg-sky-400/70", ring: "focus-visible:ring-sky-400/60", accent: "text-sky-600/70", backBorder: "border-sky-200/60", link: "text-sky-700 decoration-sky-300 hover:text-sky-900" },
};

/** Render the detail text, hyperlinking only the trailing "(citation)" to its bib entry. */
function DetailWithCitation({ detail, bibRef, linkClass }: { detail: string; bibRef?: string; linkClass: string }) {
  if (!bibRef) return <>{detail}</>;
  const match = detail.match(/^([\s\S]*?)\s*(\([^()]+\))\s*$/);
  const link = (label: string) => (
    <a
      href="#bibliography"
      onClick={(e) => e.stopPropagation()}
      className={`whitespace-nowrap underline underline-offset-2 transition-colors ${linkClass}`}
    >
      {label}
      <span aria-hidden> ↗</span>
    </a>
  );
  if (match) {
    return (
      <>
        {match[1]} {link(match[2])}
      </>
    );
  }
  return (
    <>
      {detail} {link("source")}
    </>
  );
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 32, delay },
  },
});

function FlipCard({
  panel,
  t,
  index,
  aspect,
  twoColBack,
}: {
  panel: Panel;
  t: (typeof THEME)[Theme];
  index: number;
  aspect: string;
  twoColBack: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <motion.div
      variants={fadeUp(index * 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`${aspect} [perspective:1400px]`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Design reasoning ${panel.label}. ${flipped ? "Showing research. Activate to flip back." : "Activate to flip and read the research."}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        className={`relative h-full w-full cursor-pointer rounded-2xl outline-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] focus-visible:ring-2 ${t.ring}`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.55)] backdrop-blur-xl backdrop-saturate-110 [backface-visibility:hidden]">
          <div className="flex items-center justify-between px-4 pt-3">
            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${t.accent}`}>{panel.label}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">reasoning</span>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center px-3 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={panel.img}
              alt={`Design reasoning ${panel.label}`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center gap-1.5 pb-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
            <span aria-hidden className="text-[11px] leading-none">⟲</span> tap for research
          </div>
        </div>

        {/* BACK */}
        <div className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-[0.5px] ${t.backBorder} bg-white/60 p-5 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.14),inset_0_1px_0_0_rgba(255,255,255,0.55)] backdrop-blur-xl backdrop-saturate-110 [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${t.accent}`}>{panel.label}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">research</span>
          </div>
          <div className={`my-3 h-px w-8 rounded-full ${t.rule}`} />
          {panel.heading && (
            <h3 className="mb-3 text-[0.95rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-950">{panel.heading}</h3>
          )}
          <ul className={twoColBack ? "grid flex-1 grid-cols-1 gap-x-6 gap-y-2.5 overflow-y-auto pr-1 sm:grid-cols-2" : "flex-1 space-y-2.5 overflow-y-auto pr-1"}>
            {panel.points.map(({ lead, detail, bibRef }) => (
              <li key={lead} className="min-w-0">
                <p className="mb-0.5 text-[0.74rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-800">{lead}</p>
                <p className="text-[0.69rem] leading-[1.55] text-zinc-500">
                  <DetailWithCitation detail={detail} bibRef={bibRef} linkClass={t.link} />
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
            <span aria-hidden className="text-[11px] leading-none">⟲</span> tap to flip back
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ReasoningFlipCards({ panels, theme = "lime", imageSize = "phone" }: ReasoningFlipCardsProps) {
  const t = THEME[theme];
  const laptop = imageSize === "laptop";
  return (
    <div className={laptop ? "mx-auto flex max-w-[760px] flex-col gap-4" : "mx-auto grid max-w-[680px] grid-cols-2 gap-3 sm:gap-4"}>
      {panels.map((panel, i) => (
        <FlipCard
          key={panel.label}
          panel={panel}
          t={t}
          index={i}
          aspect={laptop ? "aspect-[16/10]" : "aspect-[3/5]"}
          twoColBack={laptop}
        />
      ))}
    </div>
  );
}
