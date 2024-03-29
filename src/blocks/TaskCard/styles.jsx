import styled from 'styled-components';
import breakpoint from "../../styles/breakpoints"

const StyledTaskCard = styled.div`
  background-color: ${props => props.background === "accent" ? props.theme.accent : props.theme.secondary};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.mediumNeutral};
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  width: 100%;
`

const DesktopTaskIcon = styled.div`
  display: none;
  @media ${breakpoint.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
  }
`;

const TitleSection = styled.div`
  width: 72%;
  @media ${breakpoint.lg} {
    width: 32%;
    > :last-child {
      display: none;
    }
  }
`;

const DesktopText = styled.div`
  display: none;
  @media ${breakpoint.lg} {
    display: block;
    width: 36%;
    display: flex;
    align-items: center;
  }
`;

const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 28%;
  @media ${breakpoint.lg} {
    width: 20%;
  }
`;

export { StyledTaskCard, DesktopTaskIcon, TitleSection, DesktopText, IconSection }