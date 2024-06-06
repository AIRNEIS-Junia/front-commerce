import React from "react";

import { getPaymentCardsByUser } from "@/services/paymentCard";
import { getAddressesByUser } from "@/services/address";
import CheckoutView from "@/views/Checkout/CheckoutView";

const Page = async () => {
  const userAddresses = await getAddressesByUser();
  const userPaymentCards = await getPaymentCardsByUser();

  return (
    <>
      <CheckoutView addresses={userAddresses} creditCards={userPaymentCards} />
    </>
  );
};

export default Page;
