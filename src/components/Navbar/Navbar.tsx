"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HamburgerMenu from "@/components/Navbar/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import MobileMenu from "@/components/Navbar/MobileMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const cartItems: any[] = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    let cartQuantity = 0;

    cartItems.forEach((item: any) => {
      cartQuantity += item.quantity;
    });

    setCartItemsCount(cartQuantity);
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
