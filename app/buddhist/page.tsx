import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";

const SLUG = "buddhist";
const CATEGORY = "architecture";

const TITLE = "DNKL Pavilion";
const HERO = "https://framerusercontent.com/images/g9lxBwTvLeVzbGb9MZYAGzdiJgY.jpg?width=5400&height=3600";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/GLbm6aFHm5TEzqzxLAglBoBVEA.jpg?width=5400&height=3600",
  "https://framerusercontent.com/images/8ozYTUPUuDjUGbLJLnOqBFum5dE.png?width=3454&height=1452",
  "https://framerusercontent.com/images/WSN88x86Q9IarwxJgPofzls8.png?width=3620&height=1700",
  "https://framerusercontent.com/images/JW6nmAVmN1gNfa4rNRpELY66ws.jpeg?width=5712&height=4284",
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — DNKL Pavilion",
};

export default function BuddhistPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "DNKL Pavilion cover", layout: "tall" }}
      challengeSummary="Design a backyard pavilion that shares a gutter line and stays under $10k."
      meta={{ timeline: "Six Months, 2025", roles: ["Designer"], team: ["Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              The client called for a pavilion in the backyard that would share a gutter with the
              existing overhang while keeping the budget under $10,000. The result is a simply
              layered structure that, through scripting and structural analysis, allowed us to
              reduce original material costs by 40%. Elegant yet functional. It is currently in
              permitting, and construction will begin once the ground thaws.
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
                  alt={`DNKL Pavilion — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
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
