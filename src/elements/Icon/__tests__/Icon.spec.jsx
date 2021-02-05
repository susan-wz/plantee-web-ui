import { shallow } from "enzyme"
import Icon from "../index"

describe("Icon", () => {
  it("should render the Icon component without crashing", () => {
    let wrapper = shallow(<Icon />)
    // expect(wrapper.find("Icon").text()).toEqual(IconText)
  })
})