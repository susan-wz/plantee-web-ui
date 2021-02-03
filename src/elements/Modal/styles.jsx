import styled from "styled-components"
import Modal from "react-modal";
import breakpoint from "../../styles/breakpoints"

const StyledModal = styled(Modal)`
  position: absolute;
  top: auto;
  width: 100%;
  bottom: 0px;
  border: ${props => `1px solid ${props.theme.mediumNeutral}`};
  overflow: auto;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  outline: none;
  padding: 20px;
  @media ${breakpoint.lg} {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    width: auto;
    transform: translate(-50%, -50%);
  }
`;

// const Overlay = styled.div`
// .ReactModal__Overlay {
//     position: fixed;
//     inset: 0px;
//     background-color: red;
//     opacity: 0;
//     transition: opacity 2000ms ease-in-out;
//   }
//   .ReactModal__Overlay--after-open{
//     opacity: 1;
//   }
//   .ReactModal__Overlay--before-close{
//     opacity: 0;
//   }
// `;

const customStyles = {
  overlay: { zIndex: 100 }
};

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const ModalContent = styled.div`
  margin-top: 24px;
`

export { StyledModal, customStyles, CloseIcon, ModalContent };