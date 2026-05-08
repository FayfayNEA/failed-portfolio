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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30, delay },
  },
});

export function ReasoningPanels({ panels }: ReasoningPanelsProps) {
  return (
    <div className="space-y-8">
      {panels.map((panel, i) => (
        <motion.div
          key={panel.label}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_-16px_rgba(132,204,22,0.18),inset_0_1px_0_0_rgba(255,255,255,0.55)] backdrop-blur-xl backdrop-saturate-110 sm:grid-cols-[minmax(0,180px)_1fr] sm:items-start sm:gap-10 md:p-10"
        >
          {/* Big background number */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-2 select-none font-mono text-[8rem] font-black leading-none text-lime-400/[0.18]"
          >
            {panel.label}
          </span>

          {/* Image column */}
          <motion.div
            variants={fadeUp(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="relative mx-auto w-full max-w-[160px] sm:mx-0"
          >
            <div className="absolute inset-0 -z-10 translate-y-4 scale-90 rounded-[1.75rem] bg-lime-300/30 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={panel.img}
              alt={`Reasoning for design — ${panel.label}`}
              className="relative w-full rounded-[1.75rem] border-[0.5px] border-lime-200/60 object-contain shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]"
              loading="lazy"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-3 h-px w-8 rounded-full bg-lime-400/70" />
            <h3 className="mb-5 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-950">
              {panel.heading}
            </h3>
            <ul className="space-y-3">
              {panel.points.map(({ lead, detail }) => (
                <li key={lead} className="border-t border-lime-200/50 pt-3 first:border-t-0 first:pt-0">
                  <p className="mb-0.5 text-[0.78rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-800">
                    {lead}
                  </p>
                  <p className="text-[0.73rem] leading-[1.65] text-zinc-500">{detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
