import { PageContainer, PageLayout } from "@components/layouts";
import { Button, VisuallyHidden } from "@components/widgets";
import { useTheme } from "@core/hooks";
import { hygraph } from "@core/services/graphql";
import { HOMEPAGE_PT } from "@core/services/graphql/queries";
import type { GetStaticProps } from "next";

interface HomeProps {
  data: any;
}

const Home = ({ data }: HomeProps) => {
  const { theme } = useTheme();

  console.log(data);

  return (
    <PageContainer headTitle="Ence | Home">
      <PageLayout>
        {/* Heading */}
        <main className="my-16 sm:my-32 text-center">
          <VisuallyHidden asChild>
            <h1>Ence</h1>
          </VisuallyHidden>

          <img
            src={
              theme === "light"
                ? "/images/logo-ence-black.svg"
                : "/images/logo-ence-white.svg"
            }
            alt="Ence logo"
            className="sm:w-[100px] mx-auto mb-8"
          />

          <p className="sm:w-4/5 max-w-[400px] sm:max-w-[929px] mx-auto text-[8px] sm:text-xl">
            Ence é um estúdio de design focado na criação e desenvolvimento de
            Identidade de marca e UI Design. Foi criada para transformar a
            experiência de projetos.
          </p>
        </main>

        {/* Highlighted cases */}
        <section className="mb-16 sm:mb-64 text-center">
          <h2 className="mb-2 sm:mb-12 font-bold sm:text-6xl">
            Veja os principais cases de portfólio
          </h2>

          <div className="w-4/5 mx-auto flex flex-col items-center gap-5">
            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="w-full max-w-[1080px] max-h-[350px]"
            />

            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="w-full max-w-[1080px] max-h-[350px]"
            />
          </div>
        </section>

        {/* People */}
        <section className="w-4/5 sm:w-auto mx-auto mb-16 sm:mb-32 text-center">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:flex-1 lg:mr-4">
              <h2 className="mb-2 sm:mb-4 font-bold sm:text-5xl lg:text-start">
                Por trás da experiência do estúdio -
              </h2>

              <p className="w-2/3 lg:w-auto mx-auto mb-8 text-[8px] sm:text-lg lg:text-start">
                Conheça as pessoas por trás dos projetos do estúdio, conheça um
                pouco sobre eles e veja suas redes.
              </p>

              <Button
                type="button"
                variant="see-more"
                className="w-[200px] hidden lg:block"
              />
            </div>

            <div className="lg:flex-[2] relative mb-8 flex justify-center">
              <img
                src="https://github.com/slycooper-n.png"
                alt="Gabriel VS Frasão picture"
                className="w-2/3 max-w-[250px] lg:max-w-[700px] rounded-full z-10 translate-x-1/4 lg:translate-x-1/4 flex-shrink-0"
              />

              <img
                src="/images/joao-vitor-picture.png"
                alt="Gabriel VS Frasão picture"
                className="w-2/3 max-w-[250px] lg:max-w-[700px] rounded-full -translate-x-1/4 lg:-translate-x-1/4 flex-shrink-0"
              />
            </div>
          </div>

          <Button
            type="button"
            variant="see-more"
            className="w-[148px] lg:hidden"
          />
        </section>
      </PageLayout>
    </PageContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { homepages } = await hygraph.request(HOMEPAGE_PT);

  return {
    props: {
      data: homepages[0],
    },
  };
};
