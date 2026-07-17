# Plan Animasi Portofolio Rendi (Three.js + Motion/GSAP)

**Status:** Approved & executed (Phase 1+2+3) — 2026-07-17  
**Tanggal:** 2026-07-17  
**Proyek:** `web/` (Next.js 16, sudah ada `motion`)

---

## 1. Tujuan

Membuat portofolio terasa hidup dan premium, tanpa:

- memperlambat load di HP
- mengalihkan fokus dari copy / foto / CTA WhatsApp
- melanggar `prefers-reduced-motion`

**Bukan** game 3D penuh. **Ya** ambient 3D + scroll polish yang cocok brand soft-forest Digital Marketing.

---

## 2. Skill yang relevan (lokal + luar)

### Sudah terpasang di mesin Anda

| Skill | Path / area | Kegunaan untuk plan ini |
|-------|-------------|-------------------------|
| **design-taste-frontend** | `~/.agents/skills/design-taste-frontend` | Aturan motion: motivated, reduced-motion, no marquee spam, transform/opacity only |
| **gpt-taste** | `~/.agents/skills/gpt-taste` | GSAP ScrollTrigger, pin/scrub, layout motion engineering |
| **hallmark** | `~/.agents/skills/hallmark` | Restraint motion, ease tokens, anti-slop animation |
| **high-end-visual-design** | `~/.agents/skills/high-end-visual-design` | Kualitas “mahal” untuk micro-interaction |
| **game-animation-frames** | Grok bundled | Hanya relevan jika butuh asset animasi frame (bukan prioritas portofolio web) |

### Skill eksternal (bisa di-install jika mau)

