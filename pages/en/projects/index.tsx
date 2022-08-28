import { AllCases } from "@components/pages/AllCases";
import { ALL_CASES_EN, hygraph, PROJECTS_PAGE_TITLE_EN } from "@core/services";
import { AllCasesPageResponse, ProjectsPageTitleResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const AllProjectsPageEn = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AllCases title={data.title} cases={data.cases} />;
};

export default AllProjectsPageEn;

export const getStaticProps = async () => {
  const allCasesData: AllCasesPageResponse = await hygraph.request(
    ALL_CASES_EN
  );

  const { page }: ProjectsPageTitleResponse = await hygraph.request(
    PROJECTS_PAGE_TITLE_EN
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
