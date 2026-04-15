import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Fragment, isValidElement } from "react";
import { cn } from "@/lib/cn";
import { rewriteSiteHref } from "@/lib/rewrite-site-href";
import { ProjectGalleryRow } from "@/components/project-gallery-row";
import { PersonaCards } from "@/components/persona-cards";

type MdxTheme = "dark" | "paper";

function createLink(theme: MdxTheme) {
  function LinkEl(props: ComponentPropsWithoutRef<"a">) {
    const href = rewriteSiteHref(props.href);
    return (
      <a
        {...props}
        href={href}
        className={cn(
          "underline underline-offset-[3px] transition",
          theme === "paper"
            ? "text-[#5a6648] decoration-[#5a6648]/30 hover:text-[#3d4830]"
            : "text-sky-400 decoration-sky-400/40 hover:text-sky-300"
        )}
      />
    );
  }
  return LinkEl;
}

function createImg(theme: MdxTheme) {
  function ImgEl(props: ComponentPropsWithoutRef<"img">) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        alt={props.alt ?? ""}
        className={cn(
          "my-6 h-auto w-full",
          theme === "paper"
            ? "rounded-xl shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
            : "rounded-lg border border-white/10"
        )}
      />
    );
  }
  return ImgEl;
}

/**
 * Drill into a React element tree to find an image src.
 * MDX uses custom `img` (function type) with `src` on props, not DOM `"img"`.
 */
function extractImgSrc(node: ReactNode): string | null {
  if (node == null || node === false) return null;
  if (typeof node === "string" || typeof node === "number") return null;
  if (Array.isArray(node)) {
    for (const n of node) {
      const found = extractImgSrc(n);
      if (found) return found;
    }
    return null;
  }
  if (!isValidElement(node)) return null;
  const el = node as React.ReactElement<{ src?: string; children?: ReactNode }>;
  if (typeof el.props?.src === "string" && el.props.src.length > 0) return el.props.src;
  if (el.type === "img") return el.props.src ?? null;
  const kids = el.props.children;
  if (kids == null) return null;
  const unwrap =
    typeof el.type === "string" &&
    ["p", "a", "span", "div", "figure", "picture"].includes(el.type);
  const unwrapFn = typeof el.type === "function";
  if (unwrap || unwrapFn) return extractImgSrc(kids);
  return null;
}

/** Unwrap React fragments so `ul` sees one entry per list item. */
function flattenUlChildren(children: ReactNode): ReactNode[] {
  const raw = Array.isArray(children) ? children : [children];
  const out: ReactNode[] = [];
  for (const c of raw) {
    if (c == null || c === false) continue;
    // MDX/React can emit whitespace text nodes between <li> siblings.
    // Ignore them so gallery detection doesn't fail.
    if (typeof c === "string" && c.trim().length === 0) continue;
    if (isValidElement(c) && c.type === Fragment) {
      out.push(
        ...flattenUlChildren((c.props as { children?: ReactNode }).children)
      );
    } else {
      out.push(c);
    }
  }
  return out;
}

/** Renders a list whose every item is a single image as a liquid-glass carousel. */
function createUl(theme: MdxTheme) {
  function UlEl(props: ComponentPropsWithoutRef<"ul">) {
    const items = flattenUlChildren(props.children);

    // Detect gallery: every child is a list row containing only an image
    const srcs: string[] = [];
    let isGallery = items.length >= 1;
    for (const child of items) {
      if (!isValidElement(child)) {
        isGallery = false;
        break;
      }
      const row = child as React.ReactElement<{ children?: ReactNode }>;
      const src = extractImgSrc(row.props.children);
      if (!src) {
        isGallery = false;
        break;
      }
      srcs.push(src);
    }

    if (isGallery && srcs.length >= 1) {
      return (
        <ProjectGalleryRow
          images={srcs}
          // Paper pages use Buddy-style liquid glass chrome + centered width.
          theme={theme === "paper" ? "violet" : "dark"}
          glassVariant={theme === "paper" ? "liquid" : "standard"}
          frameSize="medium"
          slideImageFit="contain"
          slidePadding="tight"
          className="mx-auto my-10 w-full max-w-[min(920px,calc(100vw-1.5rem))]"
        />
      );
    }

    // Paper theme: no bullet markers — clean prose style matching buddy
    if (theme === "paper") {
      return (
        <ul
          {...props}
          className="mb-4 list-none space-y-2 pl-0 text-zinc-600"
        />
      );
    }

    return (
      <ul
        {...props}
        className={cn(
          "mb-4 space-y-2 pl-5 text-zinc-300",
          "[&>li]:relative [&>li]:before:absolute [&>li]:before:-left-4 [&>li]:before:top-[0.6em] [&>li]:before:h-1 [&>li]:before:w-1 [&>li]:before:rounded-full [&>li]:before:bg-zinc-500"
        )}
      />
    );
  }
  return UlEl;
}

