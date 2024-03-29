import { StyledTaskCard, DesktopTaskIcon, TitleSection, DesktopText, IconSection } from "./styles"
import { Icon, Heading, Caption } from "../../elements"

export default function TaskCard({ type, plantName, lastEvent, frequency }) {
  const taskType = type ? type : 'water'

  let backgroundColour;
  let textColour;
  let typeText;
  let taskIcon;
  if (taskType === "fertilize") {
    backgroundColour = "accent"
    textColour = "dark-neutral"
    typeText = "Fertilize"
    taskIcon = "fertilizer";
  } else {
    backgroundColour = "secondary"
    textColour = "white"
    typeText = "Water"
    taskIcon = "drop"
  }

  return (
    <StyledTaskCard background={backgroundColour}>
      <DesktopTaskIcon>
        <Icon symbol={taskIcon} colour={textColour} size={28} />
      </DesktopTaskIcon>
      <TitleSection>
        <Caption colour={textColour}>{typeText}</Caption>
        <Heading size="H4" align="left" colour={textColour}>{plantName}</Heading>
        <Caption colour={textColour}>Last watered {lastEvent}</Caption>
      </TitleSection>
      <DesktopText>
        <div>
          <Caption colour={textColour}>Last watered {lastEvent}</Caption>
          <Caption colour={textColour}>Check soil moisture every {frequency} days</Caption>
        </div>
      </DesktopText>
      <IconSection>
        <Icon symbol="delay" colour={textColour} size={28} />
        <Icon symbol="check" colour={textColour} size={28} />
      </IconSection>
    </StyledTaskCard>
  );
}