# Portofolio Rendi Setiawan

Single-page portfolio (Digital Marketing · Social Media) — Next.js + Tailwind, siap deploy ke Vercel.

## Jalankan lokal

```bash
cd web
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Edit konten

Semua teks ada di `src/content/site.ts` (nama, pengalaman, skill, kontak, dll.).

Aset:
- Foto: `public/assets/rendi-photo.jpg`
- CV: `public/assets/CV-Rendi-Setiawan.pdf`

## Deploy Vercel

1. Push repo ke GitHub, **atau** dari folder `web`:
   ```bash
   npx vercel
   ```
2. Root Directory di dashboard Vercel: `web` (jika monorepo di `testportofolio`).
3. Framework: Next.js (auto-detect).

URL gratis: `https://<nama-project>.vercel.app`

## Spec & plan

- Spec: `../docs/superpowers/specs/2026-07-17-rendi-portfolio-design.md`
- Plan: `../docs/superpowers/plans/2026-07-17-rendi-portfolio.md`
