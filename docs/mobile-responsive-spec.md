# Mobile Responsive Spec — Milk and Honey

Status: **for review, not yet implemented**

## Why

The client will review this design picker on their phone. The real site content is already
"almost mobile friendly" (most sections already collapse at the `md:` / 768px breakpoint), but
the `ThemeSwitcher` chooser bar itself breaks on phones, and a few smaller issues exist across
all 5 theme variants.

## Scope

In scope:
- `ThemeSwitcher` (the "DESIGN:" picker bar + "Next Steps" pill)
- All 5 design variants: Honey Amber (`original`), Clean Minimal (`minimalist`), Rustic Warmth
  (`rustic`), Urban Edge (`modern`), Golden Hour (`golden`)
- `NextStepsPage` (reachable via the switcher, same as any theme)
- Gallery's desktop-width column-balance bug (not mobile-specific, but bundled in since it's a
  quick fix in the same component)

Out of scope:
- Unifying spacing/breakpoint *values* across the 5 themes — each theme keeps its own bespoke
  sizing. Only the responsive *behavior pattern* per section type should match across themes.
- Any visual/content redesign beyond what's needed for mobile correctness.

## Target viewports

- **Primary target (must look polished):** 375px width and up (iPhone SE and newer, most
  Android phones).
- **Spot-check only (must not be broken, doesn't need to be pretty):** 320px. No horizontal
  scroll, no clipped/overlapping text, no unreachable controls.
- Existing `md:` (768px) breakpoint already handles the tablet/single-column collapse
  consistently across every file — don't need a new breakpoint tier for that.

## Fixes by component

### 1. `ThemeSwitcher.jsx` — P0, currently broken

Root cause: inline styles, `flex` with no wrap handling, hard-coded `height: 40px`. At narrow
widths the 5 theme pills + separator + "Next Steps" pill wrap to a second line but the bar
doesn't grow, so content gets clipped.

**Important constraint:** all 5 theme nav bars use `sticky top-10` (Tailwind `top-10` = 40px) to
sit flush beneath this bar. **Do not change the 40px height** — every theme's nav offset depends
on it.

Fix: convert the pill row to a horizontal-scroll strip instead of wrapping.
- Add `overflow-x-auto` (or equivalent) to the pill container, keep `flex-wrap: nowrap`,
  `white-space: nowrap` on pills so they don't shrink/wrap internally.
- Keep the 40px fixed height.
- Add a bit of `-webkit-overflow-scrolling: touch` / scroll-snap polish if it's easy, but not
  required.
- "Next Steps" pill should remain reachable by scrolling the strip — don't special-case it out
  of the scroll area, since hiding it via `position: sticky right` etc. adds complexity for
  little benefit at this scope.
- Verify the "Design:" label doesn't get visually orphaned/cut off — either let it scroll with
  the strip, or give it a fixed non-scrolling position with adequate width reserved (whichever
  is less code).

### 2. Shared components (used by Honey Amber / `original`)

These already have reasonable `md:` collapse behavior. Verify at 375px and fix anything that
doesn't hold up — expected to be minor (font-size/padding tightening), not structural:

- `Navbar.jsx` — already responsive (`max-md:`, `max-[480px]:gap-4`). Verify only.
- `HeroMenu.jsx` — 2-col drinks/food grid already collapses via `max-md:grid-cols-1`. Verify
  spacing/padding at 375px (menu card currently has `max-[480px]:px-5 max-[480px]:py-6`).
- `Gallery.jsx` — see column-balance fix below, plus mobile parallax fix below.
- `ParallaxStrip.jsx` — see `bg-fixed` fix below.
- `FindUs.jsx` — grid already collapses via `max-md:grid-cols-1`. Verify map iframe at 375px
  doesn't cause horizontal overflow.
- `Footer.jsx` — verify, likely fine (simple centered content).

### 3. Theme-specific files (`MinimalistPage.jsx`, `RusticPage.jsx`, `ModernPage.jsx`,
   `GoldenPage.jsx`)

