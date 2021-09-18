import React from "react";

import {Input} from "../../components/inputs/Input";
import {Button} from "../../components/button/Button";
import {LoginFormWrapper, LoginHeader, LoginHeaderTab} from "./LoginForm.styled";

interface Props {
  active: boolean;
  activeHandler(e: React.MouseEvent, active: boolean): void;
}

export function LoginForm(props: Props) {
  const {active, activeHandler} = props;

  const logIn = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Log In");
  };

  return (
    <LoginFormWrapper>
      <LoginHeader>
        <LoginHeaderTab href="#" isActive={active} onClick={(e) => activeHandler(e, true)}>
          Sign in
        </LoginHeaderTab>

        <LoginHeaderTab href="#" isActive={!active} onClick={(e) => activeHandler(e, false)}>
          Sign up
        </LoginHeaderTab>
      </LoginHeader>

      <Input name="login" label="User Name" />
      <Input type="password" name="password" label="Password" />

      <Button onClick={logIn}>Log in</Button>
    </LoginFormWrapper>
  );
}
