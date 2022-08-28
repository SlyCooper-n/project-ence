import { PageContainer } from "@components/layouts";
import { Navbar } from "@components/modules";
import { Button, VisuallyHidden } from "@components/widgets";
import { useTheme } from "@core/hooks";
import { HomeProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, headingSection, highlightedCases, aboutSection } = cmsData;

  const { theme } = useTheme();
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <PageContainer headTitle={seo.title} description={seo.description}>
      <Navbar />

      {/* Heading */}
      <main className="my-16 sm:mt-32 sm:mb-64 text-center">
        <VisuallyHidden asChild>
          <h1>{headingSection.title}</h1>
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
          {headingSection.subtitle}
        </p>
      </main>

      {/* Highlighted cases */}
      <section className="mb-16 sm:mb-64 text-center">
        <h2 className="mb-2 sm:mb-12 font-semibold sm:text-5xl">
          {highlightedCases.title}
        </h2>

        <div className="w-4/5 mx-auto flex flex-col items-center gap-5">
          {highlightedCases.banners.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={isInEnglish ? "en/projects" : "/projects"}
            >
              <a className="relative w-full max-w-[1080px] max-h-[350px] overflow-hidden">
                <img
                  src={caseItem.url}
                  alt="Zoeira Cooking case"
                  className="w-full max-w-[1080px] max-h-[350px] object-cover hover:scale-[1.02] transition-transform duration-500 z-10"
                />

                <Link href={`/projects/${caseItem.id}`}>
                  <a className="absolute left-0 bottom-0 p-3 pl-7 flex flex-row gap-7 bg-secondary text-white z-20 hover:gap-16 transition-all">
                    {isInEnglish ? "See project" : "Ver projeto"}
                    <img
                      src="/icons/arrow.svg"
                      alt="right arrow icon"
                      className="w-5"
                    />
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
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:flex-1 lg:mr-4">
            <h2 className="mb-2 sm:mb-4 sm:text-5xl lg:text-start">
              {aboutSection.title}
            </h2>

            <p className="w-2/3 lg:w-auto mx-auto mb-8 text-[8px] sm:text-lg lg:text-start">
              {aboutSection.subtitle}
            </p>

            <Button type="button" className="w-[200px] hidden lg:flex">
              {isInEnglish ? "See more" : "Ver mais"}
            </Button>
          </div>

          <div className="lg:flex-[2] relative mb-8 flex justify-center">
            {aboutSection.people.map((person, i) => (
              <img
                key={person.id}
                src={person.profilePicture.url}
                alt={`${person.personName} profile picture`}
                className={`w-2/3 max-w-[200px] lg:max-w-[450px] rounded-full flex-shrink-0 ${
                  i === 0
                    ? "z-10 translate-x-1/4 lg:translate-x-1/4"
                    : "-translate-x-1/4 lg:-translate-x-1/4"
                }`}
              />
            ))}
          </div>
        </div>

        <Button type="button" className="w-[148px] mx-auto lg:hidden">
          {isInEnglish ? "See more" : "Ver mais"}
        </Button>
      </section>
    </PageContainer>
  );
};
