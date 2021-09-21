import React, {useState} from "react";

import {ModalWrapper, ModalContent} from "./Modal.styled";
import {Button} from "../button/LoginButton.styled";
import {Input} from "../inputs/Input";
import {NavRow} from "../../pages/layout/LayoutPage.styled";
import {LoginError} from "../../pages/login/LoginPage.styled";

interface Props {
  isOpen: boolean;
  save(title: string, description: string): void;
  close(): void;
}

export function Modal({isOpen, close, save}: Props) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const saveItem = () => {
    if (!title || !description) {
      setError("Empty Title or Description");
      return;
    }

    save(title, description);
    setTitle("");
    setDescription("");
    close();
  };

  return (
    <ModalWrapper active={isOpen}>
      <ModalContent>
        {error && <LoginError>{error}</LoginError>}

        <Input label="Todo title" value={title} onChange={setTitle} />
        <Input label="Todo description" value={description} onChange={setDescription} />

        <NavRow>
          <Button type="button" onClick={close}>
            Close
          </Button>
          <Button type="button" onClick={saveItem}>
            Add
          </Button>
        </NavRow>
      </ModalContent>
    </ModalWrapper>
  );
}
