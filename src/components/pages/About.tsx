import content from "@/content.json";
import { useLang } from "@/hooks";
import { Accordion, Container, Heading, Text } from "../modules";

export const About = () => {
  const { isInEnglish, activeLanguage } = useLang();

  const { processes } = content.pages.about;

  return (
    <Container className="py-16 md:py-36">
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

              <Accordion.Content>xablau</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <Accordion.Root type="multiple">
            <Accordion.Item value="social-branding">
              <Accordion.Trigger>
                {isInEnglish ? "Social Branding" : "Branding Social"}
              </Accordion.Trigger>

              <Accordion.Content>ai caliquinha</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      <section className="py-16 md:py-36">
        <Heading className="mb-12">
          {isInEnglish ? "About Ence" : "Sobre a Ence"}
          <Text className="ml-3 inline-block text-xl font-normal text-white/25">
            {isInEnglish ? "processes" : "processos"}
          </Text>
        </Heading>

        <Text asChild className="mb-16 block text-xl font-semibold not-italic">
          <em>
            {isInEnglish
              ? "Once you've found out who's in charge of the studio, see what services I specialize in."
              : "Depois de descobrir o responsável pelo estúdio, veja quais são os serviços em que sou especialista."}
          </em>
        </Text>

        <ol>
          {processes.map((process, i) => {
            const index = i < 9 ? `0${++i}` : ++i;

            return (
              <li key={process.title.en}>
                <span>{index}</span>

                <div>
                  <Heading asChild>
                    <h3>{process.title[activeLanguage]}</h3>
                  </Heading>

                  <Text asChild>
                    <p>{process.description[activeLanguage]}</p>
                  </Text>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Container>
  );
};
