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
}
`

export default StyledIcon