import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "cool";
const CATEGORY = "branding";

const TITLE = "COOL.";
const HERO = "https://framerusercontent.com/images/qd8g1zZZPiPsVtwm0mF7FUgHib4.png?width=1366&height=768";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — COOL.",
};

export default function CoolPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "COOL. cover" }}
      challengeSummary="Allow people to connect with others on first impressions . "
      meta={{ timeline: "Two Months, 2025", team: ["Clara Pakman", "Failenn Aselta"], roles: ["Designer"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <>
              <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
                Clothing often operates as a quiet declaration of values, serving as an unspoken
                introduction before conversation even begins. Recognizing this subtle social
                language, Clara and I set out to make that implicit system more intentional and
                visible. Our project proposes a product that allows users to clearly signal their
                ethics, interests, and affinities.
              </p>
            </>
          ),
        },
        {
          id: "shirt-mockups",
          label: "SHIRT MOCKUPS",
          content: (
            <ProjectGalleryRow
              images={[
                "https://framerusercontent.com/images/2xDd3TZWDXzQdqSaKCqDLxDaWU.png?width=2432&height=1367",
                "https://framerusercontent.com/images/ZmkYVZIxMa0XuY6NlF7x6JrPF74.png?width=2880&height=1920",
              ]}
              theme="white"
              glassVariant="liquid"
              frameSize="medium"
              slideImageFit="contain"
              slidePadding="tight"
              className="mx-auto my-0 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
            />
          ),
        },
        {
          id: "shirts",
          label: "SHIRTS",
          content: (
            <ProjectGalleryRow
              images={[
                "https://framerusercontent.com/images/HtH0nJqsKJvBzog5avaIwbPHV0.png?width=959&height=1889",
                "https://framerusercontent.com/images/UaahWXinvyGRh5Riyuk4Op9ey6w.png?width=956&height=1862",
                "https://framerusercontent.com/images/B8OG5qO1sAQGPKCoVqRmlgBD1w0.png?width=956&height=1897",
                "https://framerusercontent.com/images/NLt8TrLfelbbfhvSIqj8rCHNRfQ.png?width=657&height=665",
                "https://framerusercontent.com/images/lIxsyfvexKimk9GUFbwyFweQ60.png",
                "/cool/Gemini_Generated_Image_xnytg0xnytg0xnyt (1).png",
                "/cool/Gemini_Generated_Image_xq5iiwxq5iiwxq5i.png",
              ]}
              theme="white"
              glassVariant="liquid"
              frameSize="medium"
              slideImageFit="contain"
              slidePadding="tight"
              className="mx-auto my-0 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
            />
          ),
        },
      ]}
    />
  );
}
