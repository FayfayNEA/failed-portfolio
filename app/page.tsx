import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject, GalleryInitialLayout } from "@/components/category-gallery";
import { BUDDY_VIDEO_ZOOM } from "@/lib/buddy-media";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { DesignerBio } from "@/components/designer-bio";
import { HomeIntro } from "@/components/home-intro";
import { RetroComputerSection } from "@/components/retro-computer-section";
import { ScrollBounceIn } from "@/components/scroll-bounce-in";
import { HomeScrollListener } from "@/components/home-scroll-listener";
import { CollageScrollHint } from "@/components/collage-scroll-hint";
import { CollageWordOverlay } from "@/components/collage-word-overlay";

// Clean 2×4 grid in design space — all cards uniform so videos letterbox to fit
// and the white meta strip lines up on every card. Still drag + resize on desktop.
const GRID_W = 510;
const GRID_H = 490;
const PRODUCT_DESIGN_LAYOUT: GalleryInitialLayout = {
  refWidth: 1372,
  positions: [
    { x: 116, y: 36   },  // buddy
    { x: 716, y: 36   },  // eidolon
    { x: 116, y: 620  },  // etrade
    { x: 716, y: 620  },  // teatimer
    { x: 116, y: 1215 },  // nightterrors
    { x: 716, y: 1215 },  // fither
    { x: 116, y: 1788 },  // iris-house
    { x: 716, y: 1788 },  // jahn
  ],
  sizesBySlug: {
    buddy:        { w: GRID_W, h: GRID_H },
    eidolon:      { w: GRID_W, h: GRID_H },
    etrade:       { w: GRID_W, h: GRID_H },
    teatimer:     { w: GRID_W, h: GRID_H },
    nightterrors: { w: GRID_W, h: 463 },
    fither:       { w: GRID_W, h: 463 },
    "iris-house": { w: GRID_W, h: GRID_H },
    jahn:         { w: GRID_W, h: 465 },
  },
};

