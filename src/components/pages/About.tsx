import clsx from "clsx";

import content from "@/content.json";
import { useLang } from "@/hooks";
import { Accordion, Container, Heading, Text } from "../modules";

export const About = () => {
  const { isInEnglish, activeLanguage } = useLang();

  const { processes } = content.pages.about;

  return (
    <>
      <Container className="mt-28 overflow-hidden py-16 md:py-36">
        <main>
          <Heading asChild className="mb-16 md:mb-32">
            <h1>
              {isInEnglish ? "About Ence" : "Sobre a Ence"}
              <Text className="ml-3 inline-block text-xl font-normal text-white/25">
                {isInEnglish ? "services" : "serviços"}
              </Text>
            </h1>
          </Heading>

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

        <section className="flex flex-col md:flex-row">
          <div className="flex-1">
            <Accordion.Root type="multiple">
              <Accordion.Item value="strategy">
                <Accordion.Trigger>
                  {isInEnglish ? "Strategy" : "Estratégia"}
                </Accordion.Trigger>

                <Accordion.Content>
                  {isInEnglish
                    ? "First of all we need to know which way to go during the experience, we have to know strategically and visually what will be done. Here we managed to develop all this way."
                    : "Antes de tudo precisamos saber por qual caminho ir durante a experiência, temos que saber estrategicamente e visualmente o que será feito. Aqui conseguimos desenvolver todo esse caminho."}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <Accordion.Root type="multiple">
              <Accordion.Item value="web-design">
                <Accordion.Trigger>Web Design</Accordion.Trigger>

                <Accordion.Content>
                  {isInEnglish
                    ? "Contrary to the opinion of many, I believe that a company does not necessarily need to be on the internet, I don't know why it should be there. But believe that within it there is a sea of opportunities for several companies that you can't even imagine. With different approaches and solutions we can position you there through a website"
                    : "Contrariando a opinião de muitos, acredito que não necessariamente uma empresa precisa estar na internet, não sei um motivo para estar lá. Mas acredite que dentro dela existe um mar de oportunidades para diversas empresas que nem imaginam. Com diversas abordagens e soluções podemos te posicionar lá através de um website."}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>

          <div className="flex-1">
            <Accordion.Root type="multiple">
              <Accordion.Item value="visual-identity">
                <Accordion.Trigger>
                  {isInEnglish ? "Visual Identity" : "Identidade Visual"}
                </Accordion.Trigger>

                <Accordion.Content>
                  {isInEnglish
                    ? "After a well-defined strategy, it's time to translate all of this visually. We can say that this is our flagship, our greatest specialty, the creation of a visual universe that translates exactly your positioning and communication, establishing your place in the market."
                    : "Após uma estratégia bem definida, é hora de traduzir tudo isso visualmente. Podemos dizer que esse é o nosso carro chefe, nossa maior especialidade, a criação de um universo visual que traduza exatamente seu posicionamento e comunicação estabelecendo seu lugar no mercado."}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <Accordion.Root type="multiple">
              <Accordion.Item value="social-branding">
                <Accordion.Trigger>
                  {isInEnglish ? "Social Branding" : "Branding Social"}
                </Accordion.Trigger>

                <Accordion.Content>
                  {isInEnglish
                    ? "A website is not the only point of contact for a company on the internet. Nowadays, it is also very important for a company to be socially positioned and, with this service, we deliver a manual on how your company should visually behave on social networks, so that anyone can follow and maintain their identity."
                    : "Um website não é o único ponto de contato para uma empresa dentro da internet. Hoje em dia é muito importante também uma empresa estar posicionada socialmente e, com esse serviço, entregamos um manual de como sua empresa deve se comportar visualmente nas redes sociais, assim qualquer pessoa poderá seguir e manter a sua identidade."}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </section>

        <section className="relative py-16 md:py-36">
          <Heading className="mb-12">
            {isInEnglish ? "About Ence" : "Sobre a Ence"}
            <Text className="ml-3 inline-block text-xl font-normal text-white/25">
              {isInEnglish ? "processes" : "processos"}
            </Text>
          </Heading>

          <Text
            asChild
            className="mb-16 block text-xl font-semibold not-italic md:mb-48"
          >
            <em>
              {isInEnglish
                ? "Once you've found out who's in charge of the studio, see what services I specialize in."
                : "Depois de descobrir o responsável pelo estúdio, veja quais são os serviços em que sou especialista."}
            </em>
          </Text>

          <ol className="flex flex-col gap-9 overflow-hidden md:gap-24">
            {processes.map((process, i) => {
              const index = i < 9 ? `0${++i}` : ++i;
              const isEven = i++ % 2 === 0;

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
                  </div>
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
      className="absolute -bottom-16 -left-16 -z-10"
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
