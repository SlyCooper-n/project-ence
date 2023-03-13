import clsx from "clsx";
import Link from "next/link";

import { Anchor, Container } from "@/components/modules";
import { useLang } from "@/hooks";
import { useRouter } from "next/router";

interface MenuProps {
  open: boolean;
  closeMenu: () => void;
}

export const Menu = ({ open, closeMenu }: MenuProps) => {
  const { isInEnglish } = useLang();
  const { pathname } = useRouter();

  const isBudgetPage = pathname.includes("/budget");

  return (
    <Container
      asChild
      className={clsx(
        "fixed inset-0 z-40 flex h-screen w-screen flex-col justify-center bg-[#D6D6D6] text-black transition-transform",
        {
          "translate-x-0": open,
          "translate-x-full": !open,
        },
      )}
    >
      <nav>
        <ul
          className={clsx(
            "mb-20 flex flex-col gap-5 text-2xl transition-all delay-300 duration-300 md:gap-9 md:text-7xl",
            {
              "translate-x-0 opacity-100": open,
              "translate-x-8 opacity-0": !open,
            },
          )}
        >
          <li>
            <Anchor onClick={closeMenu} asChild className="after:bg-black">
              <Link href={isInEnglish ? "/en" : "/"}>
                {isInEnglish ? "Home" : "Início"}
              </Link>
            </Anchor>
          </li>

          <li>
            <Anchor onClick={closeMenu} asChild className="after:bg-black">
              <Link href={isInEnglish ? "/en/cases" : "/cases"}>
                {isInEnglish ? "Projects" : "Projetos"}
              </Link>
            </Anchor>
          </li>

          <li>
            <Anchor onClick={closeMenu} asChild className="after:bg-black">
              <Link href={isInEnglish ? "/en/about" : "/about"}>
                {isInEnglish
                  ? "Behind the experience"
                  : "Por trás da experiência"}
              </Link>
            </Anchor>
          </li>

          <li>
            {isBudgetPage ? null : (
              <Anchor onClick={closeMenu} asChild className="after:bg-black">
                <Link href={isInEnglish ? "/en/budget" : "/budget"}>
                  {isInEnglish ? "Start experience" : "Iniciar experiência"}
                </Link>
              </Anchor>
            )}
          </li>
        </ul>

        <div
          className={clsx(
            "flex gap-7 transition-all delay-300 duration-500 md:text-xl",
            {
              "translate-x-0 opacity-100": open,
              "translate-x-8 opacity-0": !open,
            },
          )}
        >
          <Anchor
            href="https://www.instagram.com/encestudio"
            target="_blank"
            className="after:bg-black"
          >
            Instagram
          </Anchor>
          <Anchor
            href="https://www.behance.net/joaovitorn-ence"
            target="_blank"
            className="after:bg-black"
          >
            Behance
          </Anchor>
        </div>
      </nav>
    </Container>
  );
};
