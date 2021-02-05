import { shallow } from "enzyme"
import Searchbar from "../index"

describe("Searchbar", () => {
  it("should render the Searchbar component without crashing", () => {
    let wrapper = shallow(<Searchbar />)
    // expect(wrapper.find("Searchbar").text()).toEqual(SearchbarText)
  })
})