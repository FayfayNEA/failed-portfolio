import type { Metadata } from "next";
import { Rosario } from "next/font/google";
import { BuddyChallengeDisclosure } from "@/components/buddy-challenge-disclosure";
import { buildProjectBreadcrumb } from "@/components/case-breadcrumb";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import { ImageLightbox } from "@/components/image-lightbox";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { ProjectSurface } from "@/components/project-surface";
import { cn } from "@/lib/cn";

const BUDDY_BREADCRUMB = buildProjectBreadcrumb("buddy", "product-design");

const rosario = Rosario({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buddy",
  description:
    "Failenn Aselta — Buddy, a handheld LLM stenographer for group communication.",
};

const SECTIONS = [
  { id: "the-challenge", label: "THE CHALLENGE" },
  { id: "project-overview", label: "PROJECT OVERVIEW" },
  { id: "the-research", label: "THE RESEARCH" },
  { id: "the-solution", label: "THE SOLUTION" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "hardware", label: "HARDWARE" },
  { id: "iterations", label: "ITERATIONS" },
  { id: "final-product", label: "FINAL PRODUCT" },
  { id: "considerations", label: "CONSIDERATIONS" },
  { id: "bibliography", label: "BIBLIOGRAPHY" },
];

/** Former ALL_GALLERY items 7–8 moved to the front of the hardware strip. */
const HARDWARE_GALLERY = [
  "https://framerusercontent.com/images/B9GkX7orORDgH2rQotIt6DptFT8.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/eshLNiiuNozrxDvWyO6uDH3xLzI.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/bk1mqOQFupF1kSjRJ0mMNM5BRpY.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/7B2xqX2fMs5W3Fcw4hgU6dmub9Q.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/oJNQniV8JUqD0haxoP2A9TnNiQE.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/bBzGi6YFBTx4s09RUP8jDyaBo0I.jpg?width=6240&height=3512",
];

/** Progress build photos (carousel under Hardware). */
const HARDWARE_PROGRESS_GALLERY = [
  "https://framerusercontent.com/images/dTOwVHfP1wBrUeiOu17Kp73Ll4.jpg?width=4000&height=2947",
  "https://framerusercontent.com/images/j2HHaeedoprk3Go4S0GDJiWjg.jpg?width=1441&height=1080",
  "https://framerusercontent.com/images/LmhB2ABNE1nd6lVg1nLstxoXTro.jpg?width=2560&height=1707",
  "https://framerusercontent.com/images/iUJeKBozFgDvEJX0WMzyj3dqqI.jpg?width=2560&height=1706",
  "https://framerusercontent.com/images/v8RXXQKw8S25Bo0EMrzo4KC79k.png?width=555&height=555",
  "https://framerusercontent.com/images/SDIAkJWSo6CNPMy0pN3TktWJB4.jpg?width=1600&height=1600",
];

const FINAL_GALLERY = [
  "https://framerusercontent.com/images/hslrB5Qc5E482B4kJT5701XZ8.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/rfQnvvCsvZcUTRaOfL3vOGJf44.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/d9OOEzR6VLJQxSHX3ESKX1gKQ.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/0RGrhdFOAMiowItEhX683ImdrRU.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/mw1fJj2ppbs1c1hQkOHo25Sgs0.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/lmRBIzPDTnRNcPX002QA7gQQpk.jpg?width=6240&height=3512",
  "https://framerusercontent.com/images/ADHDdlmgCcrf3JZoj9qQUePYEw.jpg?width=6240&height=3512",
];

const BUDDY_RESEARCH_TREE_SRC =
  "/buddy/" + encodeURIComponent("items (67).png");
const BUDDY_RESEARCH_LENS_SRC =
  "/buddy/" +
  encodeURIComponent(
    "Why Teams Struggle to Design and Invest Together - visual selection (1) 1.png"
  );

/** Process clips section — watercolour frame behind iteration videos. */
const BUDDY_PROCESS_CLIPS_BG = "/buddy/process-clips-bg.png";

/** Thumbnail chrome for System Creation diagram lightboxes. */
const BUDDY_SYSTEM_DIAGRAM_IMG_CLASS =
  "block h-auto w-full rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]";

const BUDDY_SYSTEM_DIAGRAM_LIGHTBOX_WRAP = cn("overflow-hidden !rounded-2xl");

/**
 * Rounded edges on thumbnails — `!` beats `ImageLightbox` default `rounded-3xl`
 * so corners stay visibly filleted with `object-contain`.
 */
const EARLY_DRAWING_FILLET =
  "!rounded-[2.5rem] md:!rounded-[3.25rem] overflow-hidden";

const EARLY_DRAWING_IMG_CLASS = cn(
  "block h-auto w-full shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] mx-auto max-h-[min(64vw,440px)] max-w-[440px] object-contain md:max-h-[400px] md:max-w-none",
  EARLY_DRAWING_FILLET
);

const EARLY_DRAWING_LIGHTBOX_WRAP = cn(
  "overflow-hidden",
  EARLY_DRAWING_FILLET
);

// Code strings extracted from JSX to avoid curly-brace parser confusion
const CODE_SYSTEM_PROMPT = [
  'system_prompt = f"""',
  "You are a Visual Assistant. You generate Mermaid.js code OR Fal.ai image prompts.",
  "",
  'CURRENT MODE: {DIAGRAM | SKETCH} (switch based on intent)',
  "",
  "TASK:",
  "1. ANALYZE USER INTENT:",
  '   - Chart, graph, flow, or timeline -> output mode: "DIAGRAM"',
  '   - Scene, photo, texture, or visual style -> output mode: "SKETCH"',
  '   - Referring to "it"/"the image"/"that" -> use CONTEXT HISTORY',
  "",
  "2. FOR DIAGRAMS (Mermaid):",
  "   - Return valid Mermaid code only. No backticks.",
  "   - Support: graph TD, mindmap, pie, sequenceDiagram, xychart-beta, gantt.",
  "",
  "3. FOR SKETCHES (Images):",
  "   - If refinement, keep core details and apply the change.",
  '   - set "is_refinement": true only if editing the previous image.',
  "",
  "Return JSON ONLY:",
  '{ "mode": "DIAGRAM" | "SKETCH", "prompt": "...", "is_refinement": true|false }',
  '"""',
].join("\n");

const CODE_PDF_EXPORT = [
  "# Create a PDF summary to ensure universal accessibility",
  "pdf_buffer = io.BytesIO()",
  "c = canvas.Canvas(pdf_buffer, pagesize=letter)",
  "text_obj = c.beginText(40, 750)",
  "for line in summary_lines:",
  "    text_obj.textLine(line)",
  "c.drawText(text_obj)",
  "c.save()",
  "",
  "# Package into a downloadable ZIP artifact",
  'zip_file.writestr("session_summary.pdf", pdf_buffer.getvalue())',
  "return StreamingResponse(",
  "    io.BytesIO(zip_buffer.read()),",
  '    media_type="application/zip",',
  '    headers={"Content-Disposition": "attachment; filename=session_export.zip"}',
  ")",
].join("\n");

const METADATA_ROWS = [
  { label: "Timeline", value: "2 weeks" },
  {
    label: "Role",
    value: "Full Stack Engineer\nProduct Designer\nHardware Engineer\nIndustrial Designer",
  },
  { label: "Team", value: "Failenn Aselta" },
  {
    label: "Tools",
    value: "Figma · Cursor · Gemini\nRaspberry Pi · React\nFastAPI · Linux",
  },
];

const KEY_LEARNINGS = [
  {
    heading: "Key Learning — LLM Persona",
    body: "Had to clearly define the LLM's persona, ultimately assigning it the role of a Visual Assistant for the cleanest outputs.",
  },
  {
    heading: "Key Learning — Image Generation",
    body: "A major technical hurdle was training the model to generate proper images without relying on explicit keywords.",
  },
  {
    heading: "Key Learning — Session Export",
    body: "Engineered a session-commit function that dynamically zips all generated assets and transcripts into a universal PDF. Transformed a transient AI conversation into a professional leave-behind artifact.",
  },
];

const REFLECTIONS = [
  {
    n: "1",
    text: "Prompt engineering is product design. Defining the LLM's persona precisely determined every output downstream.",
  },
  {
    n: "2",
    text: "Hardware constraints sharpen software decisions. Running the full stack on a Raspberry Pi forced architectural clarity that cloud deployment never would have.",
  },
  {
    n: "3",
    text: "Permanence is a feature. The session export — turning a transient conversation into a downloadable artifact — changed how people understood the product entirely.",
  },
];

const BIBLIOGRAPHY = [
  {
    cite: 'Arias, Ernesto G., and Gerhard Fischer. "Boundary Objects: Their Role in Articulating the Task at Hand and Making Information Relevant to It." International ICSC Symposium on Interactive and Collaborative Computing. University of Colorado Boulder, 2000.',
    href: "https://l3d.colorado.edu/wp-content/uploads/2016/04/icsc2000.pdf",
    linkText: "l3d.colorado.edu",
  },
  {
    cite: 'Brubaker, E. R., S. D. Sheppard, P. J. Hinds, and M. C. Yang. "Objects of Collaboration: Roles of Objects in Spanning Knowledge Boundaries in a Design Company." 34th International Conference on Design Theory and Methodology. MIT, 2022.',
    href: "https://dspace.mit.edu/bitstream/handle/1721.1/154882/v006t06a006-detc2022-89388.pdf",
    linkText: "dspace.mit.edu",
  },
  {
    cite: 'Huang, Y.-H. "Understanding the Collaboration Difficulties Between UX Designers and Developers in Agile Environments." Masters thesis, Purdue University, 2018.',
    href: "https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=2610&context=open_access_theses",
    linkText: "docs.lib.purdue.edu",
  },
];

/* ---------- tiny helpers ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-14 h-px w-full bg-zinc-200/50" />;
}

/* eslint-disable @next/next/no-img-element */

function CodeBlock({ code, className }: { code: string; className?: string }) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-xl p-5 font-mono text-[0.78rem] leading-relaxed border border-zinc-200 bg-zinc-50 text-zinc-800 shadow-sm whitespace-pre-wrap",
        className
      )}
    >
      <code>{code}</code>
    </pre>
  );
}

