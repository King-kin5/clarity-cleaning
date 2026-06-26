type SocialNetwork = 'instagram' | 'facebook' | 'x';

interface SocialLogoProps {
  network: SocialNetwork;
  className?: string;
}

export default function SocialLogo({ network, className }: SocialLogoProps) {
  switch (network) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.25 3.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M13.5 2.5h-3A3.5 3.5 0 0 0 7 6v2.5H4.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75H7V21a.75.75 0 0 0 .75.75h3.5a.75.75 0 0 0 .75-.75v-8.5h2.75a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H12V6.5c0-.414.336-.75.75-.75h.75Z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.36 5.64a.75.75 0 0 0-1.06 0L12 10.94 6.7 5.64a.75.75 0 1 0-1.06 1.06l5.3 5.3-5.3 5.3a.75.75 0 0 0 1.06 1.06L12 13.06l5.3 5.3a.75.75 0 0 0 1.06-1.06l-5.3-5.3 5.3-5.3a.75.75 0 0 0 0-1.06Z" />
        </svg>
      );
    default:
      return null;
  }
}
