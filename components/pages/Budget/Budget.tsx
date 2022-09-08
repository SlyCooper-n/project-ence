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
    <PageContainer headTitle="Ence | ">
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-xs sm:text-lg mb-8">
            {isInEnglish
              ? "Fill in the form below and we will contact you as soon as possible."
              : "Preencha o formulário abaixo e entraremos em contato com você o mais rápido possível."}
          </h1>

          <form
            action=""
            method="POST"
            className="w-full flex flex-col items-center gap-4"
          >
            <Input
              type="text"
              name="name"
              placeholder={isInEnglish ? "Your name" : "Seu nome"}
              autoFocus
              required
            />

            <Input
              type="text"
              name="company"
              placeholder={isInEnglish ? "Company name" : "Nome da sua empresa"}
              required
            />

            <Input type="email" name="email" placeholder="Email" required />

            <PatternFormat
              name="phone"
              format="+## (##) #####-####"
              defaultValue="+55 (__) _____-____"
              allowEmptyFormatting
              mask="_"
              className="w-full px-2 py-1 border border-primary rounded-sm"
            />

            {/* <Select
              container={select1Ref.current!}
              placeholder={
                isInEnglish
                  ? "How big is your company?"
                  : "Qual é o tamanho da sua empresa?"
              }
            >
              <SelectItem
                value="small"
                text={isInEnglish ? "Small" : "Pequena"}
              />
              <SelectItem
                value="medium"
                text={isInEnglish ? "Medium" : "Média"}
              />
            </Select>
            <div
              ref={select1Ref}
              className="w-full -mt-2 flex justify-center"
            /> */}

            <select
              name="company-size"
              className="w-full px-2 py-1 border border-primary rounded-sm"
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
              className="w-full px-2 py-1 border border-primary rounded-sm"
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
              className="w-full px-2 py-1 border border-primary rounded-sm"
            >
              <option value="" disabled selected>
                {isInEnglish
                  ? "Which service are you looking for?"
                  : "Qual serviço procura?"}
              </option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="medium">Medium</option>
            </select>

            {/* company size, company occupation, service */}
            <Button type="submit" className="w-[148px]">
              {isInEnglish ? "Send" : "Enviar"}
            </Button>
          </form>
        </main>

        <Footer />
      </div>
    </PageContainer>
  );
};
