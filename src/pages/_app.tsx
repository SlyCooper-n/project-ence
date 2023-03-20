import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter_Tight } from "next/font/google";

import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

const inter = Inter_Tight({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      <Footer />
    </div>
  );
}
