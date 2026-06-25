"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = { n: string; label?: string; reason: string; render: () => ReactNode };

/* ── Shared iteration viewer (tabs → animated preview → reason) ── */
function IterationCard({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-sm">
        {/* Tabs */}
        <div className="flex gap-1.5 border-b border-zinc-200/50 px-5 py-3">
          {stages.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] transition-colors",
                i === active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600",
              ].join(" ")}
            >
              {s.n}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className="relative flex min-h-[150px] w-full flex-1 items-center justify-center overflow-hidden px-4 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex w-full items-center justify-center"
            >
              {current.render()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200/50 px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-[0.78rem] leading-snug text-zinc-500">{current.reason}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── 1. Haptic authorization ── */
function HapticTap() {
  const [pressed, setPressed] = useState(false);
  return (
    <motion.button
      type="button"
      onClick={() => setPressed((p) => !p)}
      whileTap={{ scale: 0.94 }}
      animate={{
        backgroundColor: pressed ? "#4037D2" : "rgba(64,55,210,0.55)",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="flex h-16 w-16 items-center justify-center rounded-full px-1 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-white shadow-[0_6px_18px_-6px_rgba(64,55,210,0.6)]"
    >
      {pressed ? "Success!" : "tap"}
    </motion.button>
  );
}
function HapticHold() {
  const [holding, setHolding] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const C = 2 * Math.PI * 29;

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };
  const start = () => {
    clearTimer();
    setSuccess(false);
    setHolding(true);
    timer.current = setTimeout(() => {
      setSuccess(true);
      setHolding(false);
    }, 1000);
  };
  const cancel = () => {
    clearTimer();
    setHolding(false);
  };
  useEffect(() => clearTimer, []);

  const filled = holding || success;
  const accent = success ? "#26A50A" : "#4037D2";

  return (
    <button
      type="button"
      onPointerDown={start}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      className="relative flex h-16 w-16 items-center justify-center"
    >
      {/* Liquid glass body */}
      <div className="absolute inset-0 rounded-full border border-white/50 bg-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),inset_0_-6px_12px_-6px_rgba(40,30,150,0.25),0_10px_28px_-10px_rgba(64,55,210,0.5)] backdrop-blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4037D2]/40 via-white/10 to-[#4037D2]/30" />
      <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden />

      {/* Hold progress ring */}
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <motion.circle
          cx="32"
          cy="32"
          r="29"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={false}
          animate={{ strokeDashoffset: filled ? 0 : C }}
          transition={{ duration: holding ? 1 : 0.25, ease: "easeInOut" }}
        />
      </svg>

      <span className="relative px-1 text-center font-mono text-[7px] uppercase tracking-[0.12em]" style={{ color: accent }}>
        {success ? "Success!" : "hold"}
      </span>
    </button>
  );
}
function HapticPad() {
  // The haptic signature is a custom squiggle (Vector 47). Metaball circles are
  // merged with a gooey filter; the user drags the purple dot along the whole
  // squiggle, edge to edge through every bulb, to authorize.
  const balls: Array<[number, number, number]> = [
    [44, 132, 24],
    [72, 112, 17],
    [98, 84, 28],
    [130, 98, 17],
    [160, 118, 22],
    [190, 100, 17],
    [214, 82, 26],
    [246, 98, 20],
    [272, 114, 32],
  ];

  // Smooth path that runs through every bulb center (no skipped stops).
  const centers = balls.map(([x, y]) => [x, y] as const);
  let d = `M ${centers[0][0]},${centers[0][1]} `;
  for (let i = 1; i < centers.length - 1; i++) {
    const xc = (centers[i][0] + centers[i + 1][0]) / 2;
    const yc = (centers[i][1] + centers[i + 1][1]) / 2;
    d += `Q ${centers[i][0]},${centers[i][1]} ${xc},${yc} `;
  }
  const last = centers[centers.length - 1];
  d += `Q ${last[0]},${last[1]} ${last[0]},${last[1]}`;

  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const draggingRef = useRef(false);
  const doneRef = useRef(false);
  const [pt, setPt] = useState(() => ({ x: centers[0][0], y: centers[0][1] }));
  const [done, setDone] = useState(false);

  const setFromPointer = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;
    const rect = svg.getBoundingClientRect();
    const px = ((clientX - rect.left) / rect.width) * 320;
    const py = ((clientY - rect.top) / rect.height) * 184;

    // Project the pointer onto the path: find the closest point by sampling.
    const L = path.getTotalLength();
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i <= 160; i++) {
      const l = (i / 160) * L;
      const p = path.getPointAtLength(l);
      const dx = p.x - px;
      const dy = p.y - py;
      const dist = dx * dx + dy * dy;
      if (dist < bestDist) {
        bestDist = dist;
        best = l;
      }
    }
    const p = path.getPointAtLength(best);
    setPt({ x: p.x, y: p.y });
    if (best >= L * 0.97) {
      doneRef.current = true;
      setDone(true);
    }
  };

  const handleDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    doneRef.current = false;
    setDone(false);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromPointer(e.clientX, e.clientY);
  };
  const handleMove = (e: React.PointerEvent) => {
    if (draggingRef.current) setFromPointer(e.clientX, e.clientY);
  };
  const handleUp = () => {
    draggingRef.current = false;
    if (!doneRef.current) {
      setPt({ x: centers[0][0], y: centers[0][1] });
    }
  };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 184"
      width={224}
      height={129}
      role="img"
      aria-label="Drag the dot along the haptic signature to authorize"
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      className="cursor-grab touch-none active:cursor-grabbing"
    >
      <defs>
        <filter id="haptic-goo" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
            result="goo"
          />
          <feGaussianBlur in="goo" stdDeviation="0.5" />
        </filter>
        <linearGradient id="haptic-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef6e7" />
          <stop offset="100%" stopColor="#cfe6c0" />
        </linearGradient>
      </defs>

      <g filter="url(#haptic-goo)">
        <g fill="url(#haptic-grad)">
          {balls.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
        </g>
      </g>

      {/* invisible path, used only to guide the drag (no visible line) */}
      <path ref={pathRef} d={d} fill="none" stroke="none" />

      <circle cx={pt.x} cy={pt.y} r={10} fill={done ? "#26A50A" : "#4037D2"} stroke="#fff" strokeWidth={2} />

      {done && (
        <text
          x="160"
          y="30"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="18"
          fontWeight="600"
          letterSpacing="1"
          fill="#26A50A"
        >
          Success!
        </text>
      )}
    </svg>
  );
}

