import { AppShell, Box, Flex } from '@mantine/core';
import type { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.css';
import Navbar from './Navbar';
import { TopSection } from './TopSection';

const Layout: FC<PropsWithChildren> = () => {
  return (<AppShell navbar={{ width: 125, breakpoint: 'sm' }}>

    <AppShell.Navbar classNames={{ navbar: classes.rootNavbar }}>
      <Navbar />
    </AppShell.Navbar>

    <AppShell.Main classNames={{ main: classes.rootMain }}>
      <Flex h='100dvh' direction='column'>
        <TopSection/>
        <Box flex={1} className={classes.rootBottomSectionBox}>
          <Outlet/>
        </Box>
      </Flex>
    </AppShell.Main>
  </AppShell >);
};

export default Layout;
