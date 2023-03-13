import clsx from "clsx";

import { Anchor, Container } from "@/components/modules";
import { useLang } from "@/hooks";
import Link from "next/link";

interface MenuProps {
  open: boolean;
  closeMenu: () => void;
}

export const Menu = ({ open, closeMenu }: MenuProps) => {
  const { isInEnglish } = useLang();

  return (
    <Container
      asChild
      className={clsx(
        "absolute inset-0 z-40 flex flex-col justify-center bg-[#D6D6D6] text-black transition-transform",
        {
          "translate-x-0": open,
          "translate-x-full": !open,
        },
      )}
    >
      <nav>
        <ul className="mb-20 flex flex-col gap-5 text-2xl md:gap-9 md:text-7xl">
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
            <Anchor onClick={closeMenu} asChild className="after:bg-black">
              <Link href={isInEnglish ? "/en/budget" : "/budget"}>
                {isInEnglish ? "Start experience" : "Iniciar experiência"}
              </Link>
            </Anchor>
          </li>
        </ul>

        <div className="flex gap-7">
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
