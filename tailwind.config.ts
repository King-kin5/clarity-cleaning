import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — named for what they evoke, not generic gray-N scales.
        mist: '#F4F6F4', // page background — soft, slightly cool white
        slate: {
          DEFAULT: '#1B2B2A', // primary ink — deep teal-charcoal, not pure black
          soft: '#3A4D4B',
        },
        lime: '#C7E26B', // accent — reserved for "done" / checked states only
        sky: {
          DEFAULT: '#9FD4CF', // secondary accent — glass/water, used for surfaces
          tint: '#E7F3F1',
        },
        clay: '#E2624A', // warm warning/CTA-adjacent accent, used sparingly
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      letterSpacing: {
        tightish: '-0.01em',
        wideish: '0.06em',
      },
      borderRadius: {
        sheet: '2px', // almost-square corners — evokes a checklist sheet, not a "soft app" look
      },
    },
  },
  plugins: [],
};

export default config;
