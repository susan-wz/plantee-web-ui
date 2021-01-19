import { MobileNav, DesktopNav } from "./styles"
import { Icon, Heading } from "../../elements"
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <>
      <MobileNav>
        <Link to="/">
          <Icon symbol="tasks" colour="primary" size={36} />
        </Link>
        <Link to="/my_plants">
          <Icon symbol="leaf" colour="primary" size={36} />
        </Link>
        <Link to="/explore">
          <Icon symbol="lightbulb" colour="primary" size={36} />
        </Link>
      </MobileNav>
      <DesktopNav>
        <div>
          <Icon symbol="logo" colour="primary" size={64} /><Heading size="H2" align="left" colour="primary">Plantee</Heading>
        </div>
        <ul>
          <Link to="/">
            <li><Icon symbol="tasks" colour="primary" size={36} /><Heading size="H4" align="left" colour="primary">Tasks</Heading></li>
          </Link>
          <Link to="/my_plants">
            <li><Icon symbol="leaf" colour="primary" size={36} /><Heading size="H4" align="left" colour="primary">My Plants</Heading></li>
          </Link>
          <Link to="/explore">
            <li><Icon symbol="lightbulb" colour="primary" size={36} /><Heading size="H4" align="left" colour="primary">Explore Plants</Heading></li>
          </Link>
          <Link to="/settings">
            <li><Icon symbol="settings" colour="primary" size={36} /><Heading size="H4" align="left" colour="primary">Settings</Heading></li>
          </Link>
        </ul>
      </DesktopNav>
    </>
  );
}