import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Container, Logo, VisuallyHidden } from "@/components";
import { useLang } from "@/hooks";
import { StartExperienceButton } from "./components";

export const Navbar = () => {
  const { isInEnglish } = useLang();
  const { asPath } = useRouter();

  const basePath = isInEnglish ? asPath.slice(3) : asPath;

  return (
    <Container asChild>
      <header className="flex items-center justify-between py-9">
        <Link href={isInEnglish ? "/en" : "/"}>
          <Logo />
        </Link>

        <ul className="flex items-center gap-5 md:gap-12">
          <li className="hidden sm:block">
            <StartExperienceButton />
          </li>

          <li>
            <button
              onClick={() => {}}
              className="group flex h-4 w-16 overflow-hidden border hover:border-white sm:h-6 sm:w-28"
            >
              {Array.from({ length: 10 }).map((_, i) => {
                const delay = 50 * i; // in milliseconds

                return (
                  <div
                    key={i}
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`h-full flex-1 bg-white transition-all duration-300 group-hover:bg-transparent`}
                  />
                );
              })}
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </button>
          </li>

          <li className="flex gap-2 font-semibold">
            <Anchor
              asChild
              className={clsx("transition-opacity", {
                "opacity-50 after:hover:w-0": isInEnglish,
              })}
            >
              <Link href={"/en" + basePath}>en</Link>
            </Anchor>

            <Anchor
              asChild
              className={clsx("transition-opacity", {
                "opacity-50 after:hover:w-0": !isInEnglish,
              })}
            >
              <Link href={basePath === "" ? "/" : basePath}>pt</Link>
            </Anchor>
          </li>
        </ul>
      </header>
    </Container>
  );
};
