import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button, Input } from "@components/widgets";
import { useRouter } from "next/router";
import { useRef } from "react";
import { PatternFormat } from "react-number-format";

export const Budget = () => {
  const isInEnglish = useRouter().pathname.includes("/en");
  const select1Ref = useRef<HTMLDivElement>(null);
  const select2Ref = useRef<HTMLDivElement>(null);
  const select3Ref = useRef<HTMLDivElement>(null);

  return (
    <PageContainer
      headTitle={isInEnglish ? "Ence | Budget" : "Ence | Orçamento"}
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col justify-center">
          <h1 className="mb-4 text-lg sm:text-2xl">
            {isInEnglish
              ? "Beginning of the experience-"
              : "Início da experiência-"}
          </h1>

          <p className="mb-12 text-[8px] sm:text-base">
            {isInEnglish
              ? "Fill in the form below to start the experience"
              : "Preencha o formulário abaixo para iniciar a experiência"}
          </p>

          <form action="" method="POST" className="w-full flex flex-col gap-4">
            <Input
              type="text"
              name="name"
              placeholder={isInEnglish ? "Your name-" : "Seu nome-"}
              autoFocus
              required
            />

            <Input
              type="text"
              name="company"
              placeholder={
                isInEnglish ? "Company name-" : "Nome da sua empresa-"
              }
              required
            />

            <Input type="email" name="email" placeholder="Email-" required />

            <PatternFormat
              name="phone"
              format="+## (##) #####-####"
              defaultValue="+55 (__) _____-____"
              allowEmptyFormatting
              mask="_"
              className="w-full px-2 py-2 bg-secondary border-2 border-black rounded-sm"
            />

            <select
              name="company-size"
              className="w-full px-2 py-2 bg-secondary border-2 border-black rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "How big is your company?"
                  : "Qual é o tamanho da sua empresa?"}
              </option>
              <option value="small">{isInEnglish ? "Small" : "Pequena"}</option>
              <option value="medium">{isInEnglish ? "Medium" : "Média"}</option>
            </select>

            <select
              name="company-area"
              className="w-full px-2 py-2 bg-secondary border-2 border-black rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "What is the company area?"
                  : "Onde sua empresa atua?"}
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>

            <select
              name="service"
              className="w-full px-2 py-2 bg-secondary border-2 border-black rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "Which service are you looking for?"
                  : "Qual serviço procura?"}
              </option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="medium">Medium</option>
            </select>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-8">
              <Button type="submit" className="w-[240px]">
                {isInEnglish ? "Request budget" : "Solicitar orçamento"}
              </Button>

              <p className="text-[8px] sm:text-base">
                {isInEnglish
                  ? "Thank you very much! This was the first step, wait for new updates."
                  : "Muito obrigado! Esse foi o primeiro passo, aguarde novas atualizações."}
              </p>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </PageContainer>
  );
};
