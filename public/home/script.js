const ASSET_PATH = "./assets/";
const DESIGN_WIDTH = 1024;
const DESIGN_HEIGHT = 580;
const SCENE_Y_SHIFT_PERCENT = -54;
const SCENE_SHIFT_UP_PX = 120;
/** Mobile-only vertical nudge (px) to center the asset cluster */
const MOBILE_SCENE_SHIFT_DOWN_PX = 78;
/** Extra leftward shift (px) so the map isn’t clipped on the right */
const SCENE_SHIFT_LEFT_EXTRA_PX = 20;
/** Extra scale for hotspot width on mobile only (≤ MOBILE_BACKGROUND_MAX_WIDTH_PX) */
const ASSET_DISPLAY_SCALE = 1.3;

/** Background art: desktop vs narrow viewports (matches #spatial-viewport width, e.g. Framer embed) */
const BACKGROUND_DESKTOP_FILE = "background2.png";
const BACKGROUND_MOBILE_FILE = "waterfall.png";
const MOBILE_BACKGROUND_MAX_WIDTH_PX = 809;
/** DONATE fixed upper-left in design space (scales with scene) */
const DONATE_SCENE_LEFT_PX = 130;
const DONATE_SCENE_TOP_PX = 166;
const MOBILE_DONATE_LEFT_NUDGE_PX = 6;
const MOBILE_DONATE_TOP_NUDGE_PX = 8;
/** Nether portal glow/mask overlay — separate nudges from portal hotspot */
const NETHER_PORTAL_OVERLAY_TOP_DESKTOP_PX = -78;
const NETHER_PORTAL_OVERLAY_TOP_MOBILE_PX = -84;
const NETHER_PORTAL_OVERLAY_LEFT_DESKTOP_PX = 14;
/** Mobile only: mask 3px right of desktop overlay offset */
const NETHER_PORTAL_OVERLAY_LEFT_MOBILE_PX = NETHER_PORTAL_OVERLAY_LEFT_DESKTOP_PX + 3;

/** Same-origin paths so the spatial map works on this Next.js site (iframe + target=_top). */
const SITE_PATH_PREFIX = "";
const WORK_PAGE_HREF = `${SITE_PATH_PREFIX}/work`;

// Mobile shows persistent labels under assets (see CSS @media hover:none).
// Avoid repeating generic labels like "Work" multiple times.
const renderedPersistentLabels = new Set();

const portfolioAssets = [
  { name: "Jaguar", filename: "panther reflection.png", link: "about", hoverLabel: "About" },
  { name: "Rocks_Foliage", filename: "glowing tablet.png", noLink: true },
  {
    name: "Concrete_Block",
    filename: "colored block.png",
    href: WORK_PAGE_HREF,
    hoverLabel: "Work"
  },
  {
    name: "Large_Tree",
    filename: "bush tree.png",
    href: WORK_PAGE_HREF,
    hoverLabel: "Work"
  },
  {
    name: "Computer2",
    filename: "computer2.png",
    href: WORK_PAGE_HREF,
    hoverLabel: "Work"
  },
  { name: "Radio", filename: "radio color.png", link: "contact", hoverLabel: "Contact" },
  { name: "Orb", filename: "orb.png", cursorFollow: true },
  { name: "Screen_Tablet", filename: "glowing tablet.png", noLink: true },
  { name: "Nether_Portal", filename: "nether portal.png", noLink: true },
  { name: "Money_Tree", filename: "colored money tree.png", noLink: true }
];

// Jaguar, Rocks_Foliage, Concrete_Block, Large_Tree, Computer2, Radio, Orb, Screen_Tablet, Nether_Portal, Money_Tree
const sceneLayout = [
  { top: 290, left: 537, width: 132 },
  // Rocks_Foliage (now the green tablet): align scale with Screen_Tablet + nudge down.
  { top: 409, left: 666, width: 180 },
  { top: 256, left: 653, width: 109 },
  { top: 126, left: 648, width: 230 },
  { top: 265, left: 718, width: 70 },
  { top: 290, left: 220, width: 138 },
  { top: 227, left: 242, width: 63 },
  { top: 508, left: 540, width: 180 },
  { top: 404, left: 56, width: 170 },
  { top: 344, left: 349, width: 150 }
];

/** Per-slot deltas (design px) when viewport ≤ MOBILE_BACKGROUND_MAX_WIDTH_PX — shift with waterfall + narrow screen */
const MOBILE_SCENE_ADJUSTMENTS = [
  { dTop:100, dLeft: -130, dWidth: -10 }, // Jaguar — +40px down vs prior base
  { dTop:20, dLeft: 130, dWidth: -8 }, // Rocks_Foliage — +30 down, +30 right
  { dTop: 74, dLeft: -160, dWidth: -10 }, // Concrete_Block — +30 down, −20 left
  { dTop: 36, dLeft: -170, dWidth: -20 }, // Large_Tree — +30 down, −20 left
  { dTop: 75, dLeft: -145, dWidth: -8}, // Computer2 — with tree/concrete on mobile
  { dTop: 50, dLeft: -5, dWidth: -14 }, // Radio — +20 down, −10 left
  { dTop: -14, dLeft: 88, dWidth: -5 }, // Orb
  { dTop: -10, dLeft:-10,dWidth: -16 }, // Screen_Tablet — +30 down
  { dTop: 8, dLeft: 0, dWidth: -30}, // Nether_Portal
  { dTop: 168, dLeft:-22, dWidth: -29 } // Money_Tree — +50 down, −50 left
];

function isMobileViewportWidth(widthPx) {
  return widthPx <= MOBILE_BACKGROUND_MAX_WIDTH_PX;
}

function shouldDeferAmbientFx(widthPx) {
  const w =
    Number.isFinite(widthPx) && widthPx > 0
      ? widthPx
      : Math.max(1, viewport?.clientWidth || window.innerWidth);
  return isMobileViewportWidth(w);
}

function applyDonatePosition(_widthPx) {
  // donate button removed; no-op kept for call-site compatibility
}

function effectiveSceneLayoutForWidth(widthPx) {
  const mobile = isMobileViewportWidth(widthPx);
  return sceneLayout.map((c, i) => {
    if (!mobile) return { top: c.top, left: c.left, width: c.width };
    const adj = MOBILE_SCENE_ADJUSTMENTS[i] ?? {};
    return {
      top: c.top + (adj.dTop ?? 0),
      left: c.left + (adj.dLeft ?? 0),
      width: Math.max(36, c.width + (adj.dWidth ?? 0))
    };
  });
}

// Ensure overlapping hotspots click correctly (Computer2 over concrete/tree).
const layerByAsset = { Concrete_Block: 6, Large_Tree: 3, Jaguar: 5, Computer2: 8 };
const animationClassByAsset = {
  Large_Tree: "anim-sway",
  Money_Tree: "anim-sway",
  Rocks_Foliage: "anim-sway",
  Orb: "anim-orb-drift",
  Jaguar: "anim-breathe-dramatic",
  Concrete_Block: "anim-breathe"
};

const topOnlySwayAssets = new Set(["Large_Tree", "Money_Tree", "Rocks_Foliage"]);
const swaySplitByAsset = { Large_Tree: "60%", Money_Tree: "56%", Rocks_Foliage: "62%" };

const DUST_PARTICLE_COUNT = 18;
const LEAF_FILENAMES = ["leaf 1.png", "leaf 2.png", "leaf 3.png", "leaf 4.png", "leaf 5.png"];
const LEAF_SPIRAL_CLASSES = [
  "leaf-spiral-1",
  "leaf-spiral-2",
  "leaf-spiral-3",
  "leaf-spiral-4",
  "leaf-spiral-5"
];
const LEAF_ZONE_DEFINITIONS = [
  { sceneIndex: 1, heightPx: 92 },
  { sceneIndex: 3, heightPx: 268 },
  { sceneIndex: 9, heightPx: 128 }
];
const LEAF_COUNT_PER_ZONE = [4, 5, 4];

const SCREEN_TABLET_OVERLAY_FILENAME = "green layer.png";
const NETHER_PORTAL_OVERLAY_FILENAME = "purple portal.png";

const BIRD_FLIGHT_FRAMES = [
  "bird in flight 1.png",
  "bird in flight 2.png",
  "bird in flight 3.png"
];

function showRuntimeErrorBanner(message) {
  try {
    let el = document.getElementById("runtime-error-banner");
    if (!el) {
      el = document.createElement("div");
      el.id = "runtime-error-banner";
      el.style.position = "fixed";
      el.style.left = "12px";
      el.style.top = "12px";
      el.style.maxWidth = "min(820px, calc(100vw - 24px))";
      el.style.padding = "10px 12px";
      el.style.background = "rgba(10, 10, 10, 0.92)";
      el.style.color = "#fff";
      el.style.font = "12px/1.35 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
      el.style.zIndex = "999999";
      el.style.borderRadius = "8px";
      el.style.whiteSpace = "pre-wrap";
      el.style.pointerEvents = "auto";
      el.title = "Runtime error (click to dismiss)";
      el.addEventListener("click", () => el.remove());
      document.body.appendChild(el);
    }
    el.textContent = `Runtime error:\n${String(message ?? "Unknown error")}`;
  } catch {
    // ignore
  }
}

window.addEventListener("error", (e) => {
  const msg = e?.error?.stack || e?.message || "Unknown error";
  showRuntimeErrorBanner(msg);
});
window.addEventListener("unhandledrejection", (e) => {
  const reason = e?.reason?.stack || e?.reason || "Unhandled rejection";
  showRuntimeErrorBanner(reason);
});

const BIRD_CATCH_STORAGE_KEY = "birdCatchesEver";
/** Shared counter (all visitors) — CountAPI namespace/key; no auth, works on static hosting */
const TUCAN_GLOBAL_COUNT_NS = "failenn-portfolio";
const TUCAN_GLOBAL_COUNT_KEY = "tucan-global-catches";

