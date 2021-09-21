import styled from "styled-components";

interface ModalProps {
  active: boolean;
}

export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({active}) => (active ? null : "none")};

  ${({active}) =>
    active &&
    `
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const ModalContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  min-width: 450px;
`;
