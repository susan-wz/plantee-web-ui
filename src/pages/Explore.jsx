import { Layout, Searchbar, PlantCard } from "../blocks"
import { Icon, CardGrid, Section } from "../elements"

export default function Explore() {
  return (
    <Layout settings title="Explore">
      <Section>
        <Searchbar />
      </Section>
      <Section align="left">
        <Icon symbol="filter" size={28} />
        <Icon symbol="sort" size={28} />
      </Section>
      <Section>
        <CardGrid>
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" showCategory photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_33_zxzucj.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" showCategory photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" showCategory photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_31_iwm6da.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" showCategory photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"} />
          <PlantCard plantName="Hanky Dwarf Aloe" plantCategory="Succulent" showCategory photoUrl={"https://res.cloudinary.com/susanwz/image/upload/v1611083727/Plantee/image_31_iwm6da.jpg"} />
        </CardGrid>
      </Section>
    </Layout>
  );
}

