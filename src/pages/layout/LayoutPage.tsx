import React, {useState} from "react";
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
import {todos, Todo} from "../../demoData";
import {Modal} from "../../components/modal/Modal";

export function LayoutPage() {
  const history = useHistory();

  const [open, setOpen] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<Todo[]>(todos);

  const closeModal = () => setOpen(false);

  const saveTodo = (title: string, description: string) => {
    const id = todoList.length + 1;

    setTodoList([...todoList, {id, title, description}]);
  };

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

        <TitleButton type="button" onClick={() => setOpen(true)}>
          Add item
        </TitleButton>
      </NavButtons>

      {todoList.map((todo) => (
        <ListItemWrapper>
          <ItemTitle>
            {todo.id} {todo.title}
          </ItemTitle>
          <ItemDescription>{todo.description}</ItemDescription>
        </ListItemWrapper>
      ))}

      <Modal isOpen={open} save={saveTodo} close={closeModal} />
    </LayoutPageWrapper>
  );
}
