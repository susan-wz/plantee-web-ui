import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 144px;
  border-radius: 8px;
  padding: 0.5rem;
  border: ${(props) =>
    props.variant === "primary" || props.variant === "danger"
      ? "none"
      : `1px solid ${props.theme.darkNeutral}`};
  background-color: ${(props) => {
    if (props.variant === "primary") {
      return props.theme.primary;
    } else if (props.variant === "danger") {
      return props.theme.danger;
    } else {
      return props.theme.white;
    }
  }};
`;

export default StyledButton;
