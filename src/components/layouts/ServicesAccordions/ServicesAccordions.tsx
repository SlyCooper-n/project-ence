import { useState } from "react";

import { Accordion } from "@/components";
import { useLang } from "@/hooks";

export const ServicesAccordions = () => {
  const { isInEnglish } = useLang();
  const [accordionsValue, setAccordionsValue] = useState<string[]>([]);

  function openAll() {
    setAccordionsValue([
      "strategy",
      "web-design",
      "visual-identity",
      "social-branding",
    ]);
  }

  function closeAll() {
    setAccordionsValue([]);
  }

  function toggleAll() {
    if (accordionsValue.length === 0) {
      openAll();
      return;
    }

    closeAll();
  }

  return (
    <Accordion.Root
      type="multiple"
      value={accordionsValue}
      onValueChange={toggleAll}
      className="mx-auto flex max-w-[1920px] flex-col md:flex-row"
    >
      <div className="flex-1">
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

        <Accordion.Item value="web-design">
          <Accordion.Trigger>Web Design</Accordion.Trigger>

          <Accordion.Content>
            {isInEnglish
              ? "Contrary to the opinion of many, I believe that a company does not necessarily need to be on the internet, I don't know why it should be there. But believe that within it there is a sea of opportunities for several companies that you can't even imagine. With different approaches and solutions we can position you there through a website"
              : "Contrariando a opinião de muitos, acredito que não necessariamente uma empresa precisa estar na internet, não sei um motivo para estar lá. Mas acredite que dentro dela existe um mar de oportunidades para diversas empresas que nem imaginam. Com diversas abordagens e soluções podemos te posicionar lá através de um website."}
          </Accordion.Content>
        </Accordion.Item>
      </div>

      <div className="flex-1">
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
      </div>
    </Accordion.Root>
  );
};
