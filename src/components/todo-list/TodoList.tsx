import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {ListItemWrapper, ItemTitle, ItemDescription, TitleButton, NavButtons} from "./TodoList.styled";
import {Todo, todos} from "../../demoData";
import {Modal} from "../modal/Modal";

export function TodoList() {
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
    <React.Fragment>
      <NavButtons>
        <TitleButton type="button" onClick={logOut}>
          Log Out
        </TitleButton>

        <TitleButton type="button" onClick={() => setOpen(true)}>
          Add item
        </TitleButton>
      </NavButtons>

      {todoList.map((todo) => (
        <ListItemWrapper key={todo.id}>
          <ItemTitle>
            {todo.id} {todo.title}
          </ItemTitle>
          <ItemDescription>{todo.description}</ItemDescription>
        </ListItemWrapper>
      ))}

      <Modal isOpen={open} save={saveTodo} close={closeModal} />
    </React.Fragment>
  );
}
