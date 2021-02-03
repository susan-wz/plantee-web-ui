import styled from 'styled-components';

const StyledCaption = styled.p`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-style: italic;
  margin: 4px;
  text-align: ${props => {
    if (props.align === 'center') {
      return 'center'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'left'
    }
  }};
  color: ${props => {
    if (props.colour === "primary") {
      return props.theme.primary
    } else if (props.colour === "white") {
      return props.theme.white
    } else {
      return props.theme.darkNeutral
    }
  }};
`

export default StyledCaption