import { shallow, mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme"

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const mountWithTheme = (tree) =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

const shallowWithTheme = (tree) =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

export { mountWithTheme, shallowWithTheme };
