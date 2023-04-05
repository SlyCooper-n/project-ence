import {
  Button,
  Container,
  Heading,
  Input,
  PageAnimation,
  Text,
} from "@/components";
import { useLang } from "@/hooks";

export const Budget = () => {
  const { isInEnglish } = useLang();

  return (
    <PageAnimation className="mx-auto flex min-h-[calc(100vh-115px)] max-w-[1920px] pt-28">
      <Container
        asChild
        className="flex max-w-lg flex-1 flex-col justify-center py-7"
      >
        <main>
          <Heading asChild className="mb-5 text-xl">
            <h1>
              {isInEnglish ? "Start of experience" : "Início da experiência"}
            </h1>
          </Heading>

          <Text asChild className="mb-7 max-w-[500px]">
            <p>
              {isInEnglish ? (
                <>
                  Fill in the form below or send an email to{" "}
                  <a
                    href="mailto:contato@encestudio.com"
                    className="font-semibold"
                  >
                    contato@encestudio.com
                  </a>{" "}
                  to start the experience
                </>
              ) : (
                <>
                  Preencha o formulário abaixo ou envie um email para{" "}
                  <a
                    href="mailto:contato@encestudio.com"
                    className="font-semibold"
                  >
                    contato@encestudio.com
                  </a>{" "}
                  para iniciar a experiência
                </>
              )}
            </p>
          </Text>

          <form
            action="https://formsubmit.co/contato@encestudio.com"
            method="POST"
            className="flex w-full max-w-[500px] flex-col gap-5"
          >
            <header>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_subject"
                value="Experience started!"
              />
              <input
                type="hidden"
                name="_cc"
                value="gabrielvitor.frasao@gmail.com"
              />
              <input
                type="hidden"
                name="_next"
                value="https://encestudio.com/experience-started.html"
              />
            </header>

            <Input.Root>
              <Input.Field type="text" name="name" required autoFocus />

              <Input.Label>{isInEnglish ? "Name" : "Nome"}</Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="text" name="business-name" required />

              <Input.Label>
                {isInEnglish ? "Your business name" : "Nome do seu negócio"}
              </Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="email" name="email" required />

              <Input.Label>Email</Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="number" name="whatsapp" required />

              <Input.Label>WhatsApp</Input.Label>
            </Input.Root>

            <select
              name="services"
              defaultValue="visual-universe-default"
              required
              className="border-b border-white bg-black pt-4 pb-3 pl-2"
            >
              <option value="visual-universe-default" disabled>
                {isInEnglish ? "Services" : "Serviços"}
              </option>

              <option value="visual-universe">
                {isInEnglish
                  ? "Creation of visual universe"
                  : "Criação de universo visual"}
              </option>

              <option value="ui-ux-design">
                {isInEnglish
                  ? "UI/UX Design development for websites and landing pages"
                  : "Desenvolvimento de UI/UX Design para sites e landing pages"}
              </option>
            </select>

            <Button type="submit" className="mx-0 mt-4">
              {isInEnglish ? "Send" : "Enviar"}
            </Button>
          </form>
        </main>
      </Container>

      <section className="hidden flex-1 flex-col bg-budget-slider bg-cover bg-no-repeat lg:flex">
        <Container className="flex flex-1 items-center justify-center">
          <Heading className="max-w-[400px] text-6xl leading-snug">
            {isInEnglish
              ? "After each experience, marks remain."
              : "Após toda experiência, remanescem marcas."}
          </Heading>
        </Container>
      </section>
    </PageAnimation>
  );
};
