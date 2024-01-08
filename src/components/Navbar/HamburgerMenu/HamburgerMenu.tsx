import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";

type HamburgerMenuProps = {
  onToggleMenu: (isOpen: boolean) => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onToggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Appeler la fonction de retour passée en prop vers le parent
    onToggleMenu(!isOpen);
  };

  return (
    <div
      className={`z-[999] ${styles["hamburger-menu"]} ${
        isOpen ? styles["open"] : ""
      }`}
      onClick={toggleMenu}
    >
      <div className={`${styles.bar1}`}></div>
      <div className={`${styles.bar2}`}></div>
      <div className={`${styles.bar3}`}></div>
    </div>
  );
};

export default HamburgerMenu;
