import Link from 'next/link';
import { SITE_NAME } from '@/lib/seo';

export default function Header() {
  return (
    <header className="border-b border-slate/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tightish">
          {SITE_NAME}
        </Link>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-wideish md:flex">
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-sheet bg-slate px-4 py-2 font-mono text-xs uppercase tracking-wideish text-mist md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
