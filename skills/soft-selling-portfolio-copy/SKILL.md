---
name: soft-selling-portfolio-copy
description: Use when writing or rewriting portfolio, freelance landing, or personal-brand copy (Bahasa Indonesia or English) that should feel invitational rather than hard-sell — especially hero, about, services, contact CTA, and WhatsApp prefill text.
---

# Soft-Selling Portfolio Copy

## Overview

**Soft selling** invites the right client into a conversation. It never pressure-closes. Trust and clarity convert better than urgency for freelance portfolios (UMKM, jasa, B2C service).

**Core principle:** Show how you work and who you help; let the reader decide. One calm CTA is enough.

**Portfolio value principle:** Every section answers *“What does the client need → what do they get from me?”* Soft tone never drops this clarity.

## When to Use

- Portfolio / personal brand / freelance service pages
- Hero, about, services, process, contact, meta description
- User says soft selling, soft sell, tidak hard sell, ramah, invitational, low pressure

**When NOT to use:** Paid ads, flash sales, or explicit hard-CTA campaigns the owner requested.

## Voice Contract (output shape)

Every section of portfolio copy MUST land in this shape:

1. **Reader first** — start from their situation or outcome, not “hire me”
2. **Honest offer** — what you do, for whom; no fake metrics or urgency
3. **Calm next step** — one low-pressure invite (chat / email), optional

### Soft vs hard (quick reference)

| Soft (do) | Hard (avoid) |
|-----------|----------------|
| “Kalau cocok, kita ngobrol dulu.” | “Chat sekarang!” / “Mulai hari ini” |
| “Siap diskusi saat Anda siap.” | “Siap mulai proyek?” / “Jangan lewatkan” |
| “Bantu merawat kehadiran medsos” | “Medsos Anda tidak boleh mandek” |
| “Ceritakan brand Anda.” | “Hubungi saya sekarang untuk deal” |
| Collaborative “kita” / “bareng” | Closing pitch di akhir setiap section |
| Outcome + cara kerja | Fear, FOMO, “menang vs kalah” |

## Rules

1. **No fake urgency** — no “sekarang”, “hari ini”, “terbatas”, countdown language unless literally true and owner-approved.
2. **One CTA intent** — WhatsApp (or email); same calm verb site-wide. Prefer “Ngobrol di WhatsApp” / “Chat WhatsApp” over “Order sekarang”.
3. **No invented proof** — no fake % engagement, fake clients, fake testimonials.
4. **Empathy before pitch** — about/hero may mention reader pain lightly, then offer; never guilt.
5. **Invitation close** — contact title invites; does not interrogate (“Siap ditangani?”).
6. **Facts stay facts** — experience bullets, certificates, roles stay concrete; soft tone wraps them, does not inflate them.
7. **Bahasa Indonesia default** for this project: warm, clear, professional; avoid corporate fluff (“elevate”, “seamless”, “solusi end-to-end”).

## Section recipes

| Section | Soft recipe |
|---------|-------------|
| **Tagline** | This is my portfolio + what the client gets (clarity, tidy feed, ready content). No CTA. |
| **About** | Own the site as portfolio → need you meet → background that proves reliability. |
| **Services** | Each card: *Butuh X?* → *Anda dapat Y.* Hint = outcome label. No “order now”. |
| **Process** | How the client gets the outcome (need → match → deliver → review). |
| **Projects** | Frame as “need answered”, not vanity. Honest about proof limits. |
| **Experience** | Role honest; bullets = task + value client feels, no fake metrics. |
| **Contact** | Invite them to name the need; calm WA/email. |

### Client value map (Rendi portfolio)

| Client need | They get from Rendi |
|-------------|---------------------|
| Unclear brand message | Clear copy / messaging direction |
| Tired of running social alone | Content plan + posting rhythm |
| Messy feed | Simple visual design (Canva) |
| Clips not ready to post | Short video edit (reels/TikTok) |
| Guessing at digital | Calm digital marketing direction |
| Need someone reliable | Leader/clinic discipline + finish work |

### Experience bullets (Leader / service roles)

Each bullet should land as: **what you owned** + **outcome the reader cares about**.

| Do | Avoid |
|----|--------|
| “Memimpin alur layanan… agar pasien tenang” | Only “membantu operasional harian” |
| “Nilai jual yang saya bawa ke klien: rapi, konsisten” | Fake KPIs / patient counts |
| Leadership verbs: memimpin, mengatur, menjaga kualitas | Passive-only: membantu, mendukung (unless true) |
| **WA prefill** | Polite intro + soft ask (boleh diskusi?), not “saya butuh jasa sekarang”. |
| **Quote** | Positioning belief, not sales slogan. |

## Before / after

```text
❌ Siap medsos Anda ditangani? Chat sekarang.
✅ Ada yang ingin dirapikan di medsos? Kita bisa ngobrol dulu — tanpa komitmen.

❌ Chat WhatsApp — Mulai Hari Ini
✅ Ngobrol di WhatsApp

❌ Saya bantu UMKM yang kelelahan… Siap mulai? Chat WhatsApp sekarang.
✅ Saya mendampingi UMKM dan jasa merawat kehadiran di medsos — dari ide sampai posting — dengan tempo yang realistis.
```

## Red flags — rewrite if you see them

- “Sekarang”, “hari ini”, “jangan tunda”, “segera”
- “Order”, “deal”, “closing”, “promo”
- Fear: “tidak boleh mandek”, “ketinggalan”, “kalah”
- Hard close inside about/services body
- Multiple stacked CTAs in one paragraph
- Superlatives without evidence (“terbaik”, “#1”)

**If any red flag appears: rewrite that string before shipping.**

## Rationalizations

| Excuse | Reality |
|--------|---------|
| “Owner wants conversion” | Soft invite converts trust buyers (UMKM); hard close increases bounce. |
| “Just one urgent CTA” | One urgent CTA recolors the whole page. Keep calm. |
| “Stronger = more professional” | For freelance service, calm + clear = professional. |
| “Soft is too weak / vague” | Soft still names offer and CTA; it drops pressure, not clarity. |

## Workflow for this repo

1. Edit copy in `web/src/content/id.ts` and `web/src/content/en.ts` (keep both in sync).
2. Shared identity (email, photo) lives in `web/src/content/site.ts` via `getSite()`.
3. Apply this skill to every user-facing string; benefit-led + approach tone.
4. Keep structure/keys; change wording, not invent services or prices.
5. `npm run build` in `web/`.
6. Language toggle: `LanguageProvider` + `LanguageToggle` in Nav.

## Related

- Project patterns: `portofolio-rendi-patterns` (structure, honest content, CTA intent)
- Design fills: same skill for section types — this skill owns **tone of words**
