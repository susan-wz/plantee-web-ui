import { Heading } from "../elements"
import { Layout, TaskCard } from "../blocks"
import { Container, Row, Col } from "react-bootstrap"

export default function Tasks() {
  return (
    <Layout settings back title="Tasks">
      <Container>
        <Row>
          <Col>
            <TaskCard type="water"/>
            <TaskCard type="fertilize"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
