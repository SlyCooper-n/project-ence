import { Anchor, Container, Ence, Text } from "@/components";
import { useLang } from "@/hooks";
import { CTO } from "./components";

export const Footer = () => {
  const { isInEnglish } = useLang();

  return (
    <>
      <CTO />

      <Container
        asChild
        className="flex flex-col items-center gap-9 py-10 md:flex-row md:justify-between md:gap-0 md:py-12"
      >
        <footer className="flex flex-col items-center gap-9 py-10 md:flex-row md:justify-between md:gap-0 md:py-12">
          <Text className="text-center text-xs text-gray sm:text-base">
            <Ence /> - 2020/2023 |{" "}
            {isInEnglish ? "Developed by " : "Desenvolvido por "}
            <Anchor
              href="https://linktr.ee/gabriel_vs_frasao"
              target="_blank"
              className="inline-block after:bg-gray"
            >
              Gabriel VS Frasão
            </Anchor>
          </Text>

          <div className="flex gap-9">
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
        </footer>
      </Container>
    </>
  );
};
