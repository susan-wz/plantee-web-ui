import { Heading, Paragraph, Caption, Icon, Card } from "../elements"
import { Layout } from "../blocks"
// import { Container, Row, Col } from "react-bootstrap"

export default function Tasks() {
  return (
    <Layout>
      <Card border shadow background="primary">
        <Heading size="H1">Tasks</Heading>
        <Paragraph>test</Paragraph>
        <Caption>Caption test</Caption>
        <Icon symbol="logo" colour="white" />
      </Card>
    </Layout>
  );
}
