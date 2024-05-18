import { Flex, Box } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

interface IProps {
  leftSection: ReactNode,
  rightSection: ReactNode,
}

/**
* @author
* @function @PageLayout
**/

export const PageLayout: FC<IProps> = ({ leftSection, rightSection }) => {
  return (
    <Flex py='98px' px='234px' gap='32px' justify='center'>

      <Box flex='3'>
        {leftSection}
      </Box>

      <Box flex='2.5'>
        {rightSection}
      </Box>
      
    </Flex>
  );
};
