"use client";

import { useCallback, useId, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useCarouselSwipe } from "@/lib/carousel-swipe";
import { cn } from "@/lib/cn";

const SPRING = { type: "spring" as const, stiffness: 400, damping: 32, mass: 1 };

/** Soft, slow spring — shared layout pill glides with minimal snap. */
const MORPH_SPRING = {
  type: "spring" as const,
  stiffness: 64,
  damping: 15,
  mass: 1.38,
  restSpeed: 0.12,
  restDelta: 0.00015,
};

type ProjectGalleryRowProps = {
  images: string[];
  /** `white`: solid white frame (no frosted / liquid overlays). */
  theme?: "paper" | "dark" | "violet" | "lime" | "sky" | "orange" | "white" | "pink";
  /** Merged onto the outer wrapper; default includes `my-8`. */
  className?: string;
  /**
   * `compact`: Buddy progress row. `medium`: wider strip (e.g. 16:9 on md). `phone`: ~9:19 tall UI
   * (minimizes side letterboxing for portrait screenshots). `default`: tall portrait (4:5 / 3:4).
   */
  frameSize?: "default" | "compact" | "medium" | "phone";
  /**
   * `liquid`: nav-style frosted glass on `violet` only (border, blur, highlight, shimmer).
   * Other themes ignore this.
   */
  glassVariant?: "standard" | "liquid";
  /** `none`: edge-to-edge. `tight`: smaller inset so imagery sits closer to the frame. */
  slidePadding?: "default" | "none" | "tight";
  /** `cover`: crop to fill frame — removes side letterboxing on wide carousels. */
  slideImageFit?: "contain" | "cover";
  /** Smaller arrows + dots (useful when controls crowd). */
  navSize?: "default" | "sm";
  /** Hide the dot/pill indicator row (keeps arrows + keyboard nav). */
  showDots?: boolean;
  /** Indicator style under the carousel. */
  dotStyle?: "pill" | "dots" | "track";
  /** For `frameSize="phone"`: reduce max height slightly. */
  phoneHeight?: "tall" | "short";
};

