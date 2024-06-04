import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreditCard } from "@/types/CreditCard";

interface PaymentFormProps {
  onSubmit: (creditCard: CreditCard) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
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

  const initialValues: CreditCard = {
    cardNumber: "",
    expiryDate: "",
    cvv: 0,
    cardHolderName: "",
  };

  const handleSubmit = async (
    values: CreditCard,
    { setSubmitting }: FormikHelpers<CreditCard>,
  ) => {
    try {
      const expiryDate = new Date(values.expiryDate);
      values.expiryDate = expiryDate.toISOString();

      // Submit the payment form data
      onSubmit(values);
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting payment form", error);
      setSubmitting(false);
    }
  };

  return (
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
          <Field type={"number"} id="cvv" name="cvv" placeholder="CVV" />
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
            Complete Order
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
