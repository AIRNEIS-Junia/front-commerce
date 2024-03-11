"use client";
import * as React from "react";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import { FaCross, FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function CreateShippingModal() {
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
}
