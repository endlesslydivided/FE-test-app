import { Box, Button, Flex, Image, Stack } from '@mantine/core';
import { IconDoorExit, IconRobot, IconSearch } from '@tabler/icons-react';
import type { PropsWithChildren } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { BOT_PATH, MAIN_PATH, SEARCH_PATH, SIGNIN_PATH } from '../../app/Router';
import { useAuth } from '../../app/context/UserContext';
import logo from '../../assets/images/logoFull.svg';

interface INavbarButtonProps extends PropsWithChildren {
  href: string,
}

const NavbarButton = ({ href, children }: INavbarButtonProps) => {
  return (<Button
    component={NavLink}
    to={href}
    fw='bold'
    flex='1'
    radius='0'
    w='100%'
    variant='subtle'
    c='white'>
    {children}
  </Button>);
};

const Navbar = () => {

  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex direction='column' align='center' h='100%' w='100%'>
      <Image p='sm' src={logo} w='100px' />
      <Flex direction='column' h='100%' justify='space-between' w='100%'>
        <Stack flex='1' mt='25px'>
          <NavbarButton href={MAIN_PATH + SEARCH_PATH}> <IconSearch /></NavbarButton>
          <NavbarButton href={MAIN_PATH + BOT_PATH}><IconRobot /></NavbarButton>
        </Stack>
        <Box flex='4' />
        <Stack flex='1'>
          <Button
            onClick={() => { signOut(); navigate(SIGNIN_PATH) }}
            fw='bold'
            flex='1'
            radius='0'
            w='100%'
            variant='subtle'
            c='white'>
            <IconDoorExit />
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
