import React from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import PaymentForm from "@/components/UI/Form/PaymentForm";

const Page = () => {
  return (
    <>
      <h1 className={"mb-16 text-center"}>Payment details</h1>
      <PaymentForm />
    </>
  );
};

export default Page;
