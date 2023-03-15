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
    previews,
    images,
    videos,
    previousCaseSlug,
    nextCaseSlug,
  } = caseItem;

  const isConceitoPage = caseItem.slug === "conceito";

  return (
    <>
      {isConceitoPage ? (
        <video
          src="https://drive.google.com/uc?export=download&id=1OtTZp0ryjLWBmUXP_eyzziPMFBPQH9kI"
          autoPlay
          controls
          loop
          className="mx-auto mt-28 h-56 w-full max-w-[1920px] object-cover md:h-96 lg:mt-0 lg:h-[758px]"
        />
      ) : (
        <img
          src={coverUrl}
          alt={`${name} banner`}
          className="mx-auto mt-28 h-56 w-full max-w-[1920px] object-cover md:h-96 lg:mt-0 lg:h-[758px]"
        />
      )}

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

        <section className="mb-4 flex w-full gap-2 md:mb-12 md:gap-4">
          {previews.map((img) => (
            <img
              key={img}
              src={img}
              alt={`${name} preview`}
              className="w-[calc(33.33%-0.5rem)] md:w-[calc(33.33%-1rem)]"
            />
          ))}
        </section>

        <section className="mb-16 flex flex-col gap-4 md:gap-12">
          {images.map((img, i) => {
            const video = videos?.find((video) => video.index === i);

            if (video)
              return (
                <video
                  key={video.id}
                  src={`https://drive.google.com/uc?export=download&id=${video.id}`}
                  autoPlay
                  muted
                  loop
                />
              );

            return <img key={img} src={img} alt={`${name} snap`} />;
          })}
        </section>

        <nav className="flex flex-col gap-12 md:flex-row md:justify-between">
          {previousCaseSlug ? (
            <Anchor asChild className="mr-auto block h-fit w-fit">
              <Link
                href={
                  isInEnglish
                    ? `/en/cases/${previousCaseSlug}`
                    : `/cases/${previousCaseSlug}`
                }
              >
                &lt; {isInEnglish ? "Previous project" : "Projeto anterior"}
              </Link>
            </Anchor>
          ) : null}

          {nextCaseSlug ? (
            <Anchor asChild className="ml-auto block h-fit w-fit">
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
          ) : null}
        </nav>
      </Container>
    </>
  );
};
