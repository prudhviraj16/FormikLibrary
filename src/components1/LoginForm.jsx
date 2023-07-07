import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const LoginForm = () => {
  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter Name"),
    password: Yup.string().required("Enter Password"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormikControl control="input" type="name" label="name" name="name" />
        <FormikControl
          control="input"
          type="password"
          label="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
