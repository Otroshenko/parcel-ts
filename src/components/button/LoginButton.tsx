import React, {FC} from "react";

import {LoginButtonStyled} from "./LoginButton.styled";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick(e: React.MouseEvent): void;
}

export const LoginButton: FC<Props> = ({type = "submit", ...props}) => {
  const {children, onClick} = props;

  return (
    <LoginButtonStyled type={type} onClick={(e) => onClick(e)}>
      {children}
    </LoginButtonStyled>
  );
};
