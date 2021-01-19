import { StyledForm, StyledBar, StyledButton } from "./styles"
import { Icon } from "../../elements"

export default function Searchbar() {

  return (
    <StyledForm>
      <StyledBar type="text">
      </StyledBar>
      <StyledButton type="submit">
        <Icon symbol="search" />
      </StyledButton>
    </StyledForm>
  );
}