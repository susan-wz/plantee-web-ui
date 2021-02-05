import { shallow } from "enzyme"
import Card from "../index"

describe("Card", () => {
  it("should render the Card component without crashing", () => {
    let wrapper = shallow(<Card />)
    // expect(wrapper.find("Card").text()).toEqual(CardText)
  })
})