import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {Input} from "../../components/inputs/Input";
import {LoginButton} from "../../components/button/LoginButton";
import {LoginFormWrapper, LoginHeader, LoginHeaderTab, LoginError} from "./LoginForm.styled";
import {demoData} from "../../demoData";

interface Props {
  active: boolean;
  activeHandler(e: React.MouseEvent, active: boolean): void;
}

export function LoginForm(props: Props) {
  const {active, activeHandler} = props;

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const logIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userName != demoData.userName || password != demoData.password) {
      setError("Invalid User name or Password");
      return;
    }

    localStorage.setItem("auth", "success");
    setError(null);
    history.push("/layout");
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

      {error && <LoginError>{error}</LoginError>}

      <Input value={userName} onChange={setUserName} label="User Name" />
      <Input type="password" value={password} onChange={setPassword} label="Password" />

      <LoginButton onClick={logIn}>Log in</LoginButton>
    </LoginFormWrapper>
  );
}
