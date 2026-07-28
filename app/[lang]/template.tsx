/**
 * Wraps each page so it fades/rises in on navigation. `template.tsx` remounts
 * on every route change (unlike layout), which is exactly what we want here.
 *
 * The animation is pure CSS, not Motion: a JS-driven initial={opacity:0}
 * ships the whole page invisible and holds first paint (and LCP) hostage to
 * hydration. CSS starts the fade on the first painted frame instead.
 * Reduced motion is handled by the prefers-reduced-motion override in
 * globals.css.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
