"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pan and zoom for a server-rendered <ConceptGraph>. Strictly progressive
 * enhancement: it renders nothing until it has hydrated and found the SVG, and
 * all it ever touches is the `transform` of the graph's viewport group plus a
 * few CSS custom properties. Without JavaScript the graph stays exactly the
 * static SVG it always was — every node still a real `<a href>` in the HTML,
 * which is what GPTBot, ClaudeBot and PerplexityBot read.
 *
 * Labels thin out as you zoom out. Each node carries a `data-tier` band
 * assigned by degree rank at build time, and each band fades over its own zoom
 * window, so the best-connected concepts stay legible longest. Every zoom
 * change is eased frame by frame rather than applied at once, so labels dissolve
 * instead of blinking out — and the map stays readable when it holds hundreds
 * of concepts rather than dozens.
 */

const MIN_ZOOM = 0.4;
const MAX_ZOOM = 5;
/** Multiplier for one press of the +/- buttons. */
const STEP = 1.45;
/** Share of the remaining distance covered per frame — the softness of the fade. */
const EASE = 0.2;
/** Pointer travel (px) past which a gesture counts as a pan, not a click on a node. */
const DRAG_SLOP = 5;

/**
 * `[fully faded at, fully visible at]` zoom per label tier: 0 hubs, 1 mid,
 * 2 leaves. Tuning label density is this table and nothing else. Every band
 * reaches 1 at or below zoom 1, so the resting view shows all labels.
 */
const LABEL_BANDS: [number, number][] = [
  [0.28, 0.5],
  [0.48, 0.72],
  [0.68, 0.95],
];

