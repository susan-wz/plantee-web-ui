import { Layout, PlantTitleCard, TextWithBackground } from "../blocks";
import { Heading, Paragraph, Icon } from "../elements";
import { useParams } from "react-router-dom";
import {
  FixedHeaderPhoto,
  MobileLayout,
  DesktopLayout,
  LeftCol,
  RightCol,
  DesktopImagePhoto,
  ButtonDiv
} from "./styles";

export default function ExplorePlantDetail() {
  let { name } = useParams();

  return (
    <Layout back iconBackgrounds>
      <MobileLayout>
        <FixedHeaderPhoto>
          <img
            src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
            alt="test"
          />
        </FixedHeaderPhoto>
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
          <DesktopImagePhoto>
            <img
              src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
              alt="test"
            />
          </DesktopImagePhoto>
          <PlantTitleCard title={name} />
          <ButtonDiv>
            <Icon symbol="addOutline" background colour="white" size={48} />
            <Icon symbol="favourite" background colour="white" size={48} />
          </ButtonDiv>
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
