import {
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

import documentsImage from '../../assets/images/documents.svg';
import documentHumanImage from '../../assets/images/filesBundle.svg';
import robotImage from '../../assets/images/robot.svg';
import { NewDataModal } from '../../features/NewDataModal';
import { HeaderButton } from './HeaderButton';
import classes from './Layout.module.css';

export const TopSection = () => {

  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

  return (
    <>
      <NewDataModal opened={opened} close={close} />
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
          <HeaderButton onClick={() => navigate('/main/search')}>
            <Image mah='100%' w='125px' maw='100%' src={documentsImage} />
            Search Data
          </HeaderButton>
          <HeaderButton onClick={() => open()}>
            <Image mah='100%' w='125px' maw='100%' src={documentHumanImage} />
            Upload your Data
          </HeaderButton>
          <HeaderButton onClick={() => navigate('/main/bot')}>
            <Image mah='100%' w='125px' maw='100%' src={robotImage} style={{ width: 'none' }} />
            Try our AI Tool
          </HeaderButton>
        </Group>
      </Flex>
    </>
  );
};

