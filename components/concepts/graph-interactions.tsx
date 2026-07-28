"use client";

import { useEffect } from "react";

/**
 * Neighbour highlighting for a server-rendered <ConceptGraph>. Renders
 * nothing: it attaches delegated listeners to the SVG and toggles classes,
 * so the graph itself stays a zero-JS server component and the page still
 * works — links and all — if this never hydrates.
 *
 * Adjacency comes from the data-* attributes already in the markup, so no
 * graph data is serialised into the client bundle a second time.
 */
export function GraphInteractions({ targetId }: { targetId: string }) {
  useEffect(() => {
    const svg = document.getElementById(targetId);
    if (!svg) return;

    const clear = () => {
      svg.classList.remove("is-focused");
      for (const el of svg.querySelectorAll(".is-lit, .is-hovered")) {
        el.classList.remove("is-lit", "is-hovered");
      }
    };

    const light = (node: Element) => {
      const id = node.getAttribute("data-node-id");
      if (!id) return;
      clear();

      const lit = new Set([id, ...(node.getAttribute("data-neighbors") ?? "").split(" ")]);
      for (const el of svg.querySelectorAll("[data-node-id]")) {
        const nodeId = el.getAttribute("data-node-id");
        if (nodeId && lit.has(nodeId)) el.classList.add("is-lit");
      }
      for (const el of svg.querySelectorAll("line[data-source]")) {
        const source = el.getAttribute("data-source");
        const target = el.getAttribute("data-target");
        if (source === id || target === id) el.classList.add("is-lit");
      }

      node.classList.add("is-hovered");
      svg.classList.add("is-focused");
    };

    const onEnter = (event: Event) => {
      const node = (event.target as Element | null)?.closest?.("[data-node-id]");
      if (node) light(node);
    };

    svg.addEventListener("pointerover", onEnter);
    svg.addEventListener("focusin", onEnter);
    svg.addEventListener("pointerleave", clear);
    svg.addEventListener("focusout", clear);

    return () => {
      svg.removeEventListener("pointerover", onEnter);
      svg.removeEventListener("focusin", onEnter);
      svg.removeEventListener("pointerleave", clear);
      svg.removeEventListener("focusout", clear);
      clear();
    };
  }, [targetId]);

  return null;
}
