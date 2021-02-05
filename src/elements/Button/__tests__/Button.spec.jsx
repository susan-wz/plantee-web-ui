import { shallow } from "enzyme"
import Button from "../index"

describe("Button", () => {
  it("should render the Button component without crashing", () => {
    let wrapper = shallow(<Button />)
    // expect(wrapper.find("Button").text()).toEqual(ButtonText)
  })
})