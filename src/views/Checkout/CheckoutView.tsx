"use client";
import React, { useState, FC, useEffect } from "react";
import { AddressInput } from "@/types/Address";
import { CreditCard } from "@/types/CreditCard";
import ShippingForm from "@/components/UI/Form/ShippingForm";
import PaymentForm from "@/components/UI/Form/PaymentForm";
import CheckoutInformationSelector from "@/components/Checkout/CheckoutInformationSelector";
import axiosInstance from "@/clients/storeFrontClient";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "@/lib/features/cart/cart.slice";

interface AddressSelectProps {
  addresses: AddressInput[];
  creditCards: CreditCard[];
}

const CheckoutView: FC<AddressSelectProps> = ({ addresses, creditCards }) => {
  const router = useRouter();

  const [selectedAddress, setSelectedAddress] = useState<AddressInput | null>(
    null,
  );
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<CreditCard | null>(null);
  const [showForm, setShowForm] = useState<"address" | "payment" | null>(null);
  const [showPage, setShowPage] = useState(false);
  const [currentStep, setCurrentStep] = useState("address");

  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setShowPage(true);
    } else {
      router.push("/");
    }
  }, [cartItems, router]);

  const handleFormSubmit = async (formData: AddressInput | CreditCard) => {
    try {
      const response = await axiosInstance.post(
        `/user/${currentStep === "address" ? "address" : "credit-card"}`,
        formData,
      );

      if (currentStep === "address") {
        setSelectedAddress(response.data);
        setCurrentStep("payment");
      } else {
        setSelectedCreditCard(response.data);
        await handleSendOrderInformations(response.data); // Call send order information after successful credit card submission
      }

      setShowForm(null);
    } catch (error) {
      console.error(`Error submitting ${currentStep} form`, error);
    }
  };

  const handleSendOrderInformations = async (creditCard: CreditCard) => {
    try {
      await axiosInstance.post("/orders", {
        items: cartItems,
        addressId: selectedAddress?.id,
        creditCardId: creditCard.id,
      });

      dispatch(removeItems(cartItems));
      router.push("/checkout/thank-you");
    } catch (error) {
      console.error("Error sending order information", error);
    }
  };

  const handleInformationSelectorChange = (value: string) => {
    if (value === "add-address") {
      setShowForm("address");
    } else if (value === "add-credit-card") {
      setShowForm("payment");
    } else {
      setShowForm(null);

      if (currentStep === "address") {
        const address = addresses.find((addr) => addr.id === value);
        setSelectedAddress(address || null);
      } else {
        const creditCard = creditCards.find((card) => card.id === value);
        setSelectedCreditCard(creditCard || null);
      }
    }
  };

  return (
    <>
      {showPage ? (
        <>
          <h1 className={"mb-16 text-center"}>
            {currentStep === "address"
              ? "Sélection d'adresse"
              : "Sélection de carte bancaire"}
          </h1>
          <CheckoutInformationSelector
            key={currentStep}
            addresses={addresses}
            creditCards={creditCards}
            onValueChange={handleInformationSelectorChange}
            currentStep={currentStep}
          />
          {showForm === "address" && (
            <ShippingForm type="create" onSubmit={handleFormSubmit} />
          )}
          {showForm === "payment" && (
            <PaymentForm onSubmit={handleFormSubmit} />
          )}
          {!showForm &&
            selectedAddress !== null &&
            selectedCreditCard !== null &&
            currentStep === "payment" && (
              <button
                className={"btn btn-dark mt-16"}
                onClick={() => handleSendOrderInformations(selectedCreditCard)}
              >
                Sélectionner cette carte bancaire
              </button>
            )}
          {!showForm &&
            selectedAddress !== null &&
            currentStep === "address" && (
              <button
                className={"btn btn-dark mt-16"}
                onClick={() => setCurrentStep("payment")}
              >
                Sélectionner cette adresse
              </button>
            )}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CheckoutView;
