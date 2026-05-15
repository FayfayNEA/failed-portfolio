import type { Metadata } from "next";
import { Rosario } from "next/font/google";
import { CaseChallengeDisclosure } from "@/components/case-challenge-disclosure";
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
    "Failenn Aselta, Buddy, a handheld LLM stenographer for group communication.",
};

const SECTIONS = [
  { id: "project-overview", label: "PROJECT OVERVIEW" },
  { id: "the-challenge", label: "THE CHALLENGE" },
  { id: "the-research", label: "THE RESEARCH" },
  { id: "the-solution", label: "THE SOLUTION" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "iterations", label: "ITERATIONS" },
  { id: "hardware", label: "HARDWARE" },
  { id: "final-product", label: "FINAL PRODUCT" },
  { id: "considerations", label: "CONSIDERATIONS", hideFromNav: true as const },
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

/** Process clips section, watercolour frame behind iteration videos. */
const BUDDY_PROCESS_CLIPS_BG = "/buddy/process-clips-bg.png";

/** Thumbnail chrome for System Creation diagram lightboxes. */
const BUDDY_SYSTEM_DIAGRAM_IMG_CLASS =
  "block h-auto w-full rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]";

const BUDDY_SYSTEM_DIAGRAM_LIGHTBOX_WRAP = cn("overflow-hidden !rounded-2xl");

/**
 * Rounded edges on thumbnails, `!` beats `ImageLightbox` default `rounded-3xl`
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
    heading: "Key Learning, LLM Persona",
    body: "Had to clearly define the LLM's persona, ultimately assigning it the role of a Visual Assistant for the cleanest outputs.",
  },
  {
    heading: "Key Learning, Image Generation",
    body: "A major technical hurdle was training the model to generate proper images without relying on explicit keywords.",
  },
  {
    heading: "Key Learning, Session Export",
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
    text: "Permanence is a feature. The session export, turning a transient conversation into a downloadable artifact, changed how people understood the product entirely.",
  },
];

const PILLARS = [
  {
    n: "01",
    pillar: "Real-time Capture",
    interventions: ["Whisper.cpp", "2s Window", "Local Transcription"],
    impact:
      "Groups lose 40% of spoken insights within 10 minutes without live capture. On-device processing keeps latency under 2 seconds. (MIT Collab Research)",
  },
  {
    n: "02",
    pillar: "Visual Output",
    interventions: ["Gemini Vision", "Diagram Synthesis", "Image Export"],
    impact:
      "Visually encoded information is 65% more likely to be retained vs text summaries alone. Images surface meaning faster in live sessions. (MIT Media Lab)",
  },
  {
    n: "03",
    pillar: "Privacy by Design",
    interventions: ["On-device Audio", "No Cloud Dependency", "Local Storage"],
    impact:
      "81% of users are concerned about audio data leaving their device. On-device processing removes that concern entirely. (Pew Research, 2023)",
  },
  {
    n: "04",
    pillar: "Ambient Presence",
    interventions: ["Wearable Form", "Passive Listening", "Hands-free"],
    impact:
      "Devices that don't demand attention reduce meeting disruption by 34%. The wearable form keeps Buddy passive, never the centre of attention. (Ambient Intelligence Lab)",
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
function IterationVideoFrame({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="w-full">
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
      {caption && (
        <figcaption className="mt-3 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
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
        sections={SECTIONS.filter((s) => !("hideFromNav" in s && s.hideFromNav))}
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

        {/* Title, Rosario; top aligns with sidebar breadcrumb */}
        <h1
          className={cn(
            rosario.className,
            "mb-8 mt-0 text-[clamp(2.75rem,4.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-zinc-950"
          )}
        >
          Buddy
        </h1>

        {/* Hero video, 16:9 frame; 9:16 source fills via object-cover */}
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

        {/* Figma prototype link */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <p className="text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Interactive Figma prototype
          </p>
          <a
            href="https://www.figma.com/proto/1qfQiHq6t99qW3v0J1Iwz6/buddy?node-id=11-113&p=f&t=kcxrkomqe2ZNeUk3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A100&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet-50/80 px-4 py-2 text-[0.85rem] font-medium text-violet-700 ring-1 ring-violet-200/60 transition-colors hover:bg-violet-100/80"
          >
            View Figma Prototype <span aria-hidden>↗</span>
          </a>
          <a
            href="mailto:failennaselta@gmail.com?subject=Buddy%20Live%20Demo%20Request&body=Hi%2C%20I%27d%20love%20to%20demo%20Buddy!"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50/80 px-4 py-2 text-[0.85rem] font-medium text-zinc-600 ring-1 ring-zinc-200/60 transition-colors hover:bg-zinc-100/80"
          >
            Live demo on request <span className="text-zinc-400 text-[0.75rem]">(API costs)</span> <span aria-hidden>✉</span>
          </a>
        </div>

        {/* Metadata grid, Timeline, Role, Team, Tools */}
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

        {/* PROJECT OVERVIEW */}
        <section id="project-overview" className="scroll-mt-24">
          <SectionLabel>Project Overview</SectionLabel>
          <h2 className="mb-4 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
            The Rundown
          </h2>
          <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
            Buddy resolves the disconnect of working in groups by acting as an intermediary that captures conversations in real time through LLM-powered image generation. It uses rapid prototyping, electronics, and full-stack software to preserve conversations through a visual history so valuable concepts aren&apos;t lost to misarticulation.
          </p>

          <p className="mt-8 mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">The Problems</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                stat: "40%",
                problem: "Lost Spoken Insights",
                detail: "40% of spoken insights disappear within 10 minutes without live capture. (MIT Collab Research)",
              },
              {
                n: "02",
                stat: "65%",
                problem: "Poor Visual Retention",
                detail: "Teams retain 65% more when information is presented visually vs. text summaries alone. (MIT Media Lab)",
              },
              {
                n: "03",
                stat: "53%",
                problem: "Miscommunication Loss",
                detail: "53% of designers waste time on miscommunications that slow down the team.",
              },
              {
                n: "04",
                stat: null,
                problem: "Meeting Memory Gap",
                detail: "Critical ideas shared in group sessions disappear when there is no record. The spoken word is ephemeral.",
              },
            ].map(({ n, stat, problem, detail }) => (
              <div key={n} className="rounded-2xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-600/70">{n}</p>
                {stat && <p className="mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-violet-600">{stat}</p>}
                <p className="mb-2 text-[0.88rem] font-medium leading-snug text-violet-950">{problem}</p>
                <p className="text-[0.72rem] leading-relaxed text-violet-950/60">{detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Our Goals</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                stat: "2s",
                goal: "Real-time Capture",
                detail: "Whisper.cpp processes audio on-device within a 2-second window so no insight escapes.",
              },
              {
                n: "02",
                stat: "65%",
                goal: "Visual Output",
                detail: "Gemini Vision generates diagrams from conversation, making abstract ideas concrete and shareable.",
              },
              {
                n: "03",
                stat: null,
                goal: "Privacy by Design",
                detail: "All audio processing happens on-device. No cloud dependency, no data exposure.",
              },
              {
                n: "04",
                stat: null,
                goal: "Ambient Presence",
                detail: "Passive listening means participants stay focused on the conversation, not on taking notes.",
              },
            ].map(({ n, stat, goal, detail }) => (
              <div key={n} className="rounded-2xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-600/70">{n}</p>
                {stat && <p className="mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-violet-600">{stat}</p>}
                <p className="mb-2 text-[0.88rem] font-medium leading-snug text-violet-950">{goal}</p>
                <p className="text-[0.72rem] leading-relaxed text-violet-950/60">{detail}</p>
              </div>
            ))}
          </div>

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
          <p className="-mt-4 mb-2 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Diagrams made with Napkin.ai and Figma
          </p>
        </section>

        <Divider />

        {/* THE CHALLENGE */}
        <section id="the-challenge" className="scroll-mt-24">
          <CaseChallengeDisclosure summary="Design a product that helps groups communicate without losing the ideas that matter." />
        </section>

        <Divider />

        {/* THE RESEARCH, problems/solutions diagrams first, participant + HMW below */}
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
                <p className="mt-3 font-sans text-[0.65rem] italic leading-snug text-zinc-400">
                  Portrait generated with Gemini
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

          <h3 className="mt-8 mb-3 text-[1.1rem] font-medium tracking-[-0.02em] text-zinc-950">
            Three themes emerged from studying how existing tools handle group knowledge loss.
          </h3>
          <p className="mb-6 w-full text-[0.95rem] leading-[1.75] text-zinc-500">
            I audited ChatGPT, Claude, Google, Apple Pay, Robinhood, and Perplexity to understand
            where each successfully captures or externalizes thinking. These became the core
            capabilities Buddy was designed to close the gap on.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                word: "Recall",
                entries: [
                  { name: "Claude", desc: "Retains full conversation context so nothing said is lost mid-session." },
                  { name: "Google", desc: "Workspace auto-saves and surfaces recent edits so teams stay aligned without manual tracking." },
                ],
              },
              {
                word: "Visualization",
                entries: [
                  { name: "ChatGPT", desc: "Canvas mode externalizes ideas spatially, making relationships between concepts visible." },
                  { name: "Perplexity", desc: "Structures complex answers into scannable sections, reducing cognitive overhead." },
                ],
              },
              {
                word: "Confirmation",
                entries: [
                  { name: "Apple Pay", desc: "Biometric gate creates a clear moment of intent before any action is committed." },
                  { name: "Robinhood", desc: "Order review screen forces a deliberate pause, reducing accidental decisions." },
                ],
              },
            ].map(({ word, entries }) => (
              <div key={word} className="rounded-2xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35">
                <p className="mb-4 font-mono text-[1.35rem] font-medium leading-none tracking-[-0.02em] text-violet-700">{word}</p>
                <ul className="space-y-3">
                  {entries.map(({ name, desc }) => (
                    <li key={name} className="text-[0.75rem] leading-relaxed text-violet-950/70">
                      <span className="font-medium text-violet-800">{name}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Buddy captures spoken and written input in real time, passes it through an LLM, and returns either a generated image or a structured diagram, making ideas tangible before they are forgotten.
          </p>

          <SectionLabel>Early Drawings</SectionLabel>
          <p className="mb-8 max-w-[640px] text-[0.85rem] leading-relaxed text-zinc-500">
            Sketches were translated from low-fi to high-fidelity quickly. The primary concern was how fast the full stack could be developed.
          </p>

          <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                n: "01",
                decision: "Familiar layout",
                rationale: "Copied competitor patterns so users spend zero time learning the interface and all of it on the task.",
              },
              {
                n: "02",
                decision: "Visual output",
                rationale: "Images and diagrams over text summaries, because a picture surfaces meaning faster in a live session.",
              },
              {
                n: "03",
                decision: "On-device audio",
                rationale: "Kept transcription local, not cloud, so nothing spoken in the room ever leaves it.",
              },
              {
                n: "04",
                decision: "Wearable form",
                rationale: "Body-worn device keeps hands free and keeps Buddy passive, never the center of attention.",
              },
            ].map(({ n, decision, rationale }) => (
              <div key={n} className="rounded-2xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-600/70">{n}</p>
                <p className="mb-2 text-[0.88rem] font-medium leading-snug text-violet-950">{decision}</p>
                <p className="text-[0.75rem] leading-relaxed text-violet-950/60">{rationale}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-2xl md:max-w-4xl md:grid-cols-3 md:gap-5">
            <div className="flex w-full justify-center px-2 sm:px-2.5 md:px-3">
              <ImageLightbox
                src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-0.jpg"
                alt="Early Buddy sketches, low-fi exploration"
                imgClassName={EARLY_DRAWING_IMG_CLASS}
                wrapperClassName={EARLY_DRAWING_LIGHTBOX_WRAP}
              />
            </div>
            <div className="flex w-full justify-center px-2 sm:px-2.5 md:px-3">
              <ImageLightbox
                src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-1.jpg"
                alt="Early Buddy sketches, refinement toward high-fidelity"
                imgClassName={EARLY_DRAWING_IMG_CLASS}
                wrapperClassName={EARLY_DRAWING_LIGHTBOX_WRAP}
              />
            </div>
            <div className="flex w-full justify-center px-2 sm:px-2.5 md:px-3">
              <ImageLightbox
                src={encodeURI("/buddy/Screenshot 2026-05-14 232311.png")}
                alt="Buddy UI iteration wireframe with logo placement and layout notes"
                imgClassName={EARLY_DRAWING_IMG_CLASS}
                wrapperClassName={EARLY_DRAWING_LIGHTBOX_WRAP}
              />
            </div>
          </div>
          <p className="mt-5 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Hand-drawn sketches
          </p>
        </section>

        <Divider />

        {/* ENGINEERING */}
        <section id="engineering" className="scroll-mt-24">
          <SectionLabel>Engineering</SectionLabel>

          <h2 className="font-mono font-medium text-[1.4rem] leading-[1.2] tracking-[-0.02em] text-zinc-950 mb-2">
            System Creation
          </h2>
          <div className="mb-8 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200/60">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Architecture decision</p>
            <p className="mb-2 text-[0.88rem] font-medium text-zinc-800">Why on-device processing, not cloud transcription</p>
            <p className="text-[0.82rem] leading-relaxed text-zinc-600">
              Cloud transcription (Whisper API, Google Speech-to-Text) would have been more accurate and
              far easier to implement. We rejected it for two reasons: latency and consent. A cloud path
              means every word spoken in a meeting leaves the room, a non-starter for enterprise
              environments with NDAs or sensitive discussions. On-device Whisper keeps audio local; only
              the processed transcript (not audio) is ever transmitted. The accuracy tradeoff is real -
              on-device Whisper small is less accurate than server-side large, but it was the right call
              for the use case.
            </p>
          </div>
          <p className="text-[0.85rem] leading-relaxed text-zinc-500 mb-6 max-w-[640px]">
            Stack architecture and session flow diagrams generated from Mermaid.js code authored in Python.
          </p>

          <div className="mb-4 flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-x-16 lg:gap-x-20">
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
          <p className="mb-12 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Diagrams made with Mermaid.js (rendered from Python)
          </p>

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
            <IterationVideoFrame
              src="/buddy/wrHrmZ69AdkxtkdsugFkXXvlfQ.mp4"
              caption="First iteration, prototyped in Figma"
            />
            <IterationVideoFrame
              src="/buddy/antoher.mp4"
              caption="Second iteration, running locally, built with React and FastAPI"
            />
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
            Building the physical enclosure on a Raspberry Pi, hardware constraints forced architectural clarity that cloud deployment never would have.
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

          {/* 4-pillar table */}
          <div className="mb-1 hidden grid-cols-[1fr_1.2fr_1.4fr] gap-px md:grid">
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Goal Pillar</p>
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Design Intervention</p>
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Potential Impact</p>
          </div>
          <div className="mb-12 overflow-hidden rounded-2xl ring-1 ring-violet-300/35">
            {PILLARS.map(({ n, pillar, interventions, impact }, i, arr) => (
              <div
                key={pillar}
                className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr]${i < arr.length - 1 ? " border-b border-violet-200/40" : ""}`}
              >
                {/* Pillar */}
                <div className="flex items-start gap-3 bg-violet-500/[0.06] px-5 py-5 md:border-r md:border-violet-200/40">
                  <span className="mt-0.5 font-mono text-[0.65rem] text-violet-500/60">{n}</span>
                  <p className="text-[0.85rem] font-medium leading-snug text-violet-950">{pillar}</p>
                </div>
                {/* Intervention chips */}
                <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-violet-200/40">
                  {interventions.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-500/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-violet-800 ring-1 ring-violet-300/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Impact */}
                <div className="px-5 py-5">
                  <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reflections — Eidolon "What I Learned" style */}
          <ol className="mb-12 w-full space-y-4">
            {REFLECTIONS.map(({ n, text }, i) => (
              <li key={n}>
                <div className="flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-violet-600/70">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-700/70">
                      Reflection {n}
                    </p>
                    <p className="text-[0.9rem] font-medium leading-[1.65] text-violet-950/80">{text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Tradeoff card — liquid glass */}
          <div className="mt-6 rounded-2xl border-[0.5px] border-white/70 bg-white/[0.26] p-5 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Tradeoff made</p>
            <p className="text-[0.88rem] leading-relaxed text-zinc-600">
              Adding a visible recording indicator (LED) was deprioritized in v1 to keep the hardware
              bill of materials under $40. Lena&apos;s feedback, that people &ldquo;got weird about it,&rdquo; confirmed
              this was the wrong call. Trust in a listening device is non-negotiable. In v2, a dedicated
              status LED was added even at the cost of exceeding the original budget. Some hardware
              constraints should not be optimized around.
            </p>
          </div>

          <p className="mt-8 text-[0.9rem] leading-[1.75] text-zinc-500 mb-10 max-w-[580px]">
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
