import styled from 'styled-components';

const StyledPlantTitleCard = styled.div`
  background-color: ${props => props.theme.white};
  border: ${props => `1px solid ${props.theme.mediumNeutral}`};
  box-shadow:0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  position: relative;
  margin-top: 6rem;
  margin-bottom: 1rem;
`

export { StyledPlantTitleCard }