import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Logo } from "@/components";
import { useLang } from "@/hooks";
import { StartExperienceButton } from "./components";

export const Navbar = () => {
  const { isInEnglish } = useLang();
  const { pathname } = useRouter();

  const basePath = isInEnglish ? pathname.slice(3) : pathname;

  return (
    <Container asChild>
      <header className="flex items-center justify-between py-9">
        <Link href={isInEnglish ? "/en" : "/"}>
          <Logo />
        </Link>

        <ul className="flex items-center gap-5 md:gap-16">
          <li className="hidden sm:block">
            <StartExperienceButton />
          </li>

          <li>
            <button
              onClick={() => {}}
              className="block h-4 w-16 bg-white sm:h-6 sm:w-28"
            />
          </li>

          <li className="flex gap-2 text-xl sm:text-2xl">
            <Link
              href={"/en" + basePath}
              className={clsx("transition-opacity", {
                "opacity-50": isInEnglish,
              })}
            >
              EN
            </Link>

            <Link
              href={basePath === "" ? "/" : basePath}
              className={clsx("transition-opacity", {
                "opacity-50": !isInEnglish,
              })}
            >
              PT
            </Link>
          </li>
        </ul>
      </header>
    </Container>
  );
};
