"use client";
import React from "react";
import Newsletter from "@/components/Footer/Newsletter/Newsletter";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <Newsletter />
      <div className={"bg-opal text-offWhiteTint pt-medium"}>
        <div
          className={
            "border-y border-offWhiteTint grid grid-cols-2 md:grid-cols-4"
          }
        >
          <div className={"border-b lg:border-b-0 p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>{t("shop")}</Link>
            <Link href={""}>{t("home")}</Link>
            <Link href={""}>{t("home")}</Link>
          </div>
          <div
            className={
              "border-l border-b lg:border-b-0 p-4 flex flex-col space-y-4"
            }
          >
            <Link href={"!mb-6"}>{t("shop")}</Link>
            <Link href={""}>{t("home")}</Link>
            <Link href={""}>{t("home")}</Link>
          </div>
          <div className={"lg:border-l p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>{t("shop")}</Link>
            <Link href={""}>{t("home")}</Link>
            <Link href={""}>{t("home")}</Link>
          </div>
          <div className={"border-l p-4 flex flex-col space-y-4"}>
            <Link href={"!mb-6"}>{t("shop")}</Link>
            <Link href={""}>{t("home")}</Link>
            <Link href={""}>{t("home")}</Link>
          </div>
        </div>
        <div className="py-medium border-b border-offWhiteTint flex justify-center">
          <a href={"#"} className={"underline-none focus:outline-none"}>
            <p className={`${styles["logo-text-footer"]} logo-text-footer`}>
              airneis
            </p>
          </a>
        </div>
        <div className="py-medium flex justify-center">
          <p className={"italic"}>© ÀIRNESS 2023 | {t("devops_project")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
