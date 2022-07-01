import React, {useState} from "react";

import {LoginPageWrapper, LoginFormWrapper, LoginUserAvatar, LoginError, Avatar} from "./LoginPage.styled";
import {Input} from "../../components/inputs/Input";
import {LoginButton} from "../../components/button/LoginButton";
import {useNavigate} from "react-router-dom";
import userAvatar from "./assets/userAvatar.png";

export function LoginPage() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const history = useNavigate();

  const logIn = () => {
    if (!userName || !password) {
      setError("Invalid User name or Password");
      return;
    }

    setError(null);
    history("/layout");
  };

  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <LoginUserAvatar>
          <Avatar src={userAvatar} />
        </LoginUserAvatar>

        {error && <LoginError>{error}</LoginError>}

        <Input value={userName} onChange={setUserName} label="User Name" />
        <Input type="password" value={password} onChange={setPassword} label="Password" />

        <LoginButton type="button" onClick={logIn}>
          Log in
        </LoginButton>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
}
