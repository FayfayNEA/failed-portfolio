import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export type ContentFrontmatter = {
  title?: string;
  slug?: string;
  roles?: string[];
  tools?: string[];
};

export async function getContentSlugs(): Promise<string[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getContentBySlug(
  slug: string
): Promise<{ frontmatter: ContentFrontmatter; body: string } | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as ContentFrontmatter,
      body: content.trim(),
    };
  } catch {
    return null;
  }
}

/** Convert heading text to a URL-safe id slug. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Parse headings (H2 + H3) from a markdown body and return them as
 * `{ id, label }` objects for `CaseStudySidebar`.
 *
 * Rules:
 * - H2s are included once (first occurrence); duplicates are skipped.
 * - H3s are always included (they provide granularity under duplicate H2s).
 * - IDs are globally unique: if an H3 text would collide with an existing id,
 *   a numeric suffix is appended.
 */
export function extractH2Sections(
  body: string
): { id: string; label: string }[] {
  const headingRe = /^(#{2,3})[ \t]+(.+)$/gm;
  const seenH2Ids = new Set<string>();
  const allIds = new Set<string>();
  const sections: { id: string; label: string }[] = [];
  let m: RegExpExecArray | null;

  while ((m = headingRe.exec(body)) !== null) {
    const level = m[1].length; // 2 or 3
    const text = m[2].trim();
    const baseId = slugifyHeading(text);
    if (!baseId) continue;

    if (level === 2) {
      // Skip duplicate H2s — their H3 children cover the content
      if (seenH2Ids.has(baseId)) continue;
      seenH2Ids.add(baseId);
      allIds.add(baseId);
      sections.push({ id: baseId, label: text.toUpperCase() });
    } else {
      // H3: ensure unique ID by appending a counter if needed
      let id = baseId;
      let n = 2;
      while (allIds.has(id)) {
        id = `${baseId}-${n++}`;
      }
      allIds.add(id);
      sections.push({ id, label: text.toUpperCase() });
    }
  }

  return sections;
}

/**
 * Extract team members and timeline from an unstructured preamble block —
 * the content between the H1 and the first `##` heading.
 * Format used by branding/architecture pages:
 *   Two Months, 2025
 *   Team:
 *   Clara Pakman
 *   Failenn Aselta
 *
 * Only strips the preamble from the body when it contains team/timeline data;
 * leaves prose intro paragraphs (eidolon-style) intact.
 */
export function extractPreambleMeta(body: string): {
  team: string[];
  timeline: string | null;
  cleanBody: string;
} {
  // Everything before the first ## heading
  const h2Idx = body.search(/^##\s/m);
  const preamble = h2Idx === -1 ? body : body.slice(0, h2Idx);
  const rest = h2Idx === -1 ? "" : body.slice(h2Idx);

  // Only strip the preamble when a "Team:" marker is present
  const hasTeam = /^team:?$/im.test(preamble);
  if (!hasTeam) {
    return { team: [], timeline: null, cleanBody: body };
  }

  // Parse out the structured fields
  const paragraphs = preamble.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  let timeline: string | null = null;
  const team: string[] = [];
  let inTeamBlock = false;

  for (const para of paragraphs) {
    if (para.startsWith("#")) continue;
    if (/^team:?$/i.test(para)) { inTeamBlock = true; continue; }
    if (inTeamBlock) { team.push(para.replace(/,\s*$/, "")); }
    else if (!timeline && /\d/.test(para) && para.length < 80) { timeline = para; }
  }

  return { team, timeline, cleanBody: rest };
}

/**
 * Extract Team members and Duration from the `## Quick Breakdown` section.
 * Returns arrays/strings suitable for the metadata grid.
 */
export function extractQuickBreakdownMeta(body: string): {
  team: string[];
  timeline: string | null;
} {
  // Find the Quick Breakdown section up to the next ## heading
  const sectionMatch = body.match(
    /##\s+Quick Breakdown\s*\n([\s\S]*?)(?=\n##\s|$)/i
  );
  if (!sectionMatch) return { team: [], timeline: null };
  const section = sectionMatch[1];

  // Extract ### Team block
  const teamMatch = section.match(
    /###\s+Team\s*\n([\s\S]*?)(?=\n###|\n##|$)/i
  );
  const team: string[] = teamMatch
    ? teamMatch[1]
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
    : [];

  // Extract ### Duration block (first non-empty line)
  const durationMatch = section.match(
    /###\s+Duration\s*\n([\s\S]*?)(?=\n###|\n##|$)/i
  );
  const timeline = durationMatch
    ? (durationMatch[1].split("\n").find((l) => l.trim()) ?? null)?.trim() ??
      null
    : null;

  return { team, timeline };
}

/** Slugs with a dedicated `app/<slug>/page.tsx` (not `app/[slug]`). */
const RESERVED_SLUGS = new Set([
  "work",
  "about",
  "contact",
  "branding",
  "product-design",
  "architecture",
  "buddy",
  // Product design
  "eidolon",
  "etrade",
  "nightterrors",
  "jahn",
  // Architecture
  "venice",
  "the-other",
  "tiny-home",
  "buddhist",
  "spiral",
  "villain-home",
  "mindful-path",
  // Branding
  "vagabond",
  "lighthouse",
  "cool",
  "bonemachine",
]);

/** Slugs rendered by `app/[slug]/page.tsx`. */
export async function getDynamicContentSlugs(): Promise<string[]> {
  const all = await getContentSlugs();
  return all.filter((s) => !RESERVED_SLUGS.has(s));
}

/**
 * Extract the text on the first non-empty line immediately after "## The Challenge".
 * Returns null if not found or if the section is empty.
 */
export function extractChallengeText(body: string): string | null {
  const match = body.match(/##\s+The Challenge\s*\n+((?!#)[^\n]+)/m);
  if (!match) return null;
  const text = match[1].trim();
  return text.length > 0 ? text : null;
}

/**
 * Remove named H2 sections (and all their content up to the next ##) from body.
 * Handles both `## Name` markdown headings and standalone plain-text paragraphs
 * matching the name (for legacy scraped content).
 */
export function stripH2SectionNames(body: string, names: string[]): string {
  let result = body;
  for (const name of names) {
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Match ## Heading and everything until the next ## or end
    result = result.replace(
      new RegExp(`(?:^|\n)##\\s+${esc}\\s*\n[\\s\\S]*?(?=\n##\\s|$)`, "g"),
      "\n"
    );
  }
  return result.replace(/^\n+/, "");
}

/**
 * Extract a trailing Bibliography section from the body.
 * Handles both `## Bibliography` headings and a standalone "Bibliography" paragraph.
 * Returns the bibliography MDX string and the body with the section removed.
 */
export function extractBibSection(
  body: string
): { cleanBody: string; bibMdx: string | null } {
  // Try ## Bibliography heading
  const h2Match = body.match(/\n##\s+Bibliography\s*\n([\s\S]*)$/i);
  if (h2Match) {
    const bibMdx = h2Match[1].trim();
    const cleanBody = body.slice(0, body.length - h2Match[0].length);
    return { cleanBody, bibMdx: bibMdx.length > 0 ? bibMdx : null };
  }
  // Try standalone "Bibliography" paragraph (legacy scraped format)
  const paraMatch = body.match(/\nBibliography\s*\n([\s\S]*)$/i);
  if (paraMatch) {
    const bibMdx = paraMatch[1].trim();
    const cleanBody = body.slice(0, body.length - paraMatch[0].length);
    return { cleanBody, bibMdx: bibMdx.length > 0 ? bibMdx : null };
  }
  return { cleanBody: body, bibMdx: null };
}

const NON_PROJECT_SLUGS = new Set(["about", "contact", "work"]);

export async function getProjectSummaries(): Promise<{ slug: string; title: string }[]> {
  const slugs = (await getContentSlugs()).filter((s) => !NON_PROJECT_SLUGS.has(s));
  const rows = await Promise.all(
    slugs.map(async (slug) => {
      const page = await getContentBySlug(slug);
      const title = page?.frontmatter.title?.trim() || slug.replace(/-/g, " ");
      return { slug, title };
    })
  );
  rows.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" }));
  return rows;
}
