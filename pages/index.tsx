import { Home } from "@components/pages";
import { HOMEPAGE, hygraph } from "@core/services";
import { HomepageResponse } from "@core/types";
import type { InferGetStaticPropsType } from "next";

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Home cmsData={props.cmsData} />;
};

export default HomePage;

export const getStaticProps = async () => {
  const { page } = await hygraph.request<HomepageResponse>(HOMEPAGE, {
    lang: ["pt_BR"],
  });

  return {
    props: {
      cmsData: page,
    },
  };
};
