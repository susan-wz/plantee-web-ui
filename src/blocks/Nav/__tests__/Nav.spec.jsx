import { shallow } from "enzyme"
import Nav from "../index"

describe("Nav", () => {
  it("should render the Nav component without crashing", () => {
    let wrapper = shallow(<Nav />)
    // expect(wrapper.find("Nav").text()).toEqual(NavText)
  })
})