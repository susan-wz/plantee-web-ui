import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const StyledParagraph = styled.p`
  color: ${props => props.invert ? props.theme.white : props.theme.darkNeutral};
  margin: 0px;
  text-align: ${props => {
    if (props.align === 'center') {
      return 'center'
    } else if (props.align === 'right') {
      return 'right'
    } else {
      return 'left'
    }
  }};
  font-size: ${props => {
    if (props.size === 'small') {
      return '12px'
    } else if (props.size === 'large') {
      return '20px'
    } else {
      return '16px'
    }
  }};
  line-height: ${props => {
    if (props.size === 'small') {
      return '140%'
    } else if (props.size === 'large') {
      return '140%'
    } else {
      return '150%'
    }
  }};
  letter-spacing: ${props => {
    if (props.size === 'small') {
      return '0.5px'
    } else if (props.size === 'large') {
      return '0.5px'
    } else {
      return '0.5px'
    }
  }};
  @media ${breakpoint.lg} {
    line-height: ${props => {
      if (props.size === 'small') {
        return '150%'
      } else if (props.size === 'large') {
        return '140%'
      } else {
        return '150%'
      }
    }};
  }
`

StyledParagraph.displayName = "Paragraph"

export default StyledParagraph