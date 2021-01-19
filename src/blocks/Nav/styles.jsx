import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const MobileNav = styled.nav`
  z-index: 2;
  background-color: ${props => props.theme.white};
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
  @media ${breakpoint.lg} {
    display: none;
  }
`

const DesktopNav = styled.nav`
  display: none;
  top: 0;
  @media ${breakpoint.lg} {
    z-index: 2;
    background-color: ${props => props.theme.white};
    position: fixed;
    height: 100vh;
    width: 320px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    border: ${props => `1px solid ${props.theme.mediumNeutral}`};
    display: inline-block;
    > div {
      padding: 1rem;
      > h2 {
      display: inline-block;
      padding: 0.5rem;
      margin-left: 0.5rem;
    }
  }
    > ul {
      margin: 0px;
      padding: 1rem;
      list-style-type: none;
      > a {
        text-decoration: none;
        > li > * {
          display: inline-block;
          padding: 0.5rem;
        }
      }
    }
  }
`

export { MobileNav, DesktopNav }