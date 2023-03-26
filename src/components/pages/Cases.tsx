import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import content from "@/content.json";
import { useLang } from "@/hooks";
import { PageAnimation } from "../config";
import { Container, Heading, Picture, Text } from "../modules";

export const Cases = () => {
  const { isInEnglish, activeLanguage } = useLang();

  const { cases } = content;

  return (
    <PageAnimation>
      <Container asChild className="mt-28 py-16 md:py-28">
        <main>
          <Fade direction="left" triggerOnce>
            <Heading asChild className="mb-7 flex md:text-3xl">
              <h1>
                Cases
                <Fade triggerOnce delay={1000}>
                  <Text className="ml-3 inline-block text-xl font-normal text-white/25">
                    {isInEnglish ? "view" : "visualização"}
                  </Text>
                </Fade>
              </h1>
            </Heading>
          </Fade>

          <Text asChild className="mb-12 md:mb-36 md:text-xl">
            <p>
              {isInEnglish
                ? "Below is a selection of brands remaining from experiences."
                : "A seguir uma seleção de marcas remanescentes de experiências."}
            </p>
          </Text>

          <div className="flex flex-col gap-10 md:gap-20 lg:hidden">
            <Fade triggerOnce cascade>
              {cases.map((item) => (
                <Link
                  key={item.id}
                  href={
                    isInEnglish
                      ? `/en/cases/${item.slug}`
                      : `/cases/${item.slug}`
                  }
                  className="group block overflow-hidden"
                >
                  <Picture.Root>
                    <source
                      media="(max-width: 767px)"
                      srcSet={item.bannerUrl.mobile}
                    />

                    <source
                      media="(min-width: 768px)"
                      srcSet={item.bannerUrl.desktop}
                    />

                    <Picture.Image
                      src={item.bannerUrl.desktop}
                      alt={`${item.name} banner`}
                      className="mb-3 max-h-[354px] transition-transform duration-500 group-hover:scale-[1.02] md:mb-9"
                    />
                  </Picture.Root>

                  <Heading className="md:mb-4 md:text-3xl">{item.name}</Heading>

                  <Text className="md:text-xl">
                    {item.slogan[activeLanguage]}
                  </Text>
                </Link>
              ))}
            </Fade>
          </div>

          <div className="hidden flex-col gap-36 lg:flex">
            <Fade triggerOnce cascade>
              {cases.map((item) => (
                <Link
                  key={item.id}
                  href={
                    isInEnglish
                      ? `/en/cases/${item.slug}`
                      : `/cases/${item.slug}`
                  }
                  className="group relative flex w-fit flex-col overflow-hidden pr-8"
                >
                  <Text className="absolute top-1/2 left-0 -translate-y-1/2 text-6xl font-semibold transition-opacity group-hover:opacity-0">
                    {item.name}
                  </Text>

                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="w-96 opacity-0 transition-all group-hover:opacity-100"
                  />
                </Link>
              ))}
            </Fade>
          </div>
        </main>
      </Container>
    </PageAnimation>
  );
};
