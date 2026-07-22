"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LiquidGlassNav } from "@/components/liquid-glass-nav";
import { MobileHamburgerNav } from "@/components/mobile-hamburger-nav";
import { cn } from "@/lib/cn";
import {
  isArchivedProductDesignPath,
  markGalleryShowAll,
} from "@/lib/gallery-show-all";

const SOCIAL_BUBBLES = [
  {
    href: "https://www.linkedin.com/in/fa%C3%ADlenn-aselta/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 translate-x-px">
        <path d="M2 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM1 6h2v9H1zM5.5 6H8v1.2C8.5 6.5 9.5 6 10.5 6c2 0 3 1.2 3 3.5V15h-2.5v-5c0-1-.4-1.6-1.2-1.6-.9 0-1.3.6-1.3 1.6v5H5.5V6z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/FayfayNEA",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    href: "https://x.com/failennaselta",
    label: "X",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path d="M9.3 7.1L14.5 1h-1.2L8.7 6.3 5 1H1l5.5 7.9L1 15h1.2l4.8-5.6L11 15h4L9.3 7.1zm-1.7 2l-.6-.8L2.4 2h2l3.7 5.3.6.8 4.9 7h-2L7.6 9z"/>
      </svg>
    ),
  },
  {
    href: "mailto:failennaselta@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <rect x="1" y="3" width="14" height="10" rx="1.5"/>
        <path d="M1 4.5l7 5 7-5"/>
      </svg>
    ),
  },
  {
    href: "/failenn-resume.pdf",
    label: "Resume",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <rect x="2" y="1" width="9" height="12" rx="1"/>
        <path d="M5 5h5M5 7.5h5M5 10h3"/>
        <path d="M11 1v3.5H14"/>
        <path d="M11 1l3 3.5"/>
      </svg>
    ),
  },
] as const;

/**
 * Full-bleed routes: nav floats over content (no top padding).
 */
function isFullBleed(pathname: string) {
  return pathname === "/" || pathname === "/teatimer" || pathname === "/orb" || pathname.startsWith("/work/fither");
}

function isLiveToolRoute(pathname: string) {
  return pathname === "/teatimer" || pathname === "/orb" || pathname.startsWith("/work/fither");
}

export function NavShell({ children }: { children: React.ReactNode }) {
  const pathname  = usePathname();
  const fullBleed = isFullBleed(pathname);
  const fitherBg  = pathname.startsWith("/work/fither");
  // Prototype HTML under /tetonic/* keeps parchment; the case study matches site canvas + Buddy sidebar.
  const tetonicProtoBg =
    pathname.startsWith("/tetonic/") && pathname !== "/tetonic";
  const liveTool  = isLiveToolRoute(pathname);

  // Live tool routes are locked to the viewport and don't scroll, so release
  // the reserved scrollbar gutter that would otherwise show a sliver of canvas.
  useEffect(() => {
    if (!liveTool) return;
    document.documentElement.classList.add("no-scroll-gutter");
    return () => document.documentElement.classList.remove("no-scroll-gutter");
  }, [liveTool]);

  // Visiting a hidden gallery project (Night Terrors, Iris, etc.) so home
  // opens "show all" when they navigate back — even on a first home visit.
  useEffect(() => {
    if (isArchivedProductDesignPath(pathname)) markGalleryShowAll();
  }, [pathname]);

  // Live Tetonic HTML prototypes only: parchment canvas for overscroll / shell match.
  useEffect(() => {
    if (!tetonicProtoBg) return;
    const root = document.documentElement;
    root.style.setProperty("--canvas", "#f5f0e6");
    root.style.setProperty("--canvas-dot", "rgba(43, 39, 31, 0.07)");
    return () => {
      root.style.removeProperty("--canvas");
      root.style.removeProperty("--canvas-dot");
    };
  }, [tetonicProtoBg]);

  return (
    <>
      <div className="hidden md:block">
        <LiquidGlassNav />
      </div>
      <div className="md:hidden">
        <MobileHamburgerNav />
      </div>

      {/* Floating social bubbles, bottom-left, desktop only — hidden on live tool pages */}
      <div className={cn("hidden fixed bottom-6 left-6 z-[90] flex-col gap-2.5", !liveTool && "md:flex")}>
        {SOCIAL_BUBBLES.map(({ href, label, icon }, i) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.5 + i * 0.08 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.93 }}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition-colors duration-150",
              "border-black/[0.07] bg-white/[0.42] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.6)]",
              "text-[#5a6648]/60 hover:text-[#3d4830] hover:bg-white/[0.58]"
            )}
          >
            {icon}
          </motion.a>
        ))}
      </div>
      {/* Mobile contact footer — hidden on live tool pages */}
      <div
        className={cn(
          "fixed bottom-0 inset-x-0 z-[90] items-center justify-around px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] border-t border-black/[0.06] bg-white/[0.55] backdrop-blur-xl backdrop-saturate-125",
          liveTool ? "hidden" : "md:hidden flex",
        )}
      >
        {SOCIAL_BUBBLES.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 text-[#5a6648]/60 active:text-[#3d4830] active:scale-95 transition-transform duration-75"
          >
            {icon}
            <span className="font-mono text-[8px] tracking-wide">{label}</span>
          </a>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
          exit={{ opacity: 1, transition: { duration: 0 } }}
          className={cn(
            "relative z-[1] flex min-h-full flex-1 flex-col",
            !fullBleed && "pt-[4rem] md:pt-[5rem]",
            !liveTool && "pb-[calc(60px+env(safe-area-inset-bottom,0px))] md:pb-0",
            liveTool && "h-[100dvh] overflow-hidden",
            fitherBg && "fither-page-canvas",
            tetonicProtoBg && "tetonic-page-canvas",
            pathname === "/teatimer" && "bg-[#faf5ee]",
            pathname === "/orb" && "bg-[#0D0D0D]",
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
