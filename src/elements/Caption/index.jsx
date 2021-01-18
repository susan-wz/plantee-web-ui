import StyledCaption from "./styles"

export default function Caption({ invert, align, children}) {
  const captionAlignment = align ? align : 'center'

  return (
    <StyledCaption invert={invert} align={captionAlignment}>{children}</StyledCaption>
  );
}