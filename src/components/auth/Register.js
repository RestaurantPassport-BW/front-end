import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
// import styled from 'styled-components';


const Register= ({errors, touched, status}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (status) {
        setUsers([...users, status])
    }
}, [status])


  return (
    <>
      <h2>Sign-Up!</h2>
        <Form>
          {touched.name && errors.name && <p className='error'>{errors.name}</p>}
          <Field type='text' name='name' placeholder='Name' />
          {touched.password && errors.password && <p className='error'>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password'/>
          {touched.email && errors.email && <p className='error'>{errors.email}</p>}
          <Field type='text' name='email' placeholder='E-mail'/>
          <button type='submit' name='submit'>Submit</button>
        </Form>
        <a href='/'>Take me back!</a>

      {/* REMOVE MAP WHEN FINISHED */}
        {users.map((users, index) => (
            <div key={index}>
                Name: {users.name}<br />
                Password: {users.password}<br />
                E-mail: {users.email}<br />
            </div>
        ))}
    </>
  );
}


export default withFormik({
  mapPropsToValues: (values) => {
    return {
      name: values.name || '',
      password: values.password || '',
      email: values.email || '',
    }
  },

  validationSchema: yup.object().shape({
    name: yup.string().required('Name is a required field!'),
    password: yup.string().required('To create an account you need a password!'),
    email: yup.string().email('E-mail must be a valid address!').required('E-mail is required'),
  }),

  handleSubmit:(values, { setStatus }) => {
    axios.post('https://reqres.in/api/users', values)
    .then(res => {
      console.log(res)
      setStatus(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
})(Register)