import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  border: ${props => `1px solid ${props.theme.mediumNeutral}`};
  padding: 1.25rem;
  display: flex;
  justify-content: space-around;
`

export default StyledNav