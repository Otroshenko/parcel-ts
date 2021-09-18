import React, {useState} from "react";

import {LoginForm} from "../../forms/login/LoginForm";
import {LoginPageWrapper} from "./LoginPage.styled";

export function LoginPage() {
  const [active, setActive] = useState<boolean>(true);

  const activeHandler = (e: React.MouseEvent, active: boolean) => {
    e.preventDefault();
    setActive(active);
  };

  return (
    <LoginPageWrapper>
      <LoginForm active={active} activeHandler={activeHandler} />
    </LoginPageWrapper>
  );
}
