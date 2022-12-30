import { Container } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { AboutProps } from "@core/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

export const About = (props: AboutProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <>
      <Head>
        <title>{isInEnglish ? "Ence | About" : "Ence | Sobre"}</title>
      </Head>

      <Navbar />

      <div className="bg-black text-white">
        <Container asChild>
          <section className="py-40">
            <h2 className="mb-36 text-6xl">
              {isInEnglish
                ? "One of the people who will be part of your experience is "
                : "Uma das pessoas que vão fazer parte da sua experiência é "}
              <em className="font-emphasis">
                {isInEnglish ? "yourself." : "você mesmo."}
              </em>
            </h2>

            <ul className="flex flex-col gap-12">
              <li>
                <h3 className="mb-12 flex items-center gap-5 text-3xl">
                  <span className="text-8xl font-emphasis">01</span>
                  Briefing/pesquisa
                </h3>

                <p>
                  Como toda experiência, você precisa vivenciá-la. No ínicio da
                  experiência já temos um grande questionário em torno do seu
                  projeto, para entendermos como ele está e no que ele irá se
                  tornar no futuro, vamos destrinchar diversas informações sobre
                  você e seu negócio.
                </p>
              </li>
            </ul>
          </section>
        </Container>

        <section></section>

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

        <Container>
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
        </Container>

        <Footer />
      </div>
    </>
  );
};
