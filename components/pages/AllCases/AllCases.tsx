import { Container } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { usePageConfig } from "@core/hooks";
import { AllCasesPageProps } from "@core/types";
import { fadeUp } from "@core/utils";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Reveal } from "react-awesome-reveal";

export const AllCases = ({ cases }: AllCasesPageProps) => {
  usePageConfig();
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <>
      <Head>
        <title>Ence | Cases</title>
      </Head>

      <Navbar />

      <Container asChild>
        <main>
          <h1 className="mt-12 mb-4 text-xl font-bold sm:text-3xl lg:text-5xl">
            Cases exp-
          </h1>

          <h2 className="mb-10 text-[8px] sm:text-base">
            {isInEnglish
              ? "The following is a selection of remaining marks of experiences."
              : "A seguir uma seleção de marcas remanescentes de experiências."}
          </h2>
        </main>
      </Container>

      <Container asChild>
        <section>
          {cases.map((project) => (
            <Reveal key={project.id} triggerOnce keyframes={fadeUp}>
              <Link
                href={
                  isInEnglish
                    ? `/en/projects/${project.slug}`
                    : `/projects/${project.slug}`
                }
              >
                <a className="group relative max-h-[350px] h-fit mx-auto mb-4 flex items-end overflow-hidden">
                  <img
                    src={project.banner.url}
                    alt={project.projectName}
                    className="slide-up w-full max-h-[350px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 text-xl sm:text-4xl text-white transition-all duration-500" />

                  <div className="absolute top-0 right-0 bottom-0 w-[85px] sm:w-[230px] flex justify-center items-end bg-black text-secondary text-5xl sm:text-[158px] font-emphasis leading-[115px] z-10">
                    {project.caseOrder < 10
                      ? "0" + project.caseOrder
                      : project.caseOrder}
                  </div>
                </a>
              </Link>
            </Reveal>
          ))}
        </section>
      </Container>

      <Footer />
    </>
  );
};