/** Slower = longer linear move (seconds); end timer should run just after motion finishes */
const BIRD_FLIGHT_DURATION_SEC = 8;
const BIRD_FLIGHT_END_MS = Math.round(BIRD_FLIGHT_DURATION_SEC * 1000) + 180;

// Counter backed by /api/tucan (Next.js route → Upstash Redis)
// Falls back to localStorage display if the API is unavailable.
const TUCAN_API = "/api/tucan";

function parseCountApiValue(data) {
  const v = data?.value;
  const n = typeof v === "number" ? v : parseInt(String(v ?? ""), 10);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

async function fetchGlobalTucanCount() {
  try {
    const r = await fetch(TUCAN_API, { cache: "no-store" });
    if (!r.ok) return null;
    const j = await r.json();
    return parseCountApiValue(j);
  } catch {
    return null;
  }
}

async function hitGlobalTucanCount() {
  try {
    const r = await fetch(TUCAN_API, { method: "POST", cache: "no-store" });
    if (!r.ok) return null;
    const j = await r.json();
    return parseCountApiValue(j);
  } catch {
    return null;
  }
}

function getBirdCatchesEver() {
  try {
    const v = localStorage.getItem(BIRD_CATCH_STORAGE_KEY);
    const n = parseInt(v ?? "0", 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function incrementBirdCatchesEver() {
  const next = getBirdCatchesEver() + 1;
  try {
    localStorage.setItem(BIRD_CATCH_STORAGE_KEY, String(next));
  } catch {
    /* ignore quota / private mode */
  }
  return next;
}

function setBirdCatchCountDisplayed(n) {
  const countEl = document.getElementById("bird-catch-count");
  if (countEl) countEl.textContent = String(n);
}

async function refreshGlobalTucanCountDisplay() {
  const n = await fetchGlobalTucanCount();
  if (n !== null) {
    setBirdCatchCountDisplayed(n);
    return;
  }
  setBirdCatchCountDisplayed(getBirdCatchesEver());
}

function birdAssetUrl(filename) {
  return `${ASSET_PATH}${encodeURI(filename)}`;
}

function assetUrl(filename) {
  return `${ASSET_PATH}${encodeURI(filename)}`;
}

BIRD_FLIGHT_FRAMES.forEach((name) => {
  const pre = new Image();
  pre.src = birdAssetUrl(name);
});

const viewport = document.getElementById("spatial-viewport");
const scene = document.createElement("div");
scene.id = "spatial-scene";
scene.style.width = `${DESIGN_WIDTH}px`;
scene.style.height = `${DESIGN_HEIGHT}px`;
viewport.appendChild(scene);

const BRANDING_TREE_SCENE_INDEX = portfolioAssets.findIndex((a) => a.name === "Large_Tree");

function getBrandingTreeScreenRect() {
  const tree = document.getElementById("branding-tree-anchor");
  if (!tree) return null;
  const r = tree.getBoundingClientRect();
  if (r.width >= 4 && r.height >= 4) return r;
  const layout = effectiveSceneLayoutForWidth(viewport.clientWidth || window.innerWidth)[BRANDING_TREE_SCENE_INDEX];
  if (!layout) return null;
  const sr = scene.getBoundingClientRect();
  const s = sr.width / DESIGN_WIDTH;
  const vw = viewport.clientWidth || window.innerWidth;
  const wDesign = layout.width * (isMobileViewportWidth(vw) ? ASSET_DISPLAY_SCALE : 1);
  return {
    left: sr.left + layout.left * s,
    top: sr.top + layout.top * s,
    width: wDesign * s,
    height: Math.max(48, wDesign * s * 1.05)
  };
}

const hoverBirdRoot = document.createElement("div");
hoverBirdRoot.className = "hover-bird";
hoverBirdRoot.setAttribute("aria-hidden", "true");
const hoverBirdImg = document.createElement("img");
hoverBirdImg.alt = "";
hoverBirdImg.decoding = "async";
hoverBirdImg.draggable = false;
hoverBirdImg.src = birdAssetUrl(BIRD_FLIGHT_FRAMES[0]);
hoverBirdRoot.appendChild(hoverBirdImg);
const birdSpeechBubble = document.createElement("div");
birdSpeechBubble.className = "bird-catch-bubble";
birdSpeechBubble.textContent = "I hope you have an amazing day";
birdSpeechBubble.setAttribute("aria-hidden", "true");
hoverBirdRoot.appendChild(birdSpeechBubble);
document.body.appendChild(hoverBirdRoot);
hoverBirdRoot.style.left = "-9999px";
hoverBirdRoot.style.top = "-9999px";

let birdFlightActive = false;
let birdFrameIntervalId = null;
let birdFlightEndTimer = null;
let birdCooldownUntil = 0;
let birdCatchConsumedThisFlight = false;
/** Only one bird flight per full page load (until refresh) */
let birdFlightAllowedOncePerLoad = true;

function hideBirdSpeechBubble() {
  birdSpeechBubble.classList.remove("is-visible");
  birdSpeechBubble.setAttribute("aria-hidden", "true");
}

function catchBird(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (!birdFlightActive || birdCatchConsumedThisFlight) return;

  birdCatchConsumedThisFlight = true;
  if (birdFrameIntervalId !== null) {
    window.clearInterval(birdFrameIntervalId);
    birdFrameIntervalId = null;
  }
  if (birdFlightEndTimer !== null) {
    window.clearTimeout(birdFlightEndTimer);
    birdFlightEndTimer = null;
  }

  const r = hoverBirdRoot.getBoundingClientRect();
  hoverBirdRoot.style.transition = "none";
  hoverBirdRoot.style.left = `${r.left}px`;
  hoverBirdRoot.style.top = `${r.top}px`;
  hoverBirdRoot.classList.remove("is-catchable");

  void (async () => {
    const fromApi = await hitGlobalTucanCount();
    if (fromApi !== null) {
      setBirdCatchCountDisplayed(fromApi);
    } else {
      setBirdCatchCountDisplayed(incrementBirdCatchesEver());
    }
  })();

  birdSpeechBubble.classList.add("is-visible");
  birdSpeechBubble.setAttribute("aria-hidden", "false");

  birdFlightActive = false;
  birdCooldownUntil = Date.now() + 2200;
}

/* pointerdown: catch on press — click often misses because the bird moves before mouseup */
hoverBirdRoot.addEventListener("pointerdown", catchBird);
hoverBirdRoot.addEventListener("click", catchBird);

function startBirdFlightFromBrandingTree() {
  if (birdFlightActive) return;
  if (Date.now() < birdCooldownUntil) return;
  if (!birdFlightAllowedOncePerLoad) return;

  const tr = getBrandingTreeScreenRect();
  if (!tr || tr.width < 2) return;

  birdFlightAllowedOncePerLoad = false;
  hideBirdSpeechBubble();
  birdCatchConsumedThisFlight = false;
  birdFlightActive = true;
  // Nudge the whole flight path down slightly (visual alignment).
  const yNudge = 80;
  const startX = tr.left + tr.width * 0.78;
  const startY = tr.top + tr.height * 0.2 + yNudge;
  /* Fly left off-screen (opposite of the old rightward path) */
  const endX = -220;
  const endY = Math.max(-100, tr.top - 140 + yNudge);

  if (birdFrameIntervalId !== null) {
    window.clearInterval(birdFrameIntervalId);
    birdFrameIntervalId = null;
  }
  if (birdFlightEndTimer !== null) {
    window.clearTimeout(birdFlightEndTimer);
    birdFlightEndTimer = null;
  }

  hoverBirdRoot.style.transition = "none";
  hoverBirdRoot.style.left = `${startX}px`;
  hoverBirdRoot.style.top = `${startY}px`;
  hoverBirdImg.src = birdAssetUrl(BIRD_FLIGHT_FRAMES[0]);
  void hoverBirdRoot.offsetWidth;
  hoverBirdRoot.style.opacity = "1";
  hoverBirdRoot.classList.add("is-catchable");
  hoverBirdRoot.style.transition =
    `left ${BIRD_FLIGHT_DURATION_SEC}s linear, top ${BIRD_FLIGHT_DURATION_SEC}s linear, opacity 0.2s ease`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hoverBirdRoot.style.left = `${endX}px`;
      hoverBirdRoot.style.top = `${endY}px`;
    });
  });

  let fi = 0;
  birdFrameIntervalId = window.setInterval(() => {
    fi = (fi + 1) % BIRD_FLIGHT_FRAMES.length;
    hoverBirdImg.src = birdAssetUrl(BIRD_FLIGHT_FRAMES[fi]);
  }, 250);

  birdFlightEndTimer = window.setTimeout(() => {
    if (birdCatchConsumedThisFlight) return;
    if (birdFrameIntervalId !== null) {
      window.clearInterval(birdFrameIntervalId);
      birdFrameIntervalId = null;
    }
    hoverBirdRoot.classList.remove("is-catchable");
    hideBirdSpeechBubble();
    hoverBirdRoot.style.opacity = "0";
    hoverBirdRoot.style.transition = "opacity 0.35s ease";
    birdCooldownUntil = Date.now() + 2200;
    window.setTimeout(() => {
      hoverBirdRoot.style.transition = "none";
      hoverBirdRoot.style.left = "-9999px";
      hoverBirdRoot.style.top = "-9999px";
      birdFlightActive = false;
    }, 380);
  }, BIRD_FLIGHT_END_MS);
}

const tooltip = document.createElement("div");
tooltip.className = "asset-tooltip";
tooltip.setAttribute("aria-hidden", "true");
document.body.appendChild(tooltip);

