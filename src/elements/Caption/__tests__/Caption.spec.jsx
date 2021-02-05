import { shallow } from "enzyme"
import Caption from "../index"

const captionText = "Test caption"

describe("Caption", () => {
  it("should render the Caption component with text", () => {
    let wrapper = shallow(<Caption>{captionText}</Caption>)
    expect(wrapper.find("Caption").text()).toEqual(captionText)
  })
})