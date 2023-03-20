import {
  AboutSection,
  AuthorSection,
  CasesSection,
  MainSection,
  PageAnimation,
} from "@/components";

export const Home = () => {
  return (
    <PageAnimation>
      <MainSection />

      <CasesSection />

      <AboutSection />

      <AuthorSection />
    </PageAnimation>
  );
};
