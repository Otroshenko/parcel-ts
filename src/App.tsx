import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {LoginPage} from "./pages/login/LoginPage";
import {LayoutPage} from "./pages/layout/LayoutPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/layout" element={<LayoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
