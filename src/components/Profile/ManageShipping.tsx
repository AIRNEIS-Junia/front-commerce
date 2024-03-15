"use client";
import React, { useEffect, useState } from "react";
import SelectShippingAddress from "@/components/Profile/SelectShippingAddress";
import { CreateShippingModal } from "@/components/UI/Modal/CreateShippingModal";
import EditShippingModal from "@/components/UI/Modal/EditShippingModal";
import { AddressType } from "../../../types/CommonTypes";

const ManageShipping = ({ addresses }: { addresses: AddressType[] }) => {
  const [actualAddress, setActualAddress] = useState<AddressType | undefined>({
    id: "",
    name: "",
    firstName: "",
    lastName: "",
    phone: "",
    streetNumber: "",
    street: "",
    additional: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const [handleCreateModal, setHandleCreateModal] = useState(false);
  const [handleEditModal, setHandleEditModal] = useState(false);

  useEffect(() => {
    setActualAddress(addresses[0]);
  }, [addresses]);

  const handleAddressChange = (newAddress: AddressType | undefined) => {
    setActualAddress(newAddress);
  };

  return (
    <>
      <SelectShippingAddress
        onAddressChange={handleAddressChange}
        addresses={addresses}
        actualAddress={actualAddress}
      />
      {handleEditModal && (
        <EditShippingModal
          onClosing={() => setHandleEditModal(false)}
          address={actualAddress}
        />
      )}

      {handleCreateModal && (
        <CreateShippingModal onClosing={() => setHandleCreateModal(false)} />
      )}

      <div
        className={
          "flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4"
        }
      >
        <div
          className={"btn btn-dark"}
          onClick={() => setHandleCreateModal(!handleCreateModal)}
        >
          Create Shipping Address
        </div>
        <div
          className={"btn btn-dark"}
          onClick={() => setHandleEditModal(!handleEditModal)}
        >
          Edit Shipping Address
        </div>
      </div>
    </>
  );
};

export default ManageShipping;
