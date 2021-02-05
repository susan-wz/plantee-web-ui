import { shallow } from "enzyme"
import ConfirmationModal from "../index"

describe("ConfirmationModal", () => {
  it("should render the ConfirmationModal component without crashing", () => {
    let wrapper = shallow(<ConfirmationModal />)
    // expect(wrapper.find("ConfirmationModal").text()).toEqual(ConfirmationModalText)
  })
})