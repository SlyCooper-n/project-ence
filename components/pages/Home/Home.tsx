import { Container } from "@components/layouts";
import { CaseBanner, Footer, Navbar } from "@components/modules";
import { Button, VisuallyHidden } from "@components/widgets";
import { HomeProps } from "@core/types";
import { scrollDown } from "@core/utils";
import { motion, useAnimationControls } from "framer-motion";
import Lottie from "lottie-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, heading, highlightedCases, about } = cmsData;

  const isInEnglish = useRouter().pathname.includes("/en");
  const headingControls = useAnimationControls();

  async function handleShowHeading(isMenuOpen: boolean) {
    await headingControls.start({
      opacity: isMenuOpen ? 0 : 1,
      transition: { delay: isMenuOpen ? 0 : 1 },
    });
  }

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>

      <Navbar onMenuOpen={handleShowHeading} />

      <div className="hidden sm:block absolute top-0 right-0 w-3/5 h-full bg-secondary" />

      {/* Heading */}
      <Container asChild>
        <motion.main
          animate={headingControls}
          className="relative h-[calc(100vh-3rem)] flex flex-col justify-center"
        >
          <VisuallyHidden asChild>
            <h1>{heading.title}</h1>
          </VisuallyHidden>

          <motion.img
            src="/images/logo.svg"
            alt="Ence logo"
            className="sm:max-w-[60vw] mb-12"
          />

          <motion.p className="sm:w-4/5 sm:max-w-[929px] mb-12 text-sm sm:text-xl">
            {heading.subtitle}
          </motion.p>

          <motion.ul className="flex sm:justify-end gap-4 text-sm sm:text-base">
            {heading.socialMedia.map((media) => (
              <li key={media.socialMedia}>
                <a
                  href={media.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative capitalize"
                >
                  {media.socialMedia}
                </a>
              </li>
            ))}

            <style jsx>{`
              a.relative::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 3px;
                margin-bottom: -3px;
                background-color: #22223b;
                transition: all 0.3s ease;
              }
              a.relative:hover::before {
                width: 100%;
              }
            `}</style>
          </motion.ul>

          <Lottie
            animationData={scrollDown}
            className="absolute bottom-20 w-12"
          />
        </motion.main>
      </Container>

      {/* Highlighted cases */}
      <section className="-mt-12 mb-16 sm:mb-60 py-36 bg-black text-white">
        <h2 className="mb-5 font-semibold text-2xl text-center sm:text-5xl">
          {isInEnglish ? "Selected Works" : "Trabalhos selecionados"}
        </h2>

        <p className="mb-36 text-center font-normal">
          {isInEnglish
            ? "See the main works developed by Ence."
            : "Veja os principais trabalhos desenvolvidos pela Ence."}
        </p>

        <div className="mb-28">
          <CaseBanner case={highlightedCases.cases[0]} />

          <div className="flex">
            <CaseBanner case={highlightedCases.cases[1]} />

            <CaseBanner case={highlightedCases.cases[1]} />
          </div>
        </div>

        <Link href={isInEnglish ? "/en/projects" : "/projects"}>
          <a>
            <Button
              color="secondary"
              className="w-[180px] sm:w-[280px] mx-auto font-semibold"
            >
              {isInEnglish ? "See all" : "Ver todos"}
            </Button>
          </a>
        </Link>
      </section>

      {/* People */}
      <section id="about" className="w-full mb-16 sm:mb-32">
        <Container className="px-[5vw] flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="lg:max-w-[33.33%] text-center lg:text-start">
            <h2 className="mb-4 text-2xl sm:text-5xl">
              {isInEnglish ? "Behind the studio " : "Por trás da "}{" "}
              <span className="font-emphasis">
                {isInEnglish ? "experience" : "experiência"}
              </span>
              {isInEnglish ? "" : " de cada projeto"}
            </h2>

            <p className="mb-4 text-sm sm:text-base">{about.subtitle}</p>

            <Link href={isInEnglish ? "en/about" : "/about"}>
              <a className="w-fit hidden lg:block">
                <Button type="button" className="w-[280px]">
                  {isInEnglish ? "See more" : "Ver mais"}
                </Button>
              </a>
            </Link>
          </div>

          <img
            src="images/about-img.png"
            alt={`${
              isInEnglish
                ? "illustration about Ence"
                : "ilustração sobre a Ence"
            }`}
            className="-mr-14"
          />

          <Link href={isInEnglish ? "en/about" : "/about"}>
            <a className="w-fit mx-auto block lg:hidden">
              <Button type="button" className="w-[148px]">
                {isInEnglish ? "See more" : "Ver mais"}
              </Button>
            </a>
          </Link>
        </Container>
      </section>

      <section className="h-[585px] flex flex-col justify-center items-center bg-secondary">
        <h2 className="mb-12 text-2xl sm:text-5xl text-center">
          {isInEnglish ? "Let's start your " : "Vamos iniciar sua "}

          <br />

          <span className="font-emphasis">
            {isInEnglish ? "experience?" : "experiência?"}
          </span>
        </h2>

        <p className="max-w-[589px] mb-12 text-center">
          {isInEnglish
            ? "You are just a few clicks away from developing the visual universe of your project, contact us below."
            : "Você está a alguns cliques de desenvolver o universo visual do seu projeto, entre em contato abaixo."}
        </p>

        <Link href={isInEnglish ? "/en/budget" : "/budget"}>
          <a>
            <Button className="w-[148px] lg:w-[280px]">
              {isInEnglish ? "Start experience" : "Iniciar experiência"}
            </Button>
          </a>
        </Link>
      </section>

      <Footer />
    </>
  );
};
