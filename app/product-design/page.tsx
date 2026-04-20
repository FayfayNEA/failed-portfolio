import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Product Design",
  description: "Failenn Aselta — Product Design work.",
};

const projects: GalleryProject[] = [
  {
    slug: "eidolon",
    title: "Eidolon",
    description: "a visually interactive ai agent",
    year: "2026",
    coverColor: "transparent",
    labelGlassTint: "moss",
    coverImageClassName: "scale-[.9]",
    coverImageFit: "contain",
    labelTextTone: "dark",
    coverImage:
      "/coverimages/eidolon.png",
    href: "/eidolon",
  },
  {
    slug: "buddy",
    title: "Buddy",
    description: "a design best friend",
    year: "2026",
    coverColor: "transparent",
    coverImageClassName: "scale-[1.2]",
    coverImageFit: "contain",
    coverImage:
      "/coverimages/buddy.png",
    href: "/buddy",
  },
  {
    slug: "fither",
    title: "Fither",
    description: "understanding dithers with ai",
    year: "2026",
    coverImage:
      "/fither/assets/organic_dot_field.png",
    href: "/work/fither",
  },
  {
    slug: "etrade",
    title: "E*Trade",
    description: "redesigning a financial trading platform",
    year: "2026",
    coverColor: "transparent",
    coverImageClassName: "scale-[1.1]",
    coverImageFit: "contain",
    labelTextTone: "dark",
    coverImage:
      "/coverimages/etrade.png",
    href: "/etrade",
  },
  {
    slug: "nightterrors",
    title: "N1ghtterrors",
    description: "an edgy clothing line",
    year: "2024",
    coverImage:
      "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",
    href: "/nightterrors",
  },
  {
    slug: "jahn",
    title: "JAHN",
    description: "a website for an architect",
    year: "2023",
    coverImage:
      "/jahn/jahn image.jpg",
    href: "/jahn",
  },
];

export default function ProductDesignPage() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col overflow-hidden md:h-[calc(100dvh-5rem)]">
      {/* Breadcrumb header */}
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:px-12">
        <CaseBreadcrumb
          segments={[
            { label: "home", href: "/" },
            { label: "work", href: "/work" },
            { label: "product-design" },
          ]}
        />
      </div>
      <div className="min-h-0 flex-1">
        <CategoryGallery projects={projects} storageKey="gallery-product-design" />
      </div>
    </div>
  );
}
