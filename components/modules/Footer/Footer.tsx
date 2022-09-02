import { useRouter } from "next/router";

export const Footer = () => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <div className="flex pt-8 pb-5">
      Ence{" "}
      {isInEnglish ? "all rights reserved" : "todos os direitos reservados"}{" "}
      2020-2022
    </div>
  );
};
