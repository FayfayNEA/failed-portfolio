"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface BuddyHeroVideoProps {
  /** Software demo (landscape screen recording) — shown first. */
  softwareSrc: string;
  /** Hardware demo (portrait, physical device) — shown on toggle/next. */
  hardwareSrc: string;
  poster?: string;
}

const TABS = [
  { key: "software", label: "Software" },
  { key: "hardware", label: "Hardware" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function BuddyHeroVideo({ softwareSrc, hardwareSrc, poster }: BuddyHeroVideoProps) {
  const [tab, setTab] = useState<TabKey>("software");
  // Only autoplay when the user explicitly switches tabs or the software video ends.
  // Initial load stays on the poster with no autoplay.
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const isSoftware = tab === "software";

  function handleTabClick(key: TabKey) {
    setShouldAutoPlay(true);
    setTab(key);
  }

  function handleSoftwareEnded() {
    setShouldAutoPlay(true);
    setTab("hardware");
  }

  return (
    <div className="mb-14 flex w-full flex-col items-center gap-3">
      <div className="aspect-video w-full max-w-[min(1216px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl bg-zinc-50 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
        {/* key forces a fresh <video> per source so poster/preload reset cleanly */}
        <video
          key={tab}
          controls
          autoPlay={shouldAutoPlay}
          muted={shouldAutoPlay}
          playsInline
          preload="metadata"
          poster={isSoftware ? poster : undefined}
          className={cn(
            "h-full w-full",
            isSoftware ? "object-cover object-center" : "object-contain scale-[1.55]"
          )}
          src={isSoftware ? softwareSrc : hardwareSrc}
          onEnded={isSoftware ? handleSoftwareEnded : undefined}
        >
          Your browser does not support video playback.
        </video>
      </div>

      {/* Toggle between the software demo and the hardware clip */}
      <div
        role="tablist"
        aria-label="Buddy demo videos"
        className="inline-flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 p-1 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.04] backdrop-blur-md"
      >
        {TABS.map(({ key, label }) => {
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
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
