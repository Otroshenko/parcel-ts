import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginFormWrapper = styled.form`
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.3);
`;

export const LoginUserAvatar = styled.div`
  position: absolute;
  top: -70px;
  left: calc(50% - 50px);
  display: block;
  padding: 10px;
  background: #ea7f3b;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.4);
  text-align: center;
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

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;
