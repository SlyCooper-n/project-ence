import { About } from "@components/pages";
import { hygraph, PEOPLE } from "@core/services";
import { PeopleResponse } from "@core/types";
import { InferGetStaticPropsType } from "next";

const AboutPageEn = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <About people={data} />;
};

export default AboutPageEn;

export const getStaticProps = async () => {
  const { people } = await hygraph.request<PeopleResponse>(PEOPLE, {
    lang: ["en"],
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
