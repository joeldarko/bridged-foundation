import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { DrawLine } from "@/components/DrawLine";
import { Icon } from "@/components/Icon";
import { programs, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Five programs that transform Ghanaian schools: Learning Hubs, Academic Support, Digital Literacy, University Access, and the BridgeEd Scholars Fund.",
};

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        titleLines={["From connection to", "a college acceptance"]}
        lead="Five programs work together to take a student from their first day online to their first day at university."
      />

      {/* full-bleed banner */}
      <div className="mt-10">
        <Parallax strength={7} className="relative h-[70dvh] min-h-[380px] w-full lg:h-[85dvh]">
          <div className="relative h-full w-full">
            <Image
              src="/img/digital-literacy.jpg"
              alt="A Ghanaian student smiling while learning at a laptop"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>
      </div>

      {/* THE JOURNEY — scroll-drawn connection line */}
      <section className="py-24 md:py-36">
        <Container size="narrow">
          <DrawLine>
            <ol>
              {programs.map((p, i) => (
                <Reveal as="li" key={p.num} delay={i * 0.05} className="list-none">
                  <div className="relative flex gap-6 pb-20 last:pb-0 md:gap-9">
                    <span className="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-pill bg-accent text-sm font-extrabold text-ink shadow-[0_8px_20px_-8px_rgb(217_158_0_/_0.8)] md:h-14 md:w-14 md:text-base">
                      {p.num}
                    </span>
                    <div className="pt-1 md:pt-2.5">
                      <h3 className="text-2xl font-bold md:text-3xl">{p.title}</h3>
                      <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                        {p.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-ink-soft">
                            <Icon name="Check" size={16} weight="bold" className="text-accent-deep" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </DrawLine>
        </Container>
      </section>

      <CtaBand
        title="Fund a program, change a trajectory"
        body="Every program runs on the generosity of people who believe access changes everything."
        primary={{ href: routes.donate, label: "Donate Now" }}
      />
    </>
  );
}
