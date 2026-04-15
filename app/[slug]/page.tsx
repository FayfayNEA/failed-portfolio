import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrapedContentPage } from "@/components/scraped-content-page";
import {
  getContentBySlug,
  getDynamicContentSlugs,
  extractH2Sections,
  extractChallengeText,
  extractBibSection,
  stripH2SectionNames,
  extractQuickBreakdownMeta,
  extractPreambleMeta,
} from "@/lib/content";
import { getCategoryForSlug, getCoverForSlug } from "@/lib/project-categories";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getDynamicContentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug(slug);
  if (!page) return { title: slug };
  const title = page.frontmatter.title ?? slug;
  return { title, description: `Failenn Aselta — ${title}` };
}

export default async function ScrapedSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = await getContentBySlug(slug);
  if (!page) notFound();

  const title = page.frontmatter.title ?? slug;
  const challengeText = extractChallengeText(page.body) ?? undefined;
  const category = getCategoryForSlug(slug);
  const heroImage = getCoverForSlug(slug) ?? undefined;

  // Extract meta from two formats:
  // 1. "## Quick Breakdown / ### Team / ### Duration" (product-design MDX)
  // 2. Unstructured preamble "Two Months, 2025 / Team: / Name" (branding/arch MDX)
  const { team: qbTeam, timeline: qbTimeline } = extractQuickBreakdownMeta(page.body);
  const { team: pTeam, timeline: pTimeline, cleanBody: noPreambleBody } =
    extractPreambleMeta(page.body);

  // Quick Breakdown takes priority; fall back to preamble
  const team = qbTeam.length > 0 ? qbTeam : pTeam;
  const timeline = qbTimeline ?? pTimeline ?? undefined;

  // Strip sections already rendered by the layout, then extract bibliography.
  // Use noPreambleBody so preamble team/timeline text is removed from the article.
  const stripped = stripH2SectionNames(noPreambleBody, ["The Challenge", "Quick Breakdown"]);
  const { cleanBody, bibMdx } = extractBibSection(stripped);
  const sections = extractH2Sections(cleanBody);

  return (
    <ScrapedContentPage
      title={title}
      slug={slug}
      body={cleanBody}
      roles={page.frontmatter.roles}
      tools={page.frontmatter.tools}
      team={team.length > 0 ? team : undefined}
      timeline={timeline}
      sections={sections}
      category={category}
      heroImage={heroImage}
      challengeText={challengeText}
      bibliography={bibMdx ?? undefined}
    />
  );
}
