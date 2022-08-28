import { PageContainer } from "@components/layouts";
import { Navbar } from "@components/modules";
import { AllCasesPageProps } from "@core/types";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Reveal } from "react-awesome-reveal";

export const AllCases = ({ title, cases }: AllCasesPageProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  const fadeUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(1.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return (
    <PageContainer headTitle="Ence | Cases">
      <Navbar />

      <h1 className="mt-12 mb-10 text-center text-xl font-bold sm:text-3xl lg:text-5xl">
        {title}
      </h1>

      {cases.map((project) => (
        <Reveal key={project.id} triggerOnce keyframes={fadeUp}>
          <Link
            href={
              isInEnglish
                ? `/en/projects/${project.slug}`
                : `/projects/${project.slug}`
            }
          >
            <a className="block max-w-[1080px] mx-auto mb-4 overflow-hidden">
              <img
                src={project.banner.url}
                alt={project.projectName}
                className="slide-up w-full max-w-[1080px] max-h-[350px] object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </a>
          </Link>
        </Reveal>
      ))}
    </PageContainer>
  );
};
