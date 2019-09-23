import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';

const Login = ({ errors, touched, status }) => {
    const [Users, setNewUsers] = useState([])

    useEffect(() => {
        if (status) {
            setNewUsers([...Users, status ])
        }
    }, [status])

    return (
      <>
      <h1>Login</h1>
        <Form>
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email:" />

            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password:" />

            <button type="submit">Submit</button>

          {/* displaying input data to the page to show that 
              post request is working properly */} 
            {Users.map((user, index) => (
              <div key={index}>
                <div>Email: {user.email}</div>
                <div>Password: {user.password}</div>
              </div>
            ))}
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
    handleSubmit: (values, {setStatus, resetForm }) => {
            
      axios.post("https://mhagner-rest-pass.herokuapp.com/api/auth/login", values)
      
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        
        resetForm();
      })
      .catch((err) => console.log(err));
  }
})(Login)