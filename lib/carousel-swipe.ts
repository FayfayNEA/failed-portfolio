"use client";

import { useCallback, useRef } from "react";

const SWIPE_PX = 44;

/**
 * Pointer-driven horizontal swipe on a carousel surface (mouse + touch).
 * Swipe left → next; swipe right → previous. Small movement → no-op (clicks unchanged).
 */
export function useCarouselSwipe(go: (dir: -1 | 1) => void, enabled: boolean) {
  const startX = useRef<number | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      startX.current = e.clientX;
    },
    [enabled]
  );

  const onPointerEnd = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;
      const x0 = startX.current;
      startX.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // already released
      }
      if (x0 == null) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) < SWIPE_PX) return;
      go(dx < 0 ? 1 : -1);
    },
    [enabled, go]
  );

  return {
    onPointerDown,
    onPointerUp: onPointerEnd,
    onPointerCancel: onPointerEnd,
  };
}
