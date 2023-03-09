import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { CaseDetails, Head } from "@/components";
import content from "@/content.json";

export default function CaseDetailsPage({
  caseId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head title="Case" />

      <CaseDetails caseId={caseId} />
    </>
  );
}

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const caseItem = content.cases.find(
    (item) => item.slug === `${params?.slug}`,
  );

  if (!caseItem) throw new Error(`Error trying to find ${params?.slug}`);

  return {
    props: { caseId: caseItem.id },
  };
};

export const getStaticPaths = async () => {
  const slugs = content.cases.map((item) => item.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
};
