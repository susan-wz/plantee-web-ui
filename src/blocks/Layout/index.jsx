import { Nav } from "../index"
import StyledLayout from "./styles"
import { Icon, Heading } from "../../elements"
import { Link } from "react-router-dom";

export default function Layout({ children, settings, title, back }) {

  return (
    <>
      <Nav />
      <StyledLayout>
        <div>
          {back ? <Icon symbol="back" /> : <div />}
          {settings ? <Link to="/settings"><Icon symbol="settings" /></Link> : <div />}
        </div>
        <Heading size="H1">{title}</Heading>
        {children}
      </StyledLayout>
    </>
  );
}