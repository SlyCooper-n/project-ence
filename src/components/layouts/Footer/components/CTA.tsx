import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

import { Button, Container, Heading } from "@/components";
import { useLang } from "@/hooks";

const pagesWithoutCTA = ["/budget", "/experience-started"];

export const CTA = () => {
  const { isInEnglish } = useLang();
  const { pathname } = useRouter();

  const isHidden = pagesWithoutCTA.some((page) => pathname.includes(page));

  return (
    <section
      className={clsx(
        "mx-auto max-w-[1920px] bg-cto-graph bg-cover bg-center bg-no-repeat",
        {
          hidden: isHidden,
        },
      )}
    >
      <Container className="flex flex-col items-center gap-12 py-48 md:py-60">
        <Fade cascade>
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
                Entre em contato para começarmos a <br /> desenvolver seu
                projeto.
              </>
            )}
          </p>

          <Button asChild>
            <Link href={isInEnglish ? "/en/budget" : "/budget"}>
              {isInEnglish ? "Start experience" : "Iniciar experiência"}
            </Link>
          </Button>
        </Fade>
      </Container>
    </section>
  );
};
