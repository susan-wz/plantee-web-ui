import { useState } from "react";
import { Layout, Searchbar, PlantCard, ActionModal } from "../blocks";
import {
  Icon,
  CardGrid,
  Section,
  FixedAddButton,
  GenericModal,
} from "../elements";
import { ExplorePlantDetail } from "./index";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import plantData from "./tempPlantData";

export default function Explore() {
  let { url, path } = useRouteMatch();

  const [modalIsOpen, setModalOpen] = useState(false);

  const cards = plantData.map((plant) => {
    return (
      <Link to={`${url}/${plant.id}`} key={plant.id}>
        <PlantCard
          plantName={plant.name}
          plantCategory={plant.category}
          showCategory
          photoUrl={plant.photo}
        />
      </Link>
    );
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Switch>
      <Route exact path={path}>
        <Layout settings title="Explore">
          <Section>
            <Searchbar />
          </Section>
          <Section align="left">
            <Icon symbol="filter" size={28} onClick={openModal} />
            <Icon symbol="sort" size={28} onClick={openModal} />
          </Section>
          <Section>
            <CardGrid>{cards}</CardGrid>
          </Section>
          <FixedAddButton />
          <ActionModal modalIsOpen={modalIsOpen} closeModal={closeModal} title="hey modal" />
        </Layout>
      </Route>
      <Route path={`${path}/:name`}>
        <ExplorePlantDetail />
      </Route>
    </Switch>
  );
}
