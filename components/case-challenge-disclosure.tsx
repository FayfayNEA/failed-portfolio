import { cn } from "@/lib/cn";

type CaseChallengeDisclosureProps = {
  summary: string;
  className?: string;
};

/** Challenge copy always visible (sidebar still links to #the-challenge). */
export function CaseChallengeDisclosure({
  summary,
  className,
}: CaseChallengeDisclosureProps) {
  return (
    <div className={cn("max-w-[640px]", className)}>
      <p className="mb-6 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
        The challenge
      </p>
      <p className="text-[1.35rem] font-normal leading-[1.45] text-zinc-800">{summary}</p>
    </div>
  );
}
