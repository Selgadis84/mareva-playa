# Mareva Playa Website

Minimalist bilingual (ES/EN) static website for [Mareva Playa](https://marevaplaya.com.mx) — luxury suites and apartments in Acapulco Diamante.

**Repository:** [github.com/Selgadis84/mareva-playa](https://github.com/Selgadis84/mareva-playa)

**Stack:** Astro 7 · TypeScript · Tailwind CSS 4 · Cloudflare Pages

## Quick start

```bash
npm install
cp .env.example .env   # add Formspree + Turnstile keys
npm run dev            # http://localhost:4321
npm run build          # output in dist/
npm run preview        # preview production build
```

## Project structure

```text
src/
├── components/     # Header, Footer, RoomCard, ContactForm, WhatsAppButton
├── data/           # JSON content (edit these for routine updates)
│   ├── site.json   # phone, emails, address, copy
│   ├── rooms.json  # accommodations + prices
│   ├── amenities.json
│   └── gallery.json
├── i18n/           # UI strings (nav, buttons)
├── layouts/        # BaseLayout.astro
└── pages/          # ES pages + en/ for English
public/images/      # photos (hero/, rooms/, gallery/, amenities/)
docs/               # content audit, redirects, deployment
```

## Updating content (no TypeScript needed)

### Room prices or descriptions

Edit `src/data/rooms.json`:

```json
{
  "id": "king",
  "priceMxn": 1800,
  "name": { "es": "...", "en": "..." }
}
```

Commit and push → Cloudflare redeploys automatically.

### Contact info

Edit `src/data/site.json` — `phone`, `email`, `address`, etc.

### Swap photos (Phase 7)

1. Add optimized WebP/JPG files to `public/images/rooms/` or `public/images/gallery/`.
2. Update `image` paths in `rooms.json` or `src` in `gallery.json`.
3. Push to Git.

Example: change `"image": "/images/rooms/king.svg"` → `"image": "/images/rooms/king.webp"`

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_FORMSPREE_ID` | Yes (production) | Formspree form ID → delivers to `reservas@marevaplaya.com.mx` |
| `PUBLIC_TURNSTILE_SITE_KEY` | No | Cloudflare Turnstile anti-spam |

## Deployment

See [docs/DEPLOY.md](./docs/DEPLOY.md) for Cloudflare Pages setup and DNS cutover (Phase 5A / 5B).

**Launch steps:** [docs/LAUNCH-CHECKLIST.md](./docs/LAUNCH-CHECKLIST.md)  
**Next step (start here):** [docs/NEXT-STEPS.md](./docs/NEXT-STEPS.md)  
**Full deploy runbook:** [docs/DEPLOY-RUNBOOK.md](./docs/DEPLOY-RUNBOOK.md)  
**Launch checklist:** [docs/LAUNCH-CHECKLIST.md](./docs/LAUNCH-CHECKLIST.md)  
**Quality audit:** [docs/QUALITY-AUDIT.md](./docs/QUALITY-AUDIT.md)

## URLs

| Spanish | English |
|---------|---------|
| `/` | `/en/` |
| `/alojamientos` | `/en/accommodations` |
| `/servicios` | `/en/services` |
| `/galeria` | `/en/gallery` |
| `/ubicacion` | `/en/location` |
| `/contacto` | `/en/contact` |
| `/aviso-de-privacidad` | `/en/privacy` |

## License

Private — Mareva Playa © 2026
