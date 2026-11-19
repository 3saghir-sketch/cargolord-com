import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Cargo Lord Ltd"
        defaultTitle="Cargo Lord Ltd — Cheap Cargo to Pakistan from UK"
        description="Door-to-door air cargo from the UK to Pakistan from just £1.50/kg. Sea cargo, excess baggage and worldwide freight. Based in Birmingham. Est. 2012."
        canonical="https://cargolord.co.uk"
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://cargolord.co.uk',
          siteName: 'Cargo Lord Ltd',
          images: [{ url: 'https://cargolord.co.uk/og-image.jpg', width: 1200, height: 630 }],
        }}
        twitter={{ cardType: 'summary_large_image', handle: '@cargolord' }}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme-color', content: '#0f1f33' },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
