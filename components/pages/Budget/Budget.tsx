import { Container } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button, Input } from "@components/widgets";
import Head from "next/head";
import { useRouter } from "next/router";
import { PatternFormat } from "react-number-format";

export const Budget = () => {
  const isInEnglish = useRouter().pathname.includes("/en");
  const { submitted } = useRouter().query;

  return (
    <div className="flex flex-col">
      <Head>
        <title>{isInEnglish ? "Ence | Budget" : "Ence | Orçamento"}</title>
      </Head>

      <Navbar />

      <Container asChild>
        <main className="flex-1 flex flex-col justify-center">
          <h1 className="mb-4 px-[2.5vw] text-xl sm:text-4xl">
            {isInEnglish
              ? "Beginning of the experience-"
              : "Início da experiência-"}
          </h1>

          <p className="mb-12 px-[2.5vw] text-[8px] sm:text-base">
            {isInEnglish
              ? "Fill in the form below to start the experience"
              : "Preencha o formulário abaixo para iniciar a experiência"}
          </p>

          <form
            action="https://formsubmit.co/contato@encestudio.com"
            method="POST"
            className="w-full flex flex-col gap-4"
          >
            {/* formsubmit config */}
            <header>
              <input
                type="hidden"
                name="_next"
                value={`https://encestudio.com${
                  isInEnglish ? "/en" : ""
                }/budget.html?submitted=true`}
              />

              <input
                type="hidden"
                name="_subject"
                value="Experiência iniciada!"
              />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="box" />
            </header>

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
              className="w-full px-2 py-2 bg-secondary text-sm sm:text-base font-semibold border-2 border-black rounded-sm"
            />

            <Input
              type="text"
              name="social-media"
              placeholder={
                isInEnglish
                  ? "What are the social media of your company?"
                  : "Quais são as redes da sua empresa?"
              }
              description={
                isInEnglish
                  ? "(if not applicable, specify)"
                  : "(caso não tenha, especifique)"
              }
              required
            />

            <Input
              type="text"
              name="company-area"
              placeholder={
                isInEnglish
                  ? "In which market does your company operate?"
                  : "Em qual mercado sua empresa atua?"
              }
              required
            />

            <select
              name="company-size"
              required
              className="w-full px-2 py-2 bg-secondary text-sm sm:text-base font-semibold border-2 border-black rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "How big is your company?"
                  : "Qual é o tamanho da sua empresa?"}
              </option>

              <option value="liberal-professional">
                {isInEnglish ? "Liberal professional" : "Profissional liberal"}
              </option>

              <option value="small">
                {isInEnglish
                  ? "Micro (2-10 employees)"
                  : "Micro (2-10 funcionários)"}
              </option>

              <option value="small">
                {isInEnglish
                  ? "Small (11-50 employees"
                  : "Pequena (11-50 funcionários)"}
              </option>

              <option value="medium">
                {isInEnglish
                  ? "Medium (50-100 employees)"
                  : "Média (50-100 funcionários)"}
              </option>

              <option value="medium">
                {isInEnglish
                  ? "Big (100+ employees)"
                  : "Grande (100+ funcionários)"}
              </option>
            </select>

            <select
              name="experience"
              required
              className="w-full px-2 py-2 bg-secondary text-sm sm:text-base font-semibold border-2 border-black rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "Which experience are you looking for?"
                  : "Qual experiência está procurando?"}
              </option>

              <option value="visual-universe">
                {isInEnglish
                  ? "Creation of visual universe"
                  : "Criação de universo visual"}
              </option>

              <option value="ui-ux-design">
                {isInEnglish
                  ? "Development of UI/UX Design for websites and landing pages"
                  : "Desenvolvimento de UI/UX Design para sites e landing pages"}
              </option>
            </select>

            <footer className="mt-8 px-[2.5vw] flex flex-col sm:flex-row items-center gap-8">
              <Button type="submit" className="w-[240px]">
                {isInEnglish ? "Request budget" : "Solicitar orçamento"}
              </Button>

              <p
                id="submitted"
                className={`text-[8px] sm:text-base ${
                  submitted ? "block" : "hidden"
                }`}
              >
                {isInEnglish
                  ? "Thank you very much! This was the first step, wait for new updates."
                  : "Muito obrigado! Esse foi o primeiro passo, aguarde novas atualizações."}
              </p>
            </footer>
          </form>
        </main>
      </Container>

      <Footer />
    </div>
  );
};
