import { shallow } from "enzyme"
import Modal from "../index"

describe("Modal", () => {
  it("should render the Modal component without crashing", () => {
    let wrapper = shallow(<Modal />)
    // expect(wrapper.find("Modal").text()).toEqual(ModalText)
  })
})