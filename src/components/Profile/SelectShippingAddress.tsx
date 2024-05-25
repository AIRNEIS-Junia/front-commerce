"use client";
import * as React from "react";
import { Field, Form, Formik } from "formik";
import { AddressInput } from "@/types/Address";

const SelectShippingAddress = ({
  addresses,
  onAddressChange,
}: {
  addresses: AddressInput[];
  actualAddress: AddressInput | undefined;
  onAddressChange: (newAddress: AddressInput | undefined) => void;
}) => {
  return (
    <Formik
      initialValues={{ email: "", color: "red", firstName: "", lastName: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form className={"w-full"}>
        <Field
          as="select"
          name="address"
          className={"!w-full"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedAddressId = e.target.value;
            const selectedAddress = addresses.find(
              (address) => address.id === selectedAddressId,
            );
            onAddressChange(selectedAddress);
          }}
        >
          {addresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.streetNumber}
              {address.street}
            </option>
          ))}
        </Field>
      </Form>
    </Formik>
  );
};

export default SelectShippingAddress;
