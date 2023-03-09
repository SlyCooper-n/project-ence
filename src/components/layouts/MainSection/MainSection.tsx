import { Anchor, Container, Heading, Text } from "@/components";
import { useLang } from "@/hooks";
import { HorizontalGraph, VerticalGraph } from "./components";

export const MainSection = () => {
  const { isInEnglish } = useLang();

  return (
    <>
      <main className="relative mx-auto flex min-h-[685px] max-w-[1920px] flex-col overflow-hidden sm:my-20 sm:min-h-[312px]">
        <VerticalGraph />

        <HorizontalGraph />

        <Container className="z-10 flex flex-1 flex-col justify-center">
          <Heading
            asChild
            className="text-3xl md:text-6xl lg:text-7xl lg:leading-tight"
          >
            <h1>
              {isInEnglish
                ? "After each experience, marks remain."
                : "Após toda experiência, remanescem marcas."}
            </h1>
          </Heading>

          <Text asChild className="mt-6 max-w-sm md:hidden">
            <p>
              {isInEnglish
                ? "Design studio focused on visual identities, UI/UX Design and social branding."
                : "Estúdio de design focado em identidades visuais, UI/UX Design e Branding social."}
            </p>
          </Text>
        </Container>
      </main>

      <Container asChild>
        <section className="hidden items-center justify-between py-6 md:flex">
          <div className="flex gap-7">
            <Anchor href="https://www.instagram.com/encestudio" target="_blank">
              Instagram
            </Anchor>

            <Anchor
              href="https://www.behance.net/joaovitorn-ence"
              target="_blank"
            >
              Behance
            </Anchor>
          </div>

          <Text asChild>
            {isInEnglish ? (
              <p>
                Design studio focused on visual identities, <br /> UI/UX Design
                e social branding.
              </p>
            ) : (
              <p>
                Estúdio de design focado em identidades <br /> visuais, UI/UX
                Design e Branding social.
              </p>
            )}
          </Text>
        </section>
      </Container>
    </>
  );
};