export function createMdxComponents(theme: MdxTheme) {
  const isPaper = theme === "paper";
  return {
    a: createLink(theme),
    img: createImg(theme),
    ul: createUl(theme),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        {...props}
        className={cn(
          "mb-4 list-inside list-decimal space-y-2",
          isPaper ? "text-zinc-600" : "text-zinc-300"
        )}
      />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li {...props} className="leading-relaxed" />
    ),
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        {...props}
        className={cn(
          "mb-3 mt-0 font-mono text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]",
          isPaper ? "text-zinc-950" : "text-white"
        )}
      />
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => {
      // Derive an id from the heading text so H2s become scroll-spy anchors.
      const raw = Array.isArray(children)
        ? children.filter((c) => typeof c === "string").join("")
        : typeof children === "string"
          ? children
          : "";
      const id = raw
        ? raw.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
        : undefined;
      return (
        <div className="mt-14 mb-1">
          <div className="mb-8 h-px w-full bg-zinc-200/50" />
          {/* Section label — buddy-style small uppercase marker */}
          {isPaper && raw && (
            <p className="mb-3 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-[#A0A0A0]">
              {raw}
            </p>
          )}
          <h2
            id={id}
            {...props}
            className={cn(
              "mb-4 mt-0 scroll-mt-24 text-[1.35rem] font-medium leading-[1.25] tracking-[-0.02em]",
              isPaper ? "text-zinc-950" : "text-white"
            )}
          >
            {children}
          </h2>
        </div>
      );
    },
    h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => {
      const raw = Array.isArray(children)
        ? children.filter((c) => typeof c === "string").join("")
        : typeof children === "string"
          ? children
          : "";
      const id = raw
        ? raw.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
        : undefined;
      return (
        <h3
          id={id}
          {...props}
          className={cn(
            "mb-2 mt-8 scroll-mt-24 font-mono text-[0.9rem] font-semibold uppercase tracking-[0.1em]",
            isPaper ? "text-[#5a6648]" : "text-zinc-300"
          )}
        >
          {children}
        </h3>
      );
    },
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
      <h4
        {...props}
        className={cn(
          "mb-2 mt-6 text-base font-semibold",
          isPaper ? "text-zinc-800" : "text-zinc-200"
        )}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p
        {...props}
        className={cn(
          "mb-4 text-[0.95rem] leading-[1.75]",
          isPaper ? "text-zinc-600" : "text-zinc-300"
        )}
      />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong
        {...props}
        className={cn("font-semibold", isPaper ? "text-zinc-900" : "text-zinc-100")}
      />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        {...props}
        className={cn(
          "my-6 border-l-2 pl-5 italic",
          isPaper
            ? "border-[#5a6648]/40 text-zinc-500"
            : "border-white/20 text-zinc-400"
        )}
      />
    ),
    hr: () => (
      <hr
        className={cn(
          "my-12 border-0 h-px",
          isPaper ? "bg-zinc-200" : "bg-white/10"
        )}
      />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code
        {...props}
        className={cn(
          "rounded px-1.5 py-0.5 font-mono text-[0.88em]",
          isPaper
            ? "bg-[#5a6648]/[0.08] text-[#3d4830]"
            : "bg-white/10 text-zinc-200"
        )}
      />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre
        {...props}
        className={cn(
          "my-6 overflow-x-auto rounded-xl p-4 font-mono text-sm",
          isPaper
            ? "border border-zinc-200 bg-zinc-50 text-zinc-800 shadow-sm"
            : "border border-white/10 bg-black/40 text-zinc-200"
        )}
      />
    ),
    // Custom element: <persona-cards personas='[...]' hmw="..." hmw-answer="...">
    "persona-cards": (props: Record<string, string>) => <PersonaCards {...(props as Parameters<typeof PersonaCards>[0])} />,
  };
}

export const mdxComponents = createMdxComponents("dark");
export const projectMdxComponents = createMdxComponents("paper");