let tooltipTypewriterTimer = null;
function startTooltipTypewriterOwned(owner, text, pos) {
  tooltip.dataset.owner = owner;
  startTooltipTypewriter(text, pos);
}
const BACKGROUND_FITHER_LABEL = "Fither";
const BACKGROUND_FITHER_HREF = `${SITE_PATH_PREFIX}/work/fither`;
let backgroundHoverTooltipActive = false;
function navigateTop(url) {
  // Match asset navigation semantics: <a target="_top">.
  const a = document.createElement("a");
  a.href = url;
  a.target = "_top";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function stopTooltipTypewriter() {
  if (tooltipTypewriterTimer !== null) {
    window.clearInterval(tooltipTypewriterTimer);
    tooltipTypewriterTimer = null;
  }
}
function dismissTooltip() {
  stopTooltipTypewriter();
  tooltip.classList.remove("visible");
  tooltip.replaceChildren();
  delete tooltip.dataset.owner;
}
function setTooltipPosition(source) {
  const padding = 10;
  const x = source.clientX;
  const y = source.clientY;
  tooltip.style.left = `${Math.min(window.innerWidth - padding, Math.max(padding, x))}px`;
  tooltip.style.top = `${Math.min(window.innerHeight - padding, Math.max(padding, y))}px`;
}
function startTooltipTypewriter(text, pos) {
  stopTooltipTypewriter();
  tooltip.replaceChildren();
  const textEl = document.createElement("span");
  textEl.className = "tooltip-type-text";
  const caretEl = document.createElement("span");
  caretEl.className = "tooltip-type-caret";
  caretEl.textContent = "|";
  caretEl.setAttribute("aria-hidden", "true");
  tooltip.appendChild(textEl);
  tooltip.appendChild(caretEl);
  tooltip.classList.add("visible");
  setTooltipPosition(pos);
  let idx = 0;
  tooltipTypewriterTimer = window.setInterval(() => {
    idx += 1;
    textEl.textContent = text.slice(0, idx);
    if (idx >= text.length) {
      stopTooltipTypewriter();
      caretEl.remove();
    }
  }, 52);
}

/** Type `text` into `el`, replacing its content. Returns a cancel fn. */
function typeInto(el, text, msPerChar = 52) {
  // Clear any previous typewriter on this element
  if (el._typewriterTimer) clearInterval(el._typewriterTimer);
  el.textContent = "";
  const caret = document.createElement("span");
  caret.className = "tooltip-type-caret";
  caret.textContent = "|";
  caret.setAttribute("aria-hidden", "true");
  el.appendChild(caret);
  let idx = 0;
  el._typewriterTimer = window.setInterval(() => {
    idx += 1;
    el.textContent = text.slice(0, idx);
    el.appendChild(caret);
    if (idx >= text.length) {
      clearInterval(el._typewriterTimer);
      el._typewriterTimer = null;
      caret.remove();
    }
  }, msPerChar);
}

function enableBackgroundHoverTooltip() {
  if (!viewport) return;

  const shouldIgnoreEventTarget = (target) => {
    if (!target) return false;
    if (target.closest?.(".asset-link")) return true;
    if (target.closest?.(".donate-btn")) return true;
    if (target.closest?.("#bird-catcher")) return true;
    return false;
  };

  const isOverWaterfallPortion = (event) => {
    // Far-right region of the background (all viewport sizes)
    if (!background) return false;
    const r = background.getBoundingClientRect();
    const vw = viewport?.clientWidth || window.innerWidth;
    const mobilePadX = isMobileViewportWidth(vw) ? 50 : 0; // widen hotspot on mobile
    const mobilePadY = isMobileViewportWidth(vw) ? 25 : 0; // taller (+50px total) on mobile
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top - mobilePadY ||
      event.clientY > r.bottom + mobilePadY
    ) {
      return false;
    }

    const relX = (event.clientX - r.left) / Math.max(1, r.width);
    const relY = (event.clientY - r.top) / Math.max(1, r.height);

    // Tune these if you want the hotspot bigger/smaller.
    // Far-right hotspot: rightmost 18% of the background rect.
    void relY;
    const baseThreshold = 0.82;
    const threshold = baseThreshold - mobilePadX / Math.max(1, r.width);
    return relX >= threshold;
  };

  const showAt = (event) => {
    if (shouldIgnoreEventTarget(event.target)) return;
    // Never override an asset tooltip (e.g. Orb "Buddy").
    if (tooltip.dataset.owner === "asset") return;
    if (!isOverWaterfallPortion(event)) return;
    backgroundHoverTooltipActive = true;
    startTooltipTypewriterOwned("background", BACKGROUND_FITHER_LABEL, event);
  };

  const moveAt = (event) => {
    if (!backgroundHoverTooltipActive) return;
    if (!tooltip.classList.contains("visible")) return;
    if (!isOverWaterfallPortion(event)) {
      hide();
      return;
    }
    setTooltipPosition(event);
  };

  const hide = () => {
    if (!backgroundHoverTooltipActive) return;
    backgroundHoverTooltipActive = false;
    if (tooltip.dataset.owner === "background") dismissTooltip();
  };

  viewport.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    // If an asset currently owns the tooltip, the background hover must not compete.
    if (tooltip.dataset.owner === "asset") return;
    if (shouldIgnoreEventTarget(event.target)) {
      // If we were showing the background tooltip, hide it once.
      // Otherwise, don't interfere with asset tooltips (e.g. Orb "Buddy").
      if (backgroundHoverTooltipActive) hide();
      return;
    }
    if (!isOverWaterfallPortion(event)) {
      hide();
      return;
    }
    if (!backgroundHoverTooltipActive) showAt(event);
    else moveAt(event);
  });
  viewport.addEventListener("pointerleave", hide);
  viewport.addEventListener("scroll", hide, { passive: true });

  viewport.addEventListener("click", (event) => {
    if (!backgroundHoverTooltipActive) return;
    if (shouldIgnoreEventTarget(event.target)) return;
    if (!isOverWaterfallPortion(event)) return;
    navigateTop(BACKGROUND_FITHER_HREF);
  });
}

/** 1024×580 cover raster — used to skip “paper” for the bird (looser than leaf mask) */
let backgroundPickImageData = null;

let ambientLeavesBuilt = false;
let leavesLayerMounted = false;

const background = document.createElement("img");
background.className = "spatial-bg";
background.alt = "";
scene.appendChild(background);

// Water ripple overlay — duplicate of background, clipped to waterfall strip
const waterOverlay = document.createElement("img");
waterOverlay.className = "spatial-bg spatial-bg-water";
waterOverlay.alt = "";
waterOverlay.setAttribute("aria-hidden", "true");
waterOverlay.draggable = false;
scene.appendChild(waterOverlay);

// Animate SVG turbulence for the water ripple effect
const waterTurbulence = document.getElementById("water-turbulence");
if (waterTurbulence) {
  let waterPhase = 0;
  (function tickWater() {
    waterPhase += 0.007;
    const bfX = (0.012 + Math.sin(waterPhase * 0.55) * 0.004).toFixed(5);
    const bfY = (0.038 + Math.sin(waterPhase)        * 0.011).toFixed(5);
    waterTurbulence.setAttribute("baseFrequency", `${bfX} ${bfY}`);
    requestAnimationFrame(tickWater);
  })();
}

let currentBackgroundVariant = null;

function syncBackgroundImageToViewport(widthPx) {
  const w =
    Number.isFinite(widthPx) && widthPx > 0
      ? widthPx
      : Math.max(1, viewport.clientWidth || window.innerWidth);
  const mobile = w <= MOBILE_BACKGROUND_MAX_WIDTH_PX;
  const next = mobile ? "mobile" : "desktop";
  if (next === currentBackgroundVariant) return;
  currentBackgroundVariant = next;
  const src = assetUrl(mobile ? BACKGROUND_MOBILE_FILE : BACKGROUND_DESKTOP_FILE);
  background.src = src;
  background.classList.toggle("spatial-bg--mobile", mobile);
  waterOverlay.src = src;
  waterOverlay.classList.toggle("spatial-bg--mobile", mobile);
}

function onBackgroundImageLoad() {
  refreshBackgroundPickBuffer();
  if (leavesLayerMounted) {
    const maskUrl = createLeafBackgroundMaskDataUrl(background);
    if (maskUrl) applyLeavesRootMask(maskUrl);
    refreshBackgroundPickBuffer();
  }
}

background.addEventListener("load", onBackgroundImageLoad);
syncBackgroundImageToViewport(0);

if (background.complete && background.naturalWidth > 0) {
  refreshBackgroundPickBuffer();
}

const NETHER_SCENE_INDEX = portfolioAssets.findIndex((a) => a.name === "Nether_Portal");




/** Ambient dust is pretty on desktop, but it’s a lot of animated DOM on mobile CPUs. */
let dustLayer = null;
const initialViewportW = Math.max(1, viewport?.clientWidth || window.innerWidth);
if (!shouldDeferAmbientFx(initialViewportW)) {
  dustLayer = document.createElement("div");
  dustLayer.className = "ambient-dust";
  for (let i = 0; i < DUST_PARTICLE_COUNT; i += 1) {
    const p = document.createElement("span");
    p.className = "dust-particle";
    p.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    const size = (Math.random() * 3 + 2).toFixed(2);
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.animationDuration = `${(Math.random() * 8 + 8).toFixed(2)}s`;
    p.style.animationDelay = `-${(Math.random() * 12).toFixed(2)}s`;
    p.style.setProperty("--drift", `${(Math.random() * 24 - 12).toFixed(2)}px`);
    dustLayer.appendChild(p);
  }
  scene.appendChild(dustLayer);
}

const leavesRoot = document.createElement("div");
leavesRoot.className = "ambient-leaves-root";

