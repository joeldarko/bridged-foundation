"use client";

import { TransitionLink as Link } from "@/components/transition/TransitionLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { nav, routes, site } from "@/lib/content";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { clsx } from "@/lib/clsx";
import { BridgeMark } from "@/components/BridgeMark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav className="flex h-[68px] items-center justify-between gap-6" aria-label="Primary">
          <Link href={routes.home} className="flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
            <BridgeMark className="h-8 w-8 text-accent" />
            <span className="text-lg font-bold tracking-tight text-ink">
              Bridge<span className="text-gold">Ed</span> Ghana Foundation
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "rounded-pill px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                      active ? "text-accent-deep" : "text-ink-soft hover:text-ink",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2">
              <CTA href={routes.donate}>Donate</CTA>
            </li>
          </ul>

          <button
            className="grid h-11 w-11 place-items-center rounded-pill text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-line bg-bg lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-ink-soft hover:bg-surface-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <CTA href={routes.donate} className="w-full">Donate</CTA>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
