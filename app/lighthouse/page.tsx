import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";

const SLUG = "lighthouse";
const CATEGORY = "branding";

const TITLE = "Peck Ledge Lighthouse";
const HERO = "https://framerusercontent.com/images/CAdSAOIPp6DwaYBc7lHBWEZBNk0.png?width=3102&height=2070";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/CtEx1xGyfp8wk9rVI2zSrbzMw8w.png?width=1616&height=1544",
  "https://framerusercontent.com/images/KLgsYRx8iaJXgTJF53C5qZFP2E.png?width=2976&height=2052",
  "https://framerusercontent.com/images/ftMxLHqiRfRqMdFJSHgPtLEGKjw.png?width=2624&height=648",
  "https://framerusercontent.com/images/hFYUXQQlVB7LO0Oi4tqVNq8vc.png?width=3120&height=1440",
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Peck Ledge Lighthouse",
};

export default function LighthousePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "Peck Ledge Lighthouse cover" }}
      challengeSummary="Bring a dilapidated lighthouse to life."
      meta={{
        timeline: "Three Days, 2023",
        roles: ["Designer"],
        team: ["Fredrick Hoag", "Failenn Aselta"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              A old lighthouse off of Westport beach needed a new vibe for cheap. So, my boss tasked me with bringing it to life.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <div className="mx-auto flex w-full max-w-[min(720px,94vw)] flex-col items-center gap-10 md:gap-12">
              {GALLERY_IMAGES.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`Peck Ledge Lighthouse — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
                  className="h-auto w-full max-h-[min(72vh,640px)] object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40"
                />
              ))}
            </div>
          ),
        },
      ]}
    />
  );
}
