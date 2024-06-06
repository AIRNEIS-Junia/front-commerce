"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import Link from "next/link";
import { authNextSignin } from "@/services/auth";
import { UserAuthLoginInput } from "@/types/User";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  const [errorDuringLogin, setErrorDuringLogin] = useState<string | null>(null);

  const handleSubmit = async (
    values: UserAuthLoginInput,
    formikHelpers: FormikHelpers<UserAuthLoginInput>,
  ) => {
    setErrorDuringLogin(null);
    try {
      const result = await authNextSignin(values);
      router.push("/");
    } catch (error: any) {
      setErrorDuringLogin("Email ou mot de passe incorrect");
      console.error("Error:", error);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Adresse e-mail").required("L'e-mail est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        validateOnSubmit={true}
        onSubmit={(
          values: UserAuthLoginInput,
          formikHelpers: FormikHelpers<UserAuthLoginInput>,
        ) => {
          return handleSubmit(values, formikHelpers);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"flex flex-col space-y-4"}>
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
              type={"password"}
              placeholder="********"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />

            <button
              className={"!mt-[32px] btn btn-dark"}
              type="submit"
              disabled={isSubmitting}
            >
              SE CONNECTER
            </button>
            {errorDuringLogin && (
              <p className={"text-red-500"}>{errorDuringLogin}</p>
            )}
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
            Nouveau client ?
          </div>
        </div>
        <Link className={"btn btn-light text-center mt-16"} href={"/signup"}>
          S'INSCRIRE
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
