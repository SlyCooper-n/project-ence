import { Button, Container, Heading } from "@/components";
import content from "@/content.json";
import { useLang } from "@/hooks";
import Link from "next/link";
import { Case } from "./components";

export const CasesSection = () => {
  const { isInEnglish } = useLang();
  const { cases } = content;

  return (
    <Container asChild className="py-16">
      <section>
        <Heading className="mb-14">Cases</Heading>

        <div className="mb-12 flex flex-col gap-9 sm:gap-3">
          <Case
            slug={cases[0].slug}
            name={cases[0].name}
            slogan={cases[0].slogan}
            date={cases[0].date}
            bannerUrl={cases[0].bannerUrl}
          />

          <div className="flex flex-col gap-9 sm:flex-row sm:gap-3">
            <Case
              slug={cases[1].slug}
              name={cases[1].name}
              slogan={cases[1].slogan}
              date={cases[1].date}
              bannerUrl={cases[1].bannerUrl}
            />

            <Case
              slug={cases[2].slug}
              name={cases[2].name}
              slogan={cases[2].slogan}
              date={cases[2].date}
              bannerUrl={cases[2].bannerUrl}
            />
          </div>
        </div>

        <Button asChild className="w-44 md:w-48">
          <Link href={isInEnglish ? "/en/cases" : "/cases"}>
            {isInEnglish ? "See more projects" : "Ver mais projetos"}
          </Link>
        </Button>
      </section>
    </Container>
  );
};
