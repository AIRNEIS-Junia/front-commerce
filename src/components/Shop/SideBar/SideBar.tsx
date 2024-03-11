import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>
          <p>FILTERS</p>
        </div>
        <div className={styles.sidebarCriteria}>
          <ul>
            <li>DECORS</li>
            <li>CERAMICS</li>
            <li>CHAIRS</li>
            <li>LAMP</li>
          </ul>
        </div>
        <div className={styles.sidebarTitle}>
          <p>SORT BY</p>
        </div>
        <div className={styles.sidebarCriteria}>
          <ul>
            <li>PRICE: LOW TO HIGH</li>
            <li>PRICE: HIGH TO LOW</li>
            <li>ALPH: A TO Z</li>
            <li>ALPH: Z TO A</li>
            <li>BEST SELLING</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
