import { AppShell, Box, Button, Group, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { MAIN_PATH } from '../../app/Router';
import Navbar from '../layout/Navbar';
import classes from './BotLayout.module.css';

export const BotLayout: FC = () => {

  const navigate = useNavigate();

  return (<AppShell
    header={{ height: 0 }}
    navbar={{
      width: 125,
      breakpoint: 'sm',
    }}
    padding='md'>

    <AppShell.Navbar classNames={{ navbar: classes.rootNavbar }}>
      <Navbar />
    </AppShell.Navbar>

    <AppShell.Header withBorder={false} classNames={{ header: classes.rootHeader }}>
      <Group h='100%'>
        <Button
          onClick={() => navigate(MAIN_PATH)}
          p={0}
          flex={0.7}
          fz='16px'
          variant='transparent'
          color='#101723' leftSection={<IconChevronLeft size='32px' color='#787C84' strokeWidth='3px' />}>
          Return
        </Button>
        <Box flex={2.5} />
        <Text flex={1} fz='24px' c='#101723' fw='bold'>Aura Ai</Text>
        <Box flex={3} />

      </Group>
    </AppShell.Header>

    <AppShell.Main classNames={{ main: classes.rootMain }}>
      <Box flex={1} className={classes.rootBottomSectionBox}>
        <Outlet />
      </Box>
    </AppShell.Main>
  </AppShell >);
};
