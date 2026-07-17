# Portofolio Rendi Setiawan

Portofolio **Digital Marketing · Social Media** — Next.js 16 + Tailwind, siap deploy ke Vercel.

## Struktur

```
testportofolio/
├── docs/          # Spec & plan
└── web/           # Aplikasi Next.js  ← root Vercel
```

## Lokal

```bash
cd web
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy Vercel (penting)

Karena app ada di subfolder `web/`:

1. Import repo ini di [vercel.com/new](https://vercel.com/new)
2. **Root Directory:** set ke `web` (bukan root repo)
3. Framework: Next.js (auto)
4. Build Command: `npm run build` (default)
5. Deploy

Atau dari CLI (di folder `web`):

```bash
cd web
npx vercel
```

## Konten

Edit teks di `web/src/content/site.ts`  
Foto profil: `web/public/assets/rendi-profile-28.jpg`

## Stack

- Next.js 16 (App Router, Cache Components)
- Tailwind CSS v4
- Motion + Three.js (hero particles) + GSAP (projects pin)
