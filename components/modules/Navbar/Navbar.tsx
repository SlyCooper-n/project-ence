import { useTheme } from "@core/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun } from "phosphor-react";
import { useState } from "react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isInEnglish = router.pathname.includes("/en");

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <nav className="py-3 sm:py-6 flex items-center sm:text-lg">
      <Link href={isInEnglish ? "/en" : "/"}>
        <a className="mr-auto">
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
          <Link href="/about">
            <a>Portfólio</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>

      {/* button to toggle theme (only on desktop screens) */}
      <label className="swap swap-rotate mr-6">
        <input type="checkbox" onChange={toggleTheme} />

        <Sun className={`swap-on fill-current w-5 h-5`} />

        <Moon className={`swap-off fill-current w-5 h-5`} />
      </label>

      {/* button to toggle language (only on desktop screens) */}
      <Link
        href={
          isInEnglish ? `/${router.pathname.slice(3)}` : `/en${router.pathname}`
        }
      >
        <a className="hidden sm:flex font-bold">{isInEnglish ? "PT" : "EN"}</a>
      </Link>

      {/* menu bar on mobile screens */}
      <button
        type="button"
        onClick={handleToggleMenu}
        className="relative sm:hidden w-16 h-[22px]"
      >
        <div className="absolute top-0 w-full h-[6px] bg-base-content" />

        <div
          className={`absolute bottom-0 ${
            isMobileMenuOpen ? "left-0" : "left-16 -translate-x-full"
          } w-[14px] h-auto aspect-square rounded-full bg-base-content transition-all duration-300`}
        />
      </button>
    </nav>
  );
};
