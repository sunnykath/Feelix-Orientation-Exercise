import React from 'react';
import { Alert, Box, BaseTemplate, Button, PageHead, ThemeProvider, Text } from '@myob/myob-widgets';

const WelcomeMessage = () => {
  const helpOnClick = () => {
    window.open("https://myob.slack.com/archives/C0521TK7H",'_blank');
  }

  const secondaryMessage = (
    <Box display="flex" alignItems="center">
      <Text marginBottom="clear" marginRight="md">
        Remember, if you ever need a hand, help is just a click away!
      </Text>
      <Button onClick={helpOnClick} tone="brand">I need help! 🙋</Button>
    </Box>
  )

  return (
    <ThemeProvider theme="modern">
      <BaseTemplate>
        <PageHead title="Welcome to your Feelix template repo! 👋" />
        <Alert tone="info" secondaryMessage={secondaryMessage} secondaryMessageVisible>
          We can't wait for you to get started. <a href="https://feelix.myob.com/" target="_blank" rel="noreferrer">Here's a handy link</a> to our docs.
        </Alert>
        <Alert tone="info">
          Oh, and if you're wondering... This template app was made using Create-react-app (CRA5) and CRACO.
        </Alert>
      </BaseTemplate>
    </ThemeProvider>
  );
};

export default WelcomeMessage;
