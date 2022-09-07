import { NavbarProps } from "@core/types";
import { menuOptions } from "@core/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = ({ translucent, absolute }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isInEnglish = router.pathname.includes("/en");

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <>
      <nav
        className={`py-5 sm:py-8 flex items-center z-50 ${
          translucent ? "bg-opacity-70 bg-base-100" : ""
        } ${
          absolute ? "sm:absolute sm:top-0 sm:left-0 sm:w-full sm:px-[5vw]" : ""
        }`}
      >
        {/* logo */}
        <Link href={isInEnglish ? "/en" : "/"}>
          <a className="mr-auto w-7 z-50">
            <img
              src={
                isMobileMenuOpen
                  ? "/images/logo-minimal-white.svg"
                  : "/images/logo-minimal-black.svg"
              }
              alt="Ence logo"
            />
          </a>
        </Link>

        {/* desktop menu */}
        <ul className="mr-12 hidden sm:flex gap-6 font-bold">
          {menuOptions.map((opt) => (
            <li key={opt.name}>
              <Link href={isInEnglish ? `/en${opt.path}` : opt.path}>
                <a className="relative">
                  {isInEnglish ? opt.en_name : opt.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <style jsx>{`
          a.relative::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 3px;
            margin-bottom: -3px;
            background-color: #22223b;
            transition: all 0.3s ease;
          }
          a.relative:hover::before,
          a.relative.lang-active::before {
            width: 100%;
          }
        `}</style>

        {/* language toggler buttons */}
        <Link
          href={{
            pathname: isInEnglish
              ? `/${router.pathname.slice(4)}`
              : `/${router.pathname}`,
            query: router.pathname.includes("/projects/")
              ? { slug: router.query.slug }
              : {},
          }}
        >
          <a
            className={`relative flex mr-3 z-50 ${
              isMobileMenuOpen ? "text-white" : ""
            } ${isInEnglish ? "" : "lang-active"}`}
          >
            PT
          </a>
        </Link>

        <Link
          href={{
            pathname: isInEnglish
              ? `/${router.pathname}`
              : `/en${router.pathname}`,
            query: router.pathname.includes("/projects/")
              ? { slug: router.query.slug }
              : {},
          }}
        >
          <a
            className={`relative flex mr-3 z-50 ${
              isMobileMenuOpen ? "text-white" : ""
            } ${isInEnglish ? "lang-active" : ""}`}
          >
            EN
          </a>
        </Link>

        {/* menu bar on mobile screens */}
        <button
          type="button"
          onClick={handleToggleMenu}
          className="relative sm:hidden w-16 z-50"
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-full h-3 ${
              isMobileMenuOpen ? "bg-white" : "bg-base-content"
            }`}
          />

          {/* <div
          className={`absolute bottom-0 ${
            isMobileMenuOpen ? "left-0" : "left-16 -translate-x-full"
          } w-[14px] h-auto aspect-square rounded-full bg-base-content transition-all duration-300`}
        /> */}
        </button>

        {/* mobile menu */}
        <ul
          className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-8 bg-primary text-xl text-white ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } transition-opacity duration-500 z-40`}
        >
          {menuOptions
            .filter((opt) => opt.mobile)
            .map((opt) => (
              <li key={opt.name}>
                <Link href={isInEnglish ? opt.en_path : opt.path}>
                  <a onClick={handleToggleMenu}>
                    {isInEnglish ? opt.en_name : opt.name}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};
