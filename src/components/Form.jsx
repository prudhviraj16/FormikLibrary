import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: " ",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: ["9573856978", "9177046814"],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
  // social.facebook: Yup.string().required("Required"),
  // social.twitter : Yup.string().required("Required"),
});

const Forms = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="formControl">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="formControl">
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" email="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="formControl">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>

            <div className="formControl">
              <label htmlFor="comments">Comments</label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="comments" />
            </div>

            <div className="formControl">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <span>{meta.error}</span>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="formControl">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="formControl">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="formControl">
              <label htmlFor="phone1">Twitter Profile</label>
              <Field type="text" id="phone1" name="phoneNumbers[0]" />
            </div>

            <div className="formControl">
              <label htmlFor="facebook">Twitter Profile</label>
              <Field type="text" id="phone2" name="phoneNumbers[1]" />
            </div>

            <div className="formControl">
              <label htmlFor="">List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(props) => {
                  // console.log(props)
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {phNumbers.length > 1 && (
                            <button type="button" onClick={() => remove(index)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate All
            </button>
            <button
              type="submit"
              disabled={!formik.isValid && formik.isSubmitting}
            >
              Submit
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
