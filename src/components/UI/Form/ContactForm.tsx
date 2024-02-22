"use client";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className={"flex flex-col space-y-4 my-medium"}>
        <Field id="subject" name="subject" as={"select"}>
          <option value={"choix1"}>Choix 1</option>
          <option value={"choix1"}>Choix 2</option>
        </Field>
        <Field
          id="comment"
          name="comment"
          placeholder="Comment"
          as={"textarea"}
          rows={"5"}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
