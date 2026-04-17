"use client";

import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";

function usePrefersReducedMotion() {
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => {
      reduced.current = !!mql.matches;
    };
    set();
    mql.addEventListener?.("change", set);
    return () => mql.removeEventListener?.("change", set);
  }, []);

  return reduced;
}

export default function FluidSlab({
  className,
  intensity = 0.8,
  tint = [0.12, 0.5, 0.22],
  tintStrength = .05,
  followMouse = false,
  mouseStrength = 2.0,
  eventTargetRef,
  /** Cap DPR for performance (contact uses 1 on small screens). */
  maxPixelRatio = 1.5,
  antialias = true,
}: {
  className?: string;
  intensity?: number;
  tint?: [number, number, number];
  tintStrength?: number;
  followMouse?: boolean;
  mouseStrength?: number;
  eventTargetRef?: RefObject<HTMLElement | null>;
  maxPixelRatio?: number;
  antialias?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const shader = useMemo(() => {
    // Neutral “liquid glass” — black/white only, no tint.
    const vertexShader = /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;
      varying vec2 vUv;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uIntensity;
      uniform vec3 uTint;
      uniform vec2 uMouse;
      uniform float uMouseStrength;
      uniform float uMouseVel;
      uniform float uTintStrength;

      // Hash + value noise
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.55;
        mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = m * p;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        vec2 px = 1.0 / max(uResolution, vec2(1.0));

        // Slight vignette + “bevel” to read as a slab, but subtle.
        float edge =
          smoothstep(0.0, 0.06, uv.x) *
          smoothstep(0.0, 0.06, uv.y) *
          smoothstep(0.0, 0.06, 1.0 - uv.x) *
          smoothstep(0.0, 0.06, 1.0 - uv.y);

        float t = uTime * 0.12;
        vec2 p = (uv - 0.5);
        p.x *= uResolution.x / max(uResolution.y, 1.0);

        // Mouse influence: local warp + movement-driven ripples.
        vec2 m = (uMouse - 0.5);
        m.x *= uResolution.x / max(uResolution.y, 1.0);
        float md = length(p - m);
        float mf = exp(-md * 3.0) * uMouseStrength;
        p += (p - m) * (0.06 * mf);

        // Flow
        float n1 = fbm(p * 3.2 + vec2(t, -t));
        float n2 = fbm(p * 5.0 + vec2(-t * 1.3, t * 1.1));
        vec2 warp = vec2(n1 - 0.5, n2 - 0.5);

        float liquid = fbm((p + warp * 0.55) * 6.0 + vec2(t * 0.8, t * 0.6));

        // Cursor passes "push" the field: stronger when moving, decays with distance.
        float v = clamp(uMouseVel, 0.0, 1.0);
        float push = exp(-md * 5.0) * v * uMouseStrength;
        liquid += push * 0.18;

        // A tighter, subtler ring ripple close to the cursor.
        float ring = sin(md * 26.0 - uTime * 2.6) * exp(-md * 6.0);
        liquid += ring * 0.02 * v * uMouseStrength;
        float rip = noise((p + warp) * 18.0 + t * 2.0);

        // Faux normal from height field for specular
        float h = liquid;
        float hx = fbm((p + vec2(px.x, 0.0) + warp * 0.55) * 6.0 + vec2(t * 0.8, t * 0.6));
        float hy = fbm((p + vec2(0.0, px.y) + warp * 0.55) * 6.0 + vec2(t * 0.8, t * 0.6));
        vec3 n = normalize(vec3(h - hx, h - hy, 0.18));

        vec3 lightDir = normalize(vec3(-0.35, -0.25, 0.85));
        float diff = clamp(dot(n, lightDir), 0.0, 1.0);
        float spec = pow(clamp(dot(reflect(-lightDir, n), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 24.0);

        float base = mix(0.55, 0.80, liquid);
        float sheen = spec * 0.55 + diff * 0.08;
        float micro = (rip - 0.5) * 0.06;

        float val = base + sheen + micro;
        val = mix(0.65, val, clamp(uIntensity, 0.0, 1.0));
        val = mix(0.62, val, edge);

        // Keep within a bright glass range (avoid murky midtones).
        val = clamp(val, 0.1, 0.99);

        // Tint: apply a colored multiplier on top of luminance, then blend by tint strength.
        float tintAmt = clamp(uTintStrength, 0.0, 1.0) * clamp(uIntensity, 0.0, 1.0);
        vec3 neutral = vec3(val);
        vec3 tintMul = mix(vec3(1.0), clamp(uTint, 0.0, 1.0), 0.92);
        vec3 tinted = neutral * tintMul;
        vec3 col = mix(neutral, tinted, tintAmt);
        gl_FragColor = vec4(col, 0.9);
      }
    `;

    return { vertexShader, fragmentShader };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const eventTarget = eventTargetRef?.current ?? host;

    const renderer = new THREE.WebGLRenderer({
      antialias,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio ?? 1, Math.max(0.75, maxPixelRatio))
    );

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const lastMouse = new THREE.Vector2(0.5, 0.5);
    let mouseVel = 0;
    let lastVelT = performance.now();
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uIntensity: { value: intensity },
        uTint: { value: new THREE.Vector3(tint[0], tint[1], tint[2]) },
        uMouse: { value: mouse },
        uMouseStrength: { value: followMouse ? mouseStrength : 0.0 },
        uMouseVel: { value: 0 },
        uTintStrength: { value: tintStrength },
      },
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    host.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const w = Math.max(1, host.clientWidth);
      const h = Math.max(1, host.clientHeight);
      renderer.setSize(w, h, false);
      (material.uniforms.uResolution.value as THREE.Vector2).set(w, h);
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(host);

    const onPointerMove = (e: PointerEvent) => {
      if (!followMouse) return;
      const r = host.getBoundingClientRect();
      const x = (e.clientX - r.left) / Math.max(1, r.width);
      const y = (e.clientY - r.top) / Math.max(1, r.height);
      targetMouse.set(
        THREE.MathUtils.clamp(x, 0, 1),
        1.0 - THREE.MathUtils.clamp(y, 0, 1),
      );
    };
    const onPointerLeave = () => {
      targetMouse.set(0.5, 0.5);
    };

    eventTarget.addEventListener("pointermove", onPointerMove);
    eventTarget.addEventListener("pointerleave", onPointerLeave);

    const render = () => {
      const now = performance.now();
      const t = (now - start) / 1000;
      material.uniforms.uTime.value = t;
      // Dampen pointer input to avoid jumpiness.
      if (followMouse) {
        mouse.lerp(targetMouse, 0.08);
        const dt = Math.max(0.001, (now - lastVelT) / 1000);
        const d = mouse.distanceTo(lastMouse);
        // Normalize to 0..1-ish in typical pointer speeds; then smooth.
        const inst = THREE.MathUtils.clamp(d / dt * 0.35, 0, 1);
        mouseVel = THREE.MathUtils.lerp(mouseVel, inst, 0.12);
        material.uniforms.uMouseVel.value = mouseVel;
        lastMouse.copy(mouse);
        lastVelT = now;
      }
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    // Reduced motion: render once and stop.
    if (prefersReducedMotion.current) {
      material.uniforms.uTime.value = 0.0;
      renderer.render(scene, camera);
    } else {
      raf = window.requestAnimationFrame(render);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      eventTarget.removeEventListener("pointermove", onPointerMove);
      eventTarget.removeEventListener("pointerleave", onPointerLeave);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, [
    antialias,
    eventTargetRef,
    followMouse,
    intensity,
    maxPixelRatio,
    mouseStrength,
    prefersReducedMotion,
    shader.fragmentShader,
    shader.vertexShader,
    tint,
    tintStrength,
  ]);

  return <div ref={hostRef} className={className} />;
}

