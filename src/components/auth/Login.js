import React, { useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axiosWithAuth from '../../helpers/axiosWithAuth';

const Login = ({ errors, touched, status, props }) => {
    // const [credentials, setCredentials] = useState({
    //     credentials: {
    //         username: '',
    //         password: ''
    //     }
    // });


    // function handleChange(e) {
    //     setCredentials({
    //         credentials: {
    //             ...credentials,
    //             [e.EventTarget.name]: e.target.value
    //         }
    //     })
    // }

    // function login(e) {
    //     e.preventDefault();
    //     axiosWithAuth()
    //         .post('https://mhagner-rest-pass.herokuapp.com/api/auth/login')
    //         .then(data => {
    //             console.log(data)
    //             localStorage.setItem('token', JSON.stringify(data.token));

    //         })
    // }

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
    handleSubmit: ( values, {props, setStatus, resetForm }) => {
            
    axiosWithAuth()
        .post("https://mhagner-rest-pass.herokuapp.com/api/auth/login", values)
        .then(data => {
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data.token));
        props.history.push('/register')
        
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(Login);
