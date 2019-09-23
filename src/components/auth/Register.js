import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
// import styled from 'styled-components';

const Register = ({ errors, touched, }) => {

  return (
    <>
      <h2>Sign-Up!</h2>
      <Form>
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}
        <Field type="text" name="firstName" placeholder="First Name" />
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <Field type="text" name="lastName" placeholder="Last Name" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="text" name="email" placeholder="E-mail" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {}
        <Field component="select" name="city">
          <option value="" disabled>
            Select City:
          </option>
          <option value="1">Austin TX</option>
          <option value="2" disabled>
            Denver CO (COMING SOON!)
          </option>
          <option value="3" disabled>
            San Francisco CA (COMING SOON!)
          </option>
        </Field>

        <button type="submit" name="submit">
          Submit
        </button>
      </Form>
      <a href="/">Take me back!</a>

    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      firstName: values.firstName || "",
      lastName: values.lastName || "",
      email: values.email || "",
      password: values.password || "",
      city: values.city || ""
    };
  },

  validationSchema: yup.object().shape({
    firstName: yup.string().required("First Name is a required field!"),
    lastName: yup.string().required("Last Name is a required field!"),
    email: yup
      .string()
      .email("E-mail must be a valid address!")
      .required("E-mail is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 Characters")
      .max(40, "Please Keep password at 40 characters or shorter")
      .required(),
    city: yup
      .number()
      .required("Please Select your city for your first passport")
  }),

  handleSubmit: (values, { props, resetForm }) => {
    axios
      .post("https://mhagner-rest-pass.herokuapp.com/api/auth/register", values)
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data.token));
        props.history.push('/login')
        resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(Register);
