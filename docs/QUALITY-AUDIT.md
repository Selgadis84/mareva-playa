# Quality audit — Mareva Playa (2026-07-05)

## Verdict

**Ready for Cloudflare Pages preview deploy.** Not yet ready for public DNS cutover until Formspree is configured and parents sign off on prices/copy.

## Strengths

- Clean Astro static build (15 pages, ES + EN)
- Content externalized in JSON — easy maintenance
- Correct NAP, emails, WhatsApp, reservation policy
- SEO basics: canonical, hreflang, sitemap, JSON-LD (Hotel)
- LFPDPPP privacy pages in both languages
- Security headers via `public/_headers`
- Repo live at github.com/Selgadis84/mareva-playa

## Gaps fixed in this audit

| Issue | Fix |
|-------|-----|
| Fake Google Maps embed | Real address-based embed URL |
| Fabricated star rating in JSON-LD | Removed |
| Unused `PlaceholderImage.astro` | Deleted |
| Contact form dev warning in production | Hidden when `PROD` |
| Mobile menu stayed open after tap | Closes on link click |
| No skip-to-content link | Added |
| hreflang `en` vs `en-US` mismatch | Standardized to `en-US` |
| No Node version for Cloudflare | Added `.node-version` (22) |
| Cloudflare SPA fallback | Added `public/_redirects` |

## Remaining gaps (acceptable or deferred)

| Gap | Severity | Action |
|-----|----------|--------|
| Contact form disabled until Formspree ID set | **Blocker for launch** | Phase A: create Formspree form |
| Placeholder images (gradients) | Medium | Phase 7 photo swap |
| OG image is SVG (WhatsApp prefers JPG) | Medium | Replace with JPG after photo shoot |
| Google Reviews URL is search, not direct profile | Low | Get exact GBP link from parents |
| Check-in/out times marked "confirmar" | Low | Parents to confirm |
| No FAQ page | Low | Post-launch if needed |
| Sitemap hreflang only on home pages | Low | Acceptable for v1 |
| `AGENTS.md` / `CLAUDE.md` in repo | Low | Cursor dev notes; optional cleanup |
| ESLint/Prettier not configured | Low | Optional dev tooling |
| Parents have not verified room prices | **Blocker for launch** | Sign-off before DNS cutover |

## Build verification

```bash
npm run build   # must pass
npm run preview # manual smoke test
```
