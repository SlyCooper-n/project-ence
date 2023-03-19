import clsx from "clsx";
import { Fade } from "react-awesome-reveal";

import content from "@/content.json";
import { useLang } from "@/hooks";
import { ServicesAccordions } from "../layouts";
import { Container, Heading, Text } from "../modules";

export const About = () => {
  const { isInEnglish, activeLanguage } = useLang();

  const { processes } = content.pages.about;

  return (
    <>
      <Container className="mt-28 overflow-hidden pt-16 md:pt-36">
        <main>
          <Fade direction="left" triggerOnce>
            <Heading asChild className="mb-16 flex md:mb-32">
              <h1>
                {isInEnglish ? "About Ence" : "Sobre a Ence"}
                <Fade triggerOnce delay={1000}>
                  <Text className="ml-3 inline-block text-xl font-normal text-white/25">
                    {isInEnglish ? "services" : "serviços"}
                  </Text>
                </Fade>
              </h1>
            </Heading>
          </Fade>

          <Text
            asChild
            className="ml-auto mb-16 block text-end text-xl font-semibold not-italic md:text-3xl"
          >
            <em>
              {isInEnglish
                ? "Once you've found out who's in charge of the studio, see what services I specialize in."
                : "Depois de descobrir o responsável pelo estúdio, veja quais são os serviços em que sou especialista."}
            </em>
          </Text>
        </main>
      </Container>

      <ServicesAccordions />

      <Container className="overflow-hidden pb-16 md:pb-36">
        <section className="relative py-16 md:py-36">
          <Fade direction="left" triggerOnce>
            <Heading asChild className="mb-16 flex md:mb-32">
              <h1>
                {isInEnglish ? "About Ence" : "Sobre a Ence"}
                <Fade triggerOnce delay={1000}>
                  <Text className="ml-3 inline-block text-xl font-normal text-white/25">
                    {isInEnglish ? "processes" : "processos"}
                  </Text>
                </Fade>
              </h1>
            </Heading>
          </Fade>

          <Text
            asChild
            className="mb-16 block text-xl font-semibold not-italic md:mb-48"
          >
            <em>
              {isInEnglish
                ? "The processes that are the basis of every experience, we have summarized them in 4 described steps so that we know how our work works."
                : "Os processos que são a base de toda experiência, resumimos em 4 etapas descritas para que saiba como funciona nosso trabalho."}
            </em>
          </Text>

          <ol className="flex flex-col gap-9 overflow-hidden md:gap-24">
            {processes.map((process, i) => {
              const index = i < 9 ? `0${++i}` : ++i;
              const isEven = i++ % 2 === 0;

              const fadeDirection = isEven ? "right" : "left";

              return (
                <li
                  key={process.title.en}
                  className={clsx(
                    "flex flex-col md:items-center md:gap-12 lg:gap-24",
                    {
                      "md:flex-row": !isEven,
                      "md:flex-row-reverse": isEven,
                    },
                  )}
                >
                  <Fade direction={fadeDirection} triggerOnce cascade>
                    <div
                      className={clsx("mb-2 flex items-center gap-4", {
                        "flex-row-reverse": isEven,
                      })}
                    >
                      <span className="block text-6xl font-semibold sm:text-8xl md:text-[12rem]">
                        {index}
                      </span>

                      <Heading asChild className="md:hidden">
                        <h3>{process.title[activeLanguage]}</h3>
                      </Heading>
                    </div>

                    <div>
                      <Fade triggerOnce delay={1000}>
                        <Heading
                          asChild
                          className={clsx("mb-11 hidden text-2xl md:block", {
                            "text-end": isEven,
                          })}
                        >
                          <h3>{process.title[activeLanguage]}</h3>
                        </Heading>

                        <Text
                          asChild
                          className={clsx({ "text-end md:text-xl": isEven })}
                        >
                          <p>{process.description[activeLanguage]}</p>
                        </Text>
                      </Fade>
                    </div>
                  </Fade>
                </li>
              );
            })}
          </ol>

          <GraphBg />
        </section>
      </Container>
    </>
  );
};

function GraphBg() {
  return (
    <svg
      width="1440"
      height="2661"
      viewBox="0 0 1440 2661"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-96 -left-16 -z-10"
    >
      <g opacity="0.2">
        <path
          d="M-107.615 2458.11L-383.49 1844.34L1371.59 1564.64L1647.47 2178.41L-107.615 2458.11Z"
          fill="url(#paint0_linear_1797_148)"
          fillOpacity="0.5"
        />
        <path
          d="M-215.918 1908.42L-571.158 1463.07L809.334 864.808L1164.57 1310.16L-215.918 1908.42Z"
          fill="url(#paint1_linear_1797_148)"
          fillOpacity="0.9"
        />
        <rect
          x="-956.412"
          y="980.091"
          width="1075.16"
          height="537.582"
          transform="rotate(-38.5782 -956.412 980.091)"
          fill="#F2F2F8"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1797_148"
          x1="398.854"
          y1="1492.69"
          x2="865.122"
          y2="2530.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F8" stopOpacity="0" />
          <stop offset="1" stopColor="#F2F2F8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1797_148"
          x1="-3.49491"
          y1="1010.26"
          x2="600.047"
          y2="1760.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F8" stopOpacity="0" />
          <stop offset="1" stopColor="#F2F2F8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
