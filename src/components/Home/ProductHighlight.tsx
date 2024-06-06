import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const ProductHighlight = ({ product }: { product: Product }) => {
  const truncatedDescription = truncateText(product?.description || "", 150);

  return (
    <section
      data-testid="product-highlight"
      className={"p-extrasmall pb-medium md:p-0 bg-opal text-offWhiteTint"}
    >
      <div className="mx-auto md:grid md:grid-cols-2">
        <div className={"aspect-square relative md:order-last"}>
          <Image
            fill
            src={
              product?.images?.[0]
                ? product?.images?.[0]
                : "/default-product-image.svg"
            }
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
            {product?.name}
          </h3>
          <p className={"mb-small"}>{truncatedDescription}</p>
          <Link
            className={"w-fit text-sm italic btn btn-light"}
            href={`/products/${product?.slug}`}
          >
            VOIR LE PRODUIT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
