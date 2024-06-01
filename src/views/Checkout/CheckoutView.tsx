"use client";
import { useState, useEffect, FC } from "react";
import { AddressInput } from "@/types/Address";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import PaymentForm from "@/components/UI/Form/PaymentForm";
import { CreditCard } from "@/types/CreditCard";
import CheckoutInformationSelector from "@/components/Checkout/CheckoutInformationSelector";

interface AddressSelectProps {
  addresses: AddressInput[];
  creditCards: CreditCard[];
}

const CheckoutView: FC<AddressSelectProps> = ({ addresses, creditCards }) => {
  const [selectedAddress, setSelectedAddress] = useState<AddressInput | null>(
    null,
  );
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState<"address" | "payment">(
    "address",
  ); // nouvel état pour suivre l'étape actuelle

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

  const handleNextClick = () => {
    if (currentStep === "address" && !selectedAddress) {
      return;
    }
    setCurrentStep((prevStep) =>
      prevStep === "address" ? "payment" : "address",
    );
  };

  const handlePrevClick = () => {
    setCurrentStep((prevStep) =>
      prevStep === "payment" ? "address" : "payment",
    );
  };

  return (
    <>
      <CheckoutInformationSelector
        addresses={addresses}
        creditCards={creditCards}
        onValueChange={handleSelectChange}
        currentStep={currentStep}
      />
      {currentStep === "address" && showForm && (
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
      {currentStep === "payment" && <PaymentForm />}
      <button onClick={handlePrevClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
    </>
  );
};

export default CheckoutView;
