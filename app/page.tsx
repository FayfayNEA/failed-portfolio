import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";
import { RetroComputerSection } from "@/components/retro-computer-section";

const PROJECTS: GalleryProject[] = [
  { slug: "eidolon",      title: "Eidolon",      cardVariant: "portrait",  typeTags: "AI Tool · Mobile · B2B · B2B2C",       description: "Created a visual AI agent to help users trust automation.",                                 year: "2026", coverColor: "#ffffff", coverImageFit: "contain",                                    coverImage: "/coverimages/eidolon.png",                                            hoverVideo: "/eidolon/hero.mp4",                     href: "/eidolon",      tags: ["80% clearer agent in motion", "58% more control with haptics"], tagsInline: true },
  { slug: "buddy",        title: "Buddy",        cardVariant: "portrait",  typeTags: "AI Hardware · IoT · B2B",              description: "Created an LLM that captures group conversations as real-time images and diagrams.",      year: "2026", coverColor: "#ffffff", coverImageFit: "contain", coverImageClassName: "scale-[1.2]",  coverImage: "/coverimages/buddy.png",                                              hoverVideo: "/buddy/sequence-04.mp4",                href: "/buddy",        tags: ["64% intuitive on first use", "40% stopped taking notes"], tagsInline: true },
  { slug: "etrade",       title: "E*Trade",      cardVariant: "landscape", imageAreaClassName: "h-[260px] sm:h-[295px] lg:h-[330px]", canvasImageH: 330, typeTags: "Fintech · Web App · B2C",   description: "Redesigned a financial trading platform to reduce cognitive load and speed up trades.",    year: "2026", coverColor: "#ffffff", coverImageFit: "contain", coverImageClassName: "scale-[1.0]",  coverImage: "/coverimages/etrade.png",                                             hoverVideo: "/etrade/hero.mp4",                      href: "/etrade",       tags: ["83% faster mock trades", "100% navigated without help"], tagsInline: true },
  { slug: "fither",       title: "Fither",       cardVariant: "landscape", typeTags: "Creative Tool · Web App · B2C",        description: "An interactive tool for exploring and understanding dithering algorithms with AI.",       year: "2026", coverColor: "#ffffff", coverImageFit: "contain", coverImageClassName: "scale-[1.05]", coverImage: "/fither/assets/organic_dot_field.png",                                href: "/work/fither",  tags: ["30+ dither algorithms", "Open source"], tagsInline: true },
  { slug: "nightterrors", title: "N1ghtterrors", cardVariant: "standard",  typeTags: "Brand · E-commerce · D2C",             description: "Designed and built a full-stack storefront capturing the brand identity of N1ghtterrors.", year: "2024", coverImageFit: "cover",  useVideoAsCover: true, hoverVideo: "/nightterrors/n1ghtterrors%20demo2.mp4", href: "/nightterrors", tags: ["Full-stack build", "50% inventory sold in week one"], tagsInline: true },
  { slug: "jahn",         title: "JAHN",         cardVariant: "standard",  typeTags: "Architecture · Visualization · B2B",   description: "Designed a portfolio faithful to Helmut Jahn's design language.",                         year: "2023", coverColor: "#000000", coverImageFit: "cover",  useVideoAsCover: true, hoverVideo: "/jahn/jahn.mp4", href: "/jahn",         tags: ["Commissioned build", "2023"], tagsInline: true },
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

      {/* Product design gallery */}
      <section
        id="product-design"
        className="mt-[3rem] flex flex-col sm:mt-[4rem] md:mt-[7rem]"
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
        <CategoryGallery projects={PROJECTS} storageKey="gallery-product-design-v16" />
      </section>

      {/* Retro computer — desktop inline, mobile navigates to /work */}
      <section
        id="retro-computer"
        className="mt-[4rem] flex flex-col items-center px-4 py-4 md:mt-[6rem] md:px-8 md:py-3"
        aria-label="Work categories"
      >
        <RetroComputerSection productDesignHref="#product-design" showHint={false} />
      </section>
    </main>
  );
}
