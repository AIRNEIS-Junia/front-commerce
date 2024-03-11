"use client";
import React, { useEffect, useState } from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface AddressType {
  streetNumber: string;
  street: string;
  additional: string;
  zipCode: string;
  city: string;
  country: string;
}

const EditShippingModal = ({ address }: { address: AddressType }) => {
  const [actualAddress, setActualAddress] = useState<AddressType>({
    streetNumber: "",
    street: "",
    additional: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const router = useRouter();

  return (
    <div className="z-[99] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white relative">
        <ShippingForm />
        <FaXmark
          className={"cursor-pointer absolute top-4 right-8"}
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  );
};

export default EditShippingModal;
