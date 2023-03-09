import Link from "next/link";

import content from "@/content.json";
import { useLang } from "@/hooks";
import { Head } from "../config";
import { Container, Heading, Picture, Text } from "../modules";

export const Cases = () => {
  const { isInEnglish, activeLanguage } = useLang();

  const { cases } = content;

  return (
    <>
      <Head title="Cases" />

      <Container asChild className="py-16 md:py-28">
        <main>
          <Heading asChild className="mb-7 md:text-3xl">
            <h1>{isInEnglish ? "Cases view" : "Cases visualização"}</h1>
          </Heading>

          <Text asChild className="mb-12 md:mb-36 md:text-xl">
            <p>
              {isInEnglish
                ? "Below is a selection of brands remaining from experiences."
                : "A seguir uma seleção de marcas remanescentes de experiências."}
            </p>
          </Text>

          <div className="flex flex-col gap-10 md:gap-20">
            {cases.map((item) => (
              <Link
                key={item.id}
                href={
                  isInEnglish ? `/en/cases/${item.slug}` : `/cases/${item.slug}`
                }
                className="block"
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
                    className="mb-3 max-h-[354px] md:mb-9"
                  />
                </Picture.Root>

                <Heading className="md:mb-4 md:text-3xl">{item.name}</Heading>

                <Text className="md:text-xl">
                  {item.slogan[activeLanguage]}
                </Text>
              </Link>
            ))}
          </div>
        </main>
      </Container>
    </>
  );
};
