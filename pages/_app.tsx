import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
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
