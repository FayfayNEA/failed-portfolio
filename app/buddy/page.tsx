import type { Metadata } from "next";
import { Rosario } from "next/font/google";
import { CaseChallengeDisclosure } from "@/components/case-challenge-disclosure";
import { buildProjectBreadcrumb } from "@/components/case-breadcrumb";
import { BUDDY_VIDEO_ZOOM } from "@/lib/buddy-media";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import { ImageLightbox } from "@/components/image-lightbox";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { PersonaCards } from "@/components/persona-cards";
import { ProjectSurface } from "@/components/project-surface";
import { cn } from "@/lib/cn";
import { CategoryProjectsFooter } from "@/components/category-projects-footer";

const BUDDY_BREADCRUMB = buildProjectBreadcrumb("buddy", "product-design");

const BUDDY_DESCRIPTION =
  "created an LLM which captures group conversations as real-time images and diagrams";

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
  { id: "the-solution", label: "IDEATION" },
  { id: "user-testing", label: "USER TESTING" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "hardware", label: "HARDWARE" },
  { id: "final-product", label: "FINAL PRODUCT" },
  { id: "impact", label: "IMPACT" },
  { id: "what-i-learned", label: "WHAT I LEARNED" },
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

const SKETCH_FRAME =
  "rounded-2xl border-[0.5px] border-zinc-200/70 bg-white shadow-[0_8px_32px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]";

/** Hand-drawn iteration 1 & 2 — portrait sketch. */
const SKETCH_IMG_VERTICAL = cn(
  "mx-auto block w-full max-w-[min(100%,300px)] object-contain",
  SKETCH_FRAME,
  "aspect-[3/4] max-h-[min(72dvh,640px)]"
);

/** Iterations 3 & 4 — landscape sketches. */
const SKETCH_IMG_HORIZONTAL = cn(
  "mx-auto block h-auto w-full max-h-[min(40dvh,360px)] object-contain",
  SKETCH_FRAME,
  "aspect-[16/10]"
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
  { label: "Budget", value: "$300" },
  { label: "Team", value: "Failenn Aselta" },
  {
    label: "Tools",
    value: "Figma · Cursor · Gemini\nRaspberry Pi · React\nFastAPI · Linux",
  },
];

const ENGINEERING_DECISIONS = [
  {
    category: "Backend",
    alternatives: ["Flask", "Express", "Django", "Hono"],
    chose: "FastAPI",
    why: "Lightweight async backend; low latency between audio capture and model response mattered more than framework features",
  },
  {
    category: "Transcription",
    alternatives: ["Deepgram", "AssemblyAI", "Google STT", "AWS Transcribe"],
    chose: "Whisper",
    why: "On-device transcription kept audio in the room; nothing sent to external servers mid-session",
  },
  {
    category: "LLM",
    alternatives: ["Claude", "Gemini", "Llama", "Mistral"],
    chose: "GPT-4o",
    why: "Best at extracting a single coherent intent from messy conversational transcript",
  },
  {
    category: "Diagrams",
    alternatives: ["D3.js", "Chart.js", "Graphviz", "manual SVG"],
    chose: "Mermaid.js",
    why: "Diagrams rendered from structured code, not images; deterministic output, no generation cost",
  },
  {
    category: "Image Gen",
    alternatives: ["DALL-E", "Stability AI", "Replicate", "Midjourney API"],
    chose: "fal.ai",
    why: "Faster cold start than alternatives at the budget; non-diagram outputs needed speed, not quality headroom",
  },
];

const KEY_LEARNINGS = [
  {
    heading: "LLM Persona",
    body: "Had to clearly define the LLM's persona, ultimately assigning it the role of a Visual Assistant for the cleanest outputs.",
  },
  {
    heading: "Image Generation",
    body: "A major technical hurdle was training the model to generate proper images without relying on explicit keywords.",
  },
  {
    heading: "Session Export",
    body: "Engineered a session-commit function that dynamically zips all generated assets and transcripts into a universal PDF. Transformed a transient AI conversation into a professional leave-behind artifact.",
  },
];

