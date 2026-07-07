import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Parallax } from "@/components/Parallax";
import { Icon } from "@/components/Icon";
import { values, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "BridgeEd Ghana Foundation was founded from lived experience to give every Ghanaian student equal access to opportunity.",
};

const creds = [
  "MBA, Healthcare Organization & Management, University of Connecticut",
  "MS Counseling, University of Bridgeport",
  "20+ years as an educator, therapist, and social-services manager",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        titleLines={["Built from", "lived experience"]}
        lead="BridgeEd Ghana Foundation exists for one reason: a student's future should never be decided by where they happen to go to school."
      />

      {/* WHY WE EXIST — full-screen portrait, text overlaid */}
      <section className="relative mt-16 flex min-h-[100dvh] items-end overflow-hidden">
        <Parallax strength={6} className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/img/portrait-student.jpg"
              alt="Portrait of a Ghanaian student looking ahead with hope"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/5"
        />
        <Container className="relative pb-16 pt-40 lg:pb-24">
          <Reveal>
            <span className="inline-flex items-center rounded-pill bg-white/12 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              Why we exist
            </span>
          </Reveal>
          <TextReveal
            lines={["Every student", "carries potential"]}
            delay={0.08}
            className="mt-5 text-[clamp(2.2rem,4.4vw,4.2rem)] font-bold leading-[1.05] text-white"
          />
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-white/85 xl:text-xl">
              What too few of them have is access. We bring the connection,
              the tools, and the guidance directly to the students the system
              overlooks, so ability is finally matched with opportunity.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* STORY + FOUNDER — editorial */}
      <section className="bg-surface py-24 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <div>
              <TextReveal
                lines={["Our Story"]}
                className="text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.08]"
              />
              <Reveal delay={0.12}>
                <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-soft xl:text-xl">
                  BridgeEd Ghana Foundation was founded from lived experience.
                  Having attended both underserved and urban schools in Ghana, our
                  founder experienced firsthand how lack of access to internet,
                  academic support, and guidance limits even the most talented
                  students.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-soft xl:text-xl">
                  BridgeEd was created to change that. We bring connection,
                  computers, and mentorship directly into the schools that need
                  them most, so potential is met with opportunity.
                </p>
              </Reveal>
            </div>

            {/* founder — editorial sidebar, no box */}
            <Reveal delay={0.15}>
              <aside className="border-l-2 border-accent pl-8 lg:mt-4">
                <div className="flex items-center gap-4">
                  {/* TODO: replace initials avatar with a real photo of Solomon Darko */}
                  <span className="grid h-16 w-16 flex-none place-items-center rounded-pill bg-accent-wash text-xl font-extrabold text-accent-deep">
                    SD
                  </span>
                  <div>
                    <div className="text-lg font-bold">Solomon Darko</div>
                    <div className="text-sm text-ink-muted">
                      Founder, BridgeEd Ghana Foundation
                    </div>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-ink-soft">
                  An educator and social-services leader with more than two
                  decades of experience, and a lasting commitment to poverty
                  alleviation and serving those in need.
                </p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {creds.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <Icon name="Check" size={18} className="mt-0.5 flex-none text-accent-deep" weight="bold" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MISSION / VISION — pure typography */}
      <section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <Reveal>
              <div>
                <span className="font-semibold text-accent-deep">Our Mission</span>
                <p className="mt-5 text-2xl font-medium leading-relaxed text-ink xl:text-3xl xl:leading-relaxed">
                  To equip underserved students in Ghana with academic support,
                  digital access, and university readiness tools.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="font-semibold text-accent-deep">Our Vision</span>
                <p className="mt-5 text-2xl font-medium leading-relaxed text-ink xl:text-3xl xl:leading-relaxed">
                  A Ghana where every student, regardless of background, has equal
                  access to opportunity.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* VALUES — open grid, air as structure */}
      <section className="bg-surface-2 py-28 md:py-40">
        <Container>
          <TextReveal
            lines={["Our Values"]}
            className="text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.08]"
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              Four commitments that shape every hub we build and every student
              we serve.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-x-20 gap-y-16 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div>
                  <span className="text-4xl font-extrabold tabular-nums text-accent-deep/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{v.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-ink-soft">{v.body}</p>
                  <p className="mt-5 max-w-[48ch] text-sm leading-relaxed text-ink-muted">
                    <span className="font-semibold text-ink">Adinkra, {v.adinkra}:</span>{" "}
                    {v.meaning}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Help us reach the next student"
        body="Your support turns a classroom into a launchpad."
        primary={{ href: routes.donate, label: "Donate Now" }}
        secondary={{ href: routes.partner, label: "Partner With Us" }}
      />
    </>
  );
}
