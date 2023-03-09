import { Button, Container, Heading, Input, Text } from "@/components";
import { useLang } from "@/hooks";

export const Budget = () => {
  const { isInEnglish } = useLang();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-115px)] max-w-[1920px]">
      <Container
        asChild
        className="flex max-w-[808px] flex-1 flex-col items-center justify-center py-16"
      >
        <main>
          <Heading asChild className="mb-5 text-2xl md:text-3xl">
            <h1>
              {isInEnglish ? "Start of experience" : "Início da experiência"}
            </h1>
          </Heading>

          <Text asChild className="mb-20 max-w-[500px] text-center md:text-xl">
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

          <form action="" className="flex w-full max-w-[500px] flex-col gap-9">
            <Input.Root>
              <Input.Field type="text" name="name" required autoFocus />

              <Input.Label>{isInEnglish ? "Name" : "Nome"}</Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="text" name="business- requiredname" />

              <Input.Label>
                {isInEnglish ? "Your business name" : "Nome do seu negócio"}
              </Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="text" name="email" required />

              <Input.Label>Email</Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="number" name="whatsapp" required />

              <Input.Label>WhatsApp</Input.Label>
            </Input.Root>

            <Input.Root>
              <Input.Field type="text" name="services" required />

              <Input.Label>{isInEnglish ? "Services" : "Serviços"}</Input.Label>
            </Input.Root>

            <Button type="submit" className="mx-0 mt-11">
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
    </div>
  );
};
