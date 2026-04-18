import Image from "next/image";
import Link from "next/link";

const FEATURED = [
  {
    href: "/buddy",
    title: "Buddy",
    category: "Product Design",
    year: "2025",
    image: "/coverimages/buddy.png",
    alt: "Buddy project thumbnail",
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
    href: "/work/fither",
    title: "Fither",
    category: "Product Design",
    year: "2025",
    image: "/fither/assets/organic_dot_field.png",
    alt: "Fither project thumbnail",
  },
  {
    href: "/jahn",
    title: "JAHN",
    category: "Product Design",
    year: "2025",
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
  {
    href: "/etrade",
    title: "E*Trade",
    category: "Product Design",
    year: "2026",
    image: "/coverimages/etrade.png",
    alt: "E*Trade project thumbnail",
  },
] as const;

export default function Home() {
  return (
    <main className="w-full bg-[#e8e8e8]">
      <div className="h-screen min-h-0 w-full overflow-hidden bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
        <iframe
          src="/home/index.html"
          className="block h-full w-full border-0"
          title="Failenn Aselta - Home"
        />
      </div>

      <section
        className="border-t border-black/[0.06] bg-[#e8e8e8] px-4 py-14 md:px-8 md:py-20"
        aria-labelledby="selected-work-heading"
      >
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
          {FEATURED.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="group block outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-400">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-black/[0.08]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
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
