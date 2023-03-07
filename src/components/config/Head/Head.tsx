import NextHead from "next/head";

interface HeadProps {
  title: string;
  description?: string;
}

export const Head = ({ title, description }: HeadProps) => {
  return (
    <NextHead>
      <title>{title} | Ence Studio</title>

      <meta
        name="description"
        content={
          description ??
          "Estúdio de design focado na criação e desenvolvimento de Identidade de marca e UI Design. criado para transformar a experiência de projetos"
        }
      />
    </NextHead>
  );
};