export function GraphZoom({
  targetId,
  labels,
}: {
  targetId: string;
  labels: { zoomIn: string; zoomOut: string; reset: string };
}) {
  const [ready, setReady] = useState(false);
  const api = useRef<{ step: (dir: 1 | -1) => void; reset: () => void }>(null);

  useEffect(() => {
    const svg = document.getElementById(targetId) as SVGSVGElement | null;
    const viewport = svg?.querySelector<SVGGElement>("[data-graph-viewport]");
    if (!svg || !viewport) return;

    const width = svg.viewBox.baseVal.width || 800;
    const height = svg.viewBox.baseVal.height || 600;

    // Rendered state, and the target it eases towards.
    let k = 1;
    let x = 0;
    let y = 0;
    let tk = 1;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    /** Keep the scaled content overlapping the frame instead of drifting off. */
    const clampPan = (v: number, span: number, scale: number) => {
      const edge = span * (1 - scale);
      return Math.min(Math.max(0, edge), Math.max(Math.min(0, edge), v));
    };

    const paint = () => {
      viewport.setAttribute(
        "transform",
        `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${k.toFixed(4)})`,
      );
      LABEL_BANDS.forEach(([from, to], tier) => {
        const o = Math.min(1, Math.max(0, (k - from) / (to - from)));
        svg.style.setProperty(`--label-op-${tier}`, o.toFixed(3));
      });
      // Once magnified the graph owns touch gestures; at rest the page scrolls.
      svg.style.touchAction = k > 1.01 ? "none" : "pan-y";
    };

    const settle = () => {
      const dk = tk - k;
      const dx = tx - x;
      const dy = ty - y;
      if (Math.abs(dk) < 0.0004 && Math.abs(dx) < 0.04 && Math.abs(dy) < 0.04) {
        k = tk;
        x = tx;
        y = ty;
        paint();
        raf = 0;
        return;
      }
      k += dk * EASE;
      x += dx * EASE;
      y += dy * EASE;
      paint();
      raf = requestAnimationFrame(settle);
    };
    const nudge = () => {
      if (!raf) raf = requestAnimationFrame(settle);
    };

    const toLocal = (clientX: number, clientY: number) => {
      const rect = svg.getBoundingClientRect();
      return {
        px: ((clientX - rect.left) / rect.width) * width,
        py: ((clientY - rect.top) / rect.height) * height,
      };
    };

    /** Zoom to `next`, holding the viewBox point (px, py) still under the cursor. */
    const zoomTo = (next: number, px: number, py: number) => {
      const nk = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      if (nk === tk) return;
      tx = clampPan(px - ((px - tx) / tk) * nk, width, nk);
      ty = clampPan(py - ((py - ty) / tk) * nk, height, nk);
      tk = nk;
      nudge();
    };

    api.current = {
      step: (dir) => zoomTo(dir > 0 ? tk * STEP : tk / STEP, width / 2, height / 2),
      reset: () => {
        tk = 1;
        tx = 0;
        ty = 0;
        nudge();
      },
    };

    // Plain wheel keeps scrolling the page — hijacking it on a page-embedded
    // graph is hostile. Ctrl/Cmd + wheel is the map convention, and it is also
    // what a trackpad pinch sends.
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const { px, py } = toLocal(e.clientX, e.clientY);
      zoomTo(tk * Math.exp(-e.deltaY * 0.0015), px, py);
    };

    const pointers = new Map<number, { x: number; y: number }>();
    let pinchDist = 0;
    let travelled = 0;
    let dragged = false;

    const onPointerMove = (e: PointerEvent) => {
      const prev = pointers.get(e.pointerId);
      if (!prev) return;

      if (pointers.size === 2) {
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchDist > 0 && dist > 0) {
          const mid = toLocal((a.x + b.x) / 2, (a.y + b.y) / 2);
          zoomTo(tk * (dist / pinchDist), mid.px, mid.py);
        }
        pinchDist = dist;
        dragged = true;
        return;
      }

      const rect = svg.getBoundingClientRect();
      const dxClient = e.clientX - prev.x;
      const dyClient = e.clientY - prev.y;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      travelled += Math.abs(dxClient) + Math.abs(dyClient);
      if (travelled > DRAG_SLOP) dragged = true;
      if (!dragged) return;

      // Panning tracks the finger exactly; only zoom is eased.
      tx = clampPan(tx + (dxClient * width) / rect.width, width, tk);
      ty = clampPan(ty + (dyClient * height) / rect.height, height, tk);
      x = tx;
      y = ty;
      paint();
      svg.classList.add("is-panning");
    };

    const onPointerUp = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchDist = 0;
      if (pointers.size > 0) return;
      svg.classList.remove("is-panning");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      if (pointers.size === 0) {
        travelled = 0;
        dragged = false;
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
        window.addEventListener("pointercancel", onPointerUp);
      }
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      }
    };

    // A drag that started on a node must not also open that node.
    const onClick = (e: MouseEvent) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    };

    // Tabbing to a node that has been panned out of frame would move focus
    // somewhere invisible; bring it back into view instead.
    const onFocusIn = (e: FocusEvent) => {
      const node = (e.target as Element | null)?.closest?.("[data-node-id]");
      if (!node) return;
      try {
        if (!node.matches(":focus-visible")) return;
      } catch {
        return;
      }
      const dot = node.querySelector("circle.concept-node-dot");
      if (!dot) return;
      const cx = Number(dot.getAttribute("cx"));
      const cy = Number(dot.getAttribute("cy"));
      const margin = 48;
      const onScreenX = cx * tk + tx;
      const onScreenY = cy * tk + ty;
      if (
        onScreenX > margin &&
        onScreenX < width - margin &&
        onScreenY > margin &&
        onScreenY < height - margin
      ) {
        return;
      }
      tx = clampPan(width / 2 - cx * tk, width, tk);
      ty = clampPan(height / 2 - cy * tk, height, tk);
      nudge();
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    svg.addEventListener("pointerdown", onPointerDown);
    svg.addEventListener("click", onClick, true);
    svg.addEventListener("focusin", onFocusIn);
    paint();
    // Reveal the controls once the graph is wired — so the buttons never exist
    // in the exported HTML for a visitor whose JavaScript never runs. A timer
    // rather than a frame: rAF is suspended in a background tab, and the
    // controls should be there the moment the tab is looked at.
    const reveal = window.setTimeout(() => setReady(true), 0);

    return () => {
      clearTimeout(reveal);
      if (raf) cancelAnimationFrame(raf);
      svg.removeEventListener("wheel", onWheel);
      svg.removeEventListener("pointerdown", onPointerDown);
      svg.removeEventListener("click", onClick, true);
      svg.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      svg.classList.remove("is-panning");
      viewport.removeAttribute("transform");
      svg.removeAttribute("style");
      api.current = null;
    };
  }, [targetId]);

  if (!ready) return null;

  return (
    <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-xl border border-border bg-background/80 backdrop-blur">
      <button
        type="button"
        onClick={() => api.current?.step(1)}
        aria-label={labels.zoomIn}
        title={labels.zoomIn}
        className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => api.current?.step(-1)}
        aria-label={labels.zoomOut}
        title={labels.zoomOut}
        className="flex h-9 w-9 items-center justify-center border-t border-border text-muted transition-colors hover:text-accent"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M5 12h14" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => api.current?.reset()}
        aria-label={labels.reset}
        title={labels.reset}
        className="flex h-9 w-9 items-center justify-center border-t border-border text-muted transition-colors hover:text-accent"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 9V5h4M21 9V5h-4M3 15v4h4M21 15v4h-4" />
        </svg>
      </button>
    </div>
  );
}
