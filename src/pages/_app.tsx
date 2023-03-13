import type { AppProps } from "next/app";
import { Inter_Tight } from "next/font/google";

import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

const inter = Inter_Tight({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
