import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Container, Logo, VisuallyHidden } from "@/components";
import { useLang, useMenu } from "@/hooks";
import { Menu, StartExperienceButton } from "./components";

export const Navbar = () => {
  const { isInEnglish } = useLang();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { asPath } = useRouter();

  const basePath = isInEnglish ? asPath.slice(3) : asPath;

  return (
    <>
      <Container asChild>
        <header
          className={clsx(
            "absolute top-0 left-1/2 z-50 flex w-screen -translate-x-1/2 items-center justify-between py-9 backdrop-blur-md sm:w-[calc(100vw-11px)]",
            { "bg-transparent": isMenuOpen, "bg-black/30": !isMenuOpen },
          )}
        >
          <Link href={isInEnglish ? "/en" : "/"} onClick={closeMenu}>
            <Logo isMenuOpen={isMenuOpen} />
          </Link>

          <ul
            className={clsx("flex items-center gap-5 md:gap-12", {
              "text-black": isMenuOpen,
            })}
          >
            <li className="hidden sm:block" onClick={closeMenu}>
              <StartExperienceButton isMenuOpen={isMenuOpen} />
            </li>

            <li className="z-50">
              <button
                onClick={toggleMenu}
                className={clsx(
                  "group flex h-4 w-16 overflow-hidden border sm:h-6 sm:w-28",
                  {
                    "hover:border-black": isMenuOpen,
                    "hover:border-white": !isMenuOpen,
                  },
                )}
              >
                {Array.from({ length: 10 }).map((_, i) => {
                  const delay = 50 * i; // in milliseconds

                  return (
                    <div
                      key={i}
                      style={{ transitionDelay: `${delay}ms` }}
                      className={clsx(
                        "h-full flex-1 border transition-all duration-300 group-hover:bg-transparent",
                        {
                          "border-black bg-black": isMenuOpen,
                          "border-white bg-white": !isMenuOpen,
                        },
                      )}
                    />
                  );
                })}
                <VisuallyHidden>Open/close menu</VisuallyHidden>
              </button>
            </li>

            <li className="flex gap-2 font-semibold">
              <Anchor
                asChild
                className={clsx("uppercase transition-opacity", {
                  "opacity-50 after:hover:w-0": isInEnglish,
                  "after:bg-black": isMenuOpen,
                })}
              >
                <Link href={"/en" + basePath}>en</Link>
              </Anchor>

              <Anchor
                asChild
                className={clsx("uppercase transition-opacity", {
                  "opacity-50 after:hover:w-0": !isInEnglish,
                  "after:bg-black": isMenuOpen,
                })}
              >
                <Link href={basePath === "" ? "/" : basePath}>pt</Link>
              </Anchor>
            </li>
          </ul>
        </header>
      </Container>

      <Menu open={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
