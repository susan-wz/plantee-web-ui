import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const StyledLayout = styled.div`
  margin: 2rem;
  > :first-child {
    display: flex;
    justify-content: space-between;
  }
  > h1 {
    margin-bottom: 2rem;
  }
  @media ${breakpoint.lg} {
    padding-left: 320px;
    margin-left: 4rem;
    margin-right: 4rem;
  }
`

export default StyledLayout