import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"
import { Card } from "../../elements"

const StyledTaskCard = styled(Card)`
  background-color: ${props => props.background === "accent" ? props.theme.accent : props.theme.secondary };
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.mediumNeutral};
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  > :first-child {
    width: 72%;
  }
  > :last-child {
    width: 28%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media ${breakpoint.lg} {
  
  }
`

export default StyledTaskCard