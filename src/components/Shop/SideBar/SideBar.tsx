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
          <p>DECORS</p>
          <p>CERAMICS</p>
          <p>CHAIRS</p>
          <p>LAMP</p>
        </div>
        <div className={styles.sidebarTitle}>
          <p>SORT BY</p>
        </div>
        <div className={styles.sidebarCriteria}>
          <p>PRICE: LOW TO HIGH</p>
          <p>PRICE: HIGH TO LOW</p>
          <p>ALPH: A TO Z</p>
          <p>ALPH: Z TO A</p>
          <p>BEST SELLING</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
