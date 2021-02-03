import StyledParagraph from "./styles";

export default function Paragraph({ size, invert, align, children }) {
  const paragraphSize = size ? size : "medium";
  const paragraphAlignment = align ? align : "left";

  return (
    <StyledParagraph
      size={paragraphSize}
      invert={invert}
      align={paragraphAlignment}
    >
      {children}
    </StyledParagraph>
  );
}
