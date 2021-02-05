import { shallow } from "enzyme"
import TaskDayHeading from "../index"

describe("TaskDayHeading", () => {
  it("should render the TaskDayHeading component without crashing", () => {
    let wrapper = shallow(<TaskDayHeading />)
    // expect(wrapper.find("TaskDayHeading").text()).toEqual(TaskDayHeadingText)
  })
})