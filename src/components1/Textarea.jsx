import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Textarea = (props) => {
  const { name, ...rest } = props;
  return (
    <div className="formControl">
      <label htmlFor={name}>Description</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
