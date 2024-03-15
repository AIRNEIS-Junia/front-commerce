"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";
import { AddressType, UserType } from "../../../../types/CommonTypes";
import axiosInstance, { airneisStore } from "../../../../lib/client-api";
import { AxiosResponse } from "axios";

const SignupForm = () => {
  const handleSubmit = async (formikValues: UserType) => {
    const { confirmPassword, ...valuesToSend } = formikValues;

    await axiosInstance
      .post("auth/register", valuesToSend)
      .then((response: any) => {
        const responseData = [
          {
            key: "accessToken",
            value: response.data.accessToken,
          },
          {
            key: "refreshToken",
            value: response.data.refreshToken,
          },
        ];

        console.log("response", response, response.data);

        responseData.forEach((response) => {
          airneisStore.setItem(response.key, response.value);
        });
      });
  };

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
        validate={(values) => {
          const errors: Partial<UserType> = {};
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={async (
          values: UserType,
          { setSubmitting }: FormikHelpers<UserType>,
        ) => {
          await handleSubmit(values);
          setSubmitting(true);
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

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="********"
            type="password"
          />

          <label htmlFor="confirmPassword">Confirm password</label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            type="password"
          />

          <button className={"btn btn-dark mt-16"} type="submit">
            SIGN UP
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
        <Link className={"btn btn-light text-center mt-16"} href={"/"}>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
