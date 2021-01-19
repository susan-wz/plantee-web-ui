import { Layout, TaskCard, TaskDayHeading } from "../blocks"
import { Icon } from "../elements"
import { Container, Row, Col } from "react-bootstrap"

export default function Tasks() {
  return (
    <Layout settings back title="Tasks">
      <Container>
        <Row>
          <Col>
            <Icon symbol="filter" size={28}/>
            <TaskDayHeading date={"15 Dec 2020"} />
            <TaskCard type="water" plantName={"Snake Plant"} lastEvent={"4 Dec 2020"} frequency={6}/>
            <TaskCard type="fertilize" plantName={"Pilea"} lastEvent={"4 Dec 2020"} frequency={8}/>
            <TaskDayHeading date={"17 Dec 2020"} />
            <TaskCard type="water" plantName={"Cheese Plant"} lastEvent={"4 Dec 2020"} frequency={8}/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
