import Link from "next/link";
import { cn } from "@/lib/cn";

export type BreadcrumbSegment = {
  label: string;
  /** href is undefined for the current (last) segment — rendered as plain text */
  href?: string;
};

/**
 * Windows Explorer–style path breadcrumb.
 * Segments are separated by `/`.  Clickable segments show an underline on hover.
 * The last segment (current page) is muted and non-interactive.
 *
 * Usage:
 *   <CaseBreadcrumb segments={[
 *     { label: "home", href: "/" },
 *     { label: "work", href: "/work" },
 *     { label: "product-design", href: "/product-design" },
 *     { label: "buddy" },         // current page — no href
 *   ]} />
 */
export function CaseBreadcrumb({ segments }: { segments: BreadcrumbSegment[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex min-w-0 flex-wrap items-center gap-x-[3px] gap-y-0.5"
    >
      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1;
        const sep = i > 0 && (
          <span
            aria-hidden
            className="select-none font-mono text-[11px] font-light text-zinc-300"
          >
            /
          </span>
        );

        return (
          <span key={i} className="flex items-center gap-x-[3px]">
            {sep}
            {seg.href && !isLast ? (
              <Link
                href={seg.href}
                className={cn(
                  "whitespace-nowrap font-mono text-[11px] font-light leading-none tracking-[0.04em]",
                  "text-zinc-400 transition-colors duration-150",
                  "underline-offset-2 hover:text-zinc-700 hover:underline"
                )}
              >
                {seg.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className="whitespace-nowrap font-mono text-[11px] font-light leading-none tracking-[0.04em] text-zinc-400"
              >
                {seg.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

/** Build the standard `home / work / category / slug` segment list. */
export function buildProjectBreadcrumb(
  slug: string,
  category?: string
): BreadcrumbSegment[] {
  const segments: BreadcrumbSegment[] = [
    { label: "home", href: "/" },
    { label: "work", href: "/work" },
  ];
  if (category) {
    segments.push({ label: category, href: `/${category}` });
  }
  segments.push({ label: slug }); // current page — no link
  return segments;
}
