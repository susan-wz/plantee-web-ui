import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const StyledLayout = styled.div`
  position: relative;
  z-index: 1;
  margin: 2rem 2rem 5rem 2rem;
  > :first-child {
    display: flex;
    justify-content: space-between;
  }
  > h1 {
    margin-bottom: 1rem;
  }
  @media ${breakpoint.lg} {
    padding-left: 320px;
    margin-left: 4rem;
    margin-right: 4rem;
  }
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

export {StyledLayout, StyledButton}