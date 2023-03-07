import { Container, Ence, Text } from "@/components";

export const Footer = () => {
  return (
    <Container
      asChild
      className="flex flex-col items-center gap-9 py-10 md:flex-row md:justify-between md:gap-0 md:py-12"
    >
      <footer>
        <Text className="text-xs text-gray sm:text-base">
          <Ence /> - 2020/2023 | Desenvolvido por{" "}
          <a
            href="https://linktr.ee/gabriel_vs_frasao"
            target="_blank"
            className="inline-block"
          >
            Gabriel VS Frasão
          </a>
        </Text>

        <div className="flex gap-9 sm:text-xl">
          <a href="https://www.instagram.com/encestudio" target="_blank">
            Instagram
          </a>

          <a href="" target="_blank">
            Behance
          </a>
        </div>
      </footer>
    </Container>
  );
};
