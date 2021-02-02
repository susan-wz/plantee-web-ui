import { GenericModal } from "../../elements";

export default function ConfirmationModal({
  modalIsOpen,
  closeModal,
  title,
  type,
}) {
  const modalType = type ? type : "sort";
  let modalContent;

  switch (modalType) {
    case "delete":
      modalContent = <div />;
      break;
    case "delay":
      modalContent = <div />;
      break;
    case "watered":
      modalContent = <div />;
      break;
    case "addPlant":
      modalContent = <div />;
      break;
    case "addFavourite":
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
