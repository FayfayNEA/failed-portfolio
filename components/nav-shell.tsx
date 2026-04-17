"use client";

import { usePathname } from "next/navigation";
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
      <div
        className={cn(
          "relative z-[1] flex min-h-full flex-1 flex-col",
          // Nav is already offset by safe-area; keep content padding tighter on mobile.
          !fullBleed && "pt-[4rem] md:pt-[5rem]",
          fitherBg && "fither-page-canvas min-h-[100dvh]"
        )}
      >
        {children}
      </div>
    </>
  );
}
