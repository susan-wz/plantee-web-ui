import StyledButton from "./styles";
import { Paragraph } from "../index";

export default function Button({ variant, text, onClick }) {
  const buttonVariant = variant ? variant : "primary";
  const textColour =
    variant === "primary" || variant === "danger" ? "invert" : null;

  return (
    <StyledButton variant={buttonVariant} onClick={onClick}>
      <Paragraph invert={textColour} align={"center"}>
        <strong>{text}</strong>
      </Paragraph>
    </StyledButton>
  );
}
