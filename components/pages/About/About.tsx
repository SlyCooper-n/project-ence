import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { AboutProps } from "@core/types";
import { scrollDown } from "@core/utils";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

export const About = (props: AboutProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <>
      <Navbar className="container w-[95vw]" />

      <PageContainer
        headTitle={isInEnglish ? "Ence | About" : "Ence | Sobre"}
        className="bg-black text-white"
      >
        <div className="flex-1 flex flex-col lg:justify-center">
          <section className="relative h-[calc(100vh-3rem)] flex justify-center items-center text-lg sm:text-5xl">
            <div className="bg absolute w-screen h-full" />

            <span className="text-center font-semibold z-10">
              {isInEnglish
                ? "Behind the studio experience-"
                : "Por trás da experiência do estúdio-"}
            </span>

            <Lottie
              animationData={scrollDown}
              className="absolute bottom-20 w-12"
            />

            <style jsx>{`
              div.bg {
                background: linear-gradient(90deg, #000000 0%, #e5f2c9 275.03%);
              }
            `}</style>
          </section>

          {props.people.map(
            ({ id, bio, personName, profilePicture, socialMedia }) => (
              <article
                key={id}
                className="lg:hidden w-3/4 mx-auto my-12 flex flex-col gap-8"
              >
                <img
                  src={profilePicture}
                  alt={`${personName} picture`}
                  className="max-w-[180px] aspect-square object-cover object-bottom"
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

          <div className="relative hidden w-[calc(100%-120px)] h-screen mx-auto lg:flex justify-center items-center">
            <div className="swiper-people-prev absolute top-0 -left-[60px] h-full flex justify-center items-center z-10 cursor-pointer">
              <svg width="25" height="59" viewBox="0 0 43 78" fill="none">
                <path
                  d="M35 70L4 39L35 8"
                  stroke="#E5F2C9"
                  strokeWidth="10.3333"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </svg>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                enabled: true,
                prevEl: ".swiper-people-prev",
                nextEl: ".swiper-people-next",
              }}
              spaceBetween={24}
              className="w-full"
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
                      className="max-w-[180px] aspect-square lg:max-w-[460px] object-cover object-bottom"
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

            <div className="swiper-people-next absolute top-0 -right-[60px] h-full flex justify-center items-center z-10 cursor-pointer">
              <svg width="25" height="59" viewBox="0 0 43 78" fill="none">
                <path
                  d="M8 70L39 39L8 8"
                  stroke="#E5F2C9"
                  strokeWidth="10.3333"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </svg>
            </div>
          </div>
        </div>

        <Footer />
      </PageContainer>
    </>
  );
};
