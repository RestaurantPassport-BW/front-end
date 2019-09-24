import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axiosWithAuth from '../../helpers/axiosWithAuth';

const Login = ({ errors, touched }) => {

  return (
    <>
      <h1>Login</h1>
        <Form>
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email:" />

            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password:" />

            <button type="submit">Login</button>
        </Form>
        </>
    )
}

export default withFormik({

    mapPropsToValues: ({ email, password }) => {
        return {
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: yup.object().shape({
       email: yup.string().email("Please enter a valid email!").required("Email is required!"),
       password: yup.string().required("Password is required"),
    }),
    handleSubmit: ( values, { props }) => {
            
    axiosWithAuth()
        .post("https://mhagner-rest-pass.herokuapp.com/api/auth/login", values)
        .then(data => {
        localStorage.setItem('token', JSON.stringify(data.token));
        props.history.push('/register');
      })
      .catch(err => console.log(err.message));
  }
})(Login);
