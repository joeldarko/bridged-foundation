import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Parallax } from "@/components/Parallax";

// Interior-page hero: full-height photo with text overlaid, matching the
// homepage hero. Left column + bottom scrims keep the copy legible.
export function ImageHero({
  eyebrow,
  titleLines,
  accentLines = [],
  lead,
  image,
}: {
  eyebrow: string;
  titleLines: string[];
  accentLines?: number[];
  lead: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative flex min-h-[calc(100dvh-68px)] items-end overflow-hidden">
      <Parallax strength={6} className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Parallax>

      {/* scrims: left column + bottom for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent"
      />

      <Container className="relative pb-16 pt-40 lg:pb-24">
        <Reveal>
          <span className="inline-flex items-center rounded-pill bg-white/12 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            {eyebrow}
          </span>
        </Reveal>
        <TextReveal
          as="h1"
          lines={titleLines}
          accentLines={accentLines}
          delay={0.1}
          className="mt-6 text-[clamp(2.3rem,5vw,5.4rem)] font-extrabold leading-[1.02] tracking-tight text-white"
        />
        <Reveal delay={0.35}>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-white/85 xl:text-xl">
            {lead}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
