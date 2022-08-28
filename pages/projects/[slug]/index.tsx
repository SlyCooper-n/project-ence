import { Project } from "@components/pages";
import { CASE, hygraph } from "@core/services";
import { CaseDataResponse } from "@core/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const ProjectPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Project caseData={data} />;
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const caseData: CaseDataResponse = await hygraph.request(CASE, {
    slug: params?.slug,
    lang: ["pt_BR"],
  });

  return {
    props: {
      data: caseData.case,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { cases }: { cases: { slug: string }[] } = await hygraph.request(`
    query {
      cases(stage: DRAFT) {
        slug
      }
    }
  `);

  const slugs = cases.map((obj) => {
    return {
      params: { slug: obj.slug },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
};
