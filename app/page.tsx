import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import ChecklistAnimation from '@/components/ChecklistAnimation';
import SocialLogo from '@/components/SocialLogo';

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Services',
  description:
    'Residential and commercial cleaning across multiple states, run from the same documented checklist every visit.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">
            Residential &amp; Commercial
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightish md:text-5xl">
            The same checklist, every visit, in every city we serve.
          </h1>
          <p className="mt-5 max-w-md text-slate-soft">
            Cleaning that doesn&apos;t depend on which crew shows up. Every job follows a
            documented checklist, and every visit is signed off against it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-sheet bg-slate px-5 py-3 font-mono text-xs uppercase tracking-wideish text-mist"
            >
              Contact Us
            </Link>
            <Link
              href="/locations"
              className="rounded-sheet border border-slate px-5 py-3 font-mono text-xs uppercase tracking-wideish"
            >
              Find Your City
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <ChecklistAnimation />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-extrabold tracking-tightish">Services</h2>
        <div className="mt-8 grid gap-px overflow-hidden border border-slate/15 bg-slate/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white p-6 transition-colors hover:bg-sky-tint"
            >
              <p className="font-display text-base font-extrabold">{s.name}</p>
              <p className="mt-2 text-sm text-slate-soft">{s.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-extrabold tracking-tightish">
            Where we work
          </h2>
          <Link href="/locations" className="font-mono text-xs uppercase tracking-wideish">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden border border-slate/15 bg-slate/15 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={`${l.stateSlug}-${l.citySlug}`}
              href={`/locations/${l.stateSlug}/${l.citySlug}`}
              className="bg-white p-6 transition-colors hover:bg-sky-tint"
            >
              <p className="font-display text-base font-extrabold">{l.city}</p>
              <p className="text-sm text-slate-soft">{l.state}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="border border-slate/15 bg-white p-10 md:p-14">
          <h2 className="font-display text-2xl font-extrabold tracking-tightish">
            Contact us
          </h2>
          <p className="mt-2 max-w-md text-slate-soft">
            Reach out by email, phone, or social media and we&apos;ll get back to you quickly.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate/15 bg-mist p-6">
              <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">Email</p>
              <a
                href="mailto:lekanadio30@gmail.com"
                className="mt-3 block font-semibold text-slate-900"
              >
                lekanadio30@gmail.com
              </a>
            </div>
            <div className="rounded-3xl border border-slate/15 bg-mist p-6">
              <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">Phone</p>
              <a href="tel:+2349160040389" className="mt-3 block font-semibold text-slate-900">
                +2349160040389
              </a>
            </div>
            <div className="rounded-3xl border border-slate/15 bg-mist p-6">
              <p className="font-mono text-xs uppercase tracking-wideish text-slate-soft">Social</p>
              <div className="mt-3 flex flex-col gap-2 text-slate-900">
                <a
                  href="https://instagram.com/claritycleaning"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <SocialLogo network="instagram" className="h-4 w-4 text-slate-900" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com/claritycleaning"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <SocialLogo network="facebook" className="h-4 w-4 text-slate-900" />
                  Facebook
                </a>
                <a
                  href="https://twitter.com/claritycleaning"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <SocialLogo network="x" className="h-4 w-4 text-slate-900" />
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