/** Populated in buildAmbientLeaves — repositioned on mobile in applySceneLayoutForViewportWidth */
const leafZoneMeta = [];

function addEidolonGreenTabletScreen(anchor) {
  // Reuse the same green screen overlay used by the tablet asset.
  const img = document.createElement("img");
  img.src = assetUrl(SCREEN_TABLET_OVERLAY_FILENAME);
  img.alt = "";
  img.setAttribute("aria-hidden", "true");
  img.draggable = false;
  img.style.cssText =
    "position:absolute;" +
    "pointer-events:none;" +
    "left:8%;" +
    "top:12%;" +
    "width:68%;" +
    "height:auto;" +
    "opacity:0.72;" +
    "mix-blend-mode:screen;" +
    "filter:saturate(1.15) brightness(1.1);" +
    "transform:rotate(-6deg);" +
    "z-index:9;";
  anchor.appendChild(img);
}

function drawImageCover(context, image, canvasWidth, canvasHeight) {
  const imgW = image.naturalWidth || image.width;
  const imgH = image.naturalHeight || image.height;
  if (!imgW || !imgH) return;
  const imageRatio = imgW / imgH;
  const canvasRatio = canvasWidth / canvasHeight;
  let drawWidth;
  let drawHeight;
  let offsetX = 0;
  let offsetY = 0;
  if (imageRatio > canvasRatio) {
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imageRatio;
    offsetX = (canvasWidth - drawWidth) / 2;
  } else {
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imageRatio;
    offsetY = (canvasHeight - drawHeight) / 2;
  }
  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

function refreshBackgroundPickBuffer() {
  if (typeof background === "undefined" || !background.naturalWidth) return;
  const canvas = document.createElement("canvas");
  canvas.width = DESIGN_WIDTH;
  canvas.height = DESIGN_HEIGHT;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  try {
    drawImageCover(ctx, background, DESIGN_WIDTH, DESIGN_HEIGHT);
    backgroundPickImageData = ctx.getImageData(0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
  } catch {
    /* file://, CORS, or security — can’t read pixels; bird still works (see isPointerOverCollageArt) */
    backgroundPickImageData = null;
  }
}

function pixelIsMostlyWhitePaper(ix, iy, d) {
  if (ix < 0 || iy < 0 || ix >= DESIGN_WIDTH || iy >= DESIGN_HEIGHT) return true;
  const j = (iy * DESIGN_WIDTH + ix) * 4;
  const r = d[j];
  const g = d[j + 1];
  const b = d[j + 2];
  const lum = (r + g + b) / 3;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  /* Looser than leaves: only treat near-flat white as “paper” */
  return lum >= 249 && chroma <= 28;
}

function isPointerOverCollageArt(clientX, clientY) {
  if (!backgroundPickImageData) {
    /* No buffer → don’t block the bird (canvas taint / failed read) */
    return true;
  }
  const d = backgroundPickImageData.data;
  const sr = scene.getBoundingClientRect();
  const w = sr.width;
  const h = sr.height;
  if (w < 1 || h < 1) return true;
  const x = (clientX - sr.left) * (DESIGN_WIDTH / w);
  const y = (clientY - sr.top) * (DESIGN_HEIGHT / h);
  const ix0 = Math.floor(x);
  const iy0 = Math.floor(y);

  /* 5×5: any pixel “not paper” → collage (forgiving vs 1px misalignment / antialiasing) */
  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      if (!pixelIsMostlyWhitePaper(ix0 + dx, iy0 + dy, d)) {
        return true;
      }
    }
  }
  return false;
}

function createLeafBackgroundMaskDataUrl(image) {
  const canvas = document.createElement("canvas");
  canvas.width = DESIGN_WIDTH;
  canvas.height = DESIGN_HEIGHT;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  try {
    drawImageCover(context, image, DESIGN_WIDTH, DESIGN_HEIGHT);
    const imageData = context.getImageData(0, 0, DESIGN_WIDTH, DESIGN_HEIGHT);
    const { data } = imageData;
    const lumCut = 247;
    const chromaCut = 22;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = (r + g + b) / 3;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);
      const isPaper = lum >= lumCut && chroma <= chromaCut;
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = isPaper ? 0 : 255;
    }
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL("image/png");
  } catch {
    return null;
  }
}

function applyLeavesRootMask(dataUrl) {
  if (!dataUrl) return;
  const value = `url("${dataUrl}")`;
  leavesRoot.style.webkitMaskImage = value;
  leavesRoot.style.maskImage = value;
  leavesRoot.style.webkitMaskSize = "100% 100%";
  leavesRoot.style.maskSize = "100% 100%";
  leavesRoot.style.webkitMaskRepeat = "no-repeat";
  leavesRoot.style.maskRepeat = "no-repeat";
  leavesRoot.style.webkitMaskPosition = "center";
  leavesRoot.style.maskPosition = "center";
}

function buildAmbientLeaves() {
  if (ambientLeavesBuilt) return;
  ambientLeavesBuilt = true;
  let globalLeafIndex = 0;
  LEAF_ZONE_DEFINITIONS.forEach((zone, zoneIndex) => {
    const count = LEAF_COUNT_PER_ZONE[zoneIndex] ?? 0;
    const coords = sceneLayout[zone.sceneIndex];
    if (!coords || count <= 0) return;
    const zoneEl = document.createElement("div");
    zoneEl.className = "leaf-zone";
    zoneEl.style.top = `${coords.top}px`;
    zoneEl.style.left = `${coords.left}px`;
    zoneEl.style.width = `${coords.width}px`;
    zoneEl.style.height = `${zone.heightPx}px`;
    leafZoneMeta.push({ el: zoneEl, sceneIndex: zone.sceneIndex, heightPx: zone.heightPx });
    leavesRoot.appendChild(zoneEl);
    for (let k = 0; k < count; k += 1) {
      const wrapper = document.createElement("div");
      const spiralClass = LEAF_SPIRAL_CLASSES[Math.floor(Math.random() * LEAF_SPIRAL_CLASSES.length)];
      wrapper.className = `leaf-floater ${spiralClass}`;
      wrapper.style.left = `${(Math.random() * 78 + 8).toFixed(2)}%`;
      wrapper.style.top = `${(Math.random() * 72 + 10).toFixed(2)}%`;
      const widthPx = Math.random() * 9 + 9;
      wrapper.style.width = `${widthPx.toFixed(1)}px`;
      wrapper.style.animationDuration = `${(Math.random() * 8 + 12).toFixed(2)}s`;
      wrapper.style.animationDelay = `-${(Math.random() * 18).toFixed(2)}s`;

      const leafImg = document.createElement("img");
      const leafFile = LEAF_FILENAMES[globalLeafIndex % LEAF_FILENAMES.length] ?? LEAF_FILENAMES[0];
      globalLeafIndex += 1;
      leafImg.className = "leaf-floater__img";
      leafImg.src = assetUrl(leafFile);
      leafImg.alt = "";
      leafImg.setAttribute("aria-hidden", "true");
      if (Math.random() < 0.5) leafImg.style.transform = "scaleX(-1)";
      wrapper.appendChild(leafImg);
      zoneEl.appendChild(wrapper);
    }
  });
}

function mountLeavesLayer() {
  if (leavesLayerMounted) return;
  const w = Math.max(1, viewport?.clientWidth || window.innerWidth);
  if (shouldDeferAmbientFx(w)) return;
  if (!background?.naturalWidth) {
    background.addEventListener("load", () => mountLeavesLayer(), { once: true });
    return;
  }
  leavesLayerMounted = true;
  const maskUrl = createLeafBackgroundMaskDataUrl(background);
  applyLeavesRootMask(maskUrl);
  buildAmbientLeaves();
  scene.appendChild(leavesRoot);
  refreshBackgroundPickBuffer();
}

function applyCoordinates(node, coords, widthPx) {
  const wv = widthPx ?? viewport?.clientWidth ?? window.innerWidth;
  const mult = isMobileViewportWidth(wv) ? ASSET_DISPLAY_SCALE : 1;
  const w = Math.round(coords.width * mult * 10) / 10;
  node.style.top = `${coords.top}px`;
  node.style.left = `${coords.left}px`;
  node.style.width = `${w}px`;
}

function attachStaticPulseOverlay(anchor, overlayFilename, topOffsetPx = 0, leftOffsetPx = 0, scale = 1) {
  const pulseOverlay = document.createElement("img");
  pulseOverlay.className = "asset-color-pulse asset-color-pulse-synced";
  pulseOverlay.alt = "";
  pulseOverlay.setAttribute("aria-hidden", "true");
  pulseOverlay.style.animationDelay = "0s";
  if (topOffsetPx !== 0) pulseOverlay.style.top = `${topOffsetPx}px`;
  if (leftOffsetPx !== 0) pulseOverlay.style.left = `${leftOffsetPx}px`;
  if (scale !== 1) {
    pulseOverlay.style.transform = `scale(${scale})`;
    pulseOverlay.style.transformOrigin = "center";
  }
  pulseOverlay.src = assetUrl(overlayFilename);
  anchor.appendChild(pulseOverlay);
  return pulseOverlay;
}

const RADIO_NOTE_SYMBOLS = ["♪", "♫", "♪", "♫"];
const RADIO_NOTE_CLASSES = [
  "radio-music-note",
  "radio-music-note radio-note-a",
  "radio-music-note radio-note-b",
  "radio-music-note radio-note-c"
];
function addRadioMusicNotes(anchor) {
  const leftPositions = [42, 52, 62, 48];
  for (let i = 0; i < RADIO_NOTE_CLASSES.length; i += 1) {
    const note = document.createElement("span");
    note.className = RADIO_NOTE_CLASSES[i];
    note.textContent = RADIO_NOTE_SYMBOLS[i % RADIO_NOTE_SYMBOLS.length];
    note.setAttribute("aria-hidden", "true");
    note.style.left = `${leftPositions[i]}%`;
    note.style.animationDelay = `${(i * 0.48).toFixed(2)}s`;
    anchor.appendChild(note);
  }
}

