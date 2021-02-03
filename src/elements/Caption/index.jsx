import StyledCaption from "./styles";

export default function Caption({ invert, align, colour, children }) {
  const captionAlignment = align ? align : "left";
  const captionColour = colour ? colour : "dark-neutral";

  return (
    <StyledCaption
      invert={invert}
      align={captionAlignment}
      colour={captionColour}
    >
      {children}
    </StyledCaption>
  );
}
