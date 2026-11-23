import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // Tracks every phone/WhatsApp link click site-wide as a conversion signal,
  // via event delegation on document - so new tel:/wa.me links added to any
  // page or component are tracked automatically, with no per-link changes.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const gtag = (window as any).gtag
      if (!gtag) return
      if (href.startsWith('tel:')) {
        gtag('event', 'generate_lead', { form: 'phone_click', value: href.replace('tel:', '') })
      } else if (href.includes('wa.me')) {
        gtag('event', 'generate_lead', { form: 'whatsapp_click' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Cargo Lord Ltd"
        defaultTitle="Cargo Lord Ltd — Cargo to Pakistan, India & Europe from the UK"
        description="Door-to-door air and sea cargo from the UK to Pakistan, India and Europe, from just £1.50/kg. Excess baggage and worldwide freight. Based in Birmingham. Est. 2012."
        canonical="https://cargolord.com"
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://cargolord.com',
          siteName: 'Cargo Lord Ltd',
          images: [{ url: 'https://cargolord.com/og-image.jpg', width: 1200, height: 630 }],
        }}
        twitter={{ cardType: 'summary_large_image', handle: '@cargolord' }}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme-color', content: '#0C1535' },
        ]}
        additionalLinkTags={[
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
