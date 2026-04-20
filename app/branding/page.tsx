import type { Metadata } from "next";
import { CategoryGallery } from "@/components/category-gallery";
import type { GalleryProject } from "@/components/category-gallery";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";

export const metadata: Metadata = {
  title: "Branding",
  description: "Failenn Aselta — Branding and visual identity work.",
};

const projects: GalleryProject[] = [
  {
    slug: "vagabond",
    title: "Vagabond Radio",
    description: "vagabond radio",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/rKvch1GkMbOWLcefYnDSdybGUq4.png",
    href: "/vagabond",
  },
  {
    slug: "lighthouse",
    title: "Glitter Lighthouse",
    description: "a glitter lighthouse",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/CAdSAOIPp6DwaYBc7lHBWEZBNk0.png",
    href: "/lighthouse",
  },
  {
    slug: "spiral",
    title: "Spiral",
    description: "a swirling set design",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/DEKAt5ypvDK9UvA3LPNiXGUeV0.png",
    href: "/spiral",
  },
  {
    slug: "cool",
    title: "Cool.",
    description: "cool. tshirts",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/qd8g1zZZPiPsVtwm0mF7FUgHib4.png",
    href: "/cool",
  },
  {
    slug: "bonemachine",
    title: "BoneMachine",
    description: "hand-printed band merch",
    year: "2020",
    coverImage:
      "/bonemachine/Screenshot 2026-01-28 173317.png",
    href: "/bonemachine",
  },
];

export default function BrandingPage() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col overflow-hidden md:h-[calc(100dvh-5rem)]">
      <div className="shrink-0 border-b border-zinc-200/50 px-8 py-3 md:px-12">
        <CaseBreadcrumb
          segments={[
            { label: "home", href: "/" },
            { label: "work", href: "/work" },
            { label: "branding" },
          ]}
        />
      </div>
      <div className="min-h-0 flex-1">
        <CategoryGallery projects={projects} storageKey="gallery-branding" />
      </div>
    </div>
  );
}
