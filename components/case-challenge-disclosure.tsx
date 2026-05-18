import { cn } from "@/lib/cn";

type CaseChallengeDisclosureProps = {
  summary: string;
  className?: string;
  /** Full-width copy with balanced wraps; same scale as section headlines, not hero-sized. */
  variant?: "default" | "display";
};

/** Challenge copy always visible (sidebar still links to #the-challenge). */
export function CaseChallengeDisclosure({
  summary,
  className,
  variant = "default",
}: CaseChallengeDisclosureProps) {
  const isDisplay = variant === "display";

  return (
    <div
      className={cn(isDisplay ? "w-full max-w-none" : "max-w-[min(860px,100%)]", className)}
    >
      <p className="mb-6 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
        The challenge
      </p>
      <p
        className={cn(
          isDisplay
            ? "w-full max-w-none text-balance text-pretty text-[clamp(1.15rem,2.2vw,1.5rem)] font-medium leading-[1.28] tracking-[-0.03em] text-zinc-950 [hyphens:none]"
            : "text-[1.35rem] font-normal leading-[1.45] text-zinc-800"
        )}
      >
        {summary}
      </p>
    </div>
  );
}
