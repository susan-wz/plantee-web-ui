import { Layout, PlantCard } from "../blocks"
import { Icon, CardGrid, Section, FixedAddButton } from "../elements"
import { MyPlantDetail } from "./index"
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import plantData from "./tempPlantData"

export default function MyPlants() {
  let { url, path } = useRouteMatch();
  const cards = plantData.map((plant) => {
    return <Link to={`${url}/${plant.id}`} key={plant.id}>
      <PlantCard plantName={plant.name} plantCategory={plant.category} photoUrl={plant.photo} />
    </Link>
  })

  return (
    <Switch>
      <Route exact path={path}>
        <Layout settings title="My Plants">
          <Section align="left">
            <Icon symbol="filter" size={28} />
            <Icon symbol="sort" size={28} />
          </Section>
          <Section>
            <CardGrid>
              {cards}
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