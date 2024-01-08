import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles["hamburger-menu"]} ${isOpen ? styles["open"] : ""}`}
      onClick={toggleMenu}
    >
      <div className={`${styles.bar1}`}></div>
      <div className={`${styles.bar2}`}></div>
      <div className={`${styles.bar3}`}></div>
    </div>
  );
};

export default HamburgerMenu;
