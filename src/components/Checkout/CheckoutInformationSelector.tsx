import { useState, FC, useEffect } from "react";
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
  currentStep: string;
}

const CheckoutInformationSelector: FC<CheckoutInformationSelectorProps> = ({
  addresses,
  creditCards,
  onValueChange,
  currentStep,
}) => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    if (currentStep === "address") {
      setPlaceholder("Sélectionner une adresse");
    } else if (currentStep === "payment") {
      setPlaceholder("Selectionner une carte bancaire");
    }
  }, [currentStep]);

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
        { label: "Ajouter une adresse de livraison", value: "add-address" },
      ];
    } else if (currentStep === "payment") {
      return creditCards
        ? [
            ...creditCards?.map((creditCard) => ({
              label: `**** **** **** ${creditCard.cardNumber.slice(-4)}`,
              value: creditCard.id,
            })),
            { label: "Ajouter une carte bancaire", value: "add-credit-card" },
          ]
        : [];
    }
  };

  return (
    <Select key={currentStep} onValueChange={handleSelectChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {getOptions()?.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value ? option.value : "c'est xa"}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CheckoutInformationSelector;
