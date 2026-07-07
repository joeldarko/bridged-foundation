import type { Metadata } from "next";
import { TransitionLink as Link } from "@/components/transition/TransitionLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { site, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BridgeEd Ghana Foundation. Together, we can bridge the gap between potential and opportunity.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleLines={["Get in touch"]}
        lead="Questions, partnerships, or want to sponsor a school? Send a message and we will reply."
      />

      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
            <div>
              <TextReveal
                lines={["Reach us directly"]}
                className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.1]"
              />
              <Reveal delay={0.1}>
                <ul className="mt-10 flex flex-col gap-6">
                  <li>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-lg text-ink-soft transition-colors hover:text-accent-deep">
                      <span className="grid h-12 w-12 flex-none place-items-center rounded-pill bg-accent-wash text-accent-deep">
                        <Icon name="EnvelopeSimple" size={22} />
                      </span>
                      {/* TODO: replace with the foundation's real email */}
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 text-lg text-ink-soft transition-colors hover:text-accent-deep">
                      <span className="grid h-12 w-12 flex-none place-items-center rounded-pill bg-accent-wash text-accent-deep">
                        <Icon name="Phone" size={22} />
                      </span>
                      {/* TODO: replace with the foundation's real number */}
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-10 max-w-[40ch] leading-relaxed text-ink-soft">
                  Prefer to partner? See the ways to get involved on our{" "}
                  <Link href={routes.partner} className="font-semibold text-accent-deep underline underline-offset-2">
                    partner page
                  </Link>
                  .
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1} direction="right">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Together, we can bridge the gap between potential and opportunity"
        primary={{ href: routes.donate, label: "Donate Now" }}
      />
    </>
  );
}
