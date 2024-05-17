"use client";
import React from "react";
import styles from "./SearchResult.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SearchResult = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.search}>
      <p className={styles.productNumber}>21 {t("products")}</p>
      <div className={styles.searchContainer}>
        <input
          className={styles.inputField}
          type="text"
          placeholder={t("search")}
        />
        <Image
          src={"search.svg"}
          alt="Search Icon"
          className={"object-center"}
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};
export default SearchResult;
