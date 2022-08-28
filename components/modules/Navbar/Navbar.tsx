import { useTheme } from "@core/hooks";
import { NavbarProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Circle, Square } from "phosphor-react";
import { useState } from "react";

export const Navbar = ({ translucent, absolute }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isInEnglish = router.pathname.includes("/en");

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <nav
      className={`py-3 sm:py-6 flex items-center z-50 ${
        translucent ? "bg-opacity-70 bg-base-100" : ""
      } ${
        absolute ? "sm:absolute sm:top-0 sm:left-0 sm:w-full sm:px-[5vw]" : ""
      }`}
    >
      <Link href={isInEnglish ? "/en" : "/"}>
        <a className="mr-auto w-7">
          <img
            src={
              theme === "light"
                ? "/images/logo-minimal-black.svg"
                : "/images/logo-minimal-white.svg"
            }
            alt="Ence logo"
          />
        </a>
      </Link>

      {/* menu bar on desktop screens */}
      <ul className="mr-12 hidden sm:flex gap-6 font-bold">
        <li>
          <Link href={isInEnglish ? "en/projects" : "/projects"}>
            <a>Portfólio</a>
          </Link>
        </li>

        <li>
          <Link href={isInEnglish ? "en/#about" : "/#about"}>
            <a>{isInEnglish ? "About" : "Sobre"}</a>
          </Link>
        </li>
      </ul>

      {/* button to toggle theme (only on desktop screens) */}
      <label className="swap swap-rotate mr-3">
        <input type="checkbox" onChange={toggleTheme} />

        <Square weight="fill" className={`swap-on fill-current w-5 h-5`} />

        <Circle weight="fill" className={`swap-off fill-current w-5 h-5`} />
      </label>

      {/* button to toggle language (only on desktop screens) */}
      <Link
        href={{
          pathname: isInEnglish
            ? `/${router.pathname.slice(4)}`
            : `/en${router.pathname}`,
          query: router.pathname.includes("/projects/")
            ? { slug: router.query.slug }
            : {},
        }}
      >
        <a className="hidden sm:flex">{isInEnglish ? "PT" : "EN"}</a>
      </Link>

      {/* menu bar on mobile screens */}
      <button
        type="button"
        onClick={handleToggleMenu}
        className="relative sm:hidden w-16 h-[22px]"
      >
        <div className="absolute top-1/2 w-full h-[6px] bg-base-content -translate-y-1/2" />

        {/* <div
          className={`absolute bottom-0 ${
            isMobileMenuOpen ? "left-0" : "left-16 -translate-x-full"
          } w-[14px] h-auto aspect-square rounded-full bg-base-content transition-all duration-300`}
        /> */}
      </button>
    </nav>
  );
};
