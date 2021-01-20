import { Layout } from "../blocks"
import { Heading, Paragraph } from "../elements"

export default function Settings() {
  return (
    <Layout back title="Settings">
      <Heading size="H3" align="left">Display</Heading>
      <br />
      <Paragraph>Date Format</Paragraph>
      <Paragraph size="small">Jan 1, 2001</Paragraph>
      <br />
      <Paragraph>Temperature</Paragraph>
      <Paragraph size="small">Celsius</Paragraph>
      <br />
      <Paragraph>Time</Paragraph>
      <Paragraph size="small">12hr</Paragraph>
      <hr />
      <Heading size="H3" align="left">Notifications</Heading>
      <br />
      <Paragraph>All notifications</Paragraph>
      <Paragraph size="small">On</Paragraph>
      <br />
      <Paragraph>Day to send notifications</Paragraph>
      <Paragraph size="small">The day a task needs to be done</Paragraph>
      <br />
      <Paragraph>Time to send notifications</Paragraph>
      <Paragraph size="small">9:00am</Paragraph>
    </Layout>
  );
}