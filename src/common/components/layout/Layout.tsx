import { AppShell, Box, Button, Flex, Group, Image, Stack, Text } from '@mantine/core';
import type { FC, PropsWithChildren } from 'react';

import classes from './Layout.module.css';
import Navbar from './Navbar';
import documentsImage from '../../../assets/images/documents.svg';
import documentHumanImage from '../../../assets/images/filesBundle.svg';
import robotImage from '../../../assets/images/robot.svg';

const HeaderButton: FC<PropsWithChildren> = ({ children }) => {

  return (<Button variant='default' classNames={{
    root: classes.rootButton,
    inner: classes.innerButton,
    label: classes.labelButton,
  }}>
    {children}
  </Button>);

};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (<AppShell navbar={{ width: 125, breakpoint: 'sm' }}>

    <AppShell.Navbar classNames={{ navbar: classes.rootNavbar }}>
      <Navbar />
    </AppShell.Navbar>

    <AppShell.Main classNames={{ main: classes.rootMain }}>
      <Flex h='100dvh' direction='column'>
        <Flex p='lg' gap='35px' direction='column' align='center' className={classes.rootTopSectionBox}>
          <Stack gap='0px' align='center'>
            <Text c='white' fw='bold' fz='32px'>AURA</Text>
            <Stack gap='0px'>
              <Text c='white' fw='bold' fz='24px'>Augmented Universal Research Assistant</Text>
              <Text c='white'
                fw='normal' fz='16px'>Your in one single intuitive platform along side with your team.</Text>
            </Stack>
          </Stack>
          <Group gap='20px'>
            <HeaderButton>
              <Image mah='100%' w='125px' maw='100%' src={documentsImage} />
              Search Data
            </HeaderButton>
            <HeaderButton>
              <Image
                mah='100%' w='125px' maw='100%'
                src={documentHumanImage} />
              Upload your Data
            </HeaderButton>
            <HeaderButton>
              <Image mah='100%' w='125px' maw='100%' src={robotImage} style={{ width: 'none' }} />
              Try our AI Tool
            </HeaderButton>
          </Group>
        </Flex>
        <Box flex={1} className={classes.rootBottomSectionBox}>
          {children}
        </Box>
      </Flex>
    </AppShell.Main>
  </AppShell >);
};

export default Layout;
