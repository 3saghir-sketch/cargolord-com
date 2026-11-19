# Cargo Lord Ltd — Website

**Next.js 14 | Tailwind CSS | TypeScript**

Live URL: [cargolord.co.uk](https://cargolord.co.uk)

---

## Project Structure

```
cargolord/
├── components/
│   ├── Navbar.tsx          # Sticky nav with dropdown + mobile menu
│   ├── Footer.tsx          # 4-col footer with CTA strip
│   ├── Hero.tsx            # Full-screen hero with tracking form + WhatsApp
│   ├── ServicesGrid.tsx    # 6-service hover grid
│   ├── AboutSection.tsx    # Split layout about section
│   ├── StatsSection.tsx    # Animated counters with parallax BG
│   ├── WhyUsSection.tsx    # How it works + why choose us
│   ├── Testimonials.tsx    # 6-review grid (carousel on mobile)
│   ├── BlogCards.tsx       # Blog post cards
│   ├── QuoteForm.tsx       # Quote request form
│   ├── TrackingSearch.tsx  # Tracking number search + timeline
│   ├── ChatWidget.tsx      # Tawk.to / WhatsApp chat button
│   └── PageHeader.tsx      # Reusable page banner with breadcrumbs
│
├── data/
│   └── content.ts          # ALL company data, services, blog, testimonials
│
├── pages/
│   ├── _app.tsx            # App wrapper with DefaultSeo
│   ├── _document.tsx       # HTML document head
│   ├── index.tsx           # Home page
│   ├── about.tsx           # About page
│   ├── tracking.tsx        # Tracking page
│   ├── quote.tsx           # Quote request page
│   ├── contact.tsx         # Contact page
│   ├── terms.tsx           # Terms & Conditions
│   ├── 404.tsx             # Custom 404
│   ├── services/
│   │   ├── index.tsx       # Services listing
│   │   └── [slug].tsx      # Individual service pages (SSG)
│   └── blog/
│       ├── index.tsx       # Blog listing
│       └── [slug].tsx      # Individual blog posts (SSG)
│
├── styles/
│   └── globals.css         # Tailwind + Google Fonts + custom components
│
├── public/
│   └── images/             # Place local images here
│
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Quick Start (Local Dev)

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Visit http://localhost:3000
```

---

## Updating Content

All company info, services, testimonials, blog posts, and stats are in one file:

```
data/content.ts
```

Edit this file to update any content site-wide. No need to touch individual pages.

---

## Connecting the Contact / Quote Form Backend

The forms currently show a success message but don't send emails. To connect:

### Option A: Formspree (easiest, free tier available)
1. Go to https://formspree.io and create a free account
2. Create a new form, copy the form endpoint URL
3. In `QuoteForm.tsx` and `contact.tsx`, replace the `handleSubmit` with:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSent(true)
}
```

### Option B: Next.js API Route + Nodemailer
Create `pages/api/contact.ts`:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'info@cargolord.com',
    subject: `New enquiry from ${req.body.name}`,
    text: JSON.stringify(req.body, null, 2),
  })

  res.status(200).json({ ok: true })
}
```

---

## Live Chat Setup (Tawk.to)

1. Go to https://tawk.to → Create free account
2. Add a new property → get your Property ID and Widget ID
3. Open `components/ChatWidget.tsx`
4. Replace:
   ```ts
   const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID'
   const TAWK_WIDGET_ID = 'default'
   ```
   With your real IDs from the tawk.to dashboard.

Until configured, the site shows a WhatsApp floating button in the bottom-right corner instead.

---

## Connecting the CRM Tracking Backend

The `TrackingSearch.tsx` component currently uses mock data. To connect to your real CRM:

1. Create a Next.js API route at `pages/api/track.ts`:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { number } = req.query
  // Replace this with your real CRM API call:
  const result = await fetch(`https://crm.cargolord.co.uk/api/tracking/${number}`, {
    headers: { Authorization: `Bearer ${process.env.CRM_API_KEY}` },
  })
  const data = await result.json()
  res.status(200).json(data)
}
```

2. In `TrackingSearch.tsx`, replace the mock `setTimeout` block with:

```ts
const res = await fetch(`/api/track?number=${number}`)
const data = await res.json()
setResult(data || null)
setNotFound(!data)
```

---

## Deployment

### Option A: Vercel (Recommended — free)

1. Push code to GitHub
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js → click Deploy
4. Add your custom domain in Vercel Settings → Domains
5. Set DNS: add a CNAME record `@ → cname.vercel-dns.com` in your domain registrar (Hostinger)

**Environment variables** (Vercel dashboard → Settings → Environment Variables):
```
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
CRM_API_KEY=your_crm_api_key
```

### Option B: Netlify

1. Push to GitHub
2. Go to https://netlify.com → New site from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install Netlify Next.js plugin: `npm install -D @netlify/plugin-nextjs`
6. Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option C: Static Export (for cPanel/Hostinger)

If you need to deploy to cPanel (like your existing Hostinger hosting):

1. In `next.config.js`, add: `output: 'export'`
2. Run: `npm run build`
3. Upload the `out/` folder to `public_html`

Note: Static export loses API routes. Use Formspree for forms and host tracking on a separate endpoint.

---

## SEO

- All pages have unique `<title>`, `<meta description>`, and `canonical` URLs via `next-seo`
- Keywords targeted: `cargo to pakistan`, `cheap cargo uk pakistan`, `door to door cargo pakistan`, `air cargo pakistan uk`, `excess baggage pakistan`, `sea cargo pakistan`
- Schema markup can be added using `next-seo`'s `LocalBusinessJsonLd` component — recommended for local SEO
- Sitemap: add `next-sitemap` package and configure `next-sitemap.config.js` for automatic sitemap generation

---

## Image Credits

All images sourced from Unsplash (free to use, no attribution required):
- Hero: Shipping port aerial — Unsplash/Chanaka
- Services: Warehouse, aircraft, cargo containers, suitcases
- About: Freight warehouse operations

To use real Cargo Lord photos, simply replace the Unsplash URLs in `data/content.ts` with your own image paths in `/public/images/`.

---

## Contact Details Used

| Location       | Phone              |
|----------------|--------------------|
| Birmingham (HQ)| +44 121 328 3232   |
| Manchester     | +44 161 820 5029   |
| London         | +44 020 3627 3315  |
| Bolton         | +44 1204 894915    |
| Email          | info@cargolord.com |
| WhatsApp       | +44 121 328 3232   |
