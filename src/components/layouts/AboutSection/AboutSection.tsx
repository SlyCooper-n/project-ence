import clsx from "clsx";
import { Fade } from "react-awesome-reveal";

import { Container, Heading, Text } from "@/components";
import { useLang } from "@/hooks";

export const AboutSection = () => {
  const { isInEnglish } = useLang();

  return (
    <Container asChild className="py-24 md:py-36 lg:py-48">
      <section>
        <Fade direction="left" triggerOnce>
          <Heading className="mb-9">
            {isInEnglish ? "About our work" : "Sobre nosso trabalho"}
          </Heading>
        </Fade>

        <div className="flex flex-col gap-36 md:flex-row md:items-end md:justify-between">
          <Text asChild className="flex flex-col gap-12">
            <p>
              <Fade triggerOnce cascade delay={500}>
                <strong className="text-2xl font-semibold lg:text-3xl">
                  {isInEnglish
                    ? "The perfect union between strategy and visuals which generates results for solid brands that remain from experience."
                    : "A união perfeita entre estratégia e visual que geram resultados para marcas fortes remanescentes de uma experiência."}
                </strong>

                <em className="not-italic lg:text-xl">
                  {isInEnglish
                    ? "Design is the most potent tool for any company that wants to communicate efficiently with its customers and get results through it."
                    : "Design é a ferramenta mais poderosa de toda e qualquer empresa que queira se comunicar com seus clientes de forma eficiente e obter resultados através disso."}
                </em>
              </Fade>
            </p>
          </Text>

          <Text asChild className="flex flex-col items-end gap-5">
            <p>
              <Fade triggerOnce cascade>
                <strong
                  className={clsx("block text-2xl lg:text-3xl", {
                    "mr-14": isInEnglish,
                  })}
                >
                  {isInEnglish ? "+Results" : "+Resultados"}
                </strong>

                <em className="block max-w-[140px] text-xs not-italic lg:max-w-[160px]">
                  {isInEnglish
                    ? "For more results, impacts, expansions and gains through the strategic design."
                    : "Por mais resultados, impactos, expansões e ganhos através do design estratégico."}
                </em>
              </Fade>
            </p>
          </Text>
        </div>
      </section>
    </Container>
  );
};
