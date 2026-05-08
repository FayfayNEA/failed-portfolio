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

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30, delay: (i % 2) * 0.08 },
  }),
};

export function ReasoningPanels({ panels }: ReasoningPanelsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {panels.map((panel, i) => (
        <motion.div
          key={panel.label}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative overflow-hidden rounded-2xl border-[0.5px] border-lime-200/80 bg-gradient-to-br from-lime-500/[0.09] via-lime-500/[0.03] to-transparent p-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7"
        >
          {/* Watermark number */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 right-4 select-none font-mono text-[5.5rem] font-black leading-none text-lime-400/[0.22]"
          >
            {panel.label}
          </span>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[140px] shrink-0 sm:mx-0">
            <div className="absolute inset-0 -z-10 translate-y-4 scale-90 rounded-[1.5rem] bg-lime-300/30 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={panel.img}
              alt={`Reasoning for design — ${panel.label}`}
              className="relative w-full rounded-[1.5rem] border-[0.5px] border-lime-200/60 object-contain shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="relative min-w-0 flex-1">
            {/* Accent rule */}
            <div className="mb-3 h-px w-6 rounded-full bg-lime-400/70" />
            <h3 className="mb-5 text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-950">
              {panel.heading}
            </h3>
            <ul className="space-y-3">
              {panel.points.map(({ lead, detail }) => (
                <li key={lead} className="border-t border-lime-200/50 pt-3 first:border-t-0 first:pt-0">
                  <p className="mb-0.5 text-[0.78rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-800">
                    {lead}
                  </p>
                  <p className="text-[0.74rem] leading-[1.65] text-zinc-500">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