| Skill | Sumber | Fokus |
|-------|--------|--------|
| **web3d-integration-patterns** | [claudedesignskills](https://github.com/freshtechbro/claudedesignskills) | Meta-skill: Three.js + GSAP + R3F + Motion digabung |
| **threejs-skills** | [mdskills / LobeHub](https://www.mdskills.ai/skills/threejs-skills) | Scene Three.js, best practice WebGL |
| **3D Web Experience** | MCP Market / community | Three.js, React Three Fiber, Spline, scroll 3D |
| **GSAP Skills (official-ish pack)** | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) + community packs | ScrollTrigger, timeline, React helpers |
| **threejs-skills (ECC variant)** | LobeHub `haniakrim21-everything-claude-code-threejs-skills` | Workflow Three.js + GSAP + optional R3F |

**Rekomendasi install (opsional, sebelum eksekusi Phase B/C):**

1. `web3d-integration-patterns` — arsitektur multi-lib  
2. Pack **GSAP Skills** — jika pakai ScrollTrigger berat  
3. **threejs-skills** — jaga kualitas scene 3D  

Tidak wajib install dulu untuk approve plan; berguna saat implementasi agar agent tidak “mengarang” pola 3D.

---

## 3. Kondisi situs sekarang

| Layer | Status |
|-------|--------|
| `motion` (Framer Motion successor) | Sudah terpasang (`Reveal.tsx` fade/slide) |
| CSS marquee | Sudah ada (1 strip) |
| GSAP / ScrollTrigger | Belum |
| Three.js / R3F | Belum |
| Reduced motion | Sebagian (Reveal + CSS) |

Dial design-taste saat ini (dari redesign sebelumnya): **variance 7 · motion 5 · density 3**  
Untuk phase animasi, usulan naik motion ke **6–7** (masih restrained, bukan Awwwards overload).

---

## 4. Strategi stack (rekomendasi)

### Pendekatan hybrid (Recommended)

```
UI motion     →  motion/react (sudah ada) + optional GSAP ScrollTrigger
3D ambient    →  Three.js (vanilla) ATAU @react-three/fiber + drei
Fallback      →  CSS/static jika reduced-motion / low-end / tab hidden
```

**Kenapa hybrid, bukan full Three.js page?**

| Full 3D page | Hybrid (recommended) |
|--------------|----------------------|
| Bundle besar | Three.js hanya di hero / 1 canvas |
| Bisa ganggu baca copy | Copy tetap prioritas |
| Sulit SEO & a11y | Konten HTML tetap normal |
| Overkill portfolio freelancers | Cukup “wow” tanpa berat |

### Alternatif (jika ditolak hybrid)

| Opsi | Isi | Kapan |
|------|-----|--------|
| **A. Motion-only** | Perkuat Reveal, hover, staggered cards; no Three | Paling aman & cepat |
| **B. Hybrid** (rec) | Motion + 1 canvas Three ambient | Balance wow / performa |
| **C. R3F showcase** | Hero 3D interactive (mesh brand / particles) | Mau kesan creative agency |
| **D. Full scroll-story 3D** | Pin section + camera path GSAP | Mahal, risk HP lemah — **tidak recommended v1** |

**Plan default: Opsi B.**

---

## 5. Konsep visual animasi (sesuai brand soft-forest)

### 5.1 Three.js — ambient hero (bukan main content)

**Ide scene (pilih 1 saat eksekusi):**

1. **Soft particle field** — partikel sage/olive pelan, parallax mouse ringan  
2. **Floating abstract shapes** — orb / plane translucent, slow rotate  
3. **Ribbon / mesh gradient 3D** — abstrak brand, blur soft  

**Bukan:** karakter 3D, teks 3D, fake laptop product, game controls.

**Teknis:**

- Canvas `position: absolute` di belakang hero, `pointer-events: none` (kecuali hover zone opsional)
- `dpr` cap 1.5 di mobile
- Pause render saat `document.hidden` atau di luar viewport
- Dispose geometry/material on unmount
- Dynamic import: `next/dynamic` + `ssr: false`
- Bundle: load Three hanya di client setelah idle / hero visible

### 5.2 Motion / GSAP — section life

| Elemen | Animasi | Library |
|--------|---------|---------|
| Hero text | Stagger fade-up on load | `motion` |
| Photo frame | Subtle scale-in | `motion` |
| Section titles | `whileInView` reveal | `motion` (sudah ada, perbaiki) |
| Project cards | Stagger + hover lift | `motion` |
| Experience timeline | Line draw / node pop | `motion` atau GSAP |
| Skills chips | Cascade delay | `motion` |
| Contact block | Soft reveal | `motion` |
| Nav | Blur/background on scroll | `motion` values / CSS |
| Marquee | Keep 1 only (sudah) | CSS |

**GSAP ScrollTrigger** (opsional Phase 2):

- Hanya jika butuh pin / scrub (mis. projects horizontal pan)
- Max **1** pin section di v1
- Cleanup `ScrollTrigger.getAll().forEach(t => t.kill())` on unmount

### 5.3 Yang dihindari (anti-slop)

- Infinite bounce everywhere  
- Custom cursor  
- >1 marquee  
- Scroll cue “Scroll ↓”  
- Animating `width/height/top/left`  
- 3D yang memakan 100% CPU di HP  

---

## 6. Arsitektur file (rencana)

```
web/src/
  components/
    animation/
      Reveal.tsx              # enhance existing
      StaggerChildren.tsx     # NEW
      HeroCanvas.tsx          # NEW client Three scene
      usePrefersReducedMotion.ts
      useInViewPause.ts       # pause 3D when offscreen
  lib/
    three/
      createSoftScene.ts      # scene factory, disposable
      prefersWebGL.ts         # capability check
```

**Deps (Phase B):**

```bash
npm install three
npm install -D @types/three
# optional later:
# npm install @react-three/fiber @react-three/drei gsap
```

**R3F vs vanilla Three:**

| | Vanilla Three | R3F + drei |
|--|---------------|------------|
| Bundle control | Lebih tipis jika scene kecil | Lebih ergonomis React |
| Next App Router | Dynamic import canvas | Perlu client boundary hati-hati |
| Rekomendasi v1 | **Vanilla Three** untuk 1 ambient scene | R3F jika scene bertambah kompleks |

Plan v1: **vanilla Three.js** di `HeroCanvas`.

---

## 7. Phase eksekusi

### Phase 0 — Prep (0.5 hari)

- [ ] Konfirmasi opsi stack (B hybrid recommended)
- [ ] Konfirmasi scene 3D: particles / orbs / ribbon
- [ ] Optional: install skill eksternal `web3d-integration-patterns` + GSAP skills
- [ ] Baseline Lighthouse mobile / FPS check (manual)

### Phase 1 — Motion polish (tanpa Three) — **ship value dulu**

- [ ] Enhance `Reveal` (stagger children, blur optional, respect reduced motion)
- [ ] Hero: staggered title / role / tagline / CTAs
- [ ] Project cards: stagger + hover (transform only)
- [ ] Experience: timeline node animation
- [ ] Skills chips cascade
- [ ] Nav scroll state (sudah partial) + soft transition
- [ ] Audit: max motion intensity, one marquee only

**Exit criteria:** situs terasa lebih premium di scroll, masih 60fps di mid HP.

### Phase 2 — Three.js ambient hero

- [ ] Install `three` + types
- [ ] `HeroCanvas` dynamic import, no SSR
- [ ] Soft particle/orb scene (sage palette tokens)
- [ ] Mouse parallax **sangat** ringan (desktop only)
- [ ] Pause on reduced-motion / hidden tab / low power
- [ ] Fallback: static gradient (sudah ada mood image)
- [ ] Perf: target < 3–5ms frame on desktop, cap particles di mobile

**Exit criteria:** hero “hidup”, bundle tidak meledak, LCP foto tetap prioritas (`priority` image).

### Phase 3 — Optional GSAP depth

- [ ] Install `gsap` hanya jika Phase 1 tidak cukup
- [ ] Max 1 ScrollTrigger pin (mis. projects story)
- [ ] Cleanup + reduced-motion kill
- [ ] Jangan campur GSAP transform dengan Motion di node yang sama

### Phase 4 — QA

- [ ] Chrome / Edge / mobile Safari
- [ ] `prefers-reduced-motion: reduce` → no 3D loop, instant reveals
- [ ] Throttle CPU: no runaway rAF when tab backgrounded
- [ ] Build green, no hydration mismatch
- [ ] Visual: copy tetap terbaca di atas canvas

---

## 8. Performa & a11y (non-negotiable)

| Rule | Detail |
|------|--------|
| Reduced motion | No continuous 3D; static hero bg |
| Lazy 3D | Load after first paint / when hero in view |
| Pause offscreen | IntersectionObserver |
| dpr cap | `Math.min(devicePixelRatio, 1.5)` |
| Dispose | On unmount always |
| CTA contrast | Text never behind busy 3D without scrim |
| Touch | No forced mouse-parallax on mobile |

---

## 9. Estimasi effort

| Phase | Effort | Risk |
|-------|--------|------|
| 1 Motion polish | 2–4 jam | Rendah |
| 2 Three ambient | 3–6 jam | Sedang (perf HP) |
| 3 GSAP pin | 2–4 jam | Sedang |
| 4 QA | 1–2 jam | — |

**MVP recommended ship:** Phase 1 + Phase 2 (tanpa GSAP pin dulu).

---

## 10. Keputusan yang perlu dari Anda

1. **Stack:**  
   - **B Hybrid** (Recommended) — Motion + Three ambient  
   - A Motion-only  
   - C R3F lebih interaktif  

2. **Scene Three:**  
   - Particles soft  
   - Floating orbs  
   - Ribbon/mesh abstract  

3. **Install skill eksternal?**  
   - Ya (saya bantu clone ke skills folder)  
   - Tidak, lanjut dengan skill lokal  

4. **Mulai eksekusi setelah approve?**  
   - Ya, mulai Phase 1  
   - Ya, langsung Phase 1+2  
   - Tunggu revisi plan  

---

## 11. Out of scope (v1)

- Spline embed berat  
- Full-page WebGL  
- Physics engine  
- 3D text nama  
- Custom cursor trail  
- Video background  
- Sound  

---

## 12. Next step setelah approve

1. Tulis checklist task di plan (checkbox)  
2. Implement Phase 1 (motion)  
3. Implement Phase 2 (Three hero)  
4. `npm run build` + test reduced-motion  
5. Commit message: `feat: add portfolio motion and ambient three.js hero`
