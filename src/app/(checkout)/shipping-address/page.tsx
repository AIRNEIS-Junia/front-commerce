import React from "react";
import SignupForm from "@/components/UI/Form/SignupForm";
import ShippingForm from "@/components/UI/Form/ShippingForm";

const Page = () => {
  return (
    <>
      <h1 className={"mb-16 text-center"}>Shipping Address</h1>
      <ShippingForm />
    </>
  );
};

export default Page;
