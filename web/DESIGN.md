# Design System: Rendi Portfolio — Editorial Content Studio

## 1. Visual Theme & Atmosphere

A **premium editorial content-studio portfolio** for a solo freelance digital marketer and social media partner. Density **4** (gallery airy with clear blocks), Variance **7** (asymmetric hero + unequal service grid), Motion **5** (spring reveals + restrained marquee).

Atmosphere: **print studio meets calm service brand** — charcoal ink on warm paper, one copper-ember accent, deep forest punch for dark bands. Imagery shows real work contexts (desk planning, content design flat-lays, wellness calm, soft city light) — never generic purple AI gradients. Professional, scannable, high trust for Indonesian freelance clients.

## 2. Color Palette & Roles

### Light
- **Paper Canvas** (#FAFAF8) — Page background
- **Surface Lift** (#FFFFFF) — Cards, elevated panels
- **Charcoal Ink** (#141816) — Headings, primary text
- **Graphite Soft** (#3F4541) — Body secondary
- **Slate Meta** (#6B736E) — Labels, captions
- **Edge Line** (#D6DBD7) — Default 1px borders
- **Edge Strong** (#A8B0AA) — Strong borders
- **Forest Punch** (#1E3D32) — Quote band, wide service card, marquee
- **On Punch** (#F4F7F5) — Text on punch surfaces
- **Accent Ember** (#C45C26) — Single CTA / focus accent (sat < 80%)
- **Accent Ember Hover** (#A34B1E)
- **Accent Whisper** (#F5E6DC) — Soft wash / selection

### Dark
- Night canvas (#121514), night surface (#1A1F1C), snow ink (#F2F4F3)
- Accent Ember brightened (#E07A45); Forest Punch deeper (#0F241C)
- On Punch stays light for contrast on dark bands

**Banned:** purple/neon, pure `#000`, multi-accent, Inter font.

## 3. Typography Rules

- **Display:** Outfit, bold 600–700, tracking `-0.03em` to `-0.04em`, `clamp()` scale
- **Body:** Outfit, leading ~1.65, max ~42–65ch
- **Labels:** small uppercase or medium tracking for step numbers
- **Banned:** Inter, generic system UI as brand face

## 4. Component Stylings

* **Primary CTA:** Pill, Ember fill, light text, min 44px, active `translateY(1px)`, soft ember shadow only (no neon glow)
* **Secondary:** Ink or strong border outline on paper
* **Cards:** radius 1.35rem; white/paper-2; charcoal-tinted soft shadow; punch cards use Forest + On Punch
* **Image tiles:** full-bleed cover, border, hover scale 1.03 transform only; captions optional below for gallery
* **Nav:** fixed; scroll → paper blur + ink border bottom
* **Lang toggle:** active = Ember fill
* **Profile photo:** heavy visual weight, ink border 2px, photo shadow

## 5. Layout Principles

- Max-width 7xl (~80rem); section `py-20` / `sm:py-28`
- Hero asymmetric split (copy | photo mosaic)
- Services asymmetric 12-col (wide first card)
- Visual break: bento 2×4-ish auto rows — **not** 3 equal cards
- Mobile single column; `min-h-[100dvh]` for hero

## 6. Motion & Interaction

- Reveal: opacity + Y; ease `[0.16, 1, 0.3, 1]`
- Stagger ~70ms
- Marquee transform-only infinite
- Particles ambient ember/forest, reduced-motion off

## 7. Image Direction (mood assets)

| Asset | Role on site | Subject |
|-------|----------------|---------|
| `mood-desk.jpg` | Projects wide, visual break hero tile | Content desk: laptop + phone social grid + calendar |
| `mood-linen.jpg` | Projects half, about/skills | Brand moodboard / content design flat-lay |
| `mood-leaves.jpg` | Projects half, about | Calm wellness/green — clinic service empathy |
| `mood-bokeh.jpg` | Experience bg, about | Soft city/workspace bokeh — freelance evenings |
| `mood-wash.jpg` | Hero underlay, contact wash | Abstract warm paper texture |
| `rendi-profile-28.jpg` | Hero portrait | Keep face consistent; do not replace casually |

### Free stock reference libraries (for future shoots/replacements)

- [Unsplash — Social media](https://unsplash.com/s/photos/social-media)
- [Unsplash — Content creator](https://unsplash.com/s/photos/content-creator)
- [Unsplash — Moodboard](https://unsplash.com/s/photos/moodboard)
- [Unsplash — Campaign Creators](https://unsplash.com/@campaign_creators)
- Prefer warm neutrals + desk/device stills; avoid neon SaaS screenshots and stock “handshake” clichés

## 8. Anti-Patterns (Banned)

- Emojis in UI chrome
- Inter / pure black / purple neon glows
- “Scroll to explore” / bouncing chevrons
- 3 equal feature cards
- Centered hero on desktop
- AI copy clichés (Elevate, Seamless, Unleash)
- Fake metrics; broken Unsplash hotlinks in production (use local `/assets`)
- Overlapping text on photos

## 9. Implementation Map

| Area | Path |
|------|------|
| Tokens | `web/src/app/globals.css` |
| Font | `web/src/app/layout.tsx` → Outfit |
| Mood files | `web/public/assets/mood-*.jpg` |
| Mood paths | `web/src/content/site.ts` → `moods` |
| Sections | `web/src/components/*` |
