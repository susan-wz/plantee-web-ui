import { Heading } from "../elements"
import { Layout, TaskCard } from "../blocks"
import { Container, Row, Col } from "react-bootstrap"

export default function Tasks() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Heading size="H1">Tasks</Heading>
            <TaskCard type="water"/>
            <TaskCard type="water"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
