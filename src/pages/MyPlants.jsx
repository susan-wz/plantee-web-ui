import { Layout, PlantCard } from "../blocks"
import { Icon, CardGrid, Section, FixedAddButton } from "../elements"
import { MyPlantDetail } from "./index"
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function MyPlants() {
  let { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Layout settings title="My Plants">
          <Section align="left">
            <Icon symbol="filter" size={28} />
            <Icon symbol="sort" size={28} />
            <Link to={`${url}/test`}><p>test</p></Link>
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
          <FixedAddButton />
        </Layout>
      </Route>
      <Route path={`${path}/:name`}>
        <MyPlantDetail />
      </Route>
    </Switch>
  );
}