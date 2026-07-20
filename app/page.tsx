import type { GalleryProject, GalleryInitialLayout } from "@/components/category-gallery";
import { ProductDesignGallery } from "@/components/product-design-gallery";
import { BUDDY_VIDEO_ZOOM } from "@/lib/buddy-media";
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
    { x: 716, y: 36   },  // tetonic
    { x: 116, y: 620  },  // eidolon
    { x: 716, y: 620  },  // etrade
    { x: 116, y: 1215 },  // teatimer
    { x: 716, y: 1215 },  // orb
    { x: 116, y: 1788 },  // iris-house — hidden by default, shown via "show all"
    { x: 716, y: 1788 },  // fither — hidden by default, shown via "show all"
    { x: 116, y: 2336 },  // nightterrors — hidden by default, shown via "show all"
    { x: 716, y: 2336 },  // jahn — hidden by default, shown via "show all"
  ],
  sizesBySlug: {
    buddy:        { w: GRID_W, h: GRID_H },
    eidolon:      { w: GRID_W, h: GRID_H },
    etrade:       { w: GRID_W, h: GRID_H },
    teatimer:     { w: GRID_W, h: GRID_H },
    nightterrors: { w: GRID_W, h: GRID_H },
    fither:       { w: GRID_W, h: GRID_H },
    "iris-house": { w: GRID_W, h: GRID_H },
    jahn:         { w: GRID_W, h: GRID_H },
    orb:          { w: GRID_W, h: GRID_H },
    tetonic:      { w: GRID_W, h: GRID_H },
  },
};