const REFLECTIONS = [
  {
    n: "1",
    title: "AI latency is a trust problem, not a speed problem",
    body: "Budget is the most important constraint in any project. Things you want often have to be sacrificed just to get the product to market—and to earn enough to fund the next version.",
  },
  {
    n: "2",
    title: "Hardware constraints force architectural clarity",
    body: "Scalability should be thought about earlier. It was fun to get hardware running and learn shell scripting, but building an individual handheld for everyone at this size and scale is too expensive.",
  },
  {
    n: "3",
    title: "The form factor is part of the argument",
    body: "Complex problems often have simple solutions. It is easy to get caught up in complexity and overdesign—in the words of Mies, less is often more.",
  },
];

/** User-testing findings — drives cards, Impact stats, Considerations table, and Next Steps. */
const USER_TESTING = [
  {
    n: "01",
    stat: "64%",
    insight:
      "Said the layout was easy to understand but felt extreme to be hardware for such a simple concept.",
    action: "How do we bring this into a mobile or desktop version to save costs?",
    nextTag: "→ Next: right-size to mobile or desktop form factor",
    pillar: "Layout & Form Factor",
    interventions: ["Familiar UI", "Hardware Shell", "Iteration Dial"],
    impact:
      "said the layout was easy to understand but felt extreme as hardware for such a simple concept—mobile or desktop could reduce cost and intimidation.",
    nextLead: "Mobile or desktop form factor.",
    nextBody:
      "Bring the same layout to phone or desktop software to save costs and right-size the concept away from dedicated hardware.",
  },
  {
    n: "02",
    stat: "40%",
    insight:
      "Said it allowed them to focus on the conversation better but now worried if it was generating correctly.",
    action: "How can we monitor the images without having to backtrack?",
    nextTag: "→ Next: live generation monitor surfaced in session",
    pillar: "Ambient Capture",
    interventions: ["Passive Listening", "Whisper API", "Live Generation HUD"],
    impact:
      "said it let them focus on the conversation but worried whether output was generating correctly—monitoring images without backtracking is the next UX pass.",
    nextLead: "Live generation monitor.",
    nextBody:
      "Surface diagram and image status in session so users trust output without leaving the conversation to verify.",
  },
  {
    n: "03",
    stat: "30%",
    insight:
      "Said it helped with miscommunication as they saw what they wanted and the other person.",
    action: "Could this number get raised if we made the screen larger?",
    nextTag: "→ Next: larger shared display to raise alignment rate",
    pillar: "Visual Alignment",
    interventions: ["Diagram Mode", "fal.ai Images", "Shared Display"],
    impact:
      "said it reduced miscommunication because both parties saw the same artifact—a larger screen could raise alignment further.",
    nextLead: "Larger shared display.",
    nextBody:
      "Test screen size and placement so both people can read generated visuals without squinting or crowding the device.",
  },
  {
    n: "04",
    stat: "32%",
    insight: "Of the time, PDF generation worked perfectly—but it often cut off words.",
    action: "How do we test the backend more thoroughly?",
    nextTag: "→ Next: automated export QA before every release",
    pillar: "Session Export",
    interventions: ["PDF Export", "Mermaid.js", "FastAPI Backend"],
    impact:
      "of the time, PDF generation worked perfectly but often cut off words—backend layout QA and export tests need to run before every release.",
    nextLead: "PDF export QA.",
    nextBody:
      "Add automated export tests and layout checks so truncated words and broken pages are caught before users download.",
  },
] as const;

/** Impact hero stats (3-up, Eidolon-style — rephrased summaries, not card copy). */
const IMPACT_STATS = [
  { stat: "64%", label: "found the layout intuitive on first use" },
  { stat: "40%", label: "trusted capture enough to stop taking notes" },
  { stat: "30%", label: "said visuals aligned the room faster than talk alone" },
] as const;

const PILLARS = USER_TESTING.map(({ n, pillar, interventions, stat, impact }) => ({
  n,
  pillar,
  interventions,
  stat,
  impact,
}));

