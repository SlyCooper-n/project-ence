import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import { Button, Container, Heading, Text } from "@/components";
import { useLang } from "@/hooks";
import { AnimatedBorder } from "./components";

export const AuthorSection = () => {
  const { isInEnglish } = useLang();

  return (
    <section className="relative mx-auto max-w-[1920px]">
      <AnimatedBorder top />
      <AnimatedBorder bottom />

      <Container className="py-10 md:py-24">
        <Fade direction="left" triggerOnce>
          <Heading className="md:text-2xl">
            {isInEnglish ? "Behind the experience" : "Por trás da experiência"}
          </Heading>
        </Fade>
      </Container>

      <div className="relative flex flex-col gap-7 overflow-y-hidden md:flex-row md:items-center md:gap-0">
        <AnimatedBorder top />

        <Fade direction="down" triggerOnce className="overflow-hidden">
          <img
            src="/images/author-desktop.png"
            alt="João Vitor picture"
            className="-mt-[25%] max-h-[500px] w-full object-cover object-top md:-mt-24 md:max-h-[650px] md:w-[320px] lg:w-[510px]"
          />
        </Fade>

        <Container className="mb-14 flex flex-col gap-24 md:mb-0 md:flex-1 md:items-center md:gap-12 lg:gap-24">
          <Text className="flex flex-col gap-16 md:gap-12">
            <Fade triggerOnce cascade>
              <strong className="text-xl lg:text-2xl">
                {isInEnglish
                  ? "The only person behind those projects, a person who fell in love with his experience in developing and building brands, João Vitor."
                  : "A única pessoa por trás desses projetos, uma pessoa que se apaixonou pela experiência vivida no desenvolvimento e construção de marcas, João Vitor."}
              </strong>

              <em className="not-italic lg:text-xl">
                {isInEnglish
                  ? "João Vitor is a designer with 4 years of career working with Brand Identity, Branding & UI Design. He has developed projects for startups and also in the Fashion & Gastronomy industries."
                  : "João Vitor é um designer com 4 anos de carreira trabalhando com Identidade de marca, Branding & UI Design. Desenvolveu projetos para startups e também nas indústrias de Moda & Gastronomia."}
              </em>
            </Fade>
          </Text>

          <footer className="flex max-w-3xl flex-col gap-5 md:flex-row-reverse md:items-center">
            <Fade triggerOnce cascade>
              <Text asChild className="text-xs md:flex-1 xl:text-base">
                <p>
                  {isInEnglish
                    ? "Learn more about me and the studio, our processes and services explained showing how we can help you through them."
                    : "Descubra mais sobre mim e o estúdio, nossos processos e serviços, explicados mostrando como podemos te ajudar através deles."}
                </p>
              </Text>

              <Button asChild className="mx-0">
                <Link href={isInEnglish ? "/en/about" : "/about"}>
                  {isInEnglish ? "See more" : "Ver mais"}
                </Link>
              </Button>
            </Fade>
          </footer>
        </Container>
      </div>
    </section>
  );
};
