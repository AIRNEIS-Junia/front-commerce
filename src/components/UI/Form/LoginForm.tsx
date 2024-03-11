"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";

interface Values {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
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

          <div className={"flex justify-between !mt-[32px]"}>
            <label>
              <Field className={"mr-3"} type="checkbox" name="rememberMe" />
              Remember me
            </label>
            <Link href={"/"} className={"italic"}>
              Forgot password?
            </Link>
          </div>

          <button className={"mt-16 btn btn-dark"} type="submit">
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
