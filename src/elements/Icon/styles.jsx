import styled from 'styled-components';

const StyledIcon = styled.i`
& > svg {
    fill: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.background ? "50%" : null};
  background-color: ${props => props.background ? props.theme.primary : null };
  padding: ${props => {
    if(props.background && props.size >= 48) {
      return "12px"
    } else {
      return "0px"
    }
  }};
  overflow: visible;
}
`

export default StyledIcon