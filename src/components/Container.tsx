import { clsx } from "@/lib/clsx";

/*
  Fluid, edge-to-edge container. No fixed max width — padding scales with the
  viewport so the site fills whatever screen it is on. "narrow" keeps a prose
  measure for timeline / manifesto content only.
*/
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  if (size === "narrow") {
    return (
      <div className={clsx("mx-auto w-full max-w-[820px] px-5 sm:px-8", className)}>
        {children}
      </div>
    );
  }
  return (
    <div
      className={clsx(
        "w-full px-5 sm:px-8 lg:px-[4vw] 2xl:px-[5vw]",
        className,
      )}
    >
      {children}
    </div>
  );
}
