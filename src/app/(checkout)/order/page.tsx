import React from "react";

import { getPaymentCardsByUser } from "@/services/paymentCard";
import { getAddressesByUser } from "@/services/address";
import CheckoutView from "@/views/Checkout/CheckoutView";

const Page = async () => {
  const userAddresses = await getAddressesByUser();
  const userPaymentCards = await getPaymentCardsByUser();

  return (
    <>
      <h1 className={"mb-16 text-center"}>Shipping Address</h1>
      <CheckoutView addresses={userAddresses} creditCards={userPaymentCards} />
    </>
  );
};

export default Page;
