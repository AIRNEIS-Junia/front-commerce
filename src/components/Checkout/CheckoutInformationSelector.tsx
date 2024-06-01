import { useState, FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/Select/Select";
import { AddressInput } from "@/types/Address";
import { CreditCard } from "@/types/CreditCard";

interface CheckoutInformationSelectorProps {
  addresses: AddressInput[];
  creditCards: CreditCard[];
  onValueChange: (value: string) => void;
  currentStep: "address" | "payment";
}

const CheckoutInformationSelector: FC<CheckoutInformationSelectorProps> = ({
  addresses,
  creditCards,
  onValueChange,
  currentStep,
}) => {
  const handleSelectChange = (value: string) => {
    onValueChange(value);
  };

  const getOptions = () => {
    if (currentStep === "address") {
      return [
        ...addresses.map((address) => ({
          label: `${address.street} ${address.streetNumber}, ${address.city}`,
          value: address.id,
        })),
        { label: "Add shipping address", value: "add-address" },
      ];
    } else if (currentStep === "payment") {
      return creditCards
        ? [
            ...creditCards?.map((creditCard) => ({
              label: `**** **** **** ${creditCard.cardNumber.slice(-4)}`,
              value: creditCard.id,
            })),
            { label: "Add credit card", value: "add-credit-card" },
          ]
        : [];
    }
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger>
        <SelectValue
          placeholder={
            currentStep === "address"
              ? "Select an address"
              : "Select a credit card"
          }
        />
      </SelectTrigger>
      <SelectContent>
        {getOptions()?.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value ? option.value : ""}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CheckoutInformationSelector;
