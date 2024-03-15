"use client";
import axiosInstance from "../../../../lib/client-api";
import { UserType } from "../../../../types/CommonTypes";
import { Field, Form, Formik, FormikHelpers } from "formik";

const ProfileForm = ({ user }: { user: UserType }) => {
  const handleSubmit = async (formikValues: UserType) => {
    await axiosInstance.patch(`/user`, formikValues);
  };

  const values = (): UserType => {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      currentPassword: "",
      newPassword: "",
    };
  };

  return (
    <div>
      <Formik
        initialValues={values()}
        onSubmit={async (
          values: UserType,
          { setSubmitting }: FormikHelpers<UserType>,
        ) => {
          try {
            await handleSubmit(values);
            setSubmitting(true);
          } catch (e) {
            console.log("error", e);
          }
        }}
      >
        {({ values: UserType }) => (
          <Form className={"flex flex-col space-y-4"}>
            <label htmlFor="firstName">Firstname</label>
            <Field
              className={"bg-white"}
              id="firstName"
              name="firstName"
              placeholder="Doe"
            />

            <label htmlFor="lastName">Lastname</label>
            <Field
              className={"bg-white"}
              id="lastName"
              name="lastName"
              placeholder="Doe"
            />

            <label htmlFor="email">Email</label>
            <Field
              type={"email"}
              className={"bg-white"}
              id="email"
              name="email"
              placeholder="email"
            />

            <label htmlFor="currentPassword">Current password</label>
            <Field
              type={"password"}
              className={"bg-white"}
              id="currentPassword"
              name="currentPassword"
              placeholder="Doe"
            />

            <label htmlFor="newPassword">New password</label>
            <Field
              type={"password"}
              className={"bg-white"}
              id="newPassword"
              name="newPassword"
              placeholder="Doe"
            />

            <button className={"btn btn-dark !mt-8"} type="submit">
              EDIT
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;
