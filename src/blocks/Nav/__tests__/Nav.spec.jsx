import Nav from "../index";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../../../styles/theme";
// import breakpoint from "../../../styles/breakpoints";
import { mountWithTheme } from "../../../testHelpers"

const children = <div />;

describe("Nav", () => {
  it("should render with a dark-neutral border", () => {
    let wrapper = mountWithTheme(
      <Router>
        <Nav>{children}</Nav>
      </Router>,
      theme
    );
    expect(wrapper).toHaveStyleRule("border", "1px solid #DBD3D8");
  });
  // it("should render with a white background", () => {
  //   let wrapper = mount(
  //     <Router>
  //       <Nav>{children}</Nav>
  //     </Router>
  //   );
  //   expect(wrapper).toHaveStyleRule(
  //     { "background-color": "#FFFFFF" },
  //     { media: `min-width: ${breakpoint.lg}` }
  //   );
  // });
});
