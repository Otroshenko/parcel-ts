import styled from "styled-components";

interface HeaderTabProps {
  isActive: boolean;
}

export const LoginFormWrapper = styled.form`
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.3);
`;

export const LoginHeader = styled.div`
  position: absolute;
  top: -20px;
  left: calc(50% - 89px);
  display: inline-block;
  padding: 10px 15px;
  background: #ea7f3b;
  border-radius: 5px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.4);
`;

export const LoginHeaderTab = styled.a`
  position: relative;
  font-size: 14px;
  text-align: center;
  padding: 5px 15px;
  color: ${(p: HeaderTabProps) => (p.isActive ? "#fff" : "#ccc")};
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 2px;
    width: ${(p: HeaderTabProps) => (p.isActive ? "100%" : 0)};
    left: 0;
    bottom: 0;
  }

  &:hover {
    color: #fff;
  }
`;

export const LoginError = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  border: none;
  text-align: center;
  width: 100%;
  display: block;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  background: #e91514;
`;
