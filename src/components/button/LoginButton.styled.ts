import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #ea7f3b;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const LoginButtonStyled = styled(Button)`
  min-width: 180px;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 90px);
`;
