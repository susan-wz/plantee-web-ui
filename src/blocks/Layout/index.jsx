import { Nav } from "../index"
import StyledLayout from "./styles"
import { Icon, Heading } from "../../elements"

export default function Layout({ children, settings, title, back }) {

  return (
    <>
      <Nav />
      <StyledLayout>
        <div>
          {back ? <Icon symbol="back" /> : <div />}
          {settings ? <Icon symbol="settings" /> : <div />}
        </div>
        <Heading size="H1">{title}</Heading>
        {children}
      </StyledLayout>
    </>
  );
}