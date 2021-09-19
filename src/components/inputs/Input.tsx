import React from "react";

import {InputWrapper, InputStyled, InputLabel} from "./Input.styled";

interface Props {
  type?: string;
  placeholder?: string;
  label: string;
  value: string;
  onChange(value: string): void;
}

export function Input({type = "text", ...props}: Props) {
  const {placeholder, label, value, onChange} = props;

  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <InputStyled
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder || ""}
      />
    </InputWrapper>
  );
}
