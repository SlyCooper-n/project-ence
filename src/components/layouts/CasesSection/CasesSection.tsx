import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import { Button, Container, Heading } from "@/components";
import content from "@/content.json";
import { useLang } from "@/hooks";
import { Case } from "./components";

export const CasesSection = () => {
  const { isInEnglish } = useLang();

  const { cases, highlightedCasesId } = content;
  const firstCase = cases.find((item) => item.id === highlightedCasesId[0]);
  const secondCase = cases.find((item) => item.id === highlightedCasesId[1]);
  const thirdCase = cases.find((item) => item.id === highlightedCasesId[2]);

  if (!firstCase || !secondCase || !thirdCase) {
    throw new Error(
      "Could not find highlighted cases. Please review content.json",
    );
  }

  return (
    <Container asChild className="py-16">
      <section>
        <Fade direction="left" triggerOnce>
          <Heading className="mb-14">Cases</Heading>
        </Fade>

        <div className="mb-12 flex flex-col gap-9 sm:gap-3">
          <Fade direction="up" triggerOnce cascade>
            <Case
              slug={firstCase.slug}
              name={firstCase.name}
              slogan={firstCase.slogan}
              date={firstCase.date}
              bannerUrl={firstCase.highlightedBannerUrl}
            />

            <div className="flex flex-col gap-9 sm:flex-row sm:gap-3">
              <Case
                slug={secondCase.slug}
                name={secondCase.name}
                slogan={secondCase.slogan}
                date={secondCase.date}
                bannerUrl={secondCase.highlightedBannerUrl}
              />

              <Case
                slug={thirdCase.slug}
                name={thirdCase.name}
                slogan={thirdCase.slogan}
                date={thirdCase.date}
                bannerUrl={thirdCase.highlightedBannerUrl}
              />
            </div>
          </Fade>
        </div>

        <Fade triggerOnce delay={1000}>
          <Button asChild>
            <Link href={isInEnglish ? "/en/cases" : "/cases"}>
              {isInEnglish ? "See more projects" : "Ver mais projetos"}
            </Link>
          </Button>
        </Fade>
      </section>
    </Container>
  );
};
