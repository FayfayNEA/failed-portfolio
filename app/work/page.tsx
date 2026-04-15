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
 * `center` is horizontal % of the hero; `top` is distance from top; `w` is width % of hero.
 */
const FOLDER_STRIPS: {
  href: string;
  label: string;
  /** horizontal center % */
  center: string;
  top: string;
  w: string;
}[] = [
  /** `top` = vertical center of CRT; transform centers the folder+label stack on that point. */
  { href: "/branding", label: "Branding", center: "calc(40% - 30px)", top: "calc(37% + 30px)", w: "8%" },
  {
    href: "/product-design",
    label: "Product design",
    center: "50%",
    top: "calc(37% + 30px)",
    w: "8%",
  },
  { href: "/architecture", label: "Architecture", center: "calc(60% + 30px)", top: "calc(37% + 30px)", w: "8%" },
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
              className="absolute z-20"
              style={{
                left: f.center,
                top: f.top,
                width: f.w,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Link
                href={f.href}
                className={cn(
                  "flex flex-col items-center outline-offset-4",
                  "transition-transform duration-200 hover:scale-[1.06] hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]",
                  "focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-800"
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
                <span
                  className={cn(
                    "mt-0.5 whitespace-nowrap text-center font-mono text-[clamp(7px,1.6vw,9px)] font-medium leading-tight tracking-wide",
                    "text-[#4a5d32] drop-shadow-sm"
                  )}
                >
                  {f.label}
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
