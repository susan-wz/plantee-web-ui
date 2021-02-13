import { Layout, PlantTitleCard, TextWithBackground } from "../blocks";
import { Heading, Paragraph, Icon } from "../elements";
import { useParams } from "react-router-dom";
import { HeaderPhoto, MobileLayout, DesktopLayout, LeftCol, RightCol } from "./styles";

export default function ExplorePlantDetail() {
  let { name } = useParams();

  return (
    <Layout back iconBackgrounds>
      <MobileLayout>
        <HeaderPhoto>
          <img
            src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
            alt="test"
          />
        </HeaderPhoto>
        <PlantTitleCard title={name} />
        <TextWithBackground text="Let dry before watering." />
        <Heading align="left" size="H3">
          Description
        </Heading>
        <Paragraph>
          Description items about this plant. How it looks, where it's from.
          Nice stuff like that. Maybe even some fun facts.
        </Paragraph>
        <Icon symbol="addOutline" background colour="white" />
        <Icon symbol="favourite" background colour="white" />
      </MobileLayout>
      <DesktopLayout>
        <LeftCol>
          <HeaderPhoto>
            <img
              src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
              alt="test"
            />
          </HeaderPhoto>
          <PlantTitleCard title={name} />
          <Icon symbol="addOutline" background colour="white" />
          <Icon symbol="favourite" background colour="white" />
        </LeftCol>
        <RightCol>
          <Heading align="left" size="H3">
            Description
          </Heading>
          <Paragraph>
            Description items about this plant. How it looks, where it's from.
            Nice stuff like that. Maybe even some fun facts.
          </Paragraph>
          <TextWithBackground text="Let dry before watering." />
        </RightCol>
      </DesktopLayout>
    </Layout>
  );
}
