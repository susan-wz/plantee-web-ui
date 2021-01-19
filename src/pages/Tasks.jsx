import { Layout, TaskCard, TaskDayHeading } from "../blocks"
import { Icon, Section } from "../elements"

export default function Tasks() {
  return (
    <Layout settings title="Tasks">
      <Section align="left">
        <Icon symbol="filter" size={28} />
      </Section>
        <TaskDayHeading date={"15 Dec 2020"} />
        <TaskCard type="water" plantName={"Snake Plant"} lastEvent={"4 Dec 2020"} frequency={6} />
        <TaskCard type="fertilize" plantName={"Pilea"} lastEvent={"4 Dec 2020"} frequency={8} />
        <TaskDayHeading date={"17 Dec 2020"} />
        <TaskCard type="water" plantName={"Cheese Plant"} lastEvent={"4 Dec 2020"} frequency={8} />
        <TaskCard type="fertilize" plantName={"Pilea"} lastEvent={"4 Dec 2020"} frequency={8} />
    </Layout>
  );
}
