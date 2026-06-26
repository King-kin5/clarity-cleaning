import type { Metadata } from 'next';

const SITE_NAME = 'Clarity Cleaning Co.';
const SITE_URL = process.env.SITE_URL || 'https://www.claritycleaningco.com';

type SeoArgs = {
  title: string;
  description: string;
  path: string; // e.g. '/locations/texas/austin'
  image?: string;
};

// Centralizing metadata generation means every page gets a canonical tag,
// consistent OG/Twitter cards, and a title template without repeating it —
// and it's one place to fix site-wide SEO behavior later.
export function buildMetadata({ title, description, path, image }: SeoArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export { SITE_NAME, SITE_URL };
