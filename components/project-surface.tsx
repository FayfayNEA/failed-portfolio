import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ProjectSurface({
  children,
  className,
  showGrain = true,
}: {
  children: ReactNode;
  className?: string;
  /** Set false for flat studio-style case pages (e.g. Buddy). */
  showGrain?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative min-h-full bg-transparent text-zinc-800 antialiased",
        className
      )}
    >
      {showGrain ? (
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.018]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      ) : null}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
