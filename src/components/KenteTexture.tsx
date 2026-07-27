/*
  Faint kente-cloth veil filling the site's whitespace.

  A single fixed layer at `-z-10` — same plane as ScrollColorBackground's color
  morph. Mounted immediately after it in the layout, so later DOM order paints
  this texture just above the morph but still behind all content. Transparent
  editorial sections let it show through (the whitespace); opaque photo heroes
  and CTA bands cover it, keeping their hard edges. Static, no JS.
*/
export function KenteTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        // White wash over the cloth softens its dark threads so charcoal text
        // stays legible; element opacity is nudged up for a slightly bolder read.
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(/img/kente-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.52,
        mixBlendMode: "multiply",
      }}
    />
  );
}
