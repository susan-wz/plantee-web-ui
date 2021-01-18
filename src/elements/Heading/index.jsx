import { H1, H2, H3, H4 } from "./styles"

export default function Heading({ size, invert, align, children }) {
  const headingSize = size ? size : 'H1'
  const headingAlignment = align ? align : 'center'
  let headingBody;
  switch (headingSize) {
    case "H1":
      headingBody = <H1 invert={invert} align={headingAlignment}>{children}</H1>
      break
    case "H2":
      headingBody = <H2 invert={invert} align={headingAlignment}>{children}</H2>
      break
    case "H3":
      headingBody = <H3 invert={invert} align={headingAlignment}>{children}</H3>
      break
    case "H4":
      headingBody = <H4 invert={invert} align={headingAlignment}>{children}</H4>
      break
    default:
      headingBody = null
  }
  return (
    <>{headingBody}</>
  );
}