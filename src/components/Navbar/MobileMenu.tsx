import React from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {useTranslation} from "react-i18next";

const MobileMenu = () => {
    const { data: session, status } = useSession();
    const {t} = useTranslation();

    return (
        <div
            className={"h-screen bg-offWhiteTint w-full fixed z-[90] top-0 left-0"}
        >
            <div className={`${styles["container"]}`}>
                <Link href={"/"}>{t("home")}</Link>
                <Link href={"/category"}>{t("category")}</Link>
                <Link href={"/search"}>{t("search")}</Link>
                <button
                    onClick={() =>
                        session?.user.token.accessToken ? signOut() : signIn()
                    }
                >
                    {session?.user.token.accessToken ? "Sign out" : "Sign in"}
                </button>            </div>
        </div>
    );
};

export default MobileMenu;