const PROJECTS: GalleryProject[] = [
  { slug: "buddy",        title: "Buddy",        statusLabel: "Shipped",     pillTheme: "purple", cardVariant: "portrait",  typeTags: "AI Hardware · IoT · B2B",                   description: "Created an LLM that captures group conversations as real-time images and diagrams.",      year: "2026", coverColor: "#f0f0f0", coverImageFit: "cover", coverImage: "/buddybackground.jpg", canvasCardW: 540, canvasImageH: 314, coverVideo: "/buddy/buddydemo-full.mp4", coverVideoFit: "cover", coverVideoStartTime: 2.5, coverVideoStatic: true, hoverVideo: "/buddy/buddydemo-full.mp4", href: "/buddy",        tags: ["64% intuitive on first use", "40% stopped taking notes", "2026"], tagsInline: true },
  { slug: "tetonic",      title: "Tetonic",      statusLabel: "Case Study",  pillTheme: "parchment", cardVariant: "landscape", typeTags: "Insurance · Logistics · B2B", description: "Livestock transit software for underwriting compliance and hauler load economics.", year: "2026", coverColor: "#29331f", coverImage: "/tetonic/tetonic-card-still.jpg", coverImageFit: "contain", canvasImageH: 314, useVideoAsCover: true, hoverVideo: "/tetonic/tetonic-card.mp4", href: "/tetonic", tags: ["75% want real margins", "HTML · CSS · JS", "2026"], tagsInline: true },
  { slug: "eidolon",      title: "Eidolon",      statusLabel: "Case Study",  pillTheme: "green",  cardVariant: "portrait",  typeTags: "AI Tool · Mobile · B2B · B2B2C",            description: "Designed what the web would look like as 98% AI and 2% human.",                                 year: "2026", coverColor: "#ffffff", coverImage: "/eidolon/hero-poster.jpg", coverImageFit: "cover", canvasImageH: 314, useVideoAsCover: true,                                                                      hoverVideo: "/eidolon/hero-alpha.mp4",                     href: "/eidolon",      tags: ["80% clearer agent in motion", "58% more control with haptics", "2026"], tagsInline: true },
  { slug: "etrade",       title: "E*Trade",      statusLabel: "Case Study",  pillTheme: "blue",   cardVariant: "landscape", typeTags: "Fintech · Web App · B2C",                   description: "Redesigned a financial trading platform to reduce cognitive load and speed up trades.",    year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", coverBlendMode: "multiply", coverImage: "/coverimages/etrade-frame.jpg", imageAreaClassName: "h-[260px] sm:h-[295px] lg:h-[330px]", canvasImageH: 314, canvasCardW: 580, hoverVideo: "/etrade/hero.mp4", href: "/etrade",       tags: ["83% found the layout faster", "67% felt mentally lighter", "2026"], tagsInline: true },
  { slug: "teatimer",     title: "TeaTimer",     statusLabel: "Shipped",     pillTheme: "parchment", cardVariant: "landscape", typeTags: "Creative Tool · Web App · Consumer",         description: "A vintage botanical focus-session timer with mood companions and collectible sticker rewards.", year: "2026", coverColor: "#ffffff", coverImage: "/teatimer/tea-timer-poster.jpg", coverImageFit: "cover", canvasImageH: 314, useVideoAsCover: true, hoverVideo: "/teatimer/tea-timer.mp4", href: "/teatimer", tags: ["Vite + React", "Framer Motion", "2026"], tagsInline: true },
  { slug: "orb",          title: "Orb",          statusLabel: "Shipped",     pillTheme: "purple", cardVariant: "landscape", typeTags: "Creative Tool · Web App · Consumer",         description: "An animated translucent blob with swirling internal caustics. A small WebGL playground for organic plasma forms.", year: "2026", coverColor: "#f5edd4", coverImage: "/orb/orb-poster.jpg", coverImageFit: "cover", canvasImageH: 314, useVideoAsCover: true, hoverVideo: "/orb/orb-card.mp4", href: "/orb",           tags: ["Three.js", "WebGL", "2026"], tagsInline: true },
  { slug: "iris-house",   title: "Iris House",   statusLabel: "Shipped",     pillTheme: "orange", cardVariant: "landscape", typeTags: "Indie Game · Spatial Empathy · Three.js",   description: "Coded a video game for people to further empathize with my dog's experience of the world.", year: "2026", coverColor: "#1a1a1a", coverImage: "/iris-world/iris-poster.jpg", coverImageFit: "contain", mobileCoverImageFit: "contain", canvasImageH: 314, useVideoAsCover: true, hoverVideo: "/iris-world/iris-walkthrough.mp4", href: "/iris-world", tags: ["Live Demo", "Three.js", "2026"], tagsInline: true, archived: true },
  { slug: "fither",       title: "Fither",       statusLabel: "Shipped",     pillTheme: "gray",   cardVariant: "landscape", typeTags: "Creative Tool · Web App · B2C",             description: "An interactive tool for exploring and understanding dithering algorithms with AI.",       year: "2026", coverColor: "#e8e8e8", coverImageFit: "contain", coverObjectPosition: "top", canvasImageH: 314, coverImage: "/coverimages/fither-frame.jpg", hoverVideo: "/demo.mp4", href: "/work/fither",  tags: ["30+ dither algorithms", "Open source", "2026"], tagsInline: true, archived: true },
  { slug: "nightterrors", title: "N1ghtterrors", statusLabel: "Shipped",     pillTheme: "black",  cardVariant: "standard",  typeTags: "Brand · E-commerce · D2C",                  description: "Designed and built a full-stack storefront capturing the brand identity of N1ghtterrors.", year: "2024", coverColor: "#e8e8e8", coverImage: "/coverimages/nightterrors.jpg", coverImageFit: "contain", mobileCoverImageFit: "contain", coverObjectPosition: "top", useVideoAsCover: true, canvasImageH: 314, canvasCardW: 736, hoverVideo: "/nightterrors/n1ghtterrors%20demo.mp4", href: "/nightterrors", tags: ["Full-stack build", "50% inventory sold in week one", "2021"], tagsInline: true, archived: true },
  { slug: "jahn",         title: "JAHN",         statusLabel: "Shipped",     pillTheme: "teal",   cardVariant: "standard",  typeTags: "Architecture · Visualization · B2B",        description: "Designed a portfolio faithful to Helmut Jahn's design language.",                         year: "2023", coverColor: "#e8e8e8", coverImage: "/coverimages/jahn.jpg", coverImageFit: "contain", coverObjectPosition: "top", canvasImageH: 314, useVideoAsCover: true, hoverVideo: "/jahn/jahn.mp4", href: "/jahn",         tags: ["Commissioned build", "Live site", "2023"], tagsInline: true, archived: true },
];

export default function Home() {
  return (
    <main className="w-full bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      <HomeScrollListener />
      <CollageScrollHint />

      {/* Collage + bio sign share one relative frame so the sign can sit on the old orb spot */}
      <div className="relative min-h-0 w-full">
        <DesignerBio />

        <div
          id="home-collage"
          className="relative min-h-0 w-full overflow-hidden pt-6 md:pt-[84px]"
          style={{
            maskImage: "linear-gradient(to bottom, #000 0%, #000 calc(100% - 28px), transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 calc(100% - 28px), transparent 100%)",
          }}
        >
          <CollageWordOverlay />
          {/* Top fade only — bottom solid #e8e8e8 mask removed (seam above scroll hint). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 md:h-[8rem]"
            style={{ background: "linear-gradient(to bottom, var(--canvas) 62%, transparent)" }}
          />
          <div className="h-[58dvh] -mb-[20dvh] sm:mb-0 sm:h-[calc(100dvh-5rem)] md:-mb-[3.5rem] md:h-[calc(87dvh-5rem)]">
            <iframe
              src="/home/index.html"
              className="block h-full w-full border-0"
              title="Failenn Aselta - Home"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Product design gallery */}
      <section
        id="product-design-section"
        className="relative z-[30] mt-0 flex flex-col sm:mt-8 md:mt-0"
        aria-label="Product Design work"
      >
        <ProductDesignGallery projects={PROJECTS} storageKey="gallery-product-design-v145" initialLayout={PRODUCT_DESIGN_LAYOUT} />
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
