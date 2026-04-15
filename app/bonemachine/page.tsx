import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "bonemachine";
const CATEGORY = "branding";

const TITLE = "Bonemachine";
const HERO = "/bonemachine/Screenshot 2026-01-28 173317.png";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — BoneMachine",
};

export default function BoneMachinePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "BoneMachine cover" }}
      challengeSummary="Translate a band’s energy into a bold wearable identity — then produce it by hand at scale."
      meta={{
        timeline: "One Week, 2020",
        roles: ["Production Lead"],
        team: ["Sam Worley", "Failenn Aselta"],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              A local band in Blacksburg approached us to design a limited-run T-shirt for their
              live shows. Sam developed the graphic identity. I led the production process,
              hand-printing approximately 100 shirts to ensure quality and character in each piece.
              The entire run sold out quickly at performances.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <ProjectGalleryRow
              images={[
                "/bonemachine/Gemini_Generated_Image_daxxcpdaxxcpdaxx.png",
                "https://framerusercontent.com/images/yyRq4Hj5FdIPVRPoSvE4Eohw3k.png?width=1568&height=1486",
                "https://framerusercontent.com/images/z9IBew2GBqf459NGnlu2uDkSmEU.png?width=1220&height=1744",
                "https://framerusercontent.com/images/VR9T1GIaFO1Y3aKBBfFMSIphQ.png?width=1452&height=1716",
              ]}
              theme="white"
              glassVariant="liquid"
              frameSize="phone"
              slideImageFit="contain"
              slidePadding="tight"
              className="mx-auto my-10 w-full max-w-[min(800px,calc(100vw-0.75rem))]"
            />
          ),
        },
      ]}
    />
  );
}
