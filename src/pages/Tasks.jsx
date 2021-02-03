import { useState } from "react";
import { Layout, TaskCard, TaskDayHeading, ConfirmationModal } from "../blocks";
import { Icon, Section } from "../elements";

export default function Tasks() {
  const [modalIsOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout settings title="Tasks">
      <Section align="left">
        <Icon symbol="filter" size={28} onClick={openModal} />
      </Section>
      <TaskDayHeading date={"15 Dec 2020"} />
      <TaskCard
        type="water"
        plantName={"Snake Plant"}
        lastEvent={"4 Dec 2020"}
        frequency={6}
      />
      <TaskCard
        type="fertilize"
        plantName={"Pilea"}
        lastEvent={"4 Dec 2020"}
        frequency={8}
      />
      <TaskDayHeading date={"17 Dec 2020"} />
      <TaskCard
        type="water"
        plantName={"Cheese Plant"}
        lastEvent={"4 Dec 2020"}
        frequency={8}
      />
      <TaskCard
        type="fertilize"
        plantName={"Pilea"}
        lastEvent={"4 Dec 2020"}
        frequency={8}
      />
      <ConfirmationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        title="hey task modal"
        type="delete"
      />
    </Layout>
  );
}
