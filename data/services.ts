export type Service = {
  slug: string;
  name: string;
  shortDescription: string; // used in cards / meta descriptions
  description: string; // longer, used on the service detail page
  tasks: string[]; // feeds the checklist UI + schema
};

// Add a new service by adding an entry here — pages are generated automatically
// from this list via generateStaticParams in app/services/[slug]/page.tsx.
export const services: Service[] = [
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    shortDescription:
      'Recurring or one-time house cleaning, scoped to your home and schedule.',
    description:
      'Weekly, biweekly, or monthly cleaning for homes and apartments. Every visit follows the same documented checklist, so the result is consistent whether it is your first clean or your fiftieth.',
    tasks: [
      'Dust and wipe all reachable surfaces',
      'Vacuum carpets and rugs',
      'Mop hard floors',
      'Clean and disinfect bathrooms',
      'Wipe kitchen counters and exterior of appliances',
      'Empty trash and reline bins',
    ],
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    shortDescription:
      'Office and retail cleaning scheduled around your business hours.',
    description:
      'Daily, nightly, or weekly cleaning for offices, retail spaces, and shared workspaces. Scheduled around your hours of operation, with a documented checklist signed off after every visit.',
    tasks: [
      'Empty and reline all trash and recycling',
      'Clean and disinfect restrooms',
      'Vacuum carpeted areas',
      'Clean glass doors and entryways',
      'Wipe down kitchen / break room surfaces',
      'Spot-clean high-touch surfaces',
    ],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortDescription:
      'A thorough, top-to-bottom clean for move-ins, move-outs, or a seasonal reset.',
    description:
      'A more intensive clean that covers areas a routine visit does not: baseboards, inside appliances, window tracks, and behind furniture. Common before a move-in, after a move-out, or as a seasonal reset.',
    tasks: [
      'Clean inside oven and refrigerator',
      'Wipe down baseboards and door frames',
      'Clean window tracks and sills',
      'Move and clean behind light furniture',
      'Detail-clean bathroom grout and fixtures',
      'Dust ceiling fans and light fixtures',
    ],
  },
  {
    slug: 'move-out-cleaning',
    name: 'Move-Out Cleaning',
    shortDescription:
      'Lease-ready cleaning to help secure your deposit back.',
    description:
      'A checklist built around what landlords and property managers actually inspect at move-out, so the space is left in the condition needed to support a full deposit return.',
    tasks: [
      'Deep clean kitchen including inside cabinets',
      'Deep clean bathrooms including grout',
      'Clean inside all closets',
      'Clean all interior windows and sills',
      'Vacuum and mop every room',
      'Remove all trash and debris',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
