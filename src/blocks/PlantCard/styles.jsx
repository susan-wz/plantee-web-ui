import styled from 'styled-components';
import { Card } from "../../elements"

const StyledPlantCard = styled(Card)`
  display: inline-block;
  width: 156px;
  height: 188px;
  border-radius: 12px;
  box-shadow:0 0 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const StyledImageDiv = styled.div`
  width: 100%;
  height: 120px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.mediumNeutral};
  > img {
    max-height: 100%;
    max-width: 100%;
  }
`

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`

export { StyledPlantCard, StyledImageDiv, StyledLabel }