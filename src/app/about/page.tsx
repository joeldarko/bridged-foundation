import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Parallax } from "@/components/Parallax";
import { values, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "BridgeEd Ghana Foundation was founded from lived experience to give every Ghanaian student equal access to opportunity.",
};

const founderBio = [
  "Solomon Darko, BSc, Dip. Ed., MPhil, MSc, MBA is a licensed mental health counselor, educator, healthcare entrepreneur, and nonprofit leader committed to expanding access to quality healthcare and education in the United States and Ghana. With advanced training in biological sciences, education, psychology, counseling, and healthcare management, he brings a multidisciplinary approach to improving lives and strengthening communities.",
  "Solomon is the co-founder of Deeper View Counseling, Deeper View Homemakers & Companion Services, BridgeEd Foundation, and Genesis+ Wellness. His work is driven by a simple but powerful belief: that education and healthcare are fundamental to creating healthier individuals, stronger communities, and lasting social change.",
  "Through compassionate leadership, strategic partnerships, and innovative community initiatives, Solomon is building organizations that empower people, develop future leaders, and create sustainable opportunities for generations to come.",
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

      {/* STORY */}
      <section className="bg-surface py-24 md:py-36">
        <Container>
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
        </Container>
      </section>

      {/* THE FOUNDER — full section: photo + background + accomplishments */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal direction="left">
              <figure className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-lg shadow-card">
                <Image
                  src="/img/founder.jpg"
                  alt="Solomon Darko, founder of BridgeEd Ghana Foundation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <span className="text-sm font-semibold text-accent-deep">
                  The Founder
                </span>
              </Reveal>
              <TextReveal
                lines={["Solomon Darko"]}
                delay={0.08}
                className="mt-3 text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.06]"
              />
              <Reveal delay={0.16}>
                <p className="mt-2 font-semibold text-accent-deep">
                  BSc, Dip. Ed., MPhil, MSc, MBA
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-1 font-semibold text-ink-muted">
                  Founder, BridgeEd Ghana Foundation
                </p>
              </Reveal>
              {founderBio.map((para, i) => (
                <Reveal key={i} delay={0.24 + i * 0.06}>
                  <p className="mt-6 max-w-[58ch] leading-relaxed text-ink-soft xl:text-lg xl:leading-relaxed">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION / VISION — pure typography */}
      <section className="py-28 md:py-40">
        <Container>
          <div className="flex flex-col gap-16">
            <Reveal direction="left">
              <div className="max-w-[40rem]">
                <span className="font-semibold text-accent-deep">Our Mission</span>
                <p className="mt-5 text-2xl font-medium leading-relaxed text-ink xl:text-3xl xl:leading-relaxed">
                  The project is designed to improve educational opportunities
                  for academically gifted students in Ghana who face financial
                  barriers.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="right" className="flex justify-end">
              <div className="max-w-[40rem]">
                <span className="font-semibold text-accent-deep">Our Vision</span>
                <p className="mt-5 text-2xl font-medium leading-relaxed text-ink xl:text-3xl xl:leading-relaxed">
                  A Ghana where every student, regardless of background, has equal
                  access to opportunity.
                </p>
                <p className="mt-8 font-semibold text-ink">
                  Long term, we are building a foundation that:
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Identifies exceptional students early",
                    "Removes financial barriers to education",
                    "Provides mentorship and leadership development",
                    "Expands access to technology and digital learning",
                    "Builds a lifelong alumni network committed to giving back",
                    "Partners with schools, universities, businesses, churches, and the Ghanaian diaspora to multiply its impact",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-[0.62rem] h-1.5 w-1.5 flex-none rounded-pill bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