/** Wide frame with watercolour background; video inset like a gallery hero. */
function IterationVideoFrame({ src }: { src: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl",
        "border-[3px] border-violet-200/80 shadow-[0_24px_72px_-24px_rgba(76,29,149,0.36)] ring-1 ring-violet-400/50"
      )}
    >
      <img
        src={BUDDY_PROCESS_CLIPS_BG}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-white/[0.06]"
        aria-hidden
      />
      <div className="relative z-[2] flex justify-center px-2.5 py-5 md:px-[14px] md:py-6">
        <video
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full max-w-full rounded-lg object-cover shadow-[0_12px_44px_-14px_rgba(0,0,0,0.26)] ring-[0.5px] ring-white/35"
          src={src}
        >
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function BuddyPage() {
  return (
    <ProjectSurface>
      <div className="min-h-full">
      <CaseStudySidebar
        projectName="Buddy"
        projectNameClassName={rosario.className}
        sections={SECTIONS}
        breadcrumb={BUDDY_BREADCRUMB}
        hideRailAtMaxWidthPx={1000}
      />

      {/*
        NavShell already clears the floating nav. Desktop: no extra top pt so "Buddy" lines up with
        "Back to Projects" (same inset as the fixed rail). Horizontal: match LiquidGlassNav pill
        (max-w min(900px,96vw) centered + px-3); rail is inset 30px from the left.
      */}
      <main
        className={cn(
          "pb-40 font-sans antialiased",
          "max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:min-w-0 max-[1000px]:max-w-[min(900px,96vw)] max-[1000px]:px-3 max-[1000px]:pt-[calc(1.5rem+50px)] max-[1000px]:md:pt-[calc(2rem+50px)]",
          "min-[1001px]:ml-[calc(30px+max(22rem,12.5vw))] min-[1001px]:min-w-0 min-[1001px]:max-w-none min-[1001px]:pt-[50px]",
          "min-[1001px]:pl-[max(0.75rem,calc((100vw-min(900px,96vw))/2-30px-max(22rem,12.5vw)))] min-[1001px]:pr-12"
        )}
      >

        {/* Title — Rosario; top aligns with sidebar breadcrumb */}
        <h1
          className={cn(
            rosario.className,
            "mb-8 mt-0 text-[clamp(2.75rem,4.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-zinc-950"
          )}
        >
          Buddy
        </h1>

        {/* Hero video — 16:9 frame; 9:16 source fills via object-cover */}
        <div className="mb-14 flex w-full justify-center">
          <div className="w-full max-w-[min(1280px,calc(100vw-1.5rem))]">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-2xl object-cover shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
              src="/buddy/sequence-04.mp4"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>

        {/* Metadata grid — Timeline, Role, Team, Tools */}
        <div className="mb-14 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-10">
          {METADATA_ROWS.map(({ label, value }) => (
            <div key={label}>
              <p className="mb-2 font-sans text-[10px] font-normal uppercase tracking-[0.16em] text-[#A0A0A0]">
                {label}
              </p>
              <p className="whitespace-pre-line text-[0.8125rem] font-normal leading-snug text-zinc-950">
                {value}
              </p>
            </div>
          ))}
        </div>

        <Divider />

        {/* THE CHALLENGE — expand on click */}
        <section id="the-challenge" className="scroll-mt-24">
          <BuddyChallengeDisclosure summary="Design a product that helps people communicate." />
        </section>

        <Divider />

        {/* PROJECT OVERVIEW */}
        <section id="project-overview" className="scroll-mt-24">
          <SectionLabel>Project Overview</SectionLabel>
          <h2 className="mb-4 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
            The Rundown
          </h2>
          <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
            Buddy seeks to resolve the disconnect of working in groups, by acting as an intermediary that captures conversations in real time through LLM-powered image generation. It utilizes rapid prototyping, electronics, and full-stack software development to create a product that preserves conversations through a visual history of conversations and saves valuable concepts from being lost to misarticulation.
          </p>

          <div className="relative mb-10 mt-10 flex min-h-[min(42vh,420px)] w-full flex-col overflow-hidden rounded-2xl border-[0.5px] border-white/70 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/35 md:mt-14 md:min-h-[min(46vh,480px)]">
            <div
              className="pointer-events-none absolute inset-0 bg-white/50 backdrop-blur-xl"
              aria-hidden
            />
            <div className="relative z-[1] flex min-h-0 flex-1 flex-row gap-1 px-4 py-6 md:gap-2 md:px-10 md:py-8 lg:px-12 lg:py-10">
              <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center md:justify-end">
                <img
                  src={BUDDY_RESEARCH_TREE_SRC}
                  alt="Illustration: ineffective team collaboration"
                  className="max-h-[min(40vh,440px)] w-full max-w-full object-contain md:max-h-[min(44vh,500px)]"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center md:justify-start">
                <img
                  src={BUDDY_RESEARCH_LENS_SRC}
                  alt="Diagram: aligning inputs through a shared focal point"
                  className="max-h-[min(40vh,440px)] w-full max-w-full object-contain md:max-h-[min(44vh,500px)]"
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* THE RESEARCH — problems/solutions diagrams first, participant + HMW below */}
        <section id="the-research" className="scroll-mt-24">
          <SectionLabel>The Research</SectionLabel>
          

          <h2 className="mb-6 max-w-[min(44rem,100%)] text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950 md:mb-8">
            <span className="tabular-nums text-violet-600">53%</span>
            {" of designers waste time dealing with miscommunications."}
          </h2>

          <div className="relative mx-auto flex w-full max-w-[min(40rem,100%)] flex-col overflow-hidden rounded-2xl border-[0.5px] border-white/70 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/35 md:max-w-[min(44rem,100%)]">
            <div
              className="pointer-events-none absolute inset-0 bg-white/50 backdrop-blur-xl"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-col gap-8 p-6 md:flex-row md:items-start md:gap-10 md:p-7">
              {/* Left: persona strip (reference-style) */}
              <div className="flex w-full shrink-0 flex-col items-center text-center md:w-[38%] md:max-w-[15.5rem]">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-violet-600">
                  Participant
                </p>
                <div className="relative mx-auto mt-4">
                  <span
                    className="pointer-events-none absolute -left-3 top-[20%] select-none text-[15px] leading-none text-violet-400/90"
                    aria-hidden
                  >
                    ✦
                  </span>
                  <span
                    className="pointer-events-none absolute -right-3 top-[20%] select-none text-[15px] leading-none text-fuchsia-400/85"
                    aria-hidden
                  >
                  </span>
                  <div className="relative h-[7.75rem] w-[7.75rem] overflow-hidden rounded-full bg-violet-600 p-[3px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] ring-2 ring-violet-200/70">
                    <div className="h-full w-full overflow-hidden rounded-full bg-zinc-100">
                      <img
                        src="/buddy/Gemini_Generated_Image_pxbxv9pxbxv9pxbx.png"
                        alt="Adam"
                        className="h-full w-full object-cover object-top contrast-[1.03]"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-base font-medium leading-tight tracking-[-0.02em] text-zinc-950 md:text-[1.05rem]">
                  Adam
                </p>
                <p className="mt-2 text-[0.72rem] leading-snug text-zinc-600 md:text-[0.75rem]">
                  31 Years Old
                </p>
                <p className="text-[0.72rem] leading-snug text-zinc-600 md:text-[0.75rem]">
                  Product Designer
                </p>
              </div>

              {/* Right: frustrations */}
              <div className="min-w-0 flex-1 border-t border-zinc-200/70 pt-6 md:border-l md:border-t-0 md:pl-9 md:pt-1">
                <h3 className="text-[0.95rem] font-medium text-zinc-950">Frustrations</h3>
                <ul className="mt-3 space-y-3 text-left text-[0.78rem] font-normal leading-relaxed text-zinc-800">
                  {[
                    "Hard to regain alignment when spoken ideas are interpreted differently by each teammate.",
                    "Little visibility into what was actually agreed on once a working session ends.",
                    "Good work still feels like it stalls when concepts are lost to misarticulation or memory.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="mt-[0.45em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-600"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35 sm:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-700/85 mb-3">
              How Might We
            </p>
            <p className="max-w-3xl text-[0.95rem] font-normal leading-relaxed text-violet-950 sm:text-[1.02rem]">
              Improve group communication by clarifying ideas visually through real-time LLM image generation?
            </p>
            <p className="mt-3 max-w-3xl text-[0.8rem] leading-relaxed text-violet-800/70">
              By implementing a technology that helps clarify ideas visually through LLM image generation.
            </p>
          </div>
        </section>

        <Divider />

        {/* THE SOLUTION */}
        <section id="the-solution" className="scroll-mt-24">
          <SectionLabel>The Solution</SectionLabel>

          <h2 className="font-mono font-medium text-[1.6rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-2">
            Conversations Made Visual
          </h2>
          <p className="text-[0.95rem] leading-[1.75] text-zinc-500 mb-10 max-w-[560px]">
            Buddy captures spoken and written input in real time, passes it through an LLM, and returns either a generated image or a structured diagram — making ideas tangible before they are forgotten.
          </p>

          <SectionLabel>Early Drawings</SectionLabel>
          <p className="mb-8 max-w-[640px] text-[0.85rem] leading-relaxed text-zinc-500">
            Sketches were translated from low-fi to high-fidelity quickly. The primary concern was how fast the full stack could be developed.
          </p>

          <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-2xl md:max-w-4xl md:grid-cols-2 md:gap-5">
            <div className="flex w-full justify-center px-2 sm:px-2.5 md:px-3">
              <ImageLightbox
                src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-0.jpg"
                alt="Early Buddy sketches — low-fi exploration"
                imgClassName={EARLY_DRAWING_IMG_CLASS}
                wrapperClassName={EARLY_DRAWING_LIGHTBOX_WRAP}
              />
            </div>
            <div className="flex w-full justify-center px-2 sm:px-2.5 md:px-3">
              <ImageLightbox
                src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-1.jpg"
                alt="Early Buddy sketches — refinement toward high-fidelity"
                imgClassName={EARLY_DRAWING_IMG_CLASS}
                wrapperClassName={EARLY_DRAWING_LIGHTBOX_WRAP}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* ENGINEERING */}
        <section id="engineering" className="scroll-mt-24">
          <SectionLabel>Engineering</SectionLabel>

          <h2 className="font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-2">
            System Creation
          </h2>
          <p className="text-[0.85rem] leading-relaxed text-zinc-500 mb-6 max-w-[640px]">
            Stack architecture and session flow diagrams produced with Gemini-assisted Mermaid in Figma.
          </p>

          <div className="mb-12 flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-x-16 lg:gap-x-20">
            <div className="flex w-full justify-center md:w-auto md:max-w-[min(280px,42vw)]">
              <div className="w-full max-w-[min(100%,260px)] sm:max-w-[min(100%,300px)]">
                <ImageLightbox
                  src="/buddy/diagram1.png"
                  alt="Buddy system architecture diagram"
                  imgClassName={BUDDY_SYSTEM_DIAGRAM_IMG_CLASS}
                  wrapperClassName={BUDDY_SYSTEM_DIAGRAM_LIGHTBOX_WRAP}
                  lightBg
                />
              </div>
            </div>
            <div className="flex w-full justify-center md:w-auto md:max-w-[min(560px,92vw)]">
              <ImageLightbox
                src="/buddy/diagram2.png"
                alt="Buddy session and convergence flow diagram"
                imgClassName={BUDDY_SYSTEM_DIAGRAM_IMG_CLASS}
                wrapperClassName={BUDDY_SYSTEM_DIAGRAM_LIGHTBOX_WRAP}
                lightBg
              />
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6">
            <CodeBlock code={CODE_SYSTEM_PROMPT} className="my-0 h-full min-h-0" />
            <CodeBlock code={CODE_PDF_EXPORT} className="my-0 h-full min-h-0" />
          </div>

          <div className="space-y-4">
            {KEY_LEARNINGS.map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-700/85 mb-3">
                  {heading}
                </p>
                <p className="text-[0.85rem] leading-relaxed text-violet-950">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* HARDWARE */}
        <section id="hardware" className="scroll-mt-24">
          <SectionLabel>Hardware</SectionLabel>

          <h2 className="font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-2">
            Progress Photos
          </h2>
          <p className="text-[0.85rem] leading-relaxed text-zinc-500 mb-8">
            Building the physical enclosure on a Raspberry Pi — hardware constraints forced architectural clarity that cloud deployment never would have.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
            <ProjectGalleryRow
              images={HARDWARE_PROGRESS_GALLERY}
              theme="violet"
              glassVariant="liquid"
              frameSize="compact"
              className="my-0 min-w-0"
            />
            <ProjectGalleryRow
              images={FINAL_GALLERY}
              theme="violet"
              glassVariant="liquid"
              frameSize="compact"
              className="my-0 min-w-0"
            />
          </div>
        </section>

        <Divider />

        {/* ITERATIONS */}
        <section id="iterations" className="scroll-mt-24">
          <SectionLabel>Iterations</SectionLabel>
          <h2 className="font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-2">
            Process clips
          </h2>
          <p className="text-[0.85rem] leading-relaxed text-zinc-500 mb-8 max-w-[580px]">
            Early motion studies and build iterations captured during the project.
          </p>

          <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))] space-y-12">
            <IterationVideoFrame src="/buddy/wrHrmZ69AdkxtkdsugFkXXvlfQ.mp4" />
            <IterationVideoFrame src="/buddy/antoher.mp4" />
          </div>
        </section>

        <Divider />

        {/* FINAL PRODUCT */}
        <section id="final-product" className="scroll-mt-24">
          <SectionLabel>Final Product</SectionLabel>

          <h2 className="font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-8">
            The Finished Build
          </h2>

          <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))]">
            <ProjectGalleryRow
              images={HARDWARE_GALLERY}
              theme="violet"
              glassVariant="liquid"
              frameSize="medium"
              slidePadding="tight"
              slideImageFit="contain"
              className="my-0"
            />
          </div>
        </section>

        <Divider />

        {/* CONSIDERATIONS */}
        <section id="considerations" className="scroll-mt-24">
          <SectionLabel>Considerations</SectionLabel>

          <div className="space-y-4 mb-12">
            {REFLECTIONS.map(({ n, text }) => (
              <div
                key={n}
                className="flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35"
              >
                <span className="font-mono text-[0.75rem] font-medium text-violet-500/90 flex-shrink-0 mt-0.5">
                  {n}
                </span>
                <p className="text-[0.9rem] leading-[1.65] text-violet-950">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-[0.9rem] leading-[1.75] text-zinc-500 mb-10 max-w-[580px]">
            For the next iteration: anchor to mobile from the start, work through case usage more rigorously, and reconsider the materiality of the enclosure. Scalability should be the first question, not the last.
          </p>
        </section>

        <Divider />

        {/* BIBLIOGRAPHY */}
        <section id="bibliography" className="scroll-mt-24">
          <SectionLabel>Bibliography</SectionLabel>
          <div className="rounded-2xl bg-zinc-100/60 p-6 ring-1 ring-black/[0.05]">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 mb-5">
              Links
            </p>
            <ul className="space-y-5">
              {BIBLIOGRAPHY.map(({ cite, href, linkText }) => (
                <li
                  key={linkText}
                  className="text-[0.8rem] leading-relaxed text-zinc-500"
                >
                  {cite}{" "}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-2 hover:text-violet-900 transition-colors"
                  >
                    {linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* VIDEO */}
        <section id="video" className="scroll-mt-24">
        
        </section>

      </main>
      </div>
    </ProjectSurface>
  );
}
