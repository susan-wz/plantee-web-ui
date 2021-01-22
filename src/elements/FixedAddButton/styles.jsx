import styled from 'styled-components'
import breakpoint from "../../styles/breakpoints"

const FixedButton = styled.div`
position: fixed;
bottom: 104px;
right: 24px;
z-index: 3;
@media ${breakpoint.lg} {
  bottom: 36px;
  right: 36px;
}
`;

export default FixedButton