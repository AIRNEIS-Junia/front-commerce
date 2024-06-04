import React from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const MobileMenu = () => {
  const { data: session, status } = useSession();

  return (
    <div
      className={"h-screen bg-offWhiteTint w-full fixed z-[90] top-0 left-0"}
    >
      <div className={`${styles["container"]}`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/category"}>Category</Link>
        <Link href={"/search"}>Search</Link>
        <button
          onClick={() =>
            session?.user.token.accessToken ? signOut() : signIn()
          }
        >
          {session?.user.token.accessToken ? "Sign out" : "Sign in"}
        </button>{" "}
      </div>
    </div>
  );
};

export default MobileMenu;
