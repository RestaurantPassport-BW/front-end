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
          {}
          <Field component="select" name="city">
            <option value='' disabled>Select City:</option>
            <option value="austintx">Austin TX</option>
            <option value="denverco">Denver CO</option>
            <option value="sanfranciscoca">San Francisco CA</option>
          </Field>

          <button type='submit' name='submit'>Submit</button>
        </Form>
        <a href='/'>Take me back!</a>

      {/* REMOVE MAP WHEN FINISHED */}
        {users.map((users, index) => (
            <div key={index}>
                Name: {users.name}<br />
                Password: {users.password}<br />
                E-mail: {users.email}<br />
                City: {users.city}
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
      city: values.city || ''
    }
  },

  validationSchema: yup.object().shape({
    name: yup.string().required('Name is a required field!'),
    password: yup.string().required('To create an account you need a password!'),
    email: yup.string().email('E-mail must be a valid address!').required('E-mail is required'),
    city: yup.string().required('Please Select your city for your first passport')
  }),

  handleSubmit:(values, { setStatus, resetForm }) => {
    axios.post('https://reqres.in/api/users', values)
    .then(res => {
      console.log(res)
      setStatus(res.data)
      resetForm()
    })
    .catch(err => {
      console.log(err)
    })
  }
})(Register)