"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={"flex flex-col space-y-4"}>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button className={"btn btn-dark"} type="submit">
            Submit
          </button>
        </Form>
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
        <Link className={"btn btn-light text-center"} href={"/"}>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
