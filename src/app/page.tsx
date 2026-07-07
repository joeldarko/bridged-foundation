import Image from "next/image";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Icon } from "@/components/Icon";
import { Marquee } from "@/components/Marquee";
import { TextReveal } from "@/components/TextReveal";
import { Parallax } from "@/components/Parallax";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import {
  routes,
  tickerItems,
  problems,
  provisions,
  impactStats,
} from "@/lib/content";

const heroSlides = [
  {
    src: "/img/hero.jpg",
    alt: "Two Ghanaian students smiling as they learn together at a classroom computer in warm daylight",
  },
  {
    src: "/img/community.jpg",
    alt: "A group of joyful Ghanaian students together outside their school",
  },
  {
    src: "/img/classroom-2.jpg",
    alt: "Students gathered around desktop computers in a BridgeEd learning hub",
  },
  {
    src: "/img/digital-literacy.jpg",
    alt: "A Ghanaian student smiling while learning on a laptop",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO — full-screen rotating photo, text overlay ============ */}
      <section className="relative flex min-h-[calc(100dvh-68px)] items-end overflow-hidden">
        <HeroSlideshow images={heroSlides} />
        {/* scrim: left column + bottom for legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent"
        />

        <Container className="relative pb-16 pt-28 lg:pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-pill bg-white/12 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  Education access in Ghana
                </span>
              </Reveal>
              <TextReveal
                as="h1"
                lines={["Bridging Access.", "Unlocking Potential."]}
                accentLines={[1]}
                delay={0.1}
                className="mt-6 text-[clamp(2.3rem,5vw,5.4rem)] font-extrabold leading-[1.02] tracking-tight text-white"
              />
              <Reveal delay={0.35}>
                <p className="mt-7 max-w-[44ch] text-lg leading-relaxed text-white/85 xl:text-xl">
                  We connect underserved students in Ghana to education,
                  technology, and opportunity.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <CTA href={routes.donate} size="lg" className="w-full sm:w-auto">
                    Sponsor a School
                  </CTA>
                  <CTA
                    href={routes.programs}
                    size="lg"
                    className="w-full border border-white/50 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                  >
                    Explore the programs
                  </CTA>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.55} className="hidden lg:block">
              <div className="text-right text-white">
                <div className="text-5xl font-extrabold tracking-tight xl:text-6xl">
                  <Counter value={1000} suffix="+" />
                </div>
                <p className="ml-auto mt-2 max-w-[20ch] text-white/80">
                  students we aim to reach in three years
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Marquee items={tickerItems} />

      {/* ============ PROBLEM — open editorial grid ============ */}
      <section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <TextReveal
                lines={["Held back by access,", "not ability"]}
                className="text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.06]"
              />
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-soft">
                  In many communities across Ghana, talented students are held
                  back not by lack of ability, but by lack of access. Even in
                  Accra, this gap continues to limit thousands of students.
                </p>
              </Reveal>
            </div>

            <ul className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
              {problems.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.07}>
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-pill bg-accent-wash text-accent-deep">
                        <Icon name={p.icon} size={22} />
                      </span>
                      <span className="text-sm font-bold tabular-nums text-ink-muted">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ============ SOLUTION — full-screen photo band + open provisions ============ */}
      <section className="bg-surface pb-28 md:pb-40">
        <div className="relative flex min-h-[92dvh] items-end">
          <Parallax strength={6} className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src="/img/hub-2.jpg"
                alt="A BridgeEd learning hub with rows of desktop computers and students learning"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Parallax>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <Container className="relative pb-14 lg:pb-20">
            <TextReveal
              lines={["BridgeEd Learning Hubs"]}
              className="text-[clamp(2rem,4vw,3.8rem)] font-bold leading-[1.05] text-white"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/85 xl:text-xl">
                We install internet, provide computers, and run structured
                programs that help students succeed academically and prepare
                for university. Each school receives:
              </p>
            </Reveal>
          </Container>
        </div>

        <Container>
          {/* provisions — space-separated, no boxes, no dividers */}
          <ul className="mt-16 grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-5">
            {provisions.map((p, i) => {
              const highlight = i === 0; // Starlink — the differentiator
              return (
                <Reveal as="li" key={p.label} delay={i * 0.06}>
                  <div>
                    <Icon
                      name={p.icon}
                      size={30}
                      weight={highlight ? "fill" : "regular"}
                      className="text-accent-deep"
                    />
                    <div className={"mt-4 text-xs font-semibold uppercase tracking-wide " + (highlight ? "text-accent-deep" : "text-ink-muted")}>
                      {p.note}
                    </div>
                    <div className="mt-1 font-bold leading-snug">{p.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <CTA href={routes.programs} variant="outline" size="lg">
                Explore Our Programs
                <Icon name="ArrowRight" size={18} />
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ MISSION / VISION — pure typographic air ============ */}
      <section className="py-32 md:py-44">
        <Container size="narrow" className="text-center">
          <TextReveal
            lines={["Purpose, in two sentences"]}
            className="text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.08]"
          />
          <div className="mt-16 grid gap-16 sm:grid-cols-2 sm:gap-14 sm:text-left">
            <Reveal delay={0.08}>
              <div>
                <span className="font-semibold text-accent-deep">Our Mission</span>
                <p className="mt-4 text-xl leading-relaxed text-ink xl:text-2xl xl:leading-relaxed">
                  To equip underserved students in Ghana with academic support,
                  digital access, and university readiness tools.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <span className="font-semibold text-accent-deep">Our Vision</span>
                <p className="mt-4 text-xl leading-relaxed text-ink xl:text-2xl xl:leading-relaxed">
                  A Ghana where every student, regardless of background, has
                  equal access to opportunity.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ IMPACT — stat row, airy ============ */}
      <section className="relative overflow-hidden bg-surface-2 py-28 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.15),transparent_66%)]"
        />
        <Container className="relative">
          <TextReveal
            lines={["What three years can build"]}
            className="text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.06]"
          />
          <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div>
                  <div className="text-[clamp(2.8rem,4.6vw,4.4rem)] font-extrabold leading-none tracking-tight text-accent-deep">
                    {s.value !== undefined ? (
                      <Counter value={s.value} suffix={s.suffix ?? ""} />
                    ) : (
                      s.text
                    )}
                  </div>
                  <p className="mt-4 max-w-[22ch] text-lg text-ink-soft">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ DONATE — full-screen photo CTA ============ */}
      <section className="relative flex min-h-[92dvh] items-center overflow-hidden">
        <Parallax strength={6} className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/img/community-2.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>
        <div aria-hidden className="absolute inset-0 bg-ink/72" />
        <Container className="relative py-32 text-center md:py-40">
          <TextReveal
            lines={["You can change a life today"]}
            className="text-[clamp(2.1rem,4vw,3.8rem)] font-bold leading-[1.08] text-white"
          />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-14 gap-y-7">
              {[
                { big: "$3,000", small: "equips an entire school" },
                { big: "$500", small: "supports a student" },
                { big: "Any amount", small: "makes a difference" },
              ].map((o) => (
                <div key={o.big} className="text-white">
                  <div className="text-3xl font-extrabold tracking-tight">
                    {o.big}
                  </div>
                  <div className="mt-1.5 text-white/75">{o.small}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-14">
              <CTA href={routes.donate} size="lg">
                Donate Now
                <Icon name="ArrowRight" size={18} />
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
