export type LocationEntry = {
  state: string;
  stateSlug: string;
  city: string;
  citySlug: string;
  lat: number;
  lng: number;
  phone: string;
  // Real, specific copy per city — this is what keeps location pages from
  // reading as templated duplicates of each other. Replace placeholders
  // with real neighborhoods / landmarks / service notes per city.
  areaNote: string;
  neighborhoods: string[];
  testimonial: { quote: string; author: string };
};

// Scaling this to hundreds of cities: move this array into a CMS (Sanity,
// Contentful) or a database table and fetch it in generateStaticParams /
// generateMetadata below instead of importing a static file. The page
// template does not change — only where the data comes from.
export const locations: LocationEntry[] = [
  {
    state: 'Texas',
    stateSlug: 'texas',
    city: 'Austin',
    citySlug: 'austin',
    lat: 30.2672,
    lng: -97.7431,
    phone: '(512) 555-0142',
    areaNote:
      'We cover Austin from Mueller to South Congress, including the high-density condo towers downtown where building access windows matter as much as the clean itself.',
    neighborhoods: ['Downtown', 'South Congress', 'Mueller', 'Hyde Park', 'Zilker'],
    testimonial: {
      quote:
        'They worked around our building loading-dock hours without us having to ask twice.',
      author: 'Property manager, Downtown Austin',
    },
  },
  {
    state: 'Texas',
    stateSlug: 'texas',
    city: 'Dallas',
    citySlug: 'dallas',
    lat: 32.7767,
    lng: -96.797,
    phone: '(214) 555-0198',
    areaNote:
      'Our Dallas team services Uptown high-rises and the office parks along the North Dallas Tollway, with crews who already know building check-in procedures at the larger complexes.',
    neighborhoods: ['Uptown', 'Deep Ellum', 'Preston Hollow', 'Bishop Arts'],
    testimonial: {
      quote: 'Same two-person crew every visit, which made a real difference for our staff.',
      author: 'Office manager, Uptown Dallas',
    },
  },
  {
    state: 'California',
    stateSlug: 'california',
    city: 'Los Angeles',
    citySlug: 'los-angeles',
    lat: 34.0522,
    lng: -118.2437,
    phone: '(213) 555-0177',
    areaNote:
      'We route crews by neighborhood cluster, so a booking in Silver Lake and one in Culver City are never staffed by a team that just fought freeway traffic across town.',
    neighborhoods: ['Silver Lake', 'Culver City', 'Echo Park', 'Mar Vista'],
    testimonial: {
      quote: 'Booking was easy and they actually showed up in the window they gave us.',
      author: 'Homeowner, Silver Lake',
    },
  },
  {
    state: 'California',
    stateSlug: 'california',
    city: 'San Diego',
    citySlug: 'san-diego',
    lat: 32.7157,
    lng: -117.1611,
    phone: '(619) 555-0163',
    areaNote:
      'Coverage runs from North Park down to the Gaslamp Quarter, with a separate scheduling track for the coastal rental turnovers that need same-day cleaning between guests.',
    neighborhoods: ['North Park', 'Gaslamp Quarter', 'Pacific Beach', 'La Jolla'],
    testimonial: {
      quote: 'Reliable for our turnover schedule, which is the one thing we cannot have slip.',
      author: 'Short-term rental host, Pacific Beach',
    },
  },
  {
    state: 'Illinois',
    stateSlug: 'illinois',
    city: 'Chicago',
    citySlug: 'chicago',
    lat: 41.8781,
    lng: -87.6298,
    phone: '(312) 555-0184',
    areaNote:
      'Our Chicago crews are equipped for both vintage walk-ups in Logan Square and the freight-elevator logistics of Loop high-rises — two very different jobs handled by the same checklist.',
    neighborhoods: ['The Loop', 'Logan Square', 'Lincoln Park', 'Pilsen'],
    testimonial: {
      quote: 'They figured out our freight elevator schedule on their own and never missed a slot.',
      author: 'Building manager, The Loop',
    },
  },
  {
    state: 'Illinois',
    stateSlug: 'illinois',
    city: 'Naperville',
    citySlug: 'naperville',
    lat: 41.7508,
    lng: -88.1535,
    phone: '(630) 555-0129',
    areaNote:
      'A suburban-focused team serving Naperville and the surrounding Riverwalk-adjacent neighborhoods, with most bookings being recurring biweekly residential visits.',
    neighborhoods: ['Downtown Naperville', 'River Woods', 'White Eagle'],
    testimonial: {
      quote: 'We have had the same biweekly slot for over a year without a single missed visit.',
      author: 'Homeowner, Naperville',
    },
  },
];

export function getLocation(stateSlug: string, citySlug: string): LocationEntry | undefined {
  return locations.find((l) => l.stateSlug === stateSlug && l.citySlug === citySlug);
}

export function getLocationsByState(stateSlug: string): LocationEntry[] {
  return locations.filter((l) => l.stateSlug === stateSlug);
}

export function getAllStates(): { state: string; stateSlug: string }[] {
  const seen = new Map<string, string>();
  for (const l of locations) seen.set(l.stateSlug, l.state);
  return Array.from(seen.entries()).map(([stateSlug, state]) => ({ state, stateSlug }));
}
