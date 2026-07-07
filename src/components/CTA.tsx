import { TransitionLink } from "@/components/transition/TransitionLink";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "outline" | "onDark";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition-all duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1";

const variants: Record<Variant, string> = {
  // Single interactive accent, page-wide. Gold fill carries dark ink text (WCAG).
  primary:
    "bg-accent text-white shadow-[0_10px_24px_-12px_rgb(11_79_156_/_0.7)] hover:bg-accent-strong hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-line bg-surface text-ink hover:border-accent hover:text-accent-deep",
  onDark:
    "bg-white text-ink hover:-translate-y-0.5 hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

export function CTA({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <TransitionLink href={href} className={clsx(base, variants[variant], sizes[size], className)}>
      {children}
    </TransitionLink>
  );
}
