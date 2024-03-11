import React from "react";
import Image from "next/image";
import OrderSummaryDetailsItem from "@/components/Checkout/OrderSummaryDetailsItem";

const OrderSummaryDetails = () => {
  return (
    <div className={"flex flex-col space-y-14"}>
      <OrderSummaryDetailsItem
        img={"/images/home/Hero.webp"}
        name={"Name"}
        price={"300.30"}
        size={"100x100"}
      />
      <OrderSummaryDetailsItem
        img={"/images/home/Hero.webp"}
        name={"Name"}
        price={"300.30"}
        size={"100x100"}
      />
    </div>
  );
};

export default OrderSummaryDetails;
