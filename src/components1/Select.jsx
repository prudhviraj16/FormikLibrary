import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = (props) => {
  const { name, label, options} = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
