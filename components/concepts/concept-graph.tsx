import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getConceptById } from "@/lib/concepts";
import type { ConceptGraphLayout } from "@/lib/concept-graph";

/**
 * The concept graph, rendered as server-side SVG. Every node is a real
 * `<a href>` + `<text>` in the initial HTML — GPTBot, ClaudeBot and
 * PerplexityBot don't execute JavaScript, so the links must exist in the
 * raw markup, not be drawn later onto a canvas. Animation is pure CSS and
 * SMIL (concept-* classes in globals.css); no hydration, no client bundle.
 *
 * `data-node-id` / `data-neighbors` / `data-source` / `data-target` carry the
 * adjacency so <GraphInteractions> can light up a neighbourhood on hover
 * without shipping the graph data twice.
 */

/** Every third edge carries a travelling particle — enough motion to read as alive. */
const PARTICLE_EVERY = 3;

export function ConceptGraph({
  locale,
  dict,
  layout,
  id = "concept-graph",
  activeId,
  decorative = false,
  particles = true,
}: {
  locale: Locale;
  dict: Dictionary;
  layout: ConceptGraphLayout;
  id?: string;
  /** Rendered as a plain node instead of a link — the page you are already on. */
  activeId?: string;
  /**
   * Hidden from assistive tech and taken out of the tab order, for graphs that
   * duplicate links already listed as text on the same page. The hrefs stay in
   * the HTML, so crawlers still follow them.
   */
  decorative?: boolean;
  particles?: boolean;
}) {
  const neighbours = new Map<string, string[]>();
  for (const edge of layout.edges) {
    neighbours.set(edge.source, [
      ...(neighbours.get(edge.source) ?? []),
      edge.target,
    ]);
    neighbours.set(edge.target, [
      ...(neighbours.get(edge.target) ?? []),
      edge.source,
    ]);
  }

  return (
    <svg
      id={id}
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className="concept-graph h-auto w-full"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": dict.conceptsPage.graphAriaLabel })}
    >
      {!decorative && <title>{dict.conceptsPage.graphAriaLabel}</title>}

      <g>
        {layout.edges.map((e) => (
          <line
            key={`${e.source}-${e.target}`}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            className="concept-edge"
            data-source={e.source}
            data-target={e.target}
          />
        ))}
      </g>

      {particles && (
        <g>
          {layout.edges
            .filter((_, i) => i % PARTICLE_EVERY === 0)
            .map((e, i) => (
              <circle
                key={`p-${e.source}-${e.target}`}
                r={2.5}
                className="concept-edge-particle"
              >
                <animateMotion
                  dur={`${4 + (i % 3) * 1.5}s`}
                  begin={`${((i % 4) * 0.7).toFixed(1)}s`}
                  repeatCount="indefinite"
                  path={`M${e.x1} ${e.y1} L${e.x2} ${e.y2}`}
                />
              </circle>
            ))}
        </g>
      )}

      <g>
        {layout.nodes.map((n, i) => {
          const concept = getConceptById(n.id);
          if (!concept) return null;
          const content = concept.locales[locale];
          const label = content.graphLabel ?? content.name;
          const shared = {
            className: `concept-node${n.id === activeId ? " is-current" : ""}`,
            "data-category": concept.category,
            "data-node-id": n.id,
            "data-neighbors": (neighbours.get(n.id) ?? []).join(" "),
          };
          const body = (
            <>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r + 6}
                className="concept-node-halo"
                style={{ animationDelay: `${((i % 6) * 0.4).toFixed(1)}s` }}
              />
              <circle cx={n.x} cy={n.y} r={n.r} className="concept-node-dot" />
              <text
                x={n.x}
                y={Math.round((n.y + n.r + 16) * 10) / 10}
                textAnchor="middle"
                className="concept-node-label"
              >
                {label}
              </text>
            </>
          );

          return n.id === activeId ? (
            <g key={n.id} {...shared}>
              {body}
            </g>
          ) : (
            <a
              key={n.id}
              href={`/${locale}/${dict.routes.concepts}/${content.slug}`}
              aria-label={content.name}
              {...(decorative ? { tabIndex: -1 } : {})}
              {...shared}
            >
              {body}
            </a>
          );
        })}
      </g>
    </svg>
  );
}
