"use client";

import * as React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axiosInstance from "@/clients/storeFrontClient";
import { CreditCard } from "@/types/CreditCard";

interface PaymentFormProps {
  creditCard?: CreditCard;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ creditCard }) => {
  // const router = useRouter();

  const handleSubmit = async (
    values: CreditCard,
    { setSubmitting }: FormikHelpers<CreditCard>,
  ) => {
    try {
      // Convert expiryDate from string to Date
      const expiryDate = new Date(values.expiryDate);

      await axiosInstance.post("/user/credit-card", {
        cardNumber: values.cardNumber,
        expiryDate: expiryDate,
        cvv: parseInt(values.cvv),
        cardHolderName: values.cardHolderName,
      });
      setSubmitting(false);
      // router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting payment form", error);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
      .required("Card number is required"),
    expiryDate: Yup.date().required("Expiration date is required").nullable(),
    cvv: Yup.string()
      .matches(/^[0-9]{3}$/, "CVV must be 3 digits")
      .required("CVV is required"),
    cardHolderName: Yup.string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),
  });

  const initialValues = creditCard
    ? {
        cardNumber: creditCard.cardNumber,
        expiryDate: creditCard.expiryDate,
        cvv: creditCard.cvv,
        cardHolderName: creditCard.cardHolderName,
      }
    : {
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardHolderName: "",
      };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={"flex flex-col space-y-4"}>
            <label htmlFor="cardNumber">Card number</label>
            <Field
              type={"text"}
              id="cardNumber"
              name="cardNumber"
              placeholder="Card number"
            />
            <ErrorMessage
              name="cardNumber"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="expiryDate">Expiration date</label>
            <Field type="date" id="expiryDate" name="expiryDate" />
            <ErrorMessage
              name="expiryDate"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="cvv">CVV</label>
            <Field id="cvv" name="cvv" placeholder="CVV" />
            <ErrorMessage name="cvv" component="div" className="text-red-500" />

            <label htmlFor="cardHolderName">Full name</label>
            <Field
              id="cardHolderName"
              name="cardHolderName"
              placeholder="Full name"
            />
            <ErrorMessage
              name="cardHolderName"
              component="div"
              className="text-red-500"
            />

            <button
              className={"btn btn-dark mt-16"}
              type="submit"
              disabled={isSubmitting}
            >
              PROCEED TO PAYMENT
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
