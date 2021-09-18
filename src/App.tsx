import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

import {LoginPage} from "./pages/login/LoginPage";
import {LayoutPage} from "./pages/LayoutPage";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/layout"} component={LayoutPage} />

        <Redirect to={"/login"} />
      </Switch>
    </BrowserRouter>
  );
}
