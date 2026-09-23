# TrenNomads — React site

Small-group weekend trips from Bangalore to Chikmagalur. Dark, cinematic
"liquid glass" design built with React + Vite + TypeScript + Tailwind +
Framer Motion.

## The one file you'll actually edit

**`src/data/content.ts`** — business info, WhatsApp number, trip price/
schedule, every destination, booking form options. Edit that file for
day-to-day updates; you never need to touch the components.

## Running it locally

```bash
npm install
npm run dev       # http://localhost:5173, live-reloads as you edit content.ts
npm run build     # production build -> dist/
npm run preview   # serve the production build locally to double-check it
```

## Adding real trip video

The Hero and "The Trip" sections are built to show a looping background
video, but there's no real TrenNomads footage yet — so right now they show
an animated dark-green/clay gradient ("aurora") instead of a video. This is
intentional: nothing was hot-linked from someone else's site or a stock
CDN just to fill the space.

To add your own footage later:

1. Drop a short, muted, looping `.mp4` (no audio track needed — the player
   is always muted) into `src/assets/video/`. Keep clips small — a few MB,
   10–20 seconds, 1080p is plenty for a background loop.
2. Import it and point `content.ts` at it:
   ```ts
   import heroClip from "../assets/video/hero.mp4";
   // ...
   media: {
     heroVideo: [heroClip],   // array = cycles through multiple clips
     tripVideo: [],           // leave empty to keep the aurora here
   },
   ```
3. That's it — `FadingVideo` handles the fade-in/fade-out/loop automatically.

## Design system

- **Fonts**: Instrument Serif (italic, headings) + Barlow (body), loaded
  from Google Fonts in `index.html`.
- **Liquid glass**: `.liquid-glass` / `.liquid-glass-strong` in
  `src/index.css` — a near-invisible fill, a blur, and a gradient-stroke
  border drawn with a masked `::before`. Use on any panel that sits over
  the aurora/video.
- **Motion**: `Reveal` (blur+fade+rise entrance, shared across the site)
  and `BlurText` (word-by-word blur-in headline) in `src/components/`.
- **Icons**: hand-drawn SVGs in `src/components/icons.tsx`, no icon
  library dependency.

## Sections

Home (`Hero`) → The Trip (`Trip`, three cards: Route / Crew / Logistics) →
Destinations (grid + detail modal, "Book This Trip" pre-fills the form) →
About → Book (`Booking`, opens WhatsApp with the filled-in form) → Contact
→ Footer. A floating WhatsApp button is always visible.

## The booking flow

Same idea as before: no server, no database. The form builds a message
like:

```
Hi TrenNomads! I'd like to book a trip.

*Trip:* Mullayanagiri Peak
*Name:* Asha Rao
*Phone:* 98765 43210
*Date:* 2026-10-10
*Travellers:* 2
*Pickup point:* Marathahalli
```

...and opens `wa.me` with it pre-filled on your number
(`src/data/content.ts` → `business.whatsappNumber`). If a popup blocker
stops the tab from opening, a "Tap here" fallback link appears with the
same message.

## Hosting it for free

This is a static build (`npm run build` → `dist/`) — no server needed.

- **Vercel** (recommended): `vercel.com` → New Project → import this repo
  → framework preset "Vite" → deploy. Free tier, auto-builds on every push.
- **Netlify**: drag-and-drop the `dist/` folder onto
  `app.netlify.com/drop`, or connect the repo (build command
  `npm run build`, publish directory `dist`).
- **GitHub Pages**: build locally and push the contents of `dist/` to a
  `gh-pages` branch, or use the official `actions/deploy-pages` workflow.

Then point your domain's DNS at whichever one you pick — that's the only
thing you should need to pay for.

## Pre-launch checklist

- [ ] Swap in real photos for the 9 destinations (currently Unsplash
      placeholders) in `src/data/content.ts`
- [ ] Add real trip video (see above) or keep the aurora — both look
      intentional
- [ ] Double check the WhatsApp number, Instagram link and email in
      `content.ts`
- [ ] Test the booking form end-to-end on a phone (WhatsApp deep links
      behave slightly differently on iOS vs Android vs desktop)
- [ ] Set the custom domain once purchased
