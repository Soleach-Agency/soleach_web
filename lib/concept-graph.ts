import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type SimulationNodeDatum,
} from "d3-force";
import { concepts } from "@/content/concepts";
import { conceptDegree, conceptEdges } from "./concepts";

/**
 * Build-time force layout for the concept graph. Imported only by server
 * components, so with `output: "export"` the simulation runs once during
 * `next build` and ships zero JavaScript to the client.
 *
 * Determinism matters: the exported HTML must be byte-stable across builds
 * or every deploy churns the IndexNow content hashes of both hub pages.
 * d3-force is deterministic (phyllotaxis initial positions + an internal
 * seeded LCG), node order comes from the append-only registration order in
 * content/concepts/index.ts, and nothing here may touch Math.random or
 * Date.now.
 */

export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  r: number;
  degree: number;
}

export interface LayoutEdge {
  source: string;
  target: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface ConceptGraphLayout {
  width: number;
  height: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
}

const WIDTH = 800;
const HEIGHT = 600;
const PADDING = 48;
/** Vertical room reserved under each node for its <text> label. */
const LABEL_CLEARANCE = 26;

interface SimNode extends SimulationNodeDatum {
  id: string;
  r: number;
  degree: number;
}

// Layout is locale-independent (ids and edges only — labels never influence
// positions), so one simulation serves both locales. Cached per build.
let cached: ConceptGraphLayout | null = null;

export function conceptGraphLayout(): ConceptGraphLayout {
  if (cached) return cached;

  const nodes: SimNode[] = concepts.map((c) => {
    const degree = conceptDegree(c.id);
    return {
      id: c.id,
      degree,
      r: Math.min(9 + 2.5 * Math.sqrt(degree), 22),
    };
  });
  const links = conceptEdges().map((e) => ({ ...e }));

  const simulation = forceSimulation(nodes)
    .force(
      "link",
      forceLink<SimNode, { source: string; target: string }>(links)
        .id((d) => d.id)
        .distance(90)
        .strength(0.6),
    )
    .force("charge", forceManyBody().strength(-220))
    .force(
      "collide",
      forceCollide<SimNode>().radius((d) => d.r + 30),
    )
    // Gentle centering keeps stray components on-canvas; the x/y asymmetry
    // spreads the graph along the wider axis.
    .force("x", forceX(WIDTH / 2).strength(0.05))
    .force("y", forceY(HEIGHT / 2).strength(0.09))
    .stop();

  for (let i = 0; i < 300; i++) simulation.tick();

  // Fit: scale + center the bounding box (including radii and label room)
  // into the padded viewBox so any concept count stays inside the frame.
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const n of nodes) {
    minX = Math.min(minX, n.x! - n.r);
    maxX = Math.max(maxX, n.x! + n.r);
    minY = Math.min(minY, n.y! - n.r);
    maxY = Math.max(maxY, n.y! + n.r + LABEL_CLEARANCE);
  }
  const scale = Math.min(
    (WIDTH - 2 * PADDING) / (maxX - minX),
    (HEIGHT - 2 * PADDING) / (maxY - minY),
    1.5,
  );
  const offsetX = (WIDTH - (maxX - minX) * scale) / 2 - minX * scale;
  const offsetY = (HEIGHT - (maxY - minY) * scale) / 2 - minY * scale;

  const round = (v: number) => Math.round(v * 10) / 10;
  const positioned = new Map<string, { x: number; y: number }>();
  const layoutNodes: LayoutNode[] = nodes.map((n) => {
    const x = round(n.x! * scale + offsetX);
    const y = round(n.y! * scale + offsetY);
    positioned.set(n.id, { x, y });
    return { id: n.id, x, y, r: round(n.r), degree: n.degree };
  });

  const layoutEdges: LayoutEdge[] = conceptEdges().map((e) => {
    const s = positioned.get(e.source)!;
    const t = positioned.get(e.target)!;
    return { ...e, x1: s.x, y1: s.y, x2: t.x, y2: t.y };
  });

  cached = {
    width: WIDTH,
    height: HEIGHT,
    nodes: layoutNodes,
    edges: layoutEdges,
  };
  return cached;
}

const NEIGHBOURHOOD = { width: 560, height: 380, radius: 132 };

/**
 * A concept and its direct neighbours, placed radially. Trigonometry rather
 * than a force pass: with a handful of nodes a circle reads better than a
 * simulation, and it is deterministic by construction.
 *
 * Edges between the neighbours themselves are included — that is what makes
 * it read as a neighbourhood rather than a star.
 */
export function conceptNeighborhoodLayout(
  centerId: string,
): ConceptGraphLayout | null {
  const all = conceptEdges();
  const neighbours = all
    .filter((e) => e.source === centerId || e.target === centerId)
    .map((e) => (e.source === centerId ? e.target : e.source));
  if (neighbours.length === 0) return null;

  const { width, height, radius } = NEIGHBOURHOOD;
  const cx = width / 2;
  const cy = height / 2;
  const round = (v: number) => Math.round(v * 10) / 10;

  const positions = new Map<string, { x: number; y: number }>([
    [centerId, { x: cx, y: cy }],
  ]);
  const nodes: LayoutNode[] = [
    {
      id: centerId,
      x: cx,
      y: cy,
      r: 16,
      degree: neighbours.length,
    },
  ];

  neighbours.forEach((id, i) => {
    const angle = (2 * Math.PI * i) / neighbours.length - Math.PI / 2;
    const x = round(cx + radius * Math.cos(angle));
    const y = round(cy + radius * Math.sin(angle));
    positions.set(id, { x, y });
    const degree = conceptDegree(id);
    nodes.push({
      id,
      x,
      y,
      r: round(Math.min(8 + 2 * Math.sqrt(degree), 14)),
      degree,
    });
  });

  const edges: LayoutEdge[] = all
    .filter((e) => positions.has(e.source) && positions.has(e.target))
    .map((e) => {
      const s = positions.get(e.source)!;
      const t = positions.get(e.target)!;
      return { ...e, x1: s.x, y1: s.y, x2: t.x, y2: t.y };
    });

  return { width, height, nodes, edges };
}
