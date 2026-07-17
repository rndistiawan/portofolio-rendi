# Rendi Portfolio Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Ship a single-page Indonesian portfolio for Rendi Setiawan (Digital Marketing · Social Media) on Vercel with soft professional design.

**Architecture:** Next.js App Router static marketing page. All copy lives in `src/content/site.ts`. Sections are presentational components composed on `app/page.tsx`. Contact via WhatsApp + mailto; CV and photo from `public/assets`.

**Tech Stack:** Next.js 15+, TypeScript, Tailwind CSS v4 or v3, deployed on Vercel.

## Global Constraints

- Language: Bahasa Indonesia only
- No invented metrics or testimonials
- Public contact only: email, WA, Jakarta Timur
- No KTP/address/BPJS/patient data
- Soft professional sage palette
- Approach B hybrid positioning
- Honest copy from approved spec `docs/superpowers/specs/2026-07-17-rendi-portfolio-design.md`

---

### Task 1: Scaffold Next.js project

**Files:**
- Create: project root via `create-next-app`
- Create: `public/assets/*` (already may exist)

- [ ] **Step 1:** Run create-next-app in workspace (TS, Tailwind, App Router, no src dir OR with src — prefer `src/` for components)
- [ ] **Step 2:** Confirm `npm run build` works on empty scaffold
- [ ] **Step 3:** Ensure photo + CV under `public/assets/`

---

### Task 2: Content module

**Files:**
- Create: `src/content/site.ts`

- [ ] **Step 1:** Encode identity, nav, hero, about, experience, projects, skills, certificates, contact from spec
- [ ] **Step 2:** Export typed constants used by all sections

---

### Task 3: Global styles + layout

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

- [ ] **Step 1:** Tokens — paper, ink, sage accent, peach highlight, spacing, fonts
- [ ] **Step 2:** Metadata (title, description, OG)
- [ ] **Step 3:** Font via `next/font` (Plus Jakarta Sans)

---

### Task 4: Section components

**Files:**
- Create: `src/components/Nav.tsx`, `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Certificates.tsx`, `Contact.tsx`, `Footer.tsx`

- [ ] **Step 1:** Build each section from `site.ts`
- [ ] **Step 2:** Wire into `app/page.tsx` single page
- [ ] **Step 3:** Responsive check (stack on mobile)

---

### Task 5: Polish + verify

- [ ] **Step 1:** `npm run build` green
- [ ] **Step 2:** Fix a11y basics (alt, focus, landmarks)
- [ ] **Step 3:** README with run + deploy instructions

---

### Task 6: Deploy notes

- [ ] Document `vercel` / GitHub import steps for free `*.vercel.app`
