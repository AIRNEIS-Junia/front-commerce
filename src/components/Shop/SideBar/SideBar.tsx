"use client";
import React, { useState } from "react";
import styles from "./SideBar.module.css";

function SideBar() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  return (
    <div>
      <div className={styles.sidebar}>
        <div
          className={styles.sidebarTitle}
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <p>FILTERS</p>
        </div>
        {isFiltersOpen && (
          <div className={styles.sidebarCriteria}>
            <ul>
              <li>DECORS</li>
              <li>CERAMICS</li>
              <li>CHAIRS</li>
              <li>LAMP</li>
            </ul>
          </div>
        )}
        <div
          className={styles.sidebarTitle}
          onClick={() => setIsSortByOpen(!isSortByOpen)}
        >
          <p>SORT BY</p>
        </div>
        {isSortByOpen && (
          <div className={styles.sidebarCriteria}>
            <ul>
              <li>PRICE: LOW TO HIGH</li>
              <li>PRICE: HIGH TO LOW</li>
              <li>ALPH: A TO Z</li>
              <li>ALPH: Z TO A</li>
              <li>BEST SELLING</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