const PROJECTS: GalleryProject[] = [
  { slug: "buddy",        title: "Buddy",        statusLabel: "Shipped",     pillTheme: "purple", cardVariant: "portrait",  typeTags: "AI Hardware · IoT · B2B",                   description: "Created an LLM that captures group conversations as real-time images and diagrams.",      year: "2026", coverColor: "#f0f0f0", coverImageFit: "cover", coverImage: "/buddybackground.jpg", canvasCardW: 540, canvasImageH: 322, coverVideo: "/buddy/buddydemo-full.mp4", coverVideoFit: "cover", coverVideoStartTime: 0, coverVideoStatic: true, hoverVideo: "/buddy/buddydemo-full.mp4", href: "/buddy",        tags: ["64% intuitive on first use", "40% stopped taking notes", "2026"], tagsInline: true },
  { slug: "eidolon",      title: "Eidolon",      statusLabel: "Case Study",  pillTheme: "green",  cardVariant: "portrait",  typeTags: "AI Tool · Mobile · B2B · B2B2C",            description: "Designed what the web would look like as 98% AI and 2% human.",                                 year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", useVideoAsCover: true,                                                                      hoverVideo: "/eidolon/hero-alpha.webm",                     href: "/eidolon",      tags: ["80% clearer agent in motion", "58% more control with haptics", "2026"], tagsInline: true },
  { slug: "etrade",       title: "E*Trade",      statusLabel: "Case Study",  pillTheme: "blue",   cardVariant: "landscape", typeTags: "Fintech · Web App · B2C",                   description: "Redesigned a financial trading platform to reduce cognitive load and speed up trades.",    year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", coverBlendMode: "multiply", coverImage: "/coverimages/etrade-frame.jpg", imageAreaClassName: "h-[260px] sm:h-[295px] lg:h-[330px]", canvasImageH: 455, canvasCardW: 580, hoverVideo: "/etrade/hero.mp4", href: "/etrade",       tags: ["83% found the layout faster", "67% felt mentally lighter", "2026"], tagsInline: true },
  { slug: "teatimer",     title: "TeaTimer",     statusLabel: "Shipped",     pillTheme: "parchment", cardVariant: "landscape", typeTags: "Creative Tool · Web App · Consumer",         description: "A vintage botanical focus-session timer with mood companions and collectible sticker rewards.", year: "2026", coverColor: "#ffffff", coverImageFit: "contain", canvasImageH: 281, useVideoAsCover: true, hoverVideo: "/teatimer/tea-timer.mp4", href: "/teatimer", tags: ["Vite + React", "Framer Motion", "2026"], tagsInline: true },
  { slug: "nightterrors", title: "N1ghtterrors", statusLabel: "Shipped",     pillTheme: "black",  cardVariant: "standard",  typeTags: "Brand · E-commerce · D2C",                  description: "Designed and built a full-stack storefront capturing the brand identity of N1ghtterrors.", year: "2024", coverColor: "#e8e8e8", coverImage: "/coverimages/nightterrors.jpg", coverImageFit: "contain", coverObjectPosition: "top", useVideoAsCover: true, canvasImageH: 414, canvasCardW: 736, hoverVideo: "/nightterrors/n1ghtterrors%20demo.mp4", href: "/nightterrors", tags: ["Full-stack build", "50% inventory sold in week one", "2021"], tagsInline: true },
  { slug: "fither",       title: "Fither",       statusLabel: "Shipped",     pillTheme: "gray",   cardVariant: "landscape", typeTags: "Creative Tool · Web App · B2C",             description: "An interactive tool for exploring and understanding dithering algorithms with AI.",       year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", coverObjectPosition: "top", canvasImageH: 281, coverImage: "/coverimages/fither-frame.jpg", hoverVideo: "/demo.mp4", href: "/work/fither",  tags: ["30+ dither algorithms", "Open source", "2026"], tagsInline: true },
  { slug: "iris-house",   title: "Iris House",   statusLabel: "Shipped",     pillTheme: "orange", cardVariant: "landscape", typeTags: "Indie Game · Spatial Empathy · Three.js",   description: "Coded a video game for people to further empathize with my dog's experience of the world.", year: "2026", coverColor: "#1a1a1a", coverImageFit: "cover", canvasImageH: 370, useVideoAsCover: true, hoverVideo: "/iris-world/iris-walkthrough.mp4", href: "/iris-world", tags: ["Live Demo", "Three.js", "2026"], tagsInline: true },
  { slug: "jahn",         title: "JAHN",         statusLabel: "Shipped",     pillTheme: "teal",   cardVariant: "standard",  typeTags: "Architecture · Visualization · B2B",        description: "Designed a portfolio faithful to Helmut Jahn's design language.",                         year: "2023", coverColor: "#e8e8e8", coverImage: "/coverimages/jahn.jpg", coverImageFit: "contain", coverObjectPosition: "top", canvasImageH: 281, useVideoAsCover: true, hoverVideo: "/jahn/jahn.mp4", href: "/jahn",         tags: ["Commissioned build", "Live site", "2023"], tagsInline: true },
];

export default function Home() {
  return (
    <main className="w-full bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      <HomeScrollListener />
      <CollageScrollHint />
      <DesignerBio />

      {/* Collage iframe */}
      <div id="home-collage" className="relative min-h-0 w-full overflow-hidden pt-6 md:pt-[72px]">
        <CollageWordOverlay />
        {/* Gradient masks — minimal on mobile; scene now fills the iframe height */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 md:h-[8rem]"
          style={{ background: "linear-gradient(to bottom, #e8e8e8 62%, transparent)" }}
        />
        <div className="h-[58dvh] -mb-[20dvh] sm:mb-0 sm:h-[calc(100dvh-5rem)] md:-mb-[2rem] md:h-[calc(87dvh-5rem)]">
          <iframe
            src="/home/index.html"
            className="block h-full w-full border-0"
            title="Failenn Aselta - Home"
            loading="lazy"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-8 md:block"
          style={{ background: "linear-gradient(to top, #e8e8e8 0%, transparent 100%)" }}
        />
      </div>

      {/* Product design gallery */}
      <section
        id="product-design-section"
        className="mt-0 flex flex-col sm:mt-8 md:mt-4"
        aria-label="Product Design work"
      >
        <div
          id="product-design"
          className="scroll-mt-[5.5rem] shrink-0 border-b border-zinc-200/50 px-8 py-3 md:scroll-mt-[6.5rem] md:pl-[95px] md:pr-12"
        >
          <CaseBreadcrumb
            segments={[
              { label: "work", href: "/#retro-computer" },
              { label: "product-design" },
            ]}
          />
        </div>
        <div className="md:px-16">
          <CategoryGallery projects={PROJECTS} storageKey="gallery-product-design-v136" initialLayout={PRODUCT_DESIGN_LAYOUT} />
        </div>
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
