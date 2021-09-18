import React, {FC} from "react";

import {ButtonStyled} from "./Button.styled";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick(e: React.MouseEvent): void;
}

export const Button: FC<Props> = ({type = "submit", ...props}) => {
  const {children, onClick} = props;

  return (
    <ButtonStyled type={type} onClick={(e) => onClick(e)}>
      {children}
    </ButtonStyled>
  );
};
