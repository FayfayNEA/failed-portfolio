import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject, GalleryInitialLayout } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Branding",
  description: "Failenn Aselta, Branding and visual identity work.",
};

const BRANDING_LAYOUT: GalleryInitialLayout = {
  refWidth: 1860,
  positions: [
    { x: 299.07,  y: 15  },
    { x: 1013.12, y: 19  },
    { x: 116.96,  y: 348 },
    { x: 1444.96, y: 288 },
    { x: 651.12,  y: 373 },
  ],
  sizesBySlug: {
    vagabond:    { w: 427, h: 291 },
    lighthouse:  { w: 395, h: 334 },
    spiral:      { w: 353, h: 396 },
    cool:        { w: 371, h: 321 },
    bonemachine: { w: 384, h: 329 },
  },
};

const projects: GalleryProject[] = [
  {
    slug: "vagabond",
    title: "Vagabond Radio",
    description: "visual identity and art direction for an underground radio station",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/rKvch1GkMbOWLcefYnDSdybGUq4.png",
    coverImageFit: "cover",
    canvasImageH: 240,
    href: "/vagabond",
  },
  {
    slug: "lighthouse",
    title: "Glitter Lighthouse",
    description: "rebranded a historic new england lighthouse and brought its identity to life",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/CAdSAOIPp6DwaYBc7lHBWEZBNk0.png",
    coverImageFit: "cover",
    canvasImageH: 320,
    href: "/lighthouse",
  },
  {
    slug: "spiral",
    title: "Spiral",
    description: "spatial branding and set design for an immersive rotating installation",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/DEKAt5ypvDK9UvA3LPNiXGUeV0.png",
    coverImageFit: "cover",
    canvasImageH: 380,
    href: "/spiral",
  },
  {
    slug: "cool",
    title: "Cool.",
    description: "a minimalist streetwear brand built around one word",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/qd8g1zZZPiPsVtwm0mF7FUgHib4.png",
    coverImageFit: "cover",
    canvasImageH: 280,
    href: "/cool",
  },
  {
    slug: "bonemachine",
    title: "BoneMachine",
    description: "hand-screen-printed merch translating a band's raw energy into a wearable identity",
    year: "2020",
    coverImage:
      "/bonemachine/Screenshot 2026-01-28 173317.png",
    coverImageFit: "cover",
    canvasImageH: 320,
    href: "/bonemachine",
  },
];

export default function BrandingPage() {
  return (
    <div className="flex flex-col">
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:pl-[78px] md:pr-12">
        <CaseBreadcrumb
          segments={[
            { label: "work", href: "/work" },
            { label: "branding" },
          ]}
        />
      </div>
      <CategoryGallery
        projects={projects}
        storageKey="gallery-branding-v5"
        cardMetaHeight={110}
        initialLayout={BRANDING_LAYOUT}
      />
    </div>
  );
}
