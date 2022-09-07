import { PageContainerProps } from "@core/types";
import Head from "next/head";
import { useEffect } from "react";

export const PageContainer = (props: PageContainerProps) => {
  const { headTitle, description, children } = props;

  useEffect(() => {
    const faviconLink = document.querySelector(
      "link[rel='shortcut icon']"
    ) as HTMLLinkElement;

    const touchIconLink = document.querySelector(
      "link[rel='apple-touch-icon']"
    ) as HTMLLinkElement;

    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      faviconLink.href = "/favicon-white.png";
      touchIconLink.href = "/touch-icon-white.png";

      return;
    }

    faviconLink.href = "/favicon.png";
    touchIconLink.href = "/touch-icon.png";
  }, []);

  return (
    <>
      <Head>
        <title>{headTitle ?? "Next page"}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="w-screen min-h-screen flex flex-col">
        <div className="container w-[95vw]">{children}</div>
      </div>

      {/* scrollbar styling */}
      <style jsx global>
        {`
          body::-webkit-scrollbar {
            width: 10px;
          }

          body::-webkit-scrollbar-thumb {
            background: #22223b;
          }

          body::-webkit-scrollbar-track {
            background: white;
          }
        `}
      </style>
    </>
  );
};
