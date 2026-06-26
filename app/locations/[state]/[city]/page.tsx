import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { locations, getLocation } from '@/data/locations';
import { services } from '@/data/services';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';
import SocialLogo from '@/components/SocialLogo';

// Generates one static page per city in data/locations.ts at build time.
// To scale to hundreds of cities, replace this with a fetch from a CMS/DB —
// the rest of the template stays the same.
export function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, city: l.citySlug }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string; city: string };
}): Metadata {
  const location = getLocation(params.state, params.city);
  if (!location) return {};
  return buildMetadata({
    title: `Cleaning Services in ${location.city}, ${location.state}`,
    description: `Residential and commercial cleaning in ${location.city}, ${location.state}. ${location.areaNote}`,
    path: `/locations/${location.stateSlug}/${location.citySlug}`,
  });
}

export default function LocationPage({
  params,
}: {
  params: { state: string; city: string };
}) {
  const location = getLocation(params.state, params.city);
  if (!location) notFound();

  return (
    <>
      <SchemaLocalBusiness location={location} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Breadcrumb — also worth marking up with BreadcrumbList schema
            once the site has enough pages for it to matter to Google. */}
        <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
          <Link href="/locations">Locations</Link> / {location.state}
        </p>

        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tightish md:text-4xl">
          Cleaning Services in {location.city}, {location.state}
        </h1>

        {/* This paragraph is the part that must stay genuinely unique per
            city — pulled from data/locations.ts, not a swapped city-name
            template — or these pages risk being treated as duplicate
            content by Google. */}
        <p className="mt-4 max-w-2xl text-slate-soft">{location.areaNote}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {location.neighborhoods.map((n) => (
            <span
              key={n}
              className="border border-slate/15 px-3 py-1 font-mono text-xs uppercase tracking-wideish text-slate-soft"
            >
              {n}
            </span>
          ))}
        </div>

        <div className="mt-10 border border-slate/15 bg-white p-6">
          <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
            From a local client
          </p>
          <p className="mt-3 text-lg leading-relaxed">&ldquo;{location.testimonial.quote}&rdquo;</p>
          <p className="mt-2 text-sm text-slate-soft">— {location.testimonial.author}</p>
        </div>

        <h2 className="mt-12 font-display text-xl font-extrabold tracking-tightish">
          Services available in {location.city}
        </h2>
        <div className="mt-4 grid gap-px overflow-hidden border border-slate/15 bg-slate/15 sm:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white p-5 hover:bg-sky-tint">
              <p className="font-display text-sm font-extrabold">{s.name}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border border-slate/15 bg-white p-6">
          <p className="font-mono text-sm">
            Call the {location.city} team: <span className="font-semibold">{location.phone}</span>
          </p>
          <p className="font-mono text-sm">
            Email us: <a className="font-semibold" href="mailto:hello@claritycleaning.com">
              hello@claritycleaning.com
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com/claritycleaning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sheet border border-slate px-4 py-2 font-mono text-xs uppercase tracking-wideish"
            >
              <SocialLogo network="instagram" className="h-4 w-4 text-slate-900" />
              Instagram
            </a>
            <a
              href="https://facebook.com/claritycleaning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sheet border border-slate px-4 py-2 font-mono text-xs uppercase tracking-wideish"
            >
              <SocialLogo network="facebook" className="h-4 w-4 text-slate-900" />
              Facebook
            </a>
            <a
              href="https://twitter.com/claritycleaning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sheet border border-slate px-4 py-2 font-mono text-xs uppercase tracking-wideish"
            >
              <SocialLogo network="x" className="h-4 w-4 text-slate-900" />
              X
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
