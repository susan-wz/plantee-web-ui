import { Layout, TaskCard, TaskDayHeading } from "../blocks"
import { Container, Row, Col } from "react-bootstrap"

export default function Tasks() {
  return (
    <Layout settings back title="Tasks">
      <Container>
        <Row>
          <Col>
            <TaskDayHeading />
            <TaskCard type="water" plantName={"Snake Plant"} lastEvent={"4 Dec 2020"} frequency={6}/>
            <TaskCard type="fertilize" plantName={"Pilea"} lastEvent={"4 Dec 2020"} frequency={8}/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
