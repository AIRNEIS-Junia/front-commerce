import React from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div
      className={"h-screen bg-offWhiteTint w-full fixed z-[90] top-0 left-0"}
    >
      <div className={`${styles["container"]}`}>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Accueil</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
