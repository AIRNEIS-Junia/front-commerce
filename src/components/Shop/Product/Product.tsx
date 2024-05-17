import React from "react";
import styles from "./Product.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className={""}>
      <div className={"relative aspect-square "}>
        <Image
          src={"/images/products/product-1.webp"}
          alt="Product Picture"
          className={"object-center"}
          fill
        />
      </div>
      <div className={"text-black"}>
        <p className={styles["title"]}>{t("product_title")}</p>
        <p className={styles["price"]}>$4,990</p>
      </div>
    </div>
  );
};

export default Product;
