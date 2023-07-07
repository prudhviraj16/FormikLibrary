import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "Retired" },
    { key: "Option 2", value: "Employee" },
    { key: "Option 3", value: "Student" },
  ];

  const initialValues = {
    email: "",
    description: "",
    select: "",
    radio: "",
    check: "",
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    description: Yup.string().required("Description Required"),
    select: Yup.string().required("Select Dropdown"),
    radio: Yup.string().required("Select a radio button"),
    check: Yup.string().required("Select Checkbox"),
    birthDate: Yup.string().required("Select Birthdate"),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormikControl
          control="input"
          type="email"
          label="email"
          name="email"
        />

        <FormikControl
          control="textarea"
          label="Description"
          name="description"
        />

        <FormikControl
          control="select"
          label="Select an option"
          name="select"
          options={dropDownOptions}
        />

        <FormikControl
          control="radio"
          label="Select any radio button"
          name="radio"
          options={radioOptions}
        />

        <FormikControl
          control="checkbox"
          name="check"
          label="Check anything"
          options={checkboxOptions}
        />

        <FormikControl control="date" label="Pick a date" name="birthDate" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikContainer;
