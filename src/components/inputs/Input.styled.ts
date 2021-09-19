import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
}

export const InputWrapper = styled.div`
  margin: 20px 0;
`;

export const InputStyled = styled.input<InputProps>`
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  border: none;
  width: 100%;
  display: block;
  box-sizing: border-box;
  color: #495057;
  font-size: 16px;
  background: #efefef;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #ea7f3b;
  }
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: #ea7f3b;
  display: block;
  margin: 5px 0;
  font-weight: normal;
  pointer-events: none;
`;
