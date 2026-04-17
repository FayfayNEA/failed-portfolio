"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
  { href: "/about", label: "about" },
] as const;

const spring = { type: "spring", stiffness: 420, damping: 22 } as const;

function workRouteActive(path: string) {
  if (path.startsWith("/work")) return true;
  return ["/branding", "/product-design", "/architecture"].includes(path);
}

export function LiquidGlassNav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isDark = pathname.startsWith("/work/fither");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/work") return workRouteActive(pathname);
    return pathname === href;
  };

  const linkBase = isDark
    ? "text-white/75 hover:text-white hover:bg-white/[0.09]"
    : "text-[#5a6648]/75 hover:text-[#3d4830] hover:bg-[#5a6648]/[0.07]";

  const linkActive = isDark
    ? "bg-white/[0.1] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
    : "bg-[#5a6648]/[0.07] text-[#3d4830] shadow-[inset_0_1px_0_0_rgba(90,102,72,0.05)]";

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-[100] flex justify-center px-3 md:top-[calc(env(safe-area-inset-top)+1.25rem)]"
      aria-label="Site navigation"
    >
      {/* Whole pill slides down on mount */}
      <motion.div
        className="pointer-events-auto relative w-full max-w-[min(900px,96vw)]"
        initial={reduced ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Olive/sage rotating conic rim */}
        <div className="absolute -inset-px overflow-hidden rounded-full" aria-hidden>
          <div className="absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2">
            <div
              className="liquid-glass-nav-conic h-full w-full"
              style={{
                background: isDark
                  ? "conic-gradient(from 0deg, rgba(90,102,72,0.55), rgba(52,66,38,0.4), rgba(140,158,110,0.32), rgba(215,228,190,0.14), rgba(90,102,72,0.55))"
                  : "conic-gradient(from 0deg, rgba(90,102,72,0.22), rgba(140,158,110,0.16), rgba(255,255,255,0.45), rgba(167,185,140,0.18), rgba(90,102,72,0.22))",
              }}
            />
          </div>
        </div>

        {/* Outer glow */}
        <div className={cn("relative rounded-full p-px", isDark ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)]" : "shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]")}>
          {/* Glass pill */}
          <div className={cn("relative isolate overflow-hidden rounded-full border backdrop-blur-2xl backdrop-saturate-125", isDark ? "border-white/[0.09] bg-zinc-950/[0.48] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" : "border-black/[0.06] bg-white/[0.38] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)]")}>
            <div className={cn("pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/18 to-transparent", isDark ? "opacity-[0.22]" : "opacity-[0.35]")} aria-hidden />
            <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

            <div className="relative flex min-w-0 items-center gap-0 px-3 py-2 md:px-5 md:py-3">
              {/* Brand wordmark — smaller on narrow viewports so four nav links fit comfortably */}
              <Link
                href="/"
                aria-label="Home — Failenn Aselta"
                className="shrink-0 inline-block text-center leading-[1.15] md:leading-[1.2]"
              >
                <motion.span
                  whileHover={reduced ? {} : { scale: 1.03, y: -1 }}
                  whileTap={reduced ? {} : { scale: 0.96 }}
                  transition={spring}
                  className="block text-center"
                >
                  <span
                    className={cn(
                      "block font-mono text-[9px] font-semibold tracking-[0.06em] sm:text-[10px] sm:tracking-[0.08em] md:text-[12px] md:tracking-[0.1em]",
                      isDark ? "text-white/95" : "text-[#4a5c35]"
                    )}
                  >
                    failenn aselta
                  </span>
                  <span
                    className={cn(
                      "block font-sans text-[7.5px] italic tracking-[0.04em] sm:text-[8.5px] md:text-[10px] md:tracking-[0.05em]",
                      isDark ? "text-white/50" : "text-[#5a6648]/65"
                    )}
                  >
                    designer
                  </span>
                </motion.span>
              </Link>

              {/* Divider */}
              <span
                className={cn(
                  "mx-2 h-4 w-px shrink-0 sm:mx-2.5 sm:h-5 md:mx-4",
                  isDark ? "bg-gradient-to-b from-transparent via-white/20 to-transparent" : "bg-gradient-to-b from-transparent via-black/[0.08] to-transparent"
                )}
                aria-hidden
              />

              {/* Nav links — stagger in, spring hover */}
              <nav className="flex min-w-0 flex-1 items-center justify-around" aria-label="Primary">
                {LINKS.map(({ href, label }, i) => {
                  const active = isActive(href);
                  return (
                    <motion.div
                      key={href}
                      className="min-w-0 flex-1"
                      initial={reduced ? false : { opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={reduced ? {} : { y: -2, scale: 1.06 }}
                      whileTap={reduced ? {} : { scale: 0.93 }}
                      transition={{
                        opacity: { duration: 0.3, ease: "easeOut", delay: 0.2 + 0.07 * i },
                        y: { duration: 0.3, ease: "easeOut", delay: 0.2 + 0.07 * i },
                        scale: spring,
                      }}
                    >
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block text-center whitespace-nowrap leading-tight rounded-full px-1.5 py-1 font-mono text-[8px] uppercase tracking-[0.11em] transition-colors duration-150 sm:px-2.5 sm:py-1.5 sm:text-[9.5px] sm:tracking-[0.15em] md:px-3 md:text-[11px] md:tracking-[0.22em]",
                          linkBase,
                          active && linkActive
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
