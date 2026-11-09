# Kwanza Green Campus — by KwanzaLabs

Website and installable PWA for **Kwanza Green Campus**, a youth-led environmental initiative launched in 2024 in Goma, DR Congo.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons. No backend, no paid services.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build (must pass before deploying)
npm start        # serve the production build
```

Requires Node 20+. This project uses a recent Next.js (16.x); see `AGENTS.md` and `node_modules/next/dist/docs/` for version-specific docs.

## Environment variables (all optional)

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO / Open Graph |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional override of the public email (default is in `content/site.ts`, along with phone and WhatsApp) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | JSON endpoint (e.g. Formspree). Forms POST here and report success only on an OK response |
| `NEXT_PUBLIC_SOCIAL_*` | Social profile URLs. Empty = shown as "soon" |

### How forms behave
1. `NEXT_PUBLIC_FORM_ENDPOINT` set → submitted there.
2. Else (the default) → opens the visitor's email app pre-filled (they must press send; the page says so).
3. (Not applicable now that a default email is set.)

Recommended next step: create a free Formspree form and set `NEXT_PUBLIC_FORM_ENDPOINT`.

## Updating content

| What | File |
| --- | --- |
| Name, tagline, location, email, social links, **photos** | `content/site.ts` |
| Hero, About, Initiatives, Expansion/Partners, Get Involved | `content/content.ts` |
| **Impact statistics** | `content/impact.ts` |

### Impact statistics
The values in `content/impact.ts` are **unverified placeholders** and are labelled as such on the site.
Replace each `value` and `target`, set `verified: true` per metric (and for `activitySeries`), and the placeholder labels disappear automatically.
Update `impactMeta.asOf` with the reporting period.

### Photography
No photographs ship with the project, so brand illustrations are shown. To use real photos, put licensed images in `public/images/`
and set the path in `content/site.ts`, e.g. `hero: { src: "/images/hero.jpg", alt: "…" }`. They are optimised via `next/image`.
Only use photos you have the rights and consent to publish (especially of students).

## PWA
- Manifest: `app/manifest.ts`; icons are generated from the logo (`lib/brand-image.tsx`, `app/icons/*`).
- Service worker: `public/sw.js` (production only; network-first pages, cached static assets, offline fallback).
- Install button appears where the browser supports it. Open Graph image: `app/opengraph-image.tsx`.

## Deploy to Vercel (free Hobby plan)
1. Push this folder to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project**, import the repo (framework auto-detected as Next.js).
3. Add any environment variables above, then **Deploy**.
4. Set `NEXT_PUBLIC_SITE_URL` to the final URL and redeploy.

Or with the CLI: `npx vercel` then `npx vercel --prod`.
