import type { Metadata } from "next";
import { ManualProjectPage } from "@/components/manual-project-page";
import { IrisPlay } from "./iris-play";

const SLUG = "iris-world";
const CATEGORY = "product-design";
const TITLE = "Iris's World";
const DESCRIPTION = "a first-person game about being a tiny dog in a very big house";

export const metadata: Metadata = {
  title: TITLE,
  description: "Failenn Aselta — Iris's World, a browser-based 3D exploration game built with Three.js",
};

export default function IrisWorldPage() {
  return (
    <ManualProjectPage
      title={TITLE}
      description={DESCRIPTION}
      mobileHeading="description"
      slug={SLUG}
      category={CATEGORY}
      hero={{ kind: "video-carousel", videos: ["/iris-world/iris-walkthrough.mp4"], size: "wide", landscape: true }}
      challengeSummary="Build a fully explorable 3D home from Iris's perspective: nose-level camera, dog-physics, and a world that transforms when all her objectives are met."
      meta={{
        timeline: "2026",
        roles: ["Solo Developer", "3D Environment", "Game Design"],
        tools: ["Three.js", "WebGL", "esbuild", "Vanilla JS"],
        team: ["Failenn Aselta"],
      }}
      sections={[
        {
          id: "overview",
          label: "ABOUT THE GAME",
          content: (
            <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
              Iris&apos;s World is a browser-based first-person game built entirely in Three.js. You play
              as Iris, a small, serious dog, exploring every room of a cozy house. The environment
              is fully procedurally textured with no external assets: every surface, light, and piece
              of furniture is generated at runtime. Complete all eight of Iris&apos;s objectives to unlock
              her Perfect World, where the furniture scales down to her size, new doors appear, and
              the house becomes fully hers.
            </p>
          ),
        },
        {
          id: "play",
          label: "PLAY",
          content: <IrisPlay />,
        },
        {
          id: "technical",
          label: "TECHNICAL",
          content: (
            <div className="flex flex-col gap-8 max-w-[min(52rem,100%)]">
              <p className="text-[0.95rem] leading-[1.75] text-zinc-600">
                The entire scene, floors, walls, furniture, lighting, sky, is built procedurally
                in JavaScript using Three.js and a custom CanvasTexture pipeline. No external 3D
                models or image assets are loaded at runtime. Physics are handwritten: AABB collision,
                inertia, jump arcs, and a Perfect World transition system that lerps furniture to
                dog-scale positions. The post-processing pipeline uses a RenderPixelatedPass for a
                retro pixel-art look with depth-edge outlines.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {[
                  ["Engine",   "Three.js"],
                  ["Renderer", "WebGL + Pixel Pass"],
                  ["Physics",  "Custom AABB"],
                  ["Build",    "esbuild"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="mb-1 font-sans text-[10px] font-normal uppercase tracking-[0.16em] text-[#A0A0A0]">{label}</p>
                    <p className="text-[0.8125rem] font-normal leading-snug text-zinc-950">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
