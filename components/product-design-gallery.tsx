"use client";

import { useRef, useState } from "react";
import { CaseBreadcrumb } from "@/components/case-breadcrumb";
import { CategoryGallery } from "@/components/category-gallery";
import type { CategoryGalleryHandle, GalleryInitialLayout, GalleryProject } from "@/components/category-gallery";

const PILL_BUTTON =
  "inline-flex items-center rounded-full border border-zinc-300/70 bg-white/70 px-3.5 py-1.5 font-mono text-[9px] lowercase tracking-[0.16em] text-zinc-500 backdrop-blur-sm transition-colors hover:border-zinc-400 hover:bg-white hover:text-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

export function ProductDesignGallery({
  projects,
  storageKey,
  initialLayout,
}: {
  projects: GalleryProject[];
  storageKey: string;
  initialLayout?: GalleryInitialLayout;
}) {
  const galleryRef = useRef<CategoryGalleryHandle>(null);
  const [playgroundVisible, setPlaygroundVisible] = useState(false);
  const hasPlayground = projects.some((p) => p.archived);

  return (
    <>
      <div
        id="product-design"
        className="scroll-mt-[5.5rem] shrink-0 border-b border-zinc-200/50 px-8 py-3 md:scroll-mt-[6.5rem] md:pl-[95px] md:pr-12"
      >
        <div className="flex items-center justify-between gap-4">
          <CaseBreadcrumb
            segments={[
              { label: "work", href: "/#retro-computer" },
              { label: "product-design" },
            ]}
          />
          <div className="mb-5 flex shrink-0 flex-col items-center gap-1.5">
            <div className="flex items-center gap-2.5">
              <button type="button" onClick={() => galleryRef.current?.resetLayout()} className={PILL_BUTTON}>
                reset layout
              </button>
              {hasPlayground && (
                <button type="button" onClick={() => galleryRef.current?.togglePlayground()} className={PILL_BUTTON}>
                  {playgroundVisible ? "hide all" : "show all"}
                </button>
              )}
            </div>
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-400">
              drag to rearrange and resize
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-16">
        <CategoryGallery
          ref={galleryRef}
          projects={projects}
          storageKey={storageKey}
          initialLayout={initialLayout}
          onPlaygroundChange={setPlaygroundVisible}
        />
      </div>
    </>
  );
}
