"""Remove connected near-black background from diagram PNGs via edge flood-fill."""
from __future__ import annotations

from collections import deque

from PIL import Image


def is_near_black(r: int, g: int, b: int, thr: int = 36) -> bool:
    return r < thr and g < thr and b < thr


def edge_flood_transparent(src: str, dest: str, thr: int = 36) -> None:
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    vis = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            r, g, b, _ = px[x, y]
            if is_near_black(r, g, b, thr):
                vis[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if vis[y][x]:
                continue
            r, g, b, _ = px[x, y]
            if is_near_black(r, g, b, thr):
                vis[y][x] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        r, g, b, a = px[x, y]
        px[x, y] = (r, g, b, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if nx < 0 or nx >= w or ny < 0 or ny >= h or vis[ny][nx]:
                continue
            nr, ng, nb, _ = px[nx, ny]
            if is_near_black(nr, ng, nb, thr):
                vis[ny][nx] = True
                q.append((nx, ny))

    img.save(dest, optimize=True)


if __name__ == "__main__":
    import os

    root = os.path.join(os.path.dirname(__file__), "..", "public", "buddy")
    edge_flood_transparent(
        os.path.join(root, "research-visual-convergence.png"),
        os.path.join(root, "research-visual-convergence-alpha.png"),
        thr=38,
    )
    print("wrote research-visual-convergence-alpha.png")
