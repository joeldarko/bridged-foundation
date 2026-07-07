"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/*
  Subtle scroll parallax for large photography. Wrap the <Image> (which should
  be larger than the mask via scale) — motion values only, no React state.
*/
export function Parallax({
  children,
  strength = 7, // percent of element height to travel
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  // Hydration-safe reduced-motion: keep the motion style for SSR + first client
  // render (matching markup), drop to static only after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const active = !(mounted && reduce);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        style={active ? { y, scale: 1 + strength / 45 } : undefined}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
