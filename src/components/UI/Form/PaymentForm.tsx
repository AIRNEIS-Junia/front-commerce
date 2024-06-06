import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreditCard } from "@/types/CreditCard";

interface PaymentFormProps {
  onSubmit: (creditCard: CreditCard) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .matches(
        /^[0-9]{16}$/,
        "Le numéro de carte doit comporter exactement 16 chiffres",
      )
      .required("Le numéro de carte est obligatoire"),
    expiryDate: Yup.date()
      .required("La date d'expiration est obligatoire")
      .nullable(),
    cvv: Yup.string()
      .matches(/^[0-9]{3}$/, "Le CVV doit comporter 3 chiffres")
      .required("Le CVV est obligatoire"),
    cardHolderName: Yup.string()
      .min(3, "Le nom complet doit comporter au moins 3 caractères")
      .required("Le nom complet est obligatoire"),
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
      onSubmit(values);
      setSubmitting(false);
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire de paiement",
        error,
      );
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
          <label htmlFor="cardNumber">Numéro de carte</label>
          <Field
            type={"text"}
            id="cardNumber"
            name="cardNumber"
            placeholder="Numéro de carte"
          />
          <ErrorMessage
            name="cardNumber"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="expiryDate">Date d'expiration</label>
          <Field type="date" id="expiryDate" name="expiryDate" />
          <ErrorMessage
            name="expiryDate"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="cvv">CVV</label>
          <Field type={"number"} id="cvv" name="cvv" placeholder="CVV" />
          <ErrorMessage name="cvv" component="div" className="text-red-500" />

          <label htmlFor="cardHolderName">Nom complet</label>
          <Field
            id="cardHolderName"
            name="cardHolderName"
            placeholder="Nom complet"
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
            Compléter la commande
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
