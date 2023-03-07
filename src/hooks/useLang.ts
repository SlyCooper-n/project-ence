import { useRouter } from "next/router";

export const useLang = () => {
  const { pathname } = useRouter();

  const isInEnglish = pathname.startsWith("/en");
  const activeLanguage: "en" | "pt" = isInEnglish ? "en" : "pt";

  return { isInEnglish, activeLanguage };
};
