import {
  Box,
  ButtonLink,
  Card,
  ExpandIcon,
  Heading,
  ListViewIcon,
  OpenExternalLinkIcon,
  PageHead,
  TextLink,
} from "@myob/myob-widgets";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();

  const callToAction = [
    <ButtonLink icon={<ListViewIcon />} onClick={() => navigateTo("/list")}>
      List View
    </ButtonLink>,
    <ButtonLink icon={<ExpandIcon />} onClick={() => navigateTo("/detail")}>
      Detail View
    </ButtonLink>,
  ];

  const CardHeader = () => (
    <PageHead title="Suyash's Orientation Exercise">
      Find detailed feedback in
      <TextLink
        target="self"
        href="https://myobconfluence.atlassian.net/wiki/spaces/DesignSystem/pages/9156463985/Suyash+Kahthuria"
        icon={<OpenExternalLinkIcon />}
      >
        Confluence
      </TextLink>
    </PageHead>
  );

  const CardBody = () => (
    <Box>
      <Box display="flex" flexDirection="column">
        <Heading>Pages</Heading>
        {callToAction}
      </Box>
      <Box as="p" style={{ marginTop: "2rem" }}>
        <Heading>Main Pointers</Heading>
        <ul>
          <li>Box Props</li>
          <li>Resize Observer</li>
          <li>The term Fluid</li>
          <li>Don’t need the div wrappers in some components! </li>
          <li>Straightforward/Simple - ToGo Example</li>
          <li>Table Item</li>
          <li>Table - Child implementation [more options] </li>
        </ul>
      </Box>
    </Box>
  );

  return (
    <div
      style={{
        background: "#ebeef1",
        padding: "2.4rem",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
        <Heading>
            Welcome!
        </Heading>
      <Card
        width="700px"
        header={<Card.Header child={<CardHeader />} />}
        body={<Card.Body child={<CardBody />} />}
      />
    </div>
  );
}
