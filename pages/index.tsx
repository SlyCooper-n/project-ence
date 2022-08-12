import { Home } from "@components/pages";
import { HOMEPAGE_PT, hygraph } from "@core/services";
import { HomepageResponse } from "@core/types";
import type { InferGetStaticPropsType } from "next";

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Home cmsData={props.cmsData} />;
};

export default HomePage;

export const getStaticProps = async () => {
  const { homepages } = await hygraph.request<HomepageResponse>(HOMEPAGE_PT);

  return {
    props: {
      cmsData: homepages[0],
    },
  };
};
