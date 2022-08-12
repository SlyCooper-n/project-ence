import { Home } from "@components/pages";
import { HOMEPAGE_EN, hygraph } from "@core/services";
import { HomepageResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const HomeEn = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Home cmsData={props.cmsData} />;
};

export default HomeEn;

export const getStaticProps = async () => {
  const { homepages } = await hygraph.request<HomepageResponse>(HOMEPAGE_EN);

  return {
    props: {
      cmsData: homepages[0],
    },
  };
};
