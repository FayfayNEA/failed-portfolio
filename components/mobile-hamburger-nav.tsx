"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
] as const;

function workRouteActive(path: string) {
  if (path.startsWith("/work")) return true;
  return ["/branding", "/product-design", "/architecture"].includes(path);
}

export function MobileHamburgerNav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isDark = pathname.startsWith("/work/fither") || pathname === "/orb";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Defer to avoid sync setState in effect (keeps lint happy).
    queueMicrotask(() => setOpen(false));
  }, [pathname]);

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) return;
    // iOS Safari can ignore "re-setting" the same value; toggle to force refresh.
    meta.setAttribute("content", "#e8e8e7");
    requestAnimationFrame(() => meta.setAttribute("content", "#e8e8e8"));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // iOS Safari: `overflow: hidden` on body can still rubber-band / leave visual artifacts.
    // Lock scroll by fixing the body in place, then restore scroll position on close.
    const scrollY = window.scrollY;
    const b = document.body;
    const prev = {
      position: b.style.position,
      top: b.style.top,
      left: b.style.left,
      right: b.style.right,
      width: b.style.width,
    };

    b.style.position = "fixed";
    b.style.top = `-${scrollY}px`;
    b.style.left = "0";
    b.style.right = "0";
    b.style.width = "100%";

    // Keep Safari chrome in the light theme while menu is open.
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", "#e8e8e7");
      requestAnimationFrame(() => meta.setAttribute("content", "#e8e8e8"));
    }

    return () => {
      b.style.position = prev.position;
      b.style.top = prev.top;
      b.style.left = prev.left;
      b.style.right = prev.right;
      b.style.width = prev.width;
      window.scrollTo(0, scrollY);

      // Safari sometimes keeps the UI tint from the darkest recent pixels (our overlay).
      // Reassert theme-color after close so the top/bottom bars return to canvas.
      if (meta) {
        meta.setAttribute("content", "#e8e8e7");
        requestAnimationFrame(() => meta.setAttribute("content", "#e8e8e8"));
        setTimeout(() => {
          meta.setAttribute("content", "#e8e8e7");
          requestAnimationFrame(() => meta.setAttribute("content", "#e8e8e8"));
        }, 120);
      }
    };
  }, [open]);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      if (href === "/work") return workRouteActive(pathname);
      return pathname === href;
    };
  }, [pathname]);

  const spring = { type: "spring", stiffness: 420, damping: 26, mass: 1 } as const;

  const btnBase = cn(
    "pointer-events-auto relative isolate inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-[0.5px]",
    isDark
      ? "liquid-glass-surface-dark text-white/90"
      : "liquid-glass-surface text-[rgb(30,26,21)]"
  );

  const iconLine = cn(
    "h-px w-5",
    isDark ? "bg-white/85" : "bg-[rgb(30,26,21)]/85"
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+0.75rem)] z-[100] flex justify-end px-3">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={btnBase}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block h-4 w-5" aria-hidden>
          <motion.span
            className={cn("absolute left-0 top-0", iconLine)}
            animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={reduced ? { duration: 0 } : spring}
          />
          <motion.span
            className={cn("absolute left-0 top-1/2 -translate-y-1/2", iconLine)}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.12 }}
          />
          <motion.span
            className={cn("absolute left-0 bottom-0", iconLine)}
            animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={reduced ? { duration: 0 } : spring}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-[120]"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={() => setOpen(false)}
          >
            <div
              className={cn(
                "absolute inset-0",
                // Keep this light so iOS Safari doesn't tint browser chrome dark.
                isDark ? "bg-[rgba(232,232,232,0.08)]" : "bg-[rgba(232,232,232,0.55)]"
              )}
              aria-hidden
            />

            <motion.div
              className={cn(
                "absolute right-3 top-[calc(env(safe-area-inset-top)+4rem)] w-[min(92vw,360px)] overflow-hidden rounded-2xl border-[0.5px]",
                isDark
                  ? "liquid-glass-surface-dark"
                  : "liquid-glass-surface"
              )}
              initial={reduced ? false : { opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={reduced ? { duration: 0 } : spring}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

              <div className="px-4 py-3">
                <div className={cn("text-[10px] font-mono uppercase tracking-[0.22em]", isDark ? "text-white/60" : "text-[rgb(30,26,21)]/55")}>
                  menu
                </div>
              </div>

              <nav className="px-2 pb-2" aria-label="Primary">
                {LINKS.map(({ href, label }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "block rounded-xl px-3 py-3 font-mono text-[12px] lowercase tracking-[0.22em] transition-colors",
                        isDark
                          ? "text-white/80 hover:bg-white/[0.035] active:bg-white/[0.05]"
                          : "text-[rgb(30,26,21)]/80 hover:bg-black/[0.02] active:bg-black/[0.028]",
                        active &&
                          (isDark
                            ? "bg-white/[0.05] text-white"
                            : "bg-black/[0.028] text-[rgb(30,26,21)]")
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

