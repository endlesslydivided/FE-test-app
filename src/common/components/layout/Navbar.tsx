import { Box, Button, Flex, Image, Stack } from '@mantine/core';
import { IconForms, IconRobot, IconSearch } from '@tabler/icons-react';
import type { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/logoFull.svg';

interface INavbarButtonProps extends PropsWithChildren {
  href: string,
}

const NavbarButton: FC<INavbarButtonProps> = ({ href, children }) => {
  return (<Button
    component={NavLink}
    to={href}
    fw='bold'
    flex='1'
    w='100%'
    variant='transparent'
    c='white'>
    {children}
  </Button>);
};

const Navbar: FC = () => {
  return (
    <Flex direction='column' align='center' h='100%' w='100%'>
      <Image p='sm' src={logo} w='100px' />
      <Flex direction='column' h='100%' justify='space-between' my='50px'>
        <Stack flex='1' gap='32px'>
          <NavbarButton href='/search'> <IconSearch/></NavbarButton>
          <NavbarButton href='/form'><IconForms/></NavbarButton>
          <NavbarButton href='/bot'><IconRobot/></NavbarButton>
        </Stack>
        <Box flex='2'/>
        <Stack flex='1' gap='32px'>
          <NavbarButton href='/search'> <IconSearch/></NavbarButton>
          <NavbarButton href='/form'><IconForms/></NavbarButton>
          <NavbarButton href='/bot'><IconRobot/></NavbarButton>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
