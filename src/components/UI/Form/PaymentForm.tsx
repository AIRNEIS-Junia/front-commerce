"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

interface Values {
  cardNumber: string;
  expirationDate: string;
  CVV: string;
  fullName: string;
}

const PaymentForm = () => {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          cardNumber: "",
          expirationDate: "",
          CVV: "",
          fullName: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          setTimeout(() => {
            setSubmitting(true);
            router.push("/thank-you");
          }, 500);
        }}
      >
        <Form className={"flex flex-col space-y-4"}>
          <label htmlFor="cardNumber">Card number</label>
          <Field id="cardNumber" name="cardNumber" placeholder="John" />

          <label htmlFor="expirationDate">Expiration date</label>
          <Field id="expirationDate" name="expirationDate" placeholder="Doe" />

          <label htmlFor="CVV">CVV</label>
          <Field id="CVV" name="CVV" placeholder="Doe" />

          <label htmlFor="fullName">Full name</label>
          <Field id="fullName" name="fullName" placeholder="Doe" />

          <button className={"btn btn-dark mt-16"} type="submit">
            PROCEED TO PAYMENT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentForm;
