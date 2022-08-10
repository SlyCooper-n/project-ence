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
        <main className="my-16 text-center">
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
            className="mx-auto mb-8"
          />

          <p className="text-[8px]">
            Ence é um estúdio de design focado na criação e desenvolvimento de
            Identidade de marca e UI Design. Foi criada para transformar a
            experiência de projetos.
          </p>
        </main>

        {/* Highlighted cases */}
        <section className="mb-16 text-center">
          <h2 className="mb-2 font-bold">
            Veja os principais cases de portfólio
          </h2>

          <div className="flex flex-col gap-5">
            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="mx-auto"
            />

            <img
              src="images/zoeira-cooking-case.png"
              alt="Zoeira Cooking case"
              className="mx-auto"
            />
          </div>
        </section>

        {/* People */}
        <section className="mb-16 text-center">
          <h2 className="mb-2 font-bold">
            Por trás da experiência do estúdio -
          </h2>

          <p className="mb-8 text-[8px]">
            Conheça as pessoas por trás dos projetos do estúdio, conheça um
            pouco sobre eles e veja suas redes.
          </p>

          <div className="relative mb-8 flex justify-center">
            <div className="avatar z-10">
              <div className="w-2/3 rounded-full">
                <img
                  src="https://github.com/slycooper-n.png"
                  alt="Gabriel VS Frasão picture"
                />
              </div>
            </div>

            <div className="avatar -ml-[90px]">
              <div className="w-2/3">
                <img
                  src="/images/joao-vitor-picture.png"
                  alt="Gabriel VS Frasão picture"
                />
              </div>
            </div>
          </div>

          <Button type="button" />
        </section>
      </PageLayout>
    </PageContainer>
  );
};

export default Home;
