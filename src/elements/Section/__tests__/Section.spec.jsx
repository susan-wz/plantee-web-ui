import { shallow } from "enzyme"
import Section from "../index"

describe("Section", () => {
  it("should render the Section component without crashing", () => {
    let wrapper = shallow(<Section />)
    // expect(wrapper.find("Section").text()).toEqual(SectionText)
  })
})