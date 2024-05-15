"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";
import { login } from "../../../../lib/auth";
import { UserAuthLoginInput } from "../../../../types/User";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: UserAuthLoginInput,
    formikHelpers: FormikHelpers<UserAuthLoginInput>,
  ) => {
    try {
      await login(values);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(
          values: UserAuthLoginInput,
          formikHelpers: FormikHelpers<UserAuthLoginInput>,
        ) => {
          return handleSubmit(values, formikHelpers);
        }}
      >
        <Form className={"flex flex-col space-y-4"}>
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
            type={"password"}
            placeholder="********"
          />

          <button className={"!mt-[32px] btn btn-dark"} type="submit">
            LOGIN
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
            New client ?
          </div>
        </div>
        <Link className={"btn btn-light text-center mt-16"} href={"/"}>
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
