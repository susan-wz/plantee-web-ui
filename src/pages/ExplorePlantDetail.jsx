import { Layout } from "../blocks"
import { useParams } from "react-router-dom";


export default function ExplorePlantDetail() {
  let { name } = useParams();
  
  return (
    <Layout back iconBackgrounds title="Explore Plant Detail">
      <p>test: {name}</p>
    </Layout>
  );
}