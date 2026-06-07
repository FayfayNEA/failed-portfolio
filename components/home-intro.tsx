"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * One-per-session settling animation.
 *
 * The full DesignerBio block (headline + paragraph) appears large and centered,
 * pauses in the middle of the page, then slides to its permanent bottom-left
 * position while the rest of the page fades in around it.
 *
 * Requires:
 *   - An inline <script> in app/page.tsx that sets data-intro="pending" on
 *     <html> synchronously if the session is fresh (checked via sessionStorage).
 *   - [data-intro-bio] on the DesignerBio outer div (designer-bio.tsx).
 *   - [data-intro-name] on the nav name span as fallback (liquid-glass-nav.tsx).
 *   - CSS rule in globals.css making the curtain visible when data-intro is set.
 */
export function HomeIntro() {
  const [mounted, setMounted] = useState(false);
  const curtainRef = useRef<HTMLDivElement>(null);
  const bioRef     = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!document.documentElement.hasAttribute("data-intro")) return;

    const curtain = curtainRef.current;
    const bio     = bioRef.current;
    if (!curtain || !bio) { finish(); return; }

    let pauseTimer:   ReturnType<typeof setTimeout> | undefined;
    let doneTimer:    ReturnType<typeof setTimeout> | undefined;

    const raf1 = requestAnimationFrame(() => {
      // Target: DesignerBio div (bottom-left), fall back to nav name.
      const target =
        document.querySelector<HTMLElement>("[data-intro-bio]") ??
        document.querySelector<HTMLElement>("[data-intro-name]");

      if (!target || target.getBoundingClientRect().width === 0) {
        finish();
        return;
      }

      const rect = target.getBoundingClientRect();
      const vw   = window.innerWidth;
      const vh   = window.innerHeight;

      // Center of the target element in viewport coords.
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;

      // Delta to move the overlay from its final position to viewport center.
      const dx = vw / 2 - cx;
      const dy = vh / 2 - cy;

      // Scale so the block fills ~45% of viewport height when centered.
      const scale = Math.max(2.5, (vh * 0.45) / Math.max(1, rect.height));

      // ── Phase 1: position overlay at target, transform to center ─────────
      bio.style.left   = `${rect.left}px`;
      bio.style.top    = `${rect.top}px`;
      bio.style.width  = `${rect.width}px`;
      bio.style.transition = "none";
      bio.style.transform  = `translate(${dx}px, ${dy}px) scale(${scale})`;
      bio.getBoundingClientRect(); // force reflow
      bio.style.opacity = "1";

      // ── Phase 2: hold in center for ~1500ms, then settle ─────────────────
      pauseTimer = setTimeout(() => {
        // Curtain starts fading as the block begins to move.
        curtain.style.transition = "opacity 1.0s ease";
        curtain.style.opacity    = "0";

        // Block slides to its home with a gravitational ease.
        bio.style.transition =
          "transform 1.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease 0.9s";
        bio.style.transform = "translate(0px, 0px) scale(1)";
        bio.style.opacity   = "0"; // fades as it lands

        doneTimer = setTimeout(finish, 1500);
      }, 1500);
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (pauseTimer !== undefined) clearTimeout(pauseTimer);
      if (doneTimer  !== undefined) clearTimeout(doneTimer);
    };

    function finish() {
      try { sessionStorage.setItem("intro-played", "1"); } catch {}
      document.documentElement.removeAttribute("data-intro");
      window.dispatchEvent(new CustomEvent("intro-complete"));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Curtain — canvas color, hides page content until it fades out.
          Opacity is 0 by default; globals.css forces it to 1 when
          html[data-intro="pending"] is present (set by inline script). */}
      <div
        ref={curtainRef}
        aria-hidden
        data-intro-curtain=""
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#e8e8e8",
          zIndex: 9998,
          pointerEvents: "none",
          opacity: 0,
        }}
      />

      {/* Bio overlay — mirrors the full DesignerBio block.
          JS positions it at the target's coordinates then scales+translates it
          to viewport center. Styles match DesignerBio exactly. */}
      <div
        ref={bioRef}
        aria-hidden
        style={{
          position: "fixed",
          opacity: 0,
          zIndex: 9999,
          pointerEvents: "none",
          transformOrigin: "center center",
          fontFamily: "var(--font-geist-mono, ui-monospace, monospace)",
          fontSize: "11px",
          lineHeight: "1.7",
          color: "#3f3f46",
        }}
      >
        <p style={{ margin: 0 }}>
          <span style={{ display: "block", fontSize: "17px", fontWeight: 900, color: "#09090b", lineHeight: 1, marginBottom: "2px" }}>
            Product Designer + Code.
          </span>
          Trained first in code, then in buildings,
          then in the space between a person and a screen.
          Each discipline was the same problem wearing a different material.
          Now the material is AI.
          0 →1. 1 designer who can solve any problem. {"<3"}
        </p>
      </div>
    </>,
    document.body
  );
}
