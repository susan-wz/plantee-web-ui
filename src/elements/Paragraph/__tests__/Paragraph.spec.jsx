import { shallow, mount } from "enzyme";
import Paragraph from "../index";

const paragraphText = "Test paragraph";

describe("Paragraph", () => {
  it("should render the paragraph component with text", () => {
    let wrapper = shallow(<Paragraph>{paragraphText}</Paragraph>);
    expect(wrapper.find("Paragraph").text()).toEqual(paragraphText);
  });
  it("should be centre aligned if centre alignment is specified", () => {
    let wrapper = mount(<Paragraph align="center">{paragraphText}</Paragraph>);
    expect(wrapper).toHaveStyleRule("text-align", "center");
  });
  it("should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Paragraph align="right">{paragraphText}</Paragraph>);
    expect(wrapper).toHaveStyleRule("text-align", "right");
  });
  it("should be 20px if size large is specified", () => {
    let wrapper = mount(<Paragraph size="large">{paragraphText}</Paragraph>);
    expect(wrapper).toHaveStyleRule("font-size", "20px");
  })
  it("should be 12px if size small is specified", () => {
    let wrapper = mount(<Paragraph size="small">{paragraphText}</Paragraph>);
    expect(wrapper).toHaveStyleRule("font-size", "12px");
  })
});
