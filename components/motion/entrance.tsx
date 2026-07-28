import type { CSSProperties, ReactNode } from "react";

/**
 * CSS-only fade + rise entrance for above-the-fold content. Unlike <Reveal>
 * (Motion, scroll-triggered), this needs no JS: the animation starts on first
 * paint, so the content — and LCP — never waits for hydration. Use it for
 * anything visible in the initial viewport; keep <Reveal> for content that
 * should animate when scrolled into view.
 */
export function Entrance({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`animate-entrance ${className ?? ""}`}
      style={{ "--entrance-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
