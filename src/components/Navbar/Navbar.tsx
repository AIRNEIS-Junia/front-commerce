"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HamburgerMenu from "@/components/Navbar/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import MobileMenu from "@/components/Navbar/MobileMenu";
import styles from "./Navbar.module.css";
import { RootState } from "@/lib/store";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [cartItemsCount, setCartItemsCount] = React.useState(0);

  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.items);

  React.useEffect(() => {
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

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
      <Link href={"/"} className={`${styles["logo-text"]}`}>
        airneis
      </Link>
      <div className={"flex space-x-4 items-center"}>
        <Link href={"/cart"} className={"flex space-x-2 items-center"}>
          <p className={"text-stormy"}>BAG</p>
          <div
            className={
              "p-[10px] bg-greyTint rounded-full w-[32px] h-[32px] text-offWhiteTint flex justify-center items-center"
            }
          >
            {cartItemsCount}
          </div>
        </Link>
        <Link href={"/profile"}>
          <CiUser color={"stormy"} size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
