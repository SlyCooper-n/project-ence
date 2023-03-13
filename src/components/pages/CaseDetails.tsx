import Link from "next/link";

import content from "@/content.json";
import { useLang } from "@/hooks";
import { Anchor, Container, Heading, Text } from "../modules";

interface CaseDetailsProps {
  caseId: (typeof content.cases)[0]["id"];
}

export const CaseDetails = ({ caseId }: CaseDetailsProps) => {
  const { isInEnglish, activeLanguage } = useLang();

  const caseItem = content.cases.find((item) => item.id === caseId);
  if (!caseItem) throw new Error(`Error trying to find case of id ${caseId}`);
  const {
    name,
    slogan,
    description,
    date,
    services,
    frontEnd,
    designStrategy,
    coverUrl,
    images,
    nextCaseSlug,
  } = caseItem;

  return (
    <>
      <img
        src={coverUrl}
        alt={`${name} banner`}
        className="mx-auto h-56 w-full max-w-[1920px] object-cover md:h-96 lg:h-[758px]"
      />

      <Container className="py-16">
        <main className="mb-24 md:mb-64">
          <Text className="mb-2 block font-semibold">
            {isInEnglish ? "About:" : "Sobre:"}
          </Text>

          <Heading asChild className="mb-7 text-2xl md:mb-20">
            <h1>{name}</h1>
          </Heading>

          <ul className="mb-16 flex flex-col gap-4 md:mb-28 md:flex-row md:gap-16 md:text-xl">
            <li>
              <strong>{isInEnglish ? "Date" : "Data"}</strong>: {date}
            </li>

            <li>
              <strong>{isInEnglish ? "Services" : "Serviços"}</strong>:{" "}
              {services[activeLanguage].join(", ")}
            </li>

            {frontEnd ? (
              <li>
                <strong>Front-End</strong>: {frontEnd}
              </li>
            ) : null}
          </ul>

          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            <Heading className="text-2xl md:text-6xl">
              {slogan[activeLanguage]}
            </Heading>

            <div className="flex flex-col gap-7">
              <Text asChild>
                <p>{description[activeLanguage]}</p>
              </Text>

              <div>
                <Heading className="mb-4">
                  {isInEnglish ? "Design strategy" : "Estratégia de design"}
                </Heading>

                <Text asChild>
                  <p>{designStrategy[activeLanguage]}</p>
                </Text>
              </div>
            </div>
          </div>
        </main>

        <section className="mb-16 flex flex-col gap-4 md:gap-12">
          {images.map((img) => (
            <img key={img} src={img} alt="" />
          ))}
        </section>

        <nav className="flex flex-col gap-12 md:flex-row md:justify-between">
          <Text asChild className="max-w-sm">
            <p>
              <Anchor asChild className="mb-4 block w-fit">
                <Link href={isInEnglish ? "/en/budget" : "/budget"}>
                  {isInEnglish ? "Start experience" : "Iniciar experiência"}
                </Link>
              </Anchor>

              {isInEnglish
                ? "You are just a few clicks away from developing the visual universe of your project. Get in touch below."
                : "Você está a alguns cliques de desenvolver o universo visual do seu projeto. Entre em contato abaixo."}
            </p>
          </Text>

          <Anchor asChild className="block h-fit w-fit">
            <Link
              href={
                isInEnglish
                  ? `/en/cases/${nextCaseSlug}`
                  : `/cases/${nextCaseSlug}`
              }
            >
              {isInEnglish ? "Next project" : "Próximo projeto"} &gt;
            </Link>
          </Anchor>
        </nav>
      </Container>
    </>
  );
};
