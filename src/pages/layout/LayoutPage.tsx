import React from "react";

import {LayoutPageWrapper, LayoutTitle} from "./LayoutPage.styled";
import {TodoList} from "../../components/todo-list/TodoList";

export function LayoutPage() {
  return (
    <LayoutPageWrapper>
      <LayoutTitle>To Do List</LayoutTitle>

      <TodoList />
    </LayoutPageWrapper>
  );
}
