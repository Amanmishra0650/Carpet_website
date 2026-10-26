# CarpetMart — React + Vite

A responsive, frontend-only carpet marketplace inspired by the supplied listing screenshot. All suppliers, prices, illustrations, ratings and contact information are fictional demo content. Independent demo; not affiliated with IndiaMART.

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite.

## Checks
```bash
npm test
npm run build
npm run preview
```

## Features
- Responsive six-column desktop catalog, tablet and mobile layouts
- Search, city and carpet category filters, price/rating sorting
- Grid/list views and saved products (session state)
- Independent wrapping image sliders with locally bundled SVG carpet illustrations
- Product details, sample call information and validated demo enquiry forms
- Accessible dialog focus trap, Escape closure and keyboard controls

No backend, database, authentication, actual calls, or external enquiry submissions. Form data is never transmitted or persisted. Saved items reset on refresh.

## Deployment
Import this repository into Vercel. Select Vite, build command `npm run build`, output directory `dist`. No environment variables are required. `vercel.json` includes SPA fallback routing.
