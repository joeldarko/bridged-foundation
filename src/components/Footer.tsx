import { TransitionLink as Link } from "@/components/transition/TransitionLink";
import { nav, routes, site } from "@/lib/content";
import { Container } from "@/components/Container";
import { BridgeMark } from "@/components/BridgeMark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={routes.home} className="flex items-center gap-2.5">
              <BridgeMark className="h-8 w-8 text-accent" />
              <span className="text-lg font-bold tracking-tight text-ink">
                Bridge<span className="text-gold">Ed</span> Ghana Foundation
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-ink-soft">{site.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft transition-colors hover:text-accent-deep">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
              Get involved
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href={routes.donate} className="text-ink-soft transition-colors hover:text-accent-deep">
                  Donate
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="text-ink-soft transition-colors hover:text-accent-deep">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {site.fullName}. All rights reserved.</span>
          <span>Bridging the gap between potential and opportunity.</span>
        </div>
      </Container>
    </footer>
  );
}
