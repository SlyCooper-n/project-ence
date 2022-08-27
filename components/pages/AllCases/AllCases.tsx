import { PageContainer } from "@components/layouts";
import { Navbar } from "@components/modules";
import { AllCasesPageProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";

export const AllCases = ({ title, cases }: AllCasesPageProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <PageContainer headTitle="Ence | Cases">
      <Navbar />

      <h1 className="mt-12 mb-10 text-center text-xl font-bold sm:text-3xl lg:text-5xl">
        {title}
      </h1>

      {cases.map((project) => (
        <Link
          key={project.id}
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
              className="w-full max-w-[1080px] max-h-[350px] object-cover hover:scale-[1.03] transition-transform duration-500"
            />
          </a>
        </Link>
      ))}
    </PageContainer>
  );
};
