"use client";

import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useState, useCallback, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCarouselSwipe } from "@/lib/carousel-swipe";
import { ProjectSurface } from "@/components/project-surface";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import type { SidebarSection } from "@/components/case-study-sidebar";
import { buildProjectBreadcrumb, CaseBreadcrumb } from "@/components/case-breadcrumb";
import { CaseChallengeDisclosure } from "@/components/case-challenge-disclosure";
import { CoolPageCursor } from "@/components/cool-page-cursor";
import { AutoPlayVideo } from "@/components/autoplay-video";
import { cn } from "@/lib/cn";
import { CategoryProjectsFooter } from "@/components/category-projects-footer";

/**
 * Solid canvas backdrop painted directly behind a mockup video so
 * `mix-blend-multiply` has a guaranteed local backdrop (Framer Motion transforms
 * otherwise create stacking contexts that block the blend from reaching the body).
 * Solid color (no dots / no fixed attachment) so it renders identically on mobile,
 * where `background-attachment: fixed` is disabled for being glitchy.
 */
const DOT_CANVAS_STYLE: CSSProperties = {
  backgroundColor: "var(--canvas)",
};

type Hero =
  | {
      kind: "video";
      src: string;
    }
  | {
      /** Multiple videos shown as a clickable carousel in the hero slot. */
      kind: "video-carousel";
      videos: string[];
      /**
       * `wide`: max width ~1280px.
       * `default`: matches the standard hero width.
       */
      size?: "default" | "wide";
      /** If true, show native controls. Defaults to false for hero playback. */
      controls?: boolean;
      /**
       * When true, videos fill the carousel width (best for 16:9 / landscape
       * recordings). Defaults to false (portrait sources like phone mockups).
       */
      landscape?: boolean;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      /**
       * `tall`: ~96svh frame + wide max-width + object-contain (works for landscape or portrait).
       * `compact`: default 16:9 hero with a smaller max width.
       * `full`: full-bleed across the viewport width.
       */
      layout?: "tall" | "compact" | "full";
    }
  | {
      /** Multiple images shown as a clickable carousel in the hero slot. */
      kind: "carousel";
      images: string[];
      alt?: string;
      layout?: "tall" | "compact" | "full";
    };

export type ManualProjectSection = {
  id: string;
  label: string;
  content: ReactNode;
  /** When true, adds a nav entry but does not render a <section> wrapper. */
  navOnly?: boolean;
  /** When true, renders the section normally but omits it from the sidebar nav. */
  hideFromNav?: boolean;
};

export type ManualProjectPageProps = {
  title: string;
  /** One-line project summary shown directly below the title. */
  description?: string;
  slug: string;
  category: string;
  hero?: Hero;
  /** If true, remove the small horizontal padding that normally protects hero media on mobile. */
  heroNoSidePadding?: boolean;
  /**
   * Controls the visible top heading on small screens (desktop title lives in the sidebar).
   * - `title`: show the project title.
   * - `description`: hide the visible title and show the description instead.
   */
  mobileHeading?: "title" | "description";
  /**
   * Where to place the one-line description relative to the hero.
   * - `above`: normal flow, above the media.
   * - `overlay`: positioned over the media, does not add vertical height.
   */
  descriptionPlacement?: "above" | "overlay";
  /** Optional content rendered directly under the hero block. */
  heroBelow?: ReactNode;
  /** Optional content rendered directly under the metadata (tech stack) grid. */
  metaBelow?: ReactNode;
  /** Optional styling for the hero frame (e.g. liquid glass on select pages). */
  heroFrameVariant?: "default" | "liquid";
  /** Remove rounded corners / shadow / ring from hero images. */
  heroImageFrameless?: boolean;
  /** Extra classes on the description paragraph (e.g. "mb-2" for tighter spacing, "text-center"). */
  descriptionClassName?: string;
  /** Optional sizing for the hero media. */
  heroSize?: "default" | "wide";
  /**
   * Optional sizing tweak for `hero.layout === "tall"`.
   * Use this when a page needs more breathing room but the hero should still read full-height.
   */
  heroTallSize?: "default" | "smaller" | "tiny";
  /** Optional: keep the tall hero slot tall (centers media). */
  heroTallFrame?: "default" | "fullHeight" | "tall";
  /** Optional: hero block spacing below the hero. */
  heroSpacing?: "default" | "none";
  /** Scale hero carousel images inside their card (zoom without growing the card). */
  heroImageZoom?: boolean;
  /** Accent color for carousel arrow buttons and dot indicators. Defaults to site olive. */
  heroAccentColor?: string;
  /** Optional styling for the page surface wrapper. */
  surfaceClassName?: string;
  /** Grain overlay on the surface. */
  showGrain?: boolean;
  /** Buddy-style expandable challenge panel shown near the top. */
  challengeSummary?: string;
  /** Hide the "Case Study" label in the sidebar (for projects that aren't case studies). */
  hideCaseStudyLabel?: boolean;
  meta?: {
    timeline?: string;
    roles?: string[];
    team?: string[];
    tools?: string[];
  };
  sections: ManualProjectSection[];
};

