import type { Metadata } from 'next';
import { Archivo, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
});
const body = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Cleaning Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Residential and commercial cleaning, scheduled around you, run from the same checklist every visit.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-mist text-slate font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
