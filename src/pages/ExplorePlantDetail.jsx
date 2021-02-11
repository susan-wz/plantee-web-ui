import { Layout, PlantTitleCard } from "../blocks";
import { Heading, Paragraph, Icon } from "../elements"
import { useParams } from "react-router-dom";
import { HeaderPhoto } from "./styles";

export default function ExplorePlantDetail() {
  let { name } = useParams();

  return (
    <Layout back iconBackgrounds>
      <HeaderPhoto>
        <img
          src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
          alt="test"
        />
      </HeaderPhoto>
      <PlantTitleCard title={name} />
      <Heading align="left" size="H3">Description</Heading>
      <Paragraph>Description items about this plant. How it looks, where it's from. Nice stuff like that. Maybe even some fun facts.</Paragraph>
      <Icon symbol="addOutline" background colour="white" /><Icon symbol="favourite" background colour="white" />
    </Layout>
  );
}
