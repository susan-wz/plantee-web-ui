import { Layout, PlantCard } from "../blocks"
import { Icon, CardGrid, Section } from "../elements"
import styled from 'styled-components'
import breakpoint from "../styles/breakpoints"
import { Link } from "react-router-dom";

const FixedButton = styled.div`
  position: fixed;
  bottom: 104px;
  right: 24px;
  z-index: 3;
  @media ${breakpoint.lg} {
    bottom: 36px;
    right: 36px;
  }
`;


export default function MyPlants() {
  return (
    <Layout settings title="My Plants">
      <Section align="left">
        <Icon symbol="filter" size={28} />
        <Icon symbol="sort" size={28} />
      </Section>
      <Section>
        <CardGrid>
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_33_zxzucj.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_31_iwm6da.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_31_iwm6da.jpg"} />
        </CardGrid>
      </Section>
      <FixedButton>
      <Link to="/add_plants">
        <Icon symbol="addFilled" size={48} colour="primary" />
        </Link>
      </FixedButton>
    </Layout>
  );
}