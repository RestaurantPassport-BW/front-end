import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import styled from "styled-components";

const StyledLink = styled.a`
  padding: 20px;
`;
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>HomePage</h1>
          <StyledLink href="/login">Login</StyledLink>
          <StyledLink href="/register">Register</StyledLink>
        </Route>
        <Route path={"/login"} render={props => <Login {...props} />  } />
        <Route path={"/register"} component={Register} />
      </Switch>
    </div>
  );
}

export default App;
