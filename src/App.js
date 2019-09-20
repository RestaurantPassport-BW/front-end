import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import styled from 'styled-components'

const A = styled.a`
  padding: 20px;
`
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <h1>HomePage</h1>
          <A href="/login">Login</A>
          <A href="/register">Register</A>
        </Route>
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </div>
  );
}

export default App;
