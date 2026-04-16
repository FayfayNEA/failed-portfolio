import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";

const SLUG = "spiral";
const CATEGORY = "branding";

const TITLE = "The Spiral";
const HERO = "https://framerusercontent.com/images/DEKAt5ypvDK9UvA3LPNiXGUeV0.png?width=800&height=1000";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/uIUiTnZMGSz8vjTv9NDGGocSn9s.png?width=1952&height=1664",
  "https://framerusercontent.com/images/dfTWd55rsMNu0UKl7RMmPIj0Us.png?width=3892&height=3628",
  "https://framerusercontent.com/images/K9MBtJIPEct0YJsC0FaTMS2TX6s.png?width=3464&height=3856",
  "https://framerusercontent.com/images/VsgeJEkNs3cP6G9NfDIscxa9kk.png?width=2296&height=1028",
  "https://framerusercontent.com/images/jp6DzCsh5xdsn4Xc49sbksE9lA.png?width=1236&height=656",
  "https://framerusercontent.com/images/S8KXuZAyZAWnNdbT7727GZ7Zs.png?width=748&height=652",
  "https://framerusercontent.com/images/kIHGsUUjSnjpMGdqhj9FUTid9OY.png?width=884&height=1060",
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — The Spiral",
};

export default function SpiralPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "The Spiral cover", layout: "tall" }}
      heroTallSize="smaller"
      heroTallFrame="tall"
      challengeSummary="Create runway suspense: reveal each look through distortion, then snap to clarity."
      meta={{
        timeline: "Three Days, 2025",
        roles: ["Designer"],
        team: ["Signe Storhaug", "Failenn Aselta"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              The designs of Schiaparelli are defined by a surreal, otherworldly energy, yet their
              runway environments often lack the same theatrical anticipation. The Spiral addresses
              this gap by gradually revealing each look through distorted lenses, creating suspense
              and fragmented perception. In the final moment, distortion falls away and the
              garment appears in its full, fortified beauty, aligning the scenography with the
              house&apos;s surreal vision.
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
                  alt={`The Spiral — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
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
