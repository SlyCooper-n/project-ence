import { PageContainer } from "@components/layouts";
import { Navbar } from "@components/modules";
import { Button } from "@components/widgets";
import Link from "next/link";

export const Project = () => {
  return (
    <PageContainer headTitle="Ence | Inova">
      <Navbar />

      <div className="flex justify-center items-center">
        <img
          src="/images/zoeira-cooking-banner.png"
          alt="Zoeira Cooking banner"
          // className="hidden sm:block absolute top-16 sm:top-20 w-full max-w-7xl mx-auto"
          className="hidden sm:block w-screen max-w-[1440px] mx-auto mb-4"
        />
      </div>

      <main className="mb-12 text-center text-xs sm:text-base">
        <span className="mb-4 block font-bold">1/x cases</span>

        <h1 className="mb-12 font-bold">
          INOVA | Inovando em soluões nas alturas e telas
        </h1>

        <div className="mb-6 flex flex-col sm:flex-row gap-6 sm:gap-0">
          <p className="flex-1 sm:mr-[20vw] sm:text-start">
            Inovando em serviços em altura, Inova é uma empresa focada em
            realizar os melhores trabalhos em altura e em lugares de difícil
            acesso. Com o objetivo de entregar uma solução econômica e
            inteligente.
          </p>

          <div className="flex-1 sm:text-start">
            <h2 className="mb-2 font-bold">Ficha técnica -</h2>

            <ul className="">
              <li>
                <strong>Serviços: </strong>

                <span>UI/UX Design</span>
              </li>

              <li>
                <strong>Serviços: </strong>

                <span>UI/UX Design</span>
              </li>

              <li>
                <strong>Serviços: </strong>

                <span>UI/UX Design</span>
              </li>

              <li>
                <strong>Serviços: </strong>

                <span>UI/UX Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:text-start">
          <h2 className="mb-2 font-bold">Estratégia de design -</h2>

          <p className="sm:max-w-[50%]">
            Um site de fácil acesso, direto ao que interessa, apresentando os
            principais pontos: Os serviços, sobre a empresa e meios de contato.
          </p>
        </div>
      </main>

      <section className="mb-8 flex flex-col gap-2">
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
        <img src="/images/Frame 6.png" alt="Zoeira Cooking snap" />
      </section>

      <div className="mb-8 flex justify-center items-center gap-4 text-xs sm:text-base">
        <Link href="/">
          <a className="link">Voltar</a>
        </Link>

        <Button
          type="button"
          variant="next-project"
          className="w-1/2 max-w-[200px]"
        />
      </div>
    </PageContainer>
  );
};
