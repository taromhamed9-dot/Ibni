# إبني — Ibni

> نبني عقولاً.. ونصنع مستقبلاً

A premium Arabic-first educational ecosystem for children aged 5–10 across the Arab world. Designed to replace destructive screen addiction with intelligent, joyful, AI-personalized learning.

## Stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion
- RTL-first Arabic UX (Tajawal + Cairo via `next/font`)
- Fully themed dark/light mode (CSS variables, `data-theme` on `<html>`, `localStorage` persistence + system preference)
- 120fps-friendly motion (transform/opacity only, `will-change`, `prefers-reduced-motion` honored)

## Brand
| Token | Value |
|---|---|
| Deep Blue | `#0E3D7B` |
| Blue | `#1E73D6` |
| Sky | `#43B8F0` |
| Green | `#6BC04B` |
| Orange | `#F39A1F` |
| Cream | `#FFFAF1` |

## Getting started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` — local dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — start the built server
- `npm run lint` — Next.js / ESLint

## Deployment
Optimized for Vercel. Push to `main` or import the repo into Vercel — zero config required.
