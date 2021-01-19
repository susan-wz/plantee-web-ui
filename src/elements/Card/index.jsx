import StyledCard from "./styles"

export default function Card({ background, border, shadow, children, width }) {
  const cardBackground = background ? background : null;
  const cardBorder = border ? border : false;
  const cardShadow = shadow ? shadow : false;
  const cardWidth = width ? width : '100%';

  return (
    <StyledCard background={cardBackground} border={cardBorder} shadow={cardShadow} width={cardWidth}>{children}</StyledCard>
  );
}