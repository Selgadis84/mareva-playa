# Launch checklist

**Use with:** [DEPLOY-RUNBOOK.md](./DEPLOY-RUNBOOK.md) (full sequence + gates)

## Phase 0 — Code on GitHub

- [ ] Latest commit pushed to `main` on Selgadis84/mareva-playa
- [ ] No `.env` file in repo (secrets only in Cloudflare)

## Phase 1 — Formspree

- [ ] Form created at formspree.io
- [ ] Notifications → `reservas@marevaplaya.com.mx`
- [ ] Formspree verification email received (if required)
- [ ] Test submission arrives at `reservas@` Google Group
- [ ] Form ID saved for Cloudflare env var

## Phase 2 — Cloudflare Pages preview

- [ ] Cloudflare account created
- [ ] GitHub connected; repo `Selgadis84/mareva-playa` selected
- [ ] Build: `npm run build`, output `dist`, branch `main`
- [ ] Env vars set (Production + Preview): `NODE_VERSION=22`, `PUBLIC_FORMSPREE_ID`
- [ ] Build green; preview URL works (e.g. mareva-playa.pages.dev)

## Phase 3 — Smoke test + sign-off

- [ ] All 14 smoke tests in runbook Phase 3 pass
- [ ] Parents confirm room prices and copy
- [ ] Placeholder photos acceptable for now

## Phase 4 — DNS cutover (marevaplaya.com.mx)

- [ ] [DNS snapshot](./DNS-SNAPSHOT-TEMPLATE.md) completed
- [ ] MX records screenshot saved
- [ ] Custom domains added in Cloudflare Pages
- [ ] Web CNAME/A added in Google DNS only (MX untouched)
- [ ] www redirects to apex
- [ ] HTTPS valid on production domain
- [ ] Email to `info@` and `reservas@` still works
- [ ] Contact form works on production domain

## Phase 5 — Search & GBP

- [ ] Google Search Console property added
- [ ] Sitemap submitted
- [ ] Google Business Profile URL updated

## Phase 6 — Deferred

- [ ] marevaplaya.com registrar identified
- [ ] .com → .com.mx 301 redirect configured
- [ ] SEMSEO canceled
- [ ] High-res photos (see PHOTO-SWAP.md)
