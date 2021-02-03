import { StyledModal, customStyles, CloseIcon, ModalContent } from "./styles";
import { Icon, Heading } from "../index";

export default function GenericModal({
  title,
  children,
  modalIsOpen,
  closeModal,
}) {
  StyledModal.setAppElement("#root");

  return (
    <StyledModal
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
    </StyledModal>
  );
}
