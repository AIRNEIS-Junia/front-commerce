"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

interface Values {
  streetNumber: string;
  street: string;
  additional: string;
  zipCode: string;
  city: string;
  country: string;
}

// Async Validation
const ShippingForm = () => {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          streetNumber: "",
          street: "",
          additional: "",
          zipCode: "",
          city: "",
          country: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          setTimeout(() => {
            setSubmitting(true);
            router.push("/payment-details");
          }, 500);
        }}
      >
        <Form className={"flex flex-col space-y-4"}>
          <label htmlFor="streetNumber">Street number</label>
          <Field id="streetNumber" name="streetNumber" placeholder="John" />

          <label htmlFor="street">Street</label>
          <Field id="street" name="street" placeholder="Doe" />

          <label htmlFor="additional">Additional</label>
          <Field id="additional" name="additional" placeholder="Doe" />

          <label htmlFor="zipCode">Zip code</label>
          <Field id="zipCode" name="zipCode" placeholder="Doe" />

          <label htmlFor="city">City</label>
          <Field id="city" name="city" placeholder="Doe" />

          <label htmlFor="country">Country</label>
          <Field id="country" name="country" placeholder="Doe" />

          <button className={"btn btn-dark mt-16"} type="submit">
            ACCESS TO PAYMENT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShippingForm;
