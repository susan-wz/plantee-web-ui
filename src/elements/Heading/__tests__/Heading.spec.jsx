import { shallow, mount } from "enzyme"
import Heading from "../index"
import 'jest-styled-components'

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
  it("should render h3 when size=H3 is specified", () => {
    let wrapper = shallow(<Heading size="H3">{headingText}</Heading>)
    expect(wrapper.find("H3")).toBeTruthy()
  })
  it("should render h4 when size=H4 is specified", () => {
    let wrapper = shallow(<Heading size="H4">{headingText}</Heading>)
    expect(wrapper.find("H4")).toBeTruthy()
  })
  it("H1 should be left aligned if left alignment is specified", () => {
    let wrapper = mount(<Heading align="left">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'left')
  })
  it("H1 should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Heading align="right">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'right')
  })
  it("H1 should be center aligned if no alignment is specified", () => {
    let wrapper = mount(<Heading>{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
  it("H2 should be left aligned if left alignment is specified", () => {
    let wrapper = mount(<Heading size="H2" align="left">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'left')
  })
  it("H2 should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Heading size="H2" align="right">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'right')
  })
  it("H2 should be center aligned if no alignment is specified", () => {
    let wrapper = mount(<Heading size="H2">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
  it("H3 should be left aligned if left alignment is specified", () => {
    let wrapper = mount(<Heading size="H3" align="left">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'left')
  })
  it("H3 should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Heading size="H3" align="right">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'right')
  })
  it("H3 should be center aligned if no alignment is specified", () => {
    let wrapper = mount(<Heading size="H3">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
  it("H4 should be left aligned if left alignment is specified", () => {
    let wrapper = mount(<Heading size="H4" align="left">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'left')
  })
  it("H4 should be right aligned if right alignment is specified", () => {
    let wrapper = mount(<Heading size="H4" align="right">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'right')
  })
  it("H4 should be center aligned if no alignment is specified", () => {
    let wrapper = mount(<Heading size="H4">{headingText}</Heading>)
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
  // it("should be primary colour if primary colour is specified", () => {
  //   let wrapper = mount(<Heading colour="primary">{headingText}</Heading>)
  //   expect(wrapper.find("H1")).toHaveStyleRule('color', '#008148')
  // })
})