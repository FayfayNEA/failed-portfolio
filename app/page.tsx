import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";

const PROJECTS: GalleryProject[] = [
  { slug: "eidolon",      title: "Eidolon",      description: "created a visual AI agent to help users trust automation",                                   year: "2026", coverColor: "transparent", labelGlassTint: "moss", coverImageClassName: "scale-[.9]",  coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/eidolon.png",                                              href: "/eidolon",       metric: "5-user test · AI trust +80%" },
  { slug: "buddy",        title: "Buddy",        description: "created an LLM which captures group conversations as real-time images and diagrams",            year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.2]", coverImageFit: "contain",                       coverImage: "/coverimages/buddy.png",                                                href: "/buddy",         metric: "6–23hr battery · live AI steno" },
  { slug: "fither",       title: "Fither",       description: "understanding dithers with ai",                                                               year: "2026",                                                                                                                                      coverImage: "/fither/assets/organic_dot_field.png",                                 href: "/work/fither",   metric: "6 dither algorithms · open-source" },
  { slug: "etrade",       title: "E*Trade",      description: "redesigned a financial trading platform to reduce cognitive load and speed up trades",         year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.1]", coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/etrade.png",                                              href: "/etrade",        metric: "−60% execution time" },
  { slug: "nightterrors", title: "N1ghtterrors", description: "a website designed to capture the essence of n1ghtterrors",                                   year: "2024",                                                                                                                                      coverImage: "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",  href: "/nightterrors",  metric: "Live production site" },
  { slug: "jahn",         title: "JAHN",         description: "designed a portfolio faithful to helmut jahn's design language",                              year: "2023",                                                                                                                                      coverImage: "/jahn/jahn image.jpg",                                                 href: "/jahn",          metric: "Live · jahn.studio" },
];

export default function Home() {
  return (
    <main className="w-full bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      <DesignerBio />

      {/* Collage iframe */}
      <div id="home-collage" className="relative min-h-0 w-full overflow-hidden pt-[3rem] md:pt-[3rem]">
        {/* Gradient masks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[8rem]"
          style={{ background: "linear-gradient(to bottom, #e8e8e8 62%, transparent)" }}
        />
        <div className="h-[60dvh] -mb-[24dvh] sm:mb-0 sm:h-[calc(100dvh-5rem)] md:h-[calc(100dvh-5rem)]">
          <iframe
            src="/home/index.html"
            className="block h-full w-full border-0"
            title="Failenn Aselta - Home"
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6"
          style={{ background: "linear-gradient(to top, #e8e8e8 0%, transparent 100%)" }}
        />
      </div>

      <section
        id="product-design"
        className="mt-[4rem] flex flex-col sm:mt-[6rem] md:mt-[10rem] lg:h-[calc(100dvh-5rem)] lg:overflow-hidden"
        aria-label="Product Design work"
      >
        <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:px-12">
          <CaseBreadcrumb
            segments={[
              { label: "work", href: "/work" },
              { label: "product-design" },
            ]}
          />
        </div>
        <div className="lg:min-h-0 lg:flex-1">
          <CategoryGallery projects={PROJECTS} storageKey="gallery-product-design" />
        </div>
      </section>

      {/* Why hire me */}
      <section className="mx-auto w-full max-w-[min(1100px,92vw)] px-4 py-16 sm:py-20 md:py-24">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
          Why Failenn
        </p>
        <h2 className="mb-10 font-mono text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.03em] text-zinc-950">
          Design × Engineering × AI — in one hire.
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              n: "01",
              title: "Builds what she designs",
              body: "Every prototype in this portfolio is functional code — React, TypeScript, Tailwind, deployed to production. No handoff gap.",
            },
            {
              n: "02",
              title: "Native AI fluency",
              body: "Ships real LLM products: Gemini 3 Flash integration, Google AI Studio, real-time agent pipelines. Not just AI-assisted design.",
            },
            {
              n: "03",
              title: "Research-backed decisions",
              body: "Every design choice is anchored to cited research — Nielsen Norman, MIT AgeLab, Tufte. Rigor that holds up in design reviews.",
            },
            {
              n: "04",
              title: "Weeks, not months",
              body: "Eidolon shipped in one week — full-stack, tested, deployed. Fast iteration without cutting corners on craft.",
            },
            {
              n: "05",
              title: "Cross-domain range",
              body: "Architecture → product design → engineering. Spatial thinking that makes UI systems feel physically intuitive.",
            },
            {
              n: "06",
              title: "Rare aesthetic taste",
              body: "Brutalist precision meets high-fashion restraint. Interfaces that recruiters remember — and users actually want to use.",
            },
          ].map(({ n, title, body }) => (
            <div
              key={n}
              className="rounded-2xl border-[0.5px] border-white/60 bg-white/30 p-6 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] backdrop-blur-sm"
            >
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#3a6148]/70">{n}</p>
              <p className="mb-2 font-mono text-[0.9rem] font-medium leading-snug text-zinc-900">{title}</p>
              <p className="text-[0.8rem] leading-relaxed text-zinc-500">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
