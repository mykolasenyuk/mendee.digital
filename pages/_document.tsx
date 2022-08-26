import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <title>Mendee.Digital</title>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Mulish:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
