import { GetServerSideProps } from 'next'
import { services, blogPosts } from '../data/content'

const DOMAIN = 'https://cargolord.com'

function generateSiteMap() {
  const staticPaths = ['', 'about', 'contact', 'quote', 'services', 'blog', 'terms', 'tracking']

  const urls = [
    ...staticPaths.map((path) => ({ loc: path === '' ? `${DOMAIN}/` : `${DOMAIN}/${path}/`, lastmod: undefined as string | undefined })),
    ...services.map((s) => ({ loc: `${DOMAIN}/services/${s.slug}/`, lastmod: undefined as string | undefined })),
    ...blogPosts.map((p) => ({ loc: `${DOMAIN}/blog/${p.slug}/`, lastmod: p.date })),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`
}

export default function SiteMap() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
