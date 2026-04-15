import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "venice";
const CATEGORY = "architecture";

const TITLE = "Venice Pavilion";
const HERO = "https://framerusercontent.com/images/HL1ELAt4La6b4g71kQ2glWHA7Yk.png?width=2725&height=2044";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/wuWeZfIxQURzJRtoD3S0oe3KXs.png?width=1524&height=2009",
  "https://framerusercontent.com/images/9TXSm0sxNIgBkcIYRp0UZr9IkNs.png?width=1248&height=1676",
  "https://framerusercontent.com/images/30vQFgESXyYL7fIVSlvdaZqXoQ.jpg?width=500&height=625",
  "https://framerusercontent.com/images/2m36hGjZUBR1Xkxb6pKba1pvk.jpg?width=417&height=625",
  "https://framerusercontent.com/images/i0fqBixXsW21hgaOXimpD1DmMEU.jpg?width=500&height=625",
  "https://framerusercontent.com/images/yYYxkkhSJK203wvsSo6Gj3vRNXs.png?width=1212&height=911",
  "https://framerusercontent.com/images/QO9L0QfiXfo6OfwF8iTKHEDBSk.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/KUvXe2t7WC1fjz8aTeH37kvaeU.png?width=1849&height=1665",
  "https://framerusercontent.com/images/v7ODyB5oRBkB3HomuXwTzLH3YC0.png?width=933&height=1660",
  "https://framerusercontent.com/images/G8vhHPRBAmFdhbCHHhQUBxXMlUI.png?width=1247&height=1660",
  "https://framerusercontent.com/images/kdwPiLZrbKyq8N5KMcLHGlPBsQ.jpg?width=3512&height=3163",
  "https://framerusercontent.com/images/T3NwjSG9IbxzX7s3cIbONBto12A.png?width=1766&height=1358",
  "https://framerusercontent.com/images/kZFiLZgwdwOtAqTdr7L746Bm0.png?width=1879&height=1384",
  "https://framerusercontent.com/images/kDeoPpsLMs0QoD5Ja0ZLXZ9RHc.jpg?width=2040&height=1262",
  "https://framerusercontent.com/images/AA9HdZd5Q1KqBhB00bBVFm2KsRY.png?width=3024&height=3291",
  "https://framerusercontent.com/images/bZShwxoPCaNLk2qZfcS7W8tpL7Y.png?width=1361&height=1360",
  "https://framerusercontent.com/images/x6ZUfslMWWwkOkhNBAgv0vzpoyI.png?width=2086&height=1274",
  "https://framerusercontent.com/images/DJMms9SpOCn3Fu3JWAdOQTG9v0Y.png?width=2179&height=1386",
  "https://framerusercontent.com/images/q37V0AqzpHMsUeMQxZCy51Me4M.png?width=2116&height=1331",
  "https://framerusercontent.com/images/gOBbPVwdsnV3PK99HnCqbLGh6wU.png?width=1621&height=997",
  "https://framerusercontent.com/images/Z5mOLYaIU6lW9duJoksEAh5Tno.png?width=2847&height=1593",
  "https://framerusercontent.com/images/YHIT8QVXwM7LKfhJlEtCSR6y4w.png?width=2809&height=1569",
  "https://framerusercontent.com/images/NGmzAzEdjyzuQgXTDgvp9TiOY.png?width=1330&height=1879",
  "https://framerusercontent.com/images/DSZT5LnjcHZ0wt2tukdOksAIrxg.png?width=1333&height=1715",
  "https://framerusercontent.com/images/gP72wDZVGEvLja7h7ztPinXZOTU.png?width=1514&height=2008",
  "https://framerusercontent.com/images/Dl3t71qQn6e2jsAHH1qX8P4wV4.png?width=1263&height=1681",
  "https://framerusercontent.com/images/4qK1yO89aXI4cnJ1H4dXY5qLMg.png?width=2235&height=1671",
] as const;

/** Wrapper card — carries the shadow/ring/rounded and clips scaled content. */
const CARD = "overflow-hidden shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40";
const CARD_IMG = "h-auto w-full object-contain scale-[1.1]";
const PAIR_CARD = `w-0 flex-1 overflow-hidden shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40`;
const PAIR_COVER_CARD = `w-0 flex-1 overflow-hidden shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl`;
const PAIR_COVER_IMG = "h-full w-full object-cover scale-[1.1]";

