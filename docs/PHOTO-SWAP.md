# Photo swap checklist (Phase 7)

When high-resolution photos are ready:

- [ ] Receive 15–30 photos (exterior, rooms, pool, restaurant, beach)
- [ ] Resize to max 1920px wide; export as WebP (keep originals archived)
- [ ] Place files in `public/images/`:
  - `hero/` — homepage hero
  - `rooms/` — one image per room (match filenames in `rooms.json`)
  - `gallery/` — gallery grid (update `gallery.json` `src` paths)
  - `amenities/` — optional service photos
- [ ] Update `src/data/rooms.json` — change `"image"` fields from `.svg` to `.webp`
- [ ] Update `src/data/gallery.json` — change `"src"` fields
- [ ] Replace `public/og-image.svg` with a real `og-image.jpg` (1200×630) and update `BaseLayout.astro` if needed
- [ ] Run `npm run build` locally to verify
- [ ] Push → Cloudflare auto-deploys
- [ ] Visual check on mobile + desktop

No component code changes required if filenames match JSON paths.
