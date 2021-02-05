import { shallow } from "enzyme"
import FixedAddButton from "../index"

describe("FixedAddButton", () => {
  it("should render the FixedAddButton component without crashing", () => {
    let wrapper = shallow(<FixedAddButton />)
    // expect(wrapper.find("FixedAddButton").text()).toEqual(FixedAddButtonText)
  })
})