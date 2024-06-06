import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddressInput } from "@/types/Address";

interface ShippingFormProps {
  type: string;
  onSubmit: (address: AddressInput) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ type, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Le nom doit comporter au moins 3 caractères")
      .required("Le nom est obligatoire"),
    firstName: Yup.string()
      .min(3, "Le prénom doit comporter au moins 3 caractères")
      .required("Le prénom est obligatoire"),
    lastName: Yup.string()
      .min(3, "Le nom de famille doit comporter au moins 3 caractères")
      .required("Le nom de famille est obligatoire"),
    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Le numéro de téléphone doit comporter 10 chiffres",
      )
      .required("Le numéro de téléphone est obligatoire"),
    streetNumber: Yup.string().required("Le numéro de rue est obligatoire"),
    street: Yup.string()
      .min(3, "La rue doit comporter au moins 3 caractères")
      .required("La rue est obligatoire"),
    additional: Yup.string(),
    zipCode: Yup.string().required("Le code postal est obligatoire"),
    city: Yup.string()
      .min(3, "La ville doit comporter au moins 3 caractères")
      .required("La ville est obligatoire"),
    country: Yup.string()
      .min(3, "Le pays doit comporter au moins 3 caractères")
      .required("Le pays est obligatoire"),
  });

  const initialValues: AddressInput = {
    name: "",
    firstName: "",
    lastName: "",
    phone: "",
    streetNumber: "",
    street: "",
    additional: "",
    zipCode: "",
    city: "",
    country: "",
  };

  const handleSubmit = async (
    values: AddressInput,
    { setSubmitting }: FormikHelpers<AddressInput>,
  ) => {
    try {
      // Soumettre les données du formulaire d'adresse
      onSubmit(values);
      setSubmitting(false);
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire d'adresse",
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
          <label htmlFor="name">Nom</label>
          <Field id="name" name="name" placeholder="Nom" />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          <label htmlFor="firstName">Prénom</label>
          <Field id="firstName" name="firstName" placeholder="Prénom" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="lastName">Nom de famille</label>
          <Field id="lastName" name="lastName" placeholder="Nom de famille" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="phone">Téléphone</label>
          <Field id="phone" name="phone" placeholder="Téléphone" />
          <ErrorMessage name="phone" component="div" className="text-red-500" />

          <div className={"grid grid-cols-2 gap-4"}>
            <div>
              <label htmlFor="streetNumber">Numéro de rue</label>
              <Field
                id="streetNumber"
                name="streetNumber"
                placeholder="Numéro de rue"
              />
              <ErrorMessage
                name="streetNumber"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="street">Rue</label>
              <Field id="street" name="street" placeholder="Rue" />
              <ErrorMessage
                name="street"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <label htmlFor="additional">Complément d'adresse</label>
          <Field
            id="additional"
            name="additional"
            placeholder="Complément d'adresse"
          />
          <ErrorMessage
            name="additional"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="zipCode">Code postal</label>
          <Field id="zipCode" name="zipCode" placeholder="Code postal" />
          <ErrorMessage
            name="zipCode"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="city">Ville</label>
          <Field id="city" name="city" placeholder="Ville" />
          <ErrorMessage name="city" component="div" className="text-red-500" />

          <label htmlFor="country">Pays</label>
          <Field id="country" name="country" placeholder="Pays" />
          <ErrorMessage
            name="country"
            component="div"
            className="text-red-500"
          />

          <button
            className={"btn btn-dark mt-16"}
            type="submit"
            disabled={isSubmitting}
          >
            {type === "create"
              ? "Ajouter l'adresse"
              : "Mettre à jour l'adresse"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingForm;
