import { shallow } from "enzyme"
import CardGrid from "../index"

describe("CardGrid", () => {
  it("should render the CardGrid component without crashing", () => {
    let wrapper = shallow(<CardGrid />)
    // expect(wrapper.find("CardGrid").text()).toEqual(CardGridText)
  })
})