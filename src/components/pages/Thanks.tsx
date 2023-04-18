import { useLang } from "@/hooks";
import { PageAnimation } from "../config";
import { Anchor, Container, Heading, Text } from "../modules";

export const Thanks = () => {
  const { isInEnglish } = useLang();

  return (
    <PageAnimation>
      <div className="flex min-h-screen flex-col place-items-center pb-12">
        <Container asChild>
          <main className="flex flex-1 flex-col justify-between">
            <div />

            <div className="relative mb-12 md:mb-14">
              <img src="/images/thanks-graph.svg" alt="" className="w-full" />

              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                <Heading className="text-center sm:text-3xl md:mb-4 md:text-6xl">
                  {isInEnglish
                    ? "You've just taken the first step to start your experience."
                    : "Você acabou de realizar o primeiro passo para iniciar sua experiência."}
                </Heading>

                <Text className="sm:text-normal mx-auto block text-center text-sm md:text-lg lg:text-xl">
                  {isInEnglish
                    ? "I'll send you a reply soon, we'll talk later."
                    : "Enviarei uma resposta em breve, conversamos logo mais."}
                </Text>
              </div>
            </div>

            <div className="flex justify-center gap-7 sm:text-xl">
              <Anchor
                href="https://www.instagram.com/encestudio"
                target="_blank"
              >
                Instagram
              </Anchor>

              <Anchor
                href="https://www.behance.net/joaovitorn-ence"
                target="_blank"
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
