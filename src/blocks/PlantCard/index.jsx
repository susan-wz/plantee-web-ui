import { StyledPlantCard, StyledImageDiv, StyledLabel } from "./styles"
import { Paragraph, Caption } from "../../elements"

export default function PlantCard({ photoUrl, plantName, plantCategory, showCategory, key }) {

  return (
    <StyledPlantCard>
      <StyledImageDiv>
        <img src={photoUrl} alt={plantName}/>
      </StyledImageDiv>
      <StyledLabel>
        <Paragraph size="medium">{plantName}</Paragraph>
        {showCategory ? <Caption>{plantCategory}</Caption> : null}
      </StyledLabel>
    </StyledPlantCard>
  );
}