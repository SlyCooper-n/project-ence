import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ence Studio" />
        <meta
          property="og:description"
          content="Estúdio de design focado na criação e desenvolvimento de Identidade de marca e UI Design. criado para transformar a experiência de projetos."
        />
        <meta property="og:site_name" content="Ence Studio - Portfólio" />
        <meta property="og:url" content="https://encestudio.com" />
        <meta
          property="og:image"
          content="https://encestudio.com/images/facebook-banner.png"
        />
        <meta name="author" content="João Vitor Nascimento" />

        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/touch-icon.png"
          type="image/png"
          sizes="57x57"
        />

        <meta name="theme-color" content="#22223B" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />

        {/*
          // opengraph meta tags
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="Next.js template with bash scripts" />
          <meta name="twitter:description" content="Best Next.js template with bash scripts in the world" />
          <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
          <meta name="twitter:creator" content="@John_Doe" />
        */}
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
