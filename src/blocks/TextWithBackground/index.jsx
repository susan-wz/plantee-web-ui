import { Paragraph } from "../../elements"
import StyledTextWithBackground from "./styles"

export default function TextWithBackground({ text }) {

  return (
    <StyledTextWithBackground>
      <Paragraph invert align="center">{text}</Paragraph>
    </StyledTextWithBackground>
  );
}