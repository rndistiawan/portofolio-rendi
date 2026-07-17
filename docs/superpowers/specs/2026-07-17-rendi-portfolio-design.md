# Portfolio Rendi Setiawan — Design Spec

**Date:** 2026-07-17  
**Status:** Approved by user  
**Approach:** B — Digital Marketing dengan DNA operasional  
**Deploy target:** Vercel (`*.vercel.app`)

---

## 1. Product intent

### Audience
Klien freelance yang mencari bantuan **Social Media / Digital Marketing** (UMKM, jasa, klinik, brand kecil).

### Primary use case
Satu aksi: **menghubungi Rendi** (WhatsApp atau email) setelah yakin dia bisa bantu medsos + eksekusi.

### Secondary action
Download CV PDF.

### Tone
Soft professional — ramah, tenang, enak dilihat; bukan dark-tech, bukan brutalist, bukan template SaaS generik.

### Language
Bahasa Indonesia only.

---

## 2. Positioning

**Headline:** Digital Marketing · Social Media  

**Persona:** Hybrid praktisi — berlatar teknis/operasional (VSAT, EV, klinik HBOT) yang juga mengelola medsos, administrasi, dan memiliki sertifikasi digital (copywriting, TikTok Ads).

**Value props (user-selected):**
- Cepat belajar teknologi baru
- Bisa administrasi + operasional
- Paham digital / konten / medsos

**Differentiation:** Bukan “copywriter murni dari nol”, melainkan eksekutor yang rapi karena terbiasa operasional lapangan & klinik.

---

## 3. Identity & contact (public)

| Field | Value |
|-------|--------|
| Name | Rendi Setiawan |
| Role line | Digital Marketing · Social Media |
| Email | rndisetiawn01@gmail.com |
| WhatsApp | +6289509227365 |
| Location | Jakarta Timur |
| Photo | `public/assets/rendi-photo.jpg` |
| CV | `public/assets/CV-Rendi-Setiawan.pdf` |

**Do not publish:** KTP, alamat RT/RW, BPJS, ijazah scan, data pasien, nomor internal perusahaan, logo perusahaan tanpa izin (teks nama saja).

---

## 4. Information architecture

**Type:** Single-page scroll site.

**Sections (DOM order):**
1. Nav — wordmark, section links, CTA Hubungi
2. Hero — name, headline, value sentence, photo, CTA WhatsApp + Download CV
3. About — hybrid story
4. Experience — timeline 3 roles
5. Projects — 3 case cards (no invented metrics)
6. Skills — digital first, then soft + supporting technical
7. Certificates — MySkill + relevant
8. Contact — email, WA, location
9. Footer — short copyright

---

## 5. Content rules

### Honest copy
- No fabricated metrics (“+X engagement”, “Y followers”) unless user supplies later.
- Experience bullets from CV/docs only, tightened for readability.
- Projects are narrative case frames, not fake results.

### Experience (confirmed)

1. **Teknisi VSAT (magang)** — PT Plaza Telematika · Agu–Des 2022  
   Focus: instalasi VSAT (Papua context from CV if kept high-level), maintenance mindset, field work.

2. **Support Teknisi Kendaraan Listrik (magang)** — PT Rekacipta Inovasi ITB · Jan–Agu 2023  
   Focus: bantu perakitan kelistrikan bajaj listrik; no brand-specific claims.

3. **Operasional & pelayanan** — Salama Wellness Center / Klinik HBOT (kombinasi nama) · Sep 2023–sekarang (masih aktif)  
   Focus: operasional + pelayanan pasien; multi-role includes medsos & admin (from user’s docs) without inventing KPIs.

### Projects (v1)

| ID | Title | Angle |
|----|--------|--------|
| P1 | Media sosial klinik / wellness | Konten, interaksi, brand awareness — operasional digital di lingkungan layanan |
| P2 | Fondasi digital marketing | Sertifikasi Copywriting + TikTok Ads (MySkill) |
| P3 | Disiplin teknis lapangan | VSAT & EV sebagai bukti problem-solving & reliability |

### Skills priority
1. Digital marketing / social media / copywriting / content  
2. Soft: problem solving, komunikasi, teamwork, admin  
3. Supporting technical (mekatronika, VSAT, EV, HBOT ops) — secondary chips

### Certificates to surface
- Copywriting (MySkill)
- TikTok Ads track (BTA, CKTA, MTA, STA labels if space)
- Optional compact “lainnya” if needed — avoid dumping every school cert

---

## 6. Visual design (Hallmark soft professional)

### Palette (sage-friendly)
- Paper: warm off-white / soft sand
- Ink: soft charcoal (not pure black)
- Accent: sage green
- CTA secondary: soft peach/coral for hover/highlight only
- Borders: low-contrast warm grey-green

### Typography
- Display + body: readable rounded / humanist sans pairing (e.g. Plus Jakarta Sans or similar free fonts)
- Headings: roman only (no italic headers)
- Comfortable measure; generous section spacing

### Motion
Minimal: soft fade/slide on scroll; respect `prefers-reduced-motion`.

### Layout
- Mobile-first; no horizontal scroll at 320–414px
- Hero: asymmetric text + photo (not generic 50/50 clone if avoidable)
- Cards with soft radius, light border, no heavy drop shadows
- Nav: sticky, minimal (not 4-column mega footer)

### Macrostructure stamp intent
Soft professional · single long-document-with-hero hybrid · enrichment: real photo only (no fake browser chrome, no stock metrics).

---

## 7. Technical architecture

### Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Static content module (`src/content/site.ts` or similar)
- Deploy: Vercel free project URL
- Contact: `mailto:` + WhatsApp deep link (`https://wa.me/6289509227365`)
- No backend, no invented form service in v1

### File shape (target)
```
app/layout.tsx, app/page.tsx, app/globals.css
src/content/site.ts          — all copy & data
src/components/*             — Nav, Hero, About, Experience, Projects, Skills, Certificates, Contact, Footer
public/assets/*              — photo + CV
docs/superpowers/specs/*     — this spec
```

### SEO (v1)
- Title: `Rendi Setiawan · Digital Marketing & Social Media`
- Meta description in Indonesian, honest
- Open Graph basic (name + role)

### Accessibility
- Semantic landmarks, focus-visible rings, alt text on photo, contrast ≥ WCAG AA for text/accent

---

## 8. Out of scope (v1)

- Bilingual switch
- CMS / blog
- Contact form backend
- Dark mode toggle
- Real company logos
- Analytics (optional later: Vercel Analytics)

---

## 9. Success criteria

1. Single page live on Vercel with all approved sections.
2. Mobile-readable, soft sage palette, no AI-slop metric invention.
3. WhatsApp + email + CV download work.
4. Content matches user answers (Social Media focus, hybrid story).
5. Build succeeds (`npm run build`).

---

## 10. Open items (post-v1)

- User-supplied project metrics / screenshots of real content
- Instagram / TikTok profile links
- Updated CV PDF optimized for digital marketing roles
- Custom domain
