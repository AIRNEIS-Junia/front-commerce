"use client";
import React, { useState } from "react";
import HamburgerMenu from "@/components/Navbar/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import MobileMenu from "@/components/Navbar/MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Créer une fonction de rappel pour gérer l'événement de changement d'état
  const handleToggleMenu = (isOpen: boolean) => {
    setShowMobileMenu(isOpen);
  };

  return (
    <nav
      className={
        "fixed top-0 bg-transparent px-4 py-2 flex justify-between items-center w-full z-[90]"
      }
    >
      <HamburgerMenu onToggleMenu={handleToggleMenu} />
      {showMobileMenu ? <MobileMenu /> : <></>}
      <Link href={"/"} className={"logo-text"}>
        airneis
      </Link>
      <div className={"flex space-x-4 items-center"}>
        <Link href={"/"} className={"flex space-x-2 items-center"}>
          <p className={"text-stormy"}>BAG</p>
          <div
            className={
              "p-[10px] bg-greyTint rounded-full w-[32px] h-[32px] text-offWhiteTint flex justify-center items-center"
            }
          >
            1
          </div>
        </Link>
        <Link href={"/"}>
          <CiUser color={"white"} size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
