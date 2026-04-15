import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "mindful-path";
const CATEGORY = "architecture";

const TITLE = "Mindful Path";
const HERO = "https://framerusercontent.com/images/KB2soWzjj8zMRIVagSmKF4Ei38.png";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/CO5CFV63T9ovG2mqEQIDopHkw.png?width=3368&height=1052",
  "https://framerusercontent.com/images/NIXGzv4URwhty6u1arg3zO9FgM.jpg?width=4943&height=3508",
  "https://framerusercontent.com/images/lZF2iQ42trlPk3kZZ2sQ9ulgx1Q.png?width=3183&height=849",
  "https://framerusercontent.com/images/hahxlIKZHvKyHgVjRCJUlp0ag6Y.png?width=3280&height=4096",
  "https://framerusercontent.com/images/pFdXraGoUAUojdei4FSRYuW7tG8.jpg?width=2458&height=1757",
  "https://framerusercontent.com/images/NtiFoRsiXEqJT55POpdZHprsw.png?width=743&height=1156",
  "https://framerusercontent.com/images/70YiiqFQxU7A84AAIgG1rFk0XE.png?width=986&height=1176",
  "https://framerusercontent.com/images/j4ofA4MDjOLOJopQkxenbew2U4.jpg?width=4967&height=7193",
  "https://framerusercontent.com/images/DDpaFA5Pc0f4GxYdgCNbz8hm08.png?width=831&height=1164",
  "https://framerusercontent.com/images/V9IM6xWjXeqYJswszYq6lxnOdys.png?width=952&height=1159",
  "https://framerusercontent.com/images/gCYjY76Ayl90sjO0SCCpCxmaIW4.png?width=2310&height=1279",
  "https://framerusercontent.com/images/uHXKogOZtyFaUV5lc26P2HfQgBc.png?width=1889&height=2488",
  "https://framerusercontent.com/images/Hpsm27MC4oLdWd6Ey0XTNd1aQ.jpg?width=2412&height=1711",
  "https://framerusercontent.com/images/zQHzDEwrF40HUAC4HyXWYMGC9qY.jpg?width=9934&height=7016",
  "https://framerusercontent.com/images/pZKkUasbnnLshR9IKQnX5smhBgw.png?width=3648&height=2432",
  "https://framerusercontent.com/images/kN6S9ClGvPApBJTp8hPHwwH1v3U.jpg?width=3450&height=1916",
  "https://framerusercontent.com/images/NNR84pgKw3A4cvUi9J6ci7Jww1s.jpg?width=2862&height=2102",
  "https://framerusercontent.com/images/7fsHxI1tkyQ2Bd4fNdH8q7k4WQ.jpg?width=8822&height=4320",
  "https://framerusercontent.com/images/mcH4Tf2vazFWT7UZvS6MOvcl9UQ.jpg?width=4963&height=3508",
  "https://framerusercontent.com/images/VZqPc4cdqvpawGmjSOAch9V0Lo.jpg?width=1200&height=1600",
] as const;

const IMG =
  "h-auto w-full object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40";
const IMG_PAIR =
  "h-auto w-0 flex-1 object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Mindful Path",
};

export default function MindfulPathPage() {
  const galleryCarouselImages = [
    GALLERY_IMAGES[6],
    GALLERY_IMAGES[10],
    GALLERY_IMAGES[11],
    ...GALLERY_IMAGES.slice(14),
  ] as unknown as string[];

  const firstGalleryCarouselImage = galleryCarouselImages[0];
  const galleryCarouselTail = galleryCarouselImages.slice(-3);
  const galleryCarouselSecond = galleryCarouselImages.slice(1, -3);
  const galleryCarouselSecondTail = galleryCarouselSecond.slice(-3);
  const galleryCarouselSecondHead = galleryCarouselSecond.slice(0, -3);

  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{
        kind: "image",
        src: GALLERY_IMAGES[3],
        alt: "Mindful Path",
        layout: "tall",
      }}
      heroTallSize="smaller"
      challengeSummary="Design an algae-driven biofabrication building that binds ecology, production, and restoration."
      meta={{ timeline: "Four Months, 2024", roles: ["Designer"], team: ["Aurora Vernocchi", "Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              The building weaves together architecture, ecology, and textile production through
              the quiet labor of algae. Set within a former quarry, it draws strength from the
              site&apos;s altered ground. Cultivation systems are embedded within the building&apos;s
              elongated roofscape and the surrounding ponds, allowing algae to be grown and
              harvested in a continuous cycle. Inside, biofabrication laboratories transform this
              living material into sustainable textiles, producing biodegradable yarns and dyes.
              The project reclaims a post-industrial landscape and returns it to production,
              generating clothing through a closed loop that binds environmental restoration to
              circular design.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <div className="mx-auto flex w-full max-w-[min(720px,94vw)] flex-col items-center gap-10 md:gap-12">
              {/* Wide panoramic opener */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[0]}
                alt="Mindful Path — visual 1"
                className={`${IMG} max-h-[min(85vh,820px)]`}
              />

              {/* Landscape photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[1]}
                alt="Mindful Path — visual 2"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[4]}
                alt="Mindful Path — visual 3"
                className={`${IMG} max-h-[min(85vh,820px)]`}
              />

              {/* Second panoramic */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[2]}
                alt="Mindful Path — visual 4"
                className={`${IMG} max-h-[min(85vh,820px)]`}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[12]}
                alt="Mindful Path — visual 5"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />

              {/* Moved from carousel (was the 4th slide) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[13]}
                alt="Mindful Path — visual 5b"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />

              

              {/* Tall portrait + first carousel image (now its own carousel) */}
              <ProjectGalleryRow
                images={[GALLERY_IMAGES[7], firstGalleryCarouselImage,GALLERY_IMAGES[5], GALLERY_IMAGES[8], GALLERY_IMAGES[9]]}
                theme="lime"
                frameSize="default"
                slideImageFit="contain"
                glassVariant="liquid"
                slidePadding="tight"
                className="my-0 w-full max-w-[min(1080px,calc(100vw-1.5rem))]"
              />

              {/* Last three images from carousel 2 (moved here) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryCarouselSecondTail[0]}
                alt="Mindful Path — gallery detail"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryCarouselSecondTail[1]}
                alt="Mindful Path — gallery detail"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryCarouselSecondTail[2]}
                alt="Mindful Path — gallery detail"
                className={`${IMG} max-h-[min(72vh,640px)]`}
              />

              {/* Remaining images in a larger carousel */}
              <ProjectGalleryRow
                images={galleryCarouselSecondHead}
                theme="lime"
                frameSize="default"
                glassVariant="liquid"
                slideImageFit="contain"
                slidePadding="tight"
                className="my-0 w-full max-w-[min(1080px,calc(100vw-1.5rem))]"
              />

              {/* Last three images in their own carousel */}
              <ProjectGalleryRow
                images={galleryCarouselTail}
                theme="lime"
                glassVariant="liquid"
                frameSize="default"
                slideImageFit="contain"
                slidePadding="tight"
                className="my-0 w-full max-w-[min(1080px,calc(100vw-1.5rem))]"
              />
            </div>
          ),
        },
      ]}
    />
  );
}
