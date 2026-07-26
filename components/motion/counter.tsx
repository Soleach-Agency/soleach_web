"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

/** Counts up to `to` when scrolled into view. */
export function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  // Reduced motion: skip the tween and show the final value once in view.
  const display = reduce && inView ? to : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
