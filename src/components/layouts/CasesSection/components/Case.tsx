import Link from "next/link";

import { Heading, Picture, Text } from "@/components";
import { useLang } from "@/hooks";

interface CaseProps {
  slug: string;
  name: string;
  slogan: {
    en: string;
    pt: string;
  };
  date: string;
  bannerUrl: {
    mobile: string;
    desktop: string;
  };
}

export const Case = ({ slug, name, date, slogan, bannerUrl }: CaseProps) => {
  const { isInEnglish, activeLanguage } = useLang();

  return (
    <Link
      href={isInEnglish ? `/en/cases/${slug}` : `/cases/${slug}`}
      className="group relative block flex-1"
    >
      <Picture.Root className="mb-5 block overflow-hidden sm:mb-0">
        <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/0" />

        <source media="(max-width: 639px)" srcSet={bannerUrl.mobile} />

        <source media="(min-width: 640px)" srcSet={bannerUrl.desktop} />

        <Picture.Image
          src={bannerUrl.desktop}
          alt={`${name} banner`}
          className="transition-all duration-500 group-hover:scale-[1.02]"
        />
      </Picture.Root>

      <div className="z-20 sm:absolute sm:top-3 sm:left-3 lg:top-6 lg:left-6">
        <Heading asChild className="text-base font-normal md:text-lg">
          <h3>
            {name} | {date}
          </h3>
        </Heading>

        <Text className="md:text-lg">{slogan[activeLanguage]}</Text>
      </div>
    </Link>
  );
};