const sceneAssetAnchors = [];
let netherPortalOverlayEl = null;
let backTabletAnchorEl = null;
let netherPortalAnchorEl = null;

function syncNetherPortalOverlayPosition(widthPx) {
  if (!netherPortalOverlayEl) return;
  const w =
    Number.isFinite(widthPx) && widthPx > 0
      ? widthPx
      : viewport?.clientWidth || window.innerWidth;
  const m = isMobileViewportWidth(w);
  netherPortalOverlayEl.style.top = `${m ? NETHER_PORTAL_OVERLAY_TOP_MOBILE_PX : NETHER_PORTAL_OVERLAY_TOP_DESKTOP_PX}px`;
  netherPortalOverlayEl.style.left = `${m ? NETHER_PORTAL_OVERLAY_LEFT_MOBILE_PX : NETHER_PORTAL_OVERLAY_LEFT_DESKTOP_PX}px`;
}

let orbAnchorEl = null;

portfolioAssets.forEach((asset, index) => {
  const isLinked = !asset.noLink && !asset.cursorFollow;
  const anchor = isLinked ? document.createElement("a") : document.createElement("div");
  anchor.className = "asset-link";
  if (isLinked) {
    anchor.href = asset.href ?? `${SITE_PATH_PREFIX}/${asset.link}`;
    anchor.target = "_top";
    anchor.setAttribute("aria-label", `${asset.name} — ${asset.hoverLabel ?? asset.link}`);
  }
  anchor.style.zIndex =
    asset.name === "Orb"
      ? "35"
      : String(layerByAsset[asset.name] ?? 4);
  const animationClass = animationClassByAsset[asset.name];
  if (animationClass && !topOnlySwayAssets.has(asset.name)) anchor.classList.add(animationClass);
  anchor.style.animationDelay = `-${(Math.random() * 5).toFixed(2)}s`;
  applyCoordinates(anchor, sceneLayout[index], viewport.clientWidth || window.innerWidth);
  if (asset.name === "Large_Tree") anchor.id = "branding-tree-anchor";
  if (asset.name === "Radio") anchor.classList.add("asset-link--radio-tilt");
  if (asset.name === "Screen_Tablet") {
    // Keep the slot so indices/layout stay stable, but hide the front-facing tablet.
    anchor.style.display = "none";
    anchor.style.pointerEvents = "none";
  }
  if (asset.name === "Rocks_Foliage") backTabletAnchorEl = anchor;

  if (topOnlySwayAssets.has(asset.name)) {
    anchor.classList.add("has-top-only-sway");
    anchor.style.setProperty("--sway-split", swaySplitByAsset[asset.name] ?? "58%");
    const baseImage = document.createElement("img");
    baseImage.className = "asset-image asset-image-base";
    baseImage.src = assetUrl(asset.filename);
    baseImage.alt = asset.name.replaceAll("_", " ");
    const topImage = document.createElement("img");
    topImage.className = "asset-image asset-image-top anim-sway";
    topImage.src = assetUrl(asset.filename);
    topImage.alt = "";
    topImage.setAttribute("aria-hidden", "true");
    topImage.style.animationDelay = `-${(Math.random() * 5).toFixed(2)}s`;
    anchor.appendChild(baseImage);
    anchor.appendChild(topImage);

  } else {
    const image = document.createElement("img");
    image.className = "asset-image";
    image.src = assetUrl(asset.filename);
    image.alt = asset.name.replaceAll("_", " ");
    anchor.appendChild(image);

    if (asset.hoverFilename) {
      const baseSrc = image.src;
      const hoverSrc = assetUrl(asset.hoverFilename);
      const showHover = () => {
        image.src = hoverSrc;
      };
      const showBase = () => {
        image.src = baseSrc;
      };
      anchor.addEventListener("mouseenter", showHover);
      anchor.addEventListener("mouseleave", showBase);
      anchor.addEventListener("focus", showHover);
      anchor.addEventListener("blur", showBase);
    }

    if (asset.name === "Nether_Portal") {
      anchor.id = "nether-portal-anchor";
      netherPortalAnchorEl = anchor;
      anchor.style.opacity = "0.9";
      netherPortalOverlayEl = attachStaticPulseOverlay(
        anchor,
        NETHER_PORTAL_OVERLAY_FILENAME,
        NETHER_PORTAL_OVERLAY_TOP_DESKTOP_PX,
        NETHER_PORTAL_OVERLAY_LEFT_DESKTOP_PX,
        .26
      );
      syncNetherPortalOverlayPosition(viewport.clientWidth || window.innerWidth);
    } else if (asset.name === "Screen_Tablet") {
      if (anchor.style.display === "none") {
        // hidden slot (keep indices stable)
      } else {
      attachStaticPulseOverlay(anchor, SCREEN_TABLET_OVERLAY_FILENAME, -8, 2, .3);
      }
    }
  }

  if (asset.name === "Radio") addRadioMusicNotes(anchor);
  if (asset.name === "Orb") orbAnchorEl = anchor;

  const hoverTitle = asset.hoverLabel ?? asset.link ?? null;
  if (hoverTitle) {
    anchor.addEventListener("mouseenter", (event) => startTooltipTypewriterOwned("asset", hoverTitle, event));
    anchor.addEventListener("mousemove", (event) => {
      if (tooltip.classList.contains("visible")) setTooltipPosition(event);
    });
    anchor.addEventListener("mouseleave", dismissTooltip);
    anchor.addEventListener("focus", () => {
      const rect = anchor.getBoundingClientRect();
      startTooltipTypewriterOwned("asset", hoverTitle, { clientX: rect.left + rect.width / 2, clientY: rect.top });
    });
    anchor.addEventListener("blur", dismissTooltip);

    const normalizedLabel = String(hoverTitle).trim().toLowerCase();
    const shouldSkipPersistentLabel =
      normalizedLabel === "work" && renderedPersistentLabels.has(normalizedLabel);

    const labelEl = document.createElement("span");
    labelEl.className = "asset-label";
    labelEl.textContent = hoverTitle;
    labelEl.setAttribute("aria-hidden", "true");
    if (normalizedLabel === "work") {
      labelEl.style.transform = "translateX(-50%) translateX(26px)";
    }
    if (!shouldSkipPersistentLabel) {
      renderedPersistentLabels.add(normalizedLabel);
      anchor.appendChild(labelEl);
    }

    // Position label just below the image once its height is known.
    const firstImg = anchor.querySelector("img");
    if (firstImg) {
      const placeLabel = () => {
        const h = firstImg.offsetHeight || firstImg.getBoundingClientRect().height;
        if (h > 0) labelEl.style.top = `${h + 4}px`;
      };
      if (firstImg.complete && firstImg.naturalHeight > 0) {
        requestAnimationFrame(placeLabel);
      } else {
        firstImg.addEventListener("load", placeLabel, { once: true });
      }
    }
  }

  scene.appendChild(anchor);
  sceneAssetAnchors.push(anchor);
});

