import customStyles from "./styles";
import Modal from "react-modal";

export default function GenericModal({ children, modalIsOpen, closeModal }) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <p>hello</p>
      {children}
    </Modal>
  );
}
