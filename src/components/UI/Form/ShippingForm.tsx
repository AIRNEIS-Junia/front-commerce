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
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .required("Last name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be a valid 10-digit number")
      .required("Phone is required"),
    streetNumber: Yup.string().required("Street number is required"),
    street: Yup.string()
      .min(3, "Street must be at least 3 characters")
      .required("Street is required"),
    additional: Yup.string(),
    zipCode: Yup.string().required("Zip code is required"),
    city: Yup.string()
      .min(3, "City must be at least 3 characters")
      .required("City is required"),
    country: Yup.string()
      .min(3, "Country must be at least 3 characters")
      .required("Country is required"),
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
      // Submit the address form data
      await onSubmit(values);
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting shipping form", error);
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
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="phone">Phone</label>
          <Field id="phone" name="phone" placeholder="Phone" />
          <ErrorMessage name="phone" component="div" className="text-red-500" />

          <div className={"grid grid-cols-2 gap-4"}>
            <div>
              <label htmlFor="streetNumber">Street Number</label>
              <Field
                id="streetNumber"
                name="streetNumber"
                placeholder="Street Number"
              />
              <ErrorMessage
                name="streetNumber"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <Field id="street" name="street" placeholder="Street" />
              <ErrorMessage
                name="street"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <label htmlFor="additional">Additional</label>
          <Field id="additional" name="additional" placeholder="Additional" />
          <ErrorMessage
            name="additional"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="zipCode">Zip Code</label>
          <Field id="zipCode" name="zipCode" placeholder="Zip Code" />
          <ErrorMessage
            name="zipCode"
            component="div"
            className="text-red-500"
          />

          <label htmlFor="city">City</label>
          <Field id="city" name="city" placeholder="City" />
          <ErrorMessage name="city" component="div" className="text-red-500" />

          <label htmlFor="country">Country</label>
          <Field id="country" name="country" placeholder="Country" />
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
            {type === "create" ? "Add Address" : "Update Address"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingForm;
