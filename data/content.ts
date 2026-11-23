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
    shortDesc: 'Faster transit than sea freight, from just £1.50/kg — personal effects, household goods and commercial cargo.',
    description: `Air cargo is the fastest way to send personal effects, household goods and commercial cargo to Pakistan, from just £1.50/kg. Choose door-to-door for full convenience, or port-to-port if you're able to collect yourself. Collection is available UK-wide, and every shipment can be tracked online once it's on its way. Exact transit times depend on destination and current flight schedules — ask us for a current estimate when you book.`,
    features: [
      'From just £1.50/kg',
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

// Testimonials — pulled from Cargo Lord Ltd's real Google Business
// reviews (Places API), positive ones only. Minor punctuation/typo
// cleanup only; wording and meaning are the reviewer's own.
export const testimonials: { name: string; location: string; rating: number; text: string }[] = [
  {
    name: 'Usman Bashir',
    location: 'Google Review',
    rating: 5,
    text: "Amazing delivery and all items were in good condition when I received it in the UK. The staff were great from the Pakistan cargo side and were very thoughtful and respectful towards my order — would always recommend using these guys when shipping items from Pakistan to UK. Great price and service.",
  },
  {
    name: 'Muhammad Latif',
    location: 'Google Review',
    rating: 5,
    text: "Thanks to Cargo Lord for the excellent service. I received my parcel in Pakistan safely and on time. Everything was very well packed by the UK team, and the whole process was smooth. I really appreciate the care and professionalism. Highly recommended!",
  },
  {
    name: 'Saima Ijaz',
    location: 'Google Review',
    rating: 5,
    text: "Very reliable and trustworthy cargo service. Especially Mr. Awais Jeffri is very supportive and helpful.",
  },
  {
    name: 'Iqra Bibi',
    location: 'Google Review',
    rating: 5,
    text: "Imran Sarwar is so friendly, a good guy, very helpful — good customer service!",
  },
]

// Blog posts — the old cargolord.com posts were dated 2024 and tied to
// since-unverifiable pricing claims, so none were carried over. These five
// are new, written for this relaunch: practical, no invented prices or
// stats, pointing readers to a quote for exact costs. Images are
// hand-built SVG illustrations (navy/orange brand palette) rather than
// stock photography, so there's no licensing question and no generic
// "freight warehouse" photo that could belong to any company.
export const blogPosts: {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  image?: string
}[] = [
  {
    slug: 'how-to-send-cargo-to-pakistan-from-uk',
    title: 'How to Send Cargo to Pakistan from the UK: A Complete Step-by-Step Guide',
    date: '2026-11-19',
    category: 'Shipping Guide',
    excerpt: 'Sending a shipment to Pakistan for the first time? Here is exactly what happens from the moment you book collection to the moment it lands at the door in Pakistan — no jargon, no guesswork.',
    image: '/blog/send-cargo-guide.svg',
    content: `If you have never shipped cargo to Pakistan before, the whole process can feel like a bit of a mystery. You know you want your boxes, suitcases, or household goods to get from your home in the UK to a family member's doorstep in Lahore, Karachi, Islamabad or anywhere else — but what actually happens in between? This guide walks through it step by step, in plain English.

**Step 1: Work out what you're sending**

Before you book anything, have a rough idea of what you're shipping — personal effects and clothing, kitchen items, electronics, or a mix of household goods. This matters because it affects which service suits you best: a couple of suitcases of clothes is usually better suited to an excess baggage service, while several boxes of household items are better suited to standard air or sea cargo. If you're not sure which applies to you, just describe what you have when you call or message — a decent cargo company will point you in the right direction rather than sell you whatever is most convenient for them.

**Step 2: Choose air or sea**

Air cargo is faster and suits anything time-sensitive — gifts for an upcoming wedding, medicine, or anything you need to land within days rather than weeks. Sea cargo takes longer but is the more economical option for bulkier, heavier shipments where speed isn't critical — furniture, large quantities of household goods, or anything you're not in a rush for. We've written a separate guide comparing the two in more depth if you want to think it through properly.

**Step 3: Book a collection**

Most UK-based cargo companies serving Pakistan, including us, will collect directly from your home or workplace — you don't need to drop anything off at a depot yourself unless that's easier for you. When you book, you'll be asked for the collection address, a rough idea of the number of items and total weight, and the delivery address in Pakistan. Have the Pakistan-side recipient's full name and a working phone number ready — customs and the local delivery team will need to reach them.

**Step 4: Pack properly**

This is the step most people underestimate, and it's the single biggest reason shipments arrive damaged. Use sturdy boxes, not bags or loosely taped containers. Wrap anything breakable individually. Don't overpack a box to the point where the sides bulge — that's when seams split in transit. We've put together a full packing guide with more detail if you want to get this right the first time.

**Step 5: Know what you can and can't send**

Pakistan customs, like any country's, has a list of restricted and prohibited items — certain electronics, specific foodstuffs, and anything that looks commercial in quantity can all cause delays or get held at customs. It's worth a quick read of our customs guide before you pack anything questionable, so you're not caught out.

**Step 6: Documentation**

For most personal shipments, you won't need to prepare much yourself — the cargo company handles the export paperwork and customs declaration. What you will need is a clear, accurate description of the contents (not just "household goods" — actually list what's in each box) and the recipient's details. Vague or inaccurate descriptions are one of the most common causes of customs delays, so it's worth the extra two minutes to get this right.

**Step 7: Track it**

Once your shipment is collected, you should be able to track its progress — when it's dispatched, when it departs the UK, when it arrives in Pakistan, and when it's out for final delivery. If a company can't offer you basic tracking, that's a red flag.

**Step 8: Delivery in Pakistan**

Depending on the service you've chosen, your shipment will either be delivered door-to-door to the recipient's address, or arrive at a port/airport for collection (port-to-port), which is usually the cheaper option if someone on the Pakistan side is able to collect it themselves.

**The honest bottom line**

There's no single "best" way to send cargo to Pakistan — it depends on what you're sending, how quickly you need it there, and your budget. The fastest way to find out what's right for your specific shipment is simply to describe it to us and ask for a quote — we'll tell you honestly which service makes sense, rather than pushing the most expensive option.`,
  },
  {
    slug: 'air-freight-vs-sea-cargo-to-pakistan',
    title: 'Air Freight vs Sea Cargo to Pakistan: Which Should You Choose?',
    date: '2026-11-19',
    category: 'Cost Guide',
    excerpt: "Air cargo and sea cargo both get your shipment to Pakistan — but they suit very different situations. Here is how to work out which one is actually right for what you're sending.",
    image: '/blog/air-vs-sea.svg',
    content: `One of the first questions almost every new customer asks us is some version of: "should I send this by air or by sea?" It's a fair question, and the honest answer is: it depends on what you're shipping and how soon you need it there. Here's how to think it through properly.

**Speed: air wins, clearly**

If something needs to arrive quickly — a birthday gift, something for an upcoming event, medicine, or anything with a deadline — air cargo is the obvious choice. It's simply a faster route, start to finish, than sea freight will ever be. If timing matters more than cost, this question answers itself.

**Cost: sea is generally the more economical route**

Sea freight is typically the more cost-effective option, especially for bulkier or heavier shipments, because you're sharing container space on a much larger scale than an aircraft hold allows. If you're shipping furniture, large volumes of household items, or anything where a few extra weeks in transit genuinely doesn't matter to you, sea cargo is usually the sensible economical choice.

**Weight and volume: sea suits bulk, air suits lighter loads**

Air cargo pricing is sensitive to weight and dimensions in a way sea freight generally isn't — so a few heavy or bulky boxes can get expensive quickly by air. If you're moving a genuinely large volume (think: relocating a household, not sending a few parcels), sea cargo almost always makes more financial sense, assuming you can plan around the longer transit time.

**Transit time: plan accordingly**

Air cargo transit times are measured in days. Sea cargo transit times are measured in weeks. This isn't a knock against sea freight — it's just physics, container ships are slower than aircraft — but it does mean sea cargo needs to be planned ahead of time. If you're shipping goods for a specific date (a wedding, a house move-in date, Eid), work backwards from that date and build in a safety margin, because sea freight schedules can be affected by factors outside anyone's control — port congestion, customs processing time, weather.

**Door-to-door vs port-to-port**

Both air and sea cargo are typically available as either door-to-door (we collect from you in the UK and deliver to the recipient's address in Pakistan) or port-to-port (delivered to Karachi Port or Port Qasim, with collection and clearance handled by the recipient or someone on their behalf). Port-to-port is generally the lower-cost option if someone in Pakistan is able to handle collection — but it does put more responsibility on the receiving end, so it's worth confirming whoever's collecting is comfortable with that before you choose it.

**A simple way to decide**

Ask yourself two questions: How soon do I actually need this there? And how much am I shipping? If the answer to the first is "as soon as possible" — go air. If the answer to the second is "a lot, and I'm not in a rush" — go sea. Most shipments fall clearly into one camp or the other once you ask it this way. And if you're genuinely unsure, just tell us what you're sending and roughly when you need it there — we'll give you a straight answer on which service actually fits, not just whichever is more profitable for us to sell.`,
  },
  {
    slug: 'how-to-pack-your-parcel-for-pakistan',
    title: 'How to Pack Your Parcel for Pakistan So It Arrives in One Piece',
    date: '2026-11-19',
    category: 'Packing Tips',
    excerpt: "Most damage in transit isn't bad luck — it's avoidable packing mistakes. Here is how to pack a box for a long-distance UK to Pakistan shipment properly, the first time.",
    image: '/blog/packing-guide.svg',
    content: `Your shipment to Pakistan is going to be loaded, stacked, moved between vehicles, and handled by a number of different people before it reaches the door. That's simply the nature of international freight, whichever company you use. The good news is that properly packed boxes handle all of that without any issue — and the vast majority of damage we see in transit, across the whole industry, comes down to a handful of avoidable packing mistakes. Here's how to get it right.

**Use a proper box, not a bag**

Plastic bags, loosely taped cardboard, or repurposed boxes that have already been through one house move are not going to survive a long-distance international shipment. Use a new or genuinely sturdy double-wall cardboard box. If you're reusing a box, check the corners and seams carefully for existing weakness before you trust it with anything fragile.

**Don't overpack — and don't underpack**

A box that's overstuffed to the point where the lid bulges outward is under constant strain, and that's exactly where seams split during handling. On the other hand, a box that's only half full will let its contents shift around in transit, which is just as likely to cause damage. The goal is a box that's genuinely full, with everything snug, but closing flat without bulging.

**Wrap fragile items individually**

Don't just throw bubble wrap loosely over a pile of breakables and call it done. Wrap each fragile item on its own, then pack them so they can't knock against each other or against the sides of the box. For anything genuinely fragile — glassware, electronics, anything ceramic — extra padding at the corners of the box (where impact is most likely) makes a real difference.

**Use proper tape, properly applied**

Masking tape and cheap sticky tape are not made for this job — use proper parcel tape, and reinforce the bottom seam as well as the top. A box that's well-sealed on top but weak on the bottom is a common and completely avoidable cause of a box bursting open mid-transit.

**Label clearly — and write the contents description honestly**

Make sure the recipient's name, full address, and a working contact phone number are clearly written or printed on the outside of the box. Just as importantly: when you're asked to describe the contents for the shipment paperwork, be specific and accurate. "Household goods" as a vague catch-all description is one of the most common reasons shipments get held up at customs — a clear, itemised description moves through processing far more smoothly.

**Think about weight distribution**

If you're packing multiple boxes, try to spread heavier items across several boxes rather than putting everything heavy into one and leaving the others nearly empty. This isn't just about cost (weight-based pricing applies either way) — a box that's dramatically heavier than its size suggests is more likely to be mishandled, because handlers aren't expecting the weight.

**Electronics need extra care**

If you're shipping any electronics, use the original packaging if you still have it — it's designed for exactly this. If not, make sure the item is fully wrapped and padded on all sides, with no room to move inside the box, and clearly note it's electronic/fragile on the outside.

**When in doubt, ask**

If you're packing something unusual or valuable and you're not sure how to protect it properly, just ask before you ship it. A quick question before collection is a lot better than a damaged item on the other end — and we'd always rather help you pack it right than deal with a claim afterwards.`,
  },
  {
    slug: 'pakistan-customs-rules-prohibited-items',
    title: "What You Can and Can't Send to Pakistan: Customs Rules Every Sender Should Know",
    date: '2026-11-19',
    category: 'Customs',
    excerpt: 'A quick, practical guide to what Pakistan customs allows, restricts, and prohibits — so your shipment clears smoothly instead of getting held up or sent back.',
    image: '/blog/customs-rules.svg',
    content: `Customs delays are one of the most frustrating things that can happen to an otherwise straightforward shipment — and they're almost always avoidable if you know what to expect before you pack the box. This isn't a complete legal reference (customs rules can and do change, and the final call always sits with Pakistan Customs on the day), but it covers the practical basics that catch most first-time senders out.

**Generally fine: personal effects and household goods**

Clothing, used personal items, household goods, and gifts for family are the bread and butter of UK-to-Pakistan cargo, and generally move through customs without issue when properly declared. The key word there is "declared" — accurate, honest descriptions of what's in each box make a real difference to how smoothly customs processing goes.

**Items that need extra care**

Electronics are allowed but can attract additional scrutiny and, depending on type and quantity, potential duty — a single phone or laptop for personal use is a very different situation to multiple units, which can start to look commercial in nature. Similarly, large quantities of any single item (clothing, shoes, anything) can raise questions about whether a shipment is genuinely personal use or undeclared commercial goods. If what you're sending looks like it might fall into a grey area, it's always worth asking before you ship rather than finding out at the customs desk.

**Generally restricted or requiring special handling**

Certain foodstuffs, some medications (particularly in bulk or without proper documentation), and specific categories of goods can be restricted or require additional paperwork. If you're sending medicine for a family member, it's worth checking in advance rather than assuming it will pass through without question.

**Prohibited items**

Like most countries, Pakistan prohibits certain categories outright — weapons and ammunition, narcotics, certain publications, counterfeit goods, and similar categories you'd expect to be restricted internationally. These aren't grey areas, and no reputable cargo company will knowingly ship them.

**Why accurate descriptions matter so much**

The single biggest thing you can do to avoid a customs headache is describe your shipment's contents accurately and specifically. "Personal items" or "household goods" as the only description on a box full of mixed contents is far more likely to trigger a manual inspection than a clear itemised list. It takes an extra minute when you're packing, and it genuinely speeds up the process on the other end.

**Duties and taxes**

Depending on what's being sent and its value, Pakistan customs may apply duty. This isn't something a UK cargo company controls or can waive — it's set by Pakistan Customs based on their own rules at the time of import. If you're shipping anything of significant value, it's worth being aware that duty may apply, so it isn't a surprise to the recipient.

**The simple rule of thumb**

If you wouldn't be comfortable explaining exactly what's in a box to a customs officer, it's worth reconsidering whether it should be in there. For everything else — the ordinary business of sending clothes, gifts, and household items to family — accurate labelling and honest declarations are really all it takes to keep things moving smoothly. If you're ever unsure whether something specific is fine to send, just ask us before you pack it — it's a much easier conversation to have in advance than after your shipment has already left the UK.`,
  },
  {
    slug: 'excess-baggage-vs-cargo-pakistan',
    title: 'Excess Baggage or Cargo? The Cheapest Way to Send Personal Items to Pakistan',
    date: '2026-11-19',
    category: 'Excess Baggage',
    excerpt: 'Sending a few suitcases of clothes and personal items to family in Pakistan? Here is how excess baggage shipping compares to standard cargo, and which one actually saves you money.',
    image: '/blog/excess-baggage-vs-cargo.svg',
    content: `If you're a family that travels regularly between the UK and Pakistan, you've probably faced this exact situation: too much to pack into your airline baggage allowance, and a choice to make about how to send the rest. This is one of the most common questions we get, so here's a straightforward comparison.

**What excess baggage shipping actually is**

Excess baggage is exactly what it sounds like — a service built specifically for suitcases and personal luggage, rather than commercial-style cargo boxes. A typical excess baggage consignment is a couple of large suitcases, sent ahead of (or instead of) checking them in with an airline. It's popular specifically because it's built around how families actually pack when visiting relatives — clothes, gifts, and personal items in ordinary suitcases, not repacked into cardboard boxes.

**Why it's often cheaper than paying airline excess fees**

Airlines charge excess baggage fees per kilo over your allowance, and those fees add up fast — it's not unusual for a couple of extra suitcases to cost more at the airport check-in desk than shipping them separately would have cost in the first place. If you know in advance that you'll be over your allowance, it's almost always worth comparing the cost of an excess baggage shipping service against what the airline would charge, rather than assuming checking in extra bags is the default cheapest option.

**When standard cargo makes more sense**

If what you're sending isn't suitcases at all — boxes of household goods, furniture, kitchen items, anything that isn't naturally "luggage" — standard air or sea cargo is the better fit. Cargo pricing and handling is built around boxes and palletised goods, not soft suitcases, so trying to force a houseful of goods into suitcases just to use an excess baggage service usually isn't the economical choice it might seem.

**The practical difference in how it travels**

Excess baggage shipments are typically handled as, well, baggage — sent via commercial routes designed for that kind of consignment, often with a faster, more predictable transit time than bulk cargo. Standard cargo, especially sea freight, is built for larger volumes and accepts a longer transit time in exchange for a lower cost per kilo on bigger shipments.

**A simple way to decide**

Picture what you're actually sending. If you could physically zip it into a suitcase, excess baggage is very likely your cheapest and most convenient option. If it's boxes, furniture, or anything that was never going to fit in a suitcase in the first place, standard cargo — air or sea, depending on urgency — is the right tool for the job.

**Door-to-door, either way**

Whichever option fits what you're sending, door-to-door delivery is available, so your suitcases or boxes get collected from your home in the UK and delivered straight to your family's door in Pakistan — no need to find a courier, visit a depot, or arrange local transport on the other end yourself.

If you're not sure which category your shipment falls into, just describe what you're sending — number of bags or boxes, rough weight, and when you need it there — and we'll tell you honestly which service will actually save you money, rather than defaulting you to whichever is easiest for us.`,
  },
  {
    slug: 'saudi-arabia-uk-cargo-shipping',
    title: 'Shipping Between Saudi Arabia and the UK: A Simple Guide to Personal Effects & Excess Baggage',
    date: '2026-11-19',
    category: 'Saudi Arabia Route',
    excerpt: "Moving between Saudi Arabia and the UK, or sending belongings one way for family? Here is how personal effects and excess baggage shipping works on this route, in plain terms.",
    image: '/blog/saudi-uk-route.svg',
    content: `A good share of the people who ship with us on this route aren't sending gifts — they're relocating, finishing a contract, or sending belongings ahead of a move between Saudi Arabia and the UK. It's a slightly different situation to a one-off parcel, so here's how it actually works.

**Who this route is usually for**

Workers and families moving between the two countries, people wrapping up time in Saudi Arabia and heading home to the UK, and the reverse — relocating out to Saudi Arabia for work. In both directions, the typical shipment is personal effects: clothing, household items, and the accumulated belongings of however long someone's been living there, rather than commercial cargo.

**How collection works**

You get in touch with the collection address and a contact number, and we arrange collection from a hotel or home address in Saudi Arabia (or in the UK, for the reverse direction) — you don't need to find your own way to a port or depot. The same applies on the receiving end: delivery can go straight to the destination address, or, if it suits you better, you can collect from the airport yourself.

**Door-to-door or airport collection — your choice**

Both options are available on this route. Door-to-door is the more convenient choice if you'd rather not deal with collection logistics on arrival. Airport collection can work out more cost-effective if someone on the receiving end is able to collect it themselves and doesn't mind the extra step.

**Customs and VAT — what to expect**

As with any international shipment, duty or VAT can apply at the destination depending on what's being sent and its value — this isn't something a shipping company sets or controls, it's determined by customs at the port of entry. If a cost like this comes up, we'll tell you about it rather than let it be a surprise on delivery. The honest answer is that for most personal effects shipments this is straightforward, but it's worth knowing it's a possibility going in, rather than assuming there will never be anything to pay.

**Packing for a longer-distance personal effects move**

Because this is often a larger consignment than a typical parcel — the accumulated belongings of months or years abroad, not just a couple of boxes — the same packing principles apply, just at a bigger scale. Sturdy boxes, padding for anything breakable, and accurate labelling matter just as much (arguably more) when you're shipping the contents of an entire room or household rather than a single gift box. If you haven't already, our general packing guide covers the fundamentals.

**A two-way service**

This route runs both ways — Saudi Arabia to UK, and UK to Saudi Arabia — so whichever direction you're moving, the same collection, customs, and delivery process applies, just mirrored.

**Getting a quote**

Because every personal effects shipment on this route is a little different — number of boxes or suitcases, total weight, collection location, and which direction you're going — the best way to get an accurate cost is to just tell us what you're moving and where from and to. We'll give you a straight answer on the best option for your specific move, not a generic rate that doesn't reflect what you're actually sending.`,
  },
  {
    slug: 'volumetric-weight-vs-actual-weight',
    title: 'Volumetric Weight vs. Actual Weight: How It Works and How to Save Money on Your Cargo',
    date: '2026-11-19',
    category: 'Cost Guide',
    excerpt: "Your cargo is priced on whichever is greater — the weight on the scale, or the size of the box. Here's how that calculation actually works, and how to avoid paying for empty air.",
    image: '/blog/volumetric-weight.svg',
    content: `When sending international cargo from the UK to Pakistan or anywhere else in the world, your shipping cost is calculated using whichever is greater: the actual (dead) weight on the scale, or the volumetric weight based on the parcel's dimensions. Because aircraft cargo holds and shipping containers have strict space limits, large, lightweight boxes take up valuable room and are priced accordingly.

**Why Do Cargo Companies Use Volumetric Weight?**

Airlines and freight carriers operate within tight physical boundaries — especially in air freight, where cargo is loaded onto specialised Unit Load Devices (ULDs) and aircraft pallets.

- **Aircraft space constraints:** If a parcel is oversized or awkwardly shaped, it can't be stacked efficiently inside a standard ULD container and has to be loaded onto an open or loose pallet instead, taking up disproportionate space.
- **Balancing weight and volume:** A plane or container can run out of physical floor space long before it reaches its maximum weight limit. Charging by volumetric weight ensures freight space is priced fairly whether you're shipping dense machinery or bulky duvets.

**How Volumetric Weight Is Calculated**

To find the volumetric weight of your shipment, measure the length, width and height of your box in centimetres, multiply them together, then divide by the standard freight divisor.

Volumetric weight (kg) = Length (cm) &times; Width (cm) &times; Height (cm) &divide; 5000

While some couriers and freight operators use a divisor of 4,000 — which results in a higher chargeable weight — at Cargo Lord Ltd we use the 5,000 divisor for air cargo, which gives our customers a fairer, more cost-effective rate. Once calculated, we compare this figure against the dead weight (the actual weight on the scale) and bill based on whichever number is higher.

**Practical Tips to Avoid Paying for Empty Air**

You can keep your shipping costs down on both air and sea cargo by packing smarter before collection.

- **Aim for dense, compact parcels:** Whenever possible, pack heavy items tightly so your actual weight meets or exceeds your volumetric weight. Shipping large boxes filled with lightweight items means paying for empty air.
- **Don't over-box for "extra protection":** A common mistake is putting a small item inside a much bigger box, thinking the extra space will keep it safer. Unless you're shipping something genuinely delicate that needs thick protective cushioning to survive transit, oversized packaging just wastes money.
- **Use properly fitted cartons:** Trim down excess box height, or choose a sturdy double-wall box that fits your goods snugly without bulging sides.

**Need Help Packing or Calculating Your Quote?**

If you're unsure how to pack an awkward item, or you don't have suitable boxes on hand, get in touch with our team before shipping. We advise customers every day on the most economical way to pack and ship personal effects and commercial goods from the UK to Pakistan, India, Saudi Arabia, and worldwide — just tell us what you're sending and we'll help you get the most cost-effective shipment possible.`,
  },
  {
    slug: 'sea-cargo-to-pakistan-shipping-times',
    title: 'Why Sea Cargo to Pakistan Takes 12 to 13 Weeks: The Truth About Shipping Times',
    date: '2026-11-19',
    category: 'Shipping Times',
    excerpt: "Wondering why sea cargo to Pakistan isn't quicker? Here's what actually happens between collection and delivery, and why we quote 12 to 13 weeks door-to-door.",
    image: '/blog/sea-cargo-timeline.svg',
    content: `We get asked all the time why sending boxes or furniture by sea takes a bit longer these days. It really comes down to a mix of global route changes — like the disruptions around the Suez Canal — and the careful packing process we handle at our end.

**Why Your Shipment Isn't on the Water Immediately**

When we collect your cargo, it doesn't just hop straight onto a ship. First, it comes into our secure warehouse, where our team carefully stacks, measures, and prepares everything for export. We also have to navigate "roll-overs" with shipping lines, which happen when a vessel runs out of space and your container gets pushed to the next available sailing — something that's outside any cargo company's direct control, but worth knowing about so a delay doesn't come as a surprise.

**What to Expect with Our 12 to 13 Week Timeline**

Because of these real-world factors, we give a realistic door-to-door timeframe of 12 to 13 weeks for sea freight to Pakistan. While customs checks in cities like Karachi can sometimes add a little time on top, we're proud to hit our estimated delivery dates around 99% of the time — so when we give you a window, it's one you can actually plan around.

**Let Us Handle the Hard Work**

Shipping doesn't have to be stressful. At Cargo Lord Ltd, we take care of everything from your doorstep here in the UK all the way to your family's hands in Pakistan. We even offer free collection across the country to make it as easy as possible — all you need to do is tell us what you're sending and when.`,
  },
  {
    slug: 'why-cargo-shipping-costs-to-pakistan-have-risen',
    title: 'Why Has Cargo to Pakistan Gotten More Expensive? The Real Reasons Behind Rising Shipping Costs',
    date: '2026-11-19',
    category: 'Cost Guide',
    excerpt: "If you've shipped with us before, you've probably noticed the price has gone up — here's an honest breakdown of what's actually driving the increase, and why our rate is £1.50/kg.",
    image: '/blog/shipping-cost-rises.svg',
    content: `If you've shipped with us before, you may have noticed our rates have gone up. A few years ago, sending cargo to Pakistan could cost just a few pence a kilo — now it's closer to £1.50 a kilo. That's a noticeable jump, and we think you deserve a straight explanation rather than just a bigger invoice. Here's what's actually driving it.

**It Starts with Fuel Costs**

The biggest reason is the price of fuel. It's not just more expensive to run the trucks that pick up your boxes from your house — the cost goes up for the whole journey. From the moment we collect your shipment to when it gets delivered, fuel is costing much more than it used to, and that cost runs through every stage of transport.

**Bigger Bills for Shipping and Port Fees**

On top of fuel, the companies that own the big ships and planes have put their prices up too. There are also extra charges for using ports, and the rules and fees for getting things through customs in Pakistan have gone up. None of these increases are huge on their own, but they all add up to a bigger total by the time your shipment reaches its destination.

**The British Pound and Exchange Rates**

The value of the British Pound against the Pakistani Rupee matters too. Even when the pound is holding up reasonably well, a shift in the exchange rate can make shipping more expensive on the Pakistan side of the journey — and it's simply not something we're able to control.

**We're Still Keeping It Fair**

We know nobody likes paying more. We keep our price at £1.50 a kilo to make sure you get a reliable service without cutting corners — proper handling, realistic timelines, and a team that takes care of your shipment the whole way, rather than finding savings by cutting the things that actually matter.`,
  },
  {
    slug: 'beat-airport-excess-baggage-fees',
    title: 'Beat Airport Fees: A Simple Guide to Sending Excess Baggage',
    date: '2026-11-21',
    category: 'Shipping Guide',
    excerpt: "Packed too much for your flight? Before you pay the airline's steep excess baggage fee at the check-in desk, here's a simpler and cheaper way to get your extra bags where they need to go.",
    image: '/blog/excess-baggage-fees.svg',
    content: `We all know the feeling of packing for a trip, only to realise your bags are way too heavy. With airlines cutting down on weight limits, showing up at the airport with extra bags usually means paying a massive, unexpected fee.

**Avoid the Airport Panic**

The secret to beating these charges is planning ahead. If you suspect your luggage is over the limit, a great trick is to buy a cheap handheld scale online. Weigh your bags at home, and if you're over, don't panic.

Instead of paying the airline's high prices, you can call a specialist cargo company like us. We can arrange to pick up your excess baggage directly from your home, give you a clear price upfront, and ship it to your destination for a fraction of the cost.

**Understanding Customs Rules**

While we handle the heavy lifting, it's important to remember that every country has its own customs laws. Whether you're sending gifts or personal belongings, you will need a clearing agent at the destination to manage the paperwork and any necessary taxes.

At Cargo Lord Ltd, we have established networks in places like Pakistan, India, and the Middle East to make sure this process goes smoothly.

**Don't Let Excess Baggage Ruin Your Trip**

Flying home for a wedding or visiting family shouldn't result in a financial headache. With a little planning, you can bring everything you need without breaking the bank.

Need help with your luggage? Get an instant quote or contact our Birmingham team today to book your collection.`,
  },
  {
    slug: 'full-container-vs-shared-cargo-pakistan',
    title: 'Full Container or Shared Cargo? Choosing the Right Way to Move to Pakistan or India',
    date: '2026-11-23',
    category: 'Shipping Guide',
    excerpt: "Moving your whole life abroad? Most families think they need a full container — but for most moves, shared cargo (consolidation) works out far cheaper and just as reliable. Here's how to tell which one you actually need.",
    image: '/blog/container-vs-shared-cargo.jpg',
    content: `Moving an entire life across the world is a massive step, and we know it can feel overwhelming. Many of our customers reach out thinking they need to book a whole container for their move to Pakistan or India, but usually, that ends up costing you much more than necessary.

**You Don't Need to Pay for Empty Space**

When you rent a private twenty-foot or forty-foot container for a smaller load, you are essentially paying to ship air. Beyond the ocean freight, you get hit with heavy charges at the port in Karachi for terminal handling and local fees. Then comes the struggle and expense of getting those twenty or thirty boxes from the port all the way to your doorstep. We don't want to see you waste your hard-earned money on logistics you don't need.

**The Caring Alternative: Shared Shipping**

For most families, our consolidation service is a much kinder option. You only pay for the exact space your belongings take up. We step in to take the stress off your shoulders: we collect your parcels directly from your home, weigh and barcode everything right in front of you so you have complete peace of mind, and provide an official receipt. We handle the transport to major UK ports, manage all the customs paperwork, and ensure your items are safely delivered to your family's door. It's a smooth, reliable process that saves you money and spares you from the headache of managing a container.

**When Is a Full Container Truly Needed?**

A private container really only makes sense for major life events, such as a permanent relocation under the Transfer of Residence scheme. If you are moving an entire household — including furniture, appliances, personal items, and perhaps a vehicle — then a dedicated container is the right choice.

Just keep in mind that the logistics require careful planning: the container stays on the delivery lorry and cannot be placed on the ground. You must ensure there is ample space for the vehicle to park, and you typically have a strict three-hour window for loading before detention charges begin. Everything must be packed securely to withstand the long journey.

**We Are Here to Support Your Journey**

Whether you are sending a few forgotten boxes or embarking on a fresh start abroad, navigating customs and shipping doesn't have to be stressful. We maintain strong personal connections across Pakistan, Bangladesh, India, and the Middle East to ensure your belongings are treated with care every step of the way.

Planning your shipment? Request a quote or contact our Birmingham team today — we are always here to help.`,
  },
]

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
export const stats = [
  { value: 14, suffix: '+', label: 'Years in Business' },
  { value: 165, suffix: '+', label: 'Pakistan Cities Covered' },
  { value: 3, suffix: '', label: 'Pakistan Offices' },
  { value: 4, suffix: '', label: 'UK Office Locations' },
]

// Impact stats — pulled directly from the live Drupal and Perfex CRM
// shipment databases on 2026-11-20 (cleaned: excluded a handful of
// corrupted weight values from a 2015 import glitch, cancelled orders,
// and cross-checked for overlap between the two systems so nothing is
// double-counted). Real totals were 42,779 shipments / 2,069,953 kg —
// both rounded DOWN here as a safety margin for a public claim.
export const impactStats = [
  { value: 2000000, suffix: '+', label: 'KG Shipped', sublabel: 'to Pakistan, India & Europe' },
  { value: 42000, suffix: '+', label: 'Shipments Delivered', sublabel: 'since 2015' },
]

// Rates last reviewed 2026-11-23 -- shown on /rates with an explicit
// "subject to change" notice so an old screenshot never gets treated as a
// locked-in quote months later.
export const cargoRates = {
  lastReviewed: '2026-11-23',
  sea: {
    title: 'Sea Cargo Rates',
    delivery: '10–12 Weeks Delivery',
    quoteService: 'Sea Cargo',
    items: [
      { label: 'Clothes & Shoes', note: '(£1.35/kg over 100kg)', price: '£1.50/kg' },
      { label: 'Bulky Items', note: '(Duvets, Blankets, Pillows, Nappies)', price: '£2.50/kg' },
      { label: 'Flat-Pack Furniture, Plastic & Wood', note: '', price: '£2.50/kg' },
      { label: 'Electrical Items', note: '(excl. TVs & Laptops)', price: '£3.50/kg' },
      { label: 'Sack', note: '', price: '£3 each' },
    ],
    footnote: 'Food: Sent at your own risk. Large quantities may be detained by Pakistan Customs.',
  },
  air: {
    title: 'Air Cargo Rates',
    delivery: '10–12 Days Delivery',
    quoteService: 'Door to Door Air Cargo',
    items: [
      { label: 'Standard Air Rate', note: '+ £20 Handling Charges', price: '£7.50/kg' },
      { label: 'Minimum Chargeable Weight', note: '', price: '11 kg' },
      { label: 'Packaging', note: '', price: 'Cardboard boxes or suitcases' },
    ],
    footnote: '',
  },
}
