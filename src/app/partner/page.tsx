import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Icon } from "@/components/Icon";
import { Parallax } from "@/components/Parallax";
import { partnerTypes, partnerOpps, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Schools, corporations, foundations, and diaspora professionals can partner with BridgeEd to sponsor schools, provide technology, mentor students, and fund scholarships.",
};

export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        titleLines={["Build the", "bridge together"]}
        lead="The fastest way to reach more students is alongside partners who share the goal. There is a role for every kind of supporter."
      />

      {/* WHO WE PARTNER WITH — open grid */}
      <section className="py-24 md:py-36">
        <Container>
          <TextReveal
            lines={["Who we partner with"]}
            className="max-w-2xl text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.08]"
          />
          <div className="mt-20 grid gap-x-20 gap-y-16 sm:grid-cols-2">
            {partnerTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-pill bg-accent-wash text-accent-deep">
                    <Icon name={t.icon} size={28} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{t.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PHOTO BREAK — full-bleed, no text (breathing room) */}
      <Parallax strength={7} className="relative h-[70dvh] min-h-[380px] w-full">
        <div className="relative h-full w-full">
          <Image
            src="/img/classroom-2.jpg"
            alt="Students working together at desktop computers in a Ghanaian classroom"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Parallax>

      {/* OPPORTUNITIES — big numerals, air as structure */}
      <section className="bg-surface py-24 md:py-36">
        <Container>
          <TextReveal
            lines={["Partnership opportunities"]}
            className="max-w-2xl text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.08]"
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              Pick the contribution that fits you. We will handle the rest.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-x-20 gap-y-16 sm:grid-cols-2">
            {partnerOpps.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.06}>
                <div>
                  <span className="text-5xl font-extrabold tabular-nums text-accent-deep/25 md:text-6xl">
                    {o.num}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{o.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Become a partner"
        body="Tell us how you would like to help and we will find the right way to work together."
        primary={{ href: routes.contact, label: "Become a Partner" }}
      />
    </>
  );
}
