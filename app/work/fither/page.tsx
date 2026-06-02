import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fither",
  description: "Organic dithering playground.",
};

const META = [
  { label: "Timeline", value: "1 week" },
  { label: "Role",     value: "Creative Technologist\nFull Stack Engineer" },
  { label: "Tools",    value: "Groq · Llama 4 · p5.js · Vanilla JS · Vercel" },
  { label: "Team",     value: "Failenn Aselta" },
];

export default function FitherWorkPage() {
  return (
    <div
      className="fither-page-canvas relative -mt-[4rem] flex min-h-[100dvh] flex-col pt-[4rem] md:-mt-[5rem] md:pt-[5rem]"
    >
      {/* Breadcrumb */}
      <div className="shrink-0 px-6 pt-2 pb-1 md:px-10">
        <nav className="flex items-center gap-1 font-mono text-[11px] font-light tracking-[0.04em] text-black">
          <Link href="/" className="hover:underline underline-offset-2">home</Link>
          <span className="opacity-40">/</span>
          <Link href="/work" className="hover:underline underline-offset-2">work</Link>
          <span className="opacity-40">/</span>
          <Link href="/#product-design" className="hover:underline underline-offset-2">product-design</Link>
          <span className="opacity-40">/</span>
          <span>fither</span>
        </nav>
      </div>

      {/* Live Tool label above embed */}
      <div className="shrink-0 px-6 pb-2 md:px-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Live Tool</p>
      </div>

      {/* Embed */}
      <iframe
        src="/fither/index.html"
        className="min-h-0 w-full flex-1 border-0"
        title="Fither"
      />

      {/* Case study below the tool */}
      <div className="shrink-0 px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
        <div className="mx-auto max-w-[min(900px,100%)]">
          <p className="mb-8 max-w-[min(680px,100%)] text-[0.95rem] leading-[1.75] text-zinc-700">
            Fither started as a question about what AI does to analog aesthetics. Dithering is one of the oldest image compression techniques — it turns continuous tone into pattern, loss into texture. The question was whether a language model could learn to describe dither not as a technical filter but as a visual feeling, and whether that description could drive a generative canvas in real time. Built with Groq and Llama 4 for inference speed, p5.js for canvas rendering, and deployed on Vercel. The AI doesn&apos;t apply the dither — it interprets what the user is making and responds in kind. Groq over OpenAI because latency at this interaction speed is the whole experience; a half-second delay kills the feedback loop the tool depends on.
          </p>

          {/* Metadata strip */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 md:gap-x-10">
            {META.map(({ label, value }) => (
              <div key={label}>
                <p className="mb-2 font-sans text-[10px] font-normal uppercase tracking-[0.16em] text-[#A0A0A0]">
                  {label}
                </p>
                <p className="whitespace-pre-line text-[0.8125rem] font-normal leading-snug text-zinc-950">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
