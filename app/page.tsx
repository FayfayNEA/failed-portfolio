import Image from "next/image";
import Link from "next/link";

const FEATURED = [
  {
    href: "/buddy",
    title: "Buddy",
    category: "Product Design",
    year: "2026",
    image: "/coverimages/buddy.png",
    alt: "Buddy project thumbnail",
  },
  {
    href: "/work/fither",
    title: "Fither",
    category: "Product Design",
    year: "2026",
    image: "/fither/assets/organic_dot_field.png",
    alt: "Fither project thumbnail",
  },
  {
    href: "/etrade",
    title: "E*Trade",
    category: "Product Design",
    year: "2026",
    image: "/coverimages/etrade.png",
    alt: "E*Trade project thumbnail",
  },
  {
    href: "/eidolon",
    title: "Eidolon",
    category: "Product Design",
    year: "2026",
    image: "/coverimages/eidolon.png",
    alt: "Eidolon project thumbnail",
  },
  {
    href: "/jahn",
    title: "JAHN",
    category: "Product Design",
    year: "2023",
    image: "/jahn/jahn%20image.jpg",
    alt: "JAHN project thumbnail",
  },
  {
    href: "/nightterrors",
    title: "N1ghtterrors",
    category: "Product Design",
    year: "2025",
    image:
      "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",
    alt: "N1ghtterrors project thumbnail",
  },
] as const;

export default function Home() {
  return (
    <main className="w-full bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      {/* Home is full-bleed (nav floats). Offset collage so it doesn't sit under nav. */}
      <div className="min-h-0 w-full overflow-hidden pt-[5rem] md:pt-[5rem]">
        <div className="h-[60dvh] -mb-[24dvh] sm:mb-0 sm:h-[calc(100dvh-5rem)] md:h-[calc(100dvh-5rem)]">
          <iframe
            src="/home/index.html"
            className="block h-full w-full border-0"
            title="Failenn Aselta - Home"
          />
        </div>
      </div>

      <section
        className="relative border-black/[0.06] bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed] px-4 py-8 sm:border-t sm:bg-transparent sm:[background-image:none] md:px-8 md:py-20"
        aria-labelledby="selected-work-heading"
      >
        {/* Mobile-only hint — explains the collage map above */}
        <p className="mb-5 text-center font-mono text-[9px] font-semibold tracking-[0.06em] text-zinc-400 sm:hidden">
          tap map objects to explore ↑
        </p>

        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <p
            id="selected-work-heading"
            className="font-mono text-[10px] font-medium tracking-[0.14em] text-zinc-500"
          >
            selected work
          </p>
          <span
            className="mt-2 font-mono text-sm text-zinc-400 motion-safe:animate-bounce"
            aria-hidden
          >
            ↓
          </span>
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mt-14 lg:grid-cols-3 lg:gap-10">
          {FEATURED.map((item, idx) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-400"
              >
                <div className="relative aspect-[4/3] w-full overflow-visible">
                  {/* Visual-only resize handles (non-interactive) — live outside the clipped frame. */}
                  <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100">
                    {[
                      "top-[-6px] left-[-6px]",
                      "top-[-6px] left-1/2 -translate-x-1/2",
                      "top-[-6px] right-[-6px]",
                      "top-1/2 -translate-y-1/2 left-[-6px]",
                      "top-1/2 -translate-y-1/2 right-[-6px]",
                      "bottom-[-6px] left-[-6px]",
                      "bottom-[-6px] left-1/2 -translate-x-1/2",
                      "bottom-[-6px] right-[-6px]",
                    ].map((pos) => (
                      <span
                        key={pos}
                        className={`absolute h-3 w-3 rounded-[2px] bg-white ${pos}`}
                        style={{ border: "1.5px solid #3a6148" }}
                        aria-hidden
                      />
                    ))}
                  </div>

                  <div
                    className={[
                      "absolute inset-0 overflow-hidden rounded-none",
                      "border-[0.5px] border-white/55 ring-1 ring-black/[0.06]",
                      "shadow-[0_22px_70px_-44px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.55)]",
                      "bg-white/[0.22] backdrop-blur-lg backdrop-saturate-[1.35]",
                    ].join(" ")}
                  >
                    {/* Liquid surface tint + edge highlight */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.46) 0%, rgba(255,255,255,0.12) 40%, rgba(114,140,105,0.10) 100%)",
                      }}
                      aria-hidden
                    />
                    {/* Work-page style selection outline (no drag/resize on home). */}
                    <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 [box-shadow:inset_0_0_0_1.5px_#3a6148]" />
                    <div className="absolute inset-2.5 overflow-hidden sm:inset-3 md:inset-3.5">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        quality={80}
                        priority={idx < 3}
                        fetchPriority={idx < 3 ? "high" : "auto"}
                        loading={idx < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) min(92vw, 420px), (max-width: 1024px) min(46vw, 400px), min(28vw, 360px)"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-[0.06em] text-zinc-500">
                  {item.category}
                  <span className="mx-1.5 font-light text-zinc-400">·</span>
                  {item.year}
                </p>
                <p className="mt-1 font-mono text-[0.95rem] font-normal tracking-tight text-zinc-900">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 flex justify-center md:mt-16">
          <Link
            href="/work"
            className="border-[0.5px] border-zinc-900 bg-transparent px-5 py-2.5 font-mono text-[10px] tracking-[0.06em] text-zinc-900 transition-colors duration-200 hover:bg-zinc-900 hover:text-[#e8e8e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            see all work →
          </Link>
        </div>
      </section>
    </main>
  );
}