function HeroCarousel({
  images,
  alt = "Project image",
  layout,
  tallSize = "default",
  imageZoom = false,
  noSidePadding = false,
  accentColor = "#5a6648",
}: {
  images: string[];
  alt?: string;
  layout?: "tall" | "compact" | "full";
  tallSize?: "default" | "smaller" | "tiny";
  imageZoom?: boolean;
  noSidePadding?: boolean;
  accentColor?: string;
}) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const goSlide = useCallback(
    (dir: -1 | 1) => setIndex((i) => (((i + dir) % n) + n) % n),
    [n]
  );
  const swipe = useCarouselSwipe(goSlide, n > 1);

  const sizeClass =
    layout === "tall"
      ? tallSize === "tiny"
        ? cn(
            "max-h-[min(52svh,620px)]",
            noSidePadding ? "max-w-none w-full" : "max-w-[min(860px,100vw)]"
          )
        : tallSize === "smaller"
          ? cn(
              "max-h-[min(70svh,840px)]",
              noSidePadding ? "max-w-none w-full" : "max-w-[min(1100px,100vw)]"
            )
          : cn(
              "max-h-[min(100svh,1200px)]",
              noSidePadding ? "max-w-none w-full" : "max-w-[min(1600px,100vw)]"
            )
      : layout === "full"
        ? "aspect-video"
        : cn(
            // If it's a single-image hero in a non-tall slot, don't force a 16:9 box (it creates
            // visible top/bottom "padding" for extra-wide images like Vagabond Radio).
            n === 1 ? "h-auto" : "aspect-video",
            noSidePadding ? "max-w-none w-full" : "max-w-[min(1280px,100vw)]"
          );

  const cardClass = "rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]";

  const mediaHeightClass = layout === "tall" ? "h-auto" : n === 1 ? "h-auto" : "h-full";

  const imgClass = imageZoom
    ? cn("object-contain block w-full min-w-full scale-[1.1]", mediaHeightClass)
    : cn(cardClass, "object-contain block w-full min-w-full", mediaHeightClass, sizeClass);

  const heroNavBtn = cn(
    "absolute top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full leading-none",
    "border-[0.5px] border-white/15 bg-black/35 text-white/90",
    "shadow-[0_10px_30px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
    "backdrop-blur-xl backdrop-saturate-150",
    "outline-none transition-colors hover:bg-black/45 active:bg-black/55",
    "focus-visible:ring-1 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
  );

  return (
    <div
      className={cn(
        "relative w-full touch-manipulation touch-pan-y overscroll-x-contain",
        layout === "tall" && "flex flex-col items-center",
        layout === "full" &&
          "relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]",
        n > 1 && "pointer-fine:cursor-grab pointer-fine:active:cursor-grabbing select-none"
      )}
      {...swipe}
    >
      {imageZoom ? (
        <div className={cn(cardClass, sizeClass, "overflow-hidden w-full")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            alt={`${alt} ${index + 1} of ${n}`}
            className={imgClass}
            draggable={false}
          />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={images[index]}
          alt={`${alt} ${index + 1} of ${n}`}
          className={imgClass}
          draggable={false}
        />
      )}

      {/* Controls row: arrows + dots below the image */}
      {n > 1 && (
        <div className="mt-3 flex w-full items-center justify-between gap-3 px-1">
          <button
            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[1.2rem] leading-none shadow-sm backdrop-blur-md transition-colors touch-manipulation"
            style={{ background: `color-mix(in srgb, ${accentColor} 9%, white 91%)`, color: accentColor, outline: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)` }}
          >
            ‹
          </button>
          <div className="flex items-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className="flex h-12 w-12 items-center justify-center touch-manipulation focus:outline-none"
              >
                <span
                  className="block rounded-full transition-all duration-200"
                  style={i === index
                    ? { height: "10px", width: "26px", background: accentColor }
                    : { height: "10px", width: "10px", background: `color-mix(in srgb, ${accentColor} 28%, transparent)` }
                  }
                />
              </button>
            ))}
          </div>
          <button
            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[1.2rem] leading-none shadow-sm backdrop-blur-md transition-colors touch-manipulation"
            style={{ background: `color-mix(in srgb, ${accentColor} 9%, white 91%)`, color: accentColor, outline: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)` }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

function HeroVideoCarousel({
  videos,
  size = "default",
  controls = false,
  landscape = false,
}: {
  videos: string[];
  size?: "default" | "wide";
  controls?: boolean;
  /** When true, videos fill the carousel width (landscape sources). Defaults to false (portrait). */
  landscape?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const n = videos.length;
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const goSlide = useCallback(
    (dir: -1 | 1) => setIndex((i) => (((i + dir) % n) + n) % n),
    [n]
  );
  const swipe = useCarouselSwipe(goSlide, n > 1);

  const maxW =
    size === "wide"
      ? "max-w-[min(1280px,96vw)]"
      : "max-w-[min(880px,96vw)]";

  const frameRef = useRef<HTMLDivElement | null>(null);
  const [lockedW, setLockedW] = useState<number | null>(null);

  // Prevent horizontal layout shift when switching videos with different intrinsic widths.
  // We only lock to a *real* width (> 10 px) so an unloaded video (w-auto → 0) never
  // freezes the carousel at zero. A ResizeObserver re-fires once the video metadata
  // arrives and the frame expands to its natural dimensions.
  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const lock = (w: number) => {
      if (w > 10) setLockedW((prevW) => (prevW == null ? w : Math.max(prevW, w)));
    };

    const id = requestAnimationFrame(() => lock(el.getBoundingClientRect().width));
    const ro = new ResizeObserver(([entry]) => lock(entry.contentRect.width));
    ro.observe(el);

    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [index]);

  const heroNavBtn = cn(
    "absolute top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full leading-none",
    "border-[0.5px] border-white/15 bg-black/35 text-white/90",
    "shadow-[0_10px_30px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
    "backdrop-blur-xl backdrop-saturate-150",
    "outline-none transition-colors hover:bg-black/45 active:bg-black/55",
    "focus-visible:ring-1 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
  );

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          // Portrait: "hug" the video's natural width. Landscape: fill the carousel width
          // so 16:9 sources don't appear narrow on desktop.
          // min-w-[169px] ≈ 300 × 9/16, prevents a 0-width slot before metadata loads.
          "relative touch-manipulation touch-pan-y overscroll-x-contain",
          landscape ? "w-full" : "w-fit min-w-[169px]",
          maxW,
          n > 1 && "pointer-fine:cursor-grab pointer-fine:active:cursor-grabbing select-none"
        )}
        style={landscape || lockedW == null ? undefined : { width: lockedW }}
        {...swipe}
      >
        <div ref={frameRef} className="relative overflow-hidden rounded-2xl">
          <div
            className={cn(
              "flex justify-center",
              !landscape && index === 1 && "px-[30px]"
            )}
          >
            <AutoPlayVideo
              key={videos[index]}
              src={videos[index]}
              controls={controls}
              muted
              autoPlay
              loop
              preload="metadata"
              className={cn(
                landscape
                  // Landscape: width-bound, height auto with a generous viewport cap.
                  ? "h-auto w-full max-h-[min(92dvh,960px)] object-contain"
                  // Portrait: height-bound, width hugs aspect.
                  : "h-[min(92dvh,960px)] w-auto object-contain"
              )}
            />
          </div>

        </div>

        {/* Controls row: arrows + dots below the video */}
        {n > 1 && (
          <div className="mt-3 flex w-full items-center justify-between gap-3 px-1">
            <button
              onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
              aria-label="Previous video"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[1.2rem] leading-none text-zinc-600 shadow-sm ring-1 ring-black/[0.08] backdrop-blur-md transition-colors hover:bg-white active:bg-zinc-100 touch-manipulation"
            >
              ‹
            </button>
            <div className="flex items-center">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className="flex h-12 w-12 items-center justify-center touch-manipulation focus:outline-none"
                >
                  <span className={cn("block rounded-full transition-all duration-200", i === index ? "h-3 w-7 bg-zinc-700" : "h-3 w-3 bg-zinc-300")} />
                </button>
              ))}
            </div>
            <button
              onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
              aria-label="Next video"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[1.2rem] leading-none text-zinc-600 shadow-sm ring-1 ring-black/[0.08] backdrop-blur-md transition-colors hover:bg-white active:bg-zinc-100 touch-manipulation"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="mb-6 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]"
    >
      {children}
    </motion.p>
  );
}