// ── Nether portal: monster emerges on hover ─────────────────────────────────
(function setupNetherPortalMonster() {
  if (!netherPortalAnchorEl) return;

  const SWORD_CURSOR = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cline x1='4' y1='4' x2='25' y2='25' stroke='%23d0d0d0' stroke-width='2.5' stroke-linecap='round'/%3E%3Cline x1='14' y1='10' x2='10' y2='14' stroke='%23d4af37' stroke-width='3' stroke-linecap='round'/%3E%3Cline x1='25' y1='25' x2='30' y2='30' stroke='%238b4513' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E\") 4 4, crosshair";

  const monster = document.createElement("img");
  monster.className = "portal-monster";
  monster.src = "/monsterman.png";
  monster.alt = "";
  monster.setAttribute("aria-hidden", "true");
  monster.draggable = false;
  monster.style.pointerEvents = "none";

  const bubble = document.createElement("div");
  bubble.className = "portal-monster-bubble";

  scene.appendChild(monster);
  scene.appendChild(bubble);

  let cooldown = false;
  let attackable = false;
  let textPhase2Timer = null;

  const positionMonster = () => {
    const pr = netherPortalAnchorEl.getBoundingClientRect();
    const sr = scene.getBoundingClientRect();
    const x = pr.left - sr.left + pr.width * 0.5;
    const w = Math.max(30, pr.width * 0.45);
    const estimatedH = w * 1.5;
    const y = pr.top - sr.top + pr.height * 0.5 - estimatedH;
    monster.style.left = `${x - w / 2 - 12}px`;
    monster.style.top = `${y - 20}px`;
    monster.style.width = `${w}px`;
    monster.style.height = "auto";
    const bw = 220;
    bubble.style.left = `${x - bw / 2}px`;
    bubble.style.top = `${y - 36}px`;
    bubble.style.width = `${bw}px`;
  };

  // Viewport-space hit test — getBoundingClientRect is transform-aware, matches clientX/Y exactly
  // Pad the rect so clicking near the edge/center all register
  const isOverMonster = (clientX, clientY) => {
    const mr = monster.getBoundingClientRect();
    if (mr.width < 1) return false;
    const pad = mr.width * 0.25; // 25% padding on all sides
    return clientX >= mr.left - pad && clientX <= mr.right  + pad &&
           clientY >= mr.top  - pad && clientY <= mr.bottom + pad;
  };

  const dismiss = () => {
    attackable = false;
    if (textPhase2Timer) { clearTimeout(textPhase2Timer); textPhase2Timer = null; }
    document.documentElement.classList.remove("monster-sword-cursor");
    bubble.style.opacity = "0";
    bubble.classList.remove("is-emerging");
    // Swap to the dead image as soon as the hit registers
    monster.src = "/monsterman2.png";
    // Strip ALL classes + inline opacity first so is-dismissed starts fresh
    monster.classList.remove("is-emerging", "is-attackable", "is-dismissed");
    monster.style.opacity = ""; // let animation control opacity
    void monster.offsetWidth;   // force reflow — animation restarts from keyframe 0
    monster.classList.add("is-dismissed");
    window.setTimeout(() => {
      monster.classList.remove("is-dismissed");
      monster.style.opacity = "0";
      // Reset back to the live image for the next emergence
      monster.src = "/monsterman.png";
      bubble.style.opacity = "";
      cooldown = false;
    }, 920);
  };

  // Capture phase fires before scene drag handlers — safe to stopPropagation
  document.addEventListener("pointerdown", (e) => {
    if (!attackable) return;
    if (!isOverMonster(e.clientX, e.clientY)) return;
    e.stopPropagation();
    dismiss();
  }, { capture: true });

  // Sword cursor: show whenever hovering over portal OR monster area
  const setSwordCursor = (e) => {
    const overPortal = netherPortalAnchorEl.contains(e.target) ||
                       netherPortalAnchorEl === e.target;
    const overMonster = attackable && isOverMonster(e.clientX, e.clientY);
    document.documentElement.classList.toggle("monster-sword-cursor", overPortal || overMonster);
  };
  document.addEventListener("pointermove", setSwordCursor, { capture: true });
  netherPortalAnchorEl.addEventListener("pointerleave", () => {
    if (!attackable) document.documentElement.classList.remove("monster-sword-cursor");
  });

  const emerge = () => {
    if (cooldown || attackable) return;
    cooldown = true;
    positionMonster();
    monster.classList.remove("is-emerging", "is-dismissed", "is-attackable");
    bubble.classList.remove("is-emerging");
    void monster.offsetWidth;
    monster.classList.add("is-emerging");
    bubble.classList.add("is-emerging");

    // Two-phase typewriter text
    const msg1 = "Quick! He is going to attack!";
    const msg2 = "Attack him back!";
    typeInto(bubble, msg1, 48);
    textPhase2Timer = window.setTimeout(() => {
      typeInto(bubble, msg2, 48);
      textPhase2Timer = null;
    }, msg1.length * 48 + 2000);

    window.setTimeout(() => {
      monster.style.opacity = "1";
      monster.classList.add("is-attackable");
      attackable = true;
      cooldown = false;
    }, 820);
  };

  netherPortalAnchorEl.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "touch") return;
    emerge();
  });
  netherPortalAnchorEl.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch") return;
    emerge();
  });
})();

// ── Back tablet: hover projector beams ───────────────────────────────────────
(function setupBackTabletBeams() {
  if (!backTabletAnchorEl) return;

  // Make the tablet open the donate page on click.
  backTabletAnchorEl.style.cursor = "pointer";
  backTabletAnchorEl.style.zIndex = "100002";
  backTabletAnchorEl.style.pointerEvents = "auto";
  backTabletAnchorEl.addEventListener("click", () => {
    window.open("https://www.junglekeepers.org/donate", "_blank", "noopener,noreferrer");
  });

  let beamsEl = null;
  let donateBeamEl = null;
  let donateTextEl = null;

  const mount = () => {
    if (beamsEl) return;
    const img =
      backTabletAnchorEl.querySelector("img.asset-image-base") ||
      backTabletAnchorEl.querySelector("img.asset-image") ||
      backTabletAnchorEl.querySelector("img");
    if (!img) return;

    const r = img.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;

    beamsEl = document.createElement("div");
    beamsEl.className = "tablet-beams";
    beamsEl.setAttribute("aria-hidden", "true");
    beamsEl.style.left = "0px";
    beamsEl.style.top = "0px";
    beamsEl.style.width = `${r.width}px`;
    beamsEl.style.height = `${r.height}px`;
    // z-index intentionally left to CSS (100003) so beam sits in front of tablet image

    // Fraction of tablet image where the green screen sits (tune these to move the beam)
    const BEAM_LEFT_FRAC   = 0.37; // 0 = left edge, 1 = right edge of tablet image
    const BEAM_BOTTOM_FRAC = 0.75; // beam origin halfway up the tablet — lower half sinks into asset
    const beamLeft   = `${(BEAM_LEFT_FRAC   * 100).toFixed(1)}%`;
    const beamBottom = `${(BEAM_BOTTOM_FRAC * 100).toFixed(1)}%`;

    // Vertical DONATE! beam projecting straight up.
    donateBeamEl = document.createElement("div");
    donateBeamEl.className = "tablet-donate-beam";
    donateBeamEl.setAttribute("aria-hidden", "true");
    donateBeamEl.style.left   = beamLeft;
    donateBeamEl.style.bottom = beamBottom;
    beamsEl.appendChild(donateBeamEl);

    donateTextEl = document.createElement("a");
    donateTextEl.className = "tablet-donate-text";
    donateTextEl.style.left   = beamLeft;
    donateTextEl.style.bottom = `calc(${beamBottom} + 52px)`;
    donateTextEl.href = "https://www.junglekeepers.org/donate";
    donateTextEl.target = "_blank";
    donateTextEl.rel = "noopener noreferrer";
    donateTextEl.textContent = "DONATE!";
    beamsEl.appendChild(donateTextEl);

    backTabletAnchorEl.style.position = "absolute";
    backTabletAnchorEl.style.height = `${r.height}px`;
    backTabletAnchorEl.appendChild(beamsEl);
  };

  let dismissTimer = null;

  const unmount = () => {
    if (!beamsEl) return;
    beamsEl.remove();
    beamsEl = null;
    donateBeamEl = null;
    donateTextEl = null;
  };

  const scheduleDismiss = () => {
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(unmount, 10000);
  };

  backTabletAnchorEl.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "touch") return;
    mount();
    scheduleDismiss();
  });

  backTabletAnchorEl.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "touch") return;
    scheduleDismiss();
  });

  backTabletAnchorEl.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch") return;
    mount();
    scheduleDismiss();
  });
})();

// ── Orb trail — follows cursor; drop/pick-up via glass circle ────────────────
(function setupOrbCursorFollow() {
  if (!orbAnchorEl) return;
  orbAnchorEl.style.display = "none";

  // Glass circle — visual drop-zone, no overflow clip (nodes live in scene)
  const CIRCLE_R  = 36;
  // Moved to where the (old) front-facing green tablet used to live.
  const CIRCLE_CX = 630;
  const CIRCLE_CY = 540;

  const orbCircle = document.createElement("div");
  orbCircle.setAttribute("aria-label", "Drop or pick up orb here");
  orbCircle.style.cssText = `
    position:absolute;
    left:${CIRCLE_CX - CIRCLE_R}px;
    top:${CIRCLE_CY - CIRCLE_R}px;
    width:${CIRCLE_R * 2}px;
    height:${CIRCLE_R * 2}px;
    border-radius:50%;
    z-index:22;
    cursor:crosshair;
    pointer-events:auto;
    background:rgba(255,255,255,0.10);
    backdrop-filter:blur(14px) saturate(150%);
    -webkit-backdrop-filter:blur(14px) saturate(150%);
    border:0.5px solid rgba(255,255,255,0.55);
    box-shadow:0 4px 24px rgba(0,0,0,0.07),inset 0 1px 0 rgba(255,255,255,0.6);
    transition:border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  `;
  scene.appendChild(orbCircle);

  const TRAIL = [[28,0.92],[22,0.75],[17,0.58],[13,0.42],[9,0.28],[6,0.16]];
  const LERP  = 0.13;

  // Nodes live in the scene so they can roam freely
  const nodes = TRAIL.map(([w, opacity]) => {
    const el = document.createElement("div");
    el.style.cssText = `position:absolute;width:${w}px;pointer-events:none;z-index:35;opacity:${opacity};left:${CIRCLE_CX - w/2}px;top:${CIRCLE_CY - w/2}px;`;
    const img = document.createElement("img");
    img.src = assetUrl("orb.png");
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.cssText = "position:absolute;width:100%;height:auto;pointer-events:none;";
    el.appendChild(img);
    scene.appendChild(el);
    return { el, w, cx: CIRCLE_CX - w/2, cy: CIRCLE_CY - w/2 };
  });

  let tx = CIRCLE_CX, ty = CIRCLE_CY;
  let rafRunning = false;
  let orbDropped  = false; // true = resting in circle, not following cursor

  function viewportToScene(clientX, clientY) {
    const sr = scene.getBoundingClientRect();
    if (sr.width < 1) return null;
    return {
      x: (clientX - sr.left) / sr.width  * DESIGN_WIDTH,
      y: (clientY - sr.top)  / sr.height * DESIGN_HEIGHT,
    };
  }

  function isOverCircle(clientX, clientY) {
    const cr = orbCircle.getBoundingClientRect();
    if (cr.width < 1) return false;
    const dx = clientX - (cr.left + cr.width / 2);
    const dy = clientY - (cr.top  + cr.height / 2);
    return Math.sqrt(dx*dx + dy*dy) <= cr.width / 2;
  }

  function setDroppedStyle(dropped) {
    orbCircle.style.borderColor = dropped
      ? "rgba(180,255,60,0.85)"
      : "rgba(255,255,255,0.55)";
    orbCircle.style.boxShadow = dropped
      ? "0 0 28px 6px rgba(80,180,0,0.38), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)"
      : "0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)";
    orbCircle.style.background = dropped
      ? "rgba(60,160,20,0.12)"
      : "rgba(255,255,255,0.10)";
  }

  function orbRAF() {
    let moving = false;
    nodes.forEach((node, i) => {
      const tX = i === 0 ? tx : nodes[i-1].cx + nodes[i-1].w/2;
      const tY = i === 0 ? ty : nodes[i-1].cy + nodes[i-1].w/2;
      const dL = tX - node.w/2, dT = tY - node.w/2;
      node.cx += (dL - node.cx) * LERP;
      node.cy += (dT - node.cy) * LERP;
      node.el.style.left = `${node.cx}px`;
      node.el.style.top  = `${node.cy}px`;
      if (Math.abs(dL - node.cx) > 0.2 || Math.abs(dT - node.cy) > 0.2) moving = true;
    });
    if (moving) requestAnimationFrame(orbRAF);
    else rafRunning = false;
  }

  function startRAF() { if (!rafRunning) { rafRunning = true; requestAnimationFrame(orbRAF); } }

  // Hover glow — yellow tint on enter, reset on leave (unless dropped)
  orbCircle.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "touch") return;
    if (!orbDropped) {
      orbCircle.style.borderColor = "rgba(100,200,40,0.75)";
      orbCircle.style.boxShadow = "0 0 18px 4px rgba(80,180,0,0.28), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)";
    }
  });
  orbCircle.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "touch") return;
    setDroppedStyle(orbDropped); // restore correct state on leave
  });

  // Toggle drop state each time cursor enters the circle
  orbCircle.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    orbDropped = !orbDropped;
    setDroppedStyle(orbDropped);
    if (orbDropped) {
      // Snap target to circle centre so orb drifts home when cursor leaves
      tx = CIRCLE_CX; ty = CIRCLE_CY;
    }
    startRAF();
  });

  viewport.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    if (orbDropped) {
      // While dropped: only follow cursor if it's inside the circle
      if (isOverCircle(e.clientX, e.clientY)) {
        const pos = viewportToScene(e.clientX, e.clientY);
        if (pos) { tx = pos.x; ty = pos.y; }
      }
      // Outside circle while dropped → target stays, orb rests
    } else {
      // Free: follow cursor everywhere
      const pos = viewportToScene(e.clientX, e.clientY);
      if (pos) { tx = pos.x; ty = pos.y; }
    }
    startRAF();
  });

  // Snap orb back to circle centre when cursor leaves the circle while dropped
  orbCircle.addEventListener("pointerleave", () => {
    if (orbDropped) { tx = CIRCLE_CX; ty = CIRCLE_CY; startRAF(); }
  });

  // When cursor leaves the whole scene
  viewport.addEventListener("pointerleave", () => {
    if (!orbDropped) { tx = CIRCLE_CX; ty = CIRCLE_CY; startRAF(); }
  });
})();

