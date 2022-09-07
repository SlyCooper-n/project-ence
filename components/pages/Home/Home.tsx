import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button, VisuallyHidden } from "@components/widgets";
import { HomeProps } from "@core/types";
import { scrollDown } from "@core/utils";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BehanceLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { useState } from "react";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, heading, highlightedCases, about } = cmsData;

  const isInEnglish = useRouter().pathname.includes("/en");
  const [step, setStep] = useState<0 | 1 | 2>(0);

  return (
    <PageContainer headTitle={seo.title} description={seo.description}>
      <Navbar />

      {/* Heading */}
      <main className="relative h-[calc(100vh-3rem)] flex flex-col justify-center items-center text-center">
        <VisuallyHidden asChild>
          <h1>{heading.title}</h1>
        </VisuallyHidden>

        <img
          src="/images/logo-ence-st-black.svg"
          alt="Ence logo"
          className="w-[100px] mx-auto mb-8"
        />

        <p className="sm:w-4/5 max-w-[400px] sm:max-w-[929px] mx-auto mb-4 text-[8px] sm:text-xl">
          {heading.subtitle}
        </p>

        <ul className="flex gap-4 text-[8px] sm:text-base">
          {heading.socialMedia.map((media) => (
            <li key={media.socialMedia}>
              <a
                href={media.url}
                target="_blank"
                rel="noreferrer"
                className="relative capitalize"
              >
                {media.socialMedia}
              </a>
            </li>
          ))}

          <style jsx>{`
            a.relative::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 0;
              height: 3px;
              margin-bottom: -3px;
              background-color: #22223b;
              transition: all 0.3s ease;
            }
            a.relative:hover::before {
              width: 100%;
            }
          `}</style>
        </ul>

        <Lottie
          animationData={scrollDown}
          className="absolute bottom-24 w-12"
        />
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
              href={
                isInEnglish
                  ? `/en/projects/${caseItem.slug}`
                  : `/projects/${caseItem.slug}`
              }
            >
              <a className="group relative w-full max-h-[350px] overflow-clip">
                <img
                  src={caseItem.banner.url}
                  alt="Zoeira Cooking case"
                  className="w-full max-h-[350px] object-cover object-center hover:scale-[1.02] transition-transform duration-500 z-10"
                />

                <div className="absolute -bottom-full group-hover:bottom-8 p-4 bg-primary text-2xl text-white transition-all duration-500">
                  {caseItem.projectName} - {caseItem.caseOrder}
                </div>
              </a>
            </Link>
          ))}

          <Link href={isInEnglish ? "/en/projects" : "/projects"}>
            <a>
              <Button className="w-[180px] sm:w-[280px]">
                {isInEnglish ? "See more projects" : "Ver mais projetos"}
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* People */}
      <section
        id="about"
        className="relative w-4/5 sm:w-auto mx-auto mb-16 sm:mb-32 text-center"
      >
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div
            className={`xl:flex-1 xl:mr-4 transition-all ${
              step > 0 && "lg:opacity-0"
            } transition-all`}
          >
            <h2 className="mb-2 sm:mb-4 sm:text-5xl xl:text-start">
              {about.title}
            </h2>

            <p className="w-2/3 xl:w-auto mx-auto mb-8 text-[8px] sm:text-xl xl:text-start">
              {about.subtitle}
            </p>

            <Button
              type="button"
              onClick={() =>
                setStep((prev) => (prev++ > 2 ? 0 : (prev++ as 0 | 1 | 2)))
              }
              className="w-[200px] hidden xl:flex"
            >
              {isInEnglish ? "See more" : "Ver mais"}
            </Button>
          </div>

          <div className="xl:flex-[2] mb-8 flex justify-center xl:justify-end">
            {about.people.map((person, i) => (
              <>
                <img
                  key={person.id}
                  src={person.profilePicture.url}
                  alt={`${person.personName} profile picture`}
                  className={`max-w-[200px] sm:max-w-[300px] md:max-w-[450px] rounded-full ${
                    i === 0
                      ? `translate-x-1/4 xl:translate-x-[60%] z-10 ${
                          step === 1 && "absolute -left-1/3 translate-x-0"
                        } ${step === 2 && "opacity-0"}`
                      : `-translate-x-1/4 xl:translate-x-0 z-0 ${
                          step === 1 && "opacity-0"
                        } ${
                          step === 2 &&
                          "absolute opacity-100 -left-1/3 lg:-left-16 translate-x-0"
                        }`
                  } transition-all`}
                />

                <div
                  className={`${
                    step === 0 && "opacity-0"
                  } absolute top-1/3 left-1/2 ${
                    i === 0
                      ? `${step === 1 && ""} ${step === 2 && "opacity-0"}`
                      : `${step === 1 && "opacity-0"}`
                  } transition-all`}
                >
                  <p className="text-[8px] sm:text-base">{person.bio.text}</p>

                  <ul className="mt-4 flex justify-center items-center gap-2">
                    {person.socialMedia.map((media) => (
                      <li key={media.socialMedia}>
                        <a href={media.url} target="_blank" rel="noreferrer">
                          {media.socialMedia === "behance" && (
                            <BehanceLogo size={30} />
                          )}
                          {media.socialMedia === "instagram" && (
                            <InstagramLogo size={30} />
                          )}
                          {media.socialMedia === "github" && (
                            <GithubLogo size={30} />
                          )}
                          {media.socialMedia === "linkedin" && (
                            <LinkedinLogo size={30} />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>

        <Button
          type="button"
          onClick={() =>
            setStep((prev) => (prev++ > 1 ? 0 : (prev++ as 1 | 2)))
          }
          className={`w-[148px] mx-auto ${step > 0 ? "" : "xl:hidden"}`}
        >
          {isInEnglish ? "See more" : "Ver mais"}
        </Button>
      </section>

      <Footer />
    </PageContainer>
  );
};