function Divider() {
  return <div className="mt-19 mb-0 h-px w-full bg-zinc-200/50" />;
}

export function ManualProjectPage({
  title,
  description,
  slug,
  category,
  hero,
  heroNoSidePadding = false,
  mobileHeading = "title",
  heroBelow,
  metaBelow,
  heroFrameVariant = "default",
  heroSize = "default",
  heroTallSize = "default",
  heroTallFrame = "default",
  heroSpacing = "default",
  heroImageZoom = false,
  heroAccentColor,
  surfaceClassName,
  showGrain = true,
  descriptionClassName,
  descriptionPlacement = "above",
  challengeSummary,
  hideCaseStudyLabel = false,
  meta,
  sections,
}: ManualProjectPageProps) {
  const isNightterrors = slug === "nightterrors";
  const isEtrade = slug === "etrade";
  const sidebarSections: SidebarSection[] = [
    ...sections.slice(0, 1).filter(s => !s.hideFromNav).map(({ id, label }) => ({ id, label })),
    ...(challengeSummary ? [{ id: "the-challenge", label: "THE CHALLENGE" }] : []),
    ...sections.slice(1).filter(s => !s.hideFromNav).map(({ id, label }) => ({ id, label })),
  ];
  const breadcrumb = buildProjectBreadcrumb(slug, category);

  const metaCells: Array<{ label: string; value: string }> = [];
  if (meta?.timeline) metaCells.push({ label: "Timeline", value: meta.timeline });
  if (meta?.roles?.length) metaCells.push({ label: "Role", value: meta.roles.join("\n") });
  if (meta?.team?.length) metaCells.push({ label: "Team", value: meta.team.join("\n") });
  if (meta?.tools?.length) metaCells.push({ label: "Tools", value: meta.tools.join("\n") });

  const body = (
    <div className="contents">
      <CaseStudySidebar
        projectName={title}
        projectNameClassName={isEtrade ? "font-extralight" : "font-light"}
        sections={sidebarSections}
        breadcrumb={breadcrumb}
        hideRailAtMaxWidthPx={1000}
        hideCaseStudyLabel={hideCaseStudyLabel}
      />

      <main
        className={cn(
          "pb-40 font-sans antialiased",
          "max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:min-w-0",
          "max-[1000px]:max-w-[min(900px,96vw)] max-[1000px]:px-3",
          "max-[1000px]:pt-[calc(1.5rem+50px)] max-[1000px]:md:pt-[calc(2rem+50px)]",
          "min-[1001px]:ml-[calc(30px+max(22rem,12.5vw))] min-[1001px]:min-w-0 min-[1001px]:max-w-none",
          "min-[1001px]:pt-[50px]",
          "min-[1001px]:pl-[max(0.75rem,calc((100vw-min(900px,96vw))/2-30px-max(22rem,12.5vw)))]",
          "min-[1001px]:pr-12"
        )}
      >
        <div className="min-[1001px]:hidden">
          <CaseBreadcrumb segments={breadcrumb} />
        </div>

        <h1 className="sr-only">{title}</h1>
        {mobileHeading === "title" ? (
          <p
            className={cn(
              "font-mono text-[clamp(2.75rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.04em] text-zinc-950",
              "font-extralight max-[1000px]:block min-[1001px]:hidden",
              "mb-8 mt-0"
            )}
          >
            {title}
          </p>
        ) : (
          description && (
            <p className="mb-8 mt-0 block font-mono text-[clamp(1.05rem,2.2vw,1.4rem)] font-light leading-[1.25] tracking-[-0.02em] text-zinc-700 min-[1001px]:hidden">
              {description}
            </p>
          )
        )}

        {hero && (
          <div
            className={cn(
              heroSpacing === "none" ? "mb-0" : "mb-14",
              "w-full",
              // On small screens the page adds horizontal padding (`px-3`). When a case wants
              // hero media flush to the viewport, allow the hero block to bleed out of that gutter.
              heroNoSidePadding &&
                (!("layout" in hero) || hero.layout !== "full") &&
                "max-[1000px]:-mx-3 max-[1000px]:w-[calc(100%+1.5rem)]"
            )}
          >
            {/* Description should align to the hero media's left edge (not the full page). */}
            {hero.kind === "video" ? (
              <div className="flex justify-center">
                <div
                  className={cn(
                    "w-full",
                    heroSize === "wide"
                      ? "max-w-[min(1216px,calc(100vw-1.5rem))]"
                      : "max-w-[min(520px,88vw)] sm:max-w-[min(580px,86vw)] md:max-w-[min(640px,84vw)]"
                  )}
                >
                  {/* Description inside video's own container so it aligns with the video's left edge */}
                  {description && (
                    <p
                      className={cn(
                        "mb-6 font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                        descriptionClassName
                      )}
                    >
                      {description}
                    </p>
                  )}
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl",
                      // Liquid pages (E*Trade) sit frameless so the multiplied video drops
                      // its baked-in white mat against the page canvas.
                      heroFrameVariant === "liquid"
                        ? ""
                        : "border-[0.5px] border-zinc-200/80 bg-white"
                    )}
                    style={heroFrameVariant === "liquid" ? DOT_CANVAS_STYLE : undefined}
                  >
                    <div
                      className={cn(
                        "relative flex justify-center",
                        heroFrameVariant === "liquid" ? "" : "p-4 sm:p-5 md:p-6"
                      )}
                    >
                      <AutoPlayVideo
                        controls
                        muted
                        className={cn(
                          "h-auto w-full max-h-[min(92dvh,960px)] rounded-xl object-contain",
                          heroFrameVariant === "liquid"
                            ? "mix-blend-multiply"
                            : "bg-white ring-[0.5px] ring-zinc-200/60"
                        )}
                        src={hero.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : hero.kind === "video-carousel" ? (
              <div className="flex justify-center">
                <div
                  className={cn(
                    "w-full",
                    (hero.size ?? heroSize) === "wide"
                      ? "max-w-[min(1216px,calc(100vw-1.5rem))]"
                      : "max-w-[min(836px,calc(100vw-1.5rem))]"
                  )}
                >
                  {description && (
                    <p
                      className={cn(
                        "mb-6 font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                        descriptionClassName
                      )}
                    >
                      {description}
                    </p>
                  )}
                  <HeroVideoCarousel
                    videos={hero.videos}
                    size={hero.size ?? heroSize}
                    controls={hero.controls ?? false}
                    landscape={hero.landscape ?? false}
                  />
                </div>
              </div>
            ) : hero.kind === "carousel" ? (
              <div
                className={cn(
                  hero.layout === "tall" ? "flex justify-center" : "w-full",
                  hero.layout === "full" &&
                    "relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]"
                )}
              >
                <div
                  className={cn(
                    hero.layout === "tall" && (heroNoSidePadding ? "w-full" : "w-fit"),
                    hero.layout !== "full" &&
                      hero.layout !== "tall" &&
                      "mx-auto w-full max-w-[min(1216px,calc(100vw-1.5rem))]",
                    hero.layout === "tall" &&
                      (heroTallSize === "tiny"
                        ? heroNoSidePadding
                          ? "max-w-[min(860px,100vw)]"
                          : "max-w-[min(860px,calc(100vw-1.5rem))]"
                        : heroTallSize === "smaller"
                          ? heroNoSidePadding
                            ? "max-w-[min(1100px,100vw)]"
                            : "max-w-[min(1100px,calc(100vw-1.5rem))]"
                          : heroNoSidePadding
                            ? "max-w-[min(1600px,100vw)]"
                            : "max-w-[min(1600px,calc(100vw-1.5rem))]"),
                    hero.layout === "tall" && "mx-auto"
                  )}
                >
                  {description && descriptionPlacement === "above" && (
                    <p
                      className={cn(
                        "mb-6 text-left font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                        descriptionClassName
                      )}
                    >
                      {description}
                    </p>
                  )}
                  <div className={cn(descriptionPlacement === "overlay" && "relative")}>
                    {description && descriptionPlacement === "overlay" && (
                      <p
                        className={cn(
                          "absolute left-0 top-0 z-10 font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                          descriptionClassName
                        )}
                      >
                        {description}
                      </p>
                    )}
                    <HeroCarousel
                      images={hero.images}
                      alt={hero.alt}
                      layout={hero.layout}
                      tallSize={heroTallSize}
                      imageZoom={heroImageZoom}
                      noSidePadding={heroNoSidePadding}
                      accentColor={heroAccentColor}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  "w-full",
                  hero.layout === "tall" &&
                    (heroTallFrame === "fullHeight"
                      ? "flex min-h-[100svh] items-center justify-center"
                      : heroTallFrame === "tall"
                        ? "flex min-h-[88svh] items-center justify-center"
                      : "flex justify-center"),
                  hero.layout === "full" &&
                    "relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]"
                )}
              >
                {description && descriptionPlacement === "above" && (
                  <div
                    className={cn(
                      hero.layout === "tall" ? "flex justify-center" : "w-full",
                      hero.layout === "full" &&
                        "relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]"
                    )}
                  >
                    <div
                      className={cn(
                        hero.layout === "tall" && "w-fit",
                        hero.layout !== "full" && hero.layout !== "tall" && "w-full",
                        hero.layout !== "full" &&
                          hero.layout !== "tall" &&
                          (hero.layout === "compact"
                            ? "max-w-[min(836px,calc(100vw-1.5rem))]"
                            : "max-w-[min(1216px,calc(100vw-1.5rem))]"),
                        hero.layout === "tall" &&
                          (heroTallSize === "tiny"
                            ? heroNoSidePadding
                              ? "max-w-[min(860px,100vw)]"
                              : "max-w-[min(860px,calc(100vw-1.5rem))]"
                            : heroTallSize === "smaller"
                              ? heroNoSidePadding
                                ? "max-w-[min(1100px,100vw)]"
                                : "max-w-[min(1100px,calc(100vw-1.5rem))]"
                              : heroNoSidePadding
                                ? "max-w-[min(1600px,100vw)]"
                                : "max-w-[min(1600px,calc(100vw-1.5rem))]"),
                        hero.layout !== "full" && "mx-auto"
                      )}
                    >
                      <p
                        className={cn(
                          "mb-6 text-left font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                          descriptionClassName
                        )}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                )}
                {descriptionPlacement === "overlay" ? (
                  <div
                    className={cn(
                      "relative",
                      hero.layout === "tall" &&
                        (heroTallSize === "tiny"
                          ? heroNoSidePadding
                            ? "mx-auto w-full max-w-[min(860px,100vw)]"
                            : "mx-auto w-full max-w-[min(860px,calc(100vw-1.5rem))]"
                          : heroTallSize === "smaller"
                            ? heroNoSidePadding
                              ? "mx-auto w-full max-w-[min(1100px,100vw)]"
                              : "mx-auto w-full max-w-[min(1100px,calc(100vw-1.5rem))]"
                            : heroNoSidePadding
                              ? "mx-auto w-full max-w-[min(1600px,100vw)]"
                              : "mx-auto w-full max-w-[min(1600px,calc(100vw-1.5rem))]"),
                      hero.layout !== "full" &&
                        hero.layout !== "tall" &&
                        cn(
                          "mx-auto w-full",
                          hero.layout === "compact"
                            ? heroNoSidePadding
                              ? "max-w-[min(880px,100vw)]"
                              : "max-w-[min(836px,calc(100vw-1.5rem))]"
                            : heroNoSidePadding
                              ? "max-w-[min(1280px,100vw)]"
                              : "max-w-[min(1216px,calc(100vw-1.5rem))]"
                        )
                    )}
                  >
                    {description && (
                      <p
                        className={cn(
                          "absolute left-0 top-0 z-10 font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600",
                          descriptionClassName
                        )}
                      >
                        {description}
                      </p>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hero.src}
                      alt={hero.alt}
                      fetchPriority="high"
                      className={cn(
                        "w-full rounded-2xl object-contain object-center shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]",
                        hero.layout === "tall"
                          ? heroTallSize === "tiny"
                            ? "block max-h-[min(52svh,620px)]"
                            : heroTallSize === "smaller"
                              ? "block max-h-[min(70svh,840px)]"
                              : "block h-[min(100svh,1200px)]"
                          : hero.layout === "full"
                            ? "h-[min(52svh,560px)] max-w-none object-cover"
                            : "aspect-video h-auto object-cover"
                      )}
                    />
                  </div>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={hero.src}
                    alt={hero.alt}
                    fetchPriority="high"
                    className={cn(
                      "rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]",
                      hero.layout === "tall"
                        ? heroTallSize === "tiny"
                          ? cn(
                              "mx-auto block max-h-[min(52svh,620px)] w-auto object-contain object-center",
                              heroNoSidePadding
                                ? "max-w-[min(860px,100vw)]"
                                : "max-w-[min(860px,calc(100vw-1.5rem))]"
                            )
                          : heroTallSize === "smaller"
                            ? cn(
                                "mx-auto block max-h-[min(70svh,840px)] w-auto object-contain object-center",
                                heroNoSidePadding
                                  ? "max-w-[min(1100px,100vw)]"
                                  : "max-w-[min(1100px,calc(100vw-1.5rem))]"
                              )
                            : cn(
                                "mx-auto block h-[min(100svh,1200px)] w-auto object-contain object-center",
                                heroNoSidePadding
                                  ? "max-w-[min(1600px,100vw)]"
                                  : "max-w-[min(1600px,calc(100vw-1.5rem))]"
                              )
                        : hero.layout === "full"
                          ? "h-[min(52svh,560px)] w-full max-w-none object-cover"
                          : cn(
                              "aspect-video h-auto w-full object-cover",
                              hero.layout === "compact"
                                ? cn(
                                    "mx-auto",
                                    heroNoSidePadding
                                      ? "max-w-[min(880px,100vw)]"
                                      : "max-w-[min(836px,calc(100vw-1.5rem))]"
                                  )
                                : heroNoSidePadding
                                  ? "max-w-[min(1280px,100vw)]"
                                  : "max-w-[min(1216px,calc(100vw-1.5rem))]"
                            )
                    )}
                  />
                )}
              </div>
            )}

            {heroBelow && (
              <div className="mt-4 flex w-full justify-center">
                <div className="w-full max-w-[min(1216px,calc(100vw-1.5rem))]">{heroBelow}</div>
              </div>
            )}
          </div>
        )}

        {metaCells.length > 0 && (
          <>
            <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-10">
              {metaCells.map(({ label, value }) => (
                <div key={label}>
                  <p className="mb-2 font-sans text-[10px] font-normal uppercase tracking-[0.16em] text-[#A0A0A0]">
                    {label}
                  </p>
                  <p className="whitespace-pre-line text-[0.8125rem] font-normal leading-snug text-zinc-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            {metaBelow && <div className="mb-12">{metaBelow}</div>}
            <Divider />
          </>
        )}

        {sections.slice(0, 1).map((s) => (
          <Fragment key={s.id}>
            <motion.section
              id={s.id}
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.04 }}
              transition={{ type: "spring", stiffness: 320, damping: 32, mass: 1 }}
            >
              <SectionLabel>{s.label}</SectionLabel>
              {s.content}
            </motion.section>
            {(challengeSummary || sections.slice(1).some((n) => !n.navOnly)) && <Divider />}
          </Fragment>
        ))}

        {challengeSummary && (
          <>
            <section id="the-challenge" className="scroll-mt-24">
              <CaseChallengeDisclosure summary={challengeSummary} />
            </section>
            {sections.slice(1).some((n) => !n.navOnly) && <Divider />}
          </>
        )}

        {sections.slice(1).map((s, idx) => {
          if (s.navOnly) return <Fragment key={s.id} />;
          const hasMoreVisible = sections.slice(idx + 2).some((n) => !n.navOnly);
          return (
            <Fragment key={s.id}>
              <motion.section
                id={s.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.04 }}
                transition={{ type: "spring", stiffness: 320, damping: 32, mass: 1 }}
              >
                <SectionLabel>{s.label}</SectionLabel>
                {s.content}
              </motion.section>
              {hasMoreVisible && <Divider />}
            </Fragment>
          );
        })}

        <CategoryProjectsFooter category={category} currentSlug={slug} />
      </main>
    </div>
  );

  return (
    <ProjectSurface className={surfaceClassName} showGrain={showGrain}>
      {slug === "cool" ? (
        <div data-cool-cursor-scope className="min-h-full">
          <CoolPageCursor />
          {body}
        </div>
      ) : (
        body
      )}
    </ProjectSurface>
  );
}

