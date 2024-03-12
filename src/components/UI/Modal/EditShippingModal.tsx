"use client";
import React, { useEffect, useState } from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { AddressType } from "../../../../types/CommonTypes";

const EditShippingModal = ({
  address,
  onClosing,
}: {
  address: AddressType | undefined;
  onClosing: () => void;
}) => {
  const router = useRouter();

  console.log("address", address);

  return (
    <div className="z-[99] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white relative">
        <ShippingForm type={"edit"} address={address} />
        <FaXmark
          className={"cursor-pointer absolute top-4 right-8"}
          onClick={onClosing}
        />
      </div>
    </div>
  );
};

export default EditShippingModal;
