"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  getRelatedProjects,
  type ProjectCategory,
  type ProjectEntry,
} from "@/lib/projects-registry";

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "product-design": "product-design",
  branding: "branding",
  architecture: "architecture",
};

const CATEGORY_HREFS: Record<ProjectCategory, string> = {
  "product-design": "/product-design",
  branding: "/branding",
  architecture: "/architecture",
};

function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 320, damping: 32, delay: index * 0.05 }}
    >
      <Link
        href={project.href}
        className="group block overflow-hidden rounded-2xl border border-zinc-200/60 bg-transparent transition-all duration-200 hover:border-zinc-300/80 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"
        aria-label={project.title}
      >
        {/* Cover image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        {/* Card body */}
        <div className="px-4 py-3.5">
          <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
            {project.year}
          </p>
          <p className="mb-1 text-[0.88rem] font-medium leading-snug text-zinc-900 group-hover:text-zinc-700 transition-colors">
            {project.title}
          </p>
          <p className="text-[0.72rem] leading-relaxed text-zinc-500">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryProjectsFooter({
  category,
  currentSlug,
}: {
  category: string;
  currentSlug: string;
}) {
  const cat = category as ProjectCategory;
  const related = getRelatedProjects(cat, currentSlug);
  if (!related.length) return null;

  const categoryLabel = CATEGORY_LABELS[cat] ?? category;
  const categoryHref = CATEGORY_HREFS[cat] ?? `/${category}`;

  return (
    <div className="mt-19 border-t border-zinc-200/50 pt-14 pb-4">
      {/* Header row */}
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
          more in {categoryLabel}
        </p>
        <Link
          href={categoryHref}
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 underline underline-offset-2 transition-colors hover:text-zinc-600"
        >
          view all →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {related.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
