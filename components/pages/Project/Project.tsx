import { PageContainer } from "@components/layouts";
import { Navbar } from "@components/modules";
import { Button } from "@components/widgets";
import { ProjectPageProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";

export const Project = ({ caseData }: ProjectPageProps) => {
  const router = useRouter();
  const isInEnglish = router.pathname.includes("/en");

  return (
    <PageContainer headTitle="Ence | Inova">
      <Navbar translucent absolute />

      <div className="flex justify-center items-center">
        <img
          src={caseData.banner.url}
          alt={`${caseData.projectName} banner`}
          className="hidden sm:block w-screen max-w-[1920px] mx-auto mb-4"
        />
      </div>

      <main className="mb-12 text-center text-xs sm:text-base">
        <span className="mb-4 block font-bold">
          {caseData.caseOrder}/5 cases
        </span>

        <h1 className="mb-10 sm:mb-20 text-2xl sm:text-5xl font-bold">
          {caseData.title}
        </h1>

        <div className="mb-6 flex flex-col items-center sm:flex-row sm:justify-between gap-6 sm:gap-0">
          <p className="sm:w-1/2 sm:mr-[20vw] sm:text-start">
            {caseData.description}
          </p>

          <div className="sm:w-fit sm:text-start">
            <h2 className="w-fit mx-auto sm:mx-0 mb-2 font-bold">
              {isInEnglish ? "Data Sheet" : "Ficha Técnica"} -
            </h2>

            <ul className="w-fit">
              <li>
                <strong>{isInEnglish ? "Services" : "Serviços"}: </strong>

                <span>{caseData.dataSheet.services}</span>
              </li>

              <li>
                <strong>
                  {isInEnglish ? "Art director" : "Diretor de arte"}:{" "}
                </strong>

                <span>
                  {caseData.dataSheet.artDirector
                    .map((person) => person.personName)
                    .join(", ")}
                </span>
              </li>

              <li>
                <strong>Design: </strong>

                <span>
                  {caseData.dataSheet.design
                    .map((person) => person.personName)
                    .join(", ")}
                </span>
              </li>

              {caseData.dataSheet.dev[0]?.personName && (
                <li>
                  <strong>
                    {isInEnglish ? "Front-end dev" : "Dev Front-end"}:{" "}
                  </strong>

                  <span>
                    {caseData.dataSheet.dev
                      .map((person) => person.personName)
                      .join(", ")}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="sm:text-start">
          <h2 className="mb-2 font-bold">
            {isInEnglish ? "Design strategy" : "Estratégia de design"} -
          </h2>

          <p className="sm:max-w-[50%]">{caseData.designStrategy}</p>
        </div>
      </main>

      <section className="mb-8 flex flex-col gap-2">
        {caseData.snaps.map((snap) => (
          <img
            key={snap.id}
            src={snap.url}
            alt={`${caseData.projectName} snap`}
          />
        ))}
      </section>

      <div className="mb-8 flex justify-center items-center gap-4 text-xs sm:text-base">
        <Link href={caseData.previousCase?.slug ?? "/"}>
          <a className="link">{isInEnglish ? "Previous" : "Voltar"}</a>
        </Link>

        <Link href={caseData.nextCase?.slug ?? "/"}>
          <a className="block">
            <Button type="button" className="w-[50vw] max-w-[200px]">
              {isInEnglish ? "Next case" : "Próximo case"}
            </Button>
          </a>
        </Link>
      </div>
    </PageContainer>
  );
};
