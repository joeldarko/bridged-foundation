# BridgeEd Ghana — Option B: "Open Sky"

A complete, ground-up redesign built as a **second option** alongside the existing
warm-cream cultural site (Option A). Same content and information architecture,
an entirely different visual language and technical foundation.

---

## Design read

> A nonprofit fundraising + impact site for donors, corporate/foundation partners,
> and diaspora Ghanaians — bright, hopeful, and human, with a single azure accent
> and a "connection / light travels" through-line.

- **Mode:** Redesign — Overhaul (new visuals, preserved content + IA).
- **Direction:** Open Sky. Airy off-white, one confident azure accent, big joyful
  student photography. Trust-first and optimistic (charity: water lineage), the
  opposite register from Option A's warm-cream cultural direction.
- **Concept:** *Bridging* + *connectivity (Starlink)* + *hope*. A luminous azure
  "connection line" recurs (clearest on Programs, as the 01→05 journey), the brand
  mark is a bridge with a rising signal node, warm gold survives only as atmosphere.
- **Dials:** DESIGN_VARIANCE 8 · MOTION 6 · VISUAL_DENSITY 3 (airy).

## Design system

- **Color (light theme, locked):** bg `#f4f7fc`, surface `#fff`, sky wash `#e9f1fb`,
  ink `#0c1a2e`, soft `#46586f`, line `#d9e4f1`. **One interactive accent** = azure
  `#1668ff` (all CTAs / links / active states). Warm gold `#ffb020` is atmosphere
  only (glows / gradients), never on a button.
- **Type:** Sora (display) + Figtree (body), self-hosted via `next/font`. Distinct
  from Option A's Bricolage + Plus Jakarta. Hierarchy by weight + color, not raw scale.
- **Shape:** buttons/tags pill, cards 16px, media 24px, inputs 10px (documented rule).
- **Shadows:** tinted navy/azure, never pure black.
- **Motion:** entrance + scroll-reveal (`Reveal`), animated impact counters (`Counter`),
  hover lifts, one CSS marquee. All gated behind `prefers-reduced-motion`.

## Information architecture (preserved)

Home · About · Programs · Pilot Schools · Partner · Contact · Donate.
Copy is carried over verbatim from the current site; only layout + visuals change.
Every section uses a **different layout family** from Option A so the two options
never rhyme.

| Page | Signature layout |
|---|---|
| Home | split hero → marquee → offset problem list → **bento** hubs → centered manifesto → animated stat row → photo CTA |
| About | portrait split → story + founder aside → mission/vision band → values list |
| Programs | **connection-line journey** (01→05 timeline) |
| Pilot Schools | alternating photo splits → centered goal/CTA band |
| Partner | partner tiles → numbered opportunity list |
| Donate | pricing tiers → reasons row → honest "give" band |
| Contact | details + front-end form |

## Tech

- **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Motion · Phosphor.**
- Chosen to leave room for the planned **donation backend** (Stripe / mobile money)
  and a real contact-form endpoint.
- Content centralized in `src/lib/content.ts`. Shared shell (`Header`/`Footer`) in
  `layout.tsx`. Reusable primitives: `CTA`, `Reveal`, `Counter`, `Icon`, `Container`,
  `PageHero`, `CtaBand`, `Marquee`, `ContactForm`, `BridgeMark`.

## Imagery

Art-directed, AI-generated placeholders (bright, natural-daylight, joyful). In
`public/img/`. All swappable for real photography at the same paths/aspect ratios.

## v2 (client feedback round)

- **Edge-to-edge**: fluid `Container` (vw-scaled padding, no max-width cap); full-screen `100dvh` hero with image bled to the screen edge; half-bleed splits (About/Schools); full-bleed photo bands and CTA sections.
- **De-carded**: whitespace, scale, and typography as structure. Cards removed everywhere except the Donate tier comparison panel (single hairline moment) and its featured accent column.
- **Animation**: `TextReveal` (line-mask headline reveals; observer on parent — masked children never intersect), `Parallax` (scroll photo drift), `DrawLine` (scroll-scrubbed Programs journey line), CTA arrow-nudge hover, hero choreography.
- **Branded transitions**: `TransitionProvider` + `TransitionLink` — click → cover (380ms) with bridge-mark stroke-draw + wordmark letter-stagger → hold (480ms) → reveal. First-visit splash once per session. Reduced-motion: instant navigation, no overlay; all reveals render static.
- **Screenshot harness**: `scripts/shot.mjs` (full-page, scroll-through, splash-skip) and `scripts/shot-transition.mjs` (captures loader mid-flight). Run: `node scripts/shot.mjs <url> <out.png> [w] [h] [reduced]`.

## v3 (photo-forward + Ghana gold)

- **Accent = Ghana gold** (`#f2b705` fills w/ ink text; `#8a6a00` deep gold for
  text/icons on light, WCAG AA; blue remains only as background atmosphere).
- **Hero slideshow**: full-screen rotating photo hero (4 slides, 4.5s crossfade,
  static under reduced motion), text overlaid on scrim.
- **Full-screen photo sections w/ overlay text**: Schools (both campuses), About
  (Why we exist), Donate (Ready to give), Home (hub band + community CTA).
  Programs banner + Partner break are the deliberate no-text exceptions.
- **Old-site assets migrated** into `public/img/` (`school-osu`, `school-mante`
  real photos replace stand-ins; `hub-2`, `community-2`, `literacy-2`,
  `portrait-2`, `classroom-2` added).
- **Removed** AI-generated `learning-hub.jpg` (students didn't read as Ghanaian);
  usages swapped for migrated photos.
- **Loader logo +50%** (96px mark, larger wordmark).
- Gotcha for future: Next 16 dev image-optimizer cache lives at
  `.next/dev/cache/images` — clear it after replacing files in `public/img/`.

## Open items / TODO
- [ ] **Donation backend** — tier buttons + the `#give` band currently route to
  Contact. Wire Stripe / PayPal / mobile money next.
- [ ] **Contact form endpoint** — front-end only today (`ContactForm.tsx`); point at
  Formspree / Netlify Forms or the future backend.
- [ ] **Real email + phone** — placeholders in `src/lib/content.ts` (`site.email`, `site.phone`).
- [ ] **Founder photo** — About uses an "SD" initials avatar for Solomon Darko.
- [ ] Optional: dark mode (tokens are structured to add it later).

## Run

```bash
cd "bridged foundation/redesign"
npm install
npm run dev      # http://localhost:3000
npm run build    # static export-ready; all routes prerender
```