/** First five pulled out of carousel — rendered as individual images. */
const CAROUSEL_PRE = GALLERY_IMAGES.slice(7, 11);
/** In-gallery carousel: starts after the pulled-out five; last four in their own carousel. */
const CAROUSEL_IMAGES = GALLERY_IMAGES.slice(11, -4) as unknown as string[];
const GALLERY_TAIL = GALLERY_IMAGES.slice(-4);

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Venice Pavilion",
};

export default function VenicePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{
        kind: "carousel",
        images: [HERO, GALLERY_IMAGES[1], GALLERY_IMAGES[0]],
        alt: "Venice Pavilion",
        layout: "tall",
      }}
      heroTallSize="smaller"
      heroImageZoom
      challengeSummary="Create a lightweight ETFE pavilion that hovers, breathes, and cultivates a pollinator greenhouse."
      meta={{
        timeline: "One Year, 2025",
        roles: ["Lead Co-Designer"],
        team: [
          "Spencer Burton", "Failenn Aselta",
          "Adler Dills", "Javier Mico-Crump",
          "Carson Guimond", "Kevin Jones", "Paige Barnhart", "Casper Rao",
          "Daphne Longmire", "Soren Winistorfer", "Enric Ruis-Geli",
          "Blumer-Lehmann", "Vector Foiltec",
          "Water Creek", "Valley Landscape",
          "PFF", "USM", "Joba Studio",
        ],
      }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              A small yet generous pavilion, born from the collective work of multidisciplinary
              students. The dome encourages the gentle movement of pollinating life, while
              bee-friendly plantings surround the pavilion. The project resolved through the
              inflated ETFE roof. Chosen for its near weightlessness, it allows the structure to
              hover while cultivating a greenhouse for the plantings below. The double-layered ETFE
              tempers extremes, softening heat and deflecting rain, yet holds warmth and moisture
              to create an interior of sustained humidity and growth.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <div className="mx-auto flex w-full max-w-[min(720px,94vw)] flex-col items-center gap-10 md:gap-12">
              <div className={`w-full ${CARD} max-h-[min(85vh,820px)]`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[5]} alt="Venice Pavilion — visual 1" className={CARD_IMG} />
              </div>

              <div className={`w-full ${CARD} max-h-[min(72vh,640px)]`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[6]} alt="Venice Pavilion — visual 2" className={CARD_IMG} />
              </div>

              <div className="mx-auto flex w-full max-w-[min(560px,94vw)] items-center gap-4">
                <div className={PAIR_COVER_CARD}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GALLERY_IMAGES[2]} alt="Venice Pavilion — visual 3" className={PAIR_COVER_IMG} />
                </div>
                <div className={PAIR_CARD}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GALLERY_IMAGES[3]} alt="Venice Pavilion — visual 4" className={CARD_IMG} />
                </div>
                <div className={PAIR_COVER_CARD}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GALLERY_IMAGES[4]} alt="Venice Pavilion — visual 5" className={PAIR_COVER_IMG} />
                </div>
              </div>

              <div className={`w-full ${CARD} max-h-[min(72vh,640px)]`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CAROUSEL_PRE[0]} alt="Venice Pavilion — visual 6" className={CARD_IMG} />
              </div>

              <div className="flex w-full items-center gap-4">
                <div className={PAIR_CARD}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={CAROUSEL_PRE[1]} alt="Venice Pavilion — visual 7" className={CARD_IMG} />
                </div>
                <div className={PAIR_COVER_CARD}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={CAROUSEL_PRE[2]} alt="Venice Pavilion — visual 8" className={PAIR_COVER_IMG} />
                </div>
              </div>

              <div className={`w-full ${CARD} max-h-[min(72vh,640px)]`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CAROUSEL_PRE[3]} alt="Venice Pavilion — visual 9" className={CARD_IMG} />
              </div>

              <ProjectGalleryRow
                images={CAROUSEL_IMAGES}
                theme="pink"
                glassVariant="liquid"
                frameSize="default"
                slideImageFit="contain"
                slidePadding="tight"
                className="my-0 w-full max-w-[min(1080px,calc(100vw-1.5rem))]"
              />

              <ProjectGalleryRow
                images={GALLERY_TAIL as unknown as string[]}
                theme="pink"
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
