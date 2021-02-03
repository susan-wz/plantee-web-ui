import { CloseIcon, ModalContent } from "./styles";
import { Icon, Heading } from "../index";
import Modal from "react-modal";

import "./modal.css"

export default function GenericModal({
  title,
  children,
  modalIsOpen,
  closeModal,
}) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      overlayClassName={'ReactModal__Overlay'}
      className={'ReactModal__Content'}
      closeTimeoutMS={200}
    >
      <CloseIcon>
        <Icon symbol="close" onClick={closeModal} />
      </CloseIcon>
      <ModalContent>
        <Heading size="H2">{title}</Heading>
        {children}
      </ModalContent>
    </Modal>
  );
}
