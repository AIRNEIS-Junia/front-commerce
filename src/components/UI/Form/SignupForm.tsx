"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { CreateUserInput } from "../../../../types/User";
import { register } from "../../../../lib/auth";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: CreateUserInput,
    formikHelpers: FormikHelpers<CreateUserInput>,
  ) => {
    const { confirmPassword, ...valuesToSend } = values;
    try {
      await register(valuesToSend);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      formikHelpers.setSubmitting(false); // Réinitialiser l'état de soumission
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        "Password must contain at least 10 characters, including one uppercase letter, one lowercase letter, one number, and one special character",
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password") as unknown as string | undefined],
        "Passwords must match",
      )
      .required("Confirm password is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        validateOnSubmit={true}
        onSubmit={(
          values: CreateUserInput,
          formikHelpers: FormikHelpers<CreateUserInput>,
        ) => {
          return handleSubmit(values, formikHelpers);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"flex flex-col space-y-4"}>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="********"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              type="password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500"
            />
            <button
              className={"btn btn-dark mt-16"}
              type="submit"
              disabled={isSubmitting}
            >
              SIGN UP
            </button>
          </Form>
        )}
      </Formik>
      <div className={"flex flex-col space-y-8"}>
        <div className={"relative mt-8"}>
          <div className={"w-full h-[1px] bg-stormy"}></div>
          <div
            className={
              "absolute transform -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 p-2 bg-white"
            }
          >
            Already a client ?
          </div>
        </div>
        <Link className={"btn btn-light text-center mt-16"} href={"/login"}>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
