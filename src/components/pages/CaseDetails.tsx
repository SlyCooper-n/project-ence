import content from "@/content.json";
import { useLang } from "@/hooks";
import Link from "next/link";
import { Anchor, Container, Heading, Text } from "../modules";

interface CaseDetailsProps {
  caseId: (typeof content.cases)[0]["id"];
}

export const CaseDetails = ({ caseId }: CaseDetailsProps) => {
  const { isInEnglish, activeLanguage } = useLang();

  const caseItem = content.cases.find((item) => item.id === caseId);
  if (!caseItem) throw new Error(`Error trying to find case of id ${caseId}`);
  const {
    order,
    name,
    slogan,
    description,
    dataSheet,
    date,
    designStrategy,
    images,
    nextCaseSlug,
  } = caseItem;

  return (
    <Container className="py-16">
      <main className="mb-24 md:mb-64">
        <Text className="mb-12 block md:text-xl">
          {order}/{content.cases.length} Cases
        </Text>

        <Heading
          asChild
          className="mb-12 text-2xl md:mb-24 md:text-4xl lg:text-6xl"
        >
          <h1>
            {name} - {slogan[activeLanguage]}.
          </h1>
        </Heading>

        <div className="mb-6 flex flex-col gap-6 md:mb-9 md:flex-row md:justify-between">
          <Text asChild className="max-w-lg md:text-xl">
            <p>{description[activeLanguage]}</p>
          </Text>

          <div className="min-w-[256px] md:text-xl">
            <Heading className="mb-4">
              {isInEnglish ? "Data sheet -" : "Ficha técnica -"}
            </Heading>

            <ul>
              <li>
                <strong>{isInEnglish ? "Services" : "Serviços"}:</strong>{" "}
                {dataSheet.services.join(", ")}
              </li>

              <li>
                <strong>
                  {isInEnglish ? "Art director" : "Diretor de arte"}:
                </strong>{" "}
                {dataSheet.artDirector}
              </li>

              <li>
                <strong>Design:</strong> {dataSheet.design}
              </li>

              {dataSheet.dev ? (
                <li>
                  <strong>
                    {isInEnglish ? "Developer" : "Desenvolvedor"}:
                  </strong>{" "}
                  {dataSheet.dev}
                </li>
              ) : null}

              <li>
                <strong>{isInEnglish ? "Date" : "Data"}:</strong> {date}
              </li>
            </ul>
          </div>
        </div>

        <Heading className="mb-4 md:text-xl">
          {isInEnglish ? "Design strategy -" : "Estratégia de design -"}
        </Heading>

        <Text asChild className="max-w-lg md:text-xl">
          <p>{designStrategy[activeLanguage]}</p>
        </Text>
      </main>

      <section className="mb-16 flex flex-col gap-12">
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
  );
};
