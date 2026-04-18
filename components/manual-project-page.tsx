"use client";

import { Fragment } from "react";
import type { ReactNode } from "react";
import { useState, useCallback } from "react";
import { useCarouselSwipe } from "@/lib/carousel-swipe";
import { ProjectSurface } from "@/components/project-surface";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import type { SidebarSection } from "@/components/case-study-sidebar";
import { buildProjectBreadcrumb, CaseBreadcrumb } from "@/components/case-breadcrumb";
import { CaseChallengeDisclosure } from "@/components/case-challenge-disclosure";
import { CoolPageCursor } from "@/components/cool-page-cursor";
import { AutoPlayVideo } from "@/components/autoplay-video";
import { cn } from "@/lib/cn";

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
};

export type ManualProjectPageProps = {
  title: string;
  slug: string;
  category: string;
  hero?: Hero;
  /** Optional content rendered directly under the hero block. */
  heroBelow?: ReactNode;
  /** Optional styling for the hero frame (e.g. liquid glass on select pages). */
  heroFrameVariant?: "default" | "liquid";
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
  /** Optional styling for the page surface wrapper. */
  surfaceClassName?: string;
  /** Grain overlay on the surface. */
  showGrain?: boolean;
  /** Buddy-style expandable challenge panel shown near the top. */
  challengeSummary?: string;
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
}: {
  images: string[];
  alt?: string;
  layout?: "tall" | "compact" | "full";
  tallSize?: "default" | "smaller" | "tiny";
  imageZoom?: boolean;
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
        ? "max-h-[min(52svh,620px)] max-w-[min(860px,calc(100vw-1.5rem))]"
        : tallSize === "smaller"
          ? "max-h-[min(70svh,840px)] max-w-[min(1100px,calc(100vw-1.5rem))]"
          : "h-[min(100svh,1200px)] max-w-[min(1600px,calc(100vw-1.5rem))]"
      : layout === "full"
        ? "aspect-video"
        : "aspect-video max-w-[min(1280px,calc(100vw-1.5rem))]";

  const cardClass = "rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]";

  const imgClass = imageZoom
    ? "object-contain w-full h-full scale-[1.1]"
    : cn(cardClass, "object-contain w-full", sizeClass);

  const heroNavBtn = cn(
    "absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full",
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
        layout === "tall" && "flex justify-center",
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
            decoding="async"
          />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={images[index]}
          alt={`${alt} ${index + 1} of ${n}`}
          className={imgClass}
          draggable={false}
          decoding="async"
        />
      )}

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className={cn(heroNavBtn, "left-3")}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className={cn(heroNavBtn, "right-3")}
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function HeroVideoCarousel({
  videos,
  size = "default",
  controls = false,
}: {
  videos: string[];
  size?: "default" | "wide";
  controls?: boolean;
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

  const wrapClass =
    size === "wide"
      ? "max-w-[min(1280px,calc(100vw-1.5rem))]"
      : "max-w-[min(880px,calc(100vw-1.5rem))]";

  const heroNavBtn = cn(
    "absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full",
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
          "relative w-full touch-manipulation touch-pan-y overscroll-x-contain",
          wrapClass,
          n > 1 && "pointer-fine:cursor-grab pointer-fine:active:cursor-grabbing select-none"
        )}
        {...swipe}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <AutoPlayVideo
            key={videos[index]}
            src={videos[index]}
            controls={controls}
            muted
            autoPlay
            loop
            className={cn(
              // no background "card" wrapper — just the media frame
              "h-auto w-full object-contain",
              "max-h-[min(92dvh,960px)]"
            )}
          />

          {/* Beveled edge overlay */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 rounded-2xl",
              "ring-1 ring-black/[0.08]",
              // inner rim: bright top/left, darker bottom/right
              "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.72),inset_1px_0_0_0_rgba(255,255,255,0.35),inset_0_-1px_0_0_rgba(0,0,0,0.28),inset_-1px_0_0_0_rgba(0,0,0,0.18)]"
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 rounded-2xl",
              // 3D bevel sweep: highlight from top-left, shadow to bottom-right
              "[background:linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_22%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.18))]"
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-[1px] rounded-[calc(theme(borderRadius.2xl)-1px)]",
              // micro-specular rim to sell depth
              "opacity-[0.95] [background:linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0)_26%,rgba(0,0,0,0)_74%,rgba(0,0,0,0.16))]"
            )}
          />
        </div>

        {/* Prev / Next buttons */}
        {n > 1 && (
          <>
            <button onClick={prev} aria-label="Previous video" className={cn(heroNavBtn, "left-3")}>
              ‹
            </button>
            <button onClick={next} aria-label="Next video" className={cn(heroNavBtn, "right-3")}>
              ›
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-14 h-px w-full bg-zinc-200/50" />;
}

export function ManualProjectPage({
  title,
  slug,
  category,
  hero,
  heroBelow,
  heroFrameVariant = "default",
  heroSize = "default",
  heroTallSize = "default",
  heroTallFrame = "default",
  heroSpacing = "default",
  heroImageZoom = false,
  surfaceClassName,
  showGrain = true,
  challengeSummary,
  meta,
  sections,
}: ManualProjectPageProps) {
  const isNightterrors = slug === "nightterrors";
  const isEtrade = slug === "etrade";
  const sidebarSections: SidebarSection[] = [
    ...(challengeSummary ? [{ id: "the-challenge", label: "THE CHALLENGE" }] : []),
    ...sections.map(({ id, label }) => ({ id, label })),
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

        <h1
          className={cn(
            "mb-8 mt-0 font-mono text-[clamp(2.75rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.04em] text-zinc-950",
            "font-extralight"
          )}
        >
          {title}
        </h1>

        {hero && (
          <div className={cn(heroSpacing === "none" ? "mb-0" : "mb-14", "w-full")}>
            {hero.kind === "video" ? (
              <div className="flex justify-center">
                <div
                  className={cn(
                    "w-full",
                    heroSize === "wide"
                      ? "max-w-[min(1280px,calc(100vw-1.5rem))]"
                      : "max-w-[min(520px,88vw)] sm:max-w-[min(580px,86vw)] md:max-w-[min(640px,84vw)]"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl",
                      heroFrameVariant === "liquid"
                        ? cn(
                            "isolate border-[0.5px] border-white/55",
                            "bg-white shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.65)]",
                            "ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125"
                          )
                        : "border-[0.5px] border-zinc-200/80 bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "relative flex justify-center",
                        heroFrameVariant === "liquid" ? "p-3 sm:p-4 md:p-5" : "p-4 sm:p-5 md:p-6"
                      )}
                    >
                      <AutoPlayVideo
                        controls
                        muted
                        className={cn(
                          "h-auto w-full max-h-[min(92dvh,960px)] rounded-xl object-contain",
                          heroFrameVariant === "liquid"
                            ? "bg-white ring-[0.5px] ring-zinc-200/60"
                            : "bg-white ring-[0.5px] ring-zinc-200/60"
                        )}
                        src={hero.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : hero.kind === "video-carousel" ? (
              <HeroVideoCarousel
                videos={hero.videos}
                size={hero.size ?? heroSize}
                controls={hero.controls ?? false}
              />
            ) : hero.kind === "carousel" ? (
              <HeroCarousel
                images={hero.images}
                alt={hero.alt}
                layout={hero.layout}
                tallSize={heroTallSize}
                imageZoom={heroImageZoom}
              />
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.src}
                  alt={hero.alt}
                  decoding="async"
                  fetchPriority="high"
                  className={cn(
                    "rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]",
                    hero.layout === "tall"
                      ? heroTallSize === "tiny"
                        ? "mx-auto block max-h-[min(52svh,620px)] w-full max-w-[min(860px,calc(100vw-1.5rem))] object-contain object-center"
                        : heroTallSize === "smaller"
                          ? "mx-auto block max-h-[min(70svh,840px)] w-full max-w-[min(1100px,calc(100vw-1.5rem))] object-contain object-center"
                          : "mx-auto block h-[min(100svh,1200px)] w-full max-w-[min(1600px,calc(100vw-1.5rem))] object-contain object-center"
                      : hero.layout === "full"
                        ? "h-[min(52svh,560px)] w-full max-w-none object-cover"
                        : cn(
                            "aspect-video h-auto w-full object-cover",
                            hero.layout === "compact"
                              ? "mx-auto max-w-[min(880px,calc(100vw-1.5rem))]"
                              : "max-w-[min(1280px,calc(100vw-1.5rem))]"
                          )
                  )}
                />
              </div>
            )}

            {heroBelow && (
              <div className="mt-4 flex w-full justify-center">
                <div className="w-full max-w-[min(1280px,calc(100vw-1.5rem))]">{heroBelow}</div>
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
            <Divider />
          </>
        )}

        {challengeSummary && (
          <>
            <section id="the-challenge" className="scroll-mt-24">
              <CaseChallengeDisclosure summary={challengeSummary} />
            </section>
            <Divider />
          </>
        )}

        {sections.map((s, idx) => (
          <Fragment key={s.id}>
            <section id={s.id} className="scroll-mt-24">
              <SectionLabel>{s.label}</SectionLabel>
              {s.content}
            </section>
            {idx < sections.length - 1 && <Divider />}
          </Fragment>
        ))}
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

