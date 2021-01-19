import styled from "styled-components"
import breakpoint from "../../styles/breakpoints"

const StyledForm = styled.form`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border: ${props => `1px solid ${props.theme.mediumNeutral}`};
  padding: 4px;
  @media ${breakpoint.lg} {
    width: 60%;
  }
`

const StyledBar = styled.input`
  border: none;
  width: 74%;
  font-size: 16px;
  color: ${props => props.theme.darkNeutral};
  :focus {
    border: none;
    outline: none;
  }
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`

export { StyledForm, StyledBar, StyledButton }