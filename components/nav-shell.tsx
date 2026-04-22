"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LiquidGlassNav } from "@/components/liquid-glass-nav";
import { MobileHamburgerNav } from "@/components/mobile-hamburger-nav";
import { cn } from "@/lib/cn";

/**
 * Full-bleed routes: nav floats over content (no top padding).
 */
function isFullBleed(pathname: string) {
  return pathname === "/";
}

export function NavShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullBleed = isFullBleed(pathname);
  const fitherBg = pathname.startsWith("/work/fither");

  return (
    <>
      <div className="hidden md:block">
        <LiquidGlassNav />
      </div>
      <div className="md:hidden">
        <MobileHamburgerNav />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "relative z-[1] flex min-h-full flex-1 flex-col",
            !fullBleed && "pt-[4rem] md:pt-[5rem]",
            fitherBg && "fither-page-canvas min-h-[100dvh]"
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
