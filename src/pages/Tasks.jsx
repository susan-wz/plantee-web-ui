import { Heading, Paragraph, Caption, Icon, Card } from "../elements"

export default function Tasks() {
  return (
    <div>
      <Card border shadow background="primary">
        <Heading size="H1">Tasks</Heading>
        <Paragraph>test</Paragraph>
        <Caption>Caption test</Caption>
        <Icon symbol="upArrow" colour="primary" />
      </Card>
    </div>
  );
}
