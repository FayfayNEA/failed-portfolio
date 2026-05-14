"use client";

import { useState } from "react";

interface Props {
  summary: string;
}

export function BuddyChallengeDisclosure({ summary }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border-[0.5px] border-zinc-200 bg-white/60 backdrop-blur-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div>
          <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
            The Challenge
          </p>
          <p className="text-[1rem] font-medium leading-snug tracking-[-0.01em] text-zinc-900">
            {summary}
          </p>
        </div>
        <span
          className="shrink-0 text-zinc-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="border-t border-zinc-100 px-6 pb-6 pt-4">
          <p className="text-[0.875rem] leading-[1.75] text-zinc-500">
            Buddy was born from a simple observation: groups lose the thread. Whether it&rsquo;s a
            brainstorm, a lecture, or a team standup, the conversation moves faster than anyone can
            type. The challenge was to build a wearable that listens, understands, and surfaces the
            right information, in real time, without interrupting the people in the room.
          </p>
          <p className="mt-3 text-[0.875rem] leading-[1.75] text-zinc-500">
            Constraints made it hard: $40 hardware budget, no cloud dependency (privacy), and the
            device had to last a full workday on battery.
          </p>
        </div>
      )}
    </div>
  );
}
