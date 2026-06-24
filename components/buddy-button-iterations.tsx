"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";

const ITERATIONS = [
  {
    n: "00",
    label: "Earliest",
    reason: "No life and distracting.",
    renderButton: () => (
      <button
        disabled
        style={{
          borderRadius: "1000px",
          width: "160px",
          height: "36px",
          backgroundColor: "#22c55e",
          border: "none",
          color: "#fff",
          fontFamily: "Montserrat, -apple-system, sans-serif",
          fontWeight: 500,
          fontSize: "13px",
          cursor: "default",
        }}
      >
        Start Vibing
      </button>
    ),
  },
  {
    n: "01",
    label: "Original Figma",
    reason: "Felt like we were in the Y2K and heavy on eyes.",
    renderButton: () => (
      <button
        disabled
        style={{
          borderRadius: "1000px",
          width: "192px",
          height: "36px",
          background:
            "linear-gradient(160deg, rgba(155,120,255,0.96) 0%, rgba(60,18,210,0.92) 100%)",
          border: "0.5px solid rgba(120,80,255,0.35)",
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.62)",
            "inset 0 -1.5px 0 rgba(30,0,160,0.35)",
            "inset 1px 0 0 rgba(255,255,255,0.18)",
            "inset -1px 0 0 rgba(0,0,100,0.18)",
            "0 2px 10px -2px rgba(82,43,255,0.38)",
          ].join(", "),
          color: "rgba(255,255,255,0.93)",
          fontFamily: "Montserrat, -apple-system, sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          letterSpacing: "0.04em",
          cursor: "default",
        }}
      >
        Start Vibing
      </button>
    ),
  },
  {
    n: "02",
    label: "localhost:3000",
    reason: "Too small and heavy font",
    renderButton: () => (
      <motion.button
        whileHover={{
          y: [0, -12, 5, -8, 3, -10, 0],
          x: [0, 5, -6, 4, -3, 6, 0],
          rotate: [0, 4, -3, 5, -2, 3, 0],
          scale: [1, 1.06, 0.94, 1.08, 0.96, 1.04, 1],
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        style={{
          borderRadius: "1000px",
          width: "140px",
          height: "34px",
          backgroundColor: "rgba(120, 90, 220, 0.42)",
          border: "none",
          color: "#fff",
          fontFamily:
            "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          cursor: "default",
        }}
      >
        Start Vibing
      </motion.button>
    ),
  },
  {
    n: "03",
    label: "Demo Build",
    reason: "Chosen. Materiality and motion close to life.",
    renderButton: () => (
      <motion.button
        whileHover={{ backgroundColor: "rgba(120, 90, 220, 0.55)", y: -1 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          borderRadius: "1000px",
          width: "400px",
          maxWidth: "100%",
          height: "56px",
          backgroundColor: "rgba(120, 90, 220, 0.42)",
          border: "none",
          color: "#ffffff",
          fontFamily:
            "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: 1,
          cursor: "pointer",
        }}
      >
        Start Vibing
      </motion.button>
    ),
  },
];

/* ── Reset Button card — iteration viewer ── */
const ResetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);

const RESET_ITERATIONS: { n: string; reason: string; renderStage: () => React.ReactNode }[] = [
  {
    n: "00",
    reason: "Didn't even think of the reset button at first. :/",
    renderStage: () => null,
  },
  {
    n: "01",
    reason: "Too bright and distracting.",
    renderStage: () => (
      <button
        disabled
        style={{
          borderRadius: 6,
          padding: "10px 24px",
          backgroundColor: "#ef4444",
          border: "none",
          color: "#fff",
          fontFamily: "Montserrat, -apple-system, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          cursor: "default",
        }}
      >
        reset
      </button>
    ),
  },
  {
    n: "02",
    reason: "Right shape, no motion. Read as dead, not alive.",
    renderStage: () => (
      <button className="buddy-rst buddy-rst--static" type="button" aria-label="Restart session">
        <ResetIcon />
      </button>
    ),
  },
  {
    n: "03",
    reason: "Full CCW spin on hover, gave life to the stale page.",
    renderStage: () => (
      <button className="buddy-rst" type="button" aria-label="Restart session">
        <ResetIcon />
      </button>
    ),
  },
];

