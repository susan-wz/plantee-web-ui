import styled from "styled-components"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
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

export { customStyles, CloseIcon, ModalContent };