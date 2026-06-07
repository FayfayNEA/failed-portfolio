import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject, GalleryInitialLayout } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Failenn Aselta, Architecture and spatial design work.",
};

const ARCHITECTURE_LAYOUT: GalleryInitialLayout = {
  refWidth: 1900,
  positions: [
    { x: 74.48,   y: 10  },
    { x: 481.11,  y: 190 },
    { x: 969.96,  y: 334 },
    { x: 1451.96, y: 79  },
    { x: 114.11,  y: 411 },
    { x: 865.11,  y: 23  },
  ],
  sizesBySlug: {
    venice:       { w: 364, h: 305 },
    "the-other":  { w: 350, h: 357 },
    "tiny-home":  { w: 444, h: 384 },
    buddhist:     { w: 424, h: 398 },
    "villain-home": { w: 351, h: 329 },
    "mindful-path": { w: 445, h: 256 },
  },
};

const projects: GalleryProject[] = [
  {
    slug: "venice",
    title: "Venice Pavilion",
    description: "awarded top project at the venice biennale 2025",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/HL1ELAt4La6b4g71kQ2glWHA7Yk.png?width=2725&height=2044",
    coverImageFit: "cover",
    coverColor: "#ffffff",
    canvasImageH: 375,
    href: "/venice",
  },
  {
    slug: "the-other",
    title: "The Other",
    description: "exploring the architecture of otherness and spatial identity",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/EXJyfxkNEc9CeYLBNbMyBKX2jyo.png",
    coverImageFit: "cover",
    canvasImageH: 375,
    href: "/the-other",
  },
  {
    slug: "tiny-home",
    title: "Tiny Home",
    description: "a compact dwelling designed to maximize livability in minimal square footage",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/WV7DQ5qHriMXRViKYOfKPf3mU.jpg?width=1536&height=952",
    coverImageFit: "cover",
    coverColor: "#ffffff",
    canvasImageH: 310,
    href: "/tiny-home",
  },
  {
    slug: "buddhist",
    title: "Buddhist Pavilion",
    description: "a backyard pavilion bridging buddhist spatial tradition with contemporary architecture",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/g9lxBwTvLeVzbGb9MZYAGzdiJgY.jpg?width=5400&height=3600",
    coverImageFit: "cover",
    coverColor: "#ffffff",
    labelTextTone: "dark",
    canvasImageH: 333,
    href: "/buddhist",
  },
  {
    slug: "villain-home",
    title: "Villain Home",
    description: "a dramatic residential concept inspired by the aesthetics of the antagonist",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/z2Le2qNS73xhaqzUlkqG2jC8.png?width=2570&height=1708",
    coverImageFit: "cover",
    coverColor: "transparent",
    canvasImageH: 332,
    href: "/villain-home",
  },
  {
    slug: "mindful-path",
    title: "Mindful Path",
    description: "algae-driven biofabrication for sustainable spatial intervention",
    year: "2024",
    coverColor: "transparent",
    coverImageFit: "cover",
    coverImage:
      "https://framerusercontent.com/images/CO5CFV63T9ovG2mqEQIDopHkw.png?width=3368&height=1052",
    labelTextTone: "dark",
    canvasCardW: 640,
    canvasImageH: 200,
    href: "/mindful-path",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col">
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:pl-[94px] md:pr-12">
        <CaseBreadcrumb
          segments={[
            { label: "work", href: "/work" },
            { label: "architecture" },
          ]}
        />
      </div>
      <CategoryGallery
        projects={projects}
        storageKey="gallery-architecture-v6"
        cardMetaHeight={110}
        initialLayout={ARCHITECTURE_LAYOUT}
      />
    </div>
  );
}
