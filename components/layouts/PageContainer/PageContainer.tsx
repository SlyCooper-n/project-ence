import { useTheme } from "@core/hooks";
import { PageContainerProps } from "@core/types";
import Head from "next/head";
import { useEffect } from "react";

export const PageContainer = (props: PageContainerProps) => {
  const { headTitle, description, children } = props;

  const { theme } = useTheme();

  useEffect(() => {
    const faviconLink = document.querySelector(
      "link[rel='shortcut icon']"
    ) as HTMLLinkElement;

    const touchIconLink = document.querySelector(
      "link[rel='apple-touch-icon']"
    ) as HTMLLinkElement;

    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      faviconLink.href = "favicon-white.png";
      touchIconLink.href = "touch-icon-white.png";

      return;
    }

    faviconLink.href = "favicon.png";
    touchIconLink.href = "touch-icon.png";
  }, []);

  return (
    <>
      <Head>
        <title>{headTitle ?? "Next page"}</title>
        <meta name="description" content={description} />
      </Head>

      <div data-theme={theme} className="w-screen min-h-screen flex flex-col">
        <div className="container w-[95vw]">{children}</div>
      </div>

      {/* scrollbar styling */}
      {/* <style jsx global>{`
        body {
          scrollbar-width: 10px;
          scrollbar-color: ${theme === "dark" ? "#4A4E69" : "#22223B"}
            ${theme === "dark" ? "transparent" : "white"};
        }

        body::-webkit-scrollbar {
          width: 10px;
        }

        body::-webkit-scrollbar-thumb {
          background: ${theme === "dark" ? "#4A4E69" : "#22223B"};
        }

        body::-webkit-scrollbar-track {
          background: ${theme === "dark" ? "transparent" : "white"};
        }
      `}</style> */}
    </>
  );
};
