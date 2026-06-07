import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Product Design",
  description: "Failenn Aselta, Product Design work.",
};

const projects: GalleryProject[] = [
  {
    slug: "eidolon",
    title: "Eidolon",
    description: "AI agent interface · trust & transparency",
    tags: ["80% clearer agent in motion", "58% more control with haptics"],
    tagsInline: true,
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
    description: "LLM stenographer · real-time diagrams",
    tags: ["64% intuitive on first use", "40% stopped taking notes"],
    tagsInline: true,
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
    tags: ["30+ dither algorithms", "open-source"],
    tagsInline: true,
    year: "2026",
    coverColor: "transparent",
    coverImageFit: "contain",
    coverImageClassName: "scale-[1.05]",
    labelTextTone: "dark",
    coverImage:
      "/fither/assets/organic_dot_field.png",
    href: "/work/fither",
  },
  {
    slug: "etrade",
    title: "E*Trade",
    description: "trading platform redesign · cognitive load & speed",
    tags: ["83% faster mock trades", "100% navigated without help"],
    tagsInline: true,
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
    description: "a website designed to capture the essence of n1ghtterrors",
    tags: ["Full-stack build", "50% inventory sold in week one"],
    tagsInline: true,
    year: "2024",
    coverImage:
      "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",
    href: "/nightterrors",
  },
  {
    slug: "jahn",
    title: "JAHN",
    description: "designed a portfolio faithful to helmut jahn's design language",
    tags: ["Commissioned build", "2023"],
    tagsInline: true,
    year: "2023",
    coverColor: "transparent",
    coverImageFit: "contain",
    coverImageClassName: "scale-[1.05]",
    labelTextTone: "dark",
    coverImage:
      "/jahn/jahn image.jpg",
    href: "/jahn",
  },
];

export default function ProductDesignPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb header */}
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:pl-[93px] md:pr-12">
        <CaseBreadcrumb
          segments={[
            { label: "work", href: "/work" },
            { label: "product-design" },
          ]}
        />
      </div>
      <CategoryGallery projects={projects} storageKey="gallery-product-design" />
    </div>
  );
}
