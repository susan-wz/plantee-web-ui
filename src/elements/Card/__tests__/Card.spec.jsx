import Card from "../index"
import { mountWithTheme } from "../../../testHelpers"

const children = <div />;

describe("Card", () => {
  it("should render with default styles", () => {
    let wrapper = mountWithTheme(<Card>{children}</Card>)
    expect(wrapper).not.toHaveStyleRule("border");
    expect(wrapper).not.toHaveStyleRule("background-color");
    expect(wrapper).not.toHaveStyleRule("box-shadow");
    expect(wrapper).toHaveStyleRule("width", "100%");
  })
})