// ── Money tree: bitmap dollar bills rain down, settle, and pile upward ──
(function setupMoneyTreePile() {
  const treeIdx = portfolioAssets.findIndex((a) => a.name === "Money_Tree");
  const treeEl  = sceneAssetAnchors[treeIdx];
  if (!treeEl) return;

  const MONEY_IMAGES = [
    `${ASSET_PATH}money1.png`,
    `${ASSET_PATH}money2.png`,
    `${ASSET_PATH}money3.png`,
    `${ASSET_PATH}money4.png`,
    `${ASSET_PATH}money5.png`,
  ];

  const pickMoneyImage = () => MONEY_IMAGES[Math.floor(Math.random() * MONEY_IMAGES.length)];

  let spawnInterval = null;
  let pileCount     = 0;
  let hoverStartMs  = 0;
  let bubbleTimer   = null;
  let bubblePhase   = 0; // 0=wow, 1=almost, 2=rich (persists across hover sessions)

  // Pile container lives directly in scene so bills extend above the tree
  const pileEl = document.createElement("div");
  pileEl.setAttribute("aria-hidden", "true");
  pileEl.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:48;overflow:visible;";
  scene.appendChild(pileEl);

  // Same font treatment as the tucan UI bubble.
  const richBubble = document.createElement("div");
  richBubble.className = "bird-catch-bubble";
  richBubble.setAttribute("aria-hidden", "true");
  richBubble.textContent = "Wow money..";
  richBubble.style.maxWidth = "min(18rem, calc(100vw - 1.5rem))";
  richBubble.style.minWidth = "min(10rem, calc(100vw - 1.5rem))";
  richBubble.style.padding = "0.28rem 0.7rem";
  richBubble.style.fontSize = "clamp(0.55rem, 0.95vmin, 0.7rem)";
  treeEl.appendChild(richBubble);

  function setRichBubbleVisible(visible) {
    if (visible) {
      richBubble.classList.add("is-visible");
      richBubble.setAttribute("aria-hidden", "false");
    } else {
      richBubble.classList.remove("is-visible");
      richBubble.setAttribute("aria-hidden", "true");
    }
  }

  let lastBubbleText = "";
  function updateRichBubble() {
    const elapsed = Date.now() - hoverStartMs;
    const timePhase = elapsed >= 14000 ? 2 : elapsed >= 7000 ? 1 : 0;
    const phase = Math.max(bubblePhase, timePhase);
    let text;
    if (phase >= 2) {
      text = "YOU'RE RICH!";
      bubblePhase = 2;
    } else if (phase === 1) {
      text = "You're almost rich.";
    } else {
      text = "Wow money..";
    }
    if (text !== lastBubbleText) {
      lastBubbleText = text;
      typeInto(richBubble, text, 52);
    }
  }

  const BILL_W = 15;
  const BILL_H = 9;
  const GAP    = 1;

  function getTreeMetrics() {
    // Anchor height can include the persistent label below the image.
    // For pile alignment, use the actual rendered image height as the "base".
    const img = treeEl.querySelector("img");
    const w = treeEl.offsetWidth || 150;
    const top = treeEl.offsetTop;
    const left = treeEl.offsetLeft;
    const imgH = (img && (img.offsetHeight || img.getBoundingClientRect().height)) || treeEl.offsetHeight || 240;
    return { treeLeft: left, treeTop: top, treeW: w, treeH: imgH, treeBase: top + imgH };
  }

  function addPileBillSized(wIn, hIn, srcIn) {
    const { treeLeft, treeW, treeBase } = getTreeMetrics();

    // Build a loose mound (like leaves) instead of a rigid grid.
    const center = treeLeft + treeW * 0.55;
    const radius = Math.max(28, treeW * 0.72);
    const settleScale = 0.9 + Math.random() * 0.9; // slightly larger settled pile pieces
    const pileBoost = 1.15; // make the pile read fuller than the fall
    const w = Math.max(10, Math.round((wIn ?? BILL_W) * (wIn ? pileBoost : settleScale)));
    const h = Math.max(7, Math.round((hIn ?? BILL_H) * (hIn ? pileBoost : settleScale)));
    const src = srcIn ?? pickMoneyImage();
    const randN = () => {
      // Box–Muller
      const u = Math.max(1e-6, Math.random());
      const v = Math.max(1e-6, Math.random());
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    };

    const xRaw = center + randN() * (radius * 0.28);
    const xMin = treeLeft - treeW * 0.12;
    const xMax = treeLeft + treeW - w + treeW * 0.12;
    const x = Math.min(xMax, Math.max(xMin, xRaw));

    const dx = Math.abs(x - center);
    const falloff = Math.max(0, 1 - (dx / radius) * (dx / radius));
    // Global pile grows as more bills settle; cap so it doesn't climb forever.
    const globalRise = Math.min(300, pileCount * 0.52);
    const moundRise = globalRise * falloff;
    const y = treeBase - h - moundRise + (Math.random() - 0.5) * 6;

    if (y < -(BILL_H * 2)) return; // past top of scene — stop

    const wrap = document.createElement("div");
    wrap.setAttribute("aria-hidden", "true");
    wrap.style.cssText =
      "position:absolute;" +
      "left:" + Math.round(x) + "px;" +
      "top:" + Math.round(y) + "px;" +
      "width:" + Math.round(w) + "px;" +
      "height:auto;" +
      "pointer-events:none;z-index:46;" +
      "will-change:transform;" +
      "transform:rotate(" + ((Math.random() - 0.5) * 22).toFixed(2) + "deg);" +
      "opacity:" + (0.88 + Math.random() * 0.12).toFixed(2) + ";" +
      "filter:saturate(1.05) contrast(1.02);";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.draggable = false;
    img.style.cssText =
      "display:block;" +
      "width:100%;" +
      "height:auto;" +
      "filter:hue-rotate(-14deg) saturate(1.22) contrast(1.18) brightness(1.08) drop-shadow(0 1px 1px rgba(0,0,0,0.22));" +
      "image-rendering:auto;" +
      "pointer-events:none;";

    wrap.appendChild(img);
    pileEl.appendChild(wrap);
    pileCount++;
  }

  function addPileBill() {
    addPileBillSized();
  }

  function spawnBill() {
    const { treeLeft, treeTop, treeW, treeBase } = getTreeMetrics();
    // Falling bills: slightly larger so the bitmap detail reads.
    const fallScale = 0.72 + Math.random() * 0.85;
    const w      = Math.max(14, Math.round(22 * fallScale));
    const h      = w;
    const src    = pickMoneyImage();
    const startXPx = treeLeft + Math.random() * Math.max(1, treeW - w);
    // Spawn near the bottom edge of the tree (so it reads like bills/leaves shedding into a pile).
    // Start higher up on the tree so the fall reads like a canopy shedding.
    const startYPx = treeBase - Math.max(34, Math.round((treeBase - treeTop) * 0.88));
    const wobble = (Math.random() - 0.5) * 22;
    const dur    = 0.34 + Math.random() * 0.22;
    const rotate = (Math.random() - 0.5) * 28;
    const fallY  = Math.max(40, Math.round((treeBase - startYPx) + (BILL_H * 0.9)));

    const wrap = document.createElement("div");
    wrap.setAttribute("aria-hidden", "true");
    // Snap to whole pixels so sub-pixel interpolation can't blur the image
    const snapX = Math.round(startXPx);
    const snapY = Math.round(startYPx);
    const snapW = Math.round(w);
    wrap.style.cssText =
      "position:absolute;" +
      "left:" + snapX + "px;" +
      "top:" + snapY + "px;" +
      "width:" + snapW + "px;" +
      "height:auto;" +
      "pointer-events:none;z-index:49;" +
      "will-change:transform;" +
      "animation:bill-fall " + dur + "s ease-in forwards;" +
      "--wobble:" + wobble + "px;--rotate:" + rotate + "deg;--fallY:" + fallY + "px;";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.draggable = false;
    img.style.cssText =
      "display:block;" +
      "width:100%;" +
      "height:auto;" +
      "filter:hue-rotate(-28deg) saturate(1.18) brightness(1.05);" +
      "image-rendering:auto;" +
      "pointer-events:none;";

    wrap.appendChild(img);
    pileEl.appendChild(wrap);
    window.setTimeout(() => {
      wrap.remove();
      // Settle into the pile with the same size as the falling bill.
      addPileBillSized(w, h, src);
    }, dur * 1000 + 30);
  }

  function start() {
    if (spawnInterval != null) return;
    hoverStartMs = Date.now();
    spawnInterval = window.setInterval(spawnBill, 90);
    updateRichBubble();
    setRichBubbleVisible(true);
    if (bubbleTimer == null) {
      bubbleTimer = window.setInterval(updateRichBubble, 220);
    }
  }

  function stop() {
    if (spawnInterval == null) return;
    window.clearInterval(spawnInterval);
    spawnInterval = null;
    if (bubbleTimer != null) {
      window.clearInterval(bubbleTimer);
      bubbleTimer = null;
    }
    // If user leaves and comes back, advance to the next message.
    if (bubblePhase < 2) bubblePhase += 1;
    setRichBubbleVisible(false);
  }

  treeEl.addEventListener("mouseenter", start);
  treeEl.addEventListener("mouseleave", stop);
})();

