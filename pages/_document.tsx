import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics (G-4FQ8YST8ZP) -- dedicated GA4 property for
            cargolord.com, separate from cargolord.co.uk's property. This
            replaced a shared GTM container (GTM-N6937QBX) inherited from
            the co.uk reference build, which was mixing both domains'
            traffic into one property. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4FQ8YST8ZP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4FQ8YST8ZP');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="GB-WMD" />
        <meta name="geo.placename" content="Birmingham" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
