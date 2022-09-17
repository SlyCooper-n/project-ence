import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { AllCasesPageProps } from "@core/types";
import { fadeUp } from "@core/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Reveal } from "react-awesome-reveal";

export const AllCases = ({ cases }: AllCasesPageProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <PageContainer headTitle="Ence | Cases">
      <Navbar />

      <h1 className="mt-12 mb-4 text-xl font-bold sm:text-3xl lg:text-5xl">
        {isInEnglish ? "Projects-" : "Projetos-"}
      </h1>

      <p className="mb-10 text-[8px] sm:text-base">
        {isInEnglish
          ? "The following is a selection of experiences."
          : "A seguir, uma seleção de experiências."}
      </p>

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

              <div className="absolute top-0 left-0 w-full h-full p-4 flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 text-xl sm:text-4xl text-white transition-all duration-500" />

              <div className="absolute top-0 right-0 bottom-0 px-4 sm:px-8 flex items-end bg-secondary text-xl sm:text-6xl z-10">
                {project.caseOrder < 10
                  ? "0" + project.caseOrder
                  : project.caseOrder}
              </div>
            </a>
          </Link>
        </Reveal>
      ))}

      <Footer />
    </PageContainer>
  );
};
