import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";

const PROJECTS: GalleryProject[] = [
  { slug: "eidolon",      title: "Eidolon",      description: "created a visual ai agent to help users trust automation",                                   year: "2026", coverColor: "transparent", labelGlassTint: "moss", coverImageClassName: "scale-[.9]",  coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/eidolon.png",                                              href: "/eidolon" },
  { slug: "buddy",        title: "Buddy",        description: "created a llm which captures group conversations as real-time images and diagrams",            year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.2]", coverImageFit: "contain",                       coverImage: "/coverimages/buddy.png",                                                href: "/buddy" },
  { slug: "fither",       title: "Fither",       description: "understanding dithers with ai",                                                               year: "2026",                                                                                                                                      coverImage: "/fither/assets/organic_dot_field.png",                                 href: "/work/fither" },
  { slug: "etrade",       title: "E*Trade",      description: "redesigned a financial trading platform to reduce cognitive load and speed up trades",         year: "2026", coverColor: "transparent",                         coverImageClassName: "scale-[1.1]", coverImageFit: "contain", labelTextTone: "dark", coverImage: "/coverimages/etrade.png",                                              href: "/etrade" },
  { slug: "nightterrors", title: "N1ghtterrors", description: "a website designed to capture the essence of n1ghtterrors",                                   year: "2024",                                                                                                                                      coverImage: "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",  href: "/nightterrors" },
  { slug: "jahn",         title: "JAHN",         description: "designed a portfolio faithful to helmut jahn's design language",                              year: "2023",                                                                                                                                      coverImage: "/jahn/jahn image.jpg",                                                 href: "/jahn" },
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
        className="mt-[8rem] flex h-[calc(100dvh-4rem)] flex-col overflow-hidden md:mt-[10rem] md:h-[calc(100dvh-5rem)]"
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
        <div className="min-h-0 flex-1">
          <CategoryGallery projects={PROJECTS} storageKey="gallery-product-design" />
        </div>
      </section>
    </main>
  );
}
