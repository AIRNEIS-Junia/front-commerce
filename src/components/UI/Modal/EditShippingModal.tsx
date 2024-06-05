"use client";
import React from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import { FaXmark } from "react-icons/fa6";
import { AddressInput } from "@/types/Address";

const EditShippingModal = ({
  onClosing,
}: {
  address: AddressInput | undefined;
  onClosing: () => void;
}) => {
  return (
    <div className="z-[99] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white relative">
        <ShippingForm
          onSubmit={() => console.log("need to be implemented")}
          type={"create"}
        />
        <FaXmark
          className={"cursor-pointer absolute top-4 right-8"}
          onClick={onClosing}
        />
      </div>
    </div>
  );
};

export default EditShippingModal;
