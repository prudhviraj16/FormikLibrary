import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  console.log(values);
  let errors = {};

  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  }
  if (!values.channel) {
    errors.channel = "required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  channel: Yup.string().required("Required"),
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="error">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>

        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : (
            ""
          )}
        </div>

        <div className="formControl">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <span className="error">{formik.errors.channel}</span>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default OldForm;
