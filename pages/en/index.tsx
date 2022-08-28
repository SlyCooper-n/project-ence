import { Home } from "@components/pages";
import { HOMEPAGE, hygraph } from "@core/services";
import { HomepageResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const HomeEn = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Home cmsData={props.cmsData} />;
};

export default HomeEn;

export const getStaticProps = async () => {
  const { page } = await hygraph.request<HomepageResponse>(HOMEPAGE, {
    lang: ["en"],
  });

  return {
    props: {
      cmsData: page,
    },
  };
};
