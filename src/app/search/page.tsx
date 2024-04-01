import React from "react";
import ProductGrid from "@/components/Shop/ProductGrid/ProductGrid";
import SideBar from "@/components/Shop/SideBar/SideBar";
import SearchResult from "@/components/Shop/SearchResult/SearchResult";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={`${styles.gridContainer} mt-40`}>
      <div className={styles.titleBar}></div>
      <div className={styles.all}>
        <h2>All</h2>
      </div>
      <SearchResult></SearchResult>
      <SideBar></SideBar>
      <ProductGrid></ProductGrid>
    </div>
  );
};

export default Search;
