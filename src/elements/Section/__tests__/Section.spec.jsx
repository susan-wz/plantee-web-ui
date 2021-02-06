import { mount } from "enzyme"
import Section from "../index"
import 'jest-styled-components'

const children = <div />

it("Section should be left aligned if left alignment is specified", () => {
  let wrapper = mount(<Section align="left">{children}</Section>)
  expect(wrapper).toHaveStyleRule('justify-content', 'flex-start')
})
it("Section should be right aligned if right alignment is specified", () => {
  let wrapper = mount(<Section align="right">{children}</Section>)
  expect(wrapper).toHaveStyleRule('justify-content', 'flex-end')
})
it("Section should be center aligned if no alignment is specified", () => {
  let wrapper = mount(<Section>{children}</Section>)
  expect(wrapper).toHaveStyleRule('justify-content', 'center')
})