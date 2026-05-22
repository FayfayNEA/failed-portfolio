import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject, GalleryInitialLayout } from "@/components/category-gallery";
import { BUDDY_VIDEO_ZOOM } from "@/lib/buddy-media";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";
import { RetroComputerSection } from "@/components/retro-computer-section";
import { ScrollBounceIn } from "@/components/scroll-bounce-in";

const PRODUCT_DESIGN_LAYOUT: GalleryInitialLayout = {
  refWidth: 1692,
  positions: [
    { x: 257,  y: 29   },
    { x: 313,  y: 997  },
    { x: 1013, y: 409  },
    { x: 1036, y: 1605 },
    { x: 115,  y: 2015 },
    { x: 1029, y: 2420 },
  ],
  sizesBySlug: {
    eidolon:      { w: 500, h: 728 },
    buddy:        { w: 533, h: 767 },
    etrade:       { w: 637, h: 595 },
    fither:       { w: 592, h: 506 },
    nightterrors: { w: 736, h: 590 },
    jahn:         { w: 575, h: 487 },
  },
};

const PROJECTS: GalleryProject[] = [
  { slug: "eidolon",      title: "Eidolon",      pillTheme: "green",      cardVariant: "portrait",  typeTags: "AI Tool · Mobile · B2B · B2B2C",       description: "Created a visual AI agent to help users trust automation.",                                 year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", useVideoAsCover: true,                                                                      hoverVideo: "/eidolon/hero-alpha.webm",                     href: "/eidolon",      tags: ["80% clearer agent in motion", "58% more control with haptics", "2026"], tagsInline: true },
  { slug: "buddy",        title: "Buddy",        pillTheme: "purple", canvasCardW: 550, canvasImageH: 609,        cardVariant: "portrait",  typeTags: "AI Hardware · IoT · B2B",              description: "Created an LLM that captures group conversations as real-time images and diagrams.",      year: "2026", coverColor: "#ffffff", coverImageFit: "cover", coverObjectPosition: "50% 54%", coverImage: "/coverimages/buddy-frame-2.jpg",                                              hoverVideo: "/buddy/sequence-04.mp4",                href: "/buddy",        tags: ["64% intuitive on first use", "40% stopped taking notes", "2026"], tagsInline: true },
  { slug: "etrade",       title: "E*Trade",      pillTheme: "blue",      cardVariant: "landscape", imageAreaClassName: "h-[260px] sm:h-[295px] lg:h-[330px]", canvasImageH: 455, canvasCardW: 580, typeTags: "Fintech · Web App · B2C",   description: "Redesigned a financial trading platform to reduce cognitive load and speed up trades.",    year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", coverBlendMode: "multiply", coverImage: "/coverimages/etrade-frame.jpg",                                             hoverVideo: "/etrade/hero.mp4",                      href: "/etrade",       tags: ["83% found the layout faster", "67% felt mentally lighter", "2026"], tagsInline: true },
  { slug: "fither",       title: "Fither",       pillTheme: "gray",       cardVariant: "landscape", typeTags: "Creative Tool · Web App · B2C",        description: "An interactive tool for exploring and understanding dithering algorithms with AI.",       year: "2026", coverColor: "#ffffff", coverImageFit: "cover", canvasImageH: 281, coverImage: "/coverimages/fither-frame.jpg", hoverVideo: "/demo.mp4",                        href: "/work/fither",  tags: ["30+ dither algorithms", "Open source", "2026"], tagsInline: true },
  { slug: "nightterrors", title: "N1ghtterrors", cardVariant: "standard",  canvasImageH: 414, canvasCardW: 736, pillTheme: "black",  typeTags: "Brand · E-commerce · D2C",             description: "Designed and built a full-stack storefront capturing the brand identity of N1ghtterrors.", year: "2024", coverImage: "/coverimages/nightterrors.jpg", coverImageFit: "cover", useVideoAsCover: true, hoverVideo: "/nightterrors/n1ghtterrors%20demo.mp4", href: "/nightterrors", tags: ["Full-stack build", "50% inventory sold in week one", "2021"], tagsInline: true },
  { slug: "jahn",         title: "JAHN",         pillTheme: "teal",         cardVariant: "standard",  typeTags: "Architecture · Visualization · B2B",   description: "Designed a portfolio faithful to Helmut Jahn's design language.",                         year: "2023", coverColor: "#000000", coverImage: "/coverimages/jahn.jpg", coverImageFit: "cover", canvasImageH: 281, useVideoAsCover: true, hoverVideo: "/jahn/jahn.mp4", href: "/jahn",         tags: ["Commissioned build", "Live site", "2023"], tagsInline: true },
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
        id="product-design-section"
        className="mt-[3rem] flex flex-col sm:mt-[4rem] md:mt-[7rem]"
        aria-label="Product Design work"
      >
        <div
          id="product-design"
          className="scroll-mt-[5.5rem] shrink-0 border-b border-zinc-200/50 px-8 py-3 md:scroll-mt-[6.5rem] md:px-12"
        >
          <CaseBreadcrumb
            segments={[
              { label: "work", href: "/work" },
              { label: "product-design" },
            ]}
          />
        </div>
        <CategoryGallery projects={PROJECTS} storageKey="gallery-product-design-v110" initialLayout={PRODUCT_DESIGN_LAYOUT} />
      </section>

      {/* Retro computer — desktop inline, mobile navigates to /work */}
      <section
        id="retro-computer"
        className="scroll-mt-[5.5rem] mt-[2rem] flex flex-col items-center px-4 py-4 md:mt-[3rem] md:scroll-mt-[6.5rem] md:px-8 md:py-3"
        aria-label="Work categories"
      >
        <ScrollBounceIn className="w-full">
          <RetroComputerSection productDesignHref="#product-design" showHint={false} />
        </ScrollBounceIn>
      </section>
    </main>
  );
}
