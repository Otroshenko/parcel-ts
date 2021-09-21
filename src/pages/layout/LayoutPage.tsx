import React from "react";
import {useHistory} from "react-router-dom";

import {
  LayoutPageWrapper,
  LayoutTitle,
  ListItemWrapper,
  ItemTitle,
  ItemDescription,
  TitleButton,
  NavButtons,
} from "./LayoutPage.styled";
import {todos} from "../../demoData";

export function LayoutPage() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <LayoutPageWrapper>
      <LayoutTitle>To Do List</LayoutTitle>

      <NavButtons>
        <TitleButton type="button" onClick={logOut}>
          Log Out
        </TitleButton>

        <TitleButton>Add item</TitleButton>
      </NavButtons>

      {todos.map((todo) => (
        <ListItemWrapper>
          <ItemTitle>
            {todo.id} {todo.title}
          </ItemTitle>
          <ItemDescription>{todo.description}</ItemDescription>
        </ListItemWrapper>
      ))}
    </LayoutPageWrapper>
  );
}
