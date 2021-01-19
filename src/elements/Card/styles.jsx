import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 8px;
  width: ${props => props.width ? props.width : "100%"};
  border: ${props => props.border ? `1px solid ${props.theme.mediumNeutral}` : null};
  box-shadow: ${props => props.shadow ? "0 0 8px rgba(0, 0, 0, 0.1)" : null};
  background-color: ${props => {
    if (props.background === "secondary") {
      return props.theme.secondary
    } else if (props.background === "accent") {
      return props.theme.accent
    } else if (props.background === "primary") {
      return props.theme.primary
    } else {
      return null;
    }}}
`

export default StyledCard