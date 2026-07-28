import type { CSSProperties } from "react";

/**
 * Reveals text word-by-word, each word rising from behind a clip mask.
 * Plays on mount (for above-the-fold headlines). `className` styles the block;
 * `wordClassName` styles each word directly (use this for gradient text — a
 * clip on an ancestor won't paint through the per-word clip masks).
 *
 * Animation is pure CSS (.animate-word-rise), not Motion: the headline is the
 * hero's above-the-fold content, and a JS-gated entrance would hold LCP
 * hostage to hydration. Reduced motion is handled by the global
 * prefers-reduced-motion override in globals.css.
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom me-[0.26em]"
        >
          <span
            className={`animate-word-rise inline-block will-change-transform ${wordClassName ?? ""}`}
            style={
              { "--entrance-delay": `${delay + i * stagger}s` } as CSSProperties
            }
          >
            {/* The trailing space keeps words separable for text extractors:
                AI crawlers strip tags without re-inserting whitespace, so
                margin-only gaps collapse a headline into one unreadable token.
                CSS trims this space at the end of the inline-block's line, so
                the visual gap stays governed by the wrapper's `me-` margin.
                The last word keeps it too — headlines split across several
                TextReveal blocks would otherwise glue at the seam. */}
            {`${word} `}
          </span>
        </span>
      ))}
    </span>
  );
}
