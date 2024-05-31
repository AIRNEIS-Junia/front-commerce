import React from "react";
import Image from "next/image";

// @ts-ignore
const OrderSummaryDetailsItem = ({ product }) => {
  const { images, name, size, price } = product;

  return (
    <div className={"grid grid-cols-[120px_1fr] gap-16"}>
      <div
        className={
          "aspect-square relative rounded-small border border-oyster overflow-hidden"
        }
      >
        <Image
          src={images[0] || "/default-product-image.svg"}
          fill
          className={"object-cover"}
          alt={""}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className={"flex flex-col space-y-4"}>
        <span>{name}</span>
        <div>{size}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default OrderSummaryDetailsItem;
