import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';

const Login = ({ errors, touched, status }) => {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        if (status) {
            setNewUsers([...newUsers, status ])
        }
    }, [status])

    return (
        <Form>
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name:" />

            {touched.city && errors.city && <p className="error">{errors.city}</p>}
            <Field type="text" name="city" placeholder="City:" />

            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email:" />

            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password:" />

            <button type="submit">Submit</button>

          {/* displaying input data to the page to show that 
              post request is working properly */} 
            {newUsers.map((user, index) => (
              <div key={index}>
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>City: {user.city}</div>
                <div>Password: {user.password}</div>
              </div>
            ))}

        </Form>
    )
}

export default withFormik({

    mapPropsToValues: ({ name, email, password, city }) => {
        return {
            name: name || "",
            city: city || "",
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: yup.object().shape({
       name: yup.string().required("Name is Required!"),
       city: yup.string().required("Please enter your city!"),
       email: yup.string().email("Please enter a valid email!").required("Email is required!"),
       password: yup.string().required("Password is required"),
      
    }),
    handleSubmit: (values, {setStatus, resetForm }) => {
            
      axios.post("https://reqres.in/api/users", values)
      .then((res) => {
        console.log(res)
        setStatus(res.data);  
        resetForm();
      })
      .catch((err) => console.log(err));
  }
})(Login)