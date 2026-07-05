# Next step — start here

**Full zero-gap runbook:** [DEPLOY-RUNBOOK.md](./DEPLOY-RUNBOOK.md) ← follow this exactly

## Where you are now

| Step | Status |
|------|--------|
| Site built (Astro, ES/EN) | ✅ Done |
| GitHub repo | ✅ [Selgadis84/mareva-playa](https://github.com/Selgadis84/mareva-playa) |
| Quality audit fixes | ⚠️ Push required (Phase 0) |
| Formspree | ❌ Not started |
| Cloudflare Pages | ❌ Not started |
| DNS cutover `.com.mx` | ❌ After preview + parent OK |

## Do these three things next (in order)

### 1. Push latest code (5 min)

```powershell
cd d:\Personal\Mareva
git add -A
git commit -m "Quality audit fixes and deployment runbook"
git push origin main
```

### 2. Formspree (15 min)

→ [DEPLOY-RUNBOOK.md Phase 1](./DEPLOY-RUNBOOK.md#phase-1--formspree-15-min)

Must confirm test email reaches `reservas@marevaplaya.com.mx`.

### 3. Cloudflare Pages preview (20 min)

→ [DEPLOY-RUNBOOK.md Phase 2](./DEPLOY-RUNBOOK.md#phase-2--cloudflare-pages-preview-20-min)

Set `NODE_VERSION=22` and `PUBLIC_FORMSPREE_ID` **before** first deploy.

---

## Do NOT do yet

- DNS changes on `marevaplaya.com.mx` (Phase 4 — after parent approval)
- Cancel SEMSEO
- `marevaplaya.com` redirect

---

## Related docs

- [DEPLOY-RUNBOOK.md](./DEPLOY-RUNBOOK.md) — complete sequence with gates
- [DNS-SNAPSHOT-TEMPLATE.md](./DNS-SNAPSHOT-TEMPLATE.md) — fill before DNS cutover
- [LAUNCH-CHECKLIST.md](./LAUNCH-CHECKLIST.md) — printable checklist
- [QUALITY-AUDIT.md](./QUALITY-AUDIT.md) — what was reviewed
