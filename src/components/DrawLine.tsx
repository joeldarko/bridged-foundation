"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/*
  Scroll-scrubbed vertical connection line — the "signal" motif. The line draws
  itself as the user scrolls through the wrapped content (Programs journey).
*/
export function DrawLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.75"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <svg
        aria-hidden
        className="absolute left-[19px] top-3 bottom-3 h-[calc(100%-24px)] w-[3px] md:left-[27px]"
        preserveAspectRatio="none"
        viewBox="0 0 3 100"
      >
        {/* track */}
        <line x1="1.5" y1="0" x2="1.5" y2="100" stroke="var(--color-line)" strokeWidth="2" />
        {/* scroll-drawn signal */}
        <motion.line
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          style={reduce ? { pathLength: 1 } : { pathLength: progress }}
        />
      </svg>
      {children}
    </div>
  );
}