export function ProjectGalleryRow({
  images,
  theme = "paper",
  className,
  frameSize = "default",
  glassVariant = "standard",
  slidePadding = "default",
  slideImageFit = "contain",
  navSize = "default",
  showDots = true,
  dotStyle = "pill",
  phoneHeight = "tall",
}: ProjectGalleryRowProps) {
  const uid = useId().replace(/:/g, "");
  const layoutScopeId = `pg-scope-${uid}`;
  const pillLayoutId = `pg-pill-${uid}`;

  const [index, setIndex] = useState(0);
  const n = images.length;
  const slideIndex = n === 0 ? 0 : ((index % n) + n) % n;

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => {
      const cur = n === 0 ? 0 : ((i % n) + n) % n;
      return (cur + dir + n) % n;
    });
  }, [n]);

  const swipe = useCarouselSwipe(go, n > 1);

  if (n === 0) return null;

  const isLiquidViolet = theme === "violet" && glassVariant === "liquid";
  const isLiquidLime = theme === "lime" && glassVariant === "liquid";
  const isLiquidSky = theme === "sky" && glassVariant === "liquid";
  const isLiquidOrange = theme === "orange" && glassVariant === "liquid";
  const isLiquidPink = theme === "pink" && glassVariant === "liquid";
  const isLiquidGlass = glassVariant === "liquid";
  const liquidWhiteTint = cn(
    "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
    "bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
    "ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125"
  );

  const frameClass =
    theme === "white"
      ? "rounded-xl bg-white shadow-[0_8px_32px_-14px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/80"
      : theme === "dark"
      ? isLiquidGlass
        ? liquidWhiteTint
        : "rounded-xl bg-zinc-900/40 ring-1 ring-white/10"
      : isLiquidOrange
        ? cn(
            "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
            "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(234,88,12,0.22),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
            "ring-1 ring-orange-200/45 backdrop-blur-2xl backdrop-saturate-125"
          )
      : isLiquidSky
        ? cn(
            "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
            "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(15,142,199,0.24),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
            "ring-1 ring-sky-200/45 backdrop-blur-2xl backdrop-saturate-125"
          )
      : isLiquidLime
        ? cn(
            "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
            "bg-white/[0.26] shadow-[0_18px_60px_-26px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
            "ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125"
          )
        : isLiquidViolet
          ? cn(
              "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
              "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(76,29,149,0.22),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
              "ring-1 ring-violet-200/40 backdrop-blur-2xl backdrop-saturate-125"
            )
          : isLiquidPink
          ? cn(
              "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
              "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(219,39,119,0.22),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
              "ring-1 ring-pink-200/45 backdrop-blur-2xl backdrop-saturate-125"
            )
          : theme === "violet" || theme === "lime" || theme === "sky"
            ? "rounded-xl border-[0.5px] border-white/70 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/35"
            : "rounded-xl bg-zinc-100/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.07]";

  const slideShellClass =
    frameSize === "compact"
      ? "relative aspect-[4/3] max-h-[min(40dvh,300px)] w-full min-h-[130px] sm:max-h-[min(42dvh,320px)] md:aspect-[3/2] md:max-h-[min(44dvh,340px)] md:min-h-[150px]"
      : frameSize === "medium"
        ? "relative aspect-[5/3] max-h-[min(48dvh,440px)] w-full min-h-[160px] sm:max-h-[min(50dvh,460px)] md:aspect-[16/9] md:max-h-[min(54dvh,520px)] md:min-h-[180px]"
        : frameSize === "phone"
          ? cn(
              "relative aspect-[9/19] w-full min-h-[180px] sm:min-h-[200px]",
              phoneHeight === "short" ? "max-h-[min(76dvh,820px)]" : "max-h-[min(88dvh,920px)]"
            )
          : "relative aspect-[4/5] max-h-[min(72dvh,640px)] w-full min-h-[220px] md:aspect-[3/4] md:max-h-[min(76dvh,720px)]";

  const slideMotionPadClass =
    slidePadding === "none"
      ? "p-0"
      : slidePadding === "tight"
        ? "px-1.5 py-3 sm:px-2 md:px-2.5 md:py-4"
        : "p-3 md:p-5";

  const arrowClass = cn(
    // Keep a stable hit area, but allow “no-circle” styling per theme.
    "flex shrink-0 items-center justify-center",
    isLiquidSky
      ? cn(
          // E*Trade: chevrons only (no visible circular pill)
          "rounded-full border-[0.5px] border-transparent bg-transparent",
          "text-[#0F8EC7] drop-shadow-[0_10px_22px_rgba(15,142,199,0.35)]",
          "transition-[color,filter,transform] hover:text-[#0F8EC7]/90 hover:drop-shadow-[0_12px_28px_rgba(15,142,199,0.48)] active:translate-y-[0.5px]",
          "focus-visible:ring-1 focus-visible:ring-[#0F8EC7]/60"
        )
      : isLiquidOrange
        ? cn(
            // Orange: chevrons only (no visible circular pill)
            "rounded-full border-[0.5px] border-transparent bg-transparent",
            "text-orange-700 drop-shadow-[0_10px_22px_rgba(234,88,12,0.28)]",
            "transition-[color,filter,transform] hover:text-orange-700/90 hover:drop-shadow-[0_12px_28px_rgba(234,88,12,0.42)] active:translate-y-[0.5px]",
            "focus-visible:ring-1 focus-visible:ring-orange-400/60"
          )
      : isLiquidViolet
        ? cn(
            // Violet: chevrons only (no visible circular pill)
            "rounded-full border-[0.5px] border-transparent bg-transparent",
            "text-violet-700 drop-shadow-[0_10px_22px_rgba(109,40,217,0.28)]",
            "transition-[color,filter,transform] hover:text-violet-700/90 hover:drop-shadow-[0_12px_28px_rgba(109,40,217,0.42)] active:translate-y-[0.5px]",
            "focus-visible:ring-1 focus-visible:ring-violet-400/60"
          )
      : isLiquidPink
        ? cn(
            // Pink: chevrons only (no visible circular pill)
            "rounded-full border-[0.5px] border-transparent bg-transparent",
            "text-pink-600 drop-shadow-[0_10px_22px_rgba(219,39,119,0.28)]",
            "transition-[color,filter,transform] hover:text-pink-600/90 hover:drop-shadow-[0_12px_28px_rgba(219,39,119,0.42)] active:translate-y-[0.5px]",
            "focus-visible:ring-1 focus-visible:ring-pink-400/60"
          )
        : isLiquidLime
          ? cn(
              // Lime: chevrons only (no visible circular pill)
              "rounded-full border-[0.5px] border-transparent bg-transparent",
              "text-lime-700 drop-shadow-[0_10px_22px_rgba(132,204,22,0.28)]",
              "transition-[color,filter,transform] hover:text-lime-700/90 hover:drop-shadow-[0_12px_28px_rgba(132,204,22,0.42)] active:translate-y-[0.5px]",
              "focus-visible:ring-1 focus-visible:ring-lime-400/60"
            )
      : isLiquidGlass
          ? cn(
              // White/dark liquid: chevrons only (no visible circular pill)
              "rounded-full border-[0.5px] border-transparent bg-transparent",
              "text-zinc-700",
              "transition-[color,transform] hover:text-zinc-500 active:translate-y-[0.5px]",
              "focus-visible:ring-1 focus-visible:ring-zinc-400/60"
            )
      : cn(
          // Standard non-liquid: black liquid-glass buttons
          "rounded-full border-[0.5px] border-white/15 bg-black/35 text-white/90",
          "shadow-[0_10px_30px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
          "backdrop-blur-xl backdrop-saturate-150",
          "outline-none transition-colors hover:bg-black/45 active:bg-black/55",
          "focus-visible:ring-1 focus-visible:ring-white/35"
        ),
    "outline-none",
    "disabled:cursor-not-allowed disabled:opacity-25",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    navSize === "sm" ? "h-7 w-7 text-[14px]" : "h-9 w-9 text-[16px]"
  );

  const inactiveDotClass =
    isLiquidSky
      ? "block h-1.5 w-1.5 rounded-full bg-[#0F8EC7]/35 shadow-[0_0_12px_-6px_rgba(15,142,199,0.85)]"
      : isLiquidOrange
        ? "block h-1.5 w-1.5 rounded-full bg-orange-500/25 shadow-[0_0_12px_-7px_rgba(234,88,12,0.6)]"
      : isLiquidViolet
        ? "block h-1.5 w-1.5 rounded-full bg-violet-500/25 shadow-[0_0_12px_-7px_rgba(109,40,217,0.6)]"
      : isLiquidPink
        ? "block h-1.5 w-1.5 rounded-full bg-pink-500/25 shadow-[0_0_12px_-7px_rgba(219,39,119,0.6)]"
      : isLiquidLime
        ? "block h-1.5 w-1.5 rounded-full bg-lime-500/25 shadow-[0_0_12px_-7px_rgba(132,204,22,0.55)]"
      : isLiquidGlass
        ? "block h-1.5 w-1.5 rounded-full bg-black/55"
      : theme === "lime"
      ? "block h-1.5 w-1.5 rounded-full bg-lime-500/50"
      : theme === "violet"
        ? "block h-1.5 w-1.5 rounded-full bg-violet-400/45"
        : theme === "orange"
          ? "block h-1.5 w-1.5 rounded-full bg-orange-400/45"
        : theme === "dark"
          ? "block h-1.5 w-1.5 rounded-full bg-white/25"
          : "block h-1.5 w-1.5 rounded-full bg-zinc-300";

  const activePillClass =
    isLiquidSky
      ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-[#0F8EC7] shadow-[0_0_22px_-6px_rgba(15,142,199,0.78)] will-change-transform"
      : isLiquidOrange
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-[0_0_18px_-3px_rgba(234,88,12,0.45)] will-change-transform"
      : isLiquidViolet
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 shadow-[0_0_18px_-3px_rgba(109,40,217,0.45)] will-change-transform"
      : isLiquidPink
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow-[0_0_18px_-3px_rgba(219,39,119,0.45)] will-change-transform"
      : isLiquidLime
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 shadow-[0_0_18px_-3px_rgba(132,204,22,0.42)] will-change-transform"
      : isLiquidGlass
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-black shadow-[0_0_18px_-6px_rgba(0,0,0,0.35)] will-change-transform"
      : theme === "lime"
      ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 shadow-[0_0_18px_-3px_rgba(101,163,13,0.42)] will-change-transform"
      : theme === "violet"
        ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 shadow-[0_0_18px_-3px_rgba(109,40,217,0.45)] will-change-transform"
        : theme === "orange"
          ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-[0_0_18px_-3px_rgba(234,88,12,0.45)] will-change-transform"
        : theme === "dark"
          ? "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-zinc-100 shadow-[0_0_12px_-2px_rgba(255,255,255,0.2)] will-change-transform"
          : "h-[7px] min-h-[7px] w-[30px] min-w-[30px] rounded-full bg-zinc-800 shadow-sm will-change-transform";

  const activeDotClass =
    isLiquidSky
      ? "block h-1.5 w-1.5 rounded-full bg-[#0F8EC7] shadow-[0_0_14px_-5px_rgba(15,142,199,0.9)]"
      : isLiquidOrange
        ? "block h-1.5 w-1.5 rounded-full bg-orange-600 shadow-[0_0_14px_-5px_rgba(234,88,12,0.8)]"
      : isLiquidViolet
        ? "block h-1.5 w-1.5 rounded-full bg-violet-600 shadow-[0_0_14px_-5px_rgba(109,40,217,0.8)]"
      : isLiquidPink
        ? "block h-1.5 w-1.5 rounded-full bg-pink-600 shadow-[0_0_14px_-5px_rgba(219,39,119,0.8)]"
        : isLiquidGlass
          ? "block h-1.5 w-1.5 rounded-full bg-black shadow-[0_0_12px_-6px_rgba(0,0,0,0.45)]"
          : theme === "lime"
            ? "block h-1.5 w-1.5 rounded-full bg-lime-600 shadow-[0_0_12px_-6px_rgba(101,163,13,0.65)]"
            : theme === "violet"
              ? "block h-1.5 w-1.5 rounded-full bg-violet-600 shadow-[0_0_12px_-6px_rgba(109,40,217,0.55)]"
              : theme === "orange"
                ? "block h-1.5 w-1.5 rounded-full bg-orange-600 shadow-[0_0_12px_-6px_rgba(234,88,12,0.55)]"
              : theme === "dark"
                ? "block h-1.5 w-1.5 rounded-full bg-zinc-100 shadow-[0_0_12px_-6px_rgba(255,255,255,0.25)]"
                : "block h-1.5 w-1.5 rounded-full bg-zinc-800 shadow-sm";

  const trackInactiveDotClass = cn(
    "block h-1 w-1 rounded-full",
    isLiquidSky
      ? "bg-[#0F8EC7]/30 shadow-[0_0_12px_-7px_rgba(15,142,199,0.7)]"
      : isLiquidOrange
        ? "bg-orange-500/25 shadow-[0_0_12px_-7px_rgba(234,88,12,0.55)]"
      : isLiquidViolet
        ? "bg-violet-500/25 shadow-[0_0_12px_-7px_rgba(109,40,217,0.55)]"
      : isLiquidPink
        ? "bg-pink-500/25 shadow-[0_0_12px_-7px_rgba(219,39,119,0.55)]"
      : isLiquidLime
        ? "bg-lime-500/22 shadow-[0_0_12px_-7px_rgba(132,204,22,0.5)]"
      : isLiquidGlass
        ? "bg-black/45"
      : theme === "orange"
        ? "bg-orange-400/45"
      : theme === "violet"
        ? "bg-violet-400/45"
      : theme === "lime"
        ? "bg-lime-500/45"
      : theme === "dark"
        ? "bg-white/22"
      : "bg-zinc-300"
  );

  const trackActivePillClass = cn(
    "h-1.5 min-h-[6px] w-9 min-w-[36px] rounded-full will-change-transform",
    isLiquidSky
      ? "bg-[#0F8EC7] shadow-[0_0_20px_-8px_rgba(15,142,199,0.78)]"
      : isLiquidOrange
        ? "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-[0_0_18px_-8px_rgba(234,88,12,0.55)]"
      : isLiquidViolet
        ? "bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 shadow-[0_0_18px_-8px_rgba(109,40,217,0.55)]"
      : isLiquidPink
        ? "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow-[0_0_18px_-8px_rgba(219,39,119,0.55)]"
      : isLiquidLime
        ? "bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 shadow-[0_0_18px_-8px_rgba(132,204,22,0.5)]"
      : isLiquidGlass
        ? "bg-black shadow-[0_0_14px_-8px_rgba(0,0,0,0.35)]"
      : theme === "orange"
        ? "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-[0_0_18px_-8px_rgba(234,88,12,0.5)]"
      : theme === "violet"
        ? "bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 shadow-[0_0_18px_-8px_rgba(109,40,217,0.5)]"
      : theme === "lime"
        ? "bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 shadow-[0_0_18px_-8px_rgba(101,163,13,0.45)]"
      : theme === "dark"
        ? "bg-zinc-100 shadow-[0_0_14px_-8px_rgba(255,255,255,0.2)]"
      : "bg-zinc-800 shadow-sm"
  );

  return (
    <div className={cn("my-8", className)}>
      <div
        className="outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Image gallery"
        tabIndex={0}
        onKeyDown={(e) => {
          if (n <= 1) return;
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
      >
        <div
          className={cn(
            "relative touch-manipulation overflow-hidden select-none",
            n > 1 && "cursor-grab active:cursor-grabbing",
            frameClass
          )}
          {...swipe}
        >
          {isLiquidViolet ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-violet-100/[0.12]"
                aria-hidden
              />
              <div
                className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
            </>
          ) : isLiquidPink ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-pink-100/[0.14]"
                aria-hidden
              />
              <div
                className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
            </>
          ) : isLiquidOrange ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-orange-100/[0.14]"
                aria-hidden
              />
              <div
                className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
            </>
          ) : isLiquidLime ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-lime-100/[0.14]"
                aria-hidden
              />
              <div
                className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
            </>
          ) : isLiquidSky ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/[0.06] to-sky-100/[0.14]"
                aria-hidden
              />
              <div
                className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
            </>
          ) : theme === "violet" || theme === "lime" || theme === "orange" ? (
            <div
              className={cn(
                "pointer-events-none absolute inset-0 backdrop-blur-xl",
                theme === "lime" ? "bg-lime-50/60" : theme === "orange" ? "bg-orange-50/55" : "bg-white/50"
              )}
              aria-hidden
            />
          ) : theme === "sky" ? (
            <div
              className="pointer-events-none absolute inset-0 bg-sky-50/60 backdrop-blur-xl"
              aria-hidden
            />
          ) : null}
          <div
            className={cn(
              "relative",
              (theme === "violet" || theme === "lime" || theme === "sky") && "z-[1]"
            )}
          >
            <div className={slideShellClass}>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={slideIndex}
                  className={cn(
                    "absolute inset-0 min-h-0 min-w-0",
                    slideImageFit === "cover"
                      ? slideMotionPadClass
                      : cn("flex items-center justify-center", slideMotionPadClass)
                  )}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={SPRING}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[slideIndex]}
                    alt=""
                    className={
                      slideImageFit === "cover"
                        ? "h-full w-full object-cover"
                        : "max-h-full max-w-full object-contain"
                    }
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {n > 1 && (
          <div
            className={cn(
              "mt-4 flex w-full items-center justify-center",
              navSize === "sm" ? "gap-1 sm:gap-1.5" : "gap-1.5 sm:gap-2"
            )}
            role="toolbar"
            aria-label="Gallery navigation"
          >
            <button
              type="button"
              onClick={() => go(-1)}
              className={arrowClass}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {showDots && (
              <div className="min-w-0 px-1">
                <LayoutGroup id={layoutScopeId}>
                  <div
                    className={cn(
                      "relative flex items-center justify-center",
                      dotStyle === "track"
                        ? cn(
                            "w-full max-w-[min(560px,74vw)]",
                            "justify-between",
                            navSize === "sm" ? "gap-1.5" : "gap-2"
                          )
                        : navSize === "sm"
                          ? "gap-2 sm:gap-2.5"
                          : "gap-3 sm:gap-[14px]"
                    )}
                    role="tablist"
                    aria-label="Slides"
                  >
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === slideIndex}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={cn(
                          "relative flex items-center justify-center touch-manipulation",
                          dotStyle === "track"
                            ? cn("h-6", navSize === "sm" ? "flex-1 min-w-0" : "flex-1 min-w-0")
                            : cn("min-w-[18px]", navSize === "sm" ? "h-5" : "h-6")
                        )}
                      >
                        {i === slideIndex ? (
                          dotStyle === "track" ? (
                            <motion.div
                              layoutId={pillLayoutId}
                              transition={MORPH_SPRING}
                              className={trackActivePillClass}
                            />
                          ) : dotStyle === "dots" ? (
                            <motion.span
                              layoutId={pillLayoutId}
                              transition={MORPH_SPRING}
                              className={activeDotClass}
                              style={{ transformOrigin: "center" }}
                            />
                          ) : (
                            <motion.div
                              layoutId={pillLayoutId}
                              transition={MORPH_SPRING}
                              className={activePillClass}
                            />
                          )
                        ) : (
                          <span
                            className={dotStyle === "track" ? trackInactiveDotClass : inactiveDotClass}
                            aria-hidden
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </LayoutGroup>
              </div>
            )}

            <button
              type="button"
              onClick={() => go(1)}
              className={arrowClass}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
