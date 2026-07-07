"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useTransitionNav } from "./TransitionProvider";

/*
  Drop-in for next/link that routes through the branded transition overlay.
  Keeps prefetching (renders a real Link); passes through modified clicks,
  external URLs, and hash anchors untouched.
*/
export function TransitionLink({
  href,
  onClick,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const { navigate } = useTransitionNav();
  const url = typeof href === "string" ? href : (href.pathname ?? "");

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    const plainLeftClick =
      e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    const internal = url.startsWith("/") && !url.includes("#");
    if (plainLeftClick && internal) {
      e.preventDefault();
      navigate(url);
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
