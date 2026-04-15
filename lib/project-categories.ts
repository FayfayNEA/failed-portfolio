/**
 * Static mapping of project slug -> work category.
 * Used to build breadcrumb paths: home / work / category / project.
 */
export const PROJECT_CATEGORY: Record<string, string> = {
  // Product design
  buddy: "product-design",
  eidolon: "product-design",
  etrade: "product-design",
  nightterrors: "product-design",
  fither: "product-design",
  jahn: "product-design",

  // Architecture / spatial
  buddhist: "architecture",
  spiral: "architecture",
  "the-other": "architecture",
  "tiny-home": "architecture",
  venice: "architecture",
  "villain-home": "architecture",

  // Branding / graphic
  bonemachine: "branding",
  cool: "branding",
  lighthouse: "branding",
  "mindful-path": "architecture",
  vagabond: "branding",
};

/** Return the work category for a slug, or undefined if uncategorised. */
export function getCategoryForSlug(slug: string): string | undefined {
  return PROJECT_CATEGORY[slug];
}

export const PROJECT_COVERS: Record<string, string | null> = {
  eidolon: "https://framerusercontent.com/assets/raPqzNvYI1Sd18DxoUcU8CBu2vE.mp4",
  buddy: "https://framerusercontent.com/images/SqRD3iGPV9zj7sjFW8paxNims.png",
  etrade: "https://framerusercontent.com/images/NvG3dp6QgMIWgEFMHXnQsAmc3lc.png",
  nightterrors: "https://framerusercontent.com/images/AL4WyDyvVZgsOwghkwSyqiMdo.jpg",
  fither: null,
  jahn: "/jahn/20220525-eden-frankfurt-immobel-_85D3390C1.jpg",
  venice: "https://framerusercontent.com/images/k6uoV6uaa1Eky8Pn5rX0i1g1OE.png",
  "the-other": "https://framerusercontent.com/images/EXJyfxkNEc9CeYLBNbMyBKX2jyo.png",
  "tiny-home": "/tinyhome/MSFheiZb0zJGHMxjeofFaDBIJ2A.avif",
  buddhist: "https://framerusercontent.com/images/I3nUzmw4CQLSqrNhNvIBsODQ9k.png",
  spiral: "https://framerusercontent.com/images/uIUiTnZMGSz8vjTv9NDGGocSn9s.png",
  "villain-home": "/villainhome/5JAzgvWHWQLPltU6ihQSwqCAq0.avif",
  vagabond: "https://framerusercontent.com/images/VgJXppiWbJrA7rqDXi32rBOZXw.png",
  lighthouse: "https://framerusercontent.com/images/CtEx1xGyfp8wk9rVI2zSrbzMw8w.png",
  cool: "https://framerusercontent.com/images/lIxsyfvexKimk9GUFbwyFweQ60.png",
  bonemachine: "https://framerusercontent.com/images/y56E1iunisdCcbJSTlCyXqRZ8pg.png",
};

export function getCoverForSlug(slug: string): string | null {
  return PROJECT_COVERS[slug] ?? null;
}
