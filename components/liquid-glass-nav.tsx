"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
] as const;

const spring = { type: "spring", stiffness: 420, damping: 22 } as const;

function workRouteActive(path: string) {
  if (path.startsWith("/work")) return true;
  return ["/branding", "/product-design", "/architecture"].includes(path);
}

/** Scroll so anchor sits below the fixed nav (breadcrumb stays visible). */
function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = window.matchMedia("(min-width: 768px)").matches ? 104 : 88;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function LiquidGlassNav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isDark      = pathname.startsWith("/work/fither") || pathname === "/orb";
  const isLiveTool  = pathname === "/teatimer" || pathname === "/orb" || pathname.startsWith("/work/fither");

  const [isCollapsed, setIsCollapsed] = useState(false);
  // Lets the nav-section show once the expand animation finishes
  // (overflow stays hidden while the width animates).
  const [navOverflowVisible, setNavOverflowVisible] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleCollapse = (delay: number) => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    collapseTimer.current = setTimeout(() => setIsCollapsed(true), delay);
  };

  useEffect(() => {
    if (!isLiveTool) {
      if (collapseTimer.current) clearTimeout(collapseTimer.current);
      setIsCollapsed(false);
      return;
    }
    setIsCollapsed(false);
    scheduleCollapse(2400);
    return () => {
      if (collapseTimer.current) clearTimeout(collapseTimer.current);
    };
  }, [isLiveTool]);

  /** On a live tool, clicking the shrunken pill re-opens the full menu for 4s. */
  const handleBrandClick = (e: React.MouseEvent) => {
    if (isLiveTool && isCollapsed) {
      e.preventDefault();
      setIsCollapsed(false);
      scheduleCollapse(4000);
    }
  };

  useEffect(() => {
    if (pathname !== "/") return;
    const scrollFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === "product-design" || hash === "retro-computer") {
        requestAnimationFrame(() => scrollToAnchor(hash));
      }
    };
    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [pathname]);

  // Collapsing the nav (live tools) must re-clip the section before it animates closed.
  useEffect(() => {
    if (isCollapsed) setNavOverflowVisible(false);
  }, [isCollapsed]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/work") return workRouteActive(pathname);
    return pathname === href;
  };

  const linkBase = isDark
    ? "text-white/75 hover:text-white"
    : "text-[rgb(30,26,21)]/70 hover:text-[rgb(30,26,21)]";

  // Soft glass press — barely-there wash, no hard outline.
  const linkHover = isDark
    ? "hover:bg-white/[0.035]"
    : "hover:bg-black/[0.02]";

  const linkActive = isDark
    ? "bg-white/[0.05] text-white"
    : "bg-black/[0.028] text-[rgb(30,26,21)]";

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-[100] flex px-3 md:top-[calc(env(safe-area-inset-top)+1.25rem)]",
        isCollapsed ? "justify-start" : "justify-center"
      )}
      aria-label="Site navigation"
    >
      <motion.div
        layout
        className={cn("pointer-events-auto relative", isCollapsed ? "" : "w-full max-w-[min(800px,96vw)]")}
        initial={{ opacity: 0, y: reduced ? 0 : -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          layout:  { duration: reduced ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] },
          default: { duration: reduced ? 0 : 0.55, ease: [0.23, 1, 0.32, 1] },
        }}
      >
        {/* ── Nav pill ─────────────────────────────────────────────────────── */}

        {/* Frosted white shell */}
        <div className="relative rounded-full">
          {/* Bar */}
          <div
            className={cn(
              "relative isolate overflow-hidden rounded-full border",
              isDark
                ? "liquid-glass-surface-dark"
                : "liquid-glass-surface"
            )}
          >
            <motion.div layout transition={{ layout: { duration: reduced ? 0 : 0.55, ease: [0.23, 1, 0.32, 1] } }} className="relative flex min-w-0 items-center gap-0 px-3 py-2 md:px-6 md:py-2.5">
              {/* Brand wordmark */}
              <Link href="/" onClick={handleBrandClick} aria-label="Home, Failenn Aselta" className="shrink-0 inline-block text-center leading-[1.15] md:leading-[1.2]">
                <motion.span whileHover={reduced ? {} : { scale: 1.03, y: -1 }} whileTap={reduced ? {} : { scale: 0.96 }} transition={spring} className="block text-center">
                  <span data-intro-name className={cn("block font-mono text-[10px] font-semibold tracking-[0.06em] sm:text-[11px] sm:tracking-[0.08em] md:text-[13px] md:tracking-[0.09em]", isDark ? "text-white/95" : "text-[rgb(30,26,21)]")}>
                    failenn aselta
                  </span>
                  <span
                    className={cn(
                      "block font-sans text-[8px] italic tracking-[0.03em] sm:text-[9px] md:text-[10px] md:tracking-[0.04em]",
                      isDark ? "text-white/50" : "text-[rgb(30,26,21)]/55",
                    )}
                  >
                    Product Designer + Code
                  </span>
                </motion.span>
              </Link>

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    key="nav-section"
                    className={cn("flex min-w-0 flex-1 items-center", (navOverflowVisible || !isLiveTool) ? "overflow-visible" : "overflow-hidden")}
                    initial={{ maxWidth: 0, opacity: 0 }}
                    animate={{ maxWidth: 700, opacity: 1 }}
                    exit={{ maxWidth: 0, opacity: 0 }}
                    transition={{
                      maxWidth: { duration: reduced ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] },
                      opacity:  { duration: reduced ? 0 : 0.3 },
                    }}
                    onAnimationComplete={() => { if (!isCollapsed) setNavOverflowVisible(true); }}
                  >
              {/* Nav links — all 4 gaps (edge↔links↔edge) are equal via justify-evenly */}
              <nav className="flex min-w-0 flex-1 items-center justify-evenly" aria-label="Primary">
                {LINKS.map(({ href, label }, i) => {
                  const active = isActive(href);
                  const isWork = href === "/work";
                  return (
                    <motion.div
                      key={href}
                      className="relative shrink-0"
                      initial={reduced ? false : { opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={reduced ? {} : { scale: 1.02 }}
                      whileTap={reduced ? {} : { scale: 0.97 }}
                      transition={{
                        opacity: { duration: 0.3, ease: "easeOut", delay: 0.2 + 0.07 * i },
                        y: { duration: 0.3, ease: "easeOut", delay: 0.2 + 0.07 * i },
                        scale: spring,
                      }}
                    >
                      <Link
                        href={isWork ? (pathname === "/" ? "#retro-computer" : "/#retro-computer") : href}
                        aria-current={active ? "page" : undefined}
                        onClick={isWork ? (e) => {
                          if (pathname !== "/") return;
                          e.preventDefault();
                          scrollToAnchor("retro-computer");
                          window.history.replaceState(null, "", "#retro-computer");
                        } : undefined}
                        className={cn(
                          "flex items-center justify-center whitespace-nowrap font-mono text-[9px] lowercase tracking-[0.11em] transition-[color,box-shadow,background-color] duration-150 sm:text-[10px] sm:tracking-[0.13em] md:text-[12px] md:tracking-[0.18em]",
                          linkBase,
                        )}
                      >
                        <span className={cn(
                          "rounded-full px-4 py-1.5 transition-[color,box-shadow,background-color] duration-150 sm:px-4.5 sm:py-1.5 md:px-5 md:py-2",
                          linkHover,
                          active && linkActive
                        )}>
                          {label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

      </motion.div>
    </header>
  );
}
