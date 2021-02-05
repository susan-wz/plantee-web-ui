import { shallow } from "enzyme"
import PlantTitleCard from "../index"

describe("PlantTitleCard", () => {
  it("should render the PlantTitleCard component without crashing", () => {
    let wrapper = shallow(<PlantTitleCard />)
    // expect(wrapper.find("PlantTitleCard").text()).toEqual(PlantTitleCardText)
  })
})