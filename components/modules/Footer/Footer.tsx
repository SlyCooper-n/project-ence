import { useRouter } from "next/router";

export const Footer = () => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <div className="flex pt-8 pb-5 text-xs sm:text-base">
      {isInEnglish
        ? "Ence - all rights reserved 2020-2022 | Developed by "
        : "Ence - todos os direitos reservados 2020-2022 | Desenvolvido por "}
      <a
        href="https://github.com/SlyCooper-n"
        target="_blank"
        rel="noreferrer"
        className="ml-1"
      >
        Gabriel VS Frasão
      </a>
    </div>
  );
};
