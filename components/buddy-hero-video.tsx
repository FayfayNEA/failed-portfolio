"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface BuddyHeroVideoProps {
  /** UI mockup walkthrough (landscape screen recording) — shown first. */
  uiMockupSrc: string;
  /** Image mockup demo (landscape screen recording). */
  imageMockupSrc: string;
  /** Hardware demo (portrait, physical device) — shown last. */
  hardwareSrc: string;
  poster?: string;
}

const TAB_ORDER = ["uiMockup", "imageMockup", "hardware"] as const;

type TabKey = (typeof TAB_ORDER)[number];

const TAB_LABELS: Record<TabKey, string> = {
  uiMockup: "UI Mockup",
  imageMockup: "Image Mockup",
  hardware: "Hardware",
};

/** The hardware clip is a portrait capture, so it fits inside the 16:9 frame and
 *  gets scaled up. The landscape screen recordings fill the frame directly. */
const TAB_FIT: Record<TabKey, string> = {
  uiMockup: "object-cover object-center",
  imageMockup: "object-cover object-center",
  hardware: "object-contain scale-[1.55]",
};

export function BuddyHeroVideo({ uiMockupSrc, imageMockupSrc, hardwareSrc, poster }: BuddyHeroVideoProps) {
  const [tab, setTab] = useState<TabKey>(TAB_ORDER[0]);
  // Only autoplay when the user explicitly switches tabs or a video ends.
  // Initial load stays on the poster with no autoplay.
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  const sources: Record<TabKey, string> = {
    uiMockup: uiMockupSrc,
    imageMockup: imageMockupSrc,
    hardware: hardwareSrc,
  };
  const isFirst = tab === TAB_ORDER[0];
  const nextTab: TabKey | undefined = TAB_ORDER[TAB_ORDER.indexOf(tab) + 1];

  function handleTabClick(key: TabKey) {
    setShouldAutoPlay(true);
    setTab(key);
  }

  // Walk through the demos in order; the last one just stops.
  function handleEnded() {
    if (!nextTab) return;
    setShouldAutoPlay(true);
    setTab(nextTab);
  }

  return (
    <div className="mb-14 flex w-full flex-col items-center gap-3">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
        {/* key forces a fresh <video> per source so poster/preload reset cleanly */}
        <video
          key={tab}
          controls
          autoPlay={shouldAutoPlay}
          muted={shouldAutoPlay}
          playsInline
          preload="metadata"
          poster={isFirst ? poster : undefined}
          className={cn("h-full w-full", TAB_FIT[tab])}
          src={sources[tab]}
          onEnded={nextTab ? handleEnded : undefined}
        >
          Your browser does not support video playback.
        </video>
      </div>

      {/* Toggle between the UI mockup walkthrough, the image mockup demo, and the hardware clip */}
      <div
        role="tablist"
        aria-label="Buddy demo videos"
        className="inline-flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 p-1 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.04] backdrop-blur-md"
      >
        {TAB_ORDER.map((key) => {
          const active = tab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => handleTabClick(key)}
              className={cn(
                "rounded-full px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors",
                active
                  ? "bg-violet-400 text-white shadow-[0_2px_10px_-3px_rgba(167,139,250,0.5)]"
                  : "text-zinc-500 hover:text-zinc-800"
              )}
            >
              {TAB_LABELS[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
