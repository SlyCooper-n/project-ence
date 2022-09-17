import { NavbarProps } from "@core/types";
import { menuItems, menuList, menuOptions } from "@core/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Navbar = ({
  translucent,
  absolute,
  onMenuOpen,
  className,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isInEnglish = router.pathname.includes("/en");

  useEffect(() => {
    onMenuOpen && onMenuOpen(isMenuOpen);
  }, [isMenuOpen, onMenuOpen]);

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav
      className={`py-5 sm:py-8 flex flex-row-reverse sm:flex-row justify-between items-center text-black z-50 ${
        translucent ? "bg-opacity-70 bg-base-100" : ""
      } ${
        absolute ? "sm:absolute sm:top-0 sm:left-0 sm:w-full sm:px-[5vw]" : ""
      } ${className}`}
    >
      {/* menu bar */}
      <button
        type="button"
        onClick={handleToggleMenu}
        className="relative w-16 ml-auto sm:mr-auto sm:ml-0 z-50"
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-full h-3 bg-black`}
        />
      </button>

      {!router.pathname.includes("/budget") ? (
        <Link href={isInEnglish ? "/en/budget" : "/budget"}>
          <a className="relative hidden sm:block z-50">
            {isInEnglish ? "Start experience" : "Iniciar experiência"}
          </a>
        </Link>
      ) : (
        <span className="hidden sm:block z-50">
          {isInEnglish ? "Experience started" : "Experiência iniciada"}
        </span>
      )}

      <div className="divider hidden sm:block w-[13vw] h-1 mx-4 bg-black z-50" />

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
            className={`relative flex mr-3 font-semibold z-50 ${
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
            className={`relative flex mr-3 font-semibold z-50 ${
              isInEnglish ? "lang-active" : ""
            }`}
          >
            EN
          </a>
        </Link>
      </div>

      {/* menu */}
      <motion.ul
        variants={menuList}
        animate={isMenuOpen ? "show" : "hidden"}
        className="fixed top-0 -right-full w-screen h-screen pl-16 pt-16 flex flex-col justify-center gap-4 sm:gap-8 bg-secondary z-[49]"
      >
        {menuOptions.map((opt) => {
          if (
            router.pathname.includes("/budget") &&
            opt.name.includes("Iniciar experiência")
          ) {
            return (
              <motion.span
                variants={menuItems}
                animate={isMenuOpen ? "show" : "hidden"}
                className="sm:text-5xl font-semibold"
              >
                {isInEnglish ? "Experience started" : "Experiência iniciada"}
              </motion.span>
            );
          }

          return (
            <motion.li
              key={opt.name}
              variants={menuItems}
              animate={isMenuOpen ? "show" : "hidden"}
            >
              <Link href={isInEnglish ? opt.en_path : opt.path}>
                <motion.a className="relative font-semibold sm:text-5xl cursor-pointer">
                  {isInEnglish ? opt.en_name : opt.name}
                </motion.a>
              </Link>
            </motion.li>
          );
        })}

        <motion.li
          variants={menuItems}
          animate={isMenuOpen ? "show" : "hidden"}
        >
          <ul className="mt-12 flex gap-4 text-[8px] sm:text-base">
            <li>
              <a
                href="https://www.behance.net/joaovitorn-ence/moodboards"
                rel="noreferrer"
                target="_blank"
                className="relative"
              >
                Behance
              </a>
            </li>

            <li>
              <a
                href="www.instagram.com/encestudio"
                rel="noreferrer"
                target="_blank"
                className="relative"
              >
                Instagram
              </a>
            </li>
          </ul>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
