// Import des dépendances React et Image de Next.js
import React from "react";
import Image from "next/image";

// Définition du composant OrderSummaryDetailsItem
const OrderSummaryDetailsItem = ({
  img,
  name,
  size,
  price,
}: {
  img: string;
  name: string;
  size: string;
  price: string;
}) => {
  return (
    <div className={"grid grid-cols-[120px_1fr] gap-16"}>
      <div
        className={
          "aspect-square relative rounded-small border border-oyster overflow-hidden"
        }
      >
        <Image
          src={img}
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
