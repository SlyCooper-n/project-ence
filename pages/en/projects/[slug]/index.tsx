import { Project } from "@components/pages";
import { CASE_EN, hygraph } from "@core/services";
import { CaseDataResponse } from "@core/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const ProjectPageEn = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Project caseData={data} />;
};

export default ProjectPageEn;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const caseData: CaseDataResponse = await hygraph.request(CASE_EN, {
    slug: params?.slug,
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
