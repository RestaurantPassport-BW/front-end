import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import styled from "styled-components";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./helpers/PrivateRoute"



const StyledLink = styled.a`
  padding: 20px;
`;

const Div = styled.div`
  margin: 2%;
`

function App() {
  return (
    <Div className="App">
      <Switch>
        <Route exact path="/">
          <StyledLink href="/login">Login</StyledLink>
          <StyledLink href="/register">Register</StyledLink>
        </Route>
        <Route path={"/login"} render={props => <Login {...props} />  } />
        <Route path={"/register"} render={props => <Register {...props} /> }/>
        <PrivateRoute path={'/dashboard'} component={Dashboard} />}/>
      </Switch>
      
    </Div>
  );
}

export default App;
