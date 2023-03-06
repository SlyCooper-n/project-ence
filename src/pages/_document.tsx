import { Head, Html, Main, NextScript } from "next/document";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";

const inter = Inter_Tight({ weight: ["500"] });

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* open graph meta tags */}
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

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://encestudio.com" />
        <meta name="twitter:title" content="Ence Studio" />
        <meta
          name="twitter:description"
          content="Estúdio de design focado na criação e desenvolvimento de Identidade de marca e UI Design. criado para transformar a experiência de projetos."
        />
        <meta name="twitter:creator" content="@joaovitorn___" />
        {/* <meta name="twitter:image" content="https://encestudio.com/images/twitter-banner.png" /> */}

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
      </Head>

      <body className={inter.className}>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
