import React, {useState} from "react";

import {LoginPageWrapper, LoginFormWrapper, LoginUserAvatar, LoginError, Avatar} from "./LoginPage.styled";
import {Input} from "../../components/inputs/Input";
import {LoginButton} from "../../components/button/LoginButton";
import {useHistory} from "react-router-dom";
import userAvatar from "./assets/userAvatar.png";

export function LoginPage() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const logIn = () => {
    if (!userName || !password) {
      setError("Invalid User name or Password");
      return;
    }

    localStorage.setItem("auth", "success");
    setError(null);
    history.push("/layout");
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

        <LoginButton onClick={logIn}>Log in</LoginButton>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
}
