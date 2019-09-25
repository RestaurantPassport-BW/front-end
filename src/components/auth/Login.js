import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axiosWithAuth from '../../helpers/axiosWithAuth';
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Login = ({ errors, touched }) => {

  return (
    <>
      <main>
        <Card className="text-center">
            <Card.Header>
                <h1><span role='img' aria-label='breifcase'>&#128188;</span>Restaurant Passport</h1>
            </Card.Header>
            <Card.Body>
                <Card.Title>Please log in with your email and password</Card.Title>
                <Card.Text>
                    <Form className="loginForm">
                        {touched.email && errors.email && <p className="error">{errors.email}</p>}
                        <Field type="email" name="email" placeholder="Email:" className="input" />
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}
                        <Field type="password" name="password" placeholder="Password:" className="input" />
                        <Button type="submit" variant="secondary">Login</Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
            You must register first if you haven't already in order to login <Link to="/register">Register</Link>
            </Card.Footer>
        </Card>
      </main> 
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
        .then(res => { 
        console.log(res.data) 
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.user.firstName);
        props.history.push('/dashboard')
      })
      .catch(err => console.log(err.message));
  }
})(Login);
