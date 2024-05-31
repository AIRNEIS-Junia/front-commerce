"use client";

import { useState, useEffect, FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/Select/Select";
import { AddressInput } from "@/types/Address";
import ShippingForm from "@/components/UI/Form/ShippingForm";

interface AddressSelectProps {
  addresses: AddressInput[];
}

const AddressSelect: FC<AddressSelectProps> = ({ addresses }) => {
  const [selectedAddress, setSelectedAddress] = useState<AddressInput | null>(
    null,
  );
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!selectedAddress && addresses.length > 0) {
      setSelectedAddress(addresses[addresses.length - 1]);
    }
  }, [addresses, selectedAddress]);

  const handleSelectChange = (value: string) => {
    if (value === "add-address") {
      setShowForm(true);
    } else {
      setShowForm(false);
      setSelectedAddress(addresses.find((addr) => addr.id === value) || null);
    }
  };

  return (
    <>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder={"Select an address"} />
        </SelectTrigger>
        <SelectContent>
          {addresses.map((address) => (
            <SelectItem key={address.id} value={address.id ? address.id : ""}>
              {address.street} {address.streetNumber}, {address.city}
            </SelectItem>
          ))}
          <SelectItem key="add-address" value="add-address">
            Add shipping address
          </SelectItem>
        </SelectContent>
      </Select>
      {showForm && (
        <ShippingForm
          address={{
            id: undefined,
            name: "",
            firstName: "",
            lastName: "",
            phone: "",
            streetNumber: "",
            street: "",
            additional: undefined,
            zipCode: "",
            city: "",
            country: "",
          }}
          {...{ type: "create", onClosing: () => setShowForm(false) }}
        />
      )}
    </>
  );
};

export default AddressSelect;
