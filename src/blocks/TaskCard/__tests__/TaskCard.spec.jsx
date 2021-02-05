import { shallow } from "enzyme"
import TaskCard from "../index"

describe("TaskCard", () => {
  it("should render the TaskCard component without crashing", () => {
    let wrapper = shallow(<TaskCard />)
    // expect(wrapper.find("TaskCard").text()).toEqual(TaskCardText)
  })
})