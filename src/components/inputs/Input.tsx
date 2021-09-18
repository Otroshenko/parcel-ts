import React from "react";

import {InputWrapper, InputStyled, InputLabel} from "./Input.styled";

interface Props {
  type?: string;
  name: string;
  placeholder?: string;
  label: string;
}

export function Input({type = "text", ...props}: Props) {
  const {name, placeholder, label} = props;

  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <InputStyled type={type} name={name} placeholder={placeholder || ""} />
    </InputWrapper>
  );
}
