import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Designer and creative technologist — background, focus, and approach.",
};

const PORTRAIT_SRC =
  "https://framerusercontent.com/images/NmEPDMw4n4ZBACyQbLBQzlGMTv0.jpg?width=2870&height=2633";

export default function AboutPage() {
  return (
    <div className="min-h-full bg-transparent text-zinc-900 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif]">
      <main className="relative mx-auto max-w-6xl px-5 pb-28 pt-24 md:px-10 md:pb-36 md:pt-40">
        <div className="md:flex md:justify-end">
          <div className="relative z-[1] grid w-full max-w-none gap-12 text-center max-[639px]:translate-x-0 translate-x-[40px] md:max-w-[min(100%,50rem)] md:-translate-x-[25px] md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 md:text-left min-[790px]:-translate-x-[65px] lg:-translate-x-[75px] lg:max-w-[min(100%,54rem)] lg:gap-12 xl:max-w-[min(100%,58rem)] xl:gap-14 2xl:gap-16">
            <div className="md:pt-2 md:-mt-[28px]">
              <h1 className="font-mono text-[clamp(1.45rem,3.2vw,1.9rem)] font-normal leading-snug tracking-[-0.02em] text-black">
                I&apos;m Faílenn
              </h1>
              <div className="mx-auto mt-6 max-w-[25rem] space-y-3.5 text-[13px] leading-[1.62] text-black md:mx-0 md:mt-7 md:max-w-none md:space-y-4 md:text-[14px] md:leading-[1.68]">
                <p>
                I started my career in STEM modding iPhones and selling HTML/CSS themes on Tumblr in middle school. 
                Once I entered high school, I immersed myself in robotics and software development, hand-coding the color of every element in my data structures programs using hex values and presenting a thesis on the efficacy of drone construction. 
                I entered Virginia Tech as an electrical engineer, but after a conversation with my EE professor, I found my heart laid in the beauty of creation, not the creation alone.
                  
                </p>
                <p>
                I switched to Architecture, as I wanted to design with the rigor of both mathematics and aesthetics only found through building design. 
                While in Architecture, I was awarded top project at the Venice Biennale 2025 and worked at internationally renowned firms like JAHN, CLB Architects, and Cloud9. 
                However, after a couple of years in the profession, I yearned for a greater integration of tech.
                </p>
                <p>
                My data structures professor was right all along. 
                I spearheaded hex code design in C++ then, and there is no stopping me spearheading the design of a whole brand now.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[19.5rem] justify-self-center sm:max-w-sm md:mx-0 md:max-w-[30rem] md:justify-self-start lg:max-w-[32rem]">
              <div className="relative overflow-hidden rounded-[2px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.06]">
                <Image
                  src={PORTRAIT_SRC}
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
      </main>
    </div>
  );
}
