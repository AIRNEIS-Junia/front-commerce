"use client";
import React from "react";
import ProductGrid from "@/components/Shop/ProductGrid/ProductGrid";
import Header from "@/components/Shop/Header/Header";
import SideBar from "@/components/Shop/SideBar/SideBar";
import SearchResult from "@/components/Shop/SearchResult/SearchResult";
import styles from "./category.module.css";

const Category = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.titleBar}></div>
      <Header></Header>
      <SearchResult></SearchResult>
      <SideBar></SideBar>
      <ProductGrid></ProductGrid>
    </div>
  );
};

export default Category;
