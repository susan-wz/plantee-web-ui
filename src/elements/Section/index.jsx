import StyledSection from "./styles"

export default function Section({ align, children }) {
  const sectionAlignment = align ? align : 'center'

  return (
    <StyledSection align={sectionAlignment}>
      {children}
    </StyledSection>
  );
}