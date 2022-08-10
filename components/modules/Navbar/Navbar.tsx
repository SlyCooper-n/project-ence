import { useTheme } from "@core/hooks";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <nav className="py-3 flex sm:text-lg">
      <Link href="/">
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

      {/* button to toggle language (only on desktop screens) */}
      <button type="button" className="hidden sm:flex font-bold">
        EN
      </button>

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
