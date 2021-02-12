import styled from "styled-components"

const StyledTextWithBackground = styled.div`
  background-color: ${props => props.theme.secondary};
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

export default StyledTextWithBackground;