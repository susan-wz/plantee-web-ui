import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const H1 = styled.h1`
  color: ${props => props.invert ? props.theme.white : props.theme.darkNeutral};
  text-align: ${props => {
    if (props.align === 'left') {
      return 'left'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'center'
    }
  }};
  font-size: 36px;
  letter-spacing: -0.5px;
  font-weight: 700;
  @media ${breakpoint.lg} {
    font-size: 54px;
  }
`

const H2 = styled.h2`
  color: ${props => props.invert ? props.theme.white : props.theme.darkNeutral};
  text-align: ${props => {
    if (props.align === 'left') {
      return 'left'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'center'
    }
  }};
  font-size: 30px;
  font-weight: 500;
  @media ${breakpoint.lg} {
    font-size: 44px;
  }
`

const H3 = styled.h3`
  color: ${props => props.invert ? props.theme.white : props.theme.darkNeutral};
  text-align: ${props => {
    if (props.align === 'left') {
      return 'left'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'center'
    }
  }};
  font-size: 26px;
  letter-spacing: 0.25px;
  font-weight: 500;
  @media ${breakpoint.lg} {
    font-size: 32px;
  }
`

const H4 = styled.h4`
  color: ${props => props.invert ? props.theme.white : props.theme.darkNeutral};
  text-align: ${props => {
    if (props.align === 'left') {
      return 'left'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'center'
    }
  }};
  font-size: 22px;
  letter-spacing: 0.25px;
  @media ${breakpoint.lg} {
    font-size: 26px;
  }
`

export { H1, H2, H3, H4 }