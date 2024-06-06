"use client";
import React, { useEffect, useState } from "react";
import OrderSummaryDetails from "@/components/Checkout/OrderSummaryDetails";
import Link from "next/link";
import { useSelector } from "react-redux";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const cartItems: any[] = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <div>
        <h1 className={"text-center mb-16"}>Panier</h1>
        <OrderSummaryDetails />
        <div
          className={
            "py-4 flex justify-between border-t border-b border-oyster mt-16"
          }
        >
          <div>TOTAL INCLUANT LA TVA</div>
          <div>Total</div>
        </div>
        <div className={"flex"}>
          {cartItems.length > 0 && (
            <Link
              className={"btn btn-dark text-center !w-full mt-16"}
              href={"/checkout"}
            >
              RENSEIGNER MON ADRESSE
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Page;
