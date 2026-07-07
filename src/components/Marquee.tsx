// CSS-only marquee (no JS). Used once per page. Items separated by hairlines, not dots.
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-3.5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap text-sm font-medium text-ink-soft"
            aria-hidden={i >= items.length ? true : undefined}
          >
            <span className="mx-7 h-3.5 w-px bg-line" />
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}
