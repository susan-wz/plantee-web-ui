import { shallow, mount } from "enzyme";
import Icon from "../index";
import {
  Leaf,
  Back,
  AddFilled,
  AddOutline,
  AddFromGallery,
  Calendar,
  Check,
  Close,
  Drop,
  Delay,
  Edit,
  Favourite,
  Sort,
  Delete,
  DownArrow,
  Fertilizer,
  Filter,
  Next,
  Previous,
  Repeat,
  Save,
  TakePhoto,
  UpArrow,
} from "../svgs";

describe("Icon", () => {
  it("should render the leaf symbol if no symbol is specified", () => {
    let wrapper = shallow(<Icon />);
    expect(wrapper.containsMatchingElement(<Leaf />)).toBeTruthy();
  });
  it("should render back symbol if the back symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="back" />);
    expect(wrapper.containsMatchingElement(<Back />)).toBeTruthy();
  });
  it("should render addFilled symbol if the addFilled symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addFilled" />);
    expect(wrapper.containsMatchingElement(<AddFilled />)).toBeTruthy();
  });
  it("should render addOutline symbol if the addOutline symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addOutline" />);
    expect(wrapper.containsMatchingElement(<AddOutline />)).toBeTruthy();
  });
  it("should render addFromGallery symbol if the addFromGallery symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="addFromGallery" />);
    expect(wrapper.containsMatchingElement(<AddFromGallery />)).toBeTruthy();
  });
  it("should render calendar symbol if the calendar symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="calendar" />);
    expect(wrapper.containsMatchingElement(<Calendar />)).toBeTruthy();
  });
  it("should render check symbol if the check symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="check" />);
    expect(wrapper.containsMatchingElement(<Check />)).toBeTruthy();
  });
  it("should render close symbol if the close symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="close" />);
    expect(wrapper.containsMatchingElement(<Close />)).toBeTruthy();
  });
  it("should render drop symbol if the drop symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="drop" />);
    expect(wrapper.containsMatchingElement(<Drop />)).toBeTruthy();
  });
  it("should render delay symbol if the delay symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="delay" />);
    expect(wrapper.containsMatchingElement(<Delay />)).toBeTruthy();
  });
  it("should render edit symbol if the edit symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="edit" />);
    expect(wrapper.containsMatchingElement(<Edit />)).toBeTruthy();
  });
  it("should render favourite symbol if the favourite symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="favourite" />);
    expect(wrapper.containsMatchingElement(<Favourite />)).toBeTruthy();
  });
  it("should render sort symbol if the sort symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="sort" />);
    expect(wrapper.containsMatchingElement(<Sort />)).toBeTruthy();
  });
  it("should render delete symbol if the delete symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="delete" />);
    expect(wrapper.containsMatchingElement(<Delete />)).toBeTruthy();
  });
  it("should render downArrow symbol if the downArrow symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="downArrow" />);
    expect(wrapper.containsMatchingElement(<DownArrow />)).toBeTruthy();
  });
  it("should render fertilizer symbol if the fertilizer symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="fertilizer" />);
    expect(wrapper.containsMatchingElement(<Fertilizer />)).toBeTruthy();
  });
  it("should render filter symbol if the filter symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="filter" />);
    expect(wrapper.containsMatchingElement(<Filter />)).toBeTruthy();
  });
  it("should render next symbol if the next symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="next" />);
    expect(wrapper.containsMatchingElement(<Next />)).toBeTruthy();
  });
  it("should render previous symbol if the previous symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="previous" />);
    expect(wrapper.containsMatchingElement(<Previous />)).toBeTruthy();
  });
  it("should render repeat symbol if the repeat symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="repeat" />);
    expect(wrapper.containsMatchingElement(<Repeat />)).toBeTruthy();
  });
  it("should render save symbol if the save symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="save" />);
    expect(wrapper.containsMatchingElement(<Save />)).toBeTruthy();
  });
  it("should render takePhoto symbol if the takePhoto symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="takePhoto" />);
    expect(wrapper.containsMatchingElement(<TakePhoto />)).toBeTruthy();
  });
  it("should render upArrow symbol if the upArrow symbol is specified", () => {
    let wrapper = shallow(<Icon symbol="upArrow" />);
    expect(wrapper.containsMatchingElement(<UpArrow />)).toBeTruthy();
  });
  it("should be 48px if 48px if specified", () => {
    let wrapper = shallow(<Icon symbol="lightbulb" size="48" />);
    expect(wrapper.find({ height: "48" })).toBeTruthy();
  });
  // it("should have 12px padding if there's a background and size is greater than 48px", () => {
  //   let wrapper = shallow(<Icon background size="48" />);
  //   expect(wrapper.find("svg")).toHaveStyleRule("padding", "12px", {
  //     modifier: "& > svg",
  //   });
  // });
  // it("should have a background colour if background is truthy", () => {
  //   let wrapper = mount(<Icon symbol="addFromGallery" background />);
  //   console.log((wrapper).debug());
  //   expect(wrapper.find('i')).toHaveStyleRule('background-color', '#008148', { modifier: '& > svg' })
  // });
});
