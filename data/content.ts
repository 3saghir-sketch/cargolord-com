// Company info — verified against the live cargolord.com site and contact
// page. Office addresses/phones below are real; anything unverified (exact
// pricing, shipment counts, satisfaction %) has been deliberately left out
// rather than carried over from placeholder content.
export const company = {
  name: 'Cargo Lord',
  fullName: 'Cargo Lord Ltd',
  slogan: "UK's International Cargo Specialists",
  tagline: 'Cargo to Pakistan, India & Europe — Door to Door',
  founded: 2012,
  phone: {
    birmingham: '+44 121 328 3232',
    manchester: '+44 161 820 5029',
    london: '+44 020 3627 3315',
    bolton: '+44 1204 894915',
  },
  whatsapp: '+44 121 328 3232',
  email: 'info@cargolord.com',
  emailLondon: 'lhr@cargolord.com',
  address: {
    line1: 'Unit 3, 3 Langton Road, Alum Rock',
    city: 'Birmingham',
    postcode: 'B8 3DG',
    country: 'United Kingdom',
  },
  offices: [
    {
      name: 'Birmingham (Head Office)',
      address: 'Unit 3, 3 Langton Road, Alum Rock, Birmingham, B8 3DG',
      phone: '+44 121 328 3232',
      mobile: '+44 7888 648855',
      email: 'info@cargolord.com',
    },
    {
      name: 'London',
      address: '316-C Ilford Lane, Ilford, Essex, London, IG1 2LT',
      phone: '+44 020 3468 6038 / +44 020 3627 3315',
      mobile: '+44 773 447 3750',
      email: 'lhr@cargolord.com',
    },
    {
      name: 'Manchester',
      address: '',
      phone: '+44 161 820 5029',
      mobile: '',
      email: '',
    },
    {
      name: 'Bolton',
      address: '',
      phone: '+44 1204 894915',
      mobile: '',
      email: '',
    },
  ],
  pakistanOffice: {
    name: 'Karachi (Customer Contact)',
    address: 'Plot No. W2/C/P-26, North Western Zone, Near Toyota Indus Motor Company, Bin Qasim, Karachi, Pakistan',
    phone: '+92 322 3099562',
  },
  // Not independently verified this pass — carried over from the reference
  // site as a reasonable placeholder. Confirm actual hours and social
  // handles before launch.
  hours: 'Mon–Fri 10:00–18:00 | Sat 10:00–14:00',
  agentPortalUrl: 'https://portal.cargolord.com',
  social: {
    twitter: 'https://twitter.com/cargolord',
    facebook: 'https://facebook.com/cargolord',
    skype: 'cargolord',
  },
}

// Services — real service list, sorted from the site's own content and the
// contact form's "Services Required" dropdown. No per-kg pricing included
// since none is published anywhere on the current site; all services route
// to a quote request instead of a stated price.
export const services = [
  {
    slug: 'air-cargo',
    title: 'Air Cargo',
    subtitle: 'To Pakistan & Worldwide',
    icon: '✈️',
    shortDesc: 'Faster transit than sea freight — personal effects, household goods and commercial cargo.',
    description: `Air cargo is the fastest way to send personal effects, household goods and commercial cargo to Pakistan. Choose door-to-door for full convenience, or port-to-port if you're able to collect yourself. Collection is available UK-wide, and every shipment can be tracked online once it's on its way. Exact transit times depend on destination and current flight schedules — ask us for a current estimate when you book.`,
    features: [
      'Personal effects, household goods and commercial cargo',
      'Door-to-door or port-to-port options',
      'UK-wide collection',
      'Track your shipment online',
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    slug: 'sea-cargo',
    title: 'Sea Cargo',
    subtitle: 'Door to Door or Port to Port',
    icon: '🚢',
    shortDesc: 'Best for larger shipments, household goods and personal effects.',
    description: `For larger, less time-critical shipments, sea cargo is the economical choice. Door-to-door sea cargo is collected from you in the UK and delivered right to the destination address in Pakistan — no need to travel to a port yourself. Port-to-port is our lowest-cost sea cargo option, arriving at Karachi Port or Port Qasim, with collection and clearance handled by you (or someone on your behalf) in Pakistan.`,
    features: [
      'Door-to-door: delivered right to the destination address',
      'Port-to-port: our lowest-cost option, arrives at Karachi Port or Port Qasim',
      'Best for larger shipments and household goods',
      'Full UK-side documentation handled by us',
    ],
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80',
  },
  {
    slug: 'excess-baggage',
    title: 'Excess Baggage',
    subtitle: 'Unaccompanied Baggage Shipping',
    icon: '🧳',
    shortDesc: 'Send extra luggage ahead of you — popular with families travelling between the UK and Pakistan.',
    description: `Most excess baggage customers are families who commute regularly between the UK and Pakistan. Rather than pay airline excess baggage charges, send your extra bags with us ahead of your flight — a typical consignment is 2–3 large suitcases.`,
    features: [
      'Popular with UK–Pakistan families',
      'Typical consignment: 2–3 large suitcases',
      'Door-to-door delivery available',
      'Fully tracked',
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
  {
    slug: 'import-export',
    title: 'Import & Export',
    subtitle: 'Both Directions',
    icon: '📦',
    shortDesc: 'Cargo handled both to and from Pakistan, with full customs clearance support.',
    description: `We handle cargo in both directions — not just UK to Pakistan. Full import and export support, including customs clearance, so your shipment moves smoothly whichever direction it's travelling.`,
    features: [
      'Import and export both handled',
      'Customs clearance support',
      'Commercial and personal shipments',
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
  },
]

// Testimonials — intentionally empty. The source content on cargolord.com
// used the same fabricated testimonial text under different names; the
// Pakistan subpage was more honest and said "Genuine customer reviews
// coming soon" instead. Keep that honesty here rather than inventing new
// fake reviews — fill this in only with real collected reviews.
export const testimonials: { name: string; location: string; rating: number; text: string }[] = []

// Blog posts — none carried over; the reference site's posts were dated
// 2024 and tied to since-unverifiable pricing claims. Start empty and add
// real, current posts.
export const blogPosts: {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  image?: string
}[] = []

// Tracking statuses — matches the stage names used across the CRM/ops
// tooling (Collected / Dispatched / Arrived / Delivered), not the old
// reference site's own invented list, so the public tracking page and the
// internal systems describe shipments the same way.
export const trackingStatuses = [
  'Order Placed',
  'Collected',
  'Dispatched / Departed',
  'In Transit',
  'Arrived at Destination',
  'Out for Delivery',
  'Delivered',
]

// Stats — only figures that are actually verifiable from the current site.
// "Shipments Delivered" and "Customer Satisfaction" numbers were dropped —
// no source for either was found anywhere on the live site.
export const stats = [
  { value: 14, suffix: '+', label: 'Years in Business' },
  { value: 165, suffix: '+', label: 'Pakistan Cities Covered' },
  { value: 3, suffix: '', label: 'Pakistan Offices' },
  { value: 4, suffix: '', label: 'UK Office Locations' },
]
