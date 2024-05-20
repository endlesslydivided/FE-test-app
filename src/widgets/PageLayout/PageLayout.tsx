import { Box, Flex } from '@mantine/core';
import { ReactNode } from 'react';

interface IPageLayoutProps {
  leftSection: ReactNode,
  rightSection: ReactNode,
}

export const PageLayout = ({ leftSection, rightSection }: IPageLayoutProps) => {
  return (
    <Flex py='98px' px='234px' gap='32px' justify='center' align='center'>

      <Box flex='3'>
        {leftSection}
      </Box>

      <Box flex='2.5'>
        {rightSection}
      </Box>

    </Flex>
  );
};
