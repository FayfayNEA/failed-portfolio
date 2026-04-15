import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";

const SLUG = "tiny-home";
const CATEGORY = "architecture";

const TITLE = "Tiny Home";
const HERO = "https://framerusercontent.com/images/WV7DQ5qHriMXRViKYOfKPf3mU.jpg?width=1536&height=952";

/** Original Framer set (carousel order), then `public/tinyhome/` uploads. */
const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/HfwsEMdJzlYjvGzuCPQ4aSrOzE.png?width=4588&height=2416",
  "/tinyhome/Qh1Ghc2HMqubV0gBAPilB1XGEGo.svg",
  "/tinyhome/haO5JWxVEueOnhLLd0DHyHoMRQ.avif",
  "https://framerusercontent.com/images/rWRRkN5AgZQ6wdRcYJWprGwQr0.jpg?width=8213&height=5872",
  "https://framerusercontent.com/images/GnCowJjAcMy7Z9Jy42B1Oqggl9I.jpg?width=1755&height=1235",
  "https://framerusercontent.com/images/uYJTOktZo5RXBRqgAwaZIMl0k.jpg?width=3918&height=4800",
  "https://framerusercontent.com/images/Hg2140vMZNj10ldxIV75SLmpPZA.png?width=1080&height=1350",
  "https://framerusercontent.com/images/dCyOjm4lgSK2sfOjW8Xeu9yxI.jpg?width=4322&height=4952",
  "https://framerusercontent.com/images/EcSVeukgsRDAohJ2MxVJbVbhoI.jpg?width=9666&height=6524",
  "/tinyhome/oLOupqKc6nB0Qo0JHJAwYnO0.avif",
  "/tinyhome/o6HiPkdgOHeUVlgXo6fLqVKcwiU.avif",
  "/tinyhome/Hb8Hnm3Ajwgyxtzg1uewmMsk.avif",
  "/tinyhome/VYlsrtjy6KU0zwaWwfSRL18vxE.avif",
  "/tinyhome/G4o9awwGvRgk6E9GYySNTP6q4E.avif",
  "/tinyhome/ZchzgUWOUhT5iL1JCnrClFn3s.avif",
  "/tinyhome/dhTOcfkbUtLy9t4mNp0G8kMmJI.webp",
  "/tinyhome/sjDdbBgVgvVza9JFS2fOxBkcdDk.avif",
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Tiny Home",
};

