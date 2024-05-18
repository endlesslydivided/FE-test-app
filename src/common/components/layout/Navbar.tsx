import { Flex, Button, Image, Box } from '@mantine/core';
import { IconSearch, IconChevronRight, IconForms, IconRobot } from '@tabler/icons-react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';

const Navbar: FC = () => {
  return (
    <Box >
      <Image p='sm' src={logo} w='100px' />
      <Flex direction='column' h='100%'>
        <Button
          component={NavLink}
          to='/search'
          fw='bold'
          flex='1'
          variant='transparent'
          c='white'
          leftSection={<IconSearch />}
          rightSection={<IconChevronRight />}>
          Search
        </Button>
        <Button
          component={NavLink}
          to='/form'
          fw='bold'
          flex='1'
          variant='transparent'
          c='white'
          leftSection={<IconForms />}
          rightSection={<IconChevronRight />}>
          Form
        </Button>
        <Button
          component={NavLink}
          to='/bot'
          fw='bold'
          flex='1'
          variant='transparent'
          c='white'
          leftSection={<IconRobot />}
          rightSection={<IconChevronRight />}>
          AI Bot
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
