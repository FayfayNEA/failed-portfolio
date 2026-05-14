"use client";

import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/image-lightbox";

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

type Theme = "lime" | "sky";
type ImageSize = "phone" | "laptop";

interface ReasoningPanelsProps {
  panels: Panel[];
  theme?: Theme;
  imageSize?: ImageSize;
}

const THEME = {
  lime: {
    shadow: "rgba(132,204,22,0.18)",
    watermark: "text-lime-400/[0.18]",
    glow: "bg-lime-300/30",
    border: "border-lime-200/60",
    rule: "bg-lime-400/70",
    divider: "border-lime-200/50",
  },
  sky: {
    shadow: "rgba(15,142,199,0.18)",
    watermark: "text-sky-400/[0.18]",
    glow: "bg-sky-300/25",
    border: "border-sky-200/60",
    rule: "bg-sky-400/70",
    divider: "border-sky-200/50",
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30, delay },
  },
});

export function ReasoningPanels({ panels, theme = "lime", imageSize = "phone" }: ReasoningPanelsProps) {
  const t = THEME[theme];
  const isLaptop = imageSize === "laptop";

  return (
    <div className="space-y-8">
      {panels.map((panel) => (
        <motion.div
          key={panel.label}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className={[
            "relative overflow-hidden rounded-2xl border-[0.5px] border-white/60",
            "bg-white/40 backdrop-blur-xl backdrop-saturate-110",
            `shadow-[0_8px_32px_-16px_${t.shadow},inset_0_1px_0_0_rgba(255,255,255,0.55)]`,
            isLaptop
              ? "grid grid-cols-1 gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,400px)_1fr] md:items-start md:gap-10 md:p-10"
              : "grid grid-cols-1 gap-6 p-5 sm:grid-cols-[minmax(0,160px)_1fr] sm:items-start sm:gap-8 sm:p-8 md:p-10",
          ].join(" ")}
        >
          {/* Big background number */}
          <span
            aria-hidden
            className={`pointer-events-none absolute -bottom-4 -right-2 select-none font-mono text-[8rem] font-black leading-none ${t.watermark}`}
          >
            {panel.label}
          </span>

          {/* Image */}
          <motion.div
            variants={fadeUp(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className={isLaptop ? "relative w-full" : "relative mx-auto w-full max-w-[160px] sm:mx-0"}
          >
            <div className={`absolute inset-0 -z-10 translate-y-4 scale-90 blur-xl ${t.glow} ${isLaptop ? "rounded-xl" : "rounded-[1.75rem]"}`} />
            <ImageLightbox
              src={panel.img}
              alt={`Reasoning for design, ${panel.label}`}
              wrapperClassName={isLaptop ? "rounded-xl" : "rounded-[1.75rem]"}
              imgClassName={[
                "relative w-full object-contain",
                `border-[0.5px] ${t.border}`,
                isLaptop
                  ? "rounded-xl shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
                  : "rounded-[1.75rem] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]",
              ].join(" ")}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col justify-center"
          >
            <div className={`mb-3 h-px w-8 rounded-full ${t.rule}`} />
            <h3 className="mb-5 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-950">
              {panel.heading}
            </h3>
            <ul className={panel.points.length > 4 ? "grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6" : "space-y-3"}>
              {panel.points.map(({ lead, detail }) => (
                <li key={lead} className="min-w-0">
                  <p className="mb-0.5 text-[0.76rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-800">
                    {lead}
                  </p>
                  <p className="text-[0.71rem] leading-[1.6] text-zinc-500">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
