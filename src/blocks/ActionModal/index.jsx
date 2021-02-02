import { GenericModal } from "../../elements";

export default function ActionModal({
  modalIsOpen,
  closeModal,
  title,
  type,
}) {
  const modalType = type ? type : "sort";
  let modalContent;

  switch (modalType) {
    case "sort":
      modalContent = <div />;
      break;
    case "filter":
      modalContent = <div />;
      break;
    default:
      modalContent = null;
  }

  return (
    <GenericModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      title={title}
    >
      {modalContent}
    </GenericModal>
  );
}
