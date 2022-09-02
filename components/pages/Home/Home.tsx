import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button, VisuallyHidden } from "@components/widgets";
import { useTheme } from "@core/hooks";
import { HomeProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, heading, highlightedCases, about } = cmsData;

  const { theme } = useTheme();
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <PageContainer headTitle={seo.title} description={seo.description}>
      <Navbar />

      {/* Heading */}
      <main className="my-16 sm:my-60 text-center">
        <VisuallyHidden asChild>
          <h1>{heading.title}</h1>
        </VisuallyHidden>

        <img
          src={
            theme === "light"
              ? "/images/logo-ence-black.svg"
              : "/images/logo-ence-white.svg"
          }
          alt="Ence logo"
          className="sm:w-[100px] mx-auto mb-8"
        />

        <p className="sm:w-4/5 max-w-[400px] sm:max-w-[929px] mx-auto text-[8px] sm:text-xl">
          {heading.subtitle}
        </p>
      </main>

      {/* Highlighted cases */}
      <section className="mb-16 sm:mb-60 text-center">
        <h2 className="mb-2 sm:mb-12 font-semibold sm:text-5xl">
          {highlightedCases.title}
        </h2>

        <div className="flex flex-col items-center gap-5">
          {highlightedCases.cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={isInEnglish ? "en/projects" : "/projects"}
            >
              <a className="relative w-full max-h-[350px] overflow-clip">
                <img
                  src={caseItem.banner.url}
                  alt="Zoeira Cooking case"
                  className="w-full max-h-[350px] object-cover object-center hover:scale-[1.02] transition-transform duration-500 z-10"
                />

                <Link
                  href={
                    isInEnglish
                      ? `/en/projects/${caseItem.slug}`
                      : `/projects/${caseItem.slug}`
                  }
                >
                  <a
                    className={`absolute left-0 bottom-0 w-full sm:w-fit p-2 sm:pl-10 flex flex-row justify-center sm:justify-start gap-7 ${
                      theme === "dark" ? "bg-secondary" : "bg-primary"
                    } text-white text-xs sm:text-base z-20 hover:gap-16 transition-all`}
                  >
                    {isInEnglish ? "See project" : "Ver projeto"}
                  </a>
                </Link>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* People */}
      <section
        id="about"
        className="w-4/5 sm:w-auto mx-auto mb-16 sm:mb-32 text-center"
      >
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="xl:flex-1 xl:mr-4">
            <h2 className="mb-2 sm:mb-4 sm:text-5xl xl:text-start">
              {about.title}
            </h2>

            <p className="w-2/3 xl:w-auto mx-auto mb-8 text-[8px] sm:text-xl xl:text-start">
              {about.subtitle}
            </p>

            <Button type="button" className="w-[200px] hidden xl:flex">
              {isInEnglish ? "See more" : "Ver mais"}
            </Button>
          </div>

          <div className="xl:flex-[2] relative mb-8 flex justify-center xl:justify-end">
            {about.people.map((person, i) => (
              <img
                key={person.id}
                src={person.profilePicture.url}
                alt={`${person.personName} profile picture`}
                className={`max-w-[200px] sm:max-w-[300px] md:max-w-[450px] rounded-full ${
                  i === 0
                    ? "translate-x-1/4 xl:translate-x-[60%] z-10"
                    : "-translate-x-1/4 xl:translate-x-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        <Button type="button" className="w-[148px] mx-auto xl:hidden">
          {isInEnglish ? "See more" : "Ver mais"}
        </Button>
      </section>

      <Footer />
    </PageContainer>
  );
};
