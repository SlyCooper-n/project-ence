import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { AboutProps } from "@core/types";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

export const About = (props: AboutProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <>
      <Navbar className="px-[4vw]" />

      <PageContainer
        headTitle={isInEnglish ? "Ence | About" : "Ence | Sobre"}
        className="bg-black text-white"
      >
        <div className="flex-1 flex flex-col lg:justify-center">
          {props.people.map(
            ({ id, bio, personName, profilePicture, socialMedia }) => (
              <article
                key={id}
                className="lg:hidden w-3/4 mx-auto my-12 flex flex-col gap-8"
              >
                <img
                  src={profilePicture}
                  alt={`${personName} picture`}
                  className="max-w-[180px]"
                />

                <h2>{personName}</h2>

                <p className="text-[8px] sm:text-base">{bio}</p>

                <ul className="flex gap-4 text-[8px] sm:text-base">
                  {socialMedia.map(({ media, url }) => (
                    <li key={media}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="relative capitalize"
                      >
                        {media}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            className="w-full hidden lg:block"
          >
            {props.people.map(
              ({ id, bio, personName, profilePicture, socialMedia }) => (
                <SwiperSlide
                  key={id}
                  className="flex flex-row-reverse items-end gap-4"
                >
                  <img
                    src={profilePicture}
                    alt={`${personName} picture`}
                    className="max-w-[180px] lg:max-w-[525px]"
                  />

                  <section className="flex flex-col gap-8 text-end">
                    <h2 className="text-4xl">{personName}</h2>

                    <p className="max-w-[450px]">{bio}</p>

                    <ul className="flex justify-end gap-4">
                      {socialMedia.map(({ media, url }) => (
                        <li key={media}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="relative capitalize"
                          >
                            {media}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        <Footer />
      </PageContainer>
    </>
  );
};