Each duplicates its own nav, hero, menu, gallery, parallax strip, and find-us markup. Apply the
same behavior pattern as the shared components above **within each file independently** — these
already mostly follow the same `md:`/`max-md:`/`max-[480px]:` conventions as the shared
components, so extend that existing pattern rather than introducing a new one. Specifically
check per file:
- Hero split-layout grids (`grid-cols-2` / `grid-cols-[Npx_1fr]`) collapse cleanly at 375px.
- Nav bars don't overflow with the logo + 3 links at 375px (should already be fine based on
  code review, but verify).
- Gallery + parallax fixes below apply identically to each file's copy.

### 4. Gallery column-balance (desktop, bundled fix)

All 5 gallery grids use `columns-3 max-md:columns-2 max-[480px]:columns-1` with 6 photos. Below
768px it's already single/double column, so this bug only shows at desktop widths — but it's a
one-line-per-file fix so it's bundled here rather than filed separately.

Cause: CSS multi-column `column-fill: balance` distributes items by source order, not by target
height, so a run of visually taller images (currently the wide-aspect field/lightning photo) can
leave one column noticeably shorter than the others once `break-inside-avoid` locks each photo's
position.

Fix: give each gallery photo a consistent aspect ratio (e.g. `aspect-[4/5]` + `object-cover` on
the `<img>`) instead of letting natural image height drive layout. This makes the native column
balancing predictable across all 6 photos instead of being thrown off by one disproportionately
tall image. Apply identically in `Gallery.jsx` and the 4 theme-file copies.

### 5. `bg-fixed` parallax strip (5 places)

`ParallaxStrip.jsx` and the equivalent block in each of the 4 theme files use
`background-attachment: fixed` (`bg-fixed`) for a parallax quote strip. iOS Safari doesn't
reliably support fixed backgrounds (frequently no-ops or causes scroll jank/repaint glitches).

Fix: below the `md:` breakpoint, override to `bg-scroll` (Tailwind: add `max-md:bg-scroll` next
to the existing `bg-fixed` class). Desktop keeps the parallax effect; mobile gets a normal
scrolling background with no visual loss (there was no parallax benefit on mobile anyway).

Apply in:
- `src/components/ParallaxStrip.jsx`
- `src/themes/MinimalistPage.jsx`
- `src/themes/RusticPage.jsx`
- `src/themes/ModernPage.jsx`
- `src/themes/GoldenPage.jsx`

### 6. `NextStepsPage.jsx`

Already single-column with fixed px/rem sizing and no media queries — structurally low-risk
since it's just stacked cards in a `max-w-[760px]` container with `24px` side padding. Verify
only at 375px and 320px:
- Long words/URLs (e.g. `milkandhoney.com`, `bryceault.dev`) don't overflow.
- `$250 flat` and headline sizes look reasonable, not oversized.
- No fix expected unless verification turns up something concrete.

## QA checklist

For each of: Honey Amber, Clean Minimal, Rustic Warmth, Urban Edge, Golden Hour, Next Steps —
at 375px width:
- [ ] `ThemeSwitcher` bar: all 5 pills + Next Steps reachable via horizontal scroll, nothing
      clipped, 40px height unchanged
- [ ] Theme's own nav bar: logo + links visible, no overflow, sits flush below the switcher bar
- [ ] Hero/menu section: readable, no horizontal scroll, drinks/food stack in single column
- [ ] Gallery: single column (per `max-[480px]:columns-1`), photos load, aspect ratio consistent
- [ ] Parallax quote strip: renders correctly, no `bg-fixed` jank (test on an actual iOS device
      or iOS simulator if available, not just Chrome devtools mobile emulation)
- [ ] Find Us: address/hours/contact stack above map, map doesn't overflow horizontally
- [ ] Footer: renders fine

Then spot-check the same list at 320px for gross breakage only (no clipping, no horizontal
scroll) — not expected to be pixel-perfect there.

Also verify at desktop width (1024px+) after the Gallery aspect-ratio change, to confirm the
3-column balance issue is resolved and nothing regressed visually.

## Out of scope / explicitly not doing

- Not unifying the 5 themes' spacing/typography/breakpoint values — each keeps its own design.
- Not adding a hamburger menu to any theme's nav — current nav bars already fit at 375px.
- Not touching the Google Maps iframe's touch-scroll behavior — not reported as an issue.
- Not changing `NextStepsPage` content or adding new breakpoints there unless verification finds
  a concrete problem.
