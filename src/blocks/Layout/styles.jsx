import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const StyledLayout = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  @media ${breakpoint.lg} {
    padding-left: 320px;
    margin-left: 4rem;
    margin-right: 4rem;
  }
`

export default StyledLayout