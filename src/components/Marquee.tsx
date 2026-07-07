// CSS-only marquee (no JS). Used once per page, above the hero.
// Dark strip, letters in glowing Ghana gold.
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-accent-deep py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap text-[1.05rem] font-semibold text-gold [text-shadow:0_0_14px_rgba(212,160,23,0.65),0_0_34px_rgba(212,160,23,0.3)]"
            aria-hidden={i >= items.length ? true : undefined}
          >
            <span className="mx-8 h-4 w-px bg-gold/40 [text-shadow:none]" />
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-accent-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-accent-deep to-transparent" />
    </div>
  );
}
