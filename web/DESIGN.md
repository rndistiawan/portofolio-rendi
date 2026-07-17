# Design System: Rendi Portfolio — Editorial Content Studio

## 1. Visual Theme & Atmosphere

A **premium editorial content-studio portfolio** for a solo freelance digital marketer and social media partner. Density **4** (gallery airy with clear blocks), Variance **7** (asymmetric hero + unequal service grid + bento image gallery), Motion **5** (spring reveals + restrained marquee).

Atmosphere: **print studio meets calm service brand** — charcoal ink on warm paper, one copper-ember accent, deep forest punch for dark bands. Imagery shows real work contexts for digital marketing (content planning, short-form video, brand moodboards, wellness service calm) — never generic purple AI gradients. Professional, scannable, high trust for Indonesian freelance clients.

## 2. Color Palette & Roles

### Light
- **Paper Canvas** (#F7F6F3) — Page background
- **Surface Lift** (#FFFFFF) — Cards, elevated panels
- **Charcoal Ink** (#121614) — Headings, primary text
- **Graphite Soft** (#2F3632) — Body secondary
- **Slate Meta** (#4F5853) — Labels, captions
- **Edge Line** (#D0D5D1) — Default 1px borders
- **Edge Strong** (#8F9892) — Strong borders
- **Forest Punch** (#17352B) — Quote band, wide service card, marquee
- **On Punch** (#F5F8F6) — Text on punch surfaces
- **Accent Ember** (#B84F1C) — Single CTA / focus accent (sat < 80%)
- **Accent Ember Hover** (#9A4217)
- **Accent Whisper** (#F3E4D8) — Soft wash / selection

### Dark
- Night canvas (#0E1210), night surface (#171C19), snow ink (#F3F5F4)
- Accent Ember brightened (#E8894A); Forest Punch deeper (#0C221A)
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
* **Image tiles:** full-bleed cover, border, hover scale 1.03–1.04 transform only; caption chips bottom-left; no text overlapping photo mid-frame
* **Nav:** fixed; scroll → paper blur + ink border bottom
* **Lang toggle:** active = Ember fill
* **Profile photo:** heavy visual weight, ink border 2px, photo shadow
* **Phone mock (Content Studio):** ink bezel, story dots, abstract caption bars — illustrative only, no fake metrics

## 5. Layout Principles

- Max-width 7xl (~80rem); section `py-20` / `sm:py-28`
- Hero asymmetric split (copy | photo mosaic + Feed/Reels/Story chips)
- Services asymmetric 12-col (wide first card) — not 3 equal cards
- Visual break: asymmetric bento (hero + tall + wide tiles) — **not** 3 equal cards
- Content Studio: phone mock left, format/tools/calendar right
- Mobile single column; `min-h-[100dvh]` for hero

## 6. Motion & Interaction

- Reveal: opacity + Y; ease `[0.16, 1, 0.3, 1]`
- Stagger ~70ms
- Marquee transform-only infinite
- Image tiles: transform scale only on hover
- Particles ambient ember/forest, reduced-motion off

## 7. Image Direction (local mood assets)

All production images live under `web/public/assets/`. **Never** hotlink Unsplash in production.

| Asset | Role on site | Subject (portfolio-relevant) |
|-------|----------------|------------------------------|
| `rendi-profile-28.jpg` | Hero portrait | Face consistent — do not replace casually |
| `mood-wash.jpg` | Hero underlay, contact wash | Abstract warm paper texture |
| `mood-plan.jpg` | About hero tile, VisualBreak hero | Content calendar desk flat-lay + phone |
| `mood-reel.jpg` | Hero mosaic, Content Studio phone, VisualBreak tall | Short-form video / CapCut-adjacent setup |
| `mood-brand.jpg` | Hero mosaic, About, Projects half, VisualBreak | Brand moodboard (ember/forest/paper swatches) |
| `mood-board.jpg` | Skills panel, Projects half, VisualBreak wide | Laptop content-planning board |
| `mood-clinic.jpg` | About tile, Projects wide (service brands) | Calm wellness/clinic service atmosphere |
| `mood-desk.jpg` | VisualBreak, legacy tiles | Content desk still |
| `mood-linen.jpg` | Legacy mood | Linen / flat-lay texture |
| `mood-leaves.jpg` | Experience soft green | Nature calm / service empathy |
| `mood-bokeh.jpg` | Experience background | Soft workspace bokeh |

### Image rules (Stitch + implementation)

- Prefer warm neutrals + desk/device stills over neon SaaS screenshots
- No stock “handshake”, no fake dashboard metrics, no brand logos in stills
- Labels sit in bottom caption chips — text never overlaps mid-photo
- New screens in Stitch should reference these local asset names and roles

### Free stock reference libraries (inspiration only)

- [Unsplash — Social media](https://unsplash.com/s/photos/social-media)
- [Unsplash — Content creator](https://unsplash.com/s/photos/content-creator)
- [Unsplash — Moodboard](https://unsplash.com/s/photos/moodboard)
- Prefer warm neutrals; always download to `/assets` before ship

## 8. Anti-Patterns (Banned)

- Emojis in UI chrome
- Inter / pure black / purple neon glows
- “Scroll to explore” / bouncing chevrons
- 3 equal feature cards
- Centered hero on desktop
- AI copy clichés (Elevate, Seamless, Unleash)
- Fake metrics; broken Unsplash hotlinks in production
- Overlapping text on photos
- Generic purple gradients as hero imagery

## 9. Implementation Map

| Area | Path |
|------|------|
| Tokens | `web/src/app/globals.css` |
| Font | `web/src/app/layout.tsx` → Outfit |
| Mood files | `web/public/assets/mood-*.jpg` |
| Mood paths | `web/src/content/site.ts` → `moods` |
| Copy / tile labels | `web/src/content/id.ts`, `en.ts` → `visualBreak` |
| Gallery | `web/src/components/VisualBreak.tsx` |
| Studio board | `web/src/components/ContentStudio.tsx` |
| Design SSOT | `web/DESIGN.md` |
