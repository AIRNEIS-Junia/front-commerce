"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { CreateUserInput } from "@/types/User";
import { register } from "@/services/auth";
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
      console.error("Erreur :", error);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Le prénom doit contenir au moins 3 caractères")
      .required("Le prénom est obligatoire"),
    lastName: Yup.string()
      .min(3, "Le nom de famille doit contenir au moins 3 caractères")
      .required("Le nom de famille est obligatoire"),
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'email est obligatoire"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        "Le mot de passe doit contenir au moins 10 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
      )
      .required("Le mot de passe est obligatoire"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password") as unknown as string | undefined],
        "Les mots de passe doivent correspondre",
      )
      .required("La confirmation du mot de passe est obligatoire"),
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
            <label htmlFor="firstName">Prénom</label>
            <Field id="firstName" name="firstName" placeholder="Jean" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="lastName">Nom de famille</label>
            <Field id="lastName" name="lastName" placeholder="Dupont" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jean@exemple.com"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
            <label htmlFor="password">Mot de passe</label>
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
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
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
              S'INSCRIRE
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
            Déjà client ?
          </div>
        </div>
        <Link className={"btn btn-light text-center mt-16"} href={"/login"}>
          SE CONNECTER
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
