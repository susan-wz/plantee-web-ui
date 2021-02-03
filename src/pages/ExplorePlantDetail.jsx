import { Layout, PlantTitleCard } from "../blocks";
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
    </Layout>
  );
}
