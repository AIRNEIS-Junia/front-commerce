"use client";
import axiosInstance from "../../../../lib/client-api";
import { AddressType } from "../../../../types/CommonTypes";
import { useRouter } from "next/navigation";
import { Field, Form, Formik, FormikHelpers } from "formik";

const ShippingForm = ({
  type,
  address,
  onClosing,
}: {
  type: string;
  address?: AddressType | undefined;
  onClosing?: () => void;
}) => {
  const router = useRouter();

  const handleCreate = async (formikValues: AddressType) => {
    await axiosInstance.post("/user/address", formikValues);
  };

  const handleEdit = async (formikValues: AddressType) => {
    console.log("address", address?.id, formikValues);
    await axiosInstance.patch(`/user/address/${address?.id}`, formikValues);
  };

  const handleSubmit = async (formikValues: AddressType) => {
    if (type === "create") {
      await handleCreate(formikValues);
    } else {
      await handleEdit(formikValues);
    }
  };

  const values = (): AddressType => {
    if (type === "edit" && address) {
      const { additional, ...rest } = address;
      const updatedAdditional = additional || "";
      return { ...rest, additional: updatedAdditional };
    } else {
      return {
        name: "lorem",
        firstName: "lorem",
        lastName: "lorem",
        phone: "lorem",
        streetNumber: "",
        street: "",
        additional: "",
        zipCode: "",
        city: "",
        country: "",
      };
    }
  };

  return (
    <div>
      <Formik
        initialValues={values()}
        onSubmit={async (
          values: AddressType,
          { setSubmitting }: FormikHelpers<AddressType>,
        ) => {
          try {
            await handleSubmit(values);
            setSubmitting(true);
            onClosing && onClosing();
          } catch (e) {
            console.log("error", e);
          }
        }}
      >
        {({ values: AddressType }) => (
          <Form className={"flex flex-col space-y-4"}>
            <div className={"grid grid-cols-[1fr_2fr] gap-4"}>
              <div className={"flex-col flex space-y-4"}>
                <label htmlFor="streetNumber">Street number</label>
                <Field
                  className={"w-full"}
                  id="streetNumber"
                  name="streetNumber"
                  placeholder="John"
                />
              </div>

              <div className={"flex-col flex space-y-4"}>
                <label htmlFor="street">Street</label>
                <Field
                  className={"w-fumm"}
                  id="street"
                  name="street"
                  placeholder="Doe"
                />
              </div>
            </div>

            <label htmlFor="additional">Additional</label>
            <Field id="additional" name="additional" placeholder="Doe" />

            <label htmlFor="zipCode">Zip code</label>
            <Field id="zipCode" name="zipCode" placeholder="Doe" />

            <label htmlFor="city">City</label>
            <Field id="city" name="city" placeholder="Doe" />

            <label htmlFor="country">Country</label>
            <Field id="country" name="country" placeholder="Doe" />

            <button className={"btn btn-dark mt-16"} type="submit">
              {type === "create" ? "CREATE" : "EDIT"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;