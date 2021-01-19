import StyledNav from "./styles"
import { Icon } from "../../elements"
// import Navbar from "react-bootstrap"

export default function Nav() {

  return (
    <StyledNav>
      <Icon symbol="tasks" colour="primary" size={36}/>
      <Icon symbol="leaf"colour="primary" size={36}/>
      <Icon symbol="lightbulb"colour="primary" size={36}/>
    </StyledNav>
  );
}