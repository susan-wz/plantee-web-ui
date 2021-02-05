import { shallow } from "enzyme"
import Heading from "../index"

const headingText = "Test Heading"

describe("Heading", () => {
  it("should render the heading with text", () => {
    let wrapper = shallow(<Heading>{headingText}</Heading>)
    expect(wrapper.find("H1").text()).toEqual(headingText)
  })
  it("should render h2 when size=H2 is specified", () => {
    let wrapper = shallow(<Heading size="H2">{headingText}</Heading>)
    expect(wrapper.find("H2")).toBeTruthy()
  })
  it("should be center aligned if no alignment is specified", () => {
  })
  it("should be should be dark-neutral if no colour is specified", () => {
  })
})