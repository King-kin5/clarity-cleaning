import Link from 'next/link';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { SITE_NAME } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-base font-extrabold">{SITE_NAME}</p>
            <p className="mt-2 max-w-xs text-sm text-slate-soft">
              Residential and commercial cleaning, run from the same checklist every visit.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
              Locations
            </p>
            {/* Every location page gets a footer link from every page on the
                site — this internal-link consistency is part of what helps
                Google discover and rank the location pages at all. */}
            <ul className="mt-3 space-y-2 text-sm">
              {locations.map((l) => (
                <li key={`${l.stateSlug}-${l.citySlug}`}>
                  <Link href={`/locations/${l.stateSlug}/${l.citySlug}`}>
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-soft">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
