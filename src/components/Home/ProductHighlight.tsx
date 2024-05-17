import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProductHighlight = () => {
  const { t } = useTranslation();

  return (
    <section
      className={"p-extrasmall pb-medium md:p-0 bg-opal text-offWhiteTint"}
    >
      <div className="mx-auto md:grid md:grid-cols-2">
        <div className={"aspect-square relative md:order-last"}>
          <Image
            fill
            src={"/images/products/product-1.webp"}
            className={"object-cover"}
            alt={""}
          />
        </div>
        <div
          className={
            "md:order-first md:flex md:flex-col md:justify-center md:w-2/3 mx-auto"
          }
        >
          <h3 className={"my-medium md:mt-0 text-offWhiteTint"}>
            {t("product_title")}
          </h3>
          <p className={"mb-small"}>{t("product_description")}</p>
          <Link className={"text-sm italic"} href={"/"}>
            {t("view_product")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
