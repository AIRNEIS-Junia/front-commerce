"use client";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles["header"]}>
        <h1>Bedroom</h1>
      </header>
    </div>
  );
};

export default Header;
