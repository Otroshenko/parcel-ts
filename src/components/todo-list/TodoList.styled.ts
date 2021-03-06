import styled from "styled-components";

import {Button} from "../button/LoginButton.styled";

export const NavRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemWrapper = styled.div`
  width: 760px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  background: #efefef;
  box-shadow: 0 0 5px #ea7f3b;
  border: none;
  margin: 10px 0;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ItemDescription = styled.div`
  font-size: 14px;
  color: gray;
`;

export const NavButtons = styled(NavRow)`
  width: 780px;
  margin-bottom: 20px;
`;

export const TitleButton = styled(Button)`
  min-width: 220px;
`;

export const RemoveButton = styled(Button)`
  float: right;
`;
