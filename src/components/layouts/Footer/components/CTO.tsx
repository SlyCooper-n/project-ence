import Link from "next/link";
import AnimatedText from "react-animated-text-content";

import { Button, Container, Heading } from "@/components";
import { useLang } from "@/hooks";

export const CTO = () => {
  const { isInEnglish } = useLang();

  return (
    <section className="mx-auto max-w-[1920px] bg-cto-graph bg-cover bg-center bg-no-repeat">
      <Container className="flex flex-col items-center gap-12 py-48 md:py-60">
        <Heading asChild className="text-center text-4xl md:text-5xl">
          {isInEnglish ? (
            <AnimatedText
              tag="h2"
              type="words"
              animationType="lights"
              duration={1}
              className="max-w-[500px]"
            >
              Let&apos;s start your experience!?
            </AnimatedText>
          ) : (
            <AnimatedText
              tag="h2"
              type="words"
              animationType="lights"
              duration={1}
              className="max-w-[500px]"
            >
              Vamos dar início à sua experiência!?
            </AnimatedText>
          )}
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

        <Button asChild className="w-44 md:w-48">
          <Link href={isInEnglish ? "/en/budget" : "/budget"}>
            {isInEnglish ? "Start experience" : "Iniciar experiência"}
          </Link>
        </Button>
      </Container>
    </section>
  );
};
