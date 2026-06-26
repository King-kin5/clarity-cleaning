import type { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { SITE_URL } from '@/lib/seo';

// Next.js serves this at /sitemap.xml automatically. Because it's built
// from the same data arrays as the pages themselves, it can never drift
// out of sync — every location/service added to the data file is in the
// sitemap on the next build, with no manual step.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/locations'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.stateSlug}/${l.citySlug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
