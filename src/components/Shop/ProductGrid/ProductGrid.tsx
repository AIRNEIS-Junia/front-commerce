"use client";
import styles from "./ProductGrid.module.css";
import Product from "@/components/Shop/Product/Product";
import React from "react";

const ProductGrid = () => {
  return (
    <div className={styles.productGrid}>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
    </div>
  );
};

export default ProductGrid;
