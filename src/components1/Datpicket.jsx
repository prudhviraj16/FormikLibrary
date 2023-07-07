import { ErrorMessage, Field } from "formik";
import React from "react";
import DatePicker from "react-datepicker";
import DateView from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";
const Datpicket = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor="">{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;

          const { value } = field;

        //   console.log(value, setFieldValue);

          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Datpicket;
