import { PageContainer } from "@components/layouts";
import { AllCasesPageProps } from "@core/types";
import Link from "next/link";

export const AllCases = ({ cases }: AllCasesPageProps) => {
  return (
    <PageContainer headTitle="Ence | Cases">
      <h1>Veja os principais cases de portfólio</h1>
      {cases.map((project) => (
        <Link key={project.id} href={project.slug}>
          <a>
            <img src={project.banner.url} alt={project.projectName} />
          </a>
        </Link>
      ))}
    </PageContainer>
  );
};
