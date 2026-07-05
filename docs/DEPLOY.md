# Mareva Playa — Deployment Guide

## Cloudflare Pages (recommended)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Mareva Playa website"
git remote add origin https://github.com/Selgadis84/mareva-playa.git
git push -u origin main
```

### 2. Create Cloudflare Pages project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repository.
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 22 (or set `NODE_VERSION=22` in environment variables)
4. Environment variables (Production + Preview):
   - `PUBLIC_FORMSPREE_ID` — your Formspree form ID (recipient: `reservas@marevaplaya.com.mx`)
   - `PUBLIC_TURNSTILE_SITE_KEY` — optional Cloudflare Turnstile site key

### 3. Formspree setup

1. Create account at [formspree.io](https://formspree.io).
2. New form → set notification email to **reservas@marevaplaya.com.mx**.
3. Copy form ID into `PUBLIC_FORMSPREE_ID`.

### 4. Cloudflare Turnstile (optional)

1. Cloudflare Dashboard → **Turnstile** → Add site.
2. Add site key to `PUBLIC_TURNSTILE_SITE_KEY`.

---

## Phase 5A — Launch on marevaplaya.com.mx

**Keep Google DNS nameservers.** Only add web records; do **not** change MX records (Google Groups email).

1. In Cloudflare Pages → your project → **Custom domains** → add:
   - `marevaplaya.com.mx`
   - `www.marevaplaya.com.mx`
2. Cloudflare shows DNS records to add. In **Google Domains / Google Admin DNS** for `.com.mx`:
   - Add CNAME for `www` → `your-project.pages.dev` (or Cloudflare-provided target)
   - Add A/CNAME for apex `@` as instructed by Cloudflare
3. Wait for SSL (usually minutes).
4. Verify:
   - Site loads at `https://marevaplaya.com.mx`
   - Email still works: send test to `info@` and `reservas@`
5. [Google Search Console](https://search.google.com/search-console): add property, submit sitemap `https://marevaplaya.com.mx/sitemap-index.xml`
6. Update **Google Business Profile** website URL to `https://marevaplaya.com.mx`

### DNS snapshot (before cutover)

Export and save from Google DNS:

- All **MX** records
- **SPF** / **TXT** records
- **DKIM** records if present

---

## Phase 5B — marevaplaya.com redirect (when registrar known)

See [docs/redirects.md](./redirects.md) for URL mapping.

1. Add `marevaplaya.com` to Cloudflare (same account).
2. Create **Redirect Rule**: all traffic on `marevaplaya.com` and `www.marevaplaya.com` → `https://marevaplaya.com.mx$1` (301).
3. Verify old URLs redirect correctly.
4. Add redirect property in Search Console.
5. **Cancel SEMSEO hosting** (keep domain registration renewed separately).

---

## Cloudflare Web Analytics (optional)

Cloudflare Dashboard → **Analytics** → **Web Analytics** → Add site → paste beacon script into `BaseLayout.astro` if desired.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Email stops after DNS change | MX records were modified — restore from snapshot |
| Form not sending | Check `PUBLIC_FORMSPREE_ID` in Cloudflare env vars |
| 404 on `/en/` routes | Rebuild; ensure `dist/en/` exists after build |
| SSL pending | Wait 15 min; verify DNS points to Cloudflare Pages |
