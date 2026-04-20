import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Failenn Aselta — Architecture and spatial design work.",
};

const projects: GalleryProject[] = [
  {
    slug: "venice",
    title: "Venice Pavilion",
    description: "a project in venice",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/HL1ELAt4La6b4g71kQ2glWHA7Yk.png?width=2725&height=2044",
    coverImageFit: "contain",
    coverImageClassName: "scale-[1.1]",
    coverColor: "#ffffff",
    href: "/venice",
  },
  {
    slug: "the-other",
    title: "The Other",
    description: "the architecture of other",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/EXJyfxkNEc9CeYLBNbMyBKX2jyo.png",
    href: "/the-other",
  },
  {
    slug: "tiny-home",
    title: "Tiny Home",
    description: "a very tiny home",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/WV7DQ5qHriMXRViKYOfKPf3mU.jpg?width=1536&height=952",
    coverImageFit: "contain",
    coverImageClassName: "origin-center scale-[1.4]",
    coverColor: "#ffffff",
    href: "/tiny-home",
  },
  {
    slug: "buddhist",
    title: "Buddhist Pavilion",
    description: "a buddhist pavilion",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/g9lxBwTvLeVzbGb9MZYAGzdiJgY.jpg?width=5400&height=3600",
    coverImageClassName: "scale-[2.12]",
    coverColor: "#ffffff",
    labelTextTone: "dark",
    href: "/buddhist",
  },
  {
    slug: "villain-home",
    title: "Villain Home",
    description: "a poison home",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/z2Le2qNS73xhaqzUlkqG2jC8.png?width=2570&height=1708",
    coverImageClassName: "scale-[1]",
    coverColor: "transparent",
    href: "/villain-home",
  },
  {
    slug: "mindful-path",
    title: "Mindful Path",
    description: "algae-driven biofabrication",
    year: "2024",
    coverColor: "transparent",
    coverImageClassName: "scale-[1]",
    coverImageFit: "contain",
    coverImage:
      "https://framerusercontent.com/images/CO5CFV63T9ovG2mqEQIDopHkw.png?width=3368&height=1052",
    labelTextTone: "dark",
    href: "/mindful-path",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col overflow-hidden md:h-[calc(100dvh-5rem)]">
      {/* Breadcrumb header */}
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:px-12">
        <CaseBreadcrumb
          segments={[
            { label: "home", href: "/" },
            { label: "work", href: "/work" },
            { label: "architecture" },
          ]}
        />
      </div>
      <div className="min-h-0 flex-1">
        <CategoryGallery projects={projects} storageKey="gallery-architecture" />
      </div>
    </div>
  );
}
