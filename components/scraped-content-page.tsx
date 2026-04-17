"use server";

import { ContentMdx } from "@/components/content-mdx";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import type { SidebarSection } from "@/components/case-study-sidebar";
import { buildProjectBreadcrumb, CaseBreadcrumb } from "@/components/case-breadcrumb";
import { AutoPlayVideo } from "@/components/autoplay-video";
import { ProjectSurface } from "@/components/project-surface";
import { CaseChallengeDisclosure } from "@/components/case-challenge-disclosure";
import { cn } from "@/lib/cn";

type ScrapedContentPageProps = {
  title: string;
  slug: string;
  body: string;
  roles?: string[];
  tools?: string[];
  team?: string[];
  timeline?: string;
  sections?: SidebarSection[];
  category?: string;
  heroImage?: string;
  challengeText?: string;
  bibliography?: string;
};

type MetaCell = { label: string; value: string };

function stripLeadingH1(body: string): string {
  return body.replace(/^#[ \t]+[^\n]*\n?/, "").trimStart();
}

export async function ScrapedContentPage({
  title,
  slug,
  body,
  roles = [],
  tools = [],
  team = [],
  timeline,
  sections = [],
  category,
  heroImage,
  challengeText,
  bibliography,
}: ScrapedContentPageProps) {
  const cleanBody = stripLeadingH1(body);
  const breadcrumbSegments = buildProjectBreadcrumb(slug, category);
  const isHeroVideo = typeof heroImage === "string" && /\.(mp4|webm)(\?.*)?$/i.test(heroImage);

  // Build metadata cells in buddy order: Timeline → Role → Team → Tools
  const metaCells: MetaCell[] = [];
  if (timeline) metaCells.push({ label: "Timeline", value: timeline });
  if (roles.length > 0) metaCells.push({ label: "Role", value: roles.join("\n") });
  if (team.length > 0) metaCells.push({ label: "Team", value: team.join("\n") });
  if (tools.length > 0) metaCells.push({ label: "Tools", value: tools.join("\n") });

  return (
    <ProjectSurface>
      <CaseStudySidebar
        projectName={title}
        sections={sections}
        breadcrumb={breadcrumbSegments}
        hideRailAtMaxWidthPx={1000}
      />

      <main
        className={cn(
          "pb-40 font-sans antialiased",
          // narrow / mobile
          "max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:min-w-0",
          "max-[1000px]:max-w-[min(900px,96vw)] max-[1000px]:px-3",
          "max-[1000px]:pt-[calc(1.5rem+50px)] max-[1000px]:md:pt-[calc(2rem+50px)]",
          // wide / desktop — identical offsets to /buddy
          "min-[1001px]:ml-[calc(30px+max(22rem,12.5vw))] min-[1001px]:min-w-0 min-[1001px]:max-w-none",
          "min-[1001px]:pt-[50px]",
          "min-[1001px]:pl-[max(0.75rem,calc((100vw-min(900px,96vw))/2-30px-max(22rem,12.5vw)))]",
          "min-[1001px]:pr-12"
        )}
      >
        <div className="min-[1001px]:hidden">
          <CaseBreadcrumb segments={breadcrumbSegments} />
        </div>

        {/* Title — light weight matching the rest of the site */}
        <h1 className="mb-8 mt-0 font-mono text-[clamp(2.75rem,4.8vw,4rem)] font-light leading-[1.02] tracking-[-0.04em] text-zinc-950">
          {title}
        </h1>

        {/* Hero — image full width; video smaller in a white frame */}
        {heroImage && (
          <div
            className={cn(
              "mb-14 w-full",
              isHeroVideo
                ? "flex justify-center"
                : "max-w-[min(1280px,calc(100vw-1.5rem))]"
            )}
          >
            {isHeroVideo ? (
              <div className="w-full max-w-[min(520px,88vw)] sm:max-w-[min(580px,86vw)] md:max-w-[min(640px,84vw)]">
                <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-zinc-200/80 bg-white">
                  <div className="relative flex justify-center p-4 sm:p-5 md:p-6">
                    <AutoPlayVideo
                      src={heroImage}
                      controls
                      className="h-auto w-full max-h-[min(92dvh,960px)] rounded-lg bg-white object-contain shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/60"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage}
                alt={title}
                className="aspect-video h-auto w-full rounded-2xl object-cover shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
              />
            )}
          </div>
        )}

        {/* Metadata grid — Timeline / Role / Team / Tools (buddy style) */}
        {metaCells.length > 0 && (
          <>
            <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-10">
              {metaCells.map(({ label, value }) => (
                <div key={label}>
                  <p className="mb-2 font-sans text-[10px] font-normal uppercase tracking-[0.16em] text-[#A0A0A0]">
                    {label}
                  </p>
                  <p className="whitespace-pre-line text-[0.8125rem] font-normal leading-snug text-zinc-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mb-14 h-px w-full bg-zinc-200/50" />
          </>
        )}

        {/* Challenge disclosure */}
        {challengeText && (
          <>
            <section id="the-challenge" className="scroll-mt-24 mb-10">
              <CaseChallengeDisclosure summary={challengeText} />
            </section>
            <div className="mb-14 h-px w-full bg-zinc-200/50" />
          </>
        )}

        {/* MDX body */}
        <article className="max-w-[min(52rem,100%)]">
          <ContentMdx source={cleanBody} variant="paper" />
        </article>

        {/* Bibliography card — buddy style */}
        {bibliography && (
          <div className="mt-14 max-w-[min(52rem,100%)]">
            <div className="rounded-2xl bg-zinc-100/60 p-6 ring-1 ring-black/[0.05]">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                Bibliography
              </p>
              <div className="[&_p]:mb-3 [&_p]:text-[0.8rem] [&_p]:leading-relaxed [&_p]:text-zinc-500 [&_a]:text-violet-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-violet-900">
                <ContentMdx source={bibliography} variant="paper" />
              </div>
            </div>
          </div>
        )}
      </main>
    </ProjectSurface>
  );
}
