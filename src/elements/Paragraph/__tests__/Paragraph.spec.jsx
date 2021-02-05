import { shallow } from "enzyme"
import Paragraph from "../index"

const paragraphText = "Test paragraph"

describe("Paragraph", () => {
  it("should render the paragraph component with text", () => {
    let wrapper = shallow(<Paragraph>{paragraphText}</Paragraph>)
    expect(wrapper.find("Paragraph").text()).toEqual(paragraphText)
  })
})