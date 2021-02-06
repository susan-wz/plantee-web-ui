import { shallow } from "enzyme";
import "jest-styled-components";
import Icon from "../index";
import { Leaf, Back, AddFilled, AddOutline, AddFromGallery, Calendar, Check, Close, Drop } from "../svgs"

describe("Icon", () => {
  it("should render the leaf symbol if no symbol is specified", () => {
    let wrapper = shallow(<Icon />);
    expect(wrapper.containsMatchingElement(<Leaf />)).toBeTruthy()
  });
  it("should render back symbol if the back symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="back" />);
    expect(wrapper.containsMatchingElement(<Back />)).toBeTruthy()
  });
  it("should render addFilled symbol if the addFilled symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addFilled" />);
    expect(wrapper.containsMatchingElement(<AddFilled />)).toBeTruthy()
  });
  it("should render addOutline symbol if the addOutline symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addOutline" />);
    expect(wrapper.containsMatchingElement(<AddOutline />)).toBeTruthy()
  });
  it("should render addFromGallery symbol if the addFromGallery symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addFromGallery" />);
    expect(wrapper.containsMatchingElement(<AddFromGallery />)).toBeTruthy()
  });
  it("should render calendar symbol if the calendar symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="calendar" />);
    expect(wrapper.containsMatchingElement(<Calendar />)).toBeTruthy()
  });
  it("should render check symbol if the check symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="check" />);
    expect(wrapper.containsMatchingElement(<Check />)).toBeTruthy()
  });
  it("should render close symbol if the close symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="close" />);
    expect(wrapper.containsMatchingElement(<Close />)).toBeTruthy()
  });
  it("should render drop symbol if the drop symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="drop" />);
    expect(wrapper.containsMatchingElement(<Drop />)).toBeTruthy()
  });
  it("should be 48px if 48px if specified", () => {
    let wrapper = shallow(<Icon symbol="lightbulb" size="48" />);
    expect(wrapper.find({ height: '48'})).toBeTruthy()
  });
  // it("should have a background colour if background is truthy", () => {
  //   let wrapper = mount(<Icon symbol="addFromGallery" background />);
  //   console.log((wrapper.find('svg')).debug());
  //   expect(wrapper.find('svg')).toHaveStyleRule('background-color', '#008148')
  // });
});
