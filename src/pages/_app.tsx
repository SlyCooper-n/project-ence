import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter_Tight } from "next/font/google";

import { CountDown, Footer, Navbar } from "@/components";
import "@/styles/globals.css";

const inter = Inter_Tight({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <CountDown className={inter.className}>
      <div className={inter.className}>
        <Navbar />

        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>

        <Footer />
      </div>
    </CountDown>
  );
}