function applySceneLayoutForViewportWidth(widthPx) {
  const layout = effectiveSceneLayoutForWidth(widthPx);
  sceneAssetAnchors.forEach((a, i) => {
    const slot = layout[i];
    if (slot) applyCoordinates(a, slot, widthPx);
  });
  applyDonatePosition(widthPx);
  leafZoneMeta.forEach(({ el, sceneIndex, heightPx }) => {
    const c = layout[sceneIndex];
    if (!c || !el) return;
    el.style.top = `${c.top}px`;
    el.style.left = `${c.left}px`;
    el.style.width = `${c.width}px`;
    el.style.height = `${heightPx}px`;
  });
}

function bindBirdBackgroundTrigger() {
  let lastBirdHoverAt = 0;
  const throttleMs = 850;

  function tryStartFromPointer(e) {
    if (e.pointerType === "touch") return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el) return;
    if (el.closest(".asset-link")) return;
    if (el.closest(".donate-btn")) return;
    if (el !== background) return;
    if (!isPointerOverCollageArt(e.clientX, e.clientY)) return;
    if (Date.now() - lastBirdHoverAt < throttleMs) return;
    lastBirdHoverAt = Date.now();
    startBirdFlightFromBrandingTree();
  }

  viewport.addEventListener("pointermove", tryStartFromPointer, { passive: true });
  background.addEventListener("mouseenter", (e) => {
    if (Date.now() - lastBirdHoverAt < throttleMs) return;
    if (!isPointerOverCollageArt(e.clientX, e.clientY)) return;
    lastBirdHoverAt = Date.now();
    startBirdFlightFromBrandingTree();
  });
}

bindBirdBackgroundTrigger();

if (background.complete && background.naturalWidth > 0) {
  mountLeavesLayer();
} else {
  background.addEventListener("load", mountLeavesLayer, { once: true });
  background.addEventListener(
    "error",
    () => {
      if (!leavesLayerMounted) {
        const w = Math.max(1, viewport?.clientWidth || window.innerWidth);
        if (shouldDeferAmbientFx(w)) return;
        leavesLayerMounted = true;
        buildAmbientLeaves();
        scene.appendChild(leavesRoot);
      }
    },
    { once: true }
  );
}

let lastViewportKey = "";
let sceneScaleRetryFrames = 0;

function refreshSceneScale() {
  // 1. Measure the physical DOM container
  const viewportEl = document.getElementById("spatial-viewport");
  if (!viewportEl) return;

  const iw = viewportEl.clientWidth || window.innerWidth;
  const ih = viewportEl.clientHeight || window.innerHeight;

  // FIXED: retry on next frame instead of proceeding with bad values
  if (iw < 1 || ih < 1) {
    sceneScaleRetryFrames = Math.min(sceneScaleRetryFrames + 1, 120);
    requestAnimationFrame(refreshSceneScale);
    return;
  }
  sceneScaleRetryFrames = 0;

  syncBackgroundImageToViewport(iw);
  applySceneLayoutForViewportWidth(iw);
  scene.classList.toggle("scene--is-mobile", isMobileViewportWidth(iw));
  syncNetherPortalOverlayPosition(iw);
  // If we start on mobile we skip leaf FX; if the viewport later widens, mount then.
  if (!isMobileViewportWidth(iw)) {
    mountLeavesLayer();
  }

  const viewportKey = `${iw}x${ih}`;
  if (viewportKey !== lastViewportKey) {
    lastViewportKey = viewportKey;
    if (birdFlightActive) {
      hideBirdSpeechBubble();
      hoverBirdRoot.classList.remove("is-catchable");
      hoverBirdRoot.style.opacity = "0";
      if (birdFrameIntervalId !== null) {
        window.clearInterval(birdFrameIntervalId);
        birdFrameIntervalId = null;
      }
      if (birdFlightEndTimer !== null) {
        window.clearTimeout(birdFlightEndTimer);
        birdFlightEndTimer = null;
      }
      birdFlightActive = false;
      hoverBirdRoot.style.transition = "none";
      hoverBirdRoot.style.left = "-9999px";
      hoverBirdRoot.style.top = "-9999px";
    }
  }

  // 3. Your original, flawless math
  const rawScale = Math.min(iw / DESIGN_WIDTH, ih / DESIGN_HEIGHT);
  const scale = Math.round(rawScale * 1e6) / 1e6;

  // Added a fallback to 1 to mathematically guarantee Infinity cannot occur
  const maxDim = Math.max(iw, ih) || 1; 
  const edgeInset = 0.35 / maxDim;
  
  // Guarantee finalScale is always a valid number
  let finalScale = scale * (1 - edgeInset);
  if (!Number.isFinite(finalScale) || finalScale <= 0) {
    // Transient bad layout values can happen in embeds during refresh; keep trying.
    if (sceneScaleRetryFrames < 30) {
      sceneScaleRetryFrames += 1;
      requestAnimationFrame(refreshSceneScale);
    }
    return;
  }

  // Snap scale to device pixels for crisper text inside the transformed scene.
  const dpr = window.devicePixelRatio || 1;
  finalScale = Math.round(finalScale * dpr * 1024) / (dpr * 1024);

  const scaledW = DESIGN_WIDTH * finalScale;
  const scaledH = DESIGN_HEIGHT * finalScale;

  const marginX = Math.max(0, (iw - scaledW) / 2 - 2);
  const marginY = Math.max(0, (ih - scaledH) / 2 - 2);
  const horizontalNudge = Math.min(70, marginX);
  const verticalNudge = Math.min(50, marginY);

  let txPx = -DESIGN_WIDTH / 2 - SCENE_SHIFT_LEFT_EXTRA_PX;
  let tyPx = (SCENE_Y_SHIFT_PERCENT / 100) * DESIGN_HEIGHT - verticalNudge - SCENE_SHIFT_UP_PX;
  if (isMobileViewportWidth(iw)) {
    tyPx += MOBILE_SCENE_SHIFT_DOWN_PX;
  }
  
  const needsTopSeamFix =
    (iw <= 940 && ih <= 894) || (iw > 1680 && ih <= 910);
  if (needsTopSeamFix) {
    tyPx += 3 / dpr;
  }
  
  const snap = (v) => Math.round(v * dpr) / dpr;
  txPx = snap(txPx);
  tyPx = snap(tyPx);

  // NEW: Abort if the live server gives us bad math
  if (!Number.isFinite(txPx) || !Number.isFinite(tyPx) || !Number.isFinite(finalScale)) {
    if (sceneScaleRetryFrames < 30) {
      sceneScaleRetryFrames += 1;
      requestAnimationFrame(refreshSceneScale);
    }
    return;
  }

  // Apply the unbreakable transform
  scene.style.transform = `translate3d(${txPx}px, ${tyPx}px, 0) scale(${finalScale})`;
}

function initResponsiveMap() {
  // Defer past the first paint — critical for cached loads on GitHub Pages
  requestAnimationFrame(() => requestAnimationFrame(refreshSceneScale));

  const spatialViewportEl = document.getElementById("spatial-viewport");
  if (spatialViewportEl && typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(refreshSceneScale);
    });
    ro.observe(spatialViewportEl);
  } else {
    window.addEventListener("resize", refreshSceneScale);
  }
}
// Run immediately, but let the observer handle the live server delays
initResponsiveMap();
window.addEventListener("load", () => requestAnimationFrame(refreshSceneScale), { once: true });
window.addEventListener("pageshow", () => requestAnimationFrame(refreshSceneScale));

// Extra safety: for embed environments that report size late, re-apply for ~2s.
{
  const start = Date.now();
  const pump = () => {
    refreshSceneScale();
    if (Date.now() - start < 2000) requestAnimationFrame(pump);
  };
  requestAnimationFrame(pump);
}



