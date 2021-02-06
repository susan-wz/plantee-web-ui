import { shallow, mount } from "enzyme"
import Caption from "../index"
import "jest-styled-components";

const captionText = "Test caption"

describe("Caption", () => {
  it("should render the Caption component with text", () => {
    let wrapper = shallow(<Caption>{captionText}</Caption>)
    expect(wrapper.find("Caption").text()).toEqual(captionText)
  })
  it("should be centre aligned if centre alignment is specified", () => {
    let wrapper = mount(<Caption align="center">{captionText}</Caption>);
    expect(wrapper).toHaveStyleRule("text-align", "center");
  });
  it("should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Caption align="right">{captionText}</Caption>);
    expect(wrapper).toHaveStyleRule("text-align", "right");
  });
  it("should be left aligned if no alignment is specified", () => {
    let wrapper = mount(<Caption>{captionText}</Caption>);
    expect(wrapper).toHaveStyleRule("text-align", "left");
  });
})