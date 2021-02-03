import { GenericModal, Button, Paragraph } from "../../elements";
import { ContentDiv, ButtonDiv } from "./styles";

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
      modalContent = (
        <>
          <Paragraph>Are you sure you want to delete?</Paragraph>
          <ButtonDiv>
            <Button variant="invert" text="Cancel" />
            <Button variant="primary" text="Delete" />
          </ButtonDiv>
        </>
      );
      break;
    case "delay":
      modalContent = (
        <>
          <Paragraph>Delay for a day?</Paragraph>
          <ButtonDiv>
            <Button variant="invert" text="Cancel" />
            <Button variant="primary" text="Delete" />
          </ButtonDiv>
        </>
      );
      break;
    case "watered":
      modalContent = (
        <>
          <Paragraph>Are you sure?</Paragraph>
          <ButtonDiv>
            <Button variant="invert" text="Cancel" />
            <Button variant="primary" text="Delete" />
          </ButtonDiv>
        </>
      );
      break;
    case "addPlant":
      modalContent = (
        <>
          <Paragraph>Add to plant collection?</Paragraph>
          <ButtonDiv>
            <Button variant="invert" text="Cancel" />
            <Button variant="primary" text="Delete" />
          </ButtonDiv>
        </>
      );
      break;
    case "addFavourite":
      modalContent = (
        <ButtonDiv>
          <Paragraph>Add to favourites?</Paragraph>
          <Button variant="invert" text="Cancel" />
          <Button variant="primary" text="Delete" />
        </ButtonDiv>
      );
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
      <ContentDiv>{modalContent}</ContentDiv>
    </GenericModal>
  );
}
