import {
  Button,
  CasesSection,
  Container,
  Head,
  Heading,
  MainSection,
} from "@/components";
import { useLang } from "@/hooks";
import Link from "next/link";

export const Home = () => {
  const { isInEnglish } = useLang();

  return (
    <>
      <Head title={isInEnglish ? "Home" : "Início"} />

      <MainSection />

      <CasesSection />

      <Container asChild className="py-24 md:py-36 lg:py-48">
        <section>
          <Heading className="mb-9 md:text-2xl">
            {isInEnglish ? "About our work" : "Sobre nosso trabalho"}
          </Heading>

          <div className="flex flex-col gap-36 md:flex-row md:items-end">
            <p className="flex flex-col gap-12">
              <strong className="text-3xl lg:text-4xl">
                {isInEnglish
                  ? "The perfect union between strategy and visuals which generates results for solid brands that remain from experience."
                  : "A união perfeita entre estratégia e visual que geram resultados para marcas fortes remanescentes de uma experiência."}
              </strong>

              <em className="lg:text-2xl">
                {isInEnglish
                  ? "Design is the most potent tool for any company that wants to communicate efficiently with its customers and get results through it."
                  : "Design é a ferramenta mais poderosa de toda e qualquer empresa que queira se comunicar com seus clientes de forma eficiente e obter resultados através disso."}
              </em>
            </p>

            <p className="flex flex-col items-end gap-5">
              <strong className="block text-4xl lg:text-5xl">
                {isInEnglish ? "+Results" : "+Resultados"}
              </strong>

              <em className="max-w-[180px] text-xs md:max-w-[252px]">
                {isInEnglish
                  ? "For more results, impacts, expansions and gains through the strategic design."
                  : "Por mais resultados, impactos, expansões e ganhos através do design estratégico."}
              </em>
            </p>
          </div>
        </section>
      </Container>

      <section className="mx-auto max-w-[1920px] border-y md:border-y-2">
        <Container className="py-10 md:py-24">
          <Heading className="md:text-2xl">
            {isInEnglish ? "Behind the experience" : "Por trás da experiência"}
          </Heading>
        </Container>

        <div className="flex flex-col gap-7 border-t md:flex-row md:items-center md:gap-0 md:border-t-2">
          <picture className="md:w-[320px] lg:w-[510px]">
            <source
              media="(max-width: 767px)"
              srcSet="/images/author-mobile.png"
            />

            <source
              media="(min-width: 768px)"
              srcSet="/images/author-desktop.png"
            />

            <img
              src="/images/author-desktop.png"
              alt="João Vitor picture"
              className="w-full object-cover"
            />
          </picture>

          <Container className="mb-14 flex flex-col gap-24 md:mb-0 md:flex-1 md:gap-12 lg:gap-24">
            <p className="flex flex-col gap-16 md:gap-12">
              <strong className="text-xl lg:text-2xl">
                {isInEnglish
                  ? "The only person behind those projects, a person who fell in love with his experience in developing and building brands, João Vitor."
                  : "A única pessoa por trás desses projetos, uma pessoa que se apaixonou pela experiência vivida no desenvolvimento e construção de marcas, João Vitor."}
              </strong>

              <em className="lg:text-xl">
                {isInEnglish
                  ? "João Vitor is a designer with 4 years of career working with Brand Identity, Branding & UI Design. He has developed projects for startups and also in the Fashion & Gastronomy industries."
                  : "João Vitor é um designer com 4 anos de carreira trabalhando com Identidade de marca, Branding & UI Design. Desenvolveu projetos para startups e também nas indústrias de Moda & Gastronomia."}
              </em>
            </p>

            <footer className="flex flex-col gap-5 md:flex-row-reverse md:items-center">
              <p className="text-xs md:flex-1 xl:text-base">
                {isInEnglish
                  ? "Learn more about me and the studio, our processes and services explained showing how we can help you through them."
                  : "Descubra mais sobre mim e o estúdio, nossos processos e serviços, explicados mostrando como podemos te ajudar através deles."}
              </p>

              <Button asChild className="mx-0 w-44 xl:w-64 xl:py-6">
                <Link href={isInEnglish ? "/en/about" : "/about"}>
                  {isInEnglish ? "See more" : "Ver mais"}
                </Link>
              </Button>
            </footer>
          </Container>
        </div>
      </section>

      <Container asChild>
        <section className="flex flex-col items-center gap-12 bg-cto-graph bg-cover bg-center bg-no-repeat py-48 md:py-60">
          <Heading className="text-center text-4xl underline underline-offset-4 md:text-5xl">
            {isInEnglish ? (
              <>
                Let&apos;s start your <br /> experience!?
              </>
            ) : (
              <>
                Vamos dar início à sua <br /> experiência!?
              </>
            )}
          </Heading>

          <p className="mx-auto w-fit text-center md:text-xl">
            {isInEnglish ? (
              <>
                Contact us to start to <br /> develop your project.
              </>
            ) : (
              <>
                Entre em contato para comerçarmos a <br /> desenvolver seu
                projeto.
              </>
            )}
          </p>
        </section>
      </Container>
    </>
  );
};
