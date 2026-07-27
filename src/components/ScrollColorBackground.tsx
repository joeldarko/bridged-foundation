"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/*
  Whole-page scroll-linked background color morph.

  A single fixed layer sits behind all content (-z-10, above the body canvas).
  Light editorial sections are transparent and tagged `data-bg="bg|surface|
  surface-2"`; this component measures their document positions and interpolates
  the layer's backgroundColor across scroll, so the site glides between section
  colors with no visible seam. Opaque photo heroes and the accent CTA bands
  cover the layer and keep their intentional hard edges.

  Reduced motion: no scroll scrubbing — an IntersectionObserver snaps the layer
  to the most-visible section's solid color.
*/

// Deepened so the whole-page scroll morph is actually visible (all still light,
// on-brand cool tints; dark ink text stays legible on every stop):
//   bg       — faint cool baseline (most content sections)
//   surface  — bright white "lift" between tinted bands
//   surface-2 — bold blue "breather" bands (Impact / Values / Goal)
const COLORS: Record<string, string> = {
  bg: "#d3dfef",
  surface: "#ffffff",
  "surface-2": "#9cc0e3",
};
const FALLBACK = "#f8fafc";

type Stops = { positions: number[]; colors: string[] };

function measure(): Stops | null {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-bg]"),
  );
  if (els.length === 0) return null;

  const scrollY = window.scrollY;
  const raw = els
    .map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        center: rect.top + scrollY + rect.height / 2,
        color: COLORS[el.dataset.bg ?? ""] ?? FALLBACK,
      };
    })
    .sort((a, b) => a.center - b.center);

  // useTransform requires a strictly increasing input range. Pad both ends so
  // the first/last colors hold before the first section and after the last.
  const positions: number[] = [raw[0].center - 800];
  const colors: string[] = [raw[0].color];
  for (const r of raw) {
    const last = positions[positions.length - 1];
    positions.push(r.center <= last ? last + 1 : r.center);
    colors.push(r.color);
  }
  positions.push(positions[positions.length - 1] + 800);
  colors.push(colors[colors.length - 1]);

  return { positions, colors };
}

// Keyed remount on `stops` change gives useTransform a fresh input/output range
// without depending on a runtime interpolate() util.
function MorphLayer({ y, stops }: { y: MotionValue<number>; stops: Stops }) {
  const backgroundColor = useTransform(y, stops.positions, stops.colors);
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{ backgroundColor, willChange: "background-color" }}
    />
  );
}

export function ScrollColorBackground() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [stops, setStops] = useState<Stops | null>(null);
  const [staticColor, setStaticColor] = useState(FALLBACK);

  const { scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 80, damping: 26, restDelta: 0.5 });

  useEffect(() => setMounted(true), []);

  // Animated mode: measure on mount / route change / resize / reflow.
  useEffect(() => {
    if (!mounted || reduce) return;

    const run = () => setStops(measure());

    // Two frames after content commits so layout has settled.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(run);
    });

    let debounce: number | undefined;
    const remeasure = () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(run, 150);
    };
    window.addEventListener("resize", remeasure);
    const ro = new ResizeObserver(remeasure);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(debounce);
      window.removeEventListener("resize", remeasure);
      ro.disconnect();
    };
  }, [mounted, reduce, pathname]);

  // Reduced motion: snap to the most-visible tagged section's solid color.
  useEffect(() => {
    if (!mounted || !reduce) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-bg]"),
    );
    if (els.length === 0) return;

    const ratios = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target, e.intersectionRatio);
        let best: HTMLElement | null = null;
        let bestRatio = -1;
        for (const [el, r] of ratios) {
          if (r > bestRatio) {
            bestRatio = r;
            best = el as HTMLElement;
          }
        }
        if (best) setStaticColor(COLORS[best.dataset.bg ?? ""] ?? FALLBACK);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [mounted, reduce, pathname]);

  // SSR + first client render: deterministic static layer (no measurement).
  if (!mounted) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{ background: FALLBACK }}
      />
    );
  }

  if (reduce) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{ background: staticColor, transition: "background-color 0.2s linear" }}
      />
    );
  }

  if (!stops) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{ background: FALLBACK }}
      />
    );
  }

  return <MorphLayer key={stops.positions.join("_")} y={y} stops={stops} />;
}
