import { shallow } from "enzyme"
import ActionModal from "../index"

describe("ActionModal", () => {
  it("should render the ActionModal component without crashing", () => {
    let wrapper = shallow(<ActionModal />)
    // expect(wrapper.find("ActionModal").text()).toEqual(ActionModalText)
  })
})