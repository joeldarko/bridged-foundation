// Single geometric brand mark: a bridge arc with a rising "signal" node.
// Ties the name (Bridge), the connectivity idea, and the Open Sky direction together.
export function BridgeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* bridge deck */}
      <path
        d="M3 21c5-8 21-8 26 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* piers */}
      <path d="M9 15.6V25M23 15.6V25M16 13.2V25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* rising signal node */}
      <circle cx="16" cy="7" r="3" fill="currentColor" />
    </svg>
  );
}
