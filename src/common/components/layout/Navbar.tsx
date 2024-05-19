import { Box, Button, Flex, Image, Stack } from '@mantine/core';
import { IconDoorExit, IconRobot, IconSearch } from '@tabler/icons-react';
import type { FC, PropsWithChildren } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { BOT_PATH, MAIN_PATH, SEARCH_PATH, SIGNIN_PATH } from '../../../app/Router';
import logo from '../../../assets/images/logoFull.svg';
import { useAuth } from '../../context/UserContext/UserProvider';

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

  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex direction='column' align='center' h='100%' w='100%'>
      <Image p='sm' src={logo} w='100px' />
      <Flex direction='column' h='100%' justify='space-between' my='50px'>
        <Stack flex='1' gap='32px'>
          <NavbarButton href={MAIN_PATH + SEARCH_PATH}> <IconSearch/></NavbarButton>
          <NavbarButton href={MAIN_PATH + BOT_PATH}><IconRobot/></NavbarButton>
        </Stack>
        <Box flex='2'/>
        <Stack flex='1' gap='32px'>
          <Button 
            onClick={() => {signOut(); navigate(SIGNIN_PATH)}}
            fw='bold'
            flex='1'
            w='100%'
            variant='transparent'
            c='white'> 
            <IconDoorExit/>
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
