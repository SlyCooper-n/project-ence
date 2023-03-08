import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Text } from "@/components";
import { useLang } from "@/hooks";

export const StartExperienceButton = () => {
  const { isInEnglish } = useLang();
  const { pathname } = useRouter();

  const isInBudgetPage = pathname.includes("/budget");

  return (
    <>
      {isInBudgetPage ? (
        <Text className="select-none">
          {isInEnglish ? "Experience started" : "Experiência iniciada"}
        </Text>
      ) : (
        <Anchor asChild>
          <Link
            href={isInEnglish ? "/en/budget" : "/budget"}
            className="text-lg"
          >
            {isInEnglish ? "Start experience" : "Iniciar experiência"}
          </Link>
        </Anchor>
      )}
    </>
  );
};
