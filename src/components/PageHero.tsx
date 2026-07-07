import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";

// Shared interior-page hero. Left-aligned, atmospheric glow, generous air.
export function PageHero({
  eyebrow,
  titleLines,
  lead,
}: {
  eyebrow: string;
  titleLines: string[];
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-6%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.16),transparent_64%)]" />
        <div className="absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(11,79,156,0.12),transparent_66%)]" />
      </div>
      <Container className="pt-20 pb-6 md:pt-28">
        <Reveal>
          <span className="text-sm font-semibold text-accent-deep">{eyebrow}</span>
        </Reveal>
        <TextReveal
          as="h1"
          lines={titleLines}
          delay={0.08}
          className="mt-4 max-w-[20ch] text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[1.03] tracking-tight"
        />
        <Reveal delay={0.3}>
          <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink-soft xl:text-xl">
            {lead}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
