(function () {
  const btn = document.getElementById("aiBtn");
  const promptEl = document.getElementById("aiPrompt");
  const responseEl = document.getElementById("aiResponse");

  // Exposed so user-presets.js can pre-fill the save name input.
  window.aiSuggestedName = null;

  // Maps renderStyle → a built-in preset key that uses that renderStyle.
  // Used only to get sensible baseline slider values before applying AI params.
  // lastNonCustomRenderStyle is explicitly overridden after applyPresetToUI so
  // the actual render algorithm always matches what the AI suggested.
  const RENDER_STYLE_BASE_PRESET = {
    organic:          "organic_natural_connections",
    organic_dots:     "organic_dots",
    halftone:         "grid_connected_dither",
    halftone_edges:   "halftone_edges_dither",
    stipple:          "organic_dither_field_final",
    diamond_overlay:  "diamond_overlay",
    square_overlay:   "square_overlay",
    concentric:       "concentric_dither",
    ordered:          "ordered_bayer8",
    ordered8:         "ordered_bayer8",
    threshold:        "threshold_basic",
    fs:               "floyd_steinberg",
    atkinson:         "atkinson",
    jarvis:           "jarvis_judice_ninke",
    stucki:           "stucki",
    burkes:           "burkes",
    sierra2:          "sierra2",
  };

  // Save the original image file when loaded so we can send it to AI.
  let currentImageFile = null;
  document.getElementById("fileInput").addEventListener("change", (e) => {
    currentImageFile = e.target.files[0] ?? null;
  });

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const MAX = 1024;
          const scale = Math.min(1, MAX / Math.max(img.width, img.height));
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          const base64 = canvas.toDataURL("image/jpeg", 0.85).split(",")[1];
          resolve({ base64, mediaType: "image/jpeg" });
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function askAI() {
    const prompt = promptEl.value.trim();
    const hasImage = !!currentImageFile;

    if (!prompt && !hasImage) {
      responseEl.textContent = "Upload an image or describe what you want first.";
      responseEl.className = "ai-response";
      responseEl.hidden = false;
      return;
    }

    btn.disabled = true;
    btn.textContent = "Vibing\u2026";
    responseEl.hidden = true;
    responseEl.className = "ai-response";

    try {
      const body = { prompt: prompt || "" };

      if (hasImage) {
        const { base64, mediaType } = await fileToBase64(currentImageFile);
        body.imageBase64 = base64;
        body.imageMediaType = mediaType;
      }

      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error || res.statusText);
      }

      const { name, renderStyle, explanation, parameters } = await res.json();
      console.log("[fither ai] suggestion", { name, renderStyle, parameters });

      // Apply a base preset that has the right renderStyle. This sets
      // lastNonCustomRenderStyle (via updateLastNonCustomRenderStyle inside
      // applyPresetToUI) so readCfg returns the correct algorithm when we
      // switch to "custom" below.
      const basePresetKey =
        RENDER_STYLE_BASE_PRESET[renderStyle] || "organic_natural_connections";
      applyPresetToUI(basePresetKey, true);
      // Override lastNonCustomRenderStyle to the AI's actual suggestion —
      // applyPresetToUI sets it from the base preset key which may differ.
      lastNonCustomRenderStyle = renderStyle;

      // Overwrite all AI-generated parameters on top.
      const params =
        parameters && typeof parameters === "object"
          ? Object.entries(parameters)
          : [];
      const applied = [];
      const ignored = [];
      for (const [key, val] of params) {
        const el = document.getElementById(key);
        if (!el) {
          ignored.push(key);
          continue;
        }
        applied.push(key);
        setVal(key, val);
      }
      if (ignored.length) {
        console.warn("[fither ai] ignored params (no matching control id)", ignored);
      }
      if (!applied.length) {
        console.warn("[fither ai] no params applied — suggestion keys didn't match controls");
      }

      // Switch to custom — readCfg will use lastNonCustomRenderStyle.
      document.getElementById("presetSelect").value = "custom";

      syncUIOutputs();
      syncNumericInputsFromSliders();

      if (srcImg) {
        hasRendered = false;
        setStatus("Rendering...");
        // Force an immediate render pass even if timers are in-flight.
        try {
          redraw();
        } catch (_) {
          scheduleRender(true);
        }
      }

      // Store name so the ★ Save button can pre-fill it.
      window.aiSuggestedName = name || null;

      responseEl.textContent = explanation;
      responseEl.hidden = false;
    } catch (err) {
      responseEl.textContent = "Error: " + err.message;
      responseEl.className = "ai-response ai-response--error";
      responseEl.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = "Go";
    }
  }

  btn.addEventListener("click", askAI);

  promptEl.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") askAI();
  });
})();
