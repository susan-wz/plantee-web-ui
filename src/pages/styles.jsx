import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

const FixedHeaderPhoto = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 244px;
  z-index: -1;
`;

const MobileLayout = styled.div`
  @media ${breakpoint.lg} {
    display: none;
  }
`;

const DesktopLayout = styled.div`
  display: none;
  @media ${breakpoint.lg} {
    display: flex;
  }
`;

const LeftCol = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const RightCol = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const DesktopImagePhoto = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  background-color: ${props => props.theme.mediumNeutral};
  > img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  > i {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export {
  FixedHeaderPhoto,
  MobileLayout,
  DesktopLayout,
  LeftCol,
  RightCol,
  DesktopImagePhoto,
  ButtonDiv
};
