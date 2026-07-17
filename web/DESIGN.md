# Design System: Rendi Portfolio — High Contrast Editorial

## 1. Visual Theme & Atmosphere

A **high-contrast editorial portfolio** for a solo freelance digital marketer. Density **4** (gallery-airy with clear blocks), Variance **7** (asymmetric split hero, unequal service cards), Motion **5** (fluid CSS + spring reveals, restrained perpetual marquee).

Atmosphere: **ink on paper with one decisive accent** — like a modern print magazine for services, not a soft pastel wellness brochure. Light surfaces stay bright; text is near-charcoal, never washed grey. Dark band sections (quote, feature card) use deep charcoal-green for punch. Professional, calm, high legibility for client trust.

## 2. Color Palette & Roles

### Light (default)
- **Paper Canvas** (#FAFAF8) — Primary page background
- **Surface Lift** (#FFFFFF) — Cards, nav blur base, elevated panels
- **Charcoal Ink** (#141816) — Primary text, headings (not pure black)
- **Graphite Soft** (#3F4541) — Body secondary, taglines
- **Slate Meta** (#6B736E) — Labels, captions, muted UI chrome
- **Edge Line** (#D6DBD7) — Default borders, 1px structure
- **Edge Strong** (#A8B0AA) — Strong borders, secondary buttons
- **Forest Punch** (#1E3D32) — Inverted bands, wide service card, quote band
- **On Punch** (#F4F7F5) — Text/icons on forest punch
- **Accent Ember** (#C45C26) — Single accent: CTAs, focus, active lang toggle (sat < 80%)
- **Accent Ember Hover** (#A34B1E) — Primary button hover
- **Accent Whisper** (#F5E6DC) — Soft accent wash, selection, soft chips
- **Focus Ring** (#C45C26) — Keyboard focus outline

### Dark (prefers-color-scheme)
- **Night Canvas** (#121514) — Background
- **Night Surface** (#1A1F1C) — Cards
- **Snow Ink** (#F2F4F3) — Primary text
- **Mist Soft** (#B8C0BB) — Secondary text
- **Accent Ember** (#E07A45) — CTA on dark (still one accent family)
- **Forest Punch** (#0F241C) — Deep bands

**Banned:** purple/neon, pure `#000000`, multi-accent rainbow, oversaturated blues.

## 3. Typography Rules

- **Display / Headlines:** Outfit — track-tight (`-0.03em` to `-0.04em`), weight 600–700, scale via `clamp()`. Hierarchy by weight + ink vs soft, not only size.
- **Body:** Outfit — relaxed leading (`1.65`), max ~42–65ch for prose.
- **UI labels / mono meta:** Outfit medium uppercase tracking-wide for tiny labels (step numbers); optional JetBrains Mono only if numeric tables appear later.
- **Banned:** Inter, Roboto, generic Georgia/Times for display.

## 4. Component Stylings

* **Primary buttons:** Pill radius (`999px`). Fill Accent Ember, text On-paper light. Hover darken. Active: `translateY(1px)`. No outer glow. Min height 44px.
* **Secondary buttons:** Transparent/paper fill, Edge Strong border, Charcoal Ink text. Hover Surface Lift / paper-2.
* **Ghost links:** Underline on hover only; Graphite Soft → Charcoal Ink.
* **Cards:** Radius ~1.25–1.5rem. Border Edge Line. White or paper-2 fill. Shadow: soft charcoal tinted, low opacity (`0 18px 50px -32px` oklch charcoal). Wide feature card uses Forest Punch + On Punch text for contrast block.
* **Chips / skills:** Solid accent or strong border; high contrast text.
* **Nav:** Fixed; on scroll, paper 90% + blur + Edge Line bottom. CTA = Accent Ember.
* **Language toggle:** Inactive = muted; active = Accent Ember fill + light text.
* **Images:** Rounded cards, clear border; profile photo is the hero visual weight (right column), not overlapping type.
* **Loaders:** Skeleton bars matching layout; no spinner rings.
* **Focus:** 2px Focus Ring, offset 2px.

## 5. Layout Principles

- Max width ~80rem (7xl), horizontal padding `1rem` → `2rem`.
- Hero: **asymmetric split** (copy left ~1.05, media right ~0.95) — never centered stack on desktop.
- Services: asymmetric grid (first card wide Forest Punch; others unequal spans) — **no** three equal cards.
- Sections: top border Edge Line; vertical rhythm `py-20` / `sm:py-28`.
- Mobile `<768px`: single column; no horizontal page scroll; touch targets ≥44px.
- Full viewport sections: `min-h-[100dvh]`, never `h-screen`.

## 6. Motion & Interaction

- Page reveals: opacity + Y transform; ease `[0.16, 1, 0.3, 1]`; spring-like, not linear.
- Stagger lists ~70ms cascade.
- Marquee: infinite transform only.
- Particles (hero): low-opacity ambient; pause on reduced-motion / offscreen.
- Animate only `transform` and `opacity`.

## 7. Anti-Patterns (Banned)

- No emojis in UI chrome
- No Inter / system UI as brand face
- No pure black `#000000`
- No neon / purple glow buttons
- No “Scroll to explore” / bouncing chevrons
- No 3 equal feature cards
- No centered hero on desktop
- No AI copy (“Elevate”, “Seamless”, “Unleash”)
- No fake metrics (`+47%`, `99.9%`)
- No overlapping text on photos
- No custom cursors

## 8. Implementation Map (this repo)

| Token / area | File |
|--------------|------|
| CSS variables | `web/src/app/globals.css` |
| Font load | `web/src/app/layout.tsx` → Outfit |
| Components | Consume `var(--color-*)` only |
| Copy SSOT | `web/src/content/id.ts` / `en.ts` (unchanged by visual pass) |
