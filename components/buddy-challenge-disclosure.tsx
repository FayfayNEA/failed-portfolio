"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const BUDDY_CHALLENGE_PANEL_ID = "buddy-challenge-panel";

type BuddyChallengeDisclosureProps = {
  summary: string;
  className?: string;
};

export function BuddyChallengeDisclosure({
  summary,
  className,
}: BuddyChallengeDisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("max-w-[640px]", className)}>
      <button
        type="button"
        id="buddy-challenge-trigger"
        aria-expanded={open}
        aria-controls={BUDDY_CHALLENGE_PANEL_ID}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left shadow-none",
          "text-[1.05rem] font-normal leading-snug text-zinc-900",
          "hover:text-zinc-700 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        )}
      >
        <span>The Challenge</span>
        <span
          className={cn(
            "inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-[1rem] font-light leading-none text-zinc-400 transition-colors duration-200",
            "group-hover:text-zinc-600",
            open && "text-zinc-600"
          )}
          aria-hidden
        >
          {open ? "\u00d7" : "+"}
        </span>
      </button>
      <div
        id={BUDDY_CHALLENGE_PANEL_ID}
        role="region"
        aria-labelledby="buddy-challenge-trigger"
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-5 text-[1.35rem] font-normal leading-[1.45] text-zinc-800">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
