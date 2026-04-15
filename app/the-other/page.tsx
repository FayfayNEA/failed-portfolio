import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { ProjectGalleryRow } from "@/components/project-gallery-row";

const SLUG = "the-other";
const CATEGORY = "architecture";

const TITLE = "The Architecture of Other";
const HERO = "https://framerusercontent.com/images/EXJyfxkNEc9CeYLBNbMyBKX2jyo.png";

const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/YLfzRNI8L70VVkoAORoyC64JUs.jpg?width=5482&height=3718",   // 1
  "https://framerusercontent.com/images/Wa6TUPLB5MjI323YyJTNHKc9c.png?width=4096&height=2589",   // 2
  "https://framerusercontent.com/images/7ZvQOYakypLiV8k55KAubnEHAGg.png?width=4320&height=2432", // 3
  "https://framerusercontent.com/images/qPzXtwSq9k9eOpyJSeURldGp43U.png?width=6170&height=4433", // 4
  "https://framerusercontent.com/images/6hdGReNO0P4rtPlGGjn7FWTzNAA.png?width=2926&height=3308", // 5
  "https://framerusercontent.com/images/fy3tLFtDbxXzFRn8XCsVGN7rT10.png?width=5312&height=3464", // 6
  "https://framerusercontent.com/images/1Wlpy1vwCADkKPACNcoObwUNY1I.jpg?width=3441&height=4307", // 7
  "https://framerusercontent.com/images/cT4PO7luDWh0gljLkoNBBMnj8.jpg?width=1704&height=2160",   // 8
  "https://framerusercontent.com/images/1TGcVmIPYlOdbTgjOeWYXyP2Tos.jpg?width=3272&height=4096", // 9
  "https://framerusercontent.com/images/qtLaoLxjZPvQ3jyNT7ehFKwE.jpg?width=3272&height=4096",    // 10
  "https://framerusercontent.com/images/gJ8WiOB0d4YcNxhirV8Uyp3EfI.jpg?width=3272&height=4096", // 11
  "https://framerusercontent.com/images/0sgZ0AJXtXvIttjtnaqVUKvP0sY.jpg?width=4096&height=3272", // 12
  "https://framerusercontent.com/images/D5cwj8egZge9n3VwnXlt7qZIDc.jpg?width=2700&height=2635",  // 13
  "https://framerusercontent.com/images/5eYuRXXEEmjuCsKbTe6YgIMCY.png?width=3780&height=3512",   // 14
  "https://framerusercontent.com/images/2f9x0HjfngDh01cmdl3pky6JTH8.png?width=6240&height=3512", // 15
  "https://framerusercontent.com/images/lcUe7riDJYIQYxgwrOTM05VrbM.png?width=3512&height=3050",  // 16
  "https://framerusercontent.com/images/U0IGctDt4pl9Z7DmB60F863EkI.png?width=4181&height=2716",  // 17
  "https://framerusercontent.com/images/DQGacZAvwZJsYsBLRl7smMyNU.png?width=5320&height=3682",   // 18
  "https://framerusercontent.com/images/t2hjQ79b4PFAAKAWd7m1zN1sik.png?width=3512&height=3013",  // 19
  "https://framerusercontent.com/images/hEdKxQ31lNd46dgyh0ouAhCPq4.png?width=3512&height=3045",  // 20
  "https://framerusercontent.com/images/gCmcext8tkqf6OsKBUgQF9ir68.png?width=4024&height=5734",  // 21
  "https://framerusercontent.com/images/Lnf2MjgW3e021FtrNUnS7I2fY.png?width=4024&height=4067",   // 22
  "https://framerusercontent.com/images/B4Go3effSVpR5ZRAInDapb4TwMU.png?width=4997&height=4024", // 23
  "https://framerusercontent.com/images/GmxYlSQohs8k7io1IGoA1njpPek.png?width=4823&height=4024", // 24
  "https://framerusercontent.com/images/7FPYmSmPDvANXcybPWpul94Mig.png?width=1152&height=1584",  // 25
  "https://framerusercontent.com/images/GqUbdaZFUHWtn78OlywjYoT53jo.png?width=1152&height=1584", // 26
  "https://framerusercontent.com/images/2lpDzuOhFgENtpzfG8PgGOEDZLM.jpg?width=2400&height=3300", // 27
] as const;

