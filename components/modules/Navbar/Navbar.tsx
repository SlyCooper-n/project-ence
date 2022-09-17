import { NavbarProps } from "@core/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = ({ translucent, absolute, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isInEnglish = router.pathname.includes("/en");

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <nav
      className={`py-5 sm:py-8 flex justify-between items-center text-black z-50 ${
        translucent ? "bg-opacity-70 bg-base-100" : ""
      } ${
        absolute ? "sm:absolute sm:top-0 sm:left-0 sm:w-full sm:px-[5vw]" : ""
      } ${className}`}
    >
      {/* menu bar on mobile screens */}
      <button
        type="button"
        onClick={handleToggleMenu}
        className="relative w-16 mr-auto z-50"
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-full h-3 bg-black`}
        />
      </button>

      <Link href={isInEnglish ? "/en/budget" : "/budget"}>
        <a className="relative hidden sm:block">Iniciar experiência</a>
      </Link>

      <div className="divider hidden sm:block w-[13vw] h-1 mx-4 bg-black" />

      {/* language toggler buttons */}
      <div className="flex">
        <Link
          href={{
            pathname: isInEnglish
              ? `/${router.pathname.slice(4)}`
              : `${router.pathname}`,
            query: router.pathname.includes("/projects/")
              ? { slug: router.query.slug }
              : {},
          }}
        >
          <a
            className={`relative flex mr-3 z-50 ${
              isInEnglish ? "" : "lang-active"
            }`}
          >
            PT
          </a>
        </Link>

        <Link
          href={{
            pathname: isInEnglish
              ? `${router.pathname}`
              : `/en${router.pathname}`,
            query: router.pathname.includes("/projects/")
              ? { slug: router.query.slug }
              : {},
          }}
        >
          <a
            className={`relative flex mr-3 z-50 ${
              isInEnglish ? "lang-active" : ""
            }`}
          >
            EN
          </a>
        </Link>
      </div>
    </nav>
  );
};
