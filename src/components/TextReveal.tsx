"use client";

import { motion, useReducedMotion } from "motion/react";

/*
  Headline line-mask reveal. Each line sits in an overflow-hidden mask and
  slides up with a stagger. The in-view observer lives on the PARENT tag —
  the masked inner spans are clipped, so observing them directly never fires
  (IntersectionObserver accounts for ancestor clipping).
*/
export function TextReveal({
  lines,
  accentLines = [],
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  lines: string[];
  accentLines?: number[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag];

  // Reduced motion: plain static render, no transforms at all.
  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span
            key={i}
            className={"block" + (accentLines.includes(i) ? " text-accent" : "")}
          >
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={
              "block will-change-transform" +
              (accentLines.includes(i) ? " text-accent" : "")
            }
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: delay + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
