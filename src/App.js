import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </div>
  );
}

export default App;
