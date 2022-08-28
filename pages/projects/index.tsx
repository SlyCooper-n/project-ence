import { AllCases } from "@components/pages/AllCases";
import { ALL_CASES, hygraph, PROJECTS_PAGE_TITLE } from "@core/services";
import { AllCasesPageResponse, ProjectsPageTitleResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AllCases title={data.title} cases={data.cases} />;
};

export default AllProjectsPage;

export const getStaticProps = async () => {
  const allCasesData: AllCasesPageResponse = await hygraph.request(ALL_CASES, {
    lang: ["pt_BR"],
  });
  const { page }: ProjectsPageTitleResponse = await hygraph.request(
    PROJECTS_PAGE_TITLE,
    {
      lang: ["pt_BR"],
    }
  );

  return {
    props: {
      data: {
        cases: allCasesData.cases,
        title: page.highlightedCases.title,
      },
    },
  };
};
