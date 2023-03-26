import NextHead from "next/head";

interface HeadProps {
  title: string;
  description?: string;
  overwriteTitle?: boolean;
}

export const Head = ({ title, description, overwriteTitle }: HeadProps) => {
  return (
    <NextHead>
      <title>{overwriteTitle ? title : `${title} - Ence`}</title>

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
