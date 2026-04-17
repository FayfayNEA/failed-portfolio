"use client";

import { useCallback, useRef } from "react";

/** Fine pointer: short drag still feels intentional. */
const SWIPE_PX_FINE = 48;
/** Touch: higher bar so taps/light wobble do not advance slides; also pairs with touch-pan-y. */
const SWIPE_PX_COARSE = 72;

/**
 * Pointer-driven horizontal swipe on a carousel surface (mouse + touch).
 * Swipe left → next; swipe right → previous. Small movement → no-op (clicks unchanged).
 */
export function useCarouselSwipe(go: (dir: -1 | 1) => void, enabled: boolean) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const pointerKind = useRef<"fine" | "coarse">("fine");

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      startX.current = e.clientX;
      startY.current = e.clientY;
      pointerKind.current =
        e.pointerType === "touch" || e.pointerType === "pen" ? "coarse" : "fine";
    },
    [enabled]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled || startX.current == null || startY.current == null) return;
      if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      // Steal horizontal pans from the browser (page rubber-band / overscroll).
      if (Math.abs(dx) > Math.abs(dy) + 2 && Math.abs(dx) > 12) {
        e.preventDefault();
      }
    },
    [enabled]
  );

  const onPointerEnd = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;
      const x0 = startX.current;
      startX.current = null;
      startY.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // already released
      }
      if (x0 == null) return;
      const dx = e.clientX - x0;
      const need =
        pointerKind.current === "coarse" ? SWIPE_PX_COARSE : SWIPE_PX_FINE;
      if (Math.abs(dx) < need) return;
      go(dx < 0 ? 1 : -1);
    },
    [enabled, go]
  );

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp: onPointerEnd,
    onPointerCancel: onPointerEnd,
  };
}
