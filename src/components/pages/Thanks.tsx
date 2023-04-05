import { useLang } from "@/hooks";
import { PageAnimation } from "../config";
import { Anchor, Container, Heading, Text } from "../modules";

export const Thanks = () => {
  const { isInEnglish } = useLang();

  return (
    <PageAnimation>
      <div className="flex min-h-screen place-items-center bg-gray pt-36 pb-12 text-black">
        <Container asChild>
          <main>
            <img
              src="/images/thanks-logo.svg"
              alt=""
              className="mx-auto mb-12 md:mb-14"
            />

            <div className="relative mb-12 md:mb-14">
              <img src="/images/thanks-graph.svg" alt="" className="w-full" />

              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                <Heading className="text-center sm:text-3xl md:mb-4 md:text-6xl">
                  Você acabou de realizar o primeiro passo para iniciar sua
                  experiência.
                </Heading>

                <Text className="sm:text-normal mx-auto block text-center text-sm md:text-lg lg:text-xl">
                  Enviarei uma resposta em breve, conversamos logo mais.
                </Text>
              </div>
            </div>

            <div className="flex justify-center gap-7 sm:text-xl">
              <Anchor
                href="https://www.instagram.com/encestudio"
                target="_blank"
                className="after:bg-black"
              >
                Instagram
              </Anchor>

              <Anchor
                href="https://www.behance.net/joaovitorn-ence"
                target="_blank"
                className="after:bg-black"
              >
                Behance
              </Anchor>
            </div>
          </main>
        </Container>
      </div>
    </PageAnimation>
  );
};
