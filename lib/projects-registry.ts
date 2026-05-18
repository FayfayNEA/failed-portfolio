/** Central registry of all projects — used by CategoryProjectsFooter. */

export type ProjectCategory = "product-design" | "branding" | "architecture";

export type ProjectEntry = {
  slug: string;
  title: string;
  description: string;
  year: string;
  coverImage: string;
  href: string;
  category: ProjectCategory;
};

export const PROJECTS_REGISTRY: ProjectEntry[] = [
  // ── Product Design ──────────────────────────────────────────────────────────
  {
    slug: "eidolon",
    title: "Eidolon",
    description: "AI agent interface · trust & transparency",
    year: "2026",
    coverImage: "/coverimages/eidolon.png",
    href: "/eidolon",
    category: "product-design",
  },
  {
    slug: "buddy",
    title: "Buddy",
    description: "LLM stenographer · real-time diagrams",
    year: "2026",
    coverImage: "/coverimages/buddy.png",
    href: "/buddy",
    category: "product-design",
  },
  {
    slug: "fither",
    title: "Fither",
    description: "Understanding dithers with AI",
    year: "2026",
    coverImage: "/fither/assets/organic_dot_field.png",
    href: "/work/fither",
    category: "product-design",
  },
  {
    slug: "etrade",
    title: "E*Trade",
    description: "Trading platform redesign · cognitive load & speed",
    year: "2026",
    coverImage: "/coverimages/etrade.png",
    href: "/etrade",
    category: "product-design",
  },
  {
    slug: "nightterrors",
    title: "N1ghtterrors",
    description: "A website designed to capture the essence of n1ghtterrors",
    year: "2024",
    coverImage:
      "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",
    href: "/nightterrors",
    category: "product-design",
  },
  {
    slug: "jahn",
    title: "JAHN",
    description: "A portfolio faithful to Helmut Jahn's design language",
    year: "2023",
    coverImage: "/jahn/jahn image.jpg",
    href: "/jahn",
    category: "product-design",
  },

  // ── Branding ─────────────────────────────────────────────────────────────────
  {
    slug: "vagabond",
    title: "Vagabond Radio",
    description: "Visual identity for an underground radio station",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/rKvch1GkMbOWLcefYnDSdybGUq4.png",
    href: "/vagabond",
    category: "branding",
  },
  {
    slug: "lighthouse",
    title: "Glitter Lighthouse",
    description: "Rebranded a historic New England lighthouse",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/CAdSAOIPp6DwaYBc7lHBWEZBNk0.png",
    href: "/lighthouse",
    category: "branding",
  },
  {
    slug: "spiral",
    title: "Spiral",
    description: "Spatial branding for an immersive rotating installation",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/DEKAt5ypvDK9UvA3LPNiXGUeV0.png",
    href: "/spiral",
    category: "branding",
  },
  {
    slug: "cool",
    title: "Cool.",
    description: "A minimalist streetwear brand built around one word",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/qd8g1zZZPiPsVtwm0mF7FUgHib4.png",
    href: "/cool",
    category: "branding",
  },
  {
    slug: "bonemachine",
    title: "BoneMachine",
    description: "Hand-screen-printed merch for a band's raw energy",
    year: "2020",
    coverImage: "/bonemachine/Screenshot 2026-01-28 173317.png",
    href: "/bonemachine",
    category: "branding",
  },

  // ── Architecture ─────────────────────────────────────────────────────────────
  {
    slug: "venice",
    title: "Venice Pavilion",
    description: "Top project at the Venice Biennale 2025",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/HL1ELAt4La6b4g71kQ2glWHA7Yk.png",
    href: "/venice",
    category: "architecture",
  },
  {
    slug: "the-other",
    title: "The Other",
    description: "Exploring the architecture of otherness and spatial identity",
    year: "2025",
    coverImage:
      "https://framerusercontent.com/images/EXJyfxkNEc9CeYLBNbMyBKX2jyo.png",
    href: "/the-other",
    category: "architecture",
  },
  {
    slug: "tiny-home",
    title: "Tiny Home",
    description: "Compact dwelling maximizing livability in minimal square footage",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/WV7DQ5qHriMXRViKYOfKPf3mU.jpg",
    href: "/tiny-home",
    category: "architecture",
  },
  {
    slug: "buddhist",
    title: "Buddhist Pavilion",
    description: "Bridging Buddhist spatial tradition with contemporary architecture",
    year: "2026",
    coverImage:
      "https://framerusercontent.com/images/g9lxBwTvLeVzbGb9MZYAGzdiJgY.jpg",
    href: "/buddhist",
    category: "architecture",
  },
  {
    slug: "villain-home",
    title: "Villain Home",
    description: "A dramatic residential concept inspired by the antagonist",
    year: "2023",
    coverImage:
      "https://framerusercontent.com/images/z2Le2qNS73xhaqzUlkqG2jC8.png",
    href: "/villain-home",
    category: "architecture",
  },
  {
    slug: "mindful-path",
    title: "Mindful Path",
    description: "Algae-driven biofabrication for sustainable spatial intervention",
    year: "2024",
    coverImage:
      "https://framerusercontent.com/images/CO5CFV63T9ovG2mqEQIDopHkw.png",
    href: "/mindful-path",
    category: "architecture",
  },
];

export function getRelatedProjects(
  category: ProjectCategory,
  currentSlug: string
): ProjectEntry[] {
  return PROJECTS_REGISTRY.filter(
    (p) => p.category === category && p.slug !== currentSlug
  );
}
