"use client";

import { useEffect, useState } from "react";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import type { BreadcrumbSegment } from "@/components/case-breadcrumb";
import { cn } from "@/lib/cn";

export type SidebarSection = {
  id: string;
  label: string;
};

/** Studio case rail (Dandi-style): light grey labels, black active + dot. */
const STUDIO_MUTED = "text-[#A0A0A0]";

type CaseStudySidebarProps = {
  projectName: string;
  /** Applied to the prominent case title (e.g. display font on studio rail). */
  projectNameClassName?: string;
  sections: SidebarSection[];
  /** Breadcrumb path rendered at the top of the rail (replaces Back to Projects). */
  breadcrumb?: BreadcrumbSegment[];
  /**
   * Pass `1000`: **12.5vw** rail when viewport **&gt;1000px**; **≤1000px** hidden.
   * Uses the site canvas background and sans hierarchy; rail matches other case chrome.
   */
  hideRailAtMaxWidthPx?: 1000;
};

export function CaseStudySidebar({
  projectName,
  projectNameClassName,
  sections,
  breadcrumb,
  hideRailAtMaxWidthPx,
}: CaseStudySidebarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const studioRail = hideRailAtMaxWidthPx === 1000;

  return (
    <aside
      className={cn(
        "fixed left-0 z-[30] flex flex-col",
        studioRail
          ? "left-[30px] top-0 h-dvh w-[12.5vw] min-w-[22rem] border-r border-zinc-200/50 bg-[var(--canvas)]/95 backdrop-blur-[6px] max-[1000px]:hidden min-[1001px]:flex"
          : "top-[4.5rem] bottom-0 w-[220px] overflow-y-auto border-r border-zinc-200/60 bg-[var(--canvas)]/95 backdrop-blur-[6px] md:top-[5rem]"
      )}
      aria-label="Case study sections"
    >
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden",
          studioRail
            ? "px-3 pb-12 pt-[calc(4.5rem+50px)] font-sans sm:px-4 md:pt-[calc(5rem+50px)]"
            : "px-8 pb-8 pt-8"
        )}
      >
        {/* Breadcrumb path — replaces the old "Back to Projects" link */}
        {breadcrumb && breadcrumb.length > 0 && (
          <div className={cn("shrink-0", studioRail ? "mb-6" : "mb-6")}>
            <CaseBreadcrumb segments={breadcrumb} />
          </div>
        )}

        {studioRail ? (
          <>
            <div className="mb-8 shrink-0 border-b border-zinc-200/50 pb-6">
              <p
                className={cn(
                  "mb-2 text-[clamp(0.5rem,0.95vw,0.65rem)] font-normal uppercase tracking-[0.16em]",
                  STUDIO_MUTED
                )}
              >
                Case Study
              </p>
              <p
                className={cn(
                  "break-words text-[clamp(0.85rem,1.35vw,1.05rem)] font-semibold leading-snug tracking-[-0.02em] text-zinc-950",
                  projectNameClassName
                )}
              >
                {projectName}
              </p>
            </div>
            <nav className="min-h-0 min-w-0 flex-1">
              <ul className="space-y-4">
                {sections.map(({ id, label }) => {
                  const isActive = activeId === id;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(id)}
                        className={cn(
                          "flex w-full cursor-pointer items-start gap-2.5 text-left uppercase transition-colors",
                          "text-[clamp(0.52rem,1vw,0.72rem)] font-light leading-snug tracking-[0.1em]",
                          isActive
                            ? "font-normal text-zinc-950"
                            : cn(STUDIO_MUTED, "hover:text-zinc-600")
                        )}
                      >
                        <span
                          className={cn(
                            "mt-[0.35em] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full transition-opacity",
                            isActive ? "bg-zinc-950 opacity-100" : "bg-zinc-950 opacity-0"
                          )}
                          aria-hidden
                        />
                        <span className="min-w-0 break-words">{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        ) : (
          <>
            <div className="mb-8">
              <p className="mb-1.5 font-mono text-[9px] font-normal uppercase tracking-[0.22em] text-zinc-400">
                Case Study
              </p>
              <p
                className={cn(
                  "font-mono text-[0.8rem] font-semibold leading-snug text-zinc-800",
                  projectNameClassName
                )}
              >
                {projectName}
              </p>
            </div>

            <nav className="min-h-0 flex-1">
              <ul className="space-y-3">
                {sections.map(({ id, label }) => {
                  const isActive = activeId === id;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(id)}
                        className={cn(
                          "flex w-full cursor-pointer items-center gap-2.5 text-left font-mono text-[9.5px] font-light uppercase tracking-[0.14em] transition-colors",
                          isActive ? "font-normal text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-px inline-block h-[5px] w-[5px] flex-shrink-0 rounded-full transition-colors",
                            isActive ? "bg-zinc-900" : "bg-zinc-300"
                          )}
                          aria-hidden
                        />
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )}
      </div>
    </aside>
  );
}
