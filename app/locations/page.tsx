import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { locations, getAllStates } from '@/data/locations';

export const metadata: Metadata = buildMetadata({
  title: 'Locations',
  description: 'Cities and states where we provide residential and commercial cleaning.',
  path: '/locations',
});

export default function LocationsPage() {
  const states = getAllStates();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tightish">
        Where we clean
      </h1>
      <div className="mt-10 space-y-10">
        {states.map(({ state, stateSlug }) => (
          <div key={stateSlug}>
            <h2 className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
              {state}
            </h2>
            <div className="mt-3 grid gap-px overflow-hidden border border-slate/15 bg-slate/15 sm:grid-cols-3">
              {locations
                .filter((l) => l.stateSlug === stateSlug)
                .map((l) => (
                  <Link
                    key={l.citySlug}
                    href={`/locations/${l.stateSlug}/${l.citySlug}`}
                    className="bg-white p-6 hover:bg-sky-tint"
                  >
                    <p className="font-display text-base font-extrabold">{l.city}</p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
