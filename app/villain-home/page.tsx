import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";

const SLUG = "villain-home";
const CATEGORY = "architecture";

const TITLE = "Villain Home";
const HERO = "https://framerusercontent.com/images/z2Le2qNS73xhaqzUlkqG2jC8.png?width=2570&height=1708";
const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/ombD0ZMEycPMTyVAZBoDRiIhbRU.png?width=2740&height=1946",
  "https://framerusercontent.com/images/rHqExIb1Y8dXpVWfDgGjcr4bR0o.png?width=6048&height=4024",
  "https://framerusercontent.com/images/Bz2iWDyyeth4AoTy4oaFrRlXfw.png?width=2748&height=1833",
  "https://framerusercontent.com/images/cMNFoQ14bslLAlfB1JqSkgyfqU.png?width=1981&height=1343",
  "https://framerusercontent.com/images/fHD494WTykGfSFDssdpkDznXE.png?width=2073&height=1768",
  "https://framerusercontent.com/images/bilEhmPbHsds0MR1sYfoFfFZokU.png?width=3089&height=1758",
  "https://framerusercontent.com/images/HNOn42gsTAP6yWGh2hbVt4ymww.png?width=3090&height=1762",
  "https://framerusercontent.com/images/PoSENHVpPukuSb3k5Y4i50Irqys.png?width=4802&height=3332",
  "https://framerusercontent.com/images/rqV4gx2Oi2wfk7Y9mGYNCZ5o.png?width=3024&height=4032",
  "/villainhome/siteplanforgroupproject.png",
] as const;


export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Villain Home",
};

export default function VillainHomePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "Villain Home cover", layout: "tall" }}
      challengeSummary="To create a villainous lair for the DC villain,  Poison Ivy."
      meta={{ timeline: "One Year, 2023", roles: ["Designer"], team: ["Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              Villain Home is a house that becomes the villain itself. The home absorbs excess CO2
              from the environment, which the plants inside then consume. However, if humans attempt
              to enter the space without proper suits, they die. The form developed over time from
              a simple elevated cube, unfolding into multiple planar intersections with large
              rectangular columns projecting from the top.
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
                  alt={`Villain Home — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
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
