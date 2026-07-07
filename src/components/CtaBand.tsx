import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { Icon } from "@/components/Icon";

// Reusable closing CTA — full-bleed accent section, edge to edge.
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-6%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.35),transparent_64%)]"
      />
      <Container className="relative py-28 text-center md:py-36">
        <div className="mx-auto max-w-3xl">
          <TextReveal
            lines={[title]}
            className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold leading-[1.1] text-ink"
          />
          {body && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                {body}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.18}>
            <div className="mt-11 flex flex-wrap justify-center gap-3">
              <CTA href={primary.href} variant="onDark" size="lg">
                {primary.label}
                <Icon name="ArrowRight" size={18} />
              </CTA>
              {secondary && (
                <CTA
                  href={secondary.href}
                  size="lg"
                  className="border border-ink/40 bg-transparent text-ink hover:bg-ink/10"
                >
                  {secondary.label}
                </CTA>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
