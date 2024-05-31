"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/Select/Select";
import { AddressInput } from "@/types/Address";
import { selectAddress, showForm } from "@/lib/features/cart/address.slice";
import { AppDispatch, RootState } from "@/lib/store";

const AddressSelect = ({ addresses }: { addresses: AddressInput[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedAddressId = useSelector(
    (state: RootState) => state.address.selectedAddress?.id,
  );
  const showAddressForm = useSelector(
    (state: RootState) => state.address.showForm,
  );

  const handleSelectChange = (value: string) => {
    if (value === "add-address") {
      dispatch(showForm());
    } else {
      const selectedAddress = addresses.find((addr) => addr.id === value);
      dispatch(selectAddress(selectedAddress));
    }
  };

  return (
    <>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue
            placeholder={
              selectedAddressId ? "Selected address" : "Select an address"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {addresses.map((address) => (
            <SelectItem key={address.id} value={address.id}>
              {address.street} {address.streetNumber}, {address.city}
            </SelectItem>
          ))}
          <SelectItem key="add-address" value="add-address">
            Add shipping address
          </SelectItem>
        </SelectContent>
      </Select>
      {showAddressForm && <ShippingForm type={"create"} />}
    </>
  );
};

export default AddressSelect;
