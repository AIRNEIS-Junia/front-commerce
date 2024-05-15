import React from "react";
import OrderSummaryDetails from "@/components/Checkout/OrderSummaryDetails";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1 className={"text-center mb-16"}>Order summary</h1>
      <OrderSummaryDetails />
      <div
        className={
          "py-4 flex justify-between border-t border-b border-oyster mt-16"
        }
      >
        <div>GRAND TOTAL INCL. TAX</div>
        <div>Total</div>
      </div>
      <div className={"flex"}>
        <Link
          className={"btn btn-dark text-center !w-full mt-16"}
          href={"/address"}
        >
          FILL THE ADRESS
        </Link>
      </div>
    </>
  );
};

export default Page;
