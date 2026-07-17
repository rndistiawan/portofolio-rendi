---
name: portofolio-rendi-patterns
description: Pola coding + desain visual untuk portofolio Digital Marketing Rendi Setiawan (Next.js). Gunakan saat menambah section, mengisi ruang kosong, atau merapikan copy/UI agar tidak terlihat kosong/template.
version: 1.0.0
source: local-git-analysis
analyzed_commits: 1
---

# Portofolio Rendi — Patterns

## Commit Conventions

- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Contoh: `feat: portfolio Rendi Setiawan siap Vercel`

## Code Architecture

```
web/
  src/
    app/           # layout, page, globals
    components/    # section UI + animation/
    content/       # site.ts = single source of truth (copy + data)
    lib/three/     # ambient WebGL helpers
  public/assets/   # foto, mood, CV
docs/superpowers/  # design specs & plans
```

### Rules

1. **Semua copy** di `web/src/content/site.ts` — jangan hardcode teks panjang di komponen.
2. **CTA tunggal:** chat WhatsApp (satu intent di seluruh page).
3. **Honest content:** no invented metrics, fake testimonials, or fake client logos.
4. **Motion:** `motion/react` + max 1 GSAP pin; Three.js only ambient particles.
5. **Vercel:** app root = `web/`.

## Design: mengisi portofolio agar menarik

Saat page terasa kosong / sparse, **tambah section yang relevan domain** (bukan filler generik AI):

| Section | Kapan | Isi yang diizinkan |
|---------|--------|-------------------|
| **Layanan** | Butuh kejelasan penawaran | 3–4 kartu layanan (konten, copy, medsos, ads) — tanpa harga fiktif |
| **Cara kerja** | Butuh alur | 3–4 langkah proses (brief → ide → eksekusi → review) |
| **Platform strip** | Butuh visual tools | Nama platform yang benar-benar dipakai (TikTok, IG, Canva) — bukan logo klien palsu |
| **Mood / gallery** | Butuh visual breathing room | Foto mood yang sudah ada, bento asymmetric |
| **Quote band** | Divider antar section | 1 kalimat positioning jujur (bukan fake testimonial) |

### Anti-patterns (jangan)

- 3 feature cards identik “AI slop”
- Fake metrics (`+47% engagement`)
- Fake testimonials / logo wall klien
- Em-dash berlebih, scroll cue, multi marquee
- Purple gradient default

### Palette lock

- Soft forest sage (OKLCH tokens di `globals.css`)
- Paper warm + accent sage
- Satu radius scale (`--radius-card`)

## Workflows

1. Edit `site.ts` dulu (data + copy)
2. Tambah komponen section di `components/`
3. Wire di `app/page.tsx`
4. `npm run build` di `web/`
5. Deploy Vercel (root `web/` atau MCP deploy)

## Testing Patterns

- `npm run build` must pass with `cacheComponents: true`
- No `new Date()` / `Math.random()` in Server Components during prerender
- Mobile: GSAP pin off; grid fallback
