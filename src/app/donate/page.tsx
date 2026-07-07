import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Icon } from "@/components/Icon";
import { tiers, donateReasons, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Invest in a student's future. $3,000 sponsors a school, $500 supports a student, and any amount makes a difference.",
};

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        titleLines={["Invest in a", "student's future"]}
        lead="Choose the impact you want to make. Every gift goes directly toward connecting a classroom and supporting a student."
      />

      {/* TIERS — one quiet comparison panel (the single hairline moment) */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal direction="none">
            <div className="grid overflow-hidden rounded-lg border border-line bg-surface md:grid-cols-3 md:divide-x md:divide-line max-md:divide-y max-md:divide-line">
              {tiers.map((t) => (
                <div
                  key={t.amount}
                  className={
                    "flex flex-col p-9 lg:p-12 " +
                    (t.featured ? "bg-accent text-white" : "")
                  }
                >
                  {t.ribbon ? (
                    <span
                      className={
                        "inline-flex w-fit items-center rounded-pill px-3 py-1 text-xs font-semibold " +
                        (t.featured
                          ? "bg-white/20 text-white"
                          : "bg-accent-wash text-accent-deep")
                      }
                    >
                      {t.ribbon}
                    </span>
                  ) : (
                    <span className="h-[26px]" />
                  )}
                  <div className="mt-6 text-5xl font-extrabold tracking-tight">
                    {t.amount}
                  </div>
                  <div className={"mt-2 text-lg font-semibold " + (t.featured ? "text-white" : "text-ink")}>
                    {t.name}
                  </div>
                  <p className={"mt-4 flex-1 leading-relaxed " + (t.featured ? "text-white/85" : "text-ink-soft")}>
                    {t.body}
                  </p>
                  <div className="mt-9">
                    <CTA
                      href="#give"
                      variant={t.featured ? "onDark" : "outline"}
                      className="w-full"
                    >
                      {t.cta}
                    </CTA>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHY DONATE — open row */}
      <section className="py-20 md:py-32">
        <Container>
          <TextReveal
            lines={["Why donate?"]}
            className="text-[clamp(1.9rem,3.4vw,3rem)] font-bold leading-[1.1]"
          />
          <div className="mt-16 grid gap-x-20 gap-y-14 sm:grid-cols-3">
            {donateReasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div>
                  <span className="grid h-13 w-13 place-items-center rounded-pill bg-accent-wash text-accent-deep">
                    <Icon name={r.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* GIVE — full-screen photo band, text overlaid */}
      <section id="give" className="relative flex min-h-[92dvh] scroll-mt-20 items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/literacy-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-ink/75" />
        <Container className="relative py-28 text-center md:py-36">
          <div className="mx-auto max-w-3xl text-white">
            <TextReveal
              lines={["Ready to give?"]}
              className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold leading-[1.1] text-white"
            />
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap justify-center gap-x-14 gap-y-6">
                {[
                  { big: "$3,000", small: "sponsors a school" },
                  { big: "$500", small: "supports a student" },
                  { big: "Any amount", small: "makes a difference" },
                ].map((o) => (
                  <div key={o.big}>
                    <div className="text-3xl font-extrabold tracking-tight">
                      {o.big}
                    </div>
                    <div className="mt-1.5 text-white/75">{o.small}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-11 max-w-lg leading-relaxed text-white/85">
                Online giving is being set up. To give today or pledge a school,
                please get in touch and we will make it simple.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8">
                <CTA href={routes.contact} variant="onDark" size="lg">
                  Contact Us to Give
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
