import { Icon, Heading } from "../../elements"
import StyledHeadingSection from "./styles"

export default function TaskDayHeading({ date }) {

  return (
    <StyledHeadingSection>
      <Heading size="H2" align="left">{date}</Heading>
      <Icon symbol="check" size={28} />
    </StyledHeadingSection>
  );
}