import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const H1 = styled.h1`
  color: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
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
  margin: 0px;
  @media ${breakpoint.lg} {
    font-size: 54px;
  }
`

const H2 = styled.h2`
color: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
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
  margin: 0px;
  @media ${breakpoint.lg} {
    font-size: 42px;
  }
`

const H3 = styled.h3`
color: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
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
  margin: 0px;
  @media ${breakpoint.lg} {
    font-size: 32px;
  }
`

const H4 = styled.h4`
color: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
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
  margin: 0px;
  @media ${breakpoint.lg} {
    font-size: 26px;
  }
`
H1.displayName = "H1"
H2.displayName = "H2"
H3.displayName = "H3"
H4.displayName = "H4"

export { H1, H2, H3, H4 }