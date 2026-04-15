"""Remove edge-connected near-black pixels from Buddy research PNGs (true alpha)."""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image


def remove_edge_connected_near_black(
    src: Path,
    dst: Path,
    *,
    max_channel: int = 40,
) -> None:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    raw = im.tobytes()
    pixels: list[tuple[int, int, int, int]] = [
        (raw[i], raw[i + 1], raw[i + 2], raw[i + 3])
        for i in range(0, len(raw), 4)
    ]

    def idx(x: int, y: int) -> int:
        return y * w + x

    # Only opaque near-black counts as "background fill", and we never walk through
    # already-transparent pixels — so re-running the script cannot eat interior blacks
    # through alpha holes.
    def is_opaque_near_black(i: int) -> bool:
        r, g, b, a = pixels[i]
        return a >= 200 and max(r, g, b) <= max_channel

    seen = bytearray(w * h)
    q: deque[int] = deque()

    for x in range(w):
        for y in (0, h - 1):
            i = idx(x, y)
            if is_opaque_near_black(i):
                seen[i] = 1
                q.append(i)
    for y in range(h):
        for x in (0, w - 1):
            i = idx(x, y)
            if is_opaque_near_black(i) and not seen[i]:
                seen[i] = 1
                q.append(i)

    while q:
        i = q.popleft()
        x = i % w
        y = i // w
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if nx < 0 or nx >= w or ny < 0 or ny >= h:
                continue
            j = idx(nx, ny)
            if seen[j] or not is_opaque_near_black(j):
                continue
            seen[j] = 1
            q.append(j)

    out_pixels: list[tuple[int, int, int, int]] = []
    for i, (r, g, b, a) in enumerate(pixels):
        if seen[i]:
            out_pixels.append((0, 0, 0, 0))
        else:
            out_pixels.append((r, g, b, a))

    out = Image.new("RGBA", (w, h))
    out.putdata(out_pixels)
    dst.parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "PNG", compress_level=9)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    public = root / "public" / "buddy"
    for name in ("research-items-67.png", "research-visual-convergence.png"):
        src = public / name
        if not src.exists():
            print(f"skip (missing): {src}", file=sys.stderr)
            continue
        remove_edge_connected_near_black(src, src)
        print(f"updated: {src.relative_to(root)}")


if __name__ == "__main__":
    main()
