// presets.js
// Base preset definitions for the Fither p5 editor.
// Loaded BEFORE user-presets.js and sketch.js.
//
// `sketch.js` expects a global `DITHER_PRESETS` object keyed by preset id.
// Keep values aligned with the sliders/inputs in `index.html`.

/** Base slider defaults (match index.html initial values). */
const BASE = {
  threshold: 0.5,
  gridCount: 50,
  minRadius: 2,
  maxRadius: 10,
  dotJitter: 0,
  bridgeScale: 3.7699,
  bridgeWaist: 0.1,
  maxConnectDist: 1.2,
  toneDiffLimit: 0.15,
  gradientThreshold: 0.12,
  edgeTaper: 0.3,
  bridgeCurve: 0,
  maxBright: 0.5,
  maxLinksPerDot: 4,
  contrast: 1,
  quantizeLevels: 0,
  stippleJitter: 0.42,
  halftoneGamma: 0.88,
  edgeMag: 0.14,
};

function mk(key, label, renderStyle, overrides = {}) {
  return Object.assign({ key, label, renderStyle }, BASE, overrides);
}

const PRESETS = {
  custom: mk("custom", "custom", "organic"),

  // Organic family
  organic_natural_connections: mk("organic_natural_connections", "organic natural connections", "organic", {
    gridCount: 52,
    minRadius: 1.9,
    dotJitter: 0.05,
  }),
  organic_grid_connections: mk("organic_grid_connections", "organic grid connections", "organic", {
    gridCount: 46,
    maxLinksPerDot: 5,
    dotJitter: 0.08,
  }),
  organic_flow_dots: mk("organic_flow_dots", "organic flow dots", "organic_dots", {
    gridCount: 44,
    minRadius: 0.9,
    maxRadius: 16,
    maxLinksPerDot: 2,
    dotJitter: 0.35,
  }),
  organic_dot_field: mk("organic_dot_field", "organic dot field", "organic_dots", {
    gridCount: 52,
    minRadius: 0.9,
    maxRadius: 15,
    maxLinksPerDot: 0,
    dotJitter: 0.25,
  }),
  organic_dither_spacing: mk("organic_dither_spacing", "organic dither spacing", "organic", {
    gridCount: 42,
    maxLinksPerDot: 3,
    maxConnectDist: 1.35,
  }),
  organic_dither_28x28: mk("organic_dither_28x28", "organic 28×28", "organic", {
    gridCount: 28,
    maxLinksPerDot: 2,
  }),
  organic_dither_field_final: mk("organic_dither_field_final", "organic stipple", "stipple", {
    gridCount: 78,
    stippleJitter: 0.62,
    halftoneGamma: 0.9,
  }),
  organic_dither_blob_field: mk("organic_dither_blob_field", "organic blob field", "organic", {
    gridCount: 26,
    minRadius: 5,
    maxRadius: 24,
    bridgeScale: 6.2,
    maxLinksPerDot: 2,
    contrast: 1.35,
  }),

  // Overlay / geometric
  diamond_overlay: mk("diamond_overlay", "diamond overlay", "diamond_overlay", {
    gridCount: 60,
    minRadius: 1.2,
    maxRadius: 14,
    stippleJitter: 0.1,
    halftoneGamma: 0.88,
    contrast: 1.1,
  }),
  square_overlay: mk("square_overlay", "square overlay", "square_overlay", {
    gridCount: 60,
    minRadius: 1.2,
    maxRadius: 14,
    stippleJitter: 0.1,
    halftoneGamma: 0.88,
    contrast: 1.1,
  }),
  concentric_dither: mk("concentric_dither", "concentric rings", "concentric", {
    gridCount: 55,
    minRadius: 1.0,
    maxRadius: 12,
    halftoneGamma: 0.88,
    contrast: 1.05,
  }),

  // Grid / halftone / threshold / ordered
  halftone_edges_dither: mk("halftone_edges_dither", "halftone + edges", "halftone_edges", {
    gridCount: 65,
    minRadius: 1.0,
    maxRadius: 12,
    halftoneGamma: 0.9,
    edgeMag: 0.22,
    contrast: 1.2,
    stippleJitter: 0.12,
  }),
  threshold_dither: mk("threshold_dither", "threshold", "threshold", { threshold: 0.52, contrast: 1.15 }),
  ordered_bayer8: mk("ordered_bayer8", "ordered bayer 8", "ordered8", { contrast: 1.15 }),
  grid_connected_dither: mk("grid_connected_dither", "halftone", "halftone", {
    gridCount: 72,
    minRadius: 1.2,
    maxRadius: 18,
    stippleJitter: 0.25,
  }),
  grid_dither_no_bright_connections: mk("grid_dither_no_bright_connections", "organic no bright", "organic", {
    maxBright: 0.35,
    maxLinksPerDot: 5,
    gridCount: 64,
  }),

  // Error diffusion
  floyd_steinberg: mk("floyd_steinberg", "floyd-steinberg", "fs", {}),
  atkinson: mk("atkinson", "atkinson", "atkinson", {}),
  jarvis_judice_ninke: mk("jarvis_judice_ninke", "jarvis judice ninke", "jarvis", {}),
  stucki: mk("stucki", "stucki", "stucki", {}),
  burkes: mk("burkes", "burkes", "burkes", {}),
  sierra2: mk("sierra2", "sierra2", "sierra2", {}),

  // Blob / tonal
  five_zone_dither: mk("five_zone_dither", "five zone", "organic", { quantizeLevels: 5, contrast: 1.1 }),
  contrast_based_dither: mk("contrast_based_dither", "high contrast", "organic", { contrast: 1.45 }),
  blob_dither_output: mk("blob_dither_output", "blob dither", "organic", { gridCount: 28, minRadius: 4.5, maxRadius: 26 }),
  large_blob_dither_output: mk("large_blob_dither_output", "large blob dither", "organic", { gridCount: 18, minRadius: 7, maxRadius: 30, contrast: 1.25 }),
  selective_blob_dither_output: mk("selective_blob_dither_output", "selective blob dither", "organic", { gridCount: 22, minRadius: 5.5, maxRadius: 28, maxBright: 0.4 }),
  sparse_blob_dither_output: mk("sparse_blob_dither_output", "sparse blob dither", "organic", { gridCount: 20, minRadius: 6, maxRadius: 28, maxBright: 0.32 }),

  // Aliases (AI preset mapping targets)
  organic_dots: mk("organic_dots", "organic dots", "organic_dots", { gridCount: 60, minRadius: 1.6, maxRadius: 14, dotJitter: 0.25, maxLinksPerDot: 3 }),
  threshold_basic: mk("threshold_basic", "threshold basic", "threshold", { threshold: 0.5, contrast: 1.05 }),
};

// Make globally available (non-module script).
// eslint-disable-next-line no-var
var DITHER_PRESETS = PRESETS;
window.DITHER_PRESETS = DITHER_PRESETS;
