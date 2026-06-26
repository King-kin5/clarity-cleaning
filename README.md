# Clarity Cleaning Co. — website

Next.js 14 (App Router) site for a multi-state cleaning business. Built so
local SEO can scale by adding data, not by hand-coding new pages.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

```
app/
  page.tsx                        homepage
  services/page.tsx                services hub
  services/[slug]/page.tsx         one page per service (from data/services.ts)
  locations/page.tsx               state/city directory
  locations/[state]/[city]/page.tsx   ← the SEO engine, one page per city
  sitemap.ts                       auto-generated from the data files
  robots.ts
data/
  services.ts                      add/edit services here
  locations.ts                     add/edit cities here — see below
components/
  SchemaLocalBusiness.tsx          JSON-LD schema per city
  ChecklistAnimation.tsx           hero signature element
lib/
  seo.ts                           shared metadata/canonical helper
```

## Adding a new city (the main way this site scales)

Add an entry to the `locations` array in `data/locations.ts`:

```ts
{
  state: 'Arizona',
  stateSlug: 'arizona',
  city: 'Phoenix',
  citySlug: 'phoenix',
  lat: 33.4484,
  lng: -112.074,
  phone: '(602) 555-0100',
  areaNote: 'Write 1–2 sentences specific to this city — a real detail about how you serve it.',
  neighborhoods: ['Real neighborhood names'],
  testimonial: { quote: 'A real or representative quote.', author: 'Role, area' },
}
```

That's it — the page at `/locations/arizona/phoenix` is generated
automatically, with its own metadata, schema, and sitemap entry, at the next
build.

**Important for ranking, not just for shipping:** `areaNote`, `neighborhoods`,
and `testimonial` must contain real, city-specific information. If these
fields are filled with generic text and only the city name changes, Google
can treat the pages as duplicate/templated content and they will struggle to
rank no matter how many you publish. Quality per page matters more than
page count.

### Scaling past ~20–30 cities

Move the `locations` array into a CMS (Sanity, Contentful) or a database
table, and fetch it inside `generateStaticParams` / `generateMetadata` in
`app/locations/[state]/[city]/page.tsx` instead of importing the static
file. The page template itself does not need to change.

## Before launch — checklist

- [ ] Buy the domain, point DNS at hosting
- [ ] Set `SITE_URL` env var to the real domain (used for canonical URLs/sitemap)
- [ ] Create a **separate Google Business Profile for every city served** —
      this affects local map-pack ranking more than anything on the website
- [ ] Get the contact form in `app/page.tsx` wired to a real backend/CRM
      (currently a static, non-functional form)
- [ ] Replace placeholder phone numbers and testimonials with real ones
- [ ] Submit the sitemap (`/sitemap.xml`) in Google Search Console
- [ ] Run Lighthouse / PageSpeed Insights and fix anything below ~90 on
      mobile — Core Web Vitals are a ranking factor
- [ ] Add real photos (replace any placeholder imagery) with descriptive
      `alt` text — also feeds Google Image search and local pack results

## Deploying

This is built for Vercel (zero-config for Next.js):

```bash
npx vercel
```

Or build and run anywhere that supports Node:

```bash
npm run build
npm run start
```

## What this scaffold deliberately does not include

- A real booking/payment backend — the quote form is static; wire it to
  whatever CRM/scheduling tool the business uses
- A blog — recommended as a next addition; long-tail content (e.g. "how
  often should you deep clean an apartment") builds topical authority and
  should internally link to the relevant service and location pages
- Real photography — stock or generic images hurt more than they help for
  a local service business; real photos of real crews/locations perform
  better and are harder for competitors to copy
