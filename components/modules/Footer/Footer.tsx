import { Container } from "@components/layouts";
import { useRouter } from "next/router";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <footer className={`pt-8 pb-5 ${className ?? ""}`}>
      <Container className="text-[8px] sm:text-base font-semibold">
        {isInEnglish
          ? "Ence - all rights reserved 2020-2022 | Developed by "
          : "Ence - todos os direitos reservados 2020-2022 | Desenvolvido por "}

        <a
          href="https://github.com/SlyCooper-n"
          target="_blank"
          rel="noreferrer"
          className="ml-1 font-semibold"
        >
          Gabriel VS Frasão
        </a>
      </Container>
    </footer>
  );
};
