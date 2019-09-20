import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';


const Register= () => {

  return (
    <>
      <h2>Sign-Up!</h2>
        <Form>
          <Field type='text' name='name' placeholder='Name' />
          <Field type='password' name='password' placeholder='Password'/>
          <Field type='text' name='email' placeholder='E-mail'/>
          <button type='submit' name='submit'>Submit</button>
        </Form>
        <a href='/'>Take me back!</a>
    </>
  );
}


export default withFormik({

})(Register)