import { About } from "@components/pages";
import { hygraph, PEOPLE } from "@core/services";
import { PeopleResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const AboutPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <About people={data} />;
};

export default AboutPage;

export const getStaticProps = async () => {
  const { people } = await hygraph.request<PeopleResponse>(PEOPLE, {
    lang: ["pt_BR"],
  });

  const data = people.map(
    ({ id, bio, personName, profilePicture, socialMedia }) => ({
      id,
      bio: bio.text,
      personName,
      profilePicture: profilePicture.url,
      socialMedia: socialMedia.map((media) => ({
        media: media.socialMedia,
        url: media.url,
      })),
    })
  );

  return {
    props: {
      data: data,
    },
  };
};