export default function TinyHomePage() {
  return (
    <ManualProjectPage
      title={TITLE}
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "image", src: HERO, alt: "Tiny Home cover", layout: "tall" }}
      challengeSummary="Re-imagine Paradise as a self-sufficient farming community through modest homes and workable land."
      meta={{ timeline: "One Week, 2026", roles: ["Designer"], team: ["Ben Politowicz", "Failenn Aselta"] }}
      sections={[
        {
          id: "project-overview",
          label: "PROJECT OVERVIEW",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              This project looks to reclaim lost momentum by re-imagining Paradise as a small
              community. It proposes a return to growth through farming, tapping into the
              contemporary revival of homesteading and self-sufficiency. The homes are modest in
              scale, designed as small dwellings set within large, workable plots of land. While
              forward-looking in its social and agricultural ambitions, the project remains rooted
              in the town&apos;s railroad history.
            </p>
          ),
        },
        {
          id: "gallery",
          label: "GALLERY",
          content: (
            <div className="mx-auto flex w-full max-w-[min(720px,94vw)] flex-col items-center gap-10 md:gap-12">
              {GALLERY_IMAGES.map((src, i) => {
                const card =
                  "w-full rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/80";
                const cardImg = "h-auto w-full max-h-[min(72vh,640px)] object-contain";
                const pairFrame =
                  "relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-50/60 p-2 sm:p-3 ring-[0.5px] ring-zinc-200/70 aspect-[4/3]";
                const pairCover = "block h-full w-full object-contain";
                const singleFrame =
                  "relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-50/60 p-2 sm:p-3 ring-[0.5px] ring-zinc-200/70 aspect-[16/10]";
                const singleImg = "block h-full w-full object-contain";

                /** Indices 0–2: row of 1+2, then 3 below (two new assets at 1–2). */
                if (i === 0) {
                  const first = GALLERY_IMAGES[0];
                  const second = GALLERY_IMAGES[1];
                  const third = GALLERY_IMAGES[2];
                  const topMat =
                    "rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/80";
                  return (
                    <div
                      key="tiny-home-gallery-top-1-2-3"
                      className="flex w-full flex-col items-stretch gap-10 md:gap-12"
                    >
                      <div className={topMat}>
                        <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 md:gap-6">
                          <div className={pairFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={first}
                              alt={`Tiny Home — visual 1 of ${GALLERY_IMAGES.length}`}
                              className={pairCover}
                            />
                          </div>
                          <div className={pairFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={second}
                              alt={`Tiny Home — visual 2 of ${GALLERY_IMAGES.length}`}
                              className={pairCover}
                            />
                          </div>
                        </div>
                        <div className="mt-3 flex w-full justify-center sm:mt-4 md:mt-6">
                          <div className="w-full max-w-[min(420px,92%)]">
                            <div className={singleFrame}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={third}
                                alt={`Tiny Home — visual 3 of ${GALLERY_IMAGES.length}`}
                                className={singleImg}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (i === 1 || i === 2) return null;
                if (i === 10) return null;
                if (i === 9) {
                  const eighth = GALLERY_IMAGES[9];
                  const ninth = GALLERY_IMAGES[10];
                  const mat =
                    "w-full rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/80";
                  return (
                    <div key="tiny-home-gallery-8-9-pair" className={mat}>
                      <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 md:gap-6">
                        <div className={pairFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={eighth}
                            alt={`Tiny Home — visual 10 of ${GALLERY_IMAGES.length}`}
                            className={`${pairCover} origin-center`}
                          />
                        </div>
                        <div className={pairFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={ninth}
                            alt={`Tiny Home — visual 11 of ${GALLERY_IMAGES.length}`}
                            className={pairCover}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
                // Side-by-side row: uYJTOkt… + Hg2140… (Framer pair in list order)
                if (i === 6) return null;
                if (i === 5) {
                  const left = GALLERY_IMAGES[5];
                  const right = GALLERY_IMAGES[6];
                  const bigCard =
                    "w-full rounded-3xl bg-white p-3 sm:p-4 md:p-5 shadow-[0_14px_52px_-30px_rgba(0,0,0,0.26)] ring-[0.5px] ring-zinc-200/80";
                  const bigFrame =
                    "relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-50/60 p-0 ring-[0.5px] ring-zinc-200/70 h-[clamp(260px,34vw,620px)]";
                  return (
                    <div key="tiny-home-gallery-framer-pair" className={bigCard}>
                      <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 md:gap-6">
                        <div className={bigFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={left}
                            alt={`Tiny Home — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
                            className={pairCover}
                          />
                        </div>
                        <div className={bigFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={right}
                            alt={`Tiny Home — visual ${i + 2} of ${GALLERY_IMAGES.length}`}
                            className={pairCover}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
                if (i === 12) return null;
                if (i === 16) return null;
                if (i === 11) {
                  const tenth = GALLERY_IMAGES[11];
                  const eleventh = GALLERY_IMAGES[12];
                  const twelfth = GALLERY_IMAGES[13];
                  const fifteenth = GALLERY_IMAGES[16];
                  return (
                    <div
                      key="tiny-home-gallery-10-11-12-13-15-stack"
                      className="flex w-full flex-col items-stretch gap-6 md:gap-8"
                    >
                      <div className={card}>
                        <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 md:gap-6">
                          <div className={pairFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={tenth}
                              alt={`Tiny Home — visual 12 of ${GALLERY_IMAGES.length}`}
                              className={pairCover}
                            />
                          </div>
                          <div className={pairFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={eleventh}
                              alt={`Tiny Home — visual 13 of ${GALLERY_IMAGES.length}`}
                              className={pairCover}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={card}>
                        <div className={singleFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={twelfth}
                            alt={`Tiny Home — visual 14 of ${GALLERY_IMAGES.length}`}
                            className={singleImg}
                          />
                        </div>
                      </div>

                      <div className="flex w-full justify-center">
                        <div className={`w-full ${card}`}>
                          <div className={singleFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={fifteenth}
                              alt={`Tiny Home — visual 16 of ${GALLERY_IMAGES.length}`}
                              className={singleImg}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (i === 13) return null;
                if (i === 15) return null;
                if (i === 14) {
                  const left = GALLERY_IMAGES[14];
                  const right = GALLERY_IMAGES[15];
                  return (
                    <div key="tiny-home-gallery-15-16-pair" className={card}>
                      <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 md:gap-6">
                        <div className={pairFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={left}
                            alt={`Tiny Home — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
                            className={pairCover}
                          />
                        </div>
                        <div className={pairFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={right}
                            alt={`Tiny Home — visual ${i + 2} of ${GALLERY_IMAGES.length}`}
                            className={`${pairCover} origin-center -rotate-90`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
                // dCyOjm4… + EcSVeuk… — white mat / padding around each frame
                if (i === 7 || i === 8) {
                  return (
                    <div
                      key={src}
                      className="w-full rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] ring-[0.5px] ring-zinc-200/80"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Tiny Home — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
                        className="h-auto w-full max-h-[min(72vh,640px)] object-contain"
                      />
                    </div>
                  );
                }
                return (
                  <div key={src} className={card}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Tiny Home — visual ${i + 1} of ${GALLERY_IMAGES.length}`}
                      className={cardImg}
                    />
                  </div>
                );
              })}
            </div>
          ),
        },
      ]}
    />
  );
}
