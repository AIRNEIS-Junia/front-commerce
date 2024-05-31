import React from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import AddressSelect from "@/components/Checkout/AddressSelect";
import { getAddressesByUser } from "@/services/address";

const Page = async () => {
  const userAddresses = await getAddressesByUser();

  return (
    <>
      <h1 className={"mb-16 text-center"}>Shipping Address</h1>
      <AddressSelect addresses={userAddresses} />
    </>
  );
};

export default Page;
