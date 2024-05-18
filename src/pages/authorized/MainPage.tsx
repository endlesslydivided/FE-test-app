import { Button, Group, Image, Stack, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import type { FC, PropsWithChildren } from 'react';

import successGuy from '../../assets/images/successGuy.svg';
import { PageLayout } from '../../common/components/PageLayoute/PageLayout';
const BoldListText: FC<PropsWithChildren> = ({ children: text }) => {
  return (
    <Group>
      <IconCheck size='32px' color='#19AA90' strokeWidth='4px'/>
      <Text fw='bold' fz='18px'>{text}</Text>
    </Group>
  );
};

export const MainPage: FC = () => {

  const leftSection = (
    <Stack gap='16px'>
      <Text c='#6869AC' fw='bold' fz='h1'>Welcome John!</Text>
      <Text fw='bold' fz='h2'>We are so glad to have in Aura.</Text>
      <Text>We have 500+ companies with interviews and data for your investment analysis and research.</Text>
      <Text>You will be able to:</Text>

      <BoldListText>Save companies of your interest and see new entries</BoldListText>
      <BoldListText>Use our AI tool to summarize interviews</BoldListText>
      <BoldListText>Get exclusive data</BoldListText>
      <BoldListText>Common questions</BoldListText>
      <BoldListText>Make reports</BoldListText>
      <Button
        fz='22px'
        fw='bold'
        px='32px'
        c='#3E4551'
        variant='default'
        styles={{ root: { 
      alignSelf: 'start', 
      borderColor: '#787C84' }, 
      label: { padding: '13px 0px' } }}>Let's begin!</Button>
    </Stack>);

  const rightSection = (<Image src={successGuy}/>);
  return (
    <PageLayout 
      leftSection={leftSection}
      rightSection={rightSection}/>
  );
};
