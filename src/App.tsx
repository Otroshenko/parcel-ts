import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

import {LoginPage} from "./pages/login/LoginPage";
import {LayoutPage} from "./pages/layout/LayoutPage";

export function App() {
  const auth = localStorage.getItem("auth");

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"} component={LoginPage} />
        {auth && (
          <React.Fragment>
            <Route path={"/layout"} component={LayoutPage} />

            <Redirect to={"/layout"} />
          </React.Fragment>
        )}

        {!auth && <Redirect to={"/login"} />}
      </Switch>
    </BrowserRouter>
  );
}
