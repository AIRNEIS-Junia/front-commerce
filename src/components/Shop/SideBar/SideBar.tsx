"use client";
import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { useTranslation } from "react-i18next";

function SideBar() {
  const { t } = useTranslation();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  return (
    <div>
      <div className={styles.sidebar}>
        <div
          className={styles.sidebarTitle}
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <p>{t("filter")}</p>
        </div>
        {isFiltersOpen && (
          <div className={styles.sidebarCriteria}>
            <ul>
              <li>{t("decors")}</li>
              <li>{t("ceramics")}</li>
              <li>{t("chairs")}</li>
              <li>{t("lamp")}</li>
            </ul>
          </div>
        )}
        <div
          className={styles.sidebarTitle}
          onClick={() => setIsSortByOpen(!isSortByOpen)}
        >
          <p>{t("sort")}</p>
        </div>
        {isSortByOpen && (
          <div className={styles.sidebarCriteria}>
            <ul>
              <li>
                {t("price")}: {t("low_to_high")}
              </li>
              <li>
                {t("price")}: {t("high_to_low")}
              </li>
              <li>ALPH: A {t("to")} Z</li>
              <li>ALPH: Z {t("to")} A</li>
              <li>{t("best_selling")}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
