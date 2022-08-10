import { PageContainer, PageLayout } from "@components/layouts";
import { Button, VisuallyHidden } from "@components/widgets";
import { useTheme } from "@core/hooks";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { theme } = useTheme();

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

          <p className="text-[8px] sm:text-xl sm:w-4/5 sm:mx-auto">
            Ence é um estúdio de design focado na criação e desenvolvimento de{" "}
            <br className="hidden xl:block" /> Identidade de marca e UI Design.
            Foi criada para transformar a experiência{" "}
            <br className="hidden xl:block" /> de projetos.
          </p>
        </main>

        {/* Highlighted cases */}
        <section className="mb-16 sm:mb-64 text-center">
          <h2 className="mb-2 sm:mb-12 font-bold sm:text-6xl">
            Veja os principais cases de portfólio
          </h2>

          <div className="sm:w-4/5 mx-auto flex flex-col items-center gap-5">
            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="sm:w-full max-w-[1080px] max-h-[350px]"
            />

            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="sm:w-full max-w-[1080px] max-h-[350px]"
            />
          </div>
        </section>

        {/* People */}
        <section className="mb-16 sm:mb-32 text-center">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <h2 className="mb-2 sm:mb-4 font-bold sm:text-5xl lg:text-start">
                Por trás da experiência do estúdio -
              </h2>

              <p className="mb-8 text-[8px] sm:text-lg lg:text-start">
                Conheça as pessoas por trás dos projetos do estúdio, conheça um
                pouco sobre eles e veja suas redes.
              </p>

              <Button
                type="button"
                variant="see-more"
                className="w-[200px] hidden lg:block"
              />
            </div>

            <div className="flex-[2] relative mb-8 flex justify-center">
              <img
                src="https://github.com/slycooper-n.png"
                alt="Gabriel VS Frasão picture"
                className="w-2/3 max-w-[250px] rounded-full z-10 translate-x-[60px] lg:translate-x-[90px] flex-shrink-0"
              />

              <img
                src="/images/joao-vitor-picture.png"
                alt="Gabriel VS Frasão picture"
                className="w-2/3 max-w-[250px] rounded-full -translate-x-[60px] lg:-translate-x-[90px] flex-shrink-0"
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
