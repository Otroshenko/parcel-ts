import React from "react";
import {useHistory} from "react-router-dom";

export function LayoutPage() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div>
      <h1>Hello Layout Page</h1>
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}
