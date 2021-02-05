import { shallow } from "enzyme"
import PlantCard from "../index"

describe("PlantCard", () => {
  it("should render the PlantCard component without crashing", () => {
    let wrapper = shallow(<PlantCard />)
    // expect(wrapper.find("PlantCard").text()).toEqual(PlantCardText)
  })
})