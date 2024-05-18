import { Button, Flex, Group, Image, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import documentsImage from '../../../assets/images/documents.svg';
import documentHumanImage from '../../../assets/images/filesBundle.svg';
import robotImage from '../../../assets/images/robot.svg';
import classes from './Layout.module.css';

const HeaderButton: FC<PropsWithChildren & {onClick?: MouseEventHandler<HTMLButtonElement>}> = ({ children, onClick }) => {

  return (<Button variant='default' onClick={onClick} classNames={{
    root: classes.rootButton,
    inner: classes.innerButton,
    label: classes.labelButton,
  }}>
    {children}
  </Button>);

};

export const TopSection: FC = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal centered size='1020px' opened={opened} onClose={close} title='New Data'>
        Hello!
      </Modal>
      <Flex p='lg' gap='35px' direction='column' align='center' className={classes.rootTopSectionBox}>
        <Stack gap='31px' align='center'>
          <Text c='white' fw='bold' fz='32px'>AURA</Text>
          <Stack gap='8px'>
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
          <HeaderButton onClick={() => open()}>
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
    </>
  );
};

