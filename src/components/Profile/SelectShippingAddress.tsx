"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, Form, Formik } from "formik";

interface AddressType {
  streetNumber: string;
  street: string;
  additional: string;
  zipCode: string;
  city: string;
  country: string;
}

const SelectShippingAddress = ({ address }: { address: AddressType }) => {
  const router = useRouter();
  const [actualAddress, setAddress] = useState<AddressType>({
    streetNumber: "",
    street: "",
    additional: "",
    zipCode: "",
    city: "",
    country: "",
  });

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
      <Form>
        <Field as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default SelectShippingAddress;
