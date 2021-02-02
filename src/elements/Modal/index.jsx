import { customStyles, CloseIcon, ModalContent } from "./styles";
import Modal from "react-modal";
import { Icon, Heading } from "../index";

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
      style={customStyles}
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
