import { StyledPlantTitleCard } from "./styles";
import { Heading, Caption } from "../../elements";

export default function PlantCard({
  title
}) {
  return (
    <StyledPlantTitleCard>
      <Heading align="left" size="H2">
        {title}
      </Heading>
      <Caption>plant species name</Caption>
    </StyledPlantTitleCard>
  );
}
