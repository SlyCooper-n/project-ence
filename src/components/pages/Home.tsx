import {
  AboutSection,
  AuthorSection,
  CasesSection,
  Head,
  MainSection,
} from "@/components";
import { useLang } from "@/hooks";

export const Home = () => {
  const { isInEnglish } = useLang();

  return (
    <>
      <Head title={isInEnglish ? "Home" : "Início"} />

      <MainSection />

      <CasesSection />

      <AboutSection />

      <AuthorSection />
    </>
  );
};
