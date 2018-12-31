import React from "react";
import { Route, Redirect, Switch } from "react-router";

import NavBar from "./components/Navbar";
import App from "./components/App"
import Login from "./components/Login"



const Routes = () => (
  <App>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/login" component={Login}/>
    </Switch>
  </App>
);

export default Routes;