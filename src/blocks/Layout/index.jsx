import { Nav } from "../index"
import { StyledLayout, StyledButton } from "./styles"
import { Icon, Heading } from "../../elements"
import { Link, useHistory } from "react-router-dom";

export default function Layout({ children, settings, title, back }) {
  let history = useHistory()

  return (
    <>
      <Nav />
      <StyledLayout>
        <div>
          {back ? <StyledButton type="button" onClick={() => history.goBack()}><Icon symbol="back" /></StyledButton> : <div />}
          {settings ? <Link to="/settings"><Icon symbol="settings" /></Link> : <div />}
        </div>
        <Heading size="H1">{title}</Heading>
        {children}
      </StyledLayout>
    </>
  );
}