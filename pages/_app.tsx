import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />

      {/* scrollbar styling */}
      <style jsx global>
        {`
          body::-webkit-scrollbar {
            width: 10px;
          }

          body::-webkit-scrollbar-thumb {
            background: ${router.pathname.includes("/about")
              ? "white"
              : "black"};
          }

          body::-webkit-scrollbar-track {
            background: ${router.pathname.includes("/about")
              ? "black"
              : "white"};
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
