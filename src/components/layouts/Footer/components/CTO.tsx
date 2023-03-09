import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Container, Heading } from "@/components";
import { useLang } from "@/hooks";

export const CTO = () => {
  const { isInEnglish } = useLang();
  const { pathname } = useRouter();

  const isBudgetPage = pathname.includes("/budget");

  return (
    <section
      className={clsx(
        "mx-auto max-w-[1920px] bg-cto-graph bg-cover bg-center bg-no-repeat",
        {
          hidden: isBudgetPage,
        },
      )}
    >
      <Container className="flex flex-col items-center gap-12 py-48 md:py-60">
        <Heading className="max-w-[500px] text-center text-4xl md:text-5xl">
          {isInEnglish
            ? "Let's start your experience!?"
            : "Vamos dar início à sua experiência!?"}
        </Heading>

        <p className="mx-auto w-fit text-center md:text-xl">
          {isInEnglish ? (
            <>
              Contact us to start to <br /> develop your project.
            </>
          ) : (
            <>
              Entre em contato para comerçarmos a <br /> desenvolver seu
              projeto.
            </>
          )}
        </p>

        <Button asChild>
          <Link href={isInEnglish ? "/en/budget" : "/budget"}>
            {isInEnglish ? "Start experience" : "Iniciar experiência"}
          </Link>
        </Button>
      </Container>
    </section>
  );
};
