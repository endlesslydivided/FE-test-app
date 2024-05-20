import { Box, Group, Loader, Stack, Text } from '@mantine/core';

import MessageButtons from './MessageButtons';

interface IBotMessageProps {
  question: string,
  answer?: string,
  isLoading?: boolean,
}

const BotMessage = ({
  question,
  answer,
  isLoading = false,
}: IBotMessageProps) => {
  return (
    <Stack>
      <Box bg='#F9F5FD'>
        <Text ta='center' px='16px' py='8px' fw='bold'>
          {question}
        </Text>
      </Box>
      {isLoading && !answer ? (
        <Loader w='100%' color='grape' type='dots' />
      ) : (
        <>
          <Box>
            <Text fz='16px' ff='Roboto Condensed'>
              {answer}
            </Text>
          </Box>
          <Group w='35%' wrap='nowrap'>
            <MessageButtons />
          </Group>
        </>
      )}
    </Stack>
  );
};

export default BotMessage;