export function BuddyResetCard() {
  const [active, setActive] = useState(0);
  const current = RESET_ITERATIONS[active];

  return (
    <div className="h-full">
      <style>{`
        .buddy-rst { display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:9999px;border:none;cursor:pointer;color:#fff;background-color:rgba(120,90,220,0.42);transition:background-color 0.2s ease; }
        .buddy-rst:hover { background-color:rgba(120,90,220,0.55); }
        .buddy-rst svg { transition:transform 0.5s ease; }
        .buddy-rst:hover svg { transform:rotate(-360deg); }
        .buddy-rst:active svg { transform:rotate(-720deg);transition:transform 0.25s ease; }
        .buddy-rst--static svg, .buddy-rst--static:hover svg, .buddy-rst--static:active svg { transform:none; }
      `}</style>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Nav pills */}
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {RESET_ITERATIONS.map((it, i) => (
            <button
              key={it.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {it.n}
            </button>
          ))}
        </div>

        {/* Stage */}
        <div className="relative flex min-h-[140px] w-full flex-1 items-center justify-center px-4 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex w-full items-center justify-center"
            >
              {current.renderStage()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reason footer */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-[0.78rem] leading-snug text-zinc-400"
            >
              {current.reason}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── AI Indicator card — iteration viewer ── */
type IndicatorState = { label: string; color: string; anim?: "pulse" | "spin" };

const RING_BY_ANIM: Record<string, { animate: TargetAndTransition; transition: Transition }> = {
  pulse: { animate: { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }, transition: { duration: 1.4, repeat: Infinity, ease: "easeOut" } },
  spin: { animate: { rotate: 360 }, transition: { duration: 1.1, repeat: Infinity, ease: "linear" } },
};

/* Iteration 00 — first pass, five states */
const STATES_FIVE: IndicatorState[] = [
  { label: "Off", color: "#374151" },
  { label: "Waiting", color: "#2563eb" },
  { label: "Listening", color: "#dc2626", anim: "pulse" },
  { label: "Generating", color: "#ea580c", anim: "spin" },
  { label: "Completed", color: "#16a34a" },
];

/* Iteration 01 — custom sparkle mark, color-coded per state */
const SPARKLE_STATES: { label: string; base: string; light: string }[] = [
  { label: "Off", base: "#7c7c83", light: "#b8b8be" },
  { label: "Waiting", base: "#2f6fd6", light: "#6aa3f0" },
  { label: "Listening", base: "#d63a2f", light: "#f0726a" },
  { label: "Generating", base: "#e8742a", light: "#f5a463" },
  { label: "Generated", base: "#79b84a", light: "#a7d977" },
];

function Sparkle({ base, light, size = 56 }: { base: string; light: string; size?: number }) {
  const gid = `sp-${base.replace("#", "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gid} x1="20" y1="14" x2="84" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={light} />
          <stop offset="1" stopColor={base} />
        </linearGradient>
      </defs>
      <path
        d="M50 3 C53 32 68 47 97 50 C68 53 53 68 50 97 C47 68 32 53 3 50 C32 47 47 32 50 3 Z"
        fill={`url(#${gid})`}
        transform="rotate(-12 50 50)"
      />
    </svg>
  );
}

/* Iteration 02 — real Buddy logo, one SVG per state (color baked into each file).
   Hearing reuses the listening mark: on, but not actively transcribing. */
const LOGO_STATES: { label: string; src: string; color: string }[] = [
  { label: "Off", src: "/buddy/Off.svg", color: "#7c7c83" },
  { label: "Waiting", src: "/buddy/waiting.svg", color: "#2f6fd6" },
  { label: "Hearing", src: "/buddy/listening.svg", color: "#d63a2f" },
  { label: "Listening", src: "/buddy/listening.svg", color: "#d63a2f" },
  { label: "Generating", src: "/buddy/generating.svg", color: "#e8742a" },
  { label: "Generated", src: "/buddy/generated.svg", color: "#79b84a" },
];

function DotIndicator({ states }: { states: IndicatorState[] }) {
  const [idx, setIdx] = useState(0);
  const state = states[idx];
  const ring = state.anim ? RING_BY_ANIM[state.anim] : null;

  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.55}
      dragTransition={{ bounceStiffness: 320, bounceDamping: 18 }}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.08, cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={() => setIdx((i) => (i + 1) % states.length)}
      style={{ cursor: "grab", userSelect: "none" }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative flex items-center justify-center" style={{ width: 64, height: 64 }}>
        {ring && (
          <motion.div
            className="absolute rounded-full"
            style={{ width: 36, height: 36, border: `2px solid ${state.color}`, opacity: 0.5 }}
            animate={ring.animate}
            transition={ring.transition}
          />
        )}
        <motion.div
          className="rounded-full"
          animate={{ backgroundColor: state.color }}
          transition={{ duration: 0.3 }}
          style={{ width: 16, height: 16 }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={state.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          style={{ fontFamily: "Montserrat, -apple-system, sans-serif", fontSize: 15, fontWeight: 300, color: state.color }}
        >
          {state.label}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}

function LogoIndicator() {
  const [idx, setIdx] = useState(0);
  const state = LOGO_STATES[idx];

  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.55}
      dragTransition={{ bounceStiffness: 320, bounceDamping: 18 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.88 }}
      whileDrag={{ scale: 1.08, cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 600, damping: 12 }}
      onClick={() => setIdx((i) => (i + 1) % LOGO_STATES.length)}
      style={{ cursor: "grab", userSelect: "none" }}
      className="flex flex-col items-center gap-3"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={state.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
          style={{ width: 64, height: 64 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={state.src} alt={`Buddy ${state.label} logo`} width={56} height={56} draggable={false} style={{ objectFit: "contain" }} />
        </motion.div>
      </AnimatePresence>
      <span style={{ fontFamily: "Montserrat, -apple-system, sans-serif", fontSize: 15, fontWeight: 300, color: state.color }}>
        {state.label}
      </span>
    </motion.div>
  );
}

function SparkleIndicator() {
  const [idx, setIdx] = useState(0);
  const state = SPARKLE_STATES[idx];

  return (
    <button
      type="button"
      onClick={() => setIdx((i) => (i + 1) % SPARKLE_STATES.length)}
      style={{ background: "none", border: "none", cursor: "pointer", userSelect: "none" }}
      className="flex flex-col items-center gap-3"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={state.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
          style={{ width: 64, height: 64 }}
        >
          <Sparkle base={state.base} light={state.light} />
        </motion.div>
      </AnimatePresence>
      <span style={{ fontFamily: "Montserrat, -apple-system, sans-serif", fontSize: 15, fontWeight: 300, color: state.base }}>
        {state.label}
      </span>
    </button>
  );
}

const INDICATOR_ITERATIONS: { n: string; hint: string; reason: string; render: () => React.ReactNode }[] = [
  {
    n: "00",
    hint: "drag · click to cycle",
    reason: "Basic loading states. Stale and not intermingled with the software.",
    render: () => <DotIndicator states={STATES_FIVE} />,
  },
  {
    n: "01",
    hint: "click to cycle",
    reason: "Sparkle state to play off current AI research, but too basic and not memorable.",
    render: () => <SparkleIndicator />,
  },
  {
    n: "02",
    hint: "drag · click to cycle",
    reason: "Rebranded to give Buddy a real brand presence and added a hearing state so the user knows it's on but not actively transcribing.",
    render: () => <LogoIndicator />,
  },
];

export function BuddyAIIndicatorCard() {
  const [active, setActive] = useState(0);
  const current = INDICATOR_ITERATIONS[active];

  return (
    <div className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Nav pills */}
        <div className="flex items-center gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {INDICATOR_ITERATIONS.map((it, i) => (
            <button
              key={it.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {it.n}
            </button>
          ))}
          <p className="ml-auto font-mono text-[8px] text-zinc-300">{current.hint}</p>
        </div>

        {/* Stage */}
        <div className="relative flex min-h-[140px] w-full flex-1 items-center justify-center overflow-hidden px-4 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-center"
            >
              {current.render()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reason footer */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-[0.78rem] leading-snug text-zinc-400"
            >
              {current.reason}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── Starting Background card — iteration viewer ── */
const BG_ITERATIONS = [
  { n: "00", reason: "Green background too heavy." },
  { n: "01", reason: "Cut-off images and felt childlike." },
  { n: "02", reason: "Purple to induce creativity, too bold." },
  { n: "03", reason: "Interactive loading state with softer cognitive load and removed text for open mindsets" },
];

/* shared wrapper: neutral bg + inset margin */
function BgWrap({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      {children}
    </div>
  );
}

function BgStage00() {
  return (
    <BgWrap>
      <div style={{ width: STAGE_W, height: STAGE_H, background: "#14532d", borderRadius: 10 }} />
    </BgWrap>
  );
}

/* Figma artboard rendered 1:1 (726×396) then scaled to fit the preview.
   Exact Figma CSS:
   Rect 3:  502×274 @ (112,61), r=38
   Circle:  665×665 @ (22,-135)
   Text:    378×45 @ (193,175), Red Rose 36px / 45px line-height
*/
const FIGMA_W = 726;
const FIGMA_H = 396;
const FIGMA_SCALE = 0.4; // ~15% larger than 0.25; renders ~209×114
const STAGE_W = FIGMA_W * FIGMA_SCALE; // shared footprint so all 4 stages share margins
const STAGE_H = FIGMA_H * FIGMA_SCALE;

const RECT_W = 502;
const RECT_H = 274;
const RECT_SCALE = STAGE_W / RECT_W; // scale the masked rect to fill the shared footprint

function BgStageRect({ borderRadius }: { borderRadius: number }) {
  return (
    <BgWrap>
      {/* Layout box matches the shared stage footprint; the rect fills it */}
      <div style={{ position: "relative", width: STAGE_W, height: STAGE_H, overflow: "hidden" }}>
        {/* Rectangle 3 acts as a mask: rounded rect clips the loading.svg artboard (502×274) */}
        <div style={{
          position: "absolute",
          boxSizing: "border-box",
          width: RECT_W, height: RECT_H,
          left: 0, top: 0,
          transform: `scale(${RECT_SCALE})`,
          transformOrigin: "top left",
          overflow: "hidden",
          borderRadius,
        }}>
          {/* Circle bg image, positioned relative to the rect: artboard (22,-135) − rect (112,61) */}
          <div style={{
            position: "absolute",
            width: 665, height: 665,
            left: -90, top: -196,
            background: "radial-gradient(circle, #b39ddb 0%, #7c3aed 45%, #4c1d95 100%)",
            borderRadius: "50%",
          }} />
          {/* Let's start creating! — text @ artboard (193,175) − rect (112,61) */}
          <span style={{
            position: "absolute",
            width: 378, height: 45,
            left: 81, top: 114,
            fontFamily: "'Red Rose', cursive",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: "45px",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}>
            Let&apos;s start creating!
          </span>
        </div>
      </div>
    </BgWrap>
  );
}

function BgStage01() { return <BgStageRect borderRadius={999} />; }
function BgStage02() { return <BgStageRect borderRadius={38} />; }

function BgStage03({ blobPos }: { blobPos: { x: number; y: number }[] }) {
  return (
    <BgWrap>
      <div style={{ position: "relative", width: STAGE_W, height: STAGE_H, overflow: "hidden", borderRadius: 6, background: "#e9e4f8" }}>
        <div style={{ position: "absolute", inset: 0, transform: `translate(${blobPos[0].x * 200}px, ${blobPos[0].y * 150}px)` }}><div className="bblob bb1" /></div>
        <div style={{ position: "absolute", inset: 0, transform: `translate(${blobPos[1].x * 150}px, ${blobPos[1].y * 110}px)` }}><div className="bblob bb2" /></div>
        <div style={{ position: "absolute", inset: 0, transform: `translate(${blobPos[2].x * 260}px, ${blobPos[2].y * 190}px)` }}><div className="bblob bb3" /></div>
      </div>
    </BgWrap>
  );
}

export function BuddyStartingBgCard() {
  const [active, setActive] = useState(0);
  const blobTargetRef = useRef({ x: 0, y: 0 });
  const blobPosRef = useRef([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
  const blobRafRef = useRef<number | null>(null);
  const [blobPos, setBlobPos] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  useEffect(() => {
    const speeds = [0.04, 0.07, 0.12];
    const loop = () => {
      const t = blobTargetRef.current;
      const next = blobPosRef.current.map((p, i) => ({
        x: p.x + (t.x - p.x) * speeds[i],
        y: p.y + (t.y - p.y) * speeds[i],
      }));
      blobPosRef.current = next;
      setBlobPos([...next]);
      blobRafRef.current = requestAnimationFrame(loop);
    };
    blobRafRef.current = requestAnimationFrame(loop);
    return () => { if (blobRafRef.current) cancelAnimationFrame(blobRafRef.current); };
  }, []);

  return (
    <div className="h-full">
      <style>{`
        @keyframes bm1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(8%,12%) scale(1.08)}66%{transform:translate(-5%,6%) scale(0.95)}}
        @keyframes bm2{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-10%,-8%) scale(1.06)}66%{transform:translate(6%,-12%) scale(0.97)}}
        @keyframes bm3{0%,100%{transform:translate(0,0) scale(1) rotate(0deg)}33%{transform:translate(-8%,10%) scale(1.1) rotate(15deg)}66%{transform:translate(10%,-6%) scale(0.92) rotate(-10deg)}}
        .bblob{position:absolute;border-radius:50%;filter:blur(40px);opacity:0.75;mix-blend-mode:multiply}
        .bb1{width:55%;height:75%;background:radial-gradient(circle,#c4b5fd,#a78bfa);top:-15%;left:-10%;animation:bm1 9s ease-in-out infinite}
        .bb2{width:50%;height:70%;background:radial-gradient(circle,#ddd6fe,#818cf8);bottom:-20%;right:-5%;animation:bm2 11s ease-in-out infinite}
        .bb3{width:40%;height:55%;background:radial-gradient(circle,#ede9fe,#c084fc);top:30%;left:30%;animation:bm3 13s ease-in-out infinite}
      `}</style>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Nav pills */}
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {BG_ITERATIONS.map((it, i) => (
            <button
              key={it.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {it.n}
            </button>
          ))}
          {active === 3 && <span className="ml-auto font-mono text-[8px] text-zinc-300 self-center">move cursor inside</span>}
        </div>

        {/* Stage preview */}
        <div
          className="relative flex min-h-[140px] w-full flex-1 items-center justify-center overflow-hidden px-4 py-10"
          onMouseMove={(e) => {
            if (active !== 3) return;
            const rect = e.currentTarget.getBoundingClientRect();
            blobTargetRef.current = {
              x: (e.clientX - rect.left) / rect.width - 0.5,
              y: (e.clientY - rect.top) / rect.height - 0.5,
            };
          }}
          onMouseLeave={() => { blobTargetRef.current = { x: 0, y: 0 }; }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ position: "absolute", inset: 0 }}
            >
              {active === 0 && <BgStage00 />}
              {active === 1 && <BgStage01 />}
              {active === 2 && <BgStage02 />}
              {active === 3 && <BgStage03 blobPos={blobPos} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reason footer */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-[0.78rem] leading-snug text-zinc-400"
            >
              {BG_ITERATIONS[active].reason}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function BuddyButtonIterations() {
  const [active, setActive] = useState(0);
  const current = ITERATIONS[active];

  return (
    <div className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Nav pills */}
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {ITERATIONS.map((it, i) => (
            <button
              key={it.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {it.n}
            </button>
          ))}
        </div>

        {/* Button preview */}
        <div className="relative flex min-h-[140px] w-full flex-1 items-center justify-center px-4 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex w-full items-center justify-center"
            >
              {current.renderButton()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reason */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <p className="text-[0.78rem] leading-snug text-zinc-400">
            {current.reason}
          </p>
        </div>
      </div>
    </div>
  );
}
