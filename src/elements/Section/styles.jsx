import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.align === "left") {
      return "flex-start"
    } else if (props.align === "right") {
      return "flex-end"
    } else {
      return "center"
    }
  }};
  margin-bottom: 1rem;
`

export default StyledSection