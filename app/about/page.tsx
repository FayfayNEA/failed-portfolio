import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Designer and creative technologist — background, focus, and approach.",
};

/** Scraped Framer assets (see `src/content/about.mdx`). */
const IMG = {
  heroIllustration:
    "https://framerusercontent.com/images/ysXOtBpVlFq9Cq4ZXNEjAKHrY.png?width=733&height=554",
  portrait:
    "https://framerusercontent.com/images/NmEPDMw4n4ZBACyQbLBQzlGMTv0.jpg?width=2870&height=2633",
  halftoneA:
    "https://framerusercontent.com/images/4iQ20dCFbMZjTBfa3h6egnwBaNM.png?width=500&height=495",
  halftoneB:
    "https://framerusercontent.com/images/VYrVPm4XQ9a4oABmA7g2wXD963A.png?width=551&height=545",
} as const;

export default function AboutPage() {
  return (
    <div className="min-h-full bg-transparent text-zinc-900 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif]">
      <main className="relative mx-auto max-w-6xl px-5 pb-28 pt-24 md:px-10 md:pb-36 md:pt-40">
        <div className="md:flex md:justify-end">
          <div className="relative z-[1] grid w-full max-w-none gap-12 text-center max-[639px]:translate-x-0 translate-x-[40px] md:max-w-[min(100%,42rem)] md:-translate-x-[90px] md:grid-cols-2 md:items-center md:gap-8 md:text-left min-[790px]:-translate-x-[130px] lg:-translate-x-[140px] lg:max-w-[min(100%,46rem)] lg:gap-12 xl:max-w-[min(100%,50rem)] xl:gap-14 2xl:gap-16">
          <div className="md:pt-2">
            <h1 className="font-mono text-[clamp(1.45rem,3.2vw,1.9rem)] font-normal leading-snug tracking-[-0.02em] text-black">
              I&apos;m Faílenn
            </h1>
            <div className="mx-auto mt-6 max-w-[22rem] space-y-3.5 text-[13px] leading-[1.62] text-black md:mx-0 md:mt-7 md:max-w-[23rem] md:space-y-4 md:text-[14px] md:leading-[1.68]">
              <p>
                I am a designer driven by the pursuit of novel ideas that meaningfully improve how
                people interact with one another.
              </p>
              <p>
                I began my academic career in Electrical Engineering at Virginia Tech. During that
                time, a professor observed that while I was capable with the technical material, my
                strongest engagement emerged when projects centered on user interaction and
                experience. That insight prompted a shift in focus.
              </p>
              <p>
                Following his wise words, I transitioned to architecture and earned my Bachelor of
                Architecture. Today, I bring together my foundation in circuits and systems with a
                design-driven approach, integrating technical rigor with human-centered thinking.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[17.5rem] justify-self-center sm:max-w-xs md:mx-0 md:max-w-[21.5rem] md:justify-self-start lg:max-w-[23rem]">
            <Image
              src={IMG.halftoneA}
              alt=""
              width={250}
              height={248}
              className="pointer-events-none absolute -right-4 -top-8 z-10 w-[34%] max-w-[120px] object-contain sm:max-w-[130px] md:-top-11 md:max-w-[175px] md:-right-5"
              aria-hidden
            />
            <Image
              src={IMG.halftoneB}
              alt=""
              width={276}
              height={273}
              className="pointer-events-none absolute -bottom-6 -left-4 z-10 w-[36%] max-w-[130px] object-contain sm:max-w-[140px] md:-bottom-11 md:max-w-[185px] md:-left-5"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.06]">
              <Image
                src={IMG.portrait}
                alt="Faílenn Aselta"
                width={1200}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 360px, 400px"
                priority
              />
            </div>
          </div>
        </div>
        </div>

        {/* Large halftone illustration — fixed bottom-left. */}
        <div
          className="pointer-events-none fixed bottom-0 left-0 z-0 w-[min(44vw,220px)] select-none md:w-[min(20vw,260px)]"
          aria-hidden
        >
          <Image
            src={IMG.heroIllustration}
            alt=""
            width={733}
            height={554}
            className="h-auto w-full object-contain opacity-[0.88]"
            sizes="(max-width: 768px) 44vw, 260px"
          />
        </div>
      </main>
    </div>
  );
}
