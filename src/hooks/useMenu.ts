import { useState } from "react";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);

    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  }

  function closeMenu() {
    setIsMenuOpen(false);

    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    openMenu();
  }

  return { isMenuOpen, openMenu, closeMenu, toggleMenu };
};
