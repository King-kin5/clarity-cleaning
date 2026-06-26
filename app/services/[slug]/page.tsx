import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { services, getServiceBySlug } from '@/data/services';

// Pre-renders one static page per service at build time.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tightish">{service.name}</h1>
      <p className="mt-4 text-slate-soft">{service.description}</p>

      <h2 className="mt-10 font-mono text-xs uppercase tracking-wideish text-slate-soft">
        What every visit includes
      </h2>
      <ul className="mt-4 divide-y divide-slate/10 border border-slate/15 bg-white font-mono text-sm">
        {service.tasks.map((task) => (
          <li key={task} className="px-4 py-3">
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
}