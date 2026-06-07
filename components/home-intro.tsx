"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * One-per-session settling animation.
 *
 * "failenn aselta" appears large and centered on the background, then drifts
 * to its permanent position in the nav pill while the rest of the page fades
 * in around it. The name never disappears — it settles.
 *
 * Requires:
 *   - An inline <script> in app/page.tsx that sets data-intro="pending" on
 *     <html> synchronously if the session is fresh (checked via sessionStorage).
 *   - [data-intro-name] on the nav name span (liquid-glass-nav.tsx).
 *   - CSS rule in globals.css making the curtain visible when data-intro is set.
 */
export function HomeIntro() {
  // Portal elements are client-only — render after mount.
  const [mounted, setMounted] = useState(false);
  const curtainRef = useRef<HTMLDivElement>(null);
  const nameRef    = useRef<HTMLSpanElement>(null);

  // Mount the portal after the first render.
  // useEffect (not useLayoutEffect) is fine here because the curtain color
  // matches the page background (#e8e8e8), so there is no visible flash
  // in the single frame before the portal attaches.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Run the animation once, after the portal elements are in the DOM.
  useEffect(() => {
    // Skip if the intro-check script did not set the attribute
    // (means sessionStorage already has the flag, or script was not reached).
    if (!document.documentElement.hasAttribute("data-intro")) return;

    const curtain = curtainRef.current;
    const name    = nameRef.current;
    if (!curtain || !name) { finish(); return; }

    let raf2: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    // Wait one rAF for layout (nav pill) to fully settle.
    const raf1 = requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>("[data-intro-name]");

      // No target or zero-size (mobile / nav hidden) → skip gracefully.
      if (!target || target.getBoundingClientRect().width === 0) {
        finish();
        return;
      }

      const rect = target.getBoundingClientRect();
      const vw   = window.innerWidth;
      const vh   = window.innerHeight;

      // Center of the nav name element.
      const nameCx = rect.left + rect.width  / 2;
      const nameCy = rect.top  + rect.height / 2;

      // Delta: how far the nav name center is from the viewport center.
      const dx = vw / 2 - nameCx;
      const dy = vh / 2 - nameCy;

      // Scale so the name appears ~7 vw tall on screen.
      const scale = Math.max(3, (0.07 * vw) / Math.max(1, rect.height));

      // ── Phase 1: overlay positioned exactly over nav name ────────────────
      // Apply the large+centered transform without transition first.
      name.style.left   = `${rect.left}px`;
      name.style.top    = `${rect.top}px`;
      name.style.width  = `${rect.width}px`;
      name.style.height = `${rect.height}px`;
      name.style.transition = "none";
      name.style.transform  = `translate(${dx}px, ${dy}px) scale(${scale})`;
      name.getBoundingClientRect(); // force reflow so the transform registers
      name.style.opacity = "1";

      // ── Phase 2: settle ──────────────────────────────────────────────────
      raf2 = requestAnimationFrame(() => {
        // Name drifts to nav position with gravitational ease.
        name.style.transition =
          "transform 1.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease 1.4s";
        name.style.transform = "translate(0px, 0px) scale(1)";
        name.style.opacity   = "0"; // fades out just as it arrives

        // Curtain reveals page content.
        curtain.style.transition = "opacity 1.2s ease 0.35s";
        curtain.style.opacity    = "0";

        // ── Phase 3: cleanup ─────────────────────────────────────────────
        timer = setTimeout(finish, 2000);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (raf2  !== undefined) cancelAnimationFrame(raf2);
      if (timer !== undefined) clearTimeout(timer);
    };

    function finish() {
      try { sessionStorage.setItem("intro-played", "1"); } catch {}
      document.documentElement.removeAttribute("data-intro");
      window.dispatchEvent(new CustomEvent("intro-complete"));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]); // run once after the portal is in the DOM

  if (!mounted) return null;

  return createPortal(
    <>
      {/* ── Curtain ────────────────────────────────────────────────────────
          Same color as the canvas background so the page background is always
          "visible" — this curtain IS the background until it fades. Rendered
          at opacity 0 by default; globals.css overrides to 1 when
          html[data-intro="pending"] is set by the inline script. */}
      <div
        ref={curtainRef}
        aria-hidden
        data-intro-curtain=""
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#e8e8e8", /* var(--canvas) */
          zIndex: 9998,
          pointerEvents: "none",
          opacity: 0,
        }}
      />

      {/* ── Name overlay ───────────────────────────────────────────────────
          Starts invisible; JS positions it over the nav name then applies the
          large+centered transform before making it visible. Styles match the
          nav name exactly (12 px mono, #4a5c35, tracking-[0.1em]). */}
      <span
        ref={nameRef}
        aria-hidden
        style={{
          position: "fixed",
          opacity: 0,
          zIndex: 9999,
          pointerEvents: "none",
          transformOrigin: "center center",
          fontFamily: "var(--font-geist-mono, ui-monospace, monospace)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "#4a5c35",
          whiteSpace: "nowrap",
          lineHeight: "1.15",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        failenn aselta
      </span>
    </>,
    document.body
  );
}
