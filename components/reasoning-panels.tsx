"use client";

import { motion } from "framer-motion";

interface Point {
  lead: string;
  detail: string;
}

interface Panel {
  img: string;
  label: string;
  heading: string;
  points: Point[];
}

interface ReasoningPanelsProps {
  panels: Panel[];
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30, delay },
  },
});

function TextBlock({
  panel,
  align,
  delay,
}: {
  panel: Panel;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col justify-center gap-4 ${align === "right" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
    >
      {/* Accent rule */}
      <div className={`h-px w-8 rounded-full bg-lime-400/70 ${align === "right" ? "md:self-end" : "md:self-start"}`} />

      <h3 className="text-[0.95rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-950">
        {panel.heading}
      </h3>

      <ul className={`space-y-3 ${align === "right" ? "md:items-end" : ""}`}>
        {panel.points.map(({ lead, detail }) => (
          <li
            key={lead}
            className={`border-t border-lime-200/50 pt-3 first:border-t-0 first:pt-0 ${align === "right" ? "md:text-right" : "md:text-left"}`}
          >
            <p className="mb-0.5 text-[0.75rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-800">
              {lead}
            </p>
            <p className="text-[0.71rem] leading-[1.65] text-zinc-500">{detail}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ImageBlock({ panel, delay }: { panel: Panel; delay: number }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto w-full max-w-[160px]"
    >
      {/* lime glow */}
      <div className="absolute inset-0 -z-10 translate-y-4 scale-90 rounded-[1.75rem] bg-lime-300/35 blur-xl" />
      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 right-1 select-none font-mono text-[3.5rem] font-black leading-none text-lime-400/[0.22]"
      >
        {panel.label}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={panel.img}
        alt={`Reasoning for design — ${panel.label}`}
        className="relative w-full rounded-[1.75rem] border-[0.5px] border-lime-200/70 object-contain shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]"
        loading="lazy"
      />
    </motion.div>
  );
}

export function ReasoningPanels({ panels }: ReasoningPanelsProps) {
  // Layout: text | img | img | text  (row 1: panels 0,1 — row 2: panels 2,3)
  const rows = [
    [panels[0], panels[1]],
    [panels[2], panels[3]],
  ];

  return (
    <div className="space-y-10">
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-[1fr_minmax(0,150px)_minmax(0,150px)_1fr] md:items-center md:gap-x-6 md:gap-y-0"
        >
          {/* Left text */}
          <TextBlock panel={row[0]} align="right" delay={0} />
          {/* Left image */}
          <ImageBlock panel={row[0]} delay={0.06} />
          {/* Right image */}
          <ImageBlock panel={row[1]} delay={0.12} />
          {/* Right text */}
          <TextBlock panel={row[1]} align="left" delay={0.18} />
        </div>
      ))}
    </div>
  );
}
