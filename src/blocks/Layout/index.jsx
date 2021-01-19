import { Nav } from "../index"
import StyledLayout from "./styles"

export default function Layout({ children }) {

  return (
    <>
      <Nav />
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  );
}