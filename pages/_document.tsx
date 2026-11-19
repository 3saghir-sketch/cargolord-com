import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (GTM-N6937QBX) -- site-wide analytics */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-N6937QBX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
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
