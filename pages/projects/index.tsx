import { AllCases } from "@components/pages/AllCases";
import { ALL_CASES_PT, hygraph, PROJECTS_PAGE_TITLE } from "@core/services";
import { AllCasesPageResponse, ProjectsPageTitleResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AllCases title={data.title} cases={data.cases} />;
};

export default AllProjectsPage;

export const getStaticProps = async () => {
  const allCasesData: AllCasesPageResponse = await hygraph.request(
    ALL_CASES_PT
  );
  const { page }: ProjectsPageTitleResponse = await hygraph.request(
    PROJECTS_PAGE_TITLE
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
