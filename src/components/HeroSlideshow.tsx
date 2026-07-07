"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/*
  Full-screen rotating hero background. Crossfades every INTERVAL ms.
  All slides stay mounted (no re-fetch flashes); opacity does the work.
  Reduced motion: static first slide.
*/
const INTERVAL = 4500;
const FADE_S = 1.2;

export function HeroSlideshow({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), INTERVAL);
    return () => clearInterval(t);
  }, [reduce, images.length]);

  return (
    <div className="absolute inset-0" aria-hidden={false}>
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: FADE_S, ease: "easeInOut" }}
        >
          <Image
            src={img.src}
            alt={i === idx ? img.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
