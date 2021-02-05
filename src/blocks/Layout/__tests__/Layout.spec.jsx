import { shallow } from "enzyme"
import Layout from "../index"

describe("Layout", () => {
  it("should render the Layout component without crashing", () => {
    let wrapper = shallow(<Layout />)
    // expect(wrapper.find("Layout").text()).toEqual(LayoutText)
  })
})