"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DEMO_URL = "https://www.meetbuddy.xyz/";
/** Let the case study paint first so the popup reads as an interruption. */
const OPEN_DELAY_MS = 700;

export function BuddyDemoInterstitial() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Fires on every visit to the case study, not once per session.
  useEffect(() => {
    const t = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the dialog while it blocks the page.
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [open, close]);

  // `open` only flips true from an effect, so there is nothing to mismatch on hydration.
  if (typeof document === "undefined") return null;

  if (!open) return null;

  // Closing unmounts immediately rather than animating out: a lingering exit node
  // is a full-screen layer that silently eats clicks on the whole page.
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 cursor-default bg-zinc-950/45 backdrop-blur-[6px]"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="buddy-demo-interstitial-title"
            tabIndex={-1}
            className="relative z-[1] w-[min(92vw,460px)] overflow-hidden rounded-2xl bg-[#faf9f7] shadow-[0_32px_90px_-24px_rgba(0,0,0,0.35)] outline-none ring-1 ring-black/[0.08]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 6 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title bar with the traffic-light close dot */}
            <div className="flex items-center gap-3 border-b border-black/[0.07] bg-black/[0.02] px-3 py-2.5">
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="group flex h-6 w-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
              >
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] leading-none ring-1 ring-inset ring-black/[0.12] transition-colors group-hover:bg-[#ff4d44]">
                  <span
                    aria-hidden
                    className="text-[7px] font-bold text-black/45 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    ✕
                  </span>
                </span>
              </button>
              <span className="font-mono text-[10px] lowercase tracking-[0.16em] text-zinc-500">
                buddy.demo
              </span>
            </div>

            <div className="px-7 pb-7 pt-8 text-center">
              <h2
                id="buddy-demo-interstitial-title"
                className="text-[1.35rem] font-semibold leading-snug tracking-[-0.01em] text-zinc-900"
              >
                Do you want to demo Buddy now!?
              </h2>

              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 font-mono text-[0.78rem] text-white outline-none transition-colors hover:bg-violet-600 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f7]"
                >
                  CLICK HERE
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-mono text-[0.78rem] text-zinc-500 outline-none transition-colors hover:bg-black/[0.04] hover:text-zinc-800 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f7]"
                >
                  No, I would like to read
                </button>
              </div>
            </div>
          </motion.div>
    </motion.div>,
    document.body
  );
}
