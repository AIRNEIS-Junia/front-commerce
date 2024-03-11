"use client";
import React, { useEffect, useState } from "react";
import SelectShippingAddress from "@/components/Profile/SelectShippingAddress";
import { CreateShippingModal } from "@/components/UI/Modal/CreateShippingModal";
import EditShippingModal from "@/components/UI/Modal/EditShippingModal";

interface AddressType {
  streetNumber: string;
  street: string;
  additional: string;
  zipCode: string;
  city: string;
  country: string;
}

type SearchParamProps = {
  searchParams: Record<string, string | undefined>;
  editShipping?: string;
  createShipping?: string;
};

const ManageShipping = ({
  searchParams,
  addresses,
}: {
  searchParams: SearchParamProps;
  addresses: void | Response;
}) => {
  const showCreateShippingModal = searchParams?.createShipping;
  const showEditShippingModal = searchParams?.editShipping;

  const [address, setAddress] = useState<AddressType>({
    streetNumber: "",
    street: "",
    additional: "",
    zipCode: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (Array.isArray(addresses) && addresses.length > 0) {
      setAddress(addresses[0]);
    }
  }, [addresses]);

  return (
    <>
      <SelectShippingAddress address={address} />
      {showCreateShippingModal && <CreateShippingModal />}
      {showEditShippingModal && <EditShippingModal address={address} />}
    </>
  );
};

export default ManageShipping;