const IMG = "h-auto w-full object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40";
const IMG_PAIR = "h-auto w-0 flex-1 object-contain shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] rounded-xl bg-white/40";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — The Architecture of Other",
};

export default function TheOtherPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{
        kind: "carousel",
        images: [HERO, GALLERY_IMAGES[1], GALLERY_IMAGES[2]],
        alt: "The Architecture of Other",
        layout: "tall",
      }}
      challengeSummary="Redefine growth as empathy — architecture that turns inward to confront the suffering of others."
      meta={{ timeline: "One Year, 2024", roles: ["Designer"], team: ["Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              The Architecture of Other is an homage to Simone de Beauvoir and a reconsideration of
              what Le Corbusier once framed as modernism. Rather than architecture as outward
              expansion, the project proposes a turning inward, asking occupants to confront and
              recognize the suffering of others. Through the radicalization of form, materiality,
              program, and site, growth is redefined not as physical accumulation, but as a shift
              in consciousness toward empathy. North Brother Island, located off the coast of
              Queens, serves as the project site.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <div className="mx-auto flex w-full max-w-[min(720px,94vw)] flex-col items-center gap-10 md:gap-12">

              {/* Image 1 — larger hero */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GALLERY_IMAGES[0]} alt="The Architecture of Other — visual 1"
                className={`${IMG} max-h-[min(85vh,820px)]`} />

              {/* Image 4 stacked */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GALLERY_IMAGES[3]} alt="The Architecture of Other — visual 4"
                className={`${IMG} max-h-[min(72vh,640px)]`} />

              {/* Images 5 & 6 side by side — slightly smaller */}
              <div className="flex w-full gap-4 max-w-[min(560px,94vw)] mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[4]} alt="The Architecture of Other — visual 5"
                  className={IMG_PAIR} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[5]} alt="The Architecture of Other — visual 6"
                  className={IMG_PAIR} />
              </div>

              {/* Images 7–13 carousel — larger */}
              <ProjectGalleryRow
                images={GALLERY_IMAGES.slice(6, 13) as unknown as string[]}
                theme="pink"
                glassVariant="liquid"
                frameSize="default"
                slideImageFit="contain"
                slidePadding="tight"
                className="w-full my-0 max-w-[min(860px,calc(100vw-1.5rem))]"
              />

              {/* Images 14–16 carousel */}
              <ProjectGalleryRow
                images={GALLERY_IMAGES.slice(13, 16) as unknown as string[]}
                theme="pink"
                glassVariant="liquid"
                frameSize="medium"
                slideImageFit="contain"
                slidePadding="tight"
                className="w-full my-0"
              />

              {/* Images 17 & 18 stacked */}
              {GALLERY_IMAGES.slice(16, 18).map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src}
                  alt={`The Architecture of Other — visual ${17 + i}`}
                  className={`${IMG} max-h-[min(72vh,640px)]`} />
              ))}

              {/* Images 19 & 20 side by side */}
              <div className="flex w-full gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[18]} alt="The Architecture of Other — visual 19" className={IMG_PAIR} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[19]} alt="The Architecture of Other — visual 20" className={IMG_PAIR} />
              </div>

              {/* Images 21 & 22 side by side */}
              <div className="flex w-full gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[20]} alt="The Architecture of Other — visual 21" className={IMG_PAIR} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[21]} alt="The Architecture of Other — visual 22" className={IMG_PAIR} />
              </div>

              {/* Images 23 & 24 side by side */}
              <div className="flex w-full gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[22]} alt="The Architecture of Other — visual 23" className={IMG_PAIR} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[23]} alt="The Architecture of Other — visual 24" className={IMG_PAIR} />
              </div>

              {/* Images 25–27 side by side */}
              <div className="flex w-full gap-4">
                {GALLERY_IMAGES.slice(24).map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src}
                    alt={`The Architecture of Other — visual ${25 + i}`}
                    className={IMG_PAIR} />
                ))}
              </div>

            </div>
          ),
        },
      ]}
    />
  );
}
