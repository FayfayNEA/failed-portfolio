import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";

const PROJECTS: GalleryProject[] = [
  { slug: "eidolon",      title: "Eidolon",      description: "created a visual AI agent to help users trust automation",                                   year: "2026", coverColor: "transparent", labelGlassTint: "moss", coverImageClassName: "scale-[.9]",  coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/eidolon.png",                                              href: "/eidolon",       tags: ["80% clearer agent in motion", "58% more control with haptics"], tagsInline: true },
  { slug: "buddy",        title: "Buddy",        description: "created an LLM which captures group conversations as real-time images and diagrams",            year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.2]", coverImageFit: "contain",                       coverImage: "/coverimages/buddy.png",                                                href: "/buddy",         tags: ["64% intuitive on first use", "40% stopped taking notes"], tagsInline: true },
  { slug: "fither",       title: "Fither",       description: "understanding dithers with ai",                                                               year: "2026", coverColor: "transparent", coverImageFit: "contain", coverImageClassName: "scale-[1.05]", labelTextTone: "dark", coverImage: "/fither/assets/organic_dot_field.png",                                 href: "/work/fither",   tags: ["30+ dither algorithms", "open-source"], tagsInline: true },
  { slug: "etrade",       title: "E*Trade",      description: "redesigned a financial trading platform to reduce cognitive load and speed up trades",         year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.1]", coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/etrade.png",                                              href: "/etrade",        tags: ["83% faster mock trades", "100% navigated without help"], tagsInline: true },
  { slug: "nightterrors", title: "N1ghtterrors", description: "a website designed to capture the essence of n1ghtterrors",                                   year: "2024",                                                                                                                                      coverImage: "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",  href: "/nightterrors",  tags: ["Full-stack build", "50% inventory sold in week one"], tagsInline: true },
  { slug: "jahn",         title: "JAHN",         description: "designed a portfolio faithful to helmut jahn's design language",                              year: "2023", coverColor: "transparent", coverImageFit: "contain", coverImageClassName: "scale-[1.05]", labelTextTone: "dark", coverImage: "/jahn/jahn image.jpg",                                                 href: "/jahn",          tags: ["Commissioned build", "2023"], tagsInline: true },
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
            loading="lazy"
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
        className="mt-[3rem] flex flex-col sm:mt-[4rem] md:mt-[5rem] lg:h-[calc(100dvh-5rem)] lg:overflow-hidden"
        aria-label="Product Design work"
      >
        <div className="shrink-0 border-b border-zinc-200/50 px-8 pt-8 pb-3 md:px-12">
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
          Designs the system. Builds the prototype.
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              title: "Starts with the unasked question",
              body: "The brief is never the real problem. The work starts by finding the thing people need but haven't articulated. Research comes next, to pressure-test whether the instinct holds.",
            },
            {
              n: "02",
              title: "Prototypes in real code",
              body: "The prototype is written in React and Tailwind, not assembled in Figma. When engineers build from it, there is no translation layer. What gets approved is what ships.",
            },
            {
              n: "03",
              title: "Fluent across the stack",
              body: "I have built on Raspberry Pi and deployed full pipelines on Linux. That range means I can sit with an engineering team and follow the real constraints, not a designer's interpretation of them.",
            },
            {
              n: "04",
              title: "Systems before screens",
              body: "Architecture taught me to understand the conceptual needs before the details. Every interface here was designed at the scale of the product first, the screen second.",
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
