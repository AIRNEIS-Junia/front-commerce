import React from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const MobileMenu = () => {
  const { data: session } = useSession();

  return (
    <div
      className={"h-screen bg-offWhiteTint w-full fixed z-[90] top-0 left-0"}
    >
      <div className={`${styles["container"]}`}>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/search"}>Boutique</Link>
        <button
          onClick={() =>
            session?.user.token.accessToken ? signOut() : signIn()
          }
        >
          {session?.user.token.accessToken ? "Déconnexion" : "Connexion"}
        </button>{" "}
      </div>
    </div>
  );
};

export default MobileMenu;
