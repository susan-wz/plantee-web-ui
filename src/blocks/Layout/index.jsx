import { Nav } from "../index";
import { StyledLayout, StyledButton } from "./styles";
import { Icon, Heading } from "../../elements";
import { Link, useHistory } from "react-router-dom";

export default function Layout({
  children,
  settings,
  title,
  back,
  iconBackgrounds,
}) {
  let history = useHistory();

  return (
    <>
      <Nav />
      <StyledLayout>
        <div>
          {back ? (
            <StyledButton type="button" onClick={() => history.goBack()}>
              <Icon
                background={iconBackgrounds}
                symbol="back"
                colour={iconBackgrounds ? "white" : "dark-neutral"}
              />
            </StyledButton>
          ) : (
            <div />
          )}
          {settings ? (
            <Link to="/settings">
              <Icon background={iconBackgrounds} symbol="settings" />
            </Link>
          ) : (
            <div />
          )}
        </div>
        <Heading size="H1">{title}</Heading>
        {children}
      </StyledLayout>
    </>
  );
}
