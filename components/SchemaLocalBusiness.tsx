import { SITE_URL, SITE_NAME } from '@/lib/seo';
import type { LocationEntry } from '@/data/locations';

// Renders a LocalBusiness JSON-LD block scoped to one city. Google uses this
// to understand service area, contact info, and reviews independently of
// the visible page copy — it's additive to on-page SEO, not a substitute.
export default function SchemaLocalBusiness({ location }: { location: LocationEntry }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${SITE_NAME} — ${location.city}`,
    url: `${SITE_URL}/locations/${location.stateSlug}/${location.citySlug}`,
    telephone: location.phone,
    areaServed: location.neighborhoods.map((n) => ({
      '@type': 'Place',
      name: `${n}, ${location.city}, ${location.state}`,
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    review: {
      '@type': 'Review',
      reviewBody: location.testimonial.quote,
      author: { '@type': 'Person', name: location.testimonial.author },
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
