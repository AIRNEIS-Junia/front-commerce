"use client";
import React from "react";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerContainer}>
      <header className={styles["header"]}>
        <h1>{t("bedroom")}</h1>
      </header>
    </div>
  );
};

export default Header;
