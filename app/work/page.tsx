import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Work",
  description: "Branding, product design, and architecture — retro work console.",
};

/** Full chrome computer + CRT UI (see `src/content/work.mdx`). */
const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

/** Olive folder icon from scraped work page — layered on the CRT for real click targets. */
const FOLDER_ICON =
  "https://framerusercontent.com/images/DccO93U6JUZBxkfvWIbOQvqgRI.png?width=357&height=301";

/**
 * Folders sit on the glass, centered on each column of the CRT content.
 * `center` is horizontal % of the hero. Width: narrow cap on mobile, 8% of hero on `md+`.
 * Vertical position: `max-md` tuned to the glass; `md+` matches desktop art.
 */
const FOLDER_STRIPS: {
  href: string;
  label: string;
  /** horizontal center % */
  center: string;
}[] = [
  { href: "/branding", label: "Branding", center: "calc(40% - 30px)" },
  {
    href: "/product-design",
    label: "Product design",
    center: "50%",
  },
  { href: "/architecture", label: "Architecture", center: "calc(60% + 30px)" },
];

export default function WorkPage() {
  return (
    <div className="flex min-h-full flex-col bg-transparent text-zinc-900 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6 md:px-8 md:py-12">
        <div className="relative w-full max-w-[min(920px,94vw)]">
          <Image
            src={WORK_HERO}
            alt="Work console: metallic computer with screen"
            width={1670}
            height={1264}
            className="relative z-0 h-auto w-full object-contain"
            sizes="(max-width: 960px) 94vw, 920px"
            priority
            draggable={false}
          />

          {FOLDER_STRIPS.map((f) => (
            <div
              key={f.href}
              className={cn(
                "absolute z-20 max-md:top-[calc(33%+26px)] md:top-[calc(37%+30px)]",
                "w-[min(7vw,36px)] md:w-[8%]"
              )}
              style={{
                left: f.center,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Link
                href={f.href}
                className={cn(
                  "group relative flex flex-col items-center outline-offset-2",
                  "transition-transform duration-200 hover:scale-[1.04] hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]",
                  "focus-visible:rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2F7DDC]"
                )}
                aria-label={f.label}
              >
                <div className="relative w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
                  <Image
                    src={FOLDER_ICON}
                    alt=""
                    width={357}
                    height={301}
                    className="h-auto w-full select-none"
                    draggable={false}
                    sizes="(max-width: 960px) 9vw, 84px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-white/20 mix-blend-overlay"
                    aria-hidden
                  />
                </div>
                <span className="relative mt-2 inline-flex items-center justify-center">
                  {/* Subtle, transparent cyan capsule with light grey overlay (Finder-style) */}
                  <span
                    className="pointer-events-none absolute inset-x-[-6px] top-1/2 h-[1.35em] -translate-y-1/2 rounded-full bg-[rgba(143,213,245,0.32)] shadow-[0_0_0_0.5px_rgba(148,181,208,0.7),0_4px_10px_-6px_rgba(15,23,42,0.55)] opacity-0 transition-opacity duration-140 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden
                  />
                  {/* Light grey micro-noise overlay to soften the blue */}
                  <span
                    className="pointer-events-none absolute inset-x-[-6px] top-1/2 h-[1.35em] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_0_0,rgba(0,0,0,0.08)_0,rgba(0,0,0,0)_40%),radial-gradient(circle_at_100%_0,rgba(0,0,0,0.06)_0,rgba(0,0,0,0)_40%)] opacity-0 mix-blend-soft-light transition-opacity duration-140 group-hover:opacity-90 group-focus-visible:opacity-90"
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "relative whitespace-nowrap text-center font-mono text-[clamp(7px,1.6vw,9px)] font-medium leading-tight tracking-wide",
                      "text-[#111827] drop-shadow-[0_0.5px_0_rgba(255,255,255,0.7)]"
                    )}
                  >
                    {f.label}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-md text-center text-[12px] leading-relaxed text-zinc-500">
          Click the folders on the screen, or open{" "}
          <Link
            href="/work/fither"
            className="text-[#5a6648] underline decoration-[#5a6648]/35 underline-offset-2 hover:text-zinc-900"
          >
            Fither
          </Link>{" "}
          and other work from the map.
        </p>
      </main>
    </div>
  );
}
