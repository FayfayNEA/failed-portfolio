import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "vagabond";
const CATEGORY = "branding";
const TITLE = "Vagabond Radio";
const HERO = "https://framerusercontent.com/images/rKvch1GkMbOWLcefYnDSdybGUq4.png?width=3952&height=1692";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Vagabond Radio",
};

export default function VagabondPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "Vagabond Radio cover", layout: "tall" }}
      heroTallSize="smaller"
      challengeSummary="Understand how to tell another person's story and ask invigorating questions. "
      meta={{ timeline: "Six Months, 2025", roles: ["Designer"], team: ["Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              Vagabond Radio is an interview series exploring the trajectories behind people&apos;s
              work and creative lives. Through thoughtful, in-depth conversations, it uncovers the
              motivations, turning points, and values that drive people forward, building a living
              archive of lived experience.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <ProjectGalleryRow
              images={[
                "https://framerusercontent.com/images/fI9CDeKISrlhlRAQw9QPPzwLvM.png?width=728&height=1288",
                "https://framerusercontent.com/images/CKyPeXgE1KWSMGghYjEueA36yjI.png?width=607&height=1077",
                "https://framerusercontent.com/images/4KwjxKgcf4T59GeXV6lJtHsSC1A.png?width=606&height=1078",
                "https://framerusercontent.com/images/dIhC2N28USzlQ0r15MSmTsW9zt4.png?width=608&height=1078",
                "https://framerusercontent.com/images/JiZg7XxToQipMYfUuQZqC557k4.png?width=728&height=1292",
                "https://framerusercontent.com/images/VgJXppiWbJrA7rqDXi32rBOZXw.png ",
              ]}
              theme="orange"
              glassVariant="liquid"
              frameSize="phone"
              slideImageFit="contain"
              slidePadding="tight"
              navSize="sm"
              dotStyle="track"
              className="mx-auto my-10 w-full max-w-[min(800px,calc(100vw-0.75rem))]"
            />
          ),
        },
      ]}
    />
  );
}
