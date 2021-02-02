import { Layout } from "../blocks";
import { useParams } from "react-router-dom";

export default function ExplorePlantDetail() {
  let { name } = useParams();

  return (
    <Layout back iconBackgrounds title="Explore Plant Detail">
      <p>test: {name}</p>
      <img
        src="https://res.cloudinary.com/susanwz/image/upload/v1611083728/Plantee/image_29_ljb62c.jpg"
        alt="test"
      />
    </Layout>
  );
}
