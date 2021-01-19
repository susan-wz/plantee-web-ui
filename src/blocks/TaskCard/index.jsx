import StyledTaskCard from "./styles"
import { Icon, Heading, Caption } from "../../elements"

export default function TaskCard({ type }) {
  const taskType = type ? type : 'water'

  let backgroundColour;
  let textColour;
  let typeText;
  if (taskType === "fertilize") {
    backgroundColour = "accent"
    textColour = "dark-neutral"
    typeText = "Fertilize"
  } else {
    backgroundColour = "secondary"
    textColour = "white"
    typeText = "Water"
  }

  return (
    <StyledTaskCard background={backgroundColour}>
      <div>
        <Caption colour={textColour}>{typeText}</Caption>
        <Heading size="H4" align="left" colour={textColour}>Snake Plant</Heading>
        <Caption colour={textColour}>Last watered 4 Dec 2020</Caption></div>
      <div>
        <Icon symbol="delay" colour={textColour} size={28}/>
        <Icon symbol="check" colour={textColour} size={28}/>
      </div>
    </StyledTaskCard>
  );
}