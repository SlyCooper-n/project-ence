import { useEffect } from "react";

export const usePageConfig = () => {
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
};
