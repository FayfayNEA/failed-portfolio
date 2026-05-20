import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Work",
  description: "Branding, product design, and architecture, retro work console.",
};

/** Full chrome computer + CRT UI (see `src/content/work.mdx`). */
const WORK_HERO =
  "https://framerusercontent.com/images/1UpVneSV6Hx4UCJvPBmRmzTBuY.png?width=1670&height=1264";

/** Olive folder icon from scraped work page, layered on the CRT for real click targets. */
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
  /** desktop folder width (% of hero container) */
  desktopWidth: string;
  /** mobile folder width (px) */
  mobileWidth: string;
  /** individual desktop scale */
  desktopScale: number;
}[] = [
  { href: "/branding",       label: "Branding",       center: "35%", desktopWidth: "7.5%",  mobileWidth: "38px", desktopScale: 0.98 },
  { href: "/product-design",  label: "Product design", center: "50%", desktopWidth: "9.5%",  mobileWidth: "50px", desktopScale: 0.98 },
  { href: "/architecture",   label: "Architecture",   center: "65%", desktopWidth: "7.5%",  mobileWidth: "38px", desktopScale: 0.98 },
];

export default function WorkPage() {
  return (
    <div className="flex min-h-full flex-col overflow-x-hidden bg-transparent text-zinc-900 [font-family:var(--font-geist-mono),ui-monospace,monospace]">
      <main className="flex flex-1 flex-col px-4 py-4 md:px-8 md:py-3">
        <div className="flex w-full flex-1 flex-col items-center justify-center max-md:min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
        {/* Mobile: custom hero + vertical folder stack */}
        <div className="w-full md:hidden">
          <div className="relative mx-auto w-full max-w-[min(520px,94vw)] py-[11%]">
            <Image
              src="/work/work-mobile.png"
              alt="Work console: metallic device with cord"
              width={1024}
              height={1024}
              className="relative z-0 h-auto w-full origin-center object-contain scale-x-[1.06] scale-y-[1.22]"
              sizes="(max-width: 520px) 94vw, 520px"
              priority
              draggable={false}
            />

            <div className="work-mobile-folders absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 pt-10">
              {FOLDER_STRIPS.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className={cn(
                    "group relative flex flex-col items-center outline-offset-2",
                    "transition-transform duration-200 active:scale-[0.98]",
                    "focus-visible:rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2F7DDC]"
                  )}
                  aria-label={f.label}
                >
                  <div className="relative drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]" style={{ width: f.mobileWidth }}>
                    <Image
                      src={FOLDER_ICON}
                      alt=""
                      width={357}
                      height={301}
                      className="h-auto w-full select-none"
                      draggable={false}
                      sizes="44px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-white/20 mix-blend-overlay"
                      aria-hidden
                    />
                  </div>

                  <span className="relative mt-2 inline-flex items-center justify-center">
                    <span
                      className="pointer-events-none absolute inset-x-[-6px] top-1/2 h-[1.35em] -translate-y-1/2 rounded-full bg-[rgba(143,213,245,0.32)] shadow-[0_0_0_0.5px_rgba(148,181,208,0.7),0_4px_10px_-6px_rgba(15,23,42,0.55)] opacity-100"
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "relative whitespace-nowrap text-center font-mono text-[10px] font-medium leading-tight tracking-wide",
                        "text-[#111827] drop-shadow-[0_0.5px_0_rgba(255,255,255,0.7)]"
                      )}
                    >
                      {f.label}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: original CRT hero + horizontal folder strips */}
        <div className="hidden w-full md:block">
          <div
            className="relative mx-auto w-full -mt-5"
            style={{ maxWidth: "min(1200px, 86vw, calc(85dvh * 1.321))" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "1670 / 1264" }}>
            <Image
              src={WORK_HERO}
              alt="Work console: metallic computer with screen"
              fill
              className="object-contain"
              sizes="(max-width: 960px) 94vw, 1200px"
              priority
              draggable={false}
            />

            <div className="absolute inset-0 lg:-translate-x-[10px]">
            {FOLDER_STRIPS.map((f) => (
              <div
                key={f.href}
                className="absolute z-20 top-[calc(40%+15px)] lg:top-[calc(40%+30px)] xl:top-[calc(40%+20px)]"
                style={{
                  left: f.center,
                  width: f.desktopWidth,
                  transform: `translate(-50%, -50%) scale(${f.desktopScale})`,
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
                        "relative whitespace-nowrap text-center font-mono text-[clamp(9px,1.85vw,11.5px)] font-medium leading-tight tracking-wide",
                        "lg:text-[clamp(10px,2.2vw,13px)]",
                        "text-[#111827] drop-shadow-[0_0.5px_0_rgba(255,255,255,0.7)]"
                      )}
                    >
                      {f.label}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
            </div>{/* end folder shift wrapper */}
            </div>{/* end aspect-ratio wrapper */}
          </div>

          <div
            role="note"
            className="mx-auto mt-2 w-full max-w-md border-t border-zinc-300/80 pt-2"
            aria-label="Click folders on the screen to open categories"
          >
            <p className="text-center text-[11px] leading-snug text-zinc-500 md:leading-relaxed lg:text-[12px]">
              <span className="font-medium text-zinc-600">Click the folders</span> on the screen to
              open each category. You can also open{" "}
              <Link
                href="/work/fither"
                className="text-[#5a6648] underline decoration-[#5a6648]/35 underline-offset-2 hover:text-zinc-900"
              >
                Fither
              </Link>{" "}
              and other work from the{" "}
              <Link
                href="/"
                className="text-[#5a6648] underline decoration-[#5a6648]/35 underline-offset-2 hover:text-zinc-900"
              >
                home map
              </Link>
              .
            </p>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
