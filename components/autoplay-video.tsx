"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const KNOWN_POSTERS: Record<string, string> = {
  buddy: "/coverimages/buddy.png",
  eidolon: "/coverimages/eidolon.png",
  etrade: "/coverimages/etrade.png",
};

function posterForSrc(src: string): string | undefined {
  if (!src.startsWith("/")) return undefined;
  const seg = src.split("/").filter(Boolean)[0];
  if (!seg) return undefined;
  return KNOWN_POSTERS[seg];
}

export function AutoPlayVideo({
  src,
  className,
  poster,
  controls = true,
  loop = true,
  autoPlay = true,
  muted = true,
}: {
  src: string;
  className?: string;
  poster?: string;
  controls?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [blocked, setBlocked] = useState(false);

  const resolvedPoster = useMemo(() => poster ?? posterForSrc(src), [poster, src]);

  const tryPlay = async () => {
    const el = ref.current;
    if (!el) return;
    try {
      const p = el.play();
      if (p && typeof (p as Promise<void>).then === "function") {
        await p;
      }
      setBlocked(false);
    } catch {
      setBlocked(true);
    }
  };

  useEffect(() => {
    if (!autoPlay) return;
    // Attempt autoplay after mount (mobile Safari often ignores attributes unless play() is called).
    void tryPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, src]);

  return (
    <div className="relative">
      <video
        ref={ref}
        src={src}
        className={cn("block", className)}
        controls={controls}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        playsInline
        preload="metadata"
        poster={resolvedPoster}
        onCanPlay={() => {
          if (autoPlay) void tryPlay();
        }}
      >
        Your browser does not support video playback.
      </video>

      {blocked && (
        <button
          type="button"
          onClick={() => void tryPlay()}
          className={cn(
            "absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full",
            "border-[0.5px] border-white/30 bg-black/45 text-white",
            "shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          )}
          aria-label="Play video"
        >
          ▶
        </button>
      )}
    </div>
  );
}

