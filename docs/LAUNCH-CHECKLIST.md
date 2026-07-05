# Launch checklist

## Before DNS cutover (Phase 5A)

- [ ] Push repo to GitHub
- [ ] Create Cloudflare Pages project (see [DEPLOY.md](./DEPLOY.md))
- [ ] Set `PUBLIC_FORMSPREE_ID` in Cloudflare env vars
- [ ] Optional: set `PUBLIC_TURNSTILE_SITE_KEY`
- [ ] Test preview URL — all 15 pages load (ES + EN)
- [ ] Test contact form on preview (Formspree confirmation email to `reservas@marevaplaya.com.mx`)
- [ ] Parents sign-off on copy and room prices in `src/data/rooms.json`

## DNS cutover (Phase 5A)

- [ ] Snapshot Google DNS MX/SPF/TXT records
- [ ] Add Cloudflare Pages custom domain `marevaplaya.com.mx`
- [ ] Add web CNAME/A in Google DNS only (do not touch MX)
- [ ] Verify HTTPS at `https://marevaplaya.com.mx`
- [ ] Send test email to `info@` and `reservas@` — confirm delivery
- [ ] Google Search Console: add property, submit sitemap
- [ ] Google Business Profile: update website URL

## Deferred (Phase 5B)

- [ ] Identify `marevaplaya.com` registrar
- [ ] Configure 301 redirects to `.com.mx` (see [redirects.md](./redirects.md))
- [ ] Cancel SEMSEO hosting

## Post-launch

- [ ] Monitor 404s for 2 weeks
- [ ] Swap photos when ready (see [PHOTO-SWAP.md](./PHOTO-SWAP.md))