const BIBLIOGRAPHY = [
  {
    id: "bib-arias",
    cite: 'Arias, Ernesto G., and Gerhard Fischer. "Boundary Objects: Their Role in Articulating the Task at Hand and Making Information Relevant to It." International ICSC Symposium on Interactive and Collaborative Computing. University of Colorado Boulder, 2000.',
    href: "https://l3d.colorado.edu/wp-content/uploads/2016/04/icsc2000.pdf",
    linkText: "l3d.colorado.edu",
  },
  {
    id: "bib-brubaker",
    cite: 'Brubaker, E. R., S. D. Sheppard, P. J. Hinds, and M. C. Yang. "Objects of Collaboration: Roles of Objects in Spanning Knowledge Boundaries in a Design Company." 34th International Conference on Design Theory and Methodology. MIT, 2022.',
    href: "https://dspace.mit.edu/bitstream/handle/1721.1/154882/v006t06a006-detc2022-89388.pdf",
    linkText: "dspace.mit.edu",
  },
  {
    id: "bib-huang",
    cite: 'Huang, Y.-H. "Understanding the Collaboration Difficulties Between UX Designers and Developers in Agile Environments." Masters thesis, Purdue University, 2018. Documents wasted time on rework, revisions, and misaligned handoffs; aligns with ~7.5 hrs/week lost to poor communication (Grammarly / Harris Poll, 2023).',
    href: "https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=2610&context=open_access_theses",
    linkText: "docs.lib.purdue.edu",
  },
  {
    id: "bib-forrester",
    cite: 'Forrester Consulting. "The Total Economic Impact of Figma." Commissioned by Figma, 2024. Composite organization: 35% productivity gain in development; 60% faster ideation and creation workflows.',
    href: "https://www.figma.com/reports/2024-forrester-tei",
    linkText: "figma.com",
  },
  {
    id: "bib-grammarly",
    cite: 'Grammarly and The Harris Poll. "State of Business Communication." 2023. Knowledge workers lose ~7.5 hours/week to poor communication; firms with 500 employees lose $6.25M/year resolving communication issues. At 56% less meeting waste, equivalent savings ≈ $3.5M/year for the same org size.',
    href: "https://www.grammarly.com/business/business-communication-report",
    linkText: "grammarly.com",
  },
  {
    id: "bib-fellow",
    cite: 'Fellow.app. "The State of Meetings Report 2024." Survey of how teams run meetings, time spent, and productivity impact.',
    href: "https://fellow.ai/resources/state-of-meetings-2024",
    linkText: "fellow.ai",
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

/** Case-study intro copy (matches ManualProjectPage / Eidolon). */
const CASE_INTRO_H2 =
  "mb-2 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950";
const CASE_INTRO_BODY =
  "mb-8 max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600";

const OVERVIEW_SUBLABEL =
  "mt-19 mb-3 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]";

function buddyStatCard(hi: boolean) {
  return hi
    ? "rounded-2xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35"
    : "rounded-2xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125";
}

function Divider() {
  return <div className="mt-19 mb-0 h-px w-full bg-zinc-200/50" />;
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
          "border-[0.5px] border-zinc-200/70 shadow-[0_24px_72px_-24px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.05]"
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
            src={`${src}#t=0.001`}
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
        hideCaseStudyLabel
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

        {/* One-line product description; top aligns with sidebar breadcrumb */}
        <p
          className={cn(
            "mb-8 mt-0 max-w-[min(52rem,100%)] font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] font-light leading-snug tracking-[-0.01em] text-zinc-600"
          )}
        >
          {BUDDY_DESCRIPTION}
        </p>

        {/* Hero video — same contain + scale as cover image / gallery card still */}
        <div className="mb-14 flex w-full justify-center">
          <div className="aspect-video w-full max-w-[min(1280px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl bg-white shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
            <video
              controls
              playsInline
              preload="none"
              poster="/coverimages/buddy.png"
              className="h-full w-full object-cover object-center"
              src="/buddy/sequence-04.mp4"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>

        {/* Prototype + live demo links */}
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
            href="https://buddy-self.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-[0.85rem] font-semibold text-white shadow-[0_4px_16px_-4px_rgba(124,92,252,0.45)] transition-all hover:bg-violet-700 hover:shadow-[0_6px_20px_-4px_rgba(124,92,252,0.55)] hover:-translate-y-px"
          >
            Click for live demo! <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Metadata grid, Timeline, Role, Budget, Team, Tools */}
        <div className="mb-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
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
            Design a handheld device that generates real-time visuals of conversation.
          </h2>
          <p className="max-w-[min(52rem,100%)] text-[0.95rem] leading-[1.75] text-zinc-600">
            Buddy resolves the disconnect of group work by acting as an intermediary that captures conversations in real time through LLM-powered image generation. Built with rapid prototyping, electronics, and full-stack software development, it preserves discussions as a visual history and saves valuable concepts from being lost to misarticulation.
          </p>

          <p className={OVERVIEW_SUBLABEL}>The Problems</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", stat: "40%",  problem: "Lost Spoken Insights",   bibRef: "#bib-brubaker", cite: "(MIT, 2022)",         hi: false },
              { n: "02", stat: "65%",  problem: "Claim Poor Visual Retention", bibRef: "#bib-brubaker", cite: "(MIT Media Lab)", hi: false },
              {
                n: "03",
                stat: "7.5 hrs",
                problem: "Claim Time Lost to Miscommunication",
                bibRef: "#bib-huang",
                cite: "(Huang, 2018)",
                hi: true,
              },
              {
                n: "04",
                stat: "$6.25M",
                problem: "Claim Annual Miscommunication Cost",
                bibRef: "#bib-grammarly",
                cite: "(Grammarly / Harris Poll, 2023)",
                hi: false,
              },
            ].map(({ n, stat, problem, bibRef, cite, hi }) => (
              <div key={n} className={`${buddyStatCard(hi)} flex flex-col`}>
                <p className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${hi ? "text-violet-600/70" : "text-zinc-400"}`}>{n}</p>
                <p className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${hi ? "text-violet-600" : "text-zinc-700"}`}>{stat}</p>
                <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${hi ? "text-violet-950" : "text-zinc-800"}`}>{problem}</p>
                <a
                  href={bibRef}
                  className={`mt-auto shrink-0 font-mono text-[9px] font-medium tracking-[0.12em] underline underline-offset-2 transition-colors ${hi ? "text-violet-700/85 hover:text-violet-900" : "text-zinc-400/80 hover:text-zinc-600"}`}
                >
                  {cite}
                </a>
              </div>
            ))}
          </div>

          <p className={OVERVIEW_SUBLABEL}>Our Goals</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", stat: "2s",   goal: "Real-time Capture",    bibRef: "https://github.com/ggerganov/whisper.cpp", cite: "(Whisper.cpp)",       hi: true  },
              {
                n: "02",
                stat: "35%",
                goal: "Faster Mockups",
                bibRef: "#bib-forrester",
                cite: "(Forrester TEI, 2024)",
                hi: false,
              },
              {
                n: "03",
                stat: "56%",
                goal: "More Time Saved in Meetings",
                bibRef: "#bib-fellow",
                cite: "(Fellow, 2024)",
                hi: false,
              },
              {
                n: "04",
                stat: "$3.5M",
                goal: "Equivalent Money Saved in Meetings",
                bibRef: "#bib-grammarly",
                cite: "(Grammarly / Harris Poll, 2023)",
                hi: false,
              },
            ].map(({ n, stat, goal, bibRef, cite, hi }) => (
              <div key={n} className={`${buddyStatCard(hi)} flex flex-col`}>
                <p className={`mb-1 font-mono text-[9px] uppercase tracking-[0.2em] ${hi ? "text-violet-600/70" : "text-zinc-400"}`}>{n}</p>
                <p className={`mb-1 font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] ${hi ? "text-violet-600" : "text-zinc-700"}`}>{stat}</p>
                <p className={`mb-3 text-[0.88rem] font-medium leading-snug ${hi ? "text-violet-950" : "text-zinc-800"}`}>{goal}</p>
                <a
                  href={bibRef}
                  target={bibRef.startsWith("http") ? "_blank" : undefined}
                  rel={bibRef.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`mt-auto shrink-0 font-mono text-[9px] font-medium tracking-[0.12em] underline underline-offset-2 transition-colors ${hi ? "text-violet-700/85 hover:text-violet-900" : "text-zinc-400/80 hover:text-zinc-600"}`}
                >
                  {cite}
                </a>
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
          <CaseChallengeDisclosure summary="One of the largest bottlenecks in design is miscommunication, what if we could create a tool to rectify this issue?" />
          <p className="mt-5 max-w-[min(56rem,100%)] text-[1.05rem] font-normal leading-[1.55] text-zinc-800">
            We could create a tool which generates visual interpretations of conversation to allows users to surface cultural bias and reach shared understanding faster than words alone.
          </p>
        </section>

        <Divider />

        {/* THE RESEARCH, problems/solutions diagrams first, participant + HMW below */}
        <section id="the-research" className="scroll-mt-24">
          <SectionLabel>The Research</SectionLabel>
          

          <h2 className="mb-6 w-full max-w-none text-pretty text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950 md:mb-8">
            <span className="tabular-nums text-violet-600">7.5 hrs</span>
            {"\u00a0per week lost to miscommunication in knowledge work."}
          </h2>

          <PersonaCards
            className="!mt-19"
            accent="violet"
            variant="liquid"
            rightColumnHeading="Frustrations"
            personas={JSON.stringify([
              {
                name: "Adam",
                photo: "/buddy/Gemini_Generated_Image_pxbxv9pxbxv9pxbx.png",
                age: "31",
                role: "Product Designer",
                photoCaption: "Portrait generated with Gemini",
                bullets: [
                  "Hard to regain alignment when spoken ideas are interpreted differently by each teammate.",
                  "Little visibility into what was actually agreed on once a working session ends.",
                  "Good work still feels like it stalls when concepts are lost to misarticulation or memory.",
                ],
              },
            ])}
          />

          <div className="mt-19 scroll-mt-24 rounded-2xl border border-white/55 bg-white/[0.12] p-8 shadow-[0_0_28px_-10px_rgba(139,92,246,0.22),0_8px_32px_-8px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.55)] ring-[0.5px] ring-violet-300/30 backdrop-blur-xl backdrop-saturate-125 transition-shadow duration-300 hover:shadow-[0_0_72px_-6px_rgba(139,92,246,0.55),0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.55)] hover:ring-violet-300/60">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-violet-600/60">
              How Might We
            </p>
            <p className="text-[clamp(1.2rem,2.6vw,1.7rem)] font-medium leading-[1.2] tracking-[-0.03em] text-violet-700/80">
              Improve group communication by clarifying ideas visually through real-time LLM image generation?
            </p>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-violet-800/50">
              By implementing a technology that helps clarify ideas visually through LLM image generation.
            </p>
          </div>




        </section>

        <Divider />

        {/* IDEATION */}
        <section id="the-solution" className="scroll-mt-24">
          <SectionLabel>Ideation</SectionLabel>

          <h2 className="mb-2 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
            Low-Fi Wireframes
          </h2>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Early Drawings
          </p>

          <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                n: "01",
                area: "Familiar Layout",
                detail: "Zero learning curve.",
              },
              {
                n: "02",
                area: "Visual Output",
                detail: "Pictures over text.",
              },
              {
                n: "03",
                area: "On-device Audio",
                detail: "Nothing leaves the room.",
              },
              {
                n: "04",
                area: "Passive Form",
                detail: "Ambient, never the focus.",
              },
            ].map(({ n, area, detail }) => (
              <div key={n} className="rounded-2xl border border-zinc-300/60 bg-transparent p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)]">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">{n}</p>
                <p className="mb-2 text-[0.88rem] font-medium leading-snug text-zinc-950">{area}</p>
                <p className="text-[0.75rem] leading-relaxed text-zinc-600">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-[min(920px,calc(100vw-1.5rem))]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start lg:gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-600/70">
                    Iteration 1
                  </p>
                  <span className="rounded-full bg-lime-500/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-lime-700 ring-1 ring-lime-300/40">
                    Selected for construction
                  </span>
                </div>
                <ImageLightbox
                  src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-0.jpg"
                  alt="Buddy iteration 1, dial and on/off variants"
                  imgClassName={SKETCH_IMG_VERTICAL}
                  wrapperClassName="overflow-hidden !rounded-2xl"
                />
                <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Dial for changing through iterations, button for on/off on top, and version with an on/off and commit button on the front.</p>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 3</p>
                <ImageLightbox
                  src="/buddy/c2f6280b-4888-4ae9-b642-f4c0a7be4e6d-1.jpg"
                  alt="Buddy iteration 3, send button and on/off on the front"
                  imgClassName={SKETCH_IMG_HORIZONTAL}
                  wrapperClassName="overflow-hidden !rounded-2xl"
                />
                <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Send button and an on/off on the front.</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">Iteration 4</p>
                <ImageLightbox
                  src={encodeURI("/buddy/Screenshot 2026-05-14 232311.png")}
                  alt="Buddy iteration 4, basic set up with visual as main portion"
                  imgClassName={SKETCH_IMG_HORIZONTAL}
                  wrapperClassName="overflow-hidden !rounded-2xl"
                />
                <p className="text-center text-[0.72rem] leading-snug text-zinc-500">Basic set up with visual as main portion.</p>
              </div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center font-sans text-[0.72rem] italic leading-snug text-zinc-400">
            Hand-drawn sketches
          </p>

          <div className="mt-19">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Full Figma Board</p>
            <div className="overflow-hidden rounded-2xl border-[0.5px] border-white/60 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.12)]">
              <iframe
                title="Buddy Figma board"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F1qfQiHq6t99qW3v0J1Iwz6%2Fbuddy%3Fnode-id%3D0-1%26t%3Dg61S93lNRgBtflTR-1"
                className="h-[520px] w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex justify-end">
              <a
                href="https://www.figma.com/design/1qfQiHq6t99qW3v0J1Iwz6/buddy?node-id=0-1&t=g61S93lNRgBtflTR-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-violet-50/80 px-3 py-1.5 font-mono text-[0.72rem] text-violet-700 ring-1 ring-violet-200/60 transition-colors hover:bg-violet-100/80"
              >
                Open in Figma <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <h2 className="mb-8 mt-19 text-[1.35rem] font-medium tracking-[-0.02em] text-zinc-950">
            Hi-Fi Mockups
          </h2>

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

        {/* USER TESTING */}
        <section id="user-testing" className="scroll-mt-24">
          <SectionLabel>User Testing</SectionLabel>
          <h2 className={CASE_INTRO_H2}>
            Tested with a group of designers and engineers during a live working session.
          </h2>
          {/* Testing cards */}
          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-stretch sm:gap-6">
            {USER_TESTING.map(({ n, stat, insight, action, nextTag }) => (
              <div
                key={n}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.40)] ring-[0.5px] ring-black/[0.04] backdrop-blur-xl backdrop-saturate-110"
              >
                <div className="flex flex-1 flex-col bg-violet-500/[0.04] px-5 py-4">
                  <p className="text-[0.82rem] leading-[1.65] text-zinc-800">
                    <span className="mb-1.5 block font-mono text-[1.4rem] font-medium leading-none tracking-[-0.03em] text-violet-600">
                      {stat}
                    </span>
                    {insight}
                  </p>
                </div>
                <div className="mt-auto shrink-0 border-t border-white/40 bg-white/[0.22] px-5 py-4">
                  {nextTag && (
                    <p className="font-mono text-[0.7rem] tracking-[0.04em] text-violet-600/60">{nextTag.replace("→ ", "")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reactions */}
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Some thinkable quotes</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-violet-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(139,92,246,0.18)]">
              <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                &ldquo;I stopped taking notes halfway through and just focused on the convo.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-violet-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(139,92,246,0.18)]">
              <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                &ldquo;The diagram it made was close but not exactly what we were saying.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-violet-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(139,92,246,0.18)]">
              <p className="text-[0.875rem] italic leading-[1.7] text-zinc-700">
                &ldquo;I&apos;d want this on my phone so I could reference it throughout the day.&rdquo;
              </p>
            </div>
          </div>

        </section>

        <Divider />

        {/* ENGINEERING */}
        <section id="engineering" className="scroll-mt-24">
          <SectionLabel>Engineering</SectionLabel>

          <div className="mb-3 rounded-2xl border-[0.5px] border-white/70 bg-white/[0.26] p-5 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
            <p className="text-[0.88rem] font-medium text-zinc-800">How the stack works end to end</p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-zinc-600">
              Audio is captured and sent to the Whisper API for transcription. The transcript is passed to GPT-4 for
              interpretation, extracting the core idea from the conversation. Depending on the output type, either
              Mermaid.js renders a structured diagram or fal.ai generates an image. The backend runs on FastAPI, the
              frontend on Vite.
            </p>
          </div>
          <p className="text-[0.85rem] leading-relaxed text-zinc-500 mb-6 max-w-[640px]">
            Diagrams created with Mermaid.js code and Python in a Figma plugin.
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

          {/* Stack decision table — 4 columns */}
          <div className="mb-10 overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 backdrop-blur-xl">
            {/* Column headers */}
            <div className="grid border-b border-white/40" style={{ gridTemplateColumns: "140px 110px 1fr 1.6fr" }}>
              <p className="px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Category</p>
              <p className="px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Chose</p>
              <p className="px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Alternatives</p>
              <p className="px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Why</p>
            </div>
            {ENGINEERING_DECISIONS.map(({ category, alternatives, chose, why }, i, arr) => (
              <div
                key={category}
                className={`grid${i < arr.length - 1 ? " border-b border-white/40" : ""}`}
                style={{ gridTemplateColumns: "140px 110px 1fr 1.6fr" }}
              >
                {/* Category */}
                <div className="flex items-center bg-white/[0.18] px-4 py-4 border-r border-white/40">
                  <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-zinc-400">{category}</p>
                </div>
                {/* Chose */}
                <div className="flex items-center px-4 py-4 border-r border-white/40">
                  <p className="font-mono text-[0.82rem] font-semibold text-violet-600">{chose}</p>
                </div>
                {/* Alternatives */}
                <div className="flex flex-wrap content-center gap-1.5 px-4 py-4 border-r border-white/40">
                  {alternatives.map((alt) => (
                    <span key={alt} className="rounded-full bg-zinc-500/[0.07] px-2.5 py-0.5 font-mono text-[0.62rem] tracking-wide text-zinc-400 ring-1 ring-zinc-200/60">{alt}</span>
                  ))}
                </div>
                {/* Why */}
                <div className="flex items-center px-4 py-4">
                  <p className="text-[0.78rem] leading-relaxed text-zinc-500">{why}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6">
            <CodeBlock code={CODE_SYSTEM_PROMPT} className="my-0 h-full min-h-0" />
            <CodeBlock code={CODE_PDF_EXPORT} className="my-0 h-full min-h-0" />
          </div>

          <div className="mt-19 space-y-4">
            {KEY_LEARNINGS.map(({ heading, body }, i) => (
              <div
                key={heading}
                className={
                  i === 1
                    ? "rounded-xl bg-violet-500/[0.08] p-5 ring-1 ring-violet-300/35"
                    : "rounded-xl border border-white/55 bg-white/[0.14] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                }
              >
                <p className={`font-mono text-[9px] uppercase tracking-[0.18em] mb-3 ${i === 1 ? "text-violet-700/85" : "text-zinc-400"}`}>
                  {heading}
                </p>
                <p className={`text-[0.85rem] leading-relaxed ${i === 1 ? "text-violet-950" : "text-zinc-950"}`}>{body}</p>
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
            Building the physical enclosure on a Raspberry Pi, hardware constraints forced architectural clarity that cloud deployment never would have.
          </p>

          <div className="mt-19 mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
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

        {/* IMPACT */}
        <section id="impact" className="scroll-mt-24">
          <SectionLabel>Impact</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {IMPACT_STATS.map(({ stat, label }) => (
              <div
                key={stat}
                className={
                  stat === "64%"
                    ? "rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35"
                    : "rounded-2xl border border-white/55 bg-white/[0.14] p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                }
              >
                <p className="mb-1 font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] text-violet-700">
                  {stat}
                </p>
                <p
                  className={`text-[0.82rem] font-medium ${stat === "64%" ? "text-violet-950/80" : "text-zinc-600"}`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-violet-400/45 bg-transparent p-5 shadow-[0_0_24px_-10px_rgba(139,92,246,0.18)]">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-violet-600/70">Next Steps</p>
            <ol className="mt-3 space-y-2.5 text-[0.82rem] leading-relaxed text-zinc-600">
              {USER_TESTING.map(({ n, nextLead, nextBody }) => (
                <li key={n} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-violet-600">{n}</span>
                  <p>
                    <span className="font-medium text-zinc-800">{nextLead}</span> {nextBody}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Divider />

        {/* WHAT I LEARNED */}
        <section id="what-i-learned" className="scroll-mt-24">
          <SectionLabel>What I Learned</SectionLabel>
          <ol className="mt-2 w-full space-y-4">
            {REFLECTIONS.map(({ n, title, body }, i) => (
              <li key={n}>
                <div
                  className={
                    i === 1
                      ? "flex gap-5 rounded-2xl bg-violet-500/[0.08] p-6 ring-1 ring-violet-300/35"
                      : "flex gap-5 rounded-2xl border border-white/55 bg-white/[0.14] p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-[0.5px] ring-black/[0.05] backdrop-blur-xl backdrop-saturate-125"
                  }
                >
                  <span className="mt-0.5 flex-shrink-0 font-mono text-[0.75rem] font-medium text-violet-600/70">{i + 1}</span>
                  <div className="min-w-0">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-600/70">{title}</p>
                    <p className={`text-[0.9rem] font-medium leading-[1.65] ${i === 1 ? "text-violet-950/80" : "text-zinc-700"}`}>{body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* CONSIDERATIONS */}
        <section id="considerations" className="scroll-mt-24">
          <SectionLabel>Considerations</SectionLabel>

          {/* 4-pillar table */}
          <div className="mb-1 hidden grid-cols-[1fr_1.2fr_1.4fr] gap-px md:grid">
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Goal Pillar</p>
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Design Intervention</p>
            <p className="px-4 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">Impact</p>
          </div>
          <div className="mb-12 overflow-hidden rounded-2xl border-[0.5px] border-white/60 bg-white/40 backdrop-blur-xl">
            {PILLARS.map(({ n, pillar, interventions, stat, impact }, i, arr) => (
              <div
                key={pillar}
                className={`grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr_1.4fr]${i < arr.length - 1 ? " border-b border-white/40" : ""}`}
              >
                <div className="flex items-start gap-3 bg-white/[0.18] px-5 py-5 md:border-r md:border-white/40">
                  <span className="mt-0.5 font-mono text-[0.65rem] text-violet-500/60">{n}</span>
                  <p className="text-[0.85rem] font-medium leading-snug text-zinc-950">{pillar}</p>
                </div>
                <div className="flex flex-wrap content-start gap-1.5 px-5 py-5 md:border-r md:border-white/40">
                  {interventions.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-500/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-violet-800 ring-1 ring-violet-300/40">{tag}</span>
                  ))}
                </div>
                <div className="px-5 py-5">
                  <p className="mb-1.5 font-mono text-[1.25rem] font-medium leading-none tracking-[-0.03em] text-violet-600">
                    {stat}
                  </p>
                  <p className="text-[0.8rem] leading-relaxed text-zinc-600">{impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tradeoff card */}
          <div className="mt-19 rounded-2xl border-[0.5px] border-white/70 bg-white/[0.26] p-5 shadow-[0_18px_60px_-26px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.06] backdrop-blur-2xl backdrop-saturate-125">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">Tradeoff made</p>
            <div className="space-y-3 text-[0.88rem] leading-relaxed text-zinc-600">
              <p>
                The largest tradeoff was not including video. Image-generation APIs are priced per call, and
                sessions burned through credits quickly—adding live video would have overrun both budget and the
                two-week sprint. v1 stayed audio → diagram or still image → PDF export; video waits until usage
                and hardware can support it.
              </p>
              <p>
                Every hardware decision bent toward keeping the bill of materials under $300. An external battery
                replaced an internal cell—lithium cost and assembly complexity were harder to justify than a
                sealed USB pack. The Raspberry Pi was a step down from the RAM target; more memory would have
                helped concurrent transcription and generation, but unit cost had to win for v1.
              </p>
            </div>
          </div>
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
              {BIBLIOGRAPHY.map(({ id, cite, href, linkText }) => (
                <li
                  key={linkText}
                  id={id}
                  className="scroll-mt-24 text-[0.8rem] leading-relaxed text-zinc-500"
                >
                  {cite}{" "}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 underline underline-offset-2 hover:text-zinc-700 transition-colors"
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

        <CategoryProjectsFooter category="product-design" currentSlug="buddy" />

      </main>
      </div>
    </ProjectSurface>
  );
}
