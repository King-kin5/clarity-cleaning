import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/data/services';

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Services',
  description: 'Residential, commercial, deep cleaning, and move-out cleaning services.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tightish">Services</h1>
      <div className="mt-10 grid gap-px overflow-hidden border border-slate/15 bg-slate/15 sm:grid-cols-2">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white p-8 hover:bg-sky-tint">
            <p className="font-display text-lg font-extrabold">{s.name}</p>
            <p className="mt-2 text-sm text-slate-soft">{s.shortDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