/* ── 2. Avatar skin & look ── */
function AvatarShot({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={encodeURI(src)}
        alt={alt}
        className="h-[210px] w-auto max-w-full rounded-lg object-contain"
        loading="lazy"
      />
    </>
  );
}

/* ── Stylized avatar glyph (a bit person, a bit not) ── */
function AvatarGlyph({ size = 62, expression = "neutral" }: { size?: number; expression?: "neutral" | "concerned" }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-label="Avatar">
      {/* shoulders */}
      <path d="M8 47c1.6-8.5 7-12.5 16-12.5S38.4 38.5 40 47Z" fill="#C7C5C1" />
      {/* head: rounded square reads a bit person, a bit not */}
      <rect x="12" y="5" width="24" height="27" rx="10" fill="#D8D6D2" />
      {/* eyes */}
      <circle cx="19.5" cy="17" r="1.9" fill="#3F3F46" />
      <circle cx="28.5" cy="17" r="1.9" fill="#3F3F46" />
      {expression === "concerned" ? (
        <>
          {/* raised, arched brows + small open mouth = scared, not mad */}
          <path d="M15.5 13.5q4-3.2 8 0" stroke="#3F3F46" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M24.5 13.5q4-3.2 8 0" stroke="#3F3F46" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="24" cy="25" rx="2.1" ry="2.7" fill="#3F3F46" />
        </>
      ) : (
        <path d="M20.5 23.5q3.5 2.6 7 0" stroke="#3F3F46" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

/* ── 3. Money bar ── */
function MoneyScreen({ variant }: { variant: "squareTotal" | "ogGray" | "topLeftGreen" | "greenBottom" }) {
  return (
    <div className="relative h-[128px] w-[150px] overflow-hidden rounded-lg bg-[#f7f7f5] ring-1 ring-zinc-200/70">
      {/* page content: stylized avatar icon, sits behind the bar / UI chrome */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AvatarGlyph />
      </div>
      {variant === "squareTotal" && (
        // Earliest concept: a plain square-edged bar pinned to the bottom that always shows the running money total.
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between bg-zinc-900 px-2 py-1.5">
          <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-zinc-400">total</span>
          <span className="font-mono text-[9px] font-medium tabular-nums text-white">$1,240</span>
        </div>
      )}
      {variant === "ogGray" && (
        // OG spec: Rectangle 24 (#909090) track + Rectangle 25 (#E0E0E0) fill, tucked bottom-right.
        <div className="absolute bottom-2 right-2">
          <div className="relative" style={{ width: 68, height: 12 }}>
            <div className="absolute inset-0 rounded-full" style={{ background: "#909090" }} />
            <div className="absolute rounded-full" style={{ left: 1.3, top: 1.3, width: 64, height: 9, background: "#E0E0E0" }} />
          </div>
        </div>
      )}
      {variant === "topLeftGreen" && (
        // Spec: Rectangle 33 (#EEEEED pill) + Rectangle 35 (#26A50A) fill, with a gradient, top-left.
        <div className="absolute left-2 top-2 flex items-center rounded-[13px] px-1.5 py-1.5" style={{ background: "#EEEEED" }}>
          <div className="relative overflow-hidden rounded-full" style={{ width: 74, height: 13, background: "rgba(0,0,0,0.05)" }}>
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: "72%", background: "linear-gradient(90deg, #7bdc56, #26A50A)" }}
            />
          </div>
        </div>
      )}
      {variant === "greenBottom" && (
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 border-t border-lime-200/60 bg-lime-50 px-2 py-1.5">
          <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-lime-700">budget</span>
          <span className="ml-auto h-1.5 w-16 rounded-full bg-lime-200/70">
            <span className="block h-full w-2/3 rounded-full bg-lime-500" />
            <span className="-mt-1.5 ml-[66%] block h-1.5 w-1.5 rounded-full bg-violet-500 ring-2 ring-white" />
          </span>
        </div>
      )}
    </div>
  );
}

/* ── 4. Error states ── */
function ErrorState({ variant }: { variant: "screenRed" | "concernedRed" | "onTheme" }) {
  if (variant === "screenRed") {
    // The whole screen flashes red and shouts. Maximum panic.
    return (
      <div className="flex h-[128px] w-[150px] flex-col items-center justify-center gap-1.5 rounded-lg bg-red-500 px-4 text-center ring-1 ring-red-600/40">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-white">Error!</span>
        <span className="text-[8px] font-medium leading-snug text-white/90">oh no, there is an error!</span>
      </div>
    );
  }
  if (variant === "concernedRed") {
    // Avatar shows concern, but the red ERROR! is still shouting. Calmer, still too intense.
    return (
      <div className="flex h-[128px] w-[150px] flex-col items-center justify-center gap-1 rounded-lg bg-[#f7f7f5] ring-1 ring-red-200">
        <AvatarGlyph size={52} expression="concerned" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-red-600">Error!</span>
      </div>
    );
  }
  // On-theme recovery: calm off-white + lime, avatar guides the fix without breaking the project's look.
  return (
    <div className="flex h-[128px] w-[150px] items-center justify-center rounded-lg bg-[#f7f7f5] ring-1 ring-zinc-200/70">
      <div className="flex w-[126px] items-start gap-2 rounded-md bg-white p-2.5 shadow-sm ring-1 ring-lime-200/60">
        <span className="shrink-0">
          <AvatarGlyph size={24} expression="concerned" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="h-1.5 w-full rounded-full bg-zinc-300" />
          <span className="h-1 w-3/4 rounded-full bg-zinc-200" />
          <span className="mt-0.5 flex h-3.5 w-12 items-center justify-center rounded-full bg-lime-500/90 font-mono text-[6px] uppercase tracking-[0.1em] text-white">retry</span>
        </div>
      </div>
    </div>
  );
}

/* ── Card data ── */
const HAPTIC: Stage[] = [
  { n: "01", reason: "Tapping gesture too simple and could be accidental.", render: () => <HapticTap /> },
  { n: "02", reason: "Haptic + visual = faster decisions and recall, but still can be done by AI. (Neuroscience, 2022)", render: () => <HapticHold /> },
  { n: "03", reason: "Using a gesture only humans can make encourages trust. (APA, 2023)", render: () => <HapticPad /> },
];

const AVATAR: Stage[] = [
  { n: "01", label: "Illustration", reason: "Uncanny valley is avoided when stylization is between 10 to 30%.", render: () => <AvatarShot src="/eidolon/color (3).png" alt="Avatar, illustration style" /> },
  { n: "02", label: "Non-gendered", reason: "Non gendered allows agent to engage in non-biased action.", render: () => <AvatarShot src="/eidolon/b&w 1.png" alt="Avatar, non-gendered black and white base" /> },
  { n: "03", label: "Gold Skin", reason: "Gold skin leads to feelings of trust and wisdom.", render: () => <AvatarShot src="/eidolon/color (2).png" alt="Avatar, gold skin pass" /> },
];

const MONEY: Stage[] = [
  { n: "01", reason: "Number is too intense and causes stress.", render: () => <MoneyScreen variant="squareTotal" /> },
  { n: "02", reason: "Rounded edges leads to 14% higher feelings of optimism.", render: () => <MoneyScreen variant="ogGray" /> },
  { n: "03", reason: "Bar on the top-left follows F-pattern protocol, and green is shown to reduce cortisol. (APA, 2023)", render: () => <MoneyScreen variant="topLeftGreen" /> },
];

const ERRORS: Stage[] = [
  { n: "01", reason: "Large error state just raises fear.", render: () => <ErrorState variant="screenRed" /> },
  { n: "02", reason: "Active participation reduces bias but seen as too fearful. (ABX Lab, MIT)", render: () => <ErrorState variant="concernedRed" /> },
  { n: "03", reason: "AI shows confusion, user forgives more. (Robot Transparency, 2017)", render: () => <ErrorState variant="onTheme" /> },
];

export function EidolonIterationCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-2">
      <IterationCard stages={HAPTIC} />
      <IterationCard stages={AVATAR} />
      <IterationCard stages={MONEY} />
      <IterationCard stages={ERRORS} />
    </div>
  );
}
