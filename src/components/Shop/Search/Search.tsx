import styles from "./Search.module.css";
import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <div className={styles.search}>
      <p className={styles.productNumber}>21 products</p>
      <div className={styles.searchContainer}>
        <input className={styles.inputField} type="text" placeholder="SEARCH" />
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
export default Search;
