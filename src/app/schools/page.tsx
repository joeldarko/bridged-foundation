import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Parallax } from "@/components/Parallax";
import { Icon } from "@/components/Icon";
import { schools, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pilot Schools",
  description:
    "Our pilot hubs: Presbyterian Senior High School in Osu, Accra, and the Junior High School at Teacher Mante in the Eastern Region.",
};

export default function Schools() {
  return (
    <>
      <PageHero
        eyebrow="Pilot schools"
        titleLines={["Where we", "are starting"]}
        lead="Two partner schools become our first hubs, and the proof of a model we will carry across Ghana."
      />

      {/* SCHOOLS — full-screen photo sections, text overlaid */}
      <div className="mt-16 flex flex-col">
        {schools.map((s) => (
          <section
            key={s.name}
            className="relative flex min-h-[100dvh] items-end overflow-hidden"
          >
            <Parallax strength={6} className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={s.image}
                  alt={`${s.name} campus`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10"
            />
            <Container className="relative pb-16 pt-40 lg:pb-24">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/12 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  <Icon name="MapPin" size={15} weight="fill" className="text-accent" />
                  {s.tag}
                </span>
              </Reveal>
              <TextReveal
                lines={[s.name]}
                delay={0.08}
                className="mt-5 max-w-[22ch] text-[clamp(1.9rem,4vw,3.8rem)] font-bold leading-[1.08] text-white"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/85 xl:text-xl">
                  {s.body}
                </p>
              </Reveal>
            </Container>
          </section>
        ))}
      </div>

      {/* GOAL — light closing band (the breather) */}
      <section className="relative overflow-hidden bg-surface-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-[340px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.16),transparent_66%)]"
        />
        <Container className="relative py-28 text-center md:py-40">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="text-sm font-semibold text-accent-deep">Our goal</span>
            </Reveal>
            <TextReveal
              lines={["Pilot first, then", "expand across Ghana"]}
              delay={0.08}
              className="mt-4 text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.08]"
            />
            <Reveal delay={0.25}>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                We use these schools as pilot hubs, learn what works, and scale
                the model so that many more communities can connect their
                classrooms to the wider world.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11">
                <CTA href={routes.donate} size="lg">
                  Sponsor a School
                  <Icon name="ArrowRight" size={18} />
                </CTA>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
