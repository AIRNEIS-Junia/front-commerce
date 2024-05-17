import React from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { signOut, useSession, signIn } from "next-auth/react";

const MobileMenu = () => {
  const { data: session, status, update } = useSession();

  return (
    <div
      className={"h-screen bg-offWhiteTint w-full fixed z-[90] top-0 left-0"}
    >
      <div className={`${styles["container"]}`}>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Accueil</Link>
        <button
          onClick={() => (status === "authenticated" ? signOut() : signIn())}
        >
          {status === "authenticated" ? "Sign out" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